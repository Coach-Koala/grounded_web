---
title: grounded_web — Project Plan
date: 2026-07-16
status: proposed
executive_summary: >
  Three short sprints to an ASAP launch: Sprint 1 ships the deployable
  employer-first landing page with all High-rated security/content gates;
  Sprint 2 adds the audience sub-pages, blog scaffold, analytics, and SEO;
  Sprint 3 is launch cutover plus polish. Cross-repo dependencies ride the
  forge board, not this plan.
---

# Project Plan

Timebox: sprints are working sessions, not weeks — the owner wants ASAP with
no fixed date (D11).

## Sprint 1 — Deployable landing page (critical path)

Priority: all High threats (T1–T4, T6) and RPN ≥ 100 modes land here.

1. Repo setup: private `Coach-Koala/grounded_web`, branch protection on
   `main` (PR required), Dependabot on (T2, T6).
2. Next.js scaffold with `output: 'export'`; CI: build + type + lint gates,
   pinned-SHA actions, minimal workflow permissions (F4, T3).
3. Brand tokens (`tokens.css`) from the guide; Inter + JetBrains Mono via
   `next/font`; vendored logo PNG set (D9, F7).
4. Landing page `/`: hero with teal-to-bone wash, offer ladder, "what we
   analyze", "why Grounded", numbers band, scorecard CTA (D8).
5. LeadForm component with fail-loud error path + mailto fallback, endpoint
   from `NEXT_PUBLIC_LEADS_ENDPOINT` (F1, D5).
6. Content gates in CI: pricing grep, naming grep, CNAME check (F3, F10).
7. Deploy workflow to Pages (no custom domain yet — `*.github.io` preview).

**Exit:** site live on `coach-koala.github.io/grounded_web` (or Pages
default), all CI gates green, form error path demonstrated against a stub.

## Sprint 2 — Full v1 scope

1. `/employers` and `/advisors` pages (D4, D6).
2. `/insights` MDX scaffold with typed frontmatter, empty at launch (D4).
3. Plausible/Fathom snippet, async, site works with it blocked (D7, F9).
4. SEO/OG: metadata, social cards using badge-bone mark, sitemap, robots.
5. Link-check, Lighthouse a11y/perf gates wired into CI (F6, F8).
6. Copy pass with owner edits (D8).

**Exit:** full IA deployed to the preview host; Lighthouse gates green.

## Sprint 3 — Launch cutover + polish

1. Org-level domain verification for `getgroundedhealth.com` (T1, F5) —
   **before** DNS changes.
2. Custom domain + `public/CNAME`; owner sets GoDaddy records per
   `overview.md` table; run `scripts/verify-dns.sh` (F2).
3. Enforce HTTPS in Pages settings.
4. Swap `NEXT_PUBLIC_LEADS_ENDPOINT` to the live hippo-health endpoint when
   `t_807942b3` ships; re-run form e2e against production endpoint.
5. Visual polish: stylized data-viz band (grade boxes / bar chart mood per
   offering brief), spacing/typography sweep.

**Exit:** apex + www live over HTTPS, form posting to first-party endpoint
(or visibly failing over to mailto if endpoint still in flight).

## Backlog (P4)

- Lead-magnet PDF handoff flow (depends on scorecard pipeline)
- Negotiation-tool screenshot/mock section (offering brief §4)
- Pricing numbers (`t_18b035a6`)
- SVG mark swap when `t_431579cd` lands
- Blog launch content (3 evidence-led posts)

## Cross-repo dependencies (forge board)

| Task                             | Repo          | Gates                 |
| -------------------------------- | ------------- | --------------------- |
| `t_807942b3` `/api/leads`        | hippo-health  | live form submissions |
| `t_380cdb9e` demo subdomain      | hippo-health  | stable endpoint URL   |
| `t_3006aef4` analytics subdomain | 5500-explorer | nothing here          |
