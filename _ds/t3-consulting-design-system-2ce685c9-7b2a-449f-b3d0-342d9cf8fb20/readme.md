# T3 Consulting, Inc. — Design System

T3 Consulting, Inc. is a professional services firm that provides technical solutions focused on value, quality, and dependability. It works at the intersection of **power-delivery engineering** (transmission & distribution 12–500 kV, substation design → energization) and **environmental services** (CEQA / NEPA permitting, Clean Water Act, biological and cultural resources, habitat restoration, construction monitoring). Woman-owned; MWBE · DBE · SBE certified; PE licensed in 50 states. Founder & CEO: Danielle Tipping, PE. Clients are utilities and "utility primes" (peers referenced: Burns & McDonnell, WSP, HDR).

The brand is mid-refresh. This system encodes the **new direction** from the Brand Board, not a legacy product.

## Sources
- **Brand Board (Canva):** "Client T3_Brand_Board", 21 slides — https://canva.link/wiiz99j531wmeu2 → https://www.canva.com/design/DAHQ5x9i0IE . Covers situation, landscape, essence, palette, typography, shapes, imagery, applications, UI/UX direction (layout, frosted layers, interactions, components, system, iconography). Low-res page captures saved in `guidelines/reference/`.
- **Logo files** (Google Drive zip): `T3 Logo.png` (color), `T3 Logo White.png`, `T3 Logo black.png` → `assets/logo/`.
- No codebase, Figma, or existing website was provided. The UI kit is a concept built from the board's direction.

