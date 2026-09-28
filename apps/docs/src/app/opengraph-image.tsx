import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#09090B",
          padding: "96px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: 4,
            color: "#71717a",
            marginBottom: 24,
          }}
        >
          ▲ 8,848 M · MINIMAL · PRECISE · QUIET · TECHNICAL
        </div>
        <div style={{ display: "flex", fontSize: 108, fontWeight: 800, color: "#ffffff" }}>
          8848&nbsp;UI
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#7aa2ff", marginTop: 16 }}>
          Design systems, built for the summit.
        </div>
      </div>
    ),
    { ...size }
  );
}
