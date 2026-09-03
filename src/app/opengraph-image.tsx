import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "No Fapp — How long can you keep your hands off?";
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
          background: "#641f35",
          color: "#fff7f3",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: "-4px" }}>No Fapp</div>
        <div style={{ color: "#ffb5c5", fontSize: 32, fontWeight: 700, marginTop: 28 }}>
          HOW LONG CAN YOU KEEP YOUR HANDS OFF?
        </div>
      </div>
    ),
    size,
  );
}
