"use server";

import { headers } from "next/headers";

import { env } from "@/lib/env";
import { sendContactEmail } from "@/lib/mailer";
import { createRateLimiter } from "@/lib/rate-limit";
import { validateContactInput } from "@/lib/validation";

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

const limiter = createRateLimiter({
  maxRequests: env.contactRateLimitMax,
  windowMs: env.contactRateLimitWindowMs,
});

function getClientIp(forwardedHeader: string | null, realIpHeader: string | null): string {
  const forwarded = forwardedHeader?.split(",")[0]?.trim();
  const candidate = forwarded || realIpHeader?.trim();
  return candidate && candidate.length > 0 ? candidate : "unknown";
}

export const initialContactState: ContactActionState = {
  status: "idle",
  message: "",
};

export async function submitContactForm(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const headerList = await headers();
  const ipAddress = getClientIp(headerList.get("x-forwarded-for"), headerList.get("x-real-ip"));
  const limit = limiter.check(ipAddress);

  if (!limit.allowed) {
    return {
      status: "error",
      message: "Too many requests. Please wait a minute and try again.",
    };
  }

  const validation = validateContactInput({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!validation.ok) {
    if (validation.isSpam) {
      return {
        status: "success",
        message: "Thanks for reaching out. We received your message.",
      };
    }

    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors: {
        name: validation.errors.name,
        email: validation.errors.email,
        subject: validation.errors.subject,
        message: validation.errors.message,
      },
    };
  }

  try {
    await sendContactEmail({
      ...validation.data,
      ipAddress,
    });
  } catch {
    return {
      status: "error",
      message: "Message could not be delivered right now. Please try again shortly.",
    };
  }

  return {
    status: "success",
    message: "Thanks for reaching out. We received your message.",
  };
}
