---
title: grounded_web — Decision Records (Phase 0)
date: 2026-07-16
status: confirmed
executive_summary: >
  Twelve confirmed decisions from the blueprint grill: a private Coach-Koala
  repo serving a Next.js static-export marketing site from GitHub Pages at
  getgroundedhealth.com, employer-first messaging built on the claims-integrity
  offering (free scorecard → integrity scan → continuous monitoring), leads
  posted to a hippo-health endpoint built in parallel, Grounded Health brand
  system applied from the hippo-health positioning docs.
---

# Decision Records

Source: interactive grill, 2026-07-16. Deferred items carry forge task IDs.

## D1 — GitHub org and repo

**Decision:** Private repo `Coach-Koala/grounded_web` (org confirmed; "consultkoala"
was shorthand for Coach-Koala). Org is on the Team plan, so Pages from a private
repo is supported.

**Constraint:** GitHub Pages output is still publicly served — the private repo
hides source only. Access-controlled Pages would require Enterprise Cloud.
Acceptable: public output is the purpose of a marketing site.

## D2 — Domain map

**Decision:** Subdomain plan for `getgroundedhealth.com` (DNS at GoDaddy, owner
updates records):

| Host         | Serves                         | Platform                   |
| ------------ | ------------------------------ | -------------------------- |
| apex + `www` | grounded_web marketing site    | GitHub Pages               |
| `demo`       | hippo-health app               | Fly.io (task `t_380cdb9e`) |
| `analytics`  | 5500-explorer public scorecard | Vercel (task `t_3006aef4`) |

Supersedes `hippo/specs/overview.md`, which mapped the apex to the Fly app.

## D3 — Stack

**Decision:** Next.js with static export (`output: 'export'`), deployed to
GitHub Pages via GitHub Actions. Chosen for a future graduation path to
Vercel/SSR. No server-only features (middleware, ISR, API routes, image
optimization service) may be introduced — CI enforces a clean static export.

## D4 — v1 scope

**Decision:** All four scope items ship in v1: single landing page, lead
capture form, employer + advisor sub-pages, blog/insights scaffold (content
collection may launch empty).

## D5 — Lead capture

**Decision:** Form POSTs to a hippo-health endpoint
(`https://demo.getgroundedhealth.com/api/leads`), which the owner builds in
parallel (task `t_807942b3`). Endpoint URL is injected at build time via
`NEXT_PUBLIC_LEADS_ENDPOINT`. The form fails loud: visible error plus mailto
fallback when the endpoint is unreachable — never fake success.

## D6 — Primary audience

**Decision:** Employer-first hero. Advisors get a dedicated sub-page.

## D7 — Analytics

**Decision:** Privacy-first analytics (Plausible or Fathom) — no cookie
banner. Script loads from the provider; exact vendor chosen at implementation.

## D8 — Copy source and positioning

**Decision:** Copy drafted from `hippo-health/positioning_docs/` plus the
owner's offering brief; owner edits before launch. Positioning leads with
outcomes, not methodology:

- **Headline:** "See where your health plan is leaking money."
- **Subhead:** independent view into claims spend, vendor performance,
  contract issues, and savings opportunities — starting with a free scorecard.
- **Product architecture:** one platform, three ways to engage —
  Free Scorecard (lead gen) → Claims X-Ray / Integrity Scan (paid, fee as %
  of verified recovery) → Continuous Monitoring (annual recurring).
- **Supporting solution areas:** vendor accountability, contract review,
  benchmarking / market intelligence, negotiation & decision support.
- **Three-tier depth strategy:** website = stylized high-level; lead-magnet
  PDF = partial findings + CTA; authenticated app = full scorecard.
- Voice rules from the brand guide apply (lead with the number, short
  sentences, "you", cite sources, no middle-man language).

**Amended 2026-07-16 (owner review):** Grounded is **not** a payment
integrity provider and must not read as one — it helps employers _manage_
their payment integrity provider along with every other vendor. Remove
recovery-fee ("% of verified recovery") framing from the site. Copy targets
the CFO: healthcare ≈ 30% of direct employee cost, people costs can be 70%
of total costs, recovered waste is contribution margin / EPS. Offer ladder
is now Free Scorecard → Spend X-Ray → Continuous Management. The site shows
real platform screenshots (employer dashboard + KPI bands) and the team
(Kearns, Simpson Rochwerger, Shangle, Vertrees) with LinkedIn links.

