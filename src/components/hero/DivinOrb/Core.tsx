"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { Mesh } from 'three';

export function Core() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // undulating organic motion
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.y = t * 0.1;
      meshRef.current.rotation.z = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* High resolution hyper-sphere */}
      <icosahedronGeometry args={[1.2, 12]} />
      
      {/* 
        BIBLICALLY ACCURATE MATERIALS 
        - MeshTransmissionMaterial for liquid glass effect
        - High chromatic aberration for divine splitting of light
        - Distortion for the "living" feel
      */}
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={1024}
        transmission={1}
        roughness={0.0}
        thickness={5.0}
        ior={1.5}
        chromaticAberration={1.0}
        anisotropy={1.0}
        distortion={0.6}
        distortionScale={0.5}
        temporalDistortion={0.1}
        attenuationDistance={0.5}
        attenuationColor="#ffffff"
        color="#E2E8F0"
        toneMapped={false}
      />
    </mesh>
  );
}
