# POISY — Complete Implementation Instructions

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography, spacing)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Backend API endpoints and database schema
- Authentication and authorization
- Data fetching and state management
- Business logic and validation
- Integration of the provided UI components with real data

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing and API calls
- **DO** replace sample data with real data from your backend
- **DO** implement proper error handling and loading states
- **DO** implement empty states when no records exist (first-time users, after deletions)
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate — focus on the backend and data layer

---

## Test-Driven Development

Each section includes a `tests.md` file with detailed test-writing instructions. These are **framework-agnostic** — adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

**For each section:**
1. Read `product-plan/sections/[section-id]/tests.md`
2. Write failing tests for key user flows (success and failure paths)
3. Implement the feature to make tests pass
4. Refactor while keeping tests green

The test instructions include:
- Specific UI elements, button labels, and interactions to verify
- Expected success and failure behaviors
- Empty state handling (when no records exist yet)
- Data assertions and state validations

---

# POISY — Product Overview

## Summary

POISY is a high-end digital design house specializing in "living systems"—interfaces that breathe, dashboards that pulse with real-time data, and commerce experiences with tactile weight. We bridge engineering rigor with visceral intuition, turning passive users into active operators.

## Planned Sections

1. **Hero** — The breathing entrance that establishes POISY as a design house—minimal, luminous, with a single high-intent CTA floating in the void.
2. **Arsenal** — The curated gallery of six signature projects, each presented as a floating jewel with prismatic hover states and weightless lifts.
3. **Philosophy** — The "Tactile Etherealism" manifesto and Full-Stack Systems Architect positioning—who POISY is and why the work feels different.
4. **Consultation** — The high-ticket booking flow that filters for serious inquiries and converts quality over quantity.

## Data Model

- Project
- ConsultationRequest
- Capability

## Design System

**Colors:**
- Primary: sky
- Secondary: amber
- Neutral: slate

**Typography:**
- Heading: Inter Tight
- Body: Inter
- Mono: Geist Mono

## Implementation Sequence

Build this product in milestones:

1. **Foundation** — Set up design tokens, data model types, and application shell
2. **Hero** — The breathing entrance that establishes POISY as a design house—minimal, luminous, with a single high-intent CTA floating in the void.
3. **Arsenal** — The curated gallery of six signature projects, each presented as a floating jewel with prismatic hover states and weightless lifts.
4. **Philosophy** — The "Tactile Etherealism" manifesto and Full-Stack Systems Architect positioning—who POISY is and why the work feels different.
5. **Consultation** — The high-ticket booking flow that filters for serious inquiries and converts quality over quantity.

Each milestone has a dedicated instruction document in `product-plan/instructions/`.

---

# Milestone 1: Foundation

## Goal

Set up the foundational elements: design tokens, data model types, routing structure, and application shell.

## What to Implement

### 1. Design Tokens

Configure your styling system with these tokens:

- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind configuration
- See `product-plan/design-system/fonts.md` for Google Fonts setup

### 2. Data Model Types

Create TypeScript interfaces for your core entities:

- See `product-plan/data-model/types.ts` for interface definitions
- See `product-plan/data-model/README.md` for entity relationships

### 3. Routing Structure

Create placeholder routes for each section:

1. **Hero** — /
2. **Arsenal** — /arsenal
3. **Philosophy** — /philosophy
4. **Consultation** — /consultation

### 4. Application Shell

Copy the shell components from `product-plan/shell/components/` to your project:

- `AppShell.tsx` — Main layout wrapper
- `MainNav.tsx` — Navigation component
- `CTAButton.tsx` — Call to action button

**Wire Up Navigation:**

Connect navigation to your routing:

- **POISY** wordmark → Scroll to Hero (top)
- **Arsenal** → Scroll anchor to Arsenal section
- **Philosophy** → Scroll anchor to Philosophy section
- **Book a Consultation** → Primary CTA (amber accent), scrolls to Consultation section

**User Menu:**

The user menu expects:
- User name
- Avatar URL (optional)
- Logout callback

## Files to Reference

- `product-plan/design-system/` — Design tokens
- `product-plan/data-model/` — Type definitions
- `product-plan/shell/README.md` — Shell design intent
- `product-plan/shell/components/` — Shell React components
- `product-plan/shell/screenshot.png` — Shell visual reference

## Done When

- [ ] Design tokens are configured
- [ ] Data model types are defined
- [ ] Routes exist for all sections (can be placeholder pages)
- [ ] Shell renders with navigation
- [ ] Navigation links to correct routes
- [ ] User menu shows user info
- [ ] Responsive on mobile

---

# Milestone 2: Hero

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

---

# Milestone 3: Arsenal

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

---

# Milestone 4: Philosophy

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

---

# Milestone 5: Consultation

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
