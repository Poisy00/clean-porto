# Hero

## Overview

The Hero is POISY's breathing entrance—a full-viewport statement that establishes the angelic, ethereal identity immediately. A floating iridescent orb pulses like a heartbeat while volumetric light rays create a sense of divine space. The single "Begin the Journey" CTA filters for high-intent visitors.

## User Flows

- Visitor lands → experiences the breathing atmosphere → reads "DIGITAL SERENITY." → clicks "Begin the Journey" → smooth-scrolls to Consultation section

## Design Decisions

- **Atmosphere over Information:** The goal is emotional impact, not information density.
- **Volumetric Lighting:** Uses Tyndall rays and bloom to create depth.
- **Interactive Orb:** The core visual element that reacts to the user's presence.

## Data Used

**Entities:** `HeroContent`

## Visual Reference

See `screenshot.png` for the target UI design.

## Components Provided

- `Hero` — The main hero section wrapper
- `DivinOrb` — The 3D orb visualization

## Callback Props

| Callback | Description |
|----------|-------------|
| `onCtaClick` | Called when user clicks the "Begin the Journey" button |
