import Link from "next/link";
import FiveActs from "@/components/FiveActs";
import LeadForm from "@/components/LeadForm";
import PlatformCarousel from "@/components/PlatformCarousel";
import WhoProfitsChart from "@/components/WhoProfitsChart";
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
    body: "An illness fund for employees facing a serious diagnosis.",
  },
  {
    name: "Do better",
    body: "Richer benefits, lower member cost-share, or raises.",
  },
  {
    name: "Win-win-win",
    body: "Healthier members, a stronger plan, a story you're proud to tell.",
  },
] as const;

type Proof = { stat: string; cap: string; src?: string };
type Question = { q: string; also: string; proofs: Proof[] };

const QUESTIONS: Question[] = [
  {
    q: "Am I paying market rates — or is my competitor paying less?",
    also: "The fees nobody itemized, sitting in your own filings — broker commissions, admin loads, spread you never agreed to.",
    proofs: [
      {
        stat: "$2,700 / employee",
        cap: "One employer's annual broker fees alone — before anything else.",
      },
    ],
  },
  {
    q: "Were we actually billed correctly?",
    also: "Out-of-network claims paid as in-network. Duplicate and above-contract charges. And the deeper one: did the care I paid for in claims actually get delivered?",
    proofs: [
      {
        stat: "4% → 12.3%",
        cap: "Postpartum-hemorrhage diagnoses jumped while transfusion rates stayed flat. Care billed, not delivered.",
        src: "BHI / BCBSA, 2026",
      },
    ],
  },
  {
    q: "The vendors promising to save me money — are they actually doing it?",
    also: "Is anyone even using the point solution you pay for? Are they closing the gaps they were hired to close, or grading their own homework?",
    proofs: [
      {
        stat: "128 members",
        cap: "Pre-diabetic and not enrolled in the diabetes program you already pay for.",
      },
    ],
  },
  {
    q: "Is the care any good — and did my people actually get better?",
    also: "Are there better providers I should be steering my team to? The deepest check nobody runs.",
    proofs: [
      {
        stat: "2× the benchmark",
        cap: "The surgical group your employees use most has a repeat-procedure rate double the regional norm.",
      },
      {
        stat: "40% above peers",
        cap: "MSK spend runs 40% above peers — with no PT-first pathway. Build the plan around who your people actually are.",
      },
      {
        stat: "22 points below",
        cap: "Cancer-screening completion below benchmark — the rare fix that's the right thing and the cheap thing.",
      },
    ],
  },
];

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
            Your second-biggest expense — and the only one nobody independently checks. Grounded
            Health is the quality and accountability layer for self-funded health plans.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#scorecard"
              className="text-spruce bg-white hover:bg-mist inline-block rounded-md px-8 py-4 text-lg font-semibold"
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

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="eyebrow text-amber mb-3">The reality</p>
          <h2 className="mb-3 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
            The system is broken — and getting worse.
          </h2>
          <p className="mb-10 max-w-3xl text-lg text-white/70">
            Family premiums hit $26,993 this year and are rising 6.5–10% into 2026 — the steepest
            jump in 15 years. And now AI writes the notes, codes the claims, and prices the care,
            billing your plan more at scale.
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
        </div>
      </section>

      <Section
        eyebrow="The problem"
        title="Everyone in your health plan is paid more when you spend more."
        tone="white"
      >
        <p className="text-ink/80 max-w-3xl text-lg">
          That isn&apos;t a conspiracy — it&apos;s just how the incentives are wired. Every party in
          the chain earns more when your costs go up. We&apos;re the only one that doesn&apos;t.
        </p>
        <WhoProfitsChart />
        <p className="text-ink mt-8 max-w-3xl text-xl font-bold">
          The referee doesn&apos;t bet on the game.{" "}
          <span className="text-ink/70 text-lg font-normal">
            Flat fee — no commissions, no percentage of spend, no cut of recoveries. The only
            structure that lets you trust the numbers.
          </span>
        </p>
      </Section>

      <Section
        eyebrow="The platform"
        title="A team of agents, working your plan around the clock."
        tone="mist"
      >
        <p className="text-ink/80 max-w-3xl text-lg">
          Grounded isn&apos;t a report you commission once a year. It&apos;s a platform: specialized
          agents review every claim as it lands, check bills against contracts, watch your rates
          against the market, track renewals, and score every vendor — 24/7, whether or not
          anyone&apos;s logged in.
        </p>
        <div className="mt-10">
          <PlatformCarousel />
        </div>
      </Section>

      <Section
        id="how"
        eyebrow="How it works"
        title="Four components, from a free scorecard to clinical care verification."
        tone="white"
      >
        <FiveActs />
      </Section>

      <Section
        eyebrow="The questions we answer"
        title="Four questions about your plan. Nobody answers them. We do."
        tone="mist"
      >
        <p className="text-ink/70 max-w-xl text-lg">
          Not a list of features — the things you&apos;d actually want to know if you could see
          inside your own health plan.
        </p>
        <div className="border-sage/30 mt-12 border-t">
          {QUESTIONS.map((item) => (
            <div
              key={item.q}
              className="border-sage/30 grid gap-5 border-b py-8 md:grid-cols-[1fr_300px] md:gap-12"
            >
              <div>
                <h3 className="text-ink text-xl font-bold md:text-2xl">{item.q}</h3>
                <p className="text-ink/70 mt-2 max-w-md text-sm">{item.also}</p>
              </div>
              <div className="flex flex-col gap-4">
                {item.proofs.map((p) => (
                  <div key={p.stat} className="border-spruce border-l-2 pl-4">
                    <p
                      className={`text-spruce font-bold tracking-tight ${
                        item.proofs.length > 1 ? "text-lg" : "text-2xl"
                      }`}
                    >
                      {p.stat}
                    </p>
                    <p className="text-ink/70 mt-1 text-sm">{p.cap}</p>
                    {p.src ? <p className="text-spruce/70 mt-1 text-xs italic">{p.src}</p> : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why it matters" title="The answer instead of the apology." tone="white">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="border-sage/40 border-t pt-5">
            <p className="eyebrow text-spruce mb-3">If you lead HR or benefits</p>
            <p className="text-ink text-lg font-bold">
              Real-time answers when the CFO asks why costs moved — and independent proof your
              program actually works.
            </p>
            <p className="text-ink/70 mt-3 text-sm">
              Plus a care-quality story you can tell employees, because &ldquo;we verify you&apos;re
              getting good care&rdquo; is a benefit, not a cut.
            </p>
          </div>
          <div className="border-sage/40 border-t pt-5">
            <p className="eyebrow text-spruce mb-3">If you&apos;re the CFO</p>
            <p className="text-ink text-lg font-bold">
              Controls, an audit trail, and a forecast on your largest line item that has none of
              them today.
            </p>
            <p className="text-ink/70 mt-3 text-sm">
              Recovered dollars straight to EBITDA without touching benefits — and documented
              oversight, now that fiduciary suits name officers, not just companies.
            </p>
          </div>
        </div>

        <div className="bg-spruce mt-14 rounded-2xl p-8 md:p-12">
          <h3 className="max-w-2xl text-2xl font-bold tracking-tight text-white md:text-3xl">
            It isn&apos;t about cutting. It&apos;s about what you get to reinvest.
          </h3>
          <p className="mt-3 max-w-2xl text-white/80">
            Every dollar of error and waste we help you avoid is capital you put back into your
            people — the win, and the story worth telling.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {REINVEST.map((item) => (
              <div key={item.name} className="border-t border-white/20 pt-4">
                <h4 className="font-bold text-white">{item.name}</h4>
                <p className="mt-2 text-sm text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
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
