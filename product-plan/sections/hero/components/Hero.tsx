import type { HeroProps } from '../types'
import { ArrowRight } from 'lucide-react'
import { OrbCanvas as DivinOrb } from './DivinOrb/OrbCanvas'

export function Hero({ content, onCtaClick }: HeroProps) {
  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center justify-center selection:bg-sky-200 selection:text-slate-900"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Inter+Tight:wght@500;600&display=swap');
        
        .bg-radial-gradient {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }

        /* REVEAL ANIMATIONS */
        @keyframes reveal-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* SYNCED LIGHT REFLECTIONS 
           Timing matches DivinOrb's core pulse (4s cycle)
        */
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255,251,235,0.3), 0 0 40px rgba(255,251,235,0.1); }
          50% { text-shadow: 0 0 50px rgba(255,251,235,0.7), 0 0 80px rgba(255,251,235,0.3); }
        }
        
        @keyframes subhead-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,251,235,0.1); }
          50% { text-shadow: 0 0 25px rgba(255,251,235,0.3); }
        }

        @keyframes orb-pulse-reflection {
          0%, 100% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        .animate-reveal-up {
          animation: reveal-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0; /* Start hidden */
        }

        .animate-text-glow {
          animation: text-glow 4s ease-in-out infinite;
        }

        .animate-subhead-glow {
          animation: subhead-glow 4s ease-in-out infinite;
          animation-delay: 0.5s; /* Slight organic lag */
        }
        
        .animate-orb-pulse-reflection {
          animation: orb-pulse-reflection 4s ease-in-out infinite;
        }
      `}</style>

      {/* ==========================================
          ATMOSPHERE & LIGHTING
          ========================================== */}
      
      {/* 1. Volumetric Bloom (Center Glow) - The "Embrace" */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-radial-gradient from-stone-200/50 via-stone-50/20 to-transparent dark:from-stone-800/40 dark:via-slate-900/10 dark:to-transparent blur-3xl opacity-80" />
      </div>

      {/* 2. Tyndall Rays (Diagonal Light Beams) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ray 1 */}
        <div className="absolute -top-[20%] left-[20%] w-[40vw] h-[150vh] bg-gradient-to-b from-white/40 via-white/5 to-transparent dark:from-sky-200/10 dark:via-sky-400/5 dark:to-transparent rotate-12 blur-3xl mix-blend-overlay opacity-50 origin-top" />
        {/* Ray 2 */}
        <div className="absolute -top-[20%] right-[30%] w-[30vw] h-[140vh] bg-gradient-to-b from-amber-100/30 via-sky-100/5 to-transparent dark:from-amber-100/5 dark:via-sky-900/5 dark:to-transparent -rotate-12 blur-3xl mix-blend-overlay opacity-50 origin-top" />
      </div>

      {/* ==========================================
          THE WHITE HOLE (R3F Scene)
          ========================================== */}
      <div className="absolute inset-0 z-0">
        <DivinOrb className="w-full h-full" />
      </div>

      {/* ==========================================
          CONTENT - THE ECLIPSE INTERFACE
          ========================================== */}
      <div className="relative z-10 max-w-5xl px-6 mx-auto flex flex-col items-center text-center">
        
        {/* Glass Panel "Cockpit" Container */}
        <div className="
          relative flex flex-col items-center
          p-8 md:p-12 lg:p-16
          rounded-[2.5rem]
          bg-gradient-to-br from-sky-50/50 via-white/40 to-amber-50/50 dark:from-sky-950/30 dark:via-slate-950/30 dark:to-amber-950/30
          backdrop-blur-xl
          border border-white/20 dark:border-white/5
          shadow-xl shadow-black/5
          transition-all duration-700
        ">
          
          {/* Headline - DELAYED ENTRANCE (2s) */}
          <h1 
            className="font-['Inter_Tight'] font-medium tracking-tight text-slate-900 dark:text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 drop-shadow-sm leading-[1.1] md:leading-[1.1] animate-reveal-up"
            style={{ animationDelay: '2.0s' }}
          >
            <span className="animate-text-glow inline-block">
              {content.headline}
            </span>
          </h1>

          {/* Subhead - DELAYED ENTRANCE (2.5s) */}
          <p 
            className="font-sans text-lg sm:text-xl md:text-2xl text-slate-800 dark:text-slate-200 max-w-2xl mb-10 leading-relaxed font-normal tracking-wide mix-blend-multiply dark:mix-blend-normal animate-reveal-up"
            style={{ animationDelay: '2.5s' }}
          >
            <span className="animate-subhead-glow inline-block">
              {content.subhead}
            </span>
          </p>

          {/* CTA Button - DELAYED ENTRANCE (3.0s) */}
          <div 
            className="animate-reveal-up"
            style={{ animationDelay: '3.0s' }}
          >
            <button
              onClick={() => onCtaClick?.(content.ctaTarget)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full 
                bg-slate-900/5 dark:bg-white/10 
                backdrop-blur-md border border-slate-900/10 dark:border-white/20
                shadow-lg shadow-sky-900/5
                hover:bg-slate-900/10 dark:hover:bg-white/20
                hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-500 ease-out"
            >
              <span className="relative font-medium text-slate-900 dark:text-white tracking-wide text-lg">
                {content.ctaLabel}
              </span>
              
              <ArrowRight className="relative w-5 h-5 text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
