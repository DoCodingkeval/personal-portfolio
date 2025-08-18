import { Html, useProgress } from "@react-three/drei";

export default function Loading() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          color: "white",
          fontSize: "1rem",
          fontWeight: "bold",
          background: "rgba(0,0,0,0.6)",
          padding: "10px 20px",
          borderRadius: "10px",
          whiteSpace: "nowrap",
        }}
      >
        Loading {progress.toFixed(0)}%
      </div>
    </Html>
  );
}
