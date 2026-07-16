import type { MetadataRoute } from "next";
import { listInsights } from "@/lib/insights";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://getgroundedhealth.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/employers", "/advisors", "/insights"].map((route) => ({
    url: `${siteUrl}${route}/`,
    lastModified: new Date(),
  }));
  const insightRoutes = listInsights().map((insight) => ({
    url: `${siteUrl}/insights/${insight.slug}/`,
    lastModified: new Date(insight.date),
  }));
  return [...staticRoutes, ...insightRoutes];
}
