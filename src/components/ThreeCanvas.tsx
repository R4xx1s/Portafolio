"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

export default function ThreeCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[220px]" />;
  }

  return (
    <div className="w-full h-[220px]">
      <Scene3D />
    </div>
  );
}
