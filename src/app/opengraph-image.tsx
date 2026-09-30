import { ImageResponse } from "next/og";

export const alt = "Noureddine Semahi — Validation & QA Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori has no OKLCH support, so these are the sRGB equivalents of the
// --bg, --text, --text-2 and --accent tokens in globals.css.
const BG = "#f6fbfc";
const TEXT = "#081416";
const TEXT_2 = "#485659";
const ACCENT = "#0a6b78";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "72px 88px",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontWeight: 600, color: TEXT }}>
          Noureddine Semahi
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 88,
            lineHeight: 1.04,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: TEXT,
            maxWidth: 980,
          }}
        >
          I find where complex systems fail, then build the fix.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", width: 72, height: 4, background: ACCENT }} />
          <div style={{ display: "flex", fontSize: 30, color: TEXT_2 }}>
            Validation &amp; QA Engineer · Austin, TX · Open to remote
          </div>
        </div>
      </div>
    ),
    size,
  );
}
