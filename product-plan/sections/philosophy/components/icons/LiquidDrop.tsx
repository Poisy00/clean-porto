interface LiquidDropProps {
  className?: string
  isHovered?: boolean
}

export function LiquidDrop({ className = '', isHovered = false }: LiquidDropProps) {
  return (
    <div className={`relative w-16 h-16 flex items-center justify-center ${className}`}>
      {/* Ripple rings */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-2 rounded-full border transition-all duration-500 ${
            isHovered 
              ? 'border-amber-400/60 motion-safe:animate-[ripple_1.5s_ease-out_infinite]' 
              : 'border-slate-400/20 dark:border-white/10 motion-safe:animate-[ripple_3s_ease-out_infinite]'
          }`}
        />
        <div 
          className={`absolute inset-2 rounded-full border transition-all duration-500 ${
            isHovered 
              ? 'border-amber-400/40 motion-safe:animate-[ripple_1.5s_ease-out_infinite_0.5s]' 
              : 'border-slate-400/15 dark:border-white/8 motion-safe:animate-[ripple_3s_ease-out_infinite_1s]'
          }`}
        />
        <div 
          className={`absolute inset-2 rounded-full border transition-all duration-500 ${
            isHovered 
              ? 'border-amber-400/20 motion-safe:animate-[ripple_1.5s_ease-out_infinite_1s]' 
              : 'border-slate-400/10 dark:border-white/5 motion-safe:animate-[ripple_3s_ease-out_infinite_2s]'
          }`}
        />
      </div>

      {/* Central drop */}
      <svg 
        viewBox="0 0 24 24" 
        className={`w-8 h-8 transition-all duration-500 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      >
        <defs>
          <linearGradient id="dropGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop 
              offset="0%" 
              style={{ stopColor: isHovered ? '#fcd34d' : '#94a3b8', stopOpacity: isHovered ? 0.9 : 0.6 }}
            />
            <stop 
              offset="100%" 
              style={{ stopColor: isHovered ? '#f59e0b' : '#64748b', stopOpacity: isHovered ? 0.7 : 0.3 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M12 2C12 2 6 10 6 14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14C18 10 12 2 12 2Z"
          fill="url(#dropGradient)"
          className="transition-all duration-500"
        />
        <ellipse
          cx="10"
          cy="12"
          rx="1.5"
          ry="2"
          className={`transition-all duration-500 ${isHovered ? 'fill-white/60' : 'fill-white/30'}`}
        />
      </svg>

      <style>{`
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
