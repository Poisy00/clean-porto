# Arsenal

## Overview

The Arsenal is a **containment field for high-velocity artifacts**. This is not a standard portfolio grid; it is a suspended gallery of six signature projects, treating each as a "weapon" or "jewel" in your creative arsenal. The aesthetic is "Tactile Etherealism"—thick glass, internal illumination, and precision typography.

## User Flows

1. **Entry:** User scrolls from the Hero. The atmosphere darkens slightly (Deep Slate).
2. **Discovery:** The user encounters the "Suspended Grid"—six cards floating in a void.
3. **Interaction (The Activation):**
    - **Hover:** The cursor acts as a "torch." Hovering a card "activates" it. The frosted glass surface clears to reveal the high-fidelity interface, and the project's signature color blooms from behind the card.
    - **Click:** The artifact "Unlocks" (expands to full detail or navigates).

## Design Decisions

- **Frosted Glass (Idle) vs. Clear (Hover):** Creates a "reveal" mechanic that rewards interaction.
- **God Rays:** Colored glows behind cards indicate the project's "aura" or category.
- **Rigid Grid:** Contrasts with the organic motion of the Hero orb.

## Data Used

**Entities:** `Project`, `ArsenalData`

## Visual Reference

See `screenshot.png` for the target UI design.

## Components Provided

- `ArsenalGrid` — The main section wrapper and grid layout
- `ArsenalCard` — The individual project card with hover effects

## Callback Props

The `ArsenalGrid` currently assumes implicit navigation (e.g., links inside cards). If explicit callbacks are added, they would be:

| Callback | Description |
|----------|-------------|
| `onProjectClick` | (Implied) Navigate to project details |
