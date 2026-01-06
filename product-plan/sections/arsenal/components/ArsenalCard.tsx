import type { Project } from '../types';
import { cn } from '../../../lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ArsenalCardProps {
  project: Project;
}

export function ArsenalCard({ project }: ArsenalCardProps) {
  // Color Mapping for God Rays and Accents
  // "God Glow" Strategy: Richer colors, deeper shadows, and pulsing energy.
  const colorMap = {
    violet: {
      shadow: 'group-hover:shadow-violet-500/60',
      text: 'group-hover:text-violet-600',
      border: 'group-hover:border-violet-500/50',
      bg: 'bg-violet-500',
      glow: 'bg-violet-600'
    },
    amber: {
      shadow: 'group-hover:shadow-amber-500/60',
      text: 'group-hover:text-amber-600',
      border: 'group-hover:border-amber-500/50',
      bg: 'bg-amber-500',
      glow: 'bg-amber-500'
    },
    emerald: {
      shadow: 'group-hover:shadow-emerald-500/60',
      text: 'group-hover:text-emerald-600',
      border: 'group-hover:border-emerald-500/50',
      bg: 'bg-emerald-500',
      glow: 'bg-emerald-500'
    },
    rose: {
      shadow: 'group-hover:shadow-rose-500/60',
      text: 'group-hover:text-rose-600',
      border: 'group-hover:border-rose-500/50',
      bg: 'bg-rose-500',
      glow: 'bg-rose-500'
    },
    sky: {
      shadow: 'group-hover:shadow-sky-500/60',
      text: 'group-hover:text-sky-600',
      border: 'group-hover:border-sky-500/50',
      bg: 'bg-sky-500',
      glow: 'bg-sky-500'
    },
    indigo: {
      shadow: 'group-hover:shadow-indigo-500/60',
      text: 'group-hover:text-indigo-600',
      border: 'group-hover:border-indigo-500/50',
      bg: 'bg-indigo-500',
      glow: 'bg-indigo-500'
    },
  }[project.color] || {
    shadow: 'group-hover:shadow-sky-500/60',
    text: 'group-hover:text-sky-600',
    border: 'group-hover:border-sky-500/50',
    bg: 'bg-sky-500',
    glow: 'bg-sky-500'
  };

  return (
    <div className={cn(
      "group relative flex flex-col h-full min-h-[320px] p-8",
      "rounded-sm overflow-hidden",
      "transition-all duration-500 ease-out",
      "border border-white/20",
      colorMap.border,
      colorMap.shadow,
      "hover:shadow-2xl hover:-translate-y-1"
    )}>
      
      {/* --- THE GOD RAY (Backlight) --- */}
      <div className={cn(
        "absolute inset-0 -z-20 transition-all duration-1000 ease-in-out",
        "opacity-0 scale-90 blur-3xl",
        "group-hover:opacity-60 group-hover:scale-125 group-hover:animate-pulse",
        colorMap.glow
      )} />

      {/* --- THE FROST LAYER (Idle State) --- */}
      {/* This layer sits ON TOP of the content when idle, blurring it. 
          On hover, it fades away to reveal the clear content. */}
      <div className={cn(
        "absolute inset-0 z-20 bg-stone-900/10 backdrop-blur-md grayscale",
        "transition-all duration-500 ease-out",
        "group-hover:backdrop-blur-none group-hover:grayscale-0 group-hover:bg-transparent group-hover:pointer-events-none"
      )} />

      {/* --- GLASS SURFACE (Always visible base) --- */}
      <div className="absolute inset-0 -z-10 bg-white/5 backdrop-blur-sm border border-white/10" />

      {/* --- CONTENT (Under the frost in idle, clear in hover) --- */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Header: Year & Role */}
        <div className="flex justify-between items-start mb-8 font-mono text-xs tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          <span className="border border-white/20 px-2 py-1 bg-black/20 text-white/80">{project.year}</span>
          <span className="border border-white/20 px-2 py-1 bg-black/20 text-white/80">{project.role}</span>
        </div>

        {/* Title */}
        <div className="mb-4">
          <h3 className={cn(
            "text-4xl font-black tracking-tighter uppercase mb-2",
            "text-slate-800", 
            "transition-colors duration-300",
            colorMap.text
          )}>
            {project.title}
          </h3>
          <div className={cn(
            "h-1 w-12 bg-slate-800 transition-all duration-500",
            "group-hover:w-full",
            colorMap.bg
          )} />
        </div>

        {/* Description */}
        <p className="text-sm font-medium leading-relaxed text-slate-600 mb-auto border-l-2 border-slate-300 pl-4 group-hover:border-slate-800 transition-colors">
          {project.description}
        </p>

        {/* Footer: Tech Stack & Action */}
        <div className="mt-8 pt-6 border-t border-slate-200/20 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="text-[10px] uppercase tracking-widest font-bold text-slate-500 group-hover:text-slate-800 transition-colors">
                {tech}
              </span>
            ))}
          </div>
          
          <div className={cn(
            "w-10 h-10 flex items-center justify-center border border-slate-300",
            "bg-transparent text-slate-400",
            "group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800",
            "transition-all duration-300"
          )}>
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      {/* Decorative Corner Accents */}
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={cn("w-2 h-2", colorMap.bg)} />
      </div>
      <div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={cn("w-2 h-2", colorMap.bg)} />
      </div>

    </div>
  );
}
