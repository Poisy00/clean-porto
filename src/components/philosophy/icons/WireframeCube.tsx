interface WireframeCubeProps {
  className?: string
  isHovered?: boolean
}

export function WireframeCube({ className = '', isHovered = false }: WireframeCubeProps) {
  return (
    <div 
      className={`relative w-16 h-16 ${className}`} 
      style={{ perspective: '200px' }}
    >
      <div
        className={`w-full h-full transition-all duration-500 ${
          isHovered ? 'motion-safe:animate-[cubeSpinFast_8s_linear_infinite]' : 'motion-safe:animate-[cubeSpin_20s_linear_infinite]'
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 border transition-colors duration-500 ${
            isHovered ? 'border-sky-400/80' : 'border-slate-400/40 dark:border-white/30'
          }`}
          style={{ transform: 'translateZ(32px)' }}
        />
        {/* Back */}
        <div
          className={`absolute inset-0 border transition-colors duration-500 ${
            isHovered ? 'border-sky-400/50' : 'border-slate-400/25 dark:border-white/20'
          }`}
          style={{ transform: 'translateZ(-32px)' }}
        />
        {/* Left */}
        <div
          className={`absolute inset-0 border transition-colors duration-500 ${
            isHovered ? 'border-sky-400/60' : 'border-slate-400/30 dark:border-white/25'
          }`}
          style={{ transform: 'rotateY(-90deg) translateZ(32px)' }}
        />
        {/* Right */}
        <div
          className={`absolute inset-0 border transition-colors duration-500 ${
            isHovered ? 'border-sky-400/60' : 'border-slate-400/30 dark:border-white/25'
          }`}
          style={{ transform: 'rotateY(90deg) translateZ(32px)' }}
        />
        {/* Top */}
        <div
          className={`absolute inset-0 border transition-colors duration-500 ${
            isHovered ? 'border-sky-400/70' : 'border-slate-400/35 dark:border-white/25'
          }`}
          style={{ transform: 'rotateX(90deg) translateZ(32px)' }}
        />
        {/* Bottom */}
        <div
          className={`absolute inset-0 border transition-colors duration-500 ${
            isHovered ? 'border-sky-400/50' : 'border-slate-400/25 dark:border-white/20'
          }`}
          style={{ transform: 'rotateX(-90deg) translateZ(32px)' }}
        />
      </div>

      <style>{`
        @keyframes cubeSpin {
          from { transform: rotateX(-15deg) rotateY(0deg); }
          to { transform: rotateX(-15deg) rotateY(360deg); }
        }
        @keyframes cubeSpinFast {
          from { transform: rotateX(-20deg) rotateY(0deg); }
          to { transform: rotateX(-20deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  )
}
