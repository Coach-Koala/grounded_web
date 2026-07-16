import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/insights");

export interface InsightMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export interface Insight extends InsightMeta {
  content: string;
}

function assertFrontmatter(slug: string, data: Record<string, unknown>): void {
  for (const field of ["title", "date", "summary"] as const) {
    if (typeof data[field] !== "string" || data[field].length === 0) {
      throw new Error(`Insight "${slug}" is missing required frontmatter field "${field}"`);
    }
  }
}

export function listInsights(): InsightMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .filter((file) => !/^(README|_)/i.test(file))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data } = matter(raw);
      assertFrontmatter(slug, data);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        summary: data.summary as string,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getInsight(slug: string): Insight {
  const candidates = [`${slug}.md`, `${slug}.mdx`];
  for (const candidate of candidates) {
    const file = path.join(CONTENT_DIR, candidate);
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, "utf8");
      const { data, content } = matter(raw);
      assertFrontmatter(slug, data);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        summary: data.summary as string,
        content,
      };
    }
  }
  throw new Error(`Insight not found: ${slug}`);
}
