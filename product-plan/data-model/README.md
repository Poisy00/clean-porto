# Data Model

## Entities

### Project
A signature work in the Arsenal. Each project represents a complete case study showcasing technical execution and design craft—includes title, tagline, description, tech stack, category, and visual assets (thumbnail, hero image, case study link).

### ConsultationRequest
A high-intent inquiry submitted through the booking flow. Captures the requester's name, email, company, project scope, budget range, and how they discovered POISY. Designed to filter for serious clients seeking premium engagements.

### Capability
A domain of expertise used to tag projects and communicate technical range. Examples: WebGL, Cryptography, Motion Design, Real-Time Data, Commerce, Infrastructure.

## Relationships

- Project has many Capabilities
- Capability has many Projects
