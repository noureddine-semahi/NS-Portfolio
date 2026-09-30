# SCREEN-SPEC.md: Phase 4, single route "/"

Status: draft, awaiting approval. Nothing is built yet. Companion to DESIGN.md.

## 1. Route and purpose

One page, `/`. It tells a hiring manager, in this order: what he does (hero), the three credentials that matter (About), the evidence (Experience), proof he builds (Work), what supports it (Skills, Education), how to reach him (Contact).

## What the page must communicate (derived from the brief)

A recruiter needs one sentence they can repeat to a colleague, then proof in priority order: regulated medical-device validation at Join Parachute first, Google mobile and wearable QA second, autonomous-vehicle work third. Only after that do they care that he also builds apps (StandUp) and what he is looking for. Everything else is supporting detail for people who read closely, so the detail lives in a collapsible Experience ledger and never crowds the top of the page.

## 2. Hero pattern

**Pattern 10, Minimal / Typographic.** No photography, no mockup, no gradient. The headline does the work at `clamp(44px, 7vw, 72px)`, weight 700, tight tracking, `text-wrap: balance`. Below it, the approved subhead at about 20px with a 60ch measure. Two actions: primary "Read my experience" (`--accent-ink` fill, jumps to Experience), secondary "Email me" (text link with underline). A small line under the actions: "Austin, TX · open to remote". No eyebrow above the headline.

## 3. Imagery audit gate

Category: photography optional. **Imagery URLs: none.** The owner supplied no headshot or screenshots and chose a typography-led page. No `<img>` tags, no Picsum or Unsplash, no placeholder boxes. Later, StandUp screenshots slot into the featured card and a headshot slots into About. The layout must not need them.

## 4. Full-page section map

| # | Section | Layout | Background | Containment | Visual type |
|---|---|---|---|---|---|
| 0 | Header | Scroll-state header, 4 links + CTA | transparent, then blur + hairline | none | type |
| 1 | Hero | Minimal/typographic, left aligned, min-height about 80dvh | `--bg` | none | typography |
| 2 | About | Editorial two-column: heading left, prose right (Pattern 3) | `--bg-2` | editorial prose, hairline rules | typography |
| 3 | Experience | Ledger per role, sticky meta column, timeline rail (Pattern 1) | `--bg` | ledger | typography |
| 4 | Work | Asymmetric: one featured card, then definition list of concepts (Pattern 2) | `--bg-2` | 1 card + definition list | typography |
| 5 | Skills and Education | Two-column: skills definition list, education definition list | `--bg` | definition lists | typography |
| 6 | Contact | Full-width typographic, large email link | `--panel` (dark) | none | typography |
| 7 | Footer | Minimal utility | `--panel` | borderless | type |

- No two adjacent sections share a background (bg, bg-2, bg, bg-2, bg, panel, panel is the one exception: the footer continues the Contact panel, separated by a hairline).
- Layout patterns used: typographic hero, editorial two-column, ledger, asymmetric featured + list, dual definition list, full-width statement. That is six different patterns.

### About, in order

1. Opening paragraph (existing).
2. Highlights paragraph (Join Parachute, Google, autonomous vehicles), as supplied.
3. Building paragraph (existing paragraph 2: React and Next.js, concept through spec, Data Analytics training).
4. "Looking for next" paragraph, as supplied.

Please note two content issues in section "Open questions" below.

### Experience behavior

- Order stays chronological, most recent first, all 8 roles.
- Every role shows a collapsed header: role, company, location, dates. Header is a real `<button>` (`aria-expanded`), 44px minimum height.
- **Open by default: Join Parachute and Google** (your stated priority). All others collapsed but fully in the DOM and readable when expanded. An "Expand all" text control sits above the ledger.
- Expanded content is the full bullet text, unchanged, as ledger rows: `border-bottom: 1px solid var(--hairline)`, no markers.
- Without JavaScript, every role is open (`<details>`-style fallback).
- A 1px vertical rail runs beside the ledger and draws down as you scroll. A small dot marks the current role.

### Work

- **Featured card (StandUp):** name, tagline, description, "View live" link (external, opens new tab), stack as a plain comma line (Next.js, Supabase, Vercel). The 8 highlights become a two-column definition-style run: short label (first words of each highlight) is NOT invented; instead the eight sentences are set as ledger rows unchanged. No video box, no image slot rendered.
- **Concepts (TrackApply, Privé, Let's Go Y'all, Invitely):** definition list, name left in accent, tagline and description right. A single sentence above: "Fully scoped products with completed briefs, user stories, and business planning. Development pending." The tiny "Concept" pill badges are removed (the sentence carries it).

