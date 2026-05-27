"use client";

import "@google/model-viewer";

export default function Scene3D() {
  return (
    <model-viewer
      src="/models/Mech.glb"
      alt="Mech modelo 3D"
      auto-rotate
      camera-controls
      disable-zoom
      interaction-prompt="none"
      exposure="1.2"
      shadow-intensity="0.5"
      tone-mapping="neutral"
      className="w-full h-full"
    />
  );
}
