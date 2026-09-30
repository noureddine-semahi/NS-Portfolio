# DESIGN.md: Noureddine Semahi portfolio

Status: Phase 3 approved (2026-09-29) with the revisions below. Phase 4 spec is in SCREEN-SPEC.md. Nothing is built yet.

## Approved revisions

- **Subhead (replaces the draft):** "Ten years in quality and validation, from FDA-regulated medical device software to mobile and wearable platforms at Google to autonomous vehicles at Waymo, Tesla and Avride." Approved as written, although it runs about 175 characters against the skill's 120-character subhead limit. It is set at a comfortable measure so it still reads cleanly.
- **Hero headline:** unchanged, "I find where complex systems fail, then build the fix."
- **About:** gains a highlights paragraph (Join Parachute, then Google, then autonomous vehicles) and the "looking for next" paragraph, both supplied by the owner.
- **Education and Credentials:** new block beside Skills.
- **Content priority:** Join Parachute, then Google, then autonomous-vehicle work. Web development and data analytics support, never compete.
- **Images:** none for now. Typography-led, video placeholder removed. Screenshots can be added later.
- **GitHub:** https://github.com/noureddine-semahi

## Product context

- **Product:** Personal portfolio for a validation/QA engineer who also builds web apps.
- **Audience:** Recruiters and hiring managers in autonomous vehicles, medtech and QA. Secondary: collaborators and freelance clients.
- **Register:** Brand. The design is part of the pitch.
- **Memorable thing:** He finds where complex systems fail, then builds the fix.
- **Anti-references:** Neon "hacker" dev portfolios, resume-PDF-on-a-webpage, template card grids.
- **Constraint:** Experience content stays word for word. Only its presentation changes.
- **Indexing:** The site is deliberately `noindex` (see `layout.tsx` and `robots.txt`). This design pass does not change that.

## Scene sentence

A recruiter at a desk in mid-morning daylight, a dozen candidate tabs open, deciding in thirty seconds whether this person earns a call. If yes, they slow down and read the detail closely.

That forces: **light theme**, cool-neutral, clear hierarchy up top, and dense but comfortable reading below.

## Aesthetic direction

Quiet, exact, confident. Large type, lots of white space, hairline rules instead of boxes. Precision is the mood, so no decoration that isn't information.

## Imagery decision

