import "server-only";

import nodemailer from "nodemailer";

import { env, hasSmtpConfig } from "@/lib/env";

export type ContactMail = {
  name: string;
  email: string;
  subject: string;
  message: string;
  ipAddress: string;
};

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!hasSmtpConfig()) {
    return null;
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.smtpHost,
      port: env.smtpPort,
      secure: env.smtpSecure,
      auth: {
        user: env.smtpUser,
        pass: env.smtpPass,
      },
    });
  }

  return transporter;
}

export async function sendContactEmail(payload: ContactMail): Promise<void> {
  const mailer = getTransporter();

  if (!mailer) {
    throw new Error("SMTP is not configured");
  }

  const subject = `[Blue Team Cyber] ${payload.subject}`;
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `IP: ${payload.ipAddress}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  await mailer.sendMail({
    from: env.smtpFrom,
    to: env.contactTo,
    replyTo: payload.email,
    subject,
    text,
  });
}
