import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(120, "Name is too long")
    .refine((value) => !/[\r\n]/.test(value), "Name contains invalid characters"),
  email: z.email("Enter a valid email address").max(255, "Email is too long"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(160, "Subject is too long")
    .refine((value) => !/[\r\n]/.test(value), "Subject contains invalid characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(4000, "Message is too long"),
  website: z.string().optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

type ValidationErrors = Partial<Record<keyof ContactInput, string[]>>;

export type ContactValidationResult =
  | { ok: true; data: ContactInput }
  | { ok: false; errors: ValidationErrors; isSpam: boolean };

export function validateContactInput(payload: Record<string, unknown>): ContactValidationResult {
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten().fieldErrors as ValidationErrors,
      isSpam: false,
    };
  }

  if (parsed.data.website.trim().length > 0) {
    return {
      ok: false,
      errors: {},
      isSpam: true,
    };
  }

  return {
    ok: true,
    data: parsed.data,
  };
}
