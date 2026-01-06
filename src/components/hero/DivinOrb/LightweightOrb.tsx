"use client";

import { cn } from "@/lib/utils";

export function LightweightOrb({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden w-full h-full", className)}>
      {/* Static Background */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* The Core Gradient - Conic rotation simulating the sphere */}
      <div className="relative w-[60vmin] h-[60vmin] rounded-full blur-3xl opacity-80 animate-spin-slow">
        <div className="absolute inset-0 bg-[conic-gradient(var(--tw-gradient-stops))] from-amber-200 via-sky-200 to-amber-200 dark:from-amber-900 dark:via-sky-900 dark:to-amber-900 opacity-60" />
      </div>

      {/* Center Hotspot (The "White Hole") */}
      <div className="absolute w-[20vmin] h-[20vmin] bg-white dark:bg-sky-100 blur-2xl rounded-full opacity-90 animate-pulse" />
      
      {/* Radial Rays/Glow */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-white/30 to-transparent dark:via-sky-900/30 opacity-40 mix-blend-overlay" />
       
       <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
       `}</style>
    </div>
  );
}
