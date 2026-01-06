import { render, screen } from '@testing-library/react'
import { ArsenalGrid } from '../ArsenalGrid'
import { describe, it, expect } from 'vitest'

describe('ArsenalGrid Component', () => {
  const mockProjects = [
    {
      id: "01",
      title: "OBSIDIAN APEX",
      description: "System Profile: High-velocity analytics engine.",
      tech: ["REACT", "TAILWIND"],
      year: "2024",
      role: "LEAD ARCHITECT",
      color: "violet",
      image: "/images/obsidian.jpg"
    },
    {
      id: "02",
      title: "LUMINA X1",
      description: "IoT synchronization protocol.",
      tech: ["NEXT.JS"],
      year: "2024",
      role: "UI DESIGN",
      color: "amber",
      image: "/images/lumina.jpg"
    }
  ]

  it('renders section headers correctly', () => {
    render(<ArsenalGrid projects={mockProjects} />)
    
    expect(screen.getByText('INDUSTRIAL PRECISION')).toBeDefined()
    expect(screen.getByText(/SYSTEM_STATUS: OPERATIONAL/)).toBeDefined()
  })

  it('renders all projects', () => {
    render(<ArsenalGrid projects={mockProjects} />)
    
    expect(screen.getByText('OBSIDIAN APEX')).toBeDefined()
    expect(screen.getByText('LUMINA X1')).toBeDefined()
  })

  it('renders project details correctly', () => {
    render(<ArsenalGrid projects={mockProjects} />)
    
    // Check for role/year tags
    const roles = screen.getAllByText('LEAD ARCHITECT')
    expect(roles.length).toBeGreaterThan(0)
    
    // Check for tech tags
    expect(screen.getByText('REACT')).toBeDefined()
    expect(screen.getByText('NEXT.JS')).toBeDefined()
  })

  it('renders correctly with empty project list', () => {
    render(<ArsenalGrid projects={[]} />)
    expect(screen.getByText('INDUSTRIAL PRECISION')).toBeDefined()
    // Should not crash
  })
})
