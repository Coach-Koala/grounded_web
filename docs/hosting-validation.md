# Hosting validation — grounded_web + 5500-explorer

Validated on 2026-07-20.

## Historical findings

These facts describe the pre-cutover state observed on 2026-07-20. Preserve them
as validation context, but do not treat apex/`www` as the desired long-term 5500
embed target.

- `grounded_web` is connected to Vercel. GitHub reports Vercel deployments for
  `Coach-Koala/grounded_web`, and the repo homepage is
  `https://grounded-web-tau.vercel.app`.
- The `grounded_web` repository still contains legacy GitHub Pages deployment
  machinery (`.github/workflows/ci.yml`) and `next.config.ts` still uses
  `output: "export"`. That means the current app is Vercel-hosted, but still a
  static export.
- `https://getgroundedhealth.com` redirects to
  `https://www.getgroundedhealth.com`, and both are served by Vercel.
- The live apex/`www` site was the `5500-explorer` app, not this marketing repo.
  Production page markers matched `5500-explorer`:
  - title: `Grounded Health — Your health plan publishes its costs. We read them.`
  - copy: `Is your health plan well-run? Prove it in two minutes.`
  - public API references: `/api/public/resolve`, `/api/public/leads`,
    `/api/public/lead-request`
- `analytics.getgroundedhealth.com` was not configured in DNS.
- `5500-explorer` docs also stated that Vercel project `5500-explorer` owned the
  live `getgroundedhealth.com` apex/`www` domains.

## Phase 1 cutover target

Phase 1 of the 5500 → Phoenix consolidation changes the public routing shape:

- apex and `www.getgroundedhealth.com` move to the `grounded_web` Vercel project.
- `scorecard.getgroundedhealth.com` becomes the temporary 5500 host.
- `/scorecard/` in `grounded_web` embeds `https://scorecard.getgroundedhealth.com`
  by default through `NEXT_PUBLIC_SCORECARD_APP_URL`.
- Vercel remains the primary hosting surface. GitHub remains canonical for source,
  pull requests, CI, and historical deployment docs.

This split avoids iframe recursion after apex/`www` move to `grounded_web` while
keeping the dynamic 5500 funnel live.

## Current integration choice

Keep `grounded_web` static for this bridge and expose `/scorecard/` as a single
entry point that embeds the live 5500 app. The expected Phase 1 embed target is:

```bash
NEXT_PUBLIC_SCORECARD_APP_URL=https://scorecard.getgroundedhealth.com
```

This lets someone run only `grounded_web` locally for the marketing funnel, while
running `5500-explorer` separately only when actively changing the scorecard
backend. For backend development, set:

```bash
NEXT_PUBLIC_SCORECARD_APP_URL=http://localhost:3100
```

## Static-export constraints

`grounded_web` still uses `output: "export"`, so this bridge must remain static:

- no API routes;
- no middleware;
- no ISR or server runtime assumptions;
- no Next image-optimization runtime dependency;
- no ad-hoc proxy rewrites for 5500 APIs.

## Better long-term Vercel shape

If `grounded_web` becomes a dynamic apex/`www` router later, remove the
static-export constraint and use Next.js multi-zones instead of an iframe:

1. Give the 5500 app a stable public zone host or subdomain.
2. Add `assetPrefix`/path support to the 5500 zone if it is mounted below a path
   such as `/scorecard`.
3. Route all 5500-owned paths from the primary app to that zone, at minimum:
   - `/scorecard` and `/scorecard/:path*` (or move the scorecard root into that
     path in `5500-explorer`)
   - `/api/public/:path*`
   - `/api/scorecard`
   - `/ingest/:path*` if PostHog proxying remains active
   - any public assets required by the 5500 zone
4. Use hard links (`<a>`) between zones, not `next/link`, per the local Next.js
   multi-zone docs.

Until those route/asset/API ownership questions are resolved, iframe embedding is
the lowest-risk integration that preserves the dynamic 5500 lead funnel.