### Skills and Education

- **Skills**, grouped into a definition list (grouping is a layout choice; no skill added or removed):
  - Testing and validation: Test Automation (Selenium, Playwright, Cypress), API Testing (Postman), Product Specification and User Stories
  - Building: React, Next.js, JavaScript, Supabase, Stripe Connect, Git and GitHub, UI/UX Design
  - Data: Python, SQL, Power BI
- **Education and Credentials**, definition list, credential on the left, institution and year on the right, in the order supplied:
  - Full Stack Web Development Certificate: University of Texas at Austin, 2020
  - Data Analytics: Vijay Computer Academy (in progress)
  - BSc, Sciences of Language and Didactics: Abderrehmane Mira University, 2010
  - Linguistics and Didactics, Graduate Coursework: Paris Descartes University, 2011

### Contact

Large sentence: "Looking for a validation or QA role? Write to me." The email address is the main element (`noureddine.semahi@gmail.com`, 40px, underlined on hover), then LinkedIn and GitHub (https://github.com/noureddine-semahi) as text links. CTA copy and email differ from the hero CTAs on purpose.

### Footer

Type: **minimal utility.** Wordmark, the four section links, legal line ("© 2026 Noureddine Semahi"). No fabricated columns, no status pill, no theme toggle (site has no theme switch).

## 5. Containment variance plan

| Section | Containment |
|---|---|
| Hero | none, typography |
| About | editorial prose with hairline rules (Pattern 3) |
| Experience | ledger (Pattern 1) |
| Work | 1 default card + definition list (Pattern 2) |
| Skills and Education | definition lists (Pattern 2) |
| Contact | none, typographic on dark panel |
| Footer | borderless minimal utility |

Default card count: **1** (StandUp), budget 2. Distinct containment types: 5. Pass.

## 5b. Bullet budget

There are **zero** bullet markers on the page. The sources of list-like content and how each is handled:

| Content | Old form | New form |
|---|---|---|
| Experience bullets (about 60 rows across 8 roles) | `›` marker list | Ledger rows, hairline separated, no marker |
| StandUp highlights (8) | `›` marker list | Ledger rows |
| Skills (13) | pills | Grouped definition list, comma-separated |
| Education (4) | none | Definition list |
| Nav / footer links | n/a | Exempt (navigation) |

**Honest caveat:** the skill counts "icon-plus-short-text repeated rows" as bullets. Experience and StandUp rows are full sentences, not short labels, and are the sanctioned Pattern 1. The row count is the owner's decision to keep verbatim content. Collapsing older roles is the mitigation.

## 5c. Pricing decision

No pricing. Not applicable.

## 5d. Stat decision

No stat strip, no counters. Numbers live inside prose (Pattern 5): "ten years" in the subhead and the AV programs in the About highlights. No figure is invented.

## 5e. Product-UI surface gate

None. No live UI mockup, PDP, command palette or trust surface.

## 5f. WebGL / 3D gate

None.

## 6. Illustration and visual plan

All sections typography-driven. No SVG illustration, no mockups, no gradients. The only graphic is the 1px Experience timeline rail. Icons: one external-link arrow and the menu icon, outlined, 1px stroke.

## 7. ASCII wireframe

```
┌────────────────────────────────────────────────────────────────┐
│ Noureddine Semahi        About Experience Work Contact [Email] │  header
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  I find where complex systems                                  │
│  fail, then build the fix.                                     │  hero
│                                                                │
│  Ten years in quality and validation, from FDA-regulated...    │
│  [Read my experience]   Email me                               │
│  Austin, TX · open to remote                                   │
├────────────────────────────────────────────────────────────────┤
│  About            Opening paragraph...                         │  bg-2
│                   Highlights paragraph...                      │
│                   Building paragraph...                        │
│                   Looking-for-next paragraph...                │
├────────────────────────────────────────────────────────────────┤
│  Experience   [Expand all]                                     │
│  │ Apr 2026 –   Vehicle Safety Operator · Avride        [+]    │  collapsed
│  ● Mar 2023 –   Validation Specialist · Join Parachute  [–]    │  open
│  │              ─ row ─────────────────────────────────        │
│  │              ─ row ─────────────────────────────────        │
│  │ Feb 2024 –   Autopilot Software Test Operator · Tesla [+]   │
│  │ Aug 2021 –   Validation Specialist · Google          [–]    │  open
│  ...                                                           │
├────────────────────────────────────────────────────────────────┤
│  Work        ┌────────────────────────────┐                    │  bg-2
│              │ StandUp        View live → │  1 card            │
│              │ description, ledger rows   │                    │
│              └────────────────────────────┘                    │
│  In design   TrackApply    tagline + description               │
│              Privé         tagline + description               │
├────────────────────────────────────────────────────────────────┤
│  Skills                     │  Education and Credentials       │  bg
│  Testing and validation ... │  Full Stack Certificate ...      │
├────────────────────────────────────────────────────────────────┤
│  (dark)  Looking for a validation or QA role? Write to me.     │
│          noureddine.semahi@gmail.com                           │
│          LinkedIn · GitHub                                     │
│  Noureddine Semahi    About Experience Work Contact   © 2026   │
└────────────────────────────────────────────────────────────────┘
```

## 8. Cognitive load

Nav has 4 links and 1 CTA. One primary button per view (hero: "Read my experience"). No forms. Contact is a mailto link, not a form.

## 9. Interaction states (all 8 where applicable)

Applies to: header links, CTA button, hero secondary link, Experience toggle buttons, "Expand all", StandUp "View live", concept rows (not interactive), footer links, contact links, mobile menu button.

Each defines: default, hover (150 to 200ms, darker or underline), focus-visible (2px ring, 3:1 or better, near-white ring on `--accent-ink` fills), active, disabled (n/a, none used), loading (n/a), selected/expanded (Experience toggle uses `aria-expanded`), and visited (links keep the accent color).

## 10. Responsive spec

| Width | Behavior |
|---|---|
| 320 | Single column. Hero H1 44px. Ledger meta stacks above detail. Header shows menu button and drawer. |
| 640 | Two-line hero subhead. Skills and Education still stacked. |
| 768 | Header switches to inline links. About goes two-column. |
| 1024 | Experience switches to sticky meta column (220px) beside the detail. Skills and Education side by side. |
| 1280 | Content width capped at 1120px. Hero H1 reaches 72px. |
| 1536 | Same 1120px column, centered. Wider outer margin only. |

Body 17px, ledger rows 16px. Touch targets 44px minimum. No horizontal scroll. `min-h-[100dvh]` not `h-screen`.

## 11. Animation plan

1. **Typographic (required):** hero headline line-by-line reveal, one time, 700ms, `cubic-bezier(0.16, 1, 0.3, 1)`, 24px travel. Not letter-by-letter.
2. **Domain-specific:** the Experience timeline rail draws with scroll (CSS scroll-driven animation, `transform: scaleY`), and the current role's dot pulses once. It reads like a test-run trace.
3. **Supporting:** role expand/collapse uses `grid-template-rows` 0fr to 1fr with opacity (400ms). Section content fades up at 16px for small blocks and 32px for large ones, staggered 60ms. Hover states 150 to 200ms.

All of it is transform and opacity where possible, disabled under `prefers-reduced-motion`, and content is fully visible without JS.

## Build notes (Phase 5 preview)

- Next.js 16: read the relevant guide in `node_modules/next/dist/docs/` before writing code, per AGENTS.md.
- Font through `next/font/google` (Bricolage Grotesque, `opsz` axis, `display: swap`). Remove Geist and Geist Mono.
- Rewrite `globals.css` tokens to the OKLCH set in DESIGN.md. Split `page.tsx` data into a `content` module so text stays in one place. Experience text is moved, never edited.
- Metadata and `noindex` remain as they are unless told otherwise.

## Open questions

1. **"Most recently" in the highlights paragraph.** It says "Most recently I owned end-to-end validation... at Join Parachute", but Avride (Apr 2026, current) is more recent, and the Experience ledger lists it first. Suggest "Most recently in regulated software, I owned..." or "Before Avride, I owned...". Which do you want?
2. **About length and overlap.** Adding the highlights paragraph makes About four paragraphs, and the opening one already lists Waymo, Tesla, Avride, Join Parachute, Google, Apple and YouTube. I suggest trimming the opening's company list, since the highlights paragraph now carries it. OK to trim, or keep both as written?
3. **Avride collapsed by default.** Your current role is collapsed under your priority order, though its header (title, company, dates) is always visible. Comfortable with that, or open it too?
4. **Contact email.** The code uses noureddine.semahi@gmail.com. Confirm that is the address you want public.
