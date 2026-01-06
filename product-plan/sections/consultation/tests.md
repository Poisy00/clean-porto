# Test Instructions: Consultation

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, RSpec, Minitest, PHPUnit, etc.).

## Overview

This is a complex multi-step form. Tests must verify validation, navigation, data persistence between steps, and submission.

---

## User Flow Tests

### Flow 1: Happy Path Submission

**Scenario:** User completes the form successfully

**Setup:**
- Render `ConsultationForm` with mock config

**Steps:**
1. **Step 1 (Name):** Enter "John Doe", click Next/Enter
2. **Step 2 (Project Name):** Enter "My Project", click Next
3. **Step 3 (Description):** Enter text, click Next
4. **Step 4 (Type):** Select "SaaS", click Next
5. **Step 5 (Budget):** Select "$10k-15k", click Next
6. **Step 6 (Source):** Select "Referral", click Next
7. **Step 7 (Date):** Select a date, click "Send Message"

**Expected Results:**
- [ ] `onSubmit` is called with all collected data
- [ ] UI transitions to "Thank You" state (check for Thank You heading)

### Flow 2: Validation

**Scenario:** User tries to proceed without filling required fields

**Setup:**
- Render Form at Step 1

**Steps:**
1. Leave input empty
2. Click "Continue" or press Enter

**Expected Results:**
- [ ] Form does NOT advance to next step
- [ ] Next button remains disabled or shows error state

### Flow 3: Back Navigation

**Scenario:** User reviews previous answers

**Setup:**
- User is on Step 2

**Steps:**
1. Click "Back" button

**Expected Results:**
- [ ] Form returns to Step 1
- [ ] Step 1 input still contains the previously entered value ("John Doe")

---

## Component Interaction Tests

### Form Inputs

- [ ] **Text Inputs:** Accept typing
- [ ] **Option Buttons:** Visual selection state updates when clicked
- [ ] **Date Picker:** Opens and accepts date

### Keyboard Navigation

- [ ] **Enter Key:** Advances to next step if input is valid
- [ ] **Enter Key (Last Step):** Submits the form

---

## Edge Cases

- [ ] **Submission Error:** If `onSubmit` fails (if logic handles async errors), verify error state (Note: UI might need update to handle external errors if not built-in)
- [ ] **Date Formatting:** Verify date is formatted correctly in the display after selection
