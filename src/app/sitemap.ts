import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://getgroundedhealth.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/employers", "/advisors", "/about", "/scorecard"].map((route) => ({
    url: `${siteUrl}${route}/`,
    lastModified: new Date(),
  }));
}
