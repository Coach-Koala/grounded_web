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

| Host | Serves | Platform |
|---|---|---|
| apex + `www` | grounded_web marketing site | GitHub Pages |
| `demo` | hippo-health app | Fly.io (task `t_380cdb9e`) |
| `analytics` | 5500-explorer public scorecard | Vercel (task `t_3006aef4`) |

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
