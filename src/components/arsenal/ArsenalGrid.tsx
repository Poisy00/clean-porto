import { Project } from '../../types';
import { ArsenalCard } from './ArsenalCard';

interface ArsenalGridProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
}

export function ArsenalGrid({ 
  projects, 
  title = "DIVINE ARCHITECTURE", 
  subtitle = "REALM STATUS: ASCENDANT" 
}: ArsenalGridProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      {/* Angelic Header */}
      <div className="mb-32 relative flex flex-col items-center text-center">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[150%] bg-sky-200/20 dark:bg-indigo-900/20 blur-[100px] -z-10 rounded-full opacity-50 pointer-events-none" />

        {/* Decorative Vertical Line */}
        <div className="h-24 w-px bg-gradient-to-b from-transparent via-slate-400/50 dark:via-slate-500/50 to-transparent mb-8" />

        <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 tracking-[0.4em] uppercase mb-6 opacity-80 mix-blend-plus-lighter">
          {subtitle}
        </span>
        
        <h2 className="text-5xl md:text-8xl font-light font-heading text-slate-900 dark:text-slate-100 tracking-tighter uppercase leading-[0.9] drop-shadow-lg">
          {title}
        </h2>
        
        {/* Subtle Underline/Separator */}
        <div className="mt-12 w-24 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
      </div>

      {/* Suspended Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className={`
              transition-all duration-700
              ${idx % 3 === 1 ? 'lg:translate-y-24' : ''}
              ${idx % 3 === 2 ? 'lg:translate-y-48' : ''}
            `}
          >
            <ArsenalCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
