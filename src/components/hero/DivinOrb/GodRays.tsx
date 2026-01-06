"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Group, DoubleSide, AdditiveBlending, Color } from 'three';

// Divine Rays Shader
// Creates a soft, volumetric beam that fades out at the edges and tip
const RayShader = {
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    uniform float uTime;
    uniform float uNoiseOffset;
    varying vec2 vUv;

    void main() {
      // Horizontal fade (center beam)
      float beamWidth = abs(vUv.x - 0.5) * 2.0;
      float alpha = smoothstep(1.0, 0.0, beamWidth);
      
      // Vertical fade (fade out at top)
      alpha *= smoothstep(1.0, 0.2, vUv.y); // Fade out at tip
      alpha *= smoothstep(0.0, 0.1, vUv.y); // Soft start at base
      
      // Add subtle shimmering
      float shimmer = sin(vUv.y * 10.0 - uTime * 2.0 + uNoiseOffset) * 0.1 + 0.9;
      alpha *= shimmer;

      // Color intensity gradient
      vec3 finalColor = uColor + (1.0 - vUv.y) * 0.5; // Brighter at base

      gl_FragColor = vec4(finalColor, alpha * 0.4); // Base opacity
    }
  `
};

export function GodRays() {
  const groupRef = useRef<Group>(null);
  
  // Create 12 distinct "Divine" beams
  // Use a seeded random or static values to avoid impure render warnings
  const rays = useMemo(() => Array.from({ length: 12 }).map((_, i) => {
    const seed = i * 13.37;
    const pseudoRandom = (offset: number) => {
      const x = Math.sin(seed + offset) * 10000;
      return x - Math.floor(x);
    };

    return {
      angle: (Math.PI * 2 * i) / 12,
      scale: 3 + pseudoRandom(1) * 2, // Long, grand beams
      width: 0.5 + pseudoRandom(2) * 0.3, // Wide, soft beams
      speed: 0.05 + pseudoRandom(3) * 0.05,
      offset: pseudoRandom(4) * 100,
    };
  }), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const t = state.clock.getElapsedTime();
    
    // Throttle updates to every 2nd frame for better performance
    const frameIndex = Math.floor(t * 60);
    if (frameIndex % 2 !== 0) return;
    
    // Slow, majestic rotation of the entire halo
    if (groupRef.current) {
        groupRef.current.rotation.z = t * 0.02;

        // Update individual ray uniforms
        groupRef.current.children.forEach((child) => {
            if (child instanceof THREE.Mesh && child.material && 'uniforms' in child.material) {
                (child.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
            }
        });
    }
  });

  return (
    <group ref={groupRef}>
      {rays.map((ray, i) => (
        <mesh 
          key={i} 
          rotation={[0, 0, ray.angle]}
          position={[0, 0, -0.1]} // Slightly behind the core
        >
          {/* Plane anchored at bottom via geometry translation if needed, 
              but we can just offset position or use UVs carefully. 
              Here we simply scale a centered plane and shift it up. */}
          <planeGeometry args={[ray.width, ray.scale]} />
          <shaderMaterial
            args={[RayShader]}
            transparent
            depthWrite={false}
            blending={AdditiveBlending}
            side={DoubleSide}
            uniforms={{
              uColor: { value: new Color("#FFD700") }, // Divine Gold
              uTime: { value: 0 },
              uNoiseOffset: { value: ray.offset }
            }}
          />
        </mesh>
      ))}

      {/* Central "Holy Light" Halo - Soft glow behind the orb */}
      <mesh position={[0, 0, -0.2]}>
        <circleGeometry args={[2, 32]} />
        <meshBasicMaterial
          color="#FDB813"
          transparent
          opacity={0.2}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
