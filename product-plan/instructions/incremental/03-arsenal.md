# Milestone 3: Arsenal

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete, plus any prior section milestones

## Goal

Implement the Arsenal feature — The curated gallery of six signature projects, each presented as a floating jewel with prismatic hover states and weightless lifts.

## Overview

The Arsenal is a **containment field for high-velocity artifacts**. This is not a standard portfolio grid; it is a suspended gallery of six signature projects, treating each as a "weapon" or "jewel" in your creative arsenal. The aesthetic is "Tactile Etherealism"—thick glass, internal illumination, and precision typography.

**Key Functionality:**
- **Entry:** User scrolls from the Hero. The atmosphere darkens slightly (Deep Slate).
- **Discovery:** The user encounters the "Suspended Grid"—six cards floating in a void.
- **Interaction (The Activation):**
    - **Hover:** The cursor acts as a "torch." Hovering a card "activates" it. The frosted glass surface clears to reveal the high-fidelity interface, and the project's signature color blooms from behind the card.
    - **Click:** The artifact "Unlocks" (expands to full detail or navigates).

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/arsenal/tests.md` for detailed test-writing instructions including:
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

Copy the section components from `product-plan/sections/arsenal/components/`:

- `ArsenalGrid.tsx`
- `ArsenalCard.tsx`

### Data Layer

The components expect these data shapes:

- `Project`
- `ArsenalData`

You'll need to:
- Create API endpoints or data fetching logic
- Connect real data to the components

### Callbacks

Wire up these user actions:

- (Implicit navigation on card click)

### Empty States

Implement empty state UI for when no records exist yet:

- **No data yet:** Show a helpful message and call-to-action when the primary list/collection is empty
- **No related records:** Handle cases where associated records don't exist (e.g., a project with no tasks)
- **First-time user experience:** Guide users to create their first item with clear CTAs

The provided components include empty state designs — make sure to render them when data is empty rather than showing blank screens.

## Files to Reference

- `product-plan/sections/arsenal/README.md` — Feature overview and design intent
- `product-plan/sections/arsenal/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/arsenal/components/` — React components
- `product-plan/sections/arsenal/types.ts` — TypeScript interfaces
- `product-plan/sections/arsenal/sample-data.json` — Test data
- `product-plan/sections/arsenal/screenshot.png` — Visual reference

## Expected User Flows

When fully implemented, users should be able to complete these flows:

### Flow 1: Gallery Browsing

1. User scrolls into the Arsenal section
2. Sees a grid of suspended glass cards
3. **Outcome:** Perception of high-value artifacts

### Flow 2: Project Activation

1. User hovers over a project card
2. Frost clears, project image reveals, color blooms
3. **Outcome:** Engaging micro-interaction, clear preview of content

### Flow 3: Project Selection

1. User clicks on a project card
2. **Outcome:** Navigation to project details or expansion

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Components render with real data
- [ ] Empty states display properly when no records exist
- [ ] All user actions work
- [ ] User can complete all expected flows end-to-end
- [ ] Matches the visual design
- [ ] Responsive on mobile
