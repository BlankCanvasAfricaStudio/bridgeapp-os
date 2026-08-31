# BridgeApp Design System

BridgeApp is a South African education-technology brand — "your partner in creating your future" — that walks a learner from subject choice in Grade 9 through to a university acceptance letter. It trades as **BridgeApp by Gradesmatch** and sells two products plus a culture layer:

| Product | Who it's for | What it does | Price |
|---|---|---|---|
| **Pathfinder** | Gr 9–11, the proactive student | Subject choice, career matching, goal mapping, progress tracking | from R99 (7-day) to R450 (1-year) |
| **UniApply** | Gr 12 families | Done-for-you university applications: deadlines, documents, tracking | R550+ unlock, then an 11-month plan |
| **Future Club / School Clash** | Whole schools | Inter-schools competition, ambassadors, tour, merch — the culture layer that makes the products spread | — |

The 2026 strategic position: BridgeApp is not an app, it's a decision system and a youth identity brand. Marketing is run with Blank Canvas as agency partner; the sales model is "above the line" (school partnerships that sign learners up in the room) plus "below the line" (paid social, search, retargeting) against a R10 blended cost-per-sale guardrail and a 15 000-sale 2026 target.

## Sources this system was built from

- `uploads/BridgeApp Brand Book 2026 (Copy) (2).make` — a Figma Make file. The archive was unpacked and the React/TypeScript source read directly: `src/styles/fonts.css`, `src/app/App.tsx`, the marketing-site components (`Navbar`, `Hero`, `PathfinderSection`, `UniApplySection`, `ImpactSection`, `TestimonialsSection`, `CTASection`, `Footer`) and the brand-book v3 pages (`Cover`, `Overview`, `ColourSystem`, `Typography`, `LogoRules`, `Products`, `ToneVoice`, `UISystem`, `Imagery`, `DosDonts`, `FutureClub`). Every colour, type and rule value here is copied from that source, not inferred.
- Logo masters: `BridgeApp_Upscale_Logo.png`, `BridgeApp_Upscale_Logo (1).png`, `BridgeApp_Pathfinder (1).png`, `BridgeApp_UniApply.png`.
- Live paid-social creative: `BridgeApp_E_the-application-calendar` and `BridgeApp_F_the-matric-year-mapped` (1080×1080 feed + 1080×1920 story).
- `BridgeApp · Above & Below the Line — 2026 Sales Strategy.pdf`, `BridgeApp - GE1 Digital Sales · 2-Week Experiment (1).pdf`, `BridgeApp June Report.pdf` — strategy and reporting language.
- `Meta Paid Media Report.dc.html` — an existing Blank Canvas reporting deck for BridgeApp. Note it runs its own agency reporting palette (Inter, `#0B1F3A`/`#3E9DE0`), **not** the BridgeApp brand palette. It is recorded here as context, not as a source of truth.
- `bridgeapp_phase2_handover_2026-05_v2.pptx` — supplied but not parsed for this build.

The brand book itself notes that the pre-2026 work was "strong, but fragmented"; v3 is the systemisation of it. Where the marketing site and the brand book disagree, **the brand book wins** for anything printed or presented, and the marketing site's own conventions hold for the web product (see Visual Foundations).

---

## Content fundamentals

**The voice is a best friend who happens to know everything about your future.** Four traits, each with a guardrail: **Confident** not arrogant · **Direct** not blunt · **Warm** not cheesy · **Playful** not childish.

Four rules govern every sentence:

- **Declarative.** Make bold statements. Don't ask permission or hedge.
- **Direct.** Short sentences. No filler words. Cut after the first draft.
- **Motivational.** Ambitious but real — inspire without overpromising.
- **Grounded.** Back every claim with data, proof, or a real student story.

Say this:

> "Let's figure your future out — together."
> "Your subjects shouldn't pick you. You pick them."
> "Welcome to the Future Club. Don't be late."

Not this:

> ~~"Unlock your potential with our platform."~~
> ~~"Comprehensive academic guidance solutions."~~
> ~~"Sign up today to begin your journey."~~

**Person.** Second person to the student ("your future", "you pick them"), first person plural for BridgeApp ("we", "let's"). Parents are addressed directly too ("Have a child in Matric?"). Never third-person corporate ("students can now…").

**Casing.** Headlines are set in uppercase Roboto Black in editorial work ("COLOUR DRIVES EVERYTHING."), sentence case on the marketing site ("Your Partner In Creating Your Future."). Eyebrows and labels are uppercase with wide tracking and a two-digit section number: `02 · COLOUR SYSTEM`. Body copy is sentence case.

