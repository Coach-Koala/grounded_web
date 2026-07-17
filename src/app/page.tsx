import Link from "next/link";
import FiveActs from "@/components/FiveActs";
import IncentiveTable from "@/components/IncentiveTable";
import LeadForm from "@/components/LeadForm";
import PlatformShowcase from "@/components/PlatformShowcase";
import StatBand from "@/components/StatBand";
import { Section } from "@/components/Section";

const CALENDLY_URL = "https://calendly.com/alyssasr";

const MACHINE_STATS = [
  {
    value: "$20B+",
    label: "AI revenue-cycle industry built to bill more — growing 24% a year.",
    source: "Grand View Research",
  },
  {
    value: "1.7%",
    label: "of total health spend is now AI upcoding alone.",
    source: "Garner Health, 2026",
  },
  {
    value: "49%",
    label: "of plans took a $1M+ claim last year — up from 23%.",
    source: "Aegis Risk, 2025",
  },
  {
    value: "79%",
    label: "of one employer's $4.08M claim went to administrators, not care.",
    source: "U.S. Senate testimony, 2025",
  },
] as const;

const REINVEST = [
  {
    name: "Give it back",
    body: "An illness fund for employees facing a serious diagnosis — capital flows straight to the people who need it most.",
  },
  {
    name: "Do better",
    body: "Richer benefits, lower member cost-share, or raises. Reinvest in the plan and the people on it.",
  },
  {
    name: "Win-win-win",
    body: "Healthier members, a stronger plan, and a benefits story you're genuinely proud to tell.",
  },
] as const;

const FINDINGS = [
  {
    name: "Fees nobody itemized",
    body: "One employer was paying $2,700 per employee per year in broker fees alone. Another found $800K in annual commissions it didn't know existed — in its own filings.",
  },
  {
    name: "Billing that doesn't match the contract",
    body: "Duplicate billing, out-of-network claims paid as in-network, procedures billed above contracted rates, upcoding patterns that quietly compound year over year.",
  },
  {
    name: "Vendors not delivering",
    body: "Point solutions paid on promised engagement and savings that nobody independently verified. We check the contract against reality before your renewal, so the negotiation is yours.",
  },
] as const;

