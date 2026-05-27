"use client";

import { useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { Group } from "three";

export default function Scene3D() {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF("/models/Mech.glb");

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.6}
      floatIntensity={0.5}
    >
      <group ref={groupRef} scale={1.2} position={[0, 0, 0]}>
        <primitive object={scene} />
      </group>
    </Float>
  );
}
