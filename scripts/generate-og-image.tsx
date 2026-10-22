import { ImageResponse } from "next/og";
import { writeFile } from "node:fs/promises";
import { siteConfig } from "../src/lib/site";

const image = new ImageResponse(
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "72px",
      background: "#0a0a0a",
      color: "#fafafa",
      fontFamily: "Arial",
    }}
  >
    <div
      style={{
        display: "flex",
        fontSize: 24,
        color: "#f59e0b",
        letterSpacing: 2,
      }}
    >
      SOFTWARE ENGINEERING
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.15,
          maxWidth: 1000,
        }}
      >
        {siteConfig.name}
      </div>

      <div
        style={{
          fontSize: 32,
          lineHeight: 1.4,
          color: "#d4d4d4",
          maxWidth: 900,
        }}
      >
        Backend platforms, connected-device systems, and digital products.
      </div>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 22,
        color: "#a3a3a3",
      }}
    >
      <span>Portfolio · Projects · Writing</span>
      <span>maminarghavani.ir</span>
    </div>
  </div>,
  { width: 1200, height: 630 },
);

async function main() {
  const png = Buffer.from(await image.arrayBuffer());

  await writeFile("public/opengraph-image.png", png);

  console.log("Generated public/opengraph-image.png");
}

main().catch((error: unknown) => {
  console.error("Failed to generate Open Graph image:", error);
  process.exitCode = 1;
});
