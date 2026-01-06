# Consultation

## Overview

A multi-step inquiry form with angelic, gliding transitions between each question. Collects project details progressively (one field at a time), offers an optional date selection for a call, and concludes with an on-brand thank you state.

## User Flows

- User scrolls to or navigates to the Consultation section
- Form presents one question at a time with smooth transitions between steps:
  1. Person name
  2. Project name
  3. Project description and requirements
  4. Project type (SaaS, Landing Page, Dashboard, Full System)
  5. Budget range (Under $5K, $5K–$10K, $10K–$15K, $15K–$20K, $20K–$25K, $25K–$30K, $30K+)
  6. How they found you (Social Media, Referral, Google Search)
  7. Preferred call date (calendar date picker)
  8. Submit
- After submission, user sees an ethereal thank you state that fits the POISY aesthetic
- Form data (including formatted date) is packaged for email delivery

## Design Decisions

- **Progressive Disclosure:** Asking one thing at a time reduces cognitive load and increases completion rates.
- **Ethereal Transitions:** Animations between steps reinforce the brand feel.
- **Thank You State:** Replaces the form entirely upon success.

## Data Used

**Entities:** `ConsultationRequest`, `ConsultationFormData`

**Configuration:** `FormConfig` (options for dropdowns/selects)

## Visual Reference

See `screenshot.png` for the target UI design.

## Components Provided

- `ConsultationForm` — The main multi-step form logic and UI

## Callback Props

| Callback | Description |
|----------|-------------|
| `onSubmit` | Called with the complete form data object |
| `onStepChange` | Called when user moves between steps |
