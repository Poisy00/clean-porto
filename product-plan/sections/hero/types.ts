// =============================================================================
// Data Types
// =============================================================================

export interface HeroContent {
  /** The main headline displayed prominently */
  headline: string
  /** Supporting text beneath the headline */
  subhead: string
  /** Label text for the call-to-action button */
  ctaLabel: string
  /** Scroll target or link for the CTA (e.g., "#consultation") */
  ctaTarget: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface HeroProps {
  /** The content to display in the hero section */
  content: HeroContent
  /** Called when user clicks the CTA button */
  onCtaClick?: (target: string) => void
}
