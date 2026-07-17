import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { listInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Evidence-led analysis of employer healthcare spend — sourced, cited, and short.",
};

export default function InsightsPage() {
  const insights = listInsights();
  return (
    <Section eyebrow="Insights" title="Evidence-led. Sourced. Short." tone="bone">
      {insights.length === 0 ? (
        <div className="bg-mist max-w-2xl rounded-xl p-8">
          <p className="text-ink text-lg font-semibold">Nothing published yet.</p>
          <p className="text-muted mt-2">
            We&apos;re writing. In the meantime,{" "}
            <Link href="/#scorecard" className="text-spruce font-semibold hover:underline">
              get your free scorecard
            </Link>{" "}
            — it&apos;s more useful than a blog post anyway.
          </p>
        </div>
      ) : (
        <ul className="max-w-3xl space-y-8">
          {insights.map((insight) => (
            <li key={insight.slug} className="border-line border-b pb-8">
              <p className="eyebrow text-spruce">{insight.date}</p>
              <Link href={`/insights/${insight.slug}/`}>
                <h3 className="text-ink hover:text-spruce mt-1 text-2xl font-bold">
                  {insight.title}
                </h3>
              </Link>
              <p className="text-muted mt-2">{insight.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
