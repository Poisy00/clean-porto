import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ConsultationForm } from '../ConsultationForm'
import { describe, it, expect, vi } from 'vitest'

describe('ConsultationForm', () => {
  const mockConfig = {
    projectTypes: [{ id: 'saas', label: 'SaaS' }],
    budgetRanges: [{ id: '5k-10k', label: '$5k-$10k' }],
    discoverySources: [{ id: 'referral', label: 'Referral' }],
    steps: [
      { id: 1, field: 'personName', label: 'Name', placeholder: 'Name' },
      { id: 2, field: 'projectName', label: 'Project', placeholder: 'Project' },
      { id: 3, field: 'projectDescription', label: 'Description', placeholder: 'Desc' },
      { id: 4, field: 'projectType', label: 'Type' },
      { id: 5, field: 'budgetRange', label: 'Budget' },
      { id: 6, field: 'discoverySource', label: 'Source' },
      { id: 7, field: 'preferredDate', label: 'Date' },
    ]
  }

  const mockThankYou = {
    heading: 'Thank You',
    subheading: 'Received',
    note: 'Bye'
  }

  it('navigates through steps and submits', async () => {
    const handleSubmit = vi.fn()
    render(
      <ConsultationForm 
        formConfig={mockConfig} 
        thankYouContent={mockThankYou} 
        onSubmit={handleSubmit} 
      />
    )

    // Step 1: Name
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Doe' } })
    fireEvent.click(screen.getByText('Continue'))

    // Step 2: Project
    await waitFor(() => expect(screen.getByPlaceholderText('Project')).toBeDefined())
    fireEvent.change(screen.getByPlaceholderText('Project'), { target: { value: 'My App' } })
    fireEvent.click(screen.getByText('Continue'))

    // Step 3: Description
    await waitFor(() => expect(screen.getByPlaceholderText('Desc')).toBeDefined())
    fireEvent.change(screen.getByPlaceholderText('Desc'), { target: { value: 'Building cool stuff' } })
    fireEvent.click(screen.getByText('Continue'))

    // Step 4: Type
    await waitFor(() => expect(screen.getByText('SaaS')).toBeDefined())
    fireEvent.click(screen.getByText('SaaS'))
    fireEvent.click(screen.getByText('Continue'))

    // Step 5: Budget
    await waitFor(() => expect(screen.getByText('$5k-$10k')).toBeDefined())
    fireEvent.click(screen.getByText('$5k-$10k'))
    fireEvent.click(screen.getByText('Continue'))

    // Step 6: Source
    await waitFor(() => expect(screen.getByText('Referral')).toBeDefined())
    fireEvent.click(screen.getByText('Referral'))
    fireEvent.click(screen.getByText('Continue'))

    // Step 7: Date
    await waitFor(() => expect(screen.getByText('Send Message')).toBeDefined())
    // Set date input using selector directly since label might be hidden or styled differently
    const dateInput = document.querySelector('input[type="date"]')
    if (dateInput) {
      fireEvent.change(dateInput, { target: { value: '2025-12-31' } })
    }
    
    fireEvent.click(screen.getByText('Send Message'))

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled()
      expect(screen.getByText('Thank You')).toBeDefined()
    })
  })

  it('prevents navigation on invalid input', () => {
    render(
      <ConsultationForm 
        formConfig={mockConfig} 
        thankYouContent={mockThankYou} 
      />
    )

    // Try clicking continue without name
    const button = screen.getByRole('button', { name: /Continue/i })
    expect(button).toBeDisabled()
    
    fireEvent.click(button)
    expect(screen.getByPlaceholderText('Name')).toBeDefined() // Still on step 1
  })
})
