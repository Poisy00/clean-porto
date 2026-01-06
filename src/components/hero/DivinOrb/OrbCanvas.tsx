"use client";

import { LightweightOrb } from './LightweightOrb';

export interface OrbCanvasProps {
  className?: string;
}

export function OrbCanvas({ className }: OrbCanvasProps) {
  return (
    <div className={className}>
      <LightweightOrb />
    </div>
  );
}
