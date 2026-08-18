# BridgeApp Design System — usage

Canonical source of truth for every BridgeApp surface. Import `styles.css`, which pulls
in the seven token files under `tokens/`. Never hard-code a hex, a font stack or a radius
that a token already covers.

```html
<link rel="stylesheet" href="/design-system/styles.css">
```

## The rules that catch people out

| Rule | Detail |
|---|---|
| **One typeface** | Roboto, four weights only: 400 body, 500 UI and labels, 700 subheadings, 900 headlines. No Inter, no Barlow, no Arial as a first choice. |
| **Editorial is square** | Radius `0` for brand and editorial work. Radius belongs to product UI: 8px chips, 12px buttons and inputs, 24px cards and panels, 999px marketing pills. |
| **Navy is #0F2A4A** | Not `#0f2340`. The navy alphas (`--navy-a70` body, `--navy-a60` muted, `--navy-a45` faint) carry text colour — do not substitute grey. |
| **Product colours are fixed** | Pathfinder is Bridge Blue `#4A90D9`. UniApply is Future Yellow `#FBBF24`. Future Club is Hype Orange `#F97316`. Do not reassign them. |
| **Ground is cream** | `#F8F4EF` for editorial pages, `#060810` for the dark product canvas. Not white, not grey. |
| **Eyebrows carry a number** | Uppercase, `--tracking-eyebrow` (0.22em), prefixed with a two-digit section number: `02 · COLOUR SYSTEM`. |
| **Tricolour is for progress** | `--gradient-tricolour` (blue → orange → yellow) on progress bars and product CTAs. Not as a decorative page background. |

## Voice

A best friend who happens to know everything about your future. Confident not arrogant,
direct not blunt, warm not cheesy, playful not childish. Declarative sentences, second
person to the learner, direct address to parents ("Have a child in Matric?"), never
third-person corporate.

## What lives here

- `tokens/` — colours, fonts, typography, spacing, radius, elevation, motion
- `styles.css` — the single import that pulls the tokens in
- `readme.md` — the full system as supplied, including sources, product definitions and rules
- `_ds_manifest.json`, `_ds_bundle.js`, `_adherence.oxlintrc.json` — machine-readable manifest, bundle and lint config for adherence checking

## Known conflicts to resolve

- The existing OS files at the repo root (`index.html` and siblings) run an older palette —
  navy `#0f2340`, orange `#e8601c`, yellow `#f0b429` — on Barlow and Barlow Condensed.
  They predate this system and should be migrated.
- `readme.md` records a **R10 blended cost-per-sale guardrail and a 15 000-sale 2026 target**.
  The current commercialisation plan runs to **41 000 sales by 30 November at an R30 sprint
  CPA cap**. Confirm which figure governs before either is quoted to a client.
