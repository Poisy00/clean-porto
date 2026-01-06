import { Project } from '../../types';
import { ArsenalCard } from './ArsenalCard';

interface ArsenalGridProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
}

export function ArsenalGrid({ 
  projects, 
  title = "INDUSTRIAL PRECISION", 
  subtitle = "SYSTEM_STATUS: OPERATIONAL" 
}: ArsenalGridProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      {/* Industrial Header */}
      <div className="mb-32">
        <div className="flex flex-col border-l-4 border-slate-900 pl-8 py-2">
          <span className="font-mono text-xs text-slate-500 tracking-[0.3em] uppercase mb-4 block">
            {subtitle}
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
            {title}
          </h2>
        </div>
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
