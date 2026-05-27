"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoPlayer({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [vertical, setVertical] = useState<boolean | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const onMeta = () => setVertical(video.videoHeight > video.videoWidth);
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) onMeta();
    return () => video.removeEventListener("loadedmetadata", onMeta);
  }, []);

  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden bg-black ${
        vertical === null
          ? "aspect-video"
          : vertical
            ? "aspect-[9/16] max-w-[280px] mx-auto"
            : "aspect-video"
      }`}
    >
      <video
        ref={ref}
        src={src}
        controls
        className="w-full h-full"
        preload="metadata"
      >
        Tu navegador no soporta video.
      </video>
    </div>
  );
}