const CARE_FINDINGS = [
  {
    name: "Acute early warning",
    body: "“Three members are trending toward catastrophic-cost episodes, and your stop-loss notice deadlines hit in six weeks.” The CFO avoids the year-end surprise; HR gets case management engaged while it can still change the outcome — for the budget and the family.",
  },
  {
    name: "Chronic care gaps",
    body: "“128 pre-diabetic members aren't enrolled in the diabetes program you already pay for.” Close the gap now, or pay for the diabetes — and the vendor — later. This is how a benefits program proves it works.",
  },
  {
    name: "Billed vs. delivered",
    body: "“Postpartum-hemorrhage diagnoses jumped from 4% to 12.3% of maternity admissions while transfusion rates stayed flat.” Mothers didn't change; the billing did — care billed, not delivered. We flag where the clinical record and the invoice tell different stories. (Blue Health Intelligence / BCBSA, 2026)",
  },
  {
    name: "Provider quality in your network",
    body: "“The surgical group your employees use most has a repeat-procedure rate double the regional benchmark.” In-network doesn't mean good. Your people deserve the care you think you're buying — we verify they're getting it.",
  },
  {
    name: "Your population vs. national norms",
    body: "“Your musculoskeletal spend runs 40% above industry peers — consistent with your workforce — but you're the only peer without a PT-first pathway.” Know how your people differ, and build the plan around who they actually are.",
  },
  {
    name: "Prevention & screening",
    body: "“Cancer-screening completion is 22 points below benchmark.” Stage-one is treatable and affordable; stage-three is neither. Catching this early is the rare finding that's simultaneously the right thing and the cheap thing.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="band-wash">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="eyebrow mb-4 text-white">Quality &amp; accountability in the age of AI</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white uppercase md:text-6xl">
            Your company spent millions on healthcare last year. Nobody checked the bills.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white md:text-xl">
            Health benefits are your second-biggest expense — and the only one with no independent
            oversight. Now AI writes the notes, codes the claims, and prices the care — billing your
            plan more, at scale. Grounded Health is the quality and accountability layer for
            self-funded plans: a software and analytics platform, not a broker or carrier, whose
            agents check every claim, contract, and vendor — and verify your people actually get the
            good care you&apos;re paying for.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#scorecard"
              className="text-teal-deep bg-white hover:bg-mist inline-block rounded-md px-8 py-4 text-lg font-semibold"
            >
              See what you&apos;re overpaying — free
            </Link>
            <Link
              href="/#how"
              className="inline-block rounded-md border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/10"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      <Section
        eyebrow="By the numbers"
        title="The system is broken — and getting worse."
        tone="bone"
      >
        <StatBand />
      </Section>

      <section className="bg-spruce-dark text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="eyebrow text-amber mb-3">The reality</p>
          <h2 className="mb-3 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
            The machine you&apos;re up against.
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-white/70 italic">
            AI is already being used to bill your plan more — at scale, and on purpose.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MACHINE_STATS.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <p className="text-amber text-4xl font-bold tracking-tight md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-white/85">{stat.label}</p>
                <p className="mt-3 text-xs text-white/50 italic">{stat.source}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg text-white">
            Hospitals and carriers run AI to maximize billing.{" "}
            <span className="text-amber font-semibold">
              Most employers audit it with a spreadsheet.
            </span>
          </p>
        </div>
      </section>

      <Section eyebrow="What leaders miss when they don't see the plan" tone="bone">
        <div className="bg-ink grid gap-8 rounded-2xl p-8 md:grid-cols-[1fr_320px] md:p-12">
          <div>
            <blockquote className="text-2xl font-bold tracking-tight text-white md:text-3xl md:leading-snug">
              One employer had <span className="text-sage">$2,300 less per employee per year</span>,
              with better benefits. When the acquiring company moved 2,500 employees onto that plan,
              the change created{" "}
              <span className="text-sage">more than a quarter billion dollars of equity value</span>{" "}
              that had not been priced in.
            </blockquote>
            <p className="text-mist mt-6 text-sm">Lee Lewis, Health Transformation Alliance</p>
          </div>
          <div className="border-spruce/50 self-center rounded-xl border p-6 text-center">
            <p className="eyebrow text-sage">The math</p>
            <p className="mt-2 text-4xl font-bold text-white md:text-5xl">$250M+</p>
            <p className="text-mist mt-3 text-sm">
              A claims-spend delta can compound into enterprise value when the plan is large enough
              — and nobody has priced the waste correctly.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="The problem"
        title="Everyone in your health plan is paid more when you spend more."
        tone="mist"
      >
        <p className="text-ink/80 max-w-3xl text-lg">
          That isn&apos;t a conspiracy — it&apos;s just how the incentives are wired. Which is why
          costs rise 9–10% a year, why data arrives months late, and why no one in the chain
          volunteers to check the bills.
        </p>
        <IncentiveTable />
      </Section>

      <Section
        eyebrow="The platform"
        title="A team of agents, working your plan around the clock."
        tone="bone"
      >
        <p className="text-ink/80 max-w-3xl text-lg">
          Grounded isn&apos;t a report you commission once a year. It&apos;s a platform: specialized
          agents review every claim as it lands, check bills against contracts, watch your rates
          against the market, track renewals, and score every vendor — 24/7, whether or not
          anyone&apos;s logged in. The scorecards and findings below are what the platform surfaces;
          the system that produces them never stops running.
        </p>
        <div className="mt-10">
          <PlatformShowcase />
        </div>
      </Section>

      <Section
        id="how"
        eyebrow="How it works"
        title="Six components, from a free scorecard to continuous assurance."
        tone="mist"
      >
        <FiveActs />
      </Section>

      <Section eyebrow="How we're paid" tone="band">
        <blockquote className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          &ldquo;The referee doesn&apos;t bet on the game.&rdquo;
        </blockquote>
        <p className="mt-6 max-w-3xl text-white/90">
          Grounded Health works for a flat fee. Not a percentage of premiums, not a share of
          savings, not a commission from any vendor we evaluate. When a recovery partner earns a
          contingency getting your money back, we don&apos;t touch it. It&apos;s the only fee
          structure that lets you trust the numbers — and it&apos;s the reason we can put our name
          on them.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {[
            "Flat fee, agreed up front",
            "No commissions, ever",
            "No cut of recoveries",
            "You keep every dollar found",
          ].map((rule) => (
            <p key={rule} className="text-sm font-semibold text-white">
              <span className="text-sage" aria-hidden="true">
                ✓{" "}
              </span>
              {rule}
            </p>
          ))}
        </div>
      </Section>

      <Section eyebrow="What we find" title="Real money, hiding in plain sight." tone="bone">
        <div className="grid gap-6 md:grid-cols-3">
          {FINDINGS.map((finding) => (
            <div
              key={finding.name}
              className="bg-white border-l-sage rounded-lg border-l-4 p-6 shadow-sm"
            >
              <h3 className="text-spruce text-xl font-bold">{finding.name}</h3>
              <p className="text-ink/80 mt-2 text-sm">{finding.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Component 5, up close" title="Is the care itself any good?" tone="mist">
        <p className="text-ink/80 max-w-3xl text-lg">
          The deepest check nobody runs: matching what you paid for against the clinical picture of
          what actually happened. Aggregate, de-identified, and in near real time — agents watching
          continuously, so you see issues while you can still act on them, not in a broker deck 14
          months later.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARE_FINDINGS.map((finding) => (
            <div
              key={finding.name}
              className="bg-white border-l-sage rounded-lg border-l-4 p-6 shadow-sm"
            >
              <h3 className="text-spruce text-lg font-bold">{finding.name}</h3>
              <p className="text-ink/80 mt-2 text-sm">{finding.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why it matters to you"
        title="The answer instead of the apology."
        tone="bone"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-ink text-xl font-bold">If you lead HR or benefits</h3>
            <p className="text-ink/80 mt-3">
              You&apos;re accountable for a program you can&apos;t see into, judged on costs you
              don&apos;t control, and one bad renewal or one employee&apos;s care horror story away
              from a very hard meeting. We change what you walk in with: real-time answers when the
              CFO asks why costs moved, independent proof your program works, early warning before
              anything becomes an escalation — and a care-quality story you can proudly tell
              employees, because &ldquo;we verify you&apos;re getting good care&rdquo; is a benefit,
              not a cut.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-ink text-xl font-bold">If you&apos;re the CFO</h3>
            <p className="text-ink/80 mt-3">
              Healthcare is the only major line item you sign without controls, an audit trail, or a
              forecast you&apos;d defend to the board. We give it all three: recovered dollars
              straight to EBITDA without touching benefits, no more shock claims at year-end, and a
              documented record of independent oversight — which matters now that fiduciary lawsuits
              name officers, not just companies.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="The opportunity"
        title="This isn't about cutting. It's about what you get to reinvest."
        tone="bone"
      >
        <p className="text-ink/80 max-w-3xl text-lg">
          Every dollar of error and waste we help you avoid is capital you get to put back into your
          people. That&apos;s the win — and the story worth telling.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REINVEST.map((item) => (
            <div
              key={item.name}
              className="border-sage/30 bg-white rounded-lg border p-6 shadow-sm"
            >
              <h3 className="text-ink text-lg font-bold">{item.name}</h3>
              <p className="text-ink/80 mt-2 text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="scorecard" eyebrow="Start here" title="See your scorecard." tone="mist">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-ink text-lg">
              Tell us your company name. The platform builds your health plan scorecard from public
              data — what&apos;s working, what&apos;s overpriced, and what it&apos;s worth fixing.
            </p>
            <p className="text-ink/80">
              Free. Built from public data. No claims data required, nothing to install, no
              obligation.
            </p>
            <p className="text-ink/80">
              Prefer to talk it through?{" "}
              <a
                href={CALENDLY_URL}
                className="text-spruce font-semibold underline"
                rel="noopener"
                target="_blank"
              >
                Book 20 minutes
              </a>{" "}
              and we&apos;ll walk you through it live.
            </p>
          </div>
          <LeadForm />
        </div>
      </Section>
    </>
  );
}