**Punctuation.** The middot `·` is the brand's connector — in eyebrows, in lockups, in list separators ("Wits · University of Pretoria"), in prices ("UniApply · R550 ›"). Full stops end headlines, which makes them land as statements: "BUILD IT." "Apply with confidence." A single `›` chevron ends a CTA.

**Numbers and money.** Rands with no decimals in campaign copy (R99, R550, R20 000), thin-space thousands (15 000), decimals only in reporting (R3.29, R1,597.29). Targets are always stated as a number, never "many" or "significant".

**Emoji: no.** The brand book's approved surfaces use none. Icons carry the job emoji would otherwise do.

**Approved campaign phrases** — use these, don't write new taglines:

Don't guess your future · Your partner in creating your future · From subject choice to university acceptance · Built Different · Match Your Future · Own Your Path · The Future Is Watching · Apply With Confidence

**Never** use fluffy, passive, or hedging language.

---

## Visual foundations

### Colour
Four colours do everything. **Bridge Blue `#4A90D9`** is primary and belongs to Pathfinder, actions and trust. **Future Yellow `#FBBF24`** is energy and belongs to UniApply and achievement. **Hype Orange `#F97316`** is action and belongs to Future Club, motion and urgency. **Deep Navy `#0F2A4A`** anchors — backgrounds and grounding.

The governing rule, stated verbatim in the brand book: **one dominant colour per layout. Always. No exceptions.** Approved pairings are Navy + White, Yellow + Navy, Orange + White, Blue + White, Off-White + Navy, and Navy + Yellow. Off-brand colours — teal, purple, pink — are banned. Each hue has a fixed seven-stop tint ramp; nothing outside those stops ships.

### Type
**Roboto, and only Roboto**, in four weights: Regular 400 (body), Medium 500 (UI and labels), Bold 700 (subheadings), Black 900 (headlines). Never more than two weights in a single block. The ladder is Display 96 / H1 64 / H2 40 / H3 24 / Body 18 / Label 11, with negative tracking on everything display-sized (−0.04em down to −0.01em) and +0.15em on labels, +0.22em on eyebrows. Display line-height is 0.92 — headlines are set tight enough to read as a block. Body is 18/1.7, generous, built for phones.

Colour inside type is a single word, never a whole headline: white copy with one word in yellow or orange on navy.

### Background and surfaces
Editorial work sits on warm off-white `#F8F4EF` (or `#F5F0E8`), never pure white — white is reserved for cards. Product web sits on navy `#0F2A4A`; the darkest product canvas is `#060810`. Full-bleed tri-colour stripes (blue / yellow / orange / navy, 8–14px) open and close sections. There are no repeating patterns, no textures, no grain, and — apart from the two signature gradients below — no gradient fills.

Two gradients only: the tri-colour scroll-progress bar (`#4A90D9 → #F97316 → #FBBF24`) and the product CTA gradients (`#4A90D9 → #2F6EB5`, `#FBBF24 → #F97316`). The hero uses a navy protection gradient over photography rather than a capsule.

### Imagery
African youth, authentic and never posed. Vibrant, expressive, full of movement; low angle or wide lens; natural lighting; subjects looking forward or outward; colour graded to the brand palette. Warm, saturated, never washed out. Photography in the hero sits at 18–25% opacity behind a navy gradient — the type always wins. Never generic stock without cultural context, static corporate poses, pale treatments, non-African subjects as primary, over-retouching, or cluttered compositions.

### Layout
Editorial pages run a 1152px max width with 32px gutters (56px at ≥md) and 64px vertical section padding. The signature move is a two-column grid of `100px 1fr`: a narrow left rail carrying a short grey descriptor, and the content column beside it, separated from the headline by a 1px hairline. The marketing site runs wider at 1280px. Fixed elements: the 3px tri-colour scroll-progress bar at the top of the brand book, its 52px collapsed sidebar that expands to 220px on hover, and the marketing site's sticky nav. Layers overlap deliberately — the brand book's own rule is "layer elements, not flat white-space design".

### Corners, borders, shadows
**Editorial is square.** Cards, buttons, tags and swatches all have zero radius. Radius belongs to product UI: 8px for tags and chips, 12px for buttons and inputs, 24px for cards, modals and panels, 20px for phone frames, and fully rounded pills for marketing-site CTAs.

