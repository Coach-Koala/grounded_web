import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import OfferLadder from "@/components/OfferLadder";
import StatBand from "@/components/StatBand";
import { Section } from "@/components/Section";

const ANALYZE = [
  {
    name: "Claims & pharmacy spend",
    body: "Where the money actually goes — reviewed line by line for billing errors and patterns your TPA reports won't show you.",
  },
  {
    name: "Vendor performance",
    body: "Point solutions promised engagement and savings. We check whether they delivered.",
  },
  {
    name: "Contract terms",
    body: "Problematic language, overpayment exposure, and pricing that looks out of line with your peers.",
  },
  {
    name: "Benchmarks & peer comparison",
    body: "How your plan stacks up — useful leverage when you're evaluating brokers, vendors, or renewals.",
  },
] as const;

const WHY = [
  {
    name: "Independent",
    body: "We don't sell insurance, take vendor commissions, or answer to a carrier. Our only client is you.",
  },
  {
    name: "Evidence-led",
    body: "Every finding ties back to your actual claims and contracts — not actuarial guesses.",
  },
  {
    name: "Lightweight",
    body: "Reporting lands in your inbox, not another dashboard your team has to manage. Fire and forget.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero-wash">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="eyebrow mb-4 text-white">For self-insured employers</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white uppercase md:text-6xl">
            See where your health plan is leaking money.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white md:text-xl">
            Grounded gives self-insured employers an independent view into claims spend, vendor
            performance, contract issues, and savings opportunities — starting with a free
            scorecard.
          </p>
          <div className="mt-10">
            <Link
              href="/#scorecard"
              className="bg-white text-teal hover:bg-cream inline-block rounded-md px-8 py-4 text-lg font-semibold"
            >
              Get your free scorecard
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="By the numbers" tone="bone">
        <StatBand />
      </Section>

      <Section eyebrow="How it works" title="One platform, three ways to engage." tone="mist">
        <OfferLadder />
      </Section>

      <Section eyebrow="What we analyze" title="Everything your plan touches." tone="bone">
        <div className="grid gap-8 md:grid-cols-2">
          {ANALYZE.map((item) => (
            <div key={item.name} className="border-sage border-l-2 pl-6">
              <h3 className="text-ink text-xl font-bold">{item.name}</h3>
              <p className="text-ink/90 mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Grounded" title="An auditor on your side of the table." tone="teal">
        <div className="grid gap-8 md:grid-cols-3">
          {WHY.map((item) => (
            <div key={item.name}>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="mt-2 text-white/90">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="scorecard" eyebrow="Start here" title="Get your free scorecard." tone="bone">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-ink text-lg">
              A high-level read on your plan: how it compares, where the critical findings are, and
              what savings look plausible.
            </p>
            <p className="text-ink/80">
              Free, fast, and no data lift required from your team to get started.
            </p>
          </div>
          <LeadForm />
        </div>
      </Section>
    </>
  );
}
