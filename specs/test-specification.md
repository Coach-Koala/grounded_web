---
title: grounded_web — Test Specification
date: 2026-07-16
status: proposed
executive_summary: >
  Right-sized test pyramid for a static marketing site: build/export gate,
  content gates (pricing, naming, links), component tests for the lead form's
  fail-loud behavior, accessibility and Lighthouse budgets, and a DNS/domain
  launch verification script. Every gate traces to an FMEA mode or threat.
---

# Test Specification

## Layers

| Layer                       | Tooling                                    | Gates                                                                                                         | Traces to   |
| --------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ----------- |
| 1. Build                    | `next build` (export mode), `tsc --noEmit` | export succeeds, zero type errors, zero warnings (CI `--max-warnings 0`)                                      | F4          |
| 2. Content                  | grep over `out/`                           | no `$15k`/`$30k`/pricing numerals; no "HippoHealth"/"Hip Health"; `CNAME` == `getgroundedhealth.com`          | F3, F10, T1 |
| 3. Links/assets             | lychee over `out/`                         | no broken internal links; logo assets present at all referenced sizes                                         | F6          |
| 4. Component                | Vitest + Testing Library                   | LeadForm: 201→confirmation; 4xx/5xx/network→visible error + mailto, no success state; honeypot filled→no POST | F1, T9      |
| 5. Accessibility            | Lighthouse CI                              | a11y ≥ 95 on `/`, `/employers`, `/advisors`; no banned color pairings                                         | F8          |
| 6. Performance              | Lighthouse CI                              | perf ≥ 90; page weight < 1 MB; fonts self-hosted (no external font requests)                                  | T7, F9      |
| 7. Launch (manual/scripted) | `scripts/verify-dns.sh`                    | A/AAAA/CNAME records correct; HTTPS enforced; org domain verified                                             | F2, F5, T1  |

## Style/lint

- ESLint + `eslint-plugin-tailwindcss`; custom rule/grep: no hex color
  literals outside `src/styles/tokens.css` (F7).
- Prettier for formatting; CI runs check mode.

## Traceability

Every CI gate above cites its FMEA mode or STRIDE finding. New failure modes
discovered during implementation must add a row here and in `fmea.md` — no
silent gates, no untraced tests.
