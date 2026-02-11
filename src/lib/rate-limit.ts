type RateLimitConfig = {
  maxRequests: number;
  windowMs: number;
};

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

type Clock = () => number;

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number;
};

export function createRateLimiter(config: RateLimitConfig, now: Clock = Date.now) {
  const buckets = new Map<string, RateLimitBucket>();

  function check(key: string): RateLimitResult {
    const currentTime = now();
    const existing = buckets.get(key);

    if (!existing || currentTime >= existing.resetAt) {
      const resetAt = currentTime + config.windowMs;
      buckets.set(key, { count: 1, resetAt });
      return {
        allowed: true,
        remaining: Math.max(config.maxRequests - 1, 0),
        retryAfterMs: config.windowMs,
      };
    }

    if (existing.count >= config.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        retryAfterMs: Math.max(existing.resetAt - currentTime, 0),
      };
    }

    existing.count += 1;
    buckets.set(key, existing);

    return {
      allowed: true,
      remaining: Math.max(config.maxRequests - existing.count, 0),
      retryAfterMs: Math.max(existing.resetAt - currentTime, 0),
    };
  }

  return {
    check,
  };
}
