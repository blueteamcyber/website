import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 15% 20%, rgba(79,124,255,0.4), transparent 35%), radial-gradient(circle at 85% 10%, rgba(122,98,255,0.4), transparent 32%), linear-gradient(180deg, #060b1a 0%, #08122b 100%)",
          color: "#e8ecff",
          padding: "68px 72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#88a5ff" }}>BLUE TEAM CYBER</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 920 }}>
          <div style={{ fontSize: 72, lineHeight: 1.06, fontWeight: 700 }}>{siteConfig.tagline}</div>
          <div style={{ fontSize: 34, color: "#c4cef6" }}>{siteConfig.subTagline}</div>
        </div>
      </div>
    ),
    size,
  );
}
