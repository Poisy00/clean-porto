# Test Instructions: Philosophy

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, RSpec, Minitest, PHPUnit, etc.).

## Overview

This section relies heavily on interactivity (click to reveal). Tests must verify the state changes (open/close drawers).

---

## User Flow Tests

### Flow 1: Reveal Description

**Scenario:** User wants to read about a philosophy pillar

**Setup:**
- Render `PhilosophySection` with mock pillars

**Steps:**
1. User clicks on the "THE RIGOR" monolith

**Expected Results:**
- [ ] The drawer containing the description becomes visible (check for class changes like `max-h-[200px]` or visibility)
- [ ] The description text is present in the DOM

### Flow 2: Close Description

**Scenario:** User closes the description

**Setup:**
- Drawer is open

**Steps:**
1. User clicks the monolith again OR clicks outside (background) OR presses Escape

**Expected Results:**
- [ ] The drawer collapses (check for `max-h-0` or similar)

---

## Component Interaction Tests

### GlassMonolith

**Renders correctly:**
- [ ] Displays Number, Label, Headline
- [ ] Renders the correct icon based on `iconType`

**Accessibility:**
- [ ] Monoliths are keyboard focusable (`tabIndex={0}`)
- [ ] Enter/Space key triggers the toggle interaction
- [ ] `aria-expanded` attribute updates correctly

---

## Edge Cases

- [ ] **Multiple clicks:** Rapid clicking shouldn't break the animation state
- [ ] **Mobile:** Verify layout stacks vertically (check CSS classes `md:grid-cols-3` vs `grid-cols-1`)
