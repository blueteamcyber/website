import Script from "next/script";

import { siteConfig } from "@/lib/site-config";

export function AnalyticsProvider() {
  if (!siteConfig.analytics.enabled) {
    return null;
  }

  if (siteConfig.analytics.provider === "plausible") {
    return (
      <Script
        defer
        data-domain={new URL(siteConfig.siteUrl).hostname}
        src="https://plausible.io/js/script.js"
      />
    );
  }

  if (siteConfig.analytics.provider === "umami" && siteConfig.analytics.id) {
    return (
      <Script
        defer
        data-website-id={siteConfig.analytics.id}
        src="https://cloud.umami.is/script.js"
      />
    );
  }

  // TODO: add a custom provider adapter when needed.
  return null;
}
