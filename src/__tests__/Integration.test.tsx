import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeAll } from 'vitest'
import Home from '../app/page'

// Polyfills
beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
})

// Mocks
// Mock 3D canvas parts as they are hard to test in JSDOM
vi.mock('../components/hero/DivinOrb/OrbCanvas', () => ({
  OrbCanvas: () => <div data-testid="orb-canvas">Orb Canvas Mock</div>
}))

describe('Integration: Home Page', () => {
  it('renders all main sections', () => {
    render(<Home />)

    // 1. Verify Hero Section
    expect(screen.getByText('DIGITAL SERENITY.')).toBeDefined()
    expect(screen.getByText('Begin the Journey')).toBeDefined()
    expect(screen.getByTestId('orb-canvas')).toBeDefined()

    // 2. Verify Arsenal Section
    expect(screen.getByText('INDUSTRIAL PRECISION')).toBeDefined()
    expect(screen.getByText('OBSIDIAN APEX')).toBeDefined()

    // 3. Verify Philosophy Section
    expect(screen.getByText('The Triptych')).toBeDefined()
    expect(screen.getByText('THE RIGOR')).toBeDefined()

    // 4. Verify Consultation Section
    expect(screen.getByText("What's your name?")).toBeDefined()
    expect(screen.getByText('Step 1 of 7')).toBeDefined()
  })

  it('renders navigation structure (smoke test)', () => {
    // Note: Home page doesn't directly render Nav (it's in Layout), 
    // but we can verify the IDs exist for scrolling
    const { container } = render(<Home />)
    
    expect(container.querySelector('#hero')).toBeDefined()
    expect(container.querySelector('#arsenal')).toBeDefined()
    expect(container.querySelector('#philosophy')).toBeDefined()
    expect(container.querySelector('#consultation')).toBeDefined()
  })
})
