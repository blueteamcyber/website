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
            "radial-gradient(circle at 18% 18%, rgba(20,89,126,0.45), transparent 34%), radial-gradient(circle at 84% 12%, rgba(29,106,144,0.34), transparent 30%), linear-gradient(180deg, #000000 0%, #04080b 100%)",
          color: "#dbe7ed",
          padding: "68px 72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#70abc7" }}>BLUE TEAM CYBER</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 920 }}>
          <div style={{ fontSize: 72, lineHeight: 1.06, fontWeight: 700 }}>{siteConfig.tagline}</div>
          <div style={{ fontSize: 34, color: "#9cb2bd" }}>{siteConfig.subTagline}</div>
        </div>
      </div>
    ),
    size,
  );
}
