# grounded_web

Marketing site for **Grounded Health** — `getgroundedhealth.com`, served from
GitHub Pages (Next.js static export).

> See where your health plan is leaking money.

## Status

Blueprint stage. `specs/` holds the full plan; no application code yet.
Start with `specs/compiled-project-plan.md` for the execution batches.

## Key constraints

- **Static only** — `output: 'export'`; no middleware, ISR, API routes, or
  the image-optimization runtime. GitHub Pages serves files, nothing else.
- **Brand system** — tokens from the Grounded Health brand guide
  (`hippo-health/positioning_docs/`); no raw hex colors outside
  `src/styles/tokens.css`.
- **Lead form fails loud** — POSTs to the hippo-health `/api/leads` endpoint
  (`NEXT_PUBLIC_LEADS_ENDPOINT`); on failure it shows a visible error and a
  `mailto:` fallback. It never fakes success.
- **No pricing numbers** on the site until pricing is final.

## Domain map

| Host         | Serves                           |
| ------------ | -------------------------------- |
| apex + `www` | this site (GitHub Pages)         |
| `demo`       | hippo-health app (Fly.io)        |
| `analytics`  | 5500-explorer scorecard (Vercel) |

## Specs

| File                             | Contents                                    |
| -------------------------------- | ------------------------------------------- |
| `specs/decisions.md`             | Phase 0 decision records (D1–D12)           |
| `specs/decision-tree.md`         | dependency-ordered decision map             |
| `specs/overview.md`              | architecture, IA, data flow, DNS records    |
| `specs/threat-model.md`          | STRIDE findings T1–T9                       |
| `specs/fmea.md`                  | failure modes F1–F10 + generated test cases |
| `specs/test-specification.md`    | 7-layer test plan with traceability         |
| `specs/project-plan.md`          | three sprints to launch                     |
| `specs/compiled-project-plan.md` | agent-executable batches                    |