**Amended 2026-07-17 (Demo-updates PRD + v1 draft):** Positioning is now
platform-not-report with a team of agents working continuously (24/7), per
the owner-supplied draft (`grounded-health-website-v1.html`) and PRD. The
offer ladder is replaced by the **five acts** with a data-depth meter:
Act 1 Scorecard (free, public data) → Act 2 Health Plan X-ray (flat fee,
featured) → Act 3 Recovery (vetted partner's contingency, Grounded takes
$0) → Act 4 Assurance (flat annual, continuous) → Act 5 Care Quality
Verification (add-on). Hero: "Your company spent millions on healthcare
last year. Nobody checked the bills." Stat band uses the draft's concrete
figures. Owner confirmed publishable: PBC ("in the charter") and flat-fee /
no-cut-of-recoveries structure (still no specific dollar pricing — D10
holds). CTA is dual: lead form + Calendly (calendly.com/alyssasr). Branding
stays the current moss/paper system — the draft's serif/terracotta styling
was not adopted. Demo-app narrative changes deferred (task `t_c68458c1`).

## D9 — Brand system

**Decision:** Apply the Grounded Health brand guide
(`hippo-health/positioning_docs/Hippo Health - Branding Guide.md`) as design
tokens: Hippo Teal `#145E63`, Hippo Ink `#0E1F24`, Bone `#F5EFE4`, Mist
`#E7EDE9`, secondary Sage/Deep Spruce/Warm Cream, functional data palette;
Inter (display/body) + JetBrains Mono (eyebrows/labels); teal-to-bone wash on
the hero only; hippo mark rules enforced (never recolored, ink-on-light or
white-on-dark only). Mark assets: existing PNG set
(`hippo-health/src/priv/static/images/logo/`); SVG refinement deferred
(task `t_431579cd`).

**Superseded 2026-07-16 (owner review):** the April 2026 guide's teal palette
is stale. The live design system in hippo-health (`brand.html` +
`design-system.css`, committed 2026-06-19, after the guide) uses the same
token names with moss-green values: Deep Spruce `#355726` (primary), Sage
`#90BD53`, Chart Sage `#A9C56D`, Ink `#1A1A18`, Bone `#F6F3EE`, Mist
`#ECE7DD`, Savings `#16A34A`, Attention `#D97706`, Overpay `#DC2626`. The
site now uses this palette; the teal-to-bone hero wash is replaced by a flat
Deep Spruce hero. Typography and mark rules unchanged. Reconciling the guide
document itself is tracked on the forge board.

**Refined 2026-07-17 (owner: "greens still don't match"):** pixel-sampling
the running app shows the live brand is a hybrid — moss chrome (Deep Spruce
`#355726` buttons/accents on Bone `#F6F3EE`) plus a **Hippo Teal signature
band** for hero/feature surfaces: `linear-gradient(135deg, #145E63 0%,
#0D4548 100%)` (used by the newest LiveViews, 2026-06-22, newer than
design-system.css). The site's hero and "How we're paid" band now use the
exact same gradient (`.band-wash` in tokens.css); buttons and accents stay
moss. This also makes the site's bands match the teal bands visible inside
the platform screenshots.

## D10 — Pricing

**Decision:** No dollar amounts on the site. Tier framing only: free
scorecard, performance-based scan, annual monitoring plans. The $15k–$30k/yr
placeholder is explicitly not final and must not ship (task `t_18b035a6`).
CI greps built output for forbidden pricing strings.

## D11 — Timeline

**Decision:** ASAP, no fixed date or event. Landing page ships as soon as
solid; sub-pages and blog follow immediately after.

## D12 — Launch gate

**Decision:** Marketing launch does not hard-block on the leads endpoint;
the owner builds it in parallel. If the endpoint is not live at launch, the
form's fail-loud path (visible error + mailto) is the interim behavior — no
third-party form service.
