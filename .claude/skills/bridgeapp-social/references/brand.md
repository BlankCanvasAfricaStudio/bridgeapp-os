# Brand: palette, type, logo, voice

The canonical source is `design-system/` at the repository root. Import `design-system/styles.css` rather than copying hexes when you are building anything in HTML. What follows is the subset that matters for social work, plus the mistakes that keep recurring.

## Palette

| Token | Hex | Role |
|---|---|---|
| Deep Navy | `#0F2A4A` | Anchor. Backgrounds, grounding. |
| Bridge Blue | `#4A90D9` | Primary. Actions, trust. Pathfinder. |
| Future Yellow | `#FBBF24` | Energy. Achievement, joy. UniApply. |
| Hype Orange | `#F97316` | Action. Motion, urgency. Future Club. |
| Cream | `#F8F4EF` | Editorial ground. Not white, not grey. |
| Ink | `#060810` | Dark product canvas. |

**Product colours are fixed and must not be reassigned.** Pathfinder is blue, UniApply is yellow, Future Club is orange. A UniApply post rendered in blue reads as a different product.

The tricolour gradient (blue → orange → yellow) belongs on progress bars and product CTAs. It is not a decorative background.

## Type

Roboto only. Four weights, no exceptions: 400 body, 500 UI and labels, 700 subheadings, 900 headlines. Not Inter, not Barlow, not Arial as a first choice.

Eyebrows are uppercase at 0.22em tracking and carry a two-digit section number: `02 · COLOUR SYSTEM`.

## Logo

Use `assets/logo-bridgeapp.svg`. It is the real wordmark with the viewBox tightened, in design-system colours.

The mark is roughly 5.2:1, which is considerably wider than it looks. It overflows narrow containers if given a fixed height, so constrain it on width and let height follow. Never stretch it to fill a space, and never recolour it.

The lockup reads **BridgeApp** with **by Gradesmatch** set beneath, right-aligned, at 0.30em of the mark's size.

## Voice

*A best friend who happens to know everything about your future.*

Confident not arrogant. Direct not blunt. Warm not cheesy. Playful not childish.

- Declarative sentences. State things.
- Second person to the learner. Direct address to parents: "Have a child in Matric?"
- Never third-person corporate. No "learners are encouraged to", no "BridgeApp is pleased to announce".
- **Admission Point Score (APS)** spelled out on first use in any piece, then APS thereafter.
- **No em dashes in client-facing copy.** The client has asked for this specifically. Use a full stop, a comma, or a colon.
- Slogan: *Your partner in creating your future.*

## Products, so they are not confused

| Product | Who it is for | Colour |
|---|---|---|
| **Pathfinder** | Earlier grades. Subject choice, career direction, the quiz. | Bridge Blue |
| **UniApply** | Matric and gap-year. Applications, deadlines, documents, tracking. | Future Yellow |
| **Future Club** | Community and ongoing membership. | Hype Orange |

A Grade 9 or 10 enquiry is a Pathfinder conversation, not a UniApply one. Routing them to UniApply sells the wrong thing and loses the relationship. Send them to Pathfinder and keep them for two years.

## The mistakes that keep happening

- Grey backgrounds. The ground is cream, or the dark ink canvas. Never grey.
- Square-versus-rounded confusion. Editorial and brand work is square, radius `0`. Radius belongs to product UI: 8px chips, 12px buttons and inputs, 24px cards, 999px marketing pills.
- Navy written as `#0f2340`. It is `#0F2A4A`.
- Body text set in grey. Text colour comes from the navy alphas: 70% for body, 60% for muted, 45% for faint.