## Index
- `styles.css` — entry point; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css` (radius, shadow, motion live in spacing.css).
- `assets/logo/` — full-res marks + `-512.png` web sizes.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) + `reference/` board captures.
- `components/core|forms|content/` — React primitives (see below), one `*.card.html` per folder.
- `ui_kits/website/` — click-through website concept (Home, Capabilities, Projects, Contact).
- `slides/` — 1280×720 slide templates (Title, Section, Content, Stats, Checklist, Statement).
- `thumbnail.html`, `SKILL.md`.

## Components
- **core:** Button, Tag, Badge, Eyebrow, Icon
- **forms:** Input, Select, Checkbox
- **content:** Card, CapabilityList, StatCounter, ImageCard, FrostedPanel, RingBackdrop

No source component library exists, so this is an authored set sized to the brand's needs (marketing site, proposals, capability statements). Intentional additions: **Icon** (wraps Lucide at the brand 1.75px stroke), **RingBackdrop** (the board's signature concentric-ring + glow shape), **StatCounter** (board's "counter animation · mono"), **FrostedPanel** (board's "frosted navy layers").

---

## CONTENT FUNDAMENTALS
**Voice:** quiet competence. Technical, grounded, calmly confident — "a firm that doesn't need to shout to be trusted." Never a lifestyle-sustainability brand.
- **Style words:** Precise · Grounded · Technical · Confident · Modern, not flashy.
- **Feeling words:** Trust in competence · The engineer on the phone · Nothing gets missed · A partner, not a vendor · Big enough, close enough.
- **Lead with competence:** capabilities, voltage range and project scale up front. Credentials (MWBE, woman-owned) are visible but secondary.
- **Person:** "we/our" for T3 sparingly; mostly third-person-neutral, statement-style. "You" in CTAs and contact copy.
- **Headlines:** short declaratives, sentence case, ending with a period. E.g. "Structured white space." "Frosted navy layers." "Infrastructure and land — not lifestyle." Two-beat lines are common: "The work is Tier-1. The brand still looks small."
- **Eyebrows:** UPPERCASE tracked Archivo, often numbered: "05 · COLOR", "UX UI — INTERACTIONS".
- **Middle dot ( · )** separates list items in labels: "MWBE · DBE · SBE · PE in 50 states". Arrows (→) mark sequence: "design → energization".
- **Numbers are proof:** written as specs, in mono — "12–500 kV", "PROJECT # Q26-7754", "32.7157°N, 117.1611°W". Use en dashes for ranges.
- **CTAs:** concrete actions — "Request capability statement", "View projects", "See our work", "Learn more →".
- **Show, don't explain:** before/after sliders, timelines, maps and badges over paragraphs.
- **Emoji:** never. ✓ and ✕ appear only as checklist marks.

## VISUAL FOUNDATIONS
- **Color:** Deep Navy #0C2834 base/authority; Steel Blue #37627C for body text and labels on light; Turquoise #37C6C0 is the primary accent (highlights, links, active states, eyebrows); **primary buttons use Green #D0D407 with navy text** so CTAs stand out; Green #D0D407 is a supporting environmental note, never a headline color; Mist #F8FCFD is a palette tint only. **Never use grey/mist as a background** — light surfaces are pure white (#FFFFFF), dark surfaces are navy. **Rule of one accent:** turquoise points, navy holds. On white, use turquoise-600/700 for turquoise *text* (contrast); full turquoise for fills.
- **Type:** Archivo (grotesque display, 700–800 headlines, 600 tracked labels) · Inter (body 16/26, caption 14/22 Light) · IBM Plex Mono (data, voltages, coordinates, stat numerals). Scale: Display 44/52, H1 32/40, H2 24/32, Body 16/26, Caption 14/22, Label 12/16 tracked. Marketing heroes go to 72/76. Office fallbacks: Arial, Calibri, Consolas.
- **Backgrounds:** dark navy sections with a soft radial turquoise **glow**; fine **concentric rings** (hairline, max two per cluster) bleeding off an edge. Alternate navy with white; separate consecutive white sections with a 1px hairline. No waves, no low-poly triangles, no busy patterns, no aggressive gradients. A navy→turquoise gradient appears only as a thin fade line.
- **Imagery:** real field photography — crews in hi-vis and hard hats, transmission across real terrain, laydown yards, right-of-way, substations. Muted, natural grade; warm daylight but not saturated; T3 teal as the accent. **Avoid:** coastal/ocean aerials, travel stock, lifestyle, clip-art icons, collages with wave overlays.
- **Layout:** disciplined grid, generous margins, one idea per section. 1200px container, 96px section padding. Empty space = quiet confidence.
- **Corner radii:** 8px inputs/chips · 16px cards/images · 24px sections/modals · full for buttons/pills. Sharp corners are out.
- **Cards:** white (or navy), 16px radius, 1px hairline (#E3ECF0) + very soft navy-tinted shadow. Interactive cards lift 2px with shadow-md on hover. Navy cards for spec blocks.
- **Shadows:** soft, low-opacity navy (rgba(12,40,52,.06–.14)). No hard drop shadows, no inner shadows.
- **Transparency & blur:** "frosted navy" panels (62–82% navy, 16px backdrop blur, 14% white hairline) over photography for specs, captions, CTA sections and nav-on-scroll. Photo scrims fade navy from bottom.
- **Motion:** subtle, precise, never playful. Section fade-up (opacity 0→1, translateY 20→0, ~700ms ease-out), 60ms stagger, rings draw in via stroke-dashoffset, counters count up on enter. No bounces or springs.
- **Hover:** images zoom 4–6% with a turquoise arrow appearing; primary (green) buttons darken to #BCC006; secondary gets a turquoise-100 fill (translucent white on navy); links underline; list rows reveal an arrow.
- **Press:** scale .98, turquoise-700. **Focus:** 3px turquoise ring at 35%.
- **Borders/dividers:** 40×3 turquoise accent bar above section titles; 1px hairline section dividers; navy→turquoise gradient fade line.
- **Accessibility:** WCAG AA treated as an engineering standard.

## ICONOGRAPHY
- **System:** Feather / Lucide line icons, **1.75px stroke** (matches Inter's weight), lineal, round caps. Loaded from CDN (`unpkg.com/lucide@0.469.0`) via the `Icon` component. No icon font or sprite was supplied; Lucide is what the board specifies, so no substitution.
- **Board set → Lucide names:** Tower → `utility-pole`, Protect → `shield-check`, Environ. → `leaf`, Certified → `badge-check`, Location → `map-pin`, Power → `zap`, Layers → `layers`, Spec → `ruler` (the board doesn't name exact glyphs; these are closest matches).
- **Rules:** minimal use — icons support, never replace copy. Steel by default; turquoise only for active/selected. Often set in a 36px turquoise-100 circle chip.
- **Emoji:** never. Unicode → and ✓ are used inline in copy and checklists.

## Logo
`assets/logo/` contains the uploaded swirl mark (blue-teal gradient ribbons around a navy "T₃"), plus white and black one-color versions. **Note:** the Brand Board cover shows a different mark (a white T3 inside circular cycle arrows). The uploaded files are used here; confirm which is current.
Lockup: mark + "T3 CONSULTING, INC." in Archivo 700, +0.22em tracking.

## Fonts
All three are Google Fonts, loaded via `@import` in `tokens/fonts.css` (no local binaries). Add self-hosted .woff2 files if offline use is needed.
