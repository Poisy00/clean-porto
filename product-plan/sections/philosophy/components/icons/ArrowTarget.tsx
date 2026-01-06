interface ArrowTargetProps {
  className?: string
  isHovered?: boolean
}

export function ArrowTarget({ className = '', isHovered = false }: ArrowTargetProps) {
  return (
    <div className={`relative w-16 h-16 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Target rings */}
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          className={`transition-all duration-500 ${
            isHovered ? 'stroke-emerald-400/60' : 'stroke-slate-400/30 dark:stroke-white/20'
          }`}
          strokeWidth="1"
        />
        <circle
          cx="32"
          cy="32"
          r="20"
          fill="none"
          className={`transition-all duration-500 ${
            isHovered ? 'stroke-emerald-400/50' : 'stroke-slate-400/25 dark:stroke-white/15'
          }`}
          strokeWidth="1"
        />
        <circle
          cx="32"
          cy="32"
          r="12"
          fill="none"
          className={`transition-all duration-500 ${
            isHovered ? 'stroke-emerald-400/70' : 'stroke-slate-400/35 dark:stroke-white/25'
          }`}
          strokeWidth="1.5"
        />
        {/* Bullseye */}
        <circle
          cx="32"
          cy="32"
          r="4"
          className={`transition-all duration-500 ${
            isHovered ? 'fill-emerald-400' : 'fill-slate-400/50 dark:fill-white/30'
          }`}
        />

        {/* Arrow */}
        <g 
          className={`transition-all duration-700 ease-out ${
            isHovered ? 'motion-safe:animate-[pierce_2s_ease-out_infinite]' : ''
          }`}
          style={{ 
            transform: isHovered ? 'translate(0, 0)' : 'translate(-8px, -8px)',
            opacity: isHovered ? 1 : 0.6
          }}
        >
          <line
            x1="8"
            y1="8"
            x2="28"
            y2="28"
            className={`transition-all duration-500 ${
              isHovered ? 'stroke-emerald-300' : 'stroke-slate-500 dark:stroke-white/50'
            }`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <polygon
            points="32,32 24,28 28,24"
            className={`transition-all duration-500 ${
              isHovered ? 'fill-emerald-300' : 'fill-slate-500 dark:fill-white/50'
            }`}
          />
          <line
            x1="8"
            y1="8"
            x2="12"
            y2="4"
            className={`transition-all duration-500 ${
              isHovered ? 'stroke-emerald-400/60' : 'stroke-slate-400/40 dark:stroke-white/30'
            }`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="8"
            y1="8"
            x2="4"
            y2="12"
            className={`transition-all duration-500 ${
              isHovered ? 'stroke-emerald-400/60' : 'stroke-slate-400/40 dark:stroke-white/30'
            }`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </svg>

      <style>{`
        @keyframes pierce {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-4px, -4px); }
        }
      `}</style>
    </div>
  )
}
