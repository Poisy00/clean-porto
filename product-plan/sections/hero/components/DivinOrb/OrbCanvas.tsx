import { Component, Suspense, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { NoToneMapping } from 'three';
import { Scene } from './Scene';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          <span className="sr-only">3D Error</span>
        </div>
      );
    }
    return this.props.children;
  }
}

export interface OrbCanvasProps {
  className?: string;
}

export function OrbCanvas({ className }: OrbCanvasProps) {
  return (
    <div className={className}>
      <ErrorBoundary>
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 45 }} 
          gl={{ 
            antialias: true, 
            alpha: true,
            toneMapping: NoToneMapping 
          }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
             <Scene />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
