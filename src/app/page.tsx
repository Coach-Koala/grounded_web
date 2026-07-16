import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import OfferLadder from "@/components/OfferLadder";
import PlatformShowcase from "@/components/PlatformShowcase";
import StatBand from "@/components/StatBand";
import Team from "@/components/Team";
import { Section } from "@/components/Section";

const CFO_CARDS = [
  {
    name: "Add dollars to your EPS",
    body: "Savings from your health plan need no new revenue and no headcount cuts. Waste you stop paying drops straight to operating income — and for public companies, straight into earnings per share.",
  },
  {
    name: "Manage it like any other cost center",
    body: "You'd never run cloud spend or logistics on a once-a-year renewal deck. Grounded gives healthcare the same treatment: live spend, forecast, variance to budget, and a named owner.",
  },
  {
    name: "Hold every vendor to their number",
    body: "TPA, PBM, broker, point solutions — and yes, your payment integrity provider. We don't replace them. We measure what each one returns for what you pay, so renewals become decisions instead of defaults.",
  },
] as const;

const ANALYZE = [
  {
    name: "Claims & pharmacy spend",
    body: "Where the money actually goes — 100% of claims reviewed, not sampled, for errors and patterns your TPA reports won't show you.",
  },
  {
    name: "Vendor & provider performance",
    body: "Every entity touching your plan gets scored on what it delivers — including the vendors you hired to watch the others.",
  },
  {
    name: "Contract terms & fees",
    body: "Problematic language, above-market pricing, and compensation structures flagged before renewal — while you can still act.",
  },
  {
    name: "Rates & benchmarks",
    body: "Your negotiated rates against what comparable employers pay in your market, built from federally mandated public pricing data.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="bg-spruce">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="eyebrow mb-4 text-white">For self-insured employers</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white uppercase md:text-6xl">
            See where your health plan is leaking money.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white md:text-xl">
            Healthcare is roughly 30% of your direct employee cost — and usually the least-managed
            number on the P&amp;L. Grounded gives you an independent view of claims, contracts,
            rates, and vendors, and turns the waste into contribution margin.
          </p>
          <div className="mt-10">
            <Link
              href="/#scorecard"
              className="bg-white text-spruce hover:bg-mist inline-block rounded-md px-8 py-4 text-lg font-semibold"
            >
              Get your free scorecard
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="By the numbers" tone="bone">
        <StatBand />
      </Section>

      <Section eyebrow="For the CFO" title="This is a margin conversation." tone="mist">
        <div className="grid gap-8 md:grid-cols-3">
          {CFO_CARDS.map((card) => (
            <div key={card.name} className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-ink text-xl font-bold">{card.name}</h3>
              <p className="text-ink/90 mt-2">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="How it works" title="One platform, three ways to engage." tone="bone">
        <OfferLadder />
      </Section>

      <Section
        eyebrow="The platform"
        title="Not a report. A system your team logs into."
        tone="mist"
      >
        <PlatformShowcase />
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

      <Section eyebrow="Why Grounded" title="An auditor on your side of the table." tone="spruce">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Independent</h3>
            <p className="mt-2 text-white/90">
              We don&apos;t sell insurance, take vendor commissions, or answer to a carrier. Our
              only client is you.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Evidence-led</h3>
            <p className="mt-2 text-white/90">
              Every finding ties back to your actual claims, contracts, and public filings — not
              actuarial guesses.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Lightweight</h3>
            <p className="mt-2 text-white/90">
              Reporting lands in your inbox, not another dashboard your team has to manage. Fire and
              forget.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="The team" title="Built by people who've seen the inside." tone="bone">
        <Team />
      </Section>

      <Section id="scorecard" eyebrow="Start here" title="Get your free scorecard." tone="mist">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-ink text-lg">
              A high-level read on your plan, built from its own public filings: how your costs
              compare, where the critical findings are, and what savings look plausible.
            </p>
            <p className="text-ink/80">Free. Two minutes. No claims data required to start.</p>
          </div>
          <LeadForm />
        </div>
      </Section>
    </>
  );
}
