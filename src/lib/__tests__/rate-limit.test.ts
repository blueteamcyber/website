import { describe, expect, it } from "vitest";

import { createRateLimiter } from "@/lib/rate-limit";

describe("createRateLimiter", () => {
  it("allows requests until the limit is reached", () => {
    const limiter = createRateLimiter({ maxRequests: 2, windowMs: 60_000 }, () => 1_000);

    expect(limiter.check("1.2.3.4").allowed).toBe(true);
    expect(limiter.check("1.2.3.4").allowed).toBe(true);

    const blocked = limiter.check("1.2.3.4");
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterMs).toBeGreaterThan(0);
  });

  it("resets the bucket after the time window", () => {
    let now = 0;
    const limiter = createRateLimiter({ maxRequests: 1, windowMs: 10_000 }, () => now);

    expect(limiter.check("client-a").allowed).toBe(true);
    expect(limiter.check("client-a").allowed).toBe(false);

    now = 11_000;
    expect(limiter.check("client-a").allowed).toBe(true);
  });
});
