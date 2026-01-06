import { render, screen, fireEvent } from '@testing-library/react'
import { PhilosophySection } from '../PhilosophySection'
import { describe, it, expect } from 'vitest'

describe('PhilosophySection Component', () => {
  const mockPillars = [
    {
      id: "rigor",
      number: "01",
      label: "THE RIGOR",
      category: "Engineering",
      headline: "SYSTEMS ARCHITECTURE",
      iconType: "wireframe-cube" as const,
      description: "Beauty without structure is decoration."
    }
  ]

  const mockManifesto = {
    tagline: "We do not sacrifice usability for aesthetics."
  }

  it('renders section headers correctly', () => {
    render(<PhilosophySection pillars={mockPillars} manifesto={mockManifesto} />)
    
    expect(screen.getByText('Philosophy')).toBeDefined()
    expect(screen.getByText('The Triptych')).toBeDefined()
    expect(screen.getByText(/"We do not sacrifice usability for aesthetics."/)).toBeDefined()
  })

  it('reveals description on click', () => {
    render(<PhilosophySection pillars={mockPillars} manifesto={mockManifesto} />)
    
    const monolith = screen.getByRole('button')
    
    // Initially description should be hidden (we can check aria-expanded)
    expect(monolith.getAttribute('aria-expanded')).toBe('false')
    
    // Click to reveal
    fireEvent.click(monolith)
    expect(monolith.getAttribute('aria-expanded')).toBe('true')
    expect(screen.getByText('Beauty without structure is decoration.')).toBeDefined()
  })

  it('closes description on second click', () => {
    render(<PhilosophySection pillars={mockPillars} manifesto={mockManifesto} />)
    const monolith = screen.getByRole('button')
    
    // Open
    fireEvent.click(monolith)
    expect(monolith.getAttribute('aria-expanded')).toBe('true')
    
    // Close
    fireEvent.click(monolith)
    expect(monolith.getAttribute('aria-expanded')).toBe('false')
  })
})
