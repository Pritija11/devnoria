import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Devnoria — The Internal Developer Platform Engineers Open";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 20% 20%, rgba(109,90,239,0.14), transparent 55%), radial-gradient(circle at 85% 80%, rgba(224,138,26,0.10), transparent 55%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={120}
          height={120}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 28,
            fontSize: 58,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#15131f",
          }}
        >
          Devnoria
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 16,
            fontSize: 24,
            color: "#5c5a70",
          }}
        >
          The internal developer platform engineers open
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 6,
            background: "#6d5aef",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

export const dynamic = "force-static";
