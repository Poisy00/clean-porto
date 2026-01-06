import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
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
  const rays = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
    angle: (Math.PI * 2 * i) / 12,
    scale: 3 + Math.random() * 2, // Long, grand beams
    width: 0.5 + Math.random() * 0.3, // Wide, soft beams
    speed: 0.05 + Math.random() * 0.05,
    offset: Math.random() * 100,
  })), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const t = state.clock.getElapsedTime();
    
    // Slow, majestic rotation of the entire halo
    groupRef.current.rotation.z = t * 0.02;

    // Update individual ray uniforms
    groupRef.current.children.forEach((child: any) => {
      if (child.material && child.material.uniforms) {
        child.material.uniforms.uTime.value = t;
      }
    });
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
