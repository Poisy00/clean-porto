// =============================================================================
// Data Types
// =============================================================================

/**
 * Icon types for the three pillars - determines which animated icon to render
 */
export type PillarIconType = 'wireframe-cube' | 'liquid-drop' | 'arrow-target'

/**
 * A core identity principle displayed as a floating glass monolith
 */
export interface Pillar {
  /** Unique identifier for the pillar */
  id: string
  /** Display number (01, 02, 03) */
  number: string
  /** Short label (THE RIGOR, THE SOUL, THE OUTCOME) */
  label: string
  /** Category descriptor (Engineering, Design, Business) */
  category: string
  /** Main headline displayed on the monolith */
  headline: string
  /** Determines which animated icon to render */
  iconType: PillarIconType
  /** Full description revealed in the drawer on click */
  description: string
}

/**
 * The manifesto closing statement
 */
export interface Manifesto {
  /** The tagline displayed below the triptych */
  tagline: string
}

// =============================================================================
// Component Props
// =============================================================================

/**
 * Props for the main Philosophy section component
 */
export interface PhilosophySectionProps {
  /** The three pillars to display as monoliths */
  pillars: Pillar[]
  /** The manifesto tagline displayed below */
  manifesto: Manifesto
}

/**
 * Props for individual GlassMonolith component
 */
export interface GlassMonolithProps {
  /** The pillar data to display */
  pillar: Pillar
  /** Whether the drawer is currently expanded */
  isExpanded?: boolean
  /** Called when the monolith is clicked (to toggle drawer) */
  onToggle?: () => void
}