Category: photography optional (a person's portfolio, software work).

- No stock photos of people, ever.
- Two real-image slots, designed to work only if you supply the images:
  1. Headshot in the hero or About section.
  2. StandUp screenshots in the featured project.
- If a slot has no image, the layout closes up and the section is typography-led. No placeholder boxes, no gradient stand-ins. The current "[ Intro video goes here ]" box is removed.

## Font system

- **One family: Bricolage Grotesque** (self-hosted through `next/font`, subset, `font-display: swap`, automatic metric-matched fallback). It has an `opsz` axis, so `font-optical-sizing: auto` is honest. Weights: 400 body, 500 labels, 600 headings, 700 hero.
- Candidates considered: Instrument Sans, Albert Sans, Switzer, Geist (current), Bricolage. Geist is dropped because it is the scaffold default.
- **No monospace anywhere.** Dates, periods and numbers use the sans with `tabular-nums`. The current mono uppercase section labels are removed.
- No italics. `text-wrap: balance` on headings, `text-wrap: pretty` on prose, `tabular-nums` on all dates and figures.
- **Scale:** base 17px, ratio 1.333 (17 / 22.7 / 30 / 40 / 54 / 72). Hero H1 is `clamp(44px, 7vw, 72px)`. Body in the Experience ledger is 16px for density.

## Color (OKLCH, all derived from hue 200, a cool teal-blue, continuing the current teal accent)

| Token | Value | Use |
|---|---|---|
| `--bg` | oklch(0.985 0.004 200) | page paper |
| `--bg-2` | oklch(0.955 0.008 200) | alternate sections, hairline fills |
| `--text` | oklch(0.16 0.012 200) | headings, primary text |
| `--text-2` | oklch(0.42 0.012 200) | body copy |
| `--text-3` | oklch(0.52 0.012 200) | dates, meta (still AA) |
| `--accent` | oklch(0.50 0.105 200) | links, rules, small marks, tints (lowered from 0.58 in the build so accent text passes AA on both paper tones) |
| `--accent-ink` | oklch(0.44 0.10 200) | primary button fill (near-white text) |
| `--accent-hover` | oklch(0.40 0.10 200) | hover, darker than rest |
| `--accent-focus-ring` | near-white | ring on the filled button |
| `--panel` | oklch(0.19 0.02 200) | the one inverted (dark) section: Contact |
| `--hairline` | oklch(0.16 0.012 200 / 0.10) | all rules |

Rules: no `#000` or `#fff`, no gradients, no cream, accent stays visible on links, rules and the tinted band, `--accent-ink` is background-only.

## Spacing, layout, radius

- Base unit 8px, spacious rhythm: 8 / 16 / 24 / 40 / 64 / 104 / 160. Section padding 104 to 160px.
- Content width 1120px. Reading measure 65 to 72ch. Experience is a two-column ledger (220px sticky meta, flexible detail).
- Radius: 8px buttons and inputs, 16px for the single featured-project card. Nothing else is rounded.
- Icons: outlined, 1px stroke, one family, only where they carry meaning (external-link arrow, menu).

## Section plan and containment

| # | Section | Containment | Background |
|---|---|---|---|
| 1 | Hero | Typography only, no container | `--bg` |
| 2 | About | Editorial prose with a run-in stat sentence (Pattern 3 + 5) | `--bg-2` |
| 3 | Experience | Ledger per role, sticky meta column (Pattern 1) | `--bg` |
| 4 | Work | One featured card (StandUp) + concepts as a definition list (Pattern 2) | `--bg-2` |
| 5 | Skills | Definition list grouped by type (Pattern 2) | `--bg` |
| 6 | Contact | Typographic, inverted panel | `--panel` |
| 7 | Footer | Minimal utility (wordmark, real links, legal), borderless | `--panel` |

- Default card used once (StandUp), budget is two.
- Three or more containment types, no two adjacent sections alike.
- **Bullets: zero markers.** Every Experience bullet becomes a ledger row (hairline-separated text, no dot or arrow). This is the sanctioned Pattern 1, but with roughly 60 rows it is a judgment call against the skill's "no repeated short rows" wording. The mitigation is that the older roles collapse and the two most recent open by default. All text stays in the DOM.
- **Eyebrows: zero.** Section headings are plain H2s.

## Motion

- Hero headline line-by-line text reveal (typographic, once).
- Scroll-drawn timeline rail beside Experience, with a marker on the current role (domain-specific: it reads like a test-run trace).
- Role expand/collapse height transition, hover 150 to 200ms, reveal 400 to 600ms. Custom cubic-bezier only, transform and opacity only, `prefers-reduced-motion` disables all of it.

## Navigation and header

Transparent over the hero, then hairline plus backdrop blur and a slight shrink past a scroll threshold. Four links (About, Experience, Work, Contact) and one CTA. Mobile drawer with scroll-lock, focus trap and Esc to close. Skip link present.

## UX writing (draft, subject to your edit)

- **Hero headline (54 chars):** "I find where complex systems fail, then build the fix."
- **Subhead (about 112 chars):** "Ten years validating autonomous vehicles, medical software and maps data. Now building the tools I wish existed."
- **CTAs:** "Read my experience" (primary), "Email me" (secondary).
- **About paragraph 3:** needs your answer (what you're looking for next). I will not invent it.
- **GitHub link:** needs your real URL. Until then the link is removed, not left as a placeholder.
- No banned words, no section numbers, no dates outside the Experience ledger.

## Decisions log

| Date | Decision | Rationale |
|---|---|---|
| 2026-09-29 | Keep all Experience text verbatim | Story of past experience is the core asset |
| 2026-09-29 | Dark to light theme | Scene: recruiter at a desk, daylight |
| 2026-09-29 | Bricolage Grotesque replaces Geist, mono dropped | Skill bans scaffold-default type and mono labels |
| 2026-09-29 | Keep `noindex` | Existing deliberate choice, not part of this pass |
| 2026-09-29 | Lead with validation/QA roles | Deepest experience; web work is supporting proof |
