# Test Instructions: Hero

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, RSpec, Minitest, PHPUnit, etc.).

## Overview

The Hero section is the first impression. Tests should verify the visual hierarchy, content rendering, and the primary call-to-action.

---

## User Flow Tests

### Flow 1: Visitor Landing

**Scenario:** A visitor lands on the homepage

**Setup:**
- Render the Hero component with sample content

**Steps:**
1. User loads the page

**Expected Results:**
- [ ] Headline "DIGITAL SERENITY." is visible
- [ ] Subhead text is visible
- [ ] CTA button "Begin the Journey" is visible
- [ ] The Orb canvas is present (check for canvas element or fallback)

### Flow 2: Call to Action

**Scenario:** User clicks the CTA button

**Setup:**
- Render Hero with a mock `onCtaClick` handler

**Steps:**
1. User clicks "Begin the Journey"

**Expected Results:**
- [ ] `onCtaClick` is called with the correct target (`#consultation`)

---

## Component Interaction Tests

### Hero Component

**Renders correctly:**
- [ ] Headline has the correct font class (`font-['Inter_Tight']`)
- [ ] CTA button has the correct label

**Accessibility:**
- [ ] CTA button is accessible via keyboard (Tab focus)
- [ ] Images/Canvas have appropriate aria-labels or alt text if applicable (Canvas might be decorative)

---

## Edge Cases

- [ ] **Mobile View:** Verify the layout adjusts (font sizes might change, but component should not break)
- [ ] **Missing Content:** If content props are missing (optional), verify graceful degradation or error boundaries
