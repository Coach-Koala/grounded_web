<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project context — read before working

`grounded_web` is the Grounded Health marketing site. Treat the current deployment model as
**Vercel-primary with GitHub as the source-of-truth repo and CI/docs surface**.

## Deployment truth

- **Vercel is primary.** The active `grounded_web` production deployment is on Vercel
  (`https://grounded-web-tau.vercel.app`). Do not assume GitHub Pages is the live host.
- **GitHub is still canonical for source, PRs, CI, and historical deployment docs.** The repo
  may still contain GitHub Pages/static-export references from the earlier launch plan; treat
  those as legacy unless confirmed against `README.md` and `docs/hosting-validation.md`.
- Historical validation on 2026-07-20 found apex/`www.getgroundedhealth.com` served by the
  `5500-explorer` Vercel app and `analytics.getgroundedhealth.com` absent from DNS. That was
  the pre-cutover state, not the Phase 1 target.
- **Phase 1 cutover target:** apex and `www.getgroundedhealth.com` move to the `grounded_web`
  Vercel project. `scorecard.getgroundedhealth.com` becomes the temporary 5500 host.
- `grounded_web` still uses `output: "export"` today. That means it is Vercel-hosted but
  static-exported; do not add API routes, middleware, ISR, or image-optimization runtime
  dependencies unless explicitly changing the deployment model.
- If `grounded_web` becomes a dynamic apex router later, prefer a documented Vercel/Next
  multi-zone plan over ad-hoc proxying. Read local Next docs for multi-zones before
  implementing rewrites.

## Local scorecard integration

- `/scorecard/` embeds the live 5500 scorecard using `NEXT_PUBLIC_SCORECARD_APP_URL`.
  For the Phase 1 bridge, the default/expected value is
  `https://scorecard.getgroundedhealth.com` so the page does not self-embed after apex/`www`
  move to `grounded_web`.
- Set `NEXT_PUBLIC_SCORECARD_APP_URL=http://localhost:3100` only when actively developing the
  5500 scorecard backend locally.

## Validation expectations

Before declaring changes done, run the relevant gates from this repo:

```bash
npm run typecheck
npm run test
npm run build
npm run gates
```

Use `npm --prefix /Users/bkearns/src/hippo/grounded_web ...` if your shell wrapper does not
honor the working directory.
