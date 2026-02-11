import "server-only";

function toInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function toBoolean(value: string | undefined, fallback: boolean): boolean {
  if (!value) return fallback;
  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

export const env = {
  smtpHost: process.env.SMTP_HOST ?? "",
  smtpPort: toInt(process.env.SMTP_PORT, 587),
  smtpSecure: toBoolean(process.env.SMTP_SECURE, false),
  smtpUser: process.env.SMTP_USER ?? "",
  smtpPass: process.env.SMTP_PASS ?? "",
  smtpFrom: process.env.SMTP_FROM ?? "",
  contactTo: process.env.CONTACT_TO ?? "",
  contactRateLimitMax: toInt(process.env.CONTACT_RATE_LIMIT_MAX, 5),
  contactRateLimitWindowMs: toInt(process.env.CONTACT_RATE_LIMIT_WINDOW_MS, 60_000),
};

export function hasSmtpConfig(): boolean {
  return Boolean(
    env.smtpHost && env.smtpPort && env.smtpUser && env.smtpPass && env.smtpFrom && env.contactTo,
  );
}
