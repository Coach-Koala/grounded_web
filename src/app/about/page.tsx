import type { Metadata } from "next";
import Team from "@/components/Team";
import { Section } from "@/components/Section";

const SCORECARD_URL = "https://scorecard.getgroundedhealth.com";
const CALENDLY_URL = "https://calendly.com/alyssasr/grounded-health-report";

export const metadata: Metadata = {
  title: "About",
  description:
    "Grounded Health is a public benefit corporation building the independent check on employer healthcare — by people who have lived the problem from the inside. Flat fee, no commissions, no cut of your spend.",
};

const PRINCIPLES = [
  {
    n: "01",
    h: "Independence, by structure",
    p: "Not a promise — a design. Flat fee, zero ownership by any broker, carrier, TPA, or PBM. Our judgment isn't for sale because our revenue never depends on the answer.",
  },
  {
    n: "02",
    h: "Outcomes over optics",
    p: "We care what actually changes on your plan, not how the dashboard looks. If it doesn't create real value you can measure, it doesn't matter.",
  },
  {
    n: "03",
    h: "Clarity over complexity",
    p: "The system stays confusing on purpose. We name the counterparties, show the math, and say the uncomfortable thing plainly — honesty over comfort.",
  },
  {
    n: "04",
    h: "AI that makes people sharper",
    p: "The same technology now billing your plan more should be the one checking it. We build AI that makes people more effective — not more replaceable.",
  },
] as const;

const PBC_RULES = [
  "Flat fee only",
  "No commissions",
  "No cut of your spend",
  "No cut of recoveries",
  "Zero broker/carrier/PBM ownership",
] as const;

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="About us" title="We're the check nobody else was paid to run." tone="band">
        <p className="max-w-3xl text-lg text-white/90">
          Grounded Health is the independent quality and accountability layer for employer health
          plans. We were built by people who&apos;ve sat on every side of this problem — the
          employee blindsided by a bill, the parent fighting a denied claim, the leader signing a
          renewal they couldn&apos;t fully see inside.{" "}
          <strong className="font-semibold text-white">
            We started the company that would have helped us.
          </strong>
        </p>
      </Section>

      <Section
        eyebrow="Why we exist"
        title="The hardest problems in healthcare aren't technical. They're human."
        tone="bone"
      >
        <div className="text-ink/80 max-w-3xl space-y-5 md:text-lg">
          <p>
            Employers don&apos;t overspend on health benefits because they lack tools. They
            overspend because aligning people, incentives, data, and vendors is messy in the real
            world — and{" "}
            <strong className="text-ink font-semibold">
              nearly everyone in the chain is paid to keep it that way.
            </strong>
          </p>
          <p>
            That&apos;s the work we do:{" "}
            <strong className="text-ink font-semibold">
              making the plan visible, and making the incentives honest.
            </strong>{" "}
            We find the overcharges, the errors, and the vendors that aren&apos;t delivering — and
            we verify that your people are actually getting the good care you&apos;re paying for.
          </p>
        </div>
      </Section>

      <Section tone="mist">
        <div className="border-sage max-w-3xl border-l-4 pl-6">
          <blockquote className="text-spruce text-3xl font-bold tracking-tight md:text-4xl">
            A referee doesn&apos;t bet on the game.
          </blockquote>
          <p className="text-ink/80 mt-6 max-w-2xl">
            We charge a <strong className="text-ink font-semibold">flat fee</strong> — no
            commissions, no percentage of your spend, no cut of what we recover. We&apos;re the only
            party at your table with nothing riding on your costs going up. It&apos;s the reason we
            can put our name on the numbers.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="The standards behind the work"
        title="What we hold ourselves to."
        tone="bone"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {PRINCIPLES.map((pr) => (
            <div key={pr.n} className="border-sage/30 rounded-xl border bg-white p-7 shadow-sm">
              <div className="eyebrow text-spruce mb-3">{pr.n}</div>
              <h3 className="text-ink text-lg font-bold">{pr.h}</h3>
              <p className="text-ink/80 mt-2 text-sm">{pr.p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="The team" title="Built by people who've seen the inside." tone="mist">
        <p className="text-ink/80 mb-8 max-w-3xl">
          Health-plan leadership, enterprise AI, and decades of data engineering. We know where the
          numbers hide because we&apos;ve worked where they&apos;re made.
        </p>
        <Team />
      </Section>

      <Section
        eyebrow="How we're built"
        title="A public benefit corporation — by charter, not by press release."
        tone="spruce"
      >
        <div className="max-w-3xl space-y-5 text-white/85 md:text-lg">
          <p>
            Grounded Health is incorporated as a public benefit corporation. Our charter legally
            binds our directors to weigh the interests of the people who depend on employer health
            plans —{" "}
            <strong className="font-semibold text-white">
              patients, plan members, and the employers who sponsor them
            </strong>{" "}
            — alongside those of shareholders.
          </p>
          <p>
            Most healthcare vendors promise alignment. We made it a duty written into our founding
            documents. Combined with flat-fee pricing and zero ownership by any broker, carrier,
            TPA, or PBM, our independence isn&apos;t a marketing claim —{" "}
            <strong className="font-semibold text-white">it&apos;s our corporate structure.</strong>{" "}
            It&apos;s the reason we can put our name on the numbers.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {PBC_RULES.map((rule) => (
            <span
              key={rule}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
            >
              <span aria-hidden="true" className="text-sage">
                ✓{" "}
              </span>
              {rule}
            </span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Start here" title="See what an independent check finds." tone="bone">
        <p className="text-ink/80 max-w-2xl">
          Tell us your company name. We&apos;ll build your health plan scorecard from public data —
          what&apos;s working, what&apos;s overpriced, and what it&apos;s worth fixing. Free, no
          claims data, no obligation.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={SCORECARD_URL}
            className="bg-spruce hover:bg-spruce-dark rounded-md px-6 py-3 font-semibold text-white transition"
          >
            Get your free scorecard
          </a>
          <a
            href={CALENDLY_URL}
            className="border-spruce text-spruce hover:bg-spruce rounded-md border-2 px-6 py-3 font-semibold transition hover:text-white"
          >
            Book 20 minutes
          </a>
        </div>
        <p className="text-ink/60 mt-5 text-sm">
          Built from public filings and price-transparency data. Your scorecard in your inbox in
          minutes — nothing else.
        </p>
      </Section>
    </>
  );
}
