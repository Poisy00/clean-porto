# Milestone 4: Philosophy

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete, plus any prior section milestones

## Goal

Implement the Philosophy feature — The "Tactile Etherealism" manifesto and Full-Stack Systems Architect positioning—who POISY is and why the work feels different.

## Overview

A sculptural "manifesto" section presenting three core pillars of identity as floating glass monoliths ("The Triptych"). Each monolith displays a headline and animated icon, with descriptions revealed via a drawer-slide interaction. Below the triptych, a single manifesto tagline floats as the section's closing statement.

**Key Functionality:**
- User scrolls into section, sees three frosted glass monoliths floating in a "Cool Mist" void
- Default state: Each monolith shows number label, headline, and animated icon (no description visible)
- User hovers a monolith → it lifts on Z-axis, frost clears slightly, text sharpens, icon animates
- User clicks a monolith → a frosted glass drawer slides up from the bottom revealing the description
- User clicks again or clicks elsewhere → drawer retracts, monolith returns to default state
- User moves mouse away → monolith settles back, frost returns (if drawer is closed)
- Below the triptych, the manifesto tagline floats as a single serif italic line

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/philosophy/tests.md` for detailed test-writing instructions including:
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

Copy the section components from `product-plan/sections/philosophy/components/`:

- `PhilosophySection.tsx`
- `GlassMonolith.tsx`
- `icons/`

### Data Layer

The components expect these data shapes:

- `Pillar`
- `Manifesto`

You'll need to:
- Create API endpoints or data fetching logic
- Connect real data to the components

### Callbacks

Wire up these user actions:

- (Interactions handled internally by component state)

### Empty States

Implement empty state UI for when no records exist yet:

- **No data yet:** Show a helpful message and call-to-action when the primary list/collection is empty
- **No related records:** Handle cases where associated records don't exist (e.g., a project with no tasks)
- **First-time user experience:** Guide users to create their first item with clear CTAs

The provided components include empty state designs — make sure to render them when data is empty rather than showing blank screens.

## Files to Reference

- `product-plan/sections/philosophy/README.md` — Feature overview and design intent
- `product-plan/sections/philosophy/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/philosophy/components/` — React components
- `product-plan/sections/philosophy/types.ts` — TypeScript interfaces
- `product-plan/sections/philosophy/sample-data.json` — Test data
- `product-plan/sections/philosophy/screenshot.png` — Visual reference

## Expected User Flows

When fully implemented, users should be able to complete these flows:

### Flow 1: Pillar Interaction

1. User hovers over a glass monolith
2. Monolith lifts and clarifies
3. User clicks the monolith
4. Drawer slides up revealing description
5. **Outcome:** Engagement with core values

### Flow 2: Manifesto Reading

1. User scrolls to the bottom of the section
2. Reads the floating tagline
3. **Outcome:** Reinforcement of brand philosophy

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Components render with real data
- [ ] Empty states display properly when no records exist
- [ ] All user actions work
- [ ] User can complete all expected flows end-to-end
- [ ] Matches the visual design
- [ ] Responsive on mobile
