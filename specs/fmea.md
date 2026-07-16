---
title: grounded_web — FMEA
date: 2026-07-16
status: proposed
executive_summary: >
  Ten failure modes scored. Highest risks are lead loss through a down or
  late endpoint (RPN 224 → mitigated to fail-loud + mailto), DNS misconfiguration
  at cutover (RPN 168), and non-final pricing copy shipping (RPN 144 → CI
  content gate). Test cases generated for every mode with RPN ≥ 50.
---

# FMEA

Scales 1–10. RPN = Severity × Occurrence × Detection (detection: 10 = would
not be noticed). Scores are pre-mitigation; mitigations below become
acceptance gates.

| #   | Failure mode                                                                     | Effect                                                         | S   | O   | D   | RPN     | Mitigation                                                                                                       |
| --- | -------------------------------------------------------------------------------- | -------------------------------------------------------------- | --- | --- | --- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| F1  | Leads endpoint down/not yet live; form fakes success or hangs                    | Silent lead loss — the one conversion the site exists for      | 8   | 7   | 4   | **224** | Fail-loud form state + `mailto:` fallback (D5/D12); endpoint health noted at launch; e2e test for the error path |
| F2  | DNS cutover misconfigured (wrong A records, proxied CNAME, missing www)          | Site unreachable or cert errors at launch                      | 7   | 6   | 4   | **168** | Launch checklist with exact records (overview.md); `dig` verification step; HTTPS-enforced check post-cutover    |
| F3  | Placeholder pricing ($15k–$30k) ships publicly                                   | Commercial damage; anchors price before it's final             | 6   | 6   | 4   | **144** | CI grep gate on built output for `$15k                                                                           | $30k | 15,000 | 30,000`; task `t_18b035a6` |
| F4  | Server-only Next.js feature sneaks in; static export breaks or silently degrades | Deploy fails, or feature 404s on Pages                         | 6   | 6   | 3   | **108** | `next build` with `output: 'export'` fails loud in CI on every PR                                                |
| F5  | Custom domain unverified; another repo claims it                                 | Brand-domain takeover                                          | 9   | 2   | 5   | **90**  | Org-level domain verification before cutover (T1)                                                                |
| F6  | Broken build deploys (dead links, missing assets)                                | Public embarrassment on a brand whose pitch is rigor           | 5   | 5   | 3   | **75**  | Link checker (lychee) + build gate before deploy job                                                             |
| F7  | Brand misuse: recolored hippo, gradient overuse, off-palette colors              | Erodes the brand system the guide locks down                   | 4   | 5   | 5   | **100** | Tokens-only styling (no raw hexes in components, lint check); brand checklist in PR template                     |
| F8  | Contrast/a11y failures (e.g. Teal text on Mist — banned pairing)                 | AA failures, excludes users, undermines healthcare credibility | 6   | 4   | 4   | **96**  | Lighthouse a11y ≥ 95 gate; pairing rules encoded in tokens docs                                                  |
| F9  | Analytics script blocks rendering or breaks page on vendor outage                | Slow/blank page                                                | 3   | 3   | 4   | 36      | Async/deferred snippet; site functions with script blocked                                                       |
| F10 | Naming violations ("HippoHealth", "Hip Health") in copy                          | Off-brand per guide §1                                         | 3   | 4   | 4   | 48      | Copy review; optional CI grep for banned strings                                                                 |

## Generated test cases (RPN ≥ 50)

- **F1:** e2e — stub endpoint returning 500/timeout → form shows visible error
  and mailto link; never a success state. Stub 201 → confirmation state.
- **F2:** launch script — `dig +short getgroundedhealth.com` matches the four
  Pages A records; `dig www` CNAME → `coach-koala.github.io`; `curl -I https://`
  both hosts → 200 with valid cert.
- **F3:** CI — grep built `out/` for forbidden pricing patterns; fail on match.
- **F4:** CI — `next build` (export mode) must exit 0; presence of
  `middleware.ts`/route handlers fails a repo-structure check.
- **F5:** checklist — org domain verification recorded before DNS change.
- **F6:** CI — lychee over `out/` internal links; fail on broken.
- **F7:** lint — no hex literals outside `tokens.css`.
- **F8:** CI — Lighthouse CI a11y category ≥ 95 on `/`, `/employers`, `/advisors`.
