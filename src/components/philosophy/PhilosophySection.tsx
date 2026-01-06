"use client";

import { useState, useEffect, useCallback } from 'react'
import type { PhilosophySectionProps } from './types'
import { GlassMonolith } from './GlassMonolith'

export function PhilosophySection({ pillars, manifesto }: PhilosophySectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleToggle = useCallback((id: string) => {
    setExpandedId(prev => prev === id ? null : id)
  }, [])

  const handleClickOutside = useCallback(() => {
    setExpandedId(null)
  }, [])

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpandedId(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section className="relative bg-slate-100 dark:bg-slate-900 py-24 lg:py-32 px-6 overflow-hidden">
      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Backdrop overlay when drawer is open */}
      {expandedId && (
        <div 
          className="fixed inset-0 bg-transparent z-10 cursor-pointer"
          onClick={handleClickOutside}
          aria-hidden="true"
        />
      )}

      <div className="relative max-w-6xl mx-auto z-20">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Philosophy
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 dark:text-white tracking-wide">
            The Triptych
          </h2>
        </div>

        {/* The three monoliths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id}
              className={`
                ${index === 0 ? 'md:mt-0' : ''}
                ${index === 1 ? 'md:mt-16' : ''}
                ${index === 2 ? 'md:mt-8' : ''}
              `}
            >
              <GlassMonolith
                pillar={pillar}
                isExpanded={expandedId === pillar.id}
                onToggle={() => handleToggle(pillar.id)}
              />
            </div>
          ))}
        </div>

        {/* Manifesto footer */}
        <div className="mt-20 lg:mt-28 text-center">
          <p className="font-serif italic text-xl md:text-2xl text-slate-600 dark:text-slate-400 opacity-80 max-w-3xl mx-auto leading-relaxed">
            &quot;{manifesto.tagline}&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
