import type { NextConfig } from "next";

// BASE_PATH is "/grounded_web" while the site is served from the Pages
// project URL, and "" once the custom domain (getgroundedhealth.com) is live.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: __dirname,
  basePath,
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
