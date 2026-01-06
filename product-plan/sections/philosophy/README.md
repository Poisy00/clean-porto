# Philosophy

## Overview

A sculptural "manifesto" section presenting three core pillars of identity as floating glass monoliths ("The Triptych"). Each monolith displays a headline and animated icon, with descriptions revealed via a drawer-slide interaction. Below the triptych, a single manifesto tagline floats as the section's closing statement.

## User Flows

- User scrolls into section, sees three frosted glass monoliths floating in a "Cool Mist" void
- Default state: Each monolith shows number label, headline, and animated icon (no description visible)
- User hovers a monolith → it lifts on Z-axis, frost clears slightly, text sharpens, icon animates
- User clicks a monolith → a frosted glass drawer slides up from the bottom revealing the description
- User clicks again or clicks elsewhere → drawer retracts, monolith returns to default state
- User moves mouse away → monolith settles back, frost returns (if drawer is closed)
- Below the triptych, the manifesto tagline floats as a single serif italic line

## Design Decisions

- **The Triptych:** Uses 3 vertical cards to represent Engineering, Design, and Business.
- **Drawer Reveal:** Keeps the initial view clean and minimal, requiring intent to read more.
- **Glassmorphism:** Consistent "frozen" aesthetic.

## Data Used

**Entities:** `Pillar`, `Manifesto`

## Visual Reference

See `screenshot.png` for the target UI design.

## Components Provided

- `PhilosophySection` — Wrapper
- `GlassMonolith` — Interactive card
- `icons/` — Animated SVG/CSS icons

## Callback Props

| Callback | Description |
|----------|-------------|
| - | Interactions are handled internally (open/close state) |
