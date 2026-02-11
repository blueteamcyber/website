import { describe, expect, it } from "vitest";

import { validateContactInput } from "@/lib/validation";

describe("validateContactInput", () => {
  it("accepts a valid payload", () => {
    const result = validateContactInput({
      name: "Jamie Rivera",
      email: "jamie@example.com",
      subject: "Resilience planning",
      message: "We need help building a practical roadmap.",
      website: "",
    });

    expect(result.ok).toBe(true);
  });

  it("rejects invalid email and missing fields", () => {
    const result = validateContactInput({
      name: "",
      email: "not-an-email",
      subject: "",
      message: "short",
      website: "",
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.name).toContain("Name is required");
      expect(result.errors.email).toContain("Enter a valid email address");
      expect(result.errors.subject).toContain("Subject is required");
      expect(result.errors.message).toContain("Message must be at least 10 characters");
    }
  });

  it("flags honeypot submissions", () => {
    const result = validateContactInput({
      name: "Jamie",
      email: "jamie@example.com",
      subject: "Question",
      message: "This should be rejected by honeypot.",
      website: "https://spam.example",
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.isSpam).toBe(true);
    }
  });
});
