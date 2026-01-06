"use client";

import { useState } from 'react'
import type { GlassMonolithProps, PillarIconType } from './types'
import { WireframeCube, LiquidDrop, ArrowTarget } from './icons'

function PillarIcon({ type, isHovered }: { type: PillarIconType; isHovered: boolean }) {
  switch (type) {
    case 'wireframe-cube':
      return <WireframeCube isHovered={isHovered} />
    case 'liquid-drop':
      return <LiquidDrop isHovered={isHovered} />
    case 'arrow-target':
      return <ArrowTarget isHovered={isHovered} />
    default:
      return null
  }
}

export function GlassMonolith({ pillar, isExpanded = false, onToggle }: GlassMonolithProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        relative flex flex-col min-h-[420px] md:min-h-[500px] p-8 cursor-pointer
        backdrop-blur-xl bg-white/8 dark:bg-white/5
        border border-white/20 border-t-white/30
        rounded-2xl overflow-hidden
        transition-all duration-500 ease-out
        ${isHovered ? '-translate-y-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.35)] border-white/40 bg-white/12 dark:bg-white/8' : 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]'}
        ${isExpanded ? 'ring-1 ring-white/30' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onToggle?.()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle?.()
        }
      }}
      aria-expanded={isExpanded}
    >
      {/* Number badge */}
      <div className="absolute top-6 right-6">
        <span className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          {pillar.number}
        </span>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        {/* Icon */}
        <div className="mb-8">
          <PillarIcon type={pillar.iconType} isHovered={isHovered} />
        </div>

        {/* Label */}
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 mb-2">
          {pillar.label}
        </span>

        {/* Category */}
        <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400/60 dark:text-slate-500/60 mb-4">
          {pillar.category}
        </span>

        {/* Headline */}
        <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-slate-800 dark:text-white leading-tight">
          {pillar.headline}
        </h3>
      </div>

      {/* Drawer - slides up from bottom */}
      <div 
        className={`
          absolute bottom-0 left-0 right-0
          bg-slate-900/90 backdrop-blur-md
          border-t border-white/10
          transition-all duration-300 ease-out
          ${isExpanded ? 'max-h-[200px] py-6 px-6' : 'max-h-0 py-0 px-6'}
          overflow-hidden
        `}
      >
        <p className="font-sans text-sm leading-relaxed text-slate-300">
          {pillar.description}
        </p>
      </div>

      {/* Subtle gradient overlay at bottom when closed */}
      {!isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
      )}
    </div>
  )
}
