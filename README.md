# grounded_web

Marketing site for **Grounded Health**. The active Vercel project is
`grounded_web`; its production URL is `https://grounded-web-tau.vercel.app`.

> See where your health plan is leaking money.

## Status

`grounded_web` is the Vercel-hosted static-export marketing site. Phase 1 of the
5500 → Phoenix consolidation makes it the public front door: apex and `www` move
to `grounded_web`, while the current 5500 scorecard remains live at
`https://scorecard.getgroundedhealth.com` and is embedded from `/scorecard/`.

## Key constraints

- **Vercel-hosted static build** — the current app still uses `output: 'export'`,
  so no middleware, ISR, API routes, or the image-optimization runtime. Vercel
  serves the exported files today; removing `output: 'export'` is the future path
  if this app becomes a dynamic multi-zone router.
- **Static scorecard bridge** — `/scorecard/` embeds the 5500 app in an iframe via
  `NEXT_PUBLIC_SCORECARD_APP_URL`. For the Phase 1 cutover, point it at
  `https://scorecard.getgroundedhealth.com` so apex/`www` can serve
  `grounded_web` without iframe recursion.
- **Brand system** — tokens from the Grounded Health brand guide
  (`hippo-health/positioning_docs/`); no raw hex colors outside
  `src/styles/tokens.css`.
- **Lead form fails loud** — POSTs to the hippo-health `/api/leads` endpoint
  (`NEXT_PUBLIC_LEADS_ENDPOINT`); on failure it shows a visible error and a
  `mailto:` fallback. It never fakes success.
- **No pricing numbers** on the site until pricing is final.

## Domain map

### Phase 1 cutover target

| Host / URL                            | Serves                                   |
| ------------------------------------- | ---------------------------------------- |
| apex + `www.getgroundedhealth.com`    | `grounded_web` marketing site on Vercel  |
| `scorecard.getgroundedhealth.com`     | temporary `5500-explorer` scorecard host |
| `https://grounded-web-tau.vercel.app` | `grounded_web` Vercel production URL     |
| `demo.getgroundedhealth.com`          | hippo-health app (Fly.io)                |
| `analytics.getgroundedhealth.com`     | not currently configured in DNS          |

### Historical validation

Validation on 2026-07-20 found apex/`www.getgroundedhealth.com` still served by
the `5500-explorer` Vercel app, while `grounded_web` was available at
`https://grounded-web-tau.vercel.app`. Treat that as the pre-cutover state, not
the desired embed target after Phase 1.

Set `NEXT_PUBLIC_SCORECARD_APP_URL` to choose which 5500 scorecard deployment or
local server `/scorecard/` embeds. For Phase 1, use:

```bash
NEXT_PUBLIC_SCORECARD_APP_URL=https://scorecard.getgroundedhealth.com
```

Use `NEXT_PUBLIC_SCORECARD_APP_URL=http://localhost:3100` only when developing
the 5500 scorecard backend locally.

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
