"use client";

import { Environment, Float } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Core } from './Core';
import { GodRays } from './GodRays';

export function Scene() {
  return (
    <>
      {/* 
        DIVINE LIGHTING 
        - A "God's Eye" setup: Blinding center, soft falloff
      */}
      <ambientLight intensity={2.0} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={5} 
        color="#ffffff" 
      />
      <pointLight position={[-10, -10, -10]} intensity={5} color="#FFEDD5" />

      {/* Environment for reflections on the shiny Core */}
      <Environment preset="studio" />

      {/* Composition - CENTERED (Reset from 1.8 to 0) */}
      <Float 
        position={[0, 0, 0]} 
        speed={2} 
        rotationIntensity={0.2} 
        floatIntensity={0.5} 
        floatingRange={[-0.2, 0.2]}
      >
        <Core />
        <GodRays />
      </Float>

      {/* Post-processing Overload */}
      <EffectComposer>
        <Bloom 
          luminanceThreshold={1} // Only very bright things bloom
          mipmapBlur 
          intensity={1.5} 
          radius={0.6}
        />
        <Vignette eskil={false} offset={0.1} darkness={0.3} />
      </EffectComposer>
    </>
  );
}
