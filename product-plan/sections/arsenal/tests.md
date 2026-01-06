# Test Instructions: Arsenal

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, RSpec, Minitest, PHPUnit, etc.).

## Overview

The Arsenal section displays a grid of projects. Tests should focus on data rendering, hover states (if possible in your test env), and structural integrity.

---

## User Flow Tests

### Flow 1: Gallery Rendering

**Scenario:** User views the project list

**Setup:**
- Render `ArsenalGrid` with a list of mock projects

**Steps:**
1. User scrolls to section

**Expected Results:**
- [ ] Section title "INDUSTRIAL PRECISION" is visible
- [ ] All projects from the data source are rendered
- [ ] Each card displays the correct project title
- [ ] Each card displays the correct year and role

---

## Component Interaction Tests

### ArsenalCard

**Renders correctly:**
- [ ] Displays title, description, year, role, and tech stack
- [ ] Applies correct color class based on project `color` prop

**User interactions:**
- [ ] **Hover:** (If testing library supports hover styles) Check for class changes like `backdrop-blur-none` or opacity changes on the "frost" layer.
- [ ] **Click:** Verify any link or click handler works.

---

## Empty State Tests

### No Projects

**Scenario:** The projects list is empty

**Setup:**
- Render `ArsenalGrid` with `projects={[]}`

**Expected Results:**
- [ ] Grid should render empty (or show a placeholder if one was implemented - *Note: current implementation might just show empty grid, verify desirable behavior*)
- [ ] Title/Subtitle should still be visible

---

## Edge Cases

- [ ] **Long Descriptions:** Verify text truncation or wrapping doesn't break layout
- [ ] **Many Tags:** Verify tech stack tags wrap correctly
