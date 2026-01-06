"use client";

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

interface AppShellProps {
  children: React.ReactNode
  navigationItems: NavItem[]
  ctaLabel?: string
  ctaHref?: string
  onNavigate?: (href: string) => void
}

export function AppShell({
  children,
  navigationItems,
  ctaLabel = 'Book a Consultation',
  ctaHref = '#consultation',
  onNavigate,
}: AppShellProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href)
    } else {
      // Default scroll behavior for anchors
      if (href.startsWith('#')) {
         const element = document.querySelector(href)
         if (element) {
           element.scrollIntoView({ behavior: 'smooth' })
         }
      } else {
          // For pages, we might want real navigation, but for now we assume anchors or simple links
          window.location.href = href;
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg shadow-sm shadow-slate-200/50 dark:shadow-slate-900/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-16">
            {/* Wordmark */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#')
              }}
              className="font-sans text-xl font-semibold tracking-tight text-slate-900 dark:text-white transition-colors hover:text-sky-600 dark:hover:text-sky-400"
            >
              POISY
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-8">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`relative text-sm font-medium transition-colors ${
                    item.isActive
                      ? 'text-sky-600 dark:text-sky-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-sky-500" />
                  )}
                </a>
              ))}

              {/* CTA Button */}
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <a
                  href={ctaHref}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(ctaHref)
                }}
                className="rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                {ctaLabel}
              </a>
              </div>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              isMobileMenuOpen ? 'max-h-64 pb-6' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`text-base font-medium transition-colors ${
                    item.isActive
                      ? 'text-sky-600 dark:text-sky-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={ctaHref}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(ctaHref)
                }}
                className="mt-2 rounded-full bg-amber-500 px-5 py-3 text-center text-base font-medium text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  )
}
