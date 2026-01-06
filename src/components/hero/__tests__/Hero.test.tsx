import { render, screen, fireEvent } from '@testing-library/react'
import { Hero } from '../Hero'
import { describe, it, expect, vi, beforeAll } from 'vitest'

// Polyfill ResizeObserver
beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

// Mock the Orb component since Canvas is hard to test in JSDOM
// Note: Hero.tsx imports from ./DivinOrb/OrbCanvas
vi.mock('../DivinOrb/OrbCanvas', () => ({
  OrbCanvas: () => <div data-testid="orb-canvas">Orb Canvas</div>
}))

describe('Hero Component', () => {
  const mockContent = {
    headline: 'DIGITAL SERENITY.',
    subhead: 'We craft interfaces so beautiful and intuitive, they feel like a breath of fresh air.',
    ctaLabel: 'Begin the Journey',
    ctaTarget: '#consultation'
  }

  it('renders key content elements correctly', () => {
    render(<Hero content={mockContent} onCtaClick={() => {}} />)

    expect(screen.getByText('DIGITAL SERENITY.')).toBeDefined()
    expect(screen.getByText(/We craft interfaces/)).toBeDefined()
    expect(screen.getByRole('button', { name: 'Begin the Journey' })).toBeDefined()
    expect(screen.getByTestId('orb-canvas')).toBeDefined()
  })

  it('handles CTA click correctly', () => {
    const handleCtaClick = vi.fn()
    render(<Hero content={mockContent} onCtaClick={handleCtaClick} />)

    const button = screen.getByRole('button', { name: 'Begin the Journey' })
    fireEvent.click(button)

    expect(handleCtaClick).toHaveBeenCalledWith('#consultation')
  })
})
