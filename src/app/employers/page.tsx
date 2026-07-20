import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "For employers",
  description:
    "Independent visibility into your health plan — claims, vendors, and contracts — with almost nothing required from your team.",
};

const DELIVERABLES = [
  {
    name: "Reporting that comes to you",
    body: "Findings land in your inbox or Slack. No new dashboard, no new login, no weekly meeting.",
  },
  {
    name: "Vendor accountability",
    body: "Care navigation, point solutions, your payment integrity provider — everyone who promised savings gets scored on what they actually delivered. We don't replace your vendors; we make sure they perform.",
  },
  {
    name: "Contract review",
    body: "We read the language nobody else does and flag terms that cost you money — before renewal, when you can still do something about it.",
  },
  {
    name: "Margin, tracked to the dollar",
    body: "Flagged spend, open findings, and recovered dollars are tracked continuously — so what comes back shows up in your operating income, not just in a vendor's slide deck.",
  },
] as const;

export default function EmployersPage() {
  return (
    <>
      <Section
        eyebrow="For employers"
        title="Your plan, independently checked. Your team, barely lifted."
        tone="bone"
      >
        <p className="text-ink max-w-2xl text-lg">
          HR teams are stretched. You don&apos;t need another platform to run — you need someone on
          your side of the table telling you what&apos;s working, what&apos;s leaking, and what to
          do about it. Your CFO gets a managed cost center; your team gets their time back.
        </p>
      </Section>

      <Section eyebrow="What you get" tone="mist">
        <div className="grid gap-8 md:grid-cols-2">
          {DELIVERABLES.map((item) => (
            <div key={item.name} className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-ink text-xl font-bold">{item.name}</h3>
              <p className="text-ink/90 mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="scorecard" eyebrow="Start here" title="Get your free scorecard." tone="bone">
        <div className="max-w-2xl rounded-xl bg-white p-8 shadow-sm">
          <p className="text-muted text-lg">
            Start with public Form 5500 data before you share claims, contracts, or renewal files.
            The scorecard opens inside Grounded Health and gives your team a fast first read on plan
            signals worth investigating.
          </p>
          <Link
            href="/scorecard/"
            className="bg-spruce hover:bg-spruce-dark mt-6 inline-block rounded-lg px-6 py-3 font-semibold text-white"
          >
            Open free scorecard
          </Link>
        </div>
      </Section>
    </>
  );
}
