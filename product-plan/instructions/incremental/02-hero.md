# Milestone 2: Hero

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete, plus any prior section milestones

## Goal

Implement the Hero feature — The breathing entrance that establishes POISY as a design house—minimal, luminous, with a single high-intent CTA floating in the void.

## Overview

The Hero is POISY's breathing entrance—a full-viewport statement that establishes the angelic, ethereal identity immediately. A floating iridescent orb pulses like a heartbeat while volumetric light rays create a sense of divine space. The single "Begin the Journey" CTA filters for high-intent visitors.

**Key Functionality:**
- Visitor lands → experiences the breathing atmosphere → reads "DIGITAL SERENITY." → clicks "Begin the Journey" → smooth-scrolls to Consultation section
- **Headline (H1):** "DIGITAL SERENITY." — Inter Tight, Medium weight, -4% letter-spacing, deep charcoal
- **Subhead:** "We craft interfaces so beautiful and intuitive, they feel like a breath of fresh air. Transform your complex ideas into pure, breathable light."
- **CTA:** "Begin the Journey" — Glass pill button with soft prismatic inner glow, scrolls to #consultation
- **Orb:** Floating pearl/iridescent sphere, slow heartbeat pulse, gentle cursor-follow rotation (desktop), autonomous float/drift (mobile)
- **Atmosphere:** Volumetric bloom background with soft Tyndall light rays shifting subtly—white that glows, not flat

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/hero/tests.md` for detailed test-writing instructions including:
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

Copy the section components from `product-plan/sections/hero/components/`:

- `Hero.tsx`
- `DivinOrb/`

### Data Layer

The components expect these data shapes:

- `HeroContent`

You'll need to:
- Create API endpoints or data fetching logic
- Connect real data to the components

### Callbacks

Wire up these user actions:

- `onCtaClick`: Called when user clicks the CTA button

### Empty States

Implement empty state UI for when no records exist yet:

- **No data yet:** Show a helpful message and call-to-action when the primary list/collection is empty
- **No related records:** Handle cases where associated records don't exist (e.g., a project with no tasks)
- **First-time user experience:** Guide users to create their first item with clear CTAs

The provided components include empty state designs — make sure to render them when data is empty rather than showing blank screens.

## Files to Reference

- `product-plan/sections/hero/README.md` — Feature overview and design intent
- `product-plan/sections/hero/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/hero/components/` — React components
- `product-plan/sections/hero/types.ts` — TypeScript interfaces
- `product-plan/sections/hero/sample-data.json` — Test data
- `product-plan/sections/hero/screenshot.png` — Visual reference

## Expected User Flows

When fully implemented, users should be able to complete these flows:

### Flow 1: Visitor Experience

1. Visitor lands on the page
2. Experiences the breathing atmosphere and pulsing orb
3. Reads the headline "DIGITAL SERENITY."
4. **Outcome:** Emotional connection established, brand identity conveyed

### Flow 2: Call to Action

1. User clicks "Begin the Journey"
2. **Outcome:** Smooth scroll to the Consultation section

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Components render with real data
- [ ] Empty states display properly when no records exist
- [ ] All user actions work
- [ ] User can complete all expected flows end-to-end
- [ ] Matches the visual design
- [ ] Responsive on mobile
