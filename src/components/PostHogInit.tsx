"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

/**
 * Initializes PostHog on the marketing site (getgroundedhealth.com).
 *
 * Uses the SAME PostHog project as the scorecard app
 * (scorecard.getgroundedhealth.com) so both subdomains report into one
 * project — a single, stitched funnel across *.getgroundedhealth.com.
 *
 * This site is a static export (`output: "export"`), so there is no server to
 * run an /ingest reverse proxy; events go directly to PostHog's US host. The
 * token is a PUBLIC client key (already shipped in the scorecard's client
 * bundle), so it's safe in the browser; an env override is honored if set.
 */
const POSTHOG_TOKEN =
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ??
  "phc_ufNCuiGoEzhWjsbBRKTPvDNomT57XHgC78DEFVYe9azm";

let initialized = false;

export default function PostHogInit() {
  useEffect(() => {
    if (initialized || !POSTHOG_TOKEN) return;
    initialized = true;
    posthog.init(POSTHOG_TOKEN, {
      api_host: "https://us.i.posthog.com",
      ui_host: "https://us.posthog.com",
      // Enables automatic pageview + pageleave capture (incl. SPA route
      // changes), matching the scorecard app's config.
      defaults: "2026-01-30",
      capture_exceptions: true,
      // Cookie on .getgroundedhealth.com so a visitor is the same person on
      // the marketing site and the scorecard app — one funnel, not two.
      cross_subdomain_cookie: true,
      debug: process.env.NODE_ENV === "development",
    });
  }, []);

  return null;
}
