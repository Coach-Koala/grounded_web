import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Section } from "@/components/Section";
import { getInsight, listInsights } from "@/lib/insights";

export const dynamicParams = false;

export function generateStaticParams() {
  return listInsights().map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  return { title: insight.title, description: insight.summary };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  return (
    <Section eyebrow={insight.date} title={insight.title} tone="bone">
      <article className="prose-headings:text-ink prose-a:text-spruce max-w-3xl space-y-4 text-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{insight.content}</ReactMarkdown>
      </article>
    </Section>
  );
}
