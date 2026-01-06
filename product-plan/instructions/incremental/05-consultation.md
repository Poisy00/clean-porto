# Milestone 5: Consultation

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete, plus any prior section milestones

## Goal

Implement the Consultation feature — The high-ticket booking flow that filters for serious inquiries and converts quality over quantity.

## Overview

A multi-step inquiry form with angelic, gliding transitions between each question. Collects project details progressively (one field at a time), offers an optional date selection for a call, and concludes with an on-brand thank you state.

**Key Functionality:**
- Stepped form with one question visible at a time
- Angelic transitions between steps (smooth fades, gentle slides — weightless and ethereal)
- Progress indicator showing current step
- Back navigation to edit previous answers
- Native calendar/date picker component (selected date converts to text for email)
- Elegant thank you state with on-brand messaging after submission
- Mobile responsive with touch-friendly inputs

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/consultation/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

The test instructions are framework-agnostic — adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/consultation/components/`:

- `ConsultationForm.tsx`

### Data Layer

The components expect these data shapes:

- `ConsultationFormData`
- `ConsultationRequest`

You'll need to:
- Create API endpoints or data fetching logic
- Connect real data to the components

### Callbacks

Wire up these user actions:

- `onSubmit`: Called when the form is submitted with all collected data
- `onStepChange`: Called when user navigates to a different step

### Empty States

Implement empty state UI for when no records exist yet:

- **No data yet:** Show a helpful message and call-to-action when the primary list/collection is empty
- **No related records:** Handle cases where associated records don't exist (e.g., a project with no tasks)
- **First-time user experience:** Guide users to create their first item with clear CTAs

The provided components include empty state designs — make sure to render them when data is empty rather than showing blank screens.

## Files to Reference

- `product-plan/sections/consultation/README.md` — Feature overview and design intent
- `product-plan/sections/consultation/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/consultation/components/` — React components
- `product-plan/sections/consultation/types.ts` — TypeScript interfaces
- `product-plan/sections/consultation/sample-data.json` — Test data
- `product-plan/sections/consultation/screenshot.png` — Visual reference

## Expected User Flows

When fully implemented, users should be able to complete these flows:

### Flow 1: Inquiry Submission

1. User starts the consultation form
2. Answers questions step-by-step (Name, Project Name, Description, Type, Budget, Source, Date)
3. Submits the form
4. **Outcome:** Sees thank you message, data is sent to backend

### Flow 2: Navigation

1. User proceeds through steps
2. User clicks "Back" to edit a previous answer
3. User continues forward
4. **Outcome:** Data is preserved during navigation

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Components render with real data
- [ ] Empty states display properly when no records exist
- [ ] All user actions work
- [ ] User can complete all expected flows end-to-end
- [ ] Matches the visual design
- [ ] Responsive on mobile