Borders do the work shadows usually do: a 1px navy-12% hairline on light cards, navy-22% when it needs to be seen, and a 4–5px solid brand-colour left edge on statement blocks. The only shadows in the system are the glass card's `0 24px 48px rgba(0,0,0,0.45)`, the marketing hero card's `0 24px 64px rgba(0,0,0,0.30)`, the coloured CTA glows, and the faint `0 1px 3px rgba(11,31,58,0.08)` on report cards.

### Transparency and blur
Blur appears in exactly three places: glass cards on dark canvases (white 5–7% fill, `blur(20px)`, white 11–15% border), the nav bar after 20px of scroll (`rgba(15,42,74,0.95)` + `blur(12px)`), and the soft colour blobs behind the hero. On light editorial surfaces there is no blur at all — transparency there is only the navy alpha ladder (8 / 10 / 12 / 18 / 22 / 40 / 45 / 50 / 60 / 70%) used for hairlines and secondary text.

### Motion
Scroll-reveal is the house animation: opacity 0→1 with an 18px vertical or 16px horizontal offset, staggered ~70ms per item, fired once when the element enters view. Transitions are 100–300ms, ease-out. Nothing bounces except the hero's scroll indicator. Nothing loops.

### Interaction states
Hover lifts: `scale(1.02)` on cards and swatches, `scale(1.05)` on marketing CTAs, and a shadow bloom on primary buttons. Text links and nav items go from 80% white to 100% white rather than changing hue. There is no separate press state in the sources — a press reads as the hover scale releasing. Disabled is 40% opacity. Focus should use the brand blue; the sources don't define a ring, so consumers should add one.

---

## Iconography

**Lucide** is the icon set, used throughout the brand book and the marketing site (`lucide-react`: `ArrowRight`, `ChevronDown`, `CheckCircle`, `Compass`, `BookOpen`, `Target`, `TrendingUp`, `GraduationCap`, `Star`, `Menu`, `X`, `Instagram`, `Twitter`, `Linkedin`). No icon font, no sprite sheet, and no bespoke icon SVGs were shipped in the sources.

Because no icon binaries were supplied, the `Icon` component carries Lucide path data copied verbatim from `lucide-static` and renders it as an inline stroked SVG. **This is the same icon set the product uses — it is a delivery-method change, not a substitution.** If BridgeApp later provides an icon package, replace the `PATHS` map in `components/core/Icon.jsx`.

Icons are small and functional: 11–14px inline in buttons and rows, 16–22px standalone, always the same colour as the text beside them. Emoji are never used as icons. Unicode is used only for the middot `·` connector and the `›` chevron in campaign CTAs.

The four supplied PNG lockups in `assets/` are the only permitted logo artwork. Never redraw, recolour, tilt, stretch, shadow or reconstruct the mark; minimum digital height is 32px; clear space equals the height of the "P" (Pathfinder) or "U" (UniApply).

---

## Index

**Root**
- `styles.css` — the single entry point; imports everything in `tokens/`.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent Skills wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`.

**`assets/`** — `logo-bridgeapp.png`, `logo-bridgeapp-gradesmatch.png`, `logo-pathfinder-lockup.png`, `logo-uniapply-lockup.png`, and four live campaign frames (`campaign-application-calendar-feed/story`, `campaign-matric-year-mapped-feed/story`).

**`guidelines/`** — 21 specimen cards across Colors, Type, Spacing and Brand.

**Components**

*core* — `Button`, `Tag`, `Card`, `Icon`
*editorial* — `SectionHeader`, `RuleBanner`, `DoDontList`, `PhraseChip`
*product* — `Logo`, `PathwayProgress`, `ApplicationRow`, `StatBlock`, `DeadlineRow`

Each has a sibling `.d.ts` and `.prompt.md`.

**Intentional additions.** The brand book's Component System page defines only Buttons, Status Tags and Pathway Progress. Everything else above is a named, repeated element lifted from the sources rather than an invention: `Card`, `SectionHeader`, `RuleBanner`, `DoDontList`, `PhraseChip` are the brand book's own page furniture; `ApplicationRow` is the UniApply tracker row; `StatBlock` is the stat pattern shared by the hero, the impact section and the reporting decks; `DeadlineRow` is the deadline list from the live paid-social creative; `Logo` and `Icon` are thin wrappers so nobody redraws a mark or an icon by hand.

**`ui_kits/`**
- `marketing-site/` — the BridgeApp.co.za surface: nav, hero, Pathfinder, UniApply, impact, testimonials, CTA, footer.
- `apps/` — Pathfinder Home, School Clash Live, UniApply Tracker.

**Not built.** No slide template is included — no deck was supplied in BridgeApp's own brand system (the Meta report deck belongs to the agency's reporting identity, not BridgeApp's).
