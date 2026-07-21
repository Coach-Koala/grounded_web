import Link from "next/link";
import FiveActs from "@/components/FiveActs";
import PlatformCarousel from "@/components/PlatformCarousel";
import WhoProfitsChart from "@/components/WhoProfitsChart";
import { Section } from "@/components/Section";

const CALENDLY_URL = "https://calendly.com/alyssasr/grounded-health-report";
const SCORECARD_URL = "https://scorecard.getgroundedhealth.com";

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
            It&apos;s your second-biggest expense — and the only one no independent party ever
            checks. Grounded Health is the quality layer for self-funded plans: we confirm the care
            you paid for was real and priced right — and what we find, you get to reinvest in your
            people.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={SCORECARD_URL}
              className="text-spruce bg-white hover:bg-mist inline-block rounded-md px-8 py-4 text-lg font-semibold"
            >
              See what your plan is really doing — free
            </a>
            <Link
              href="/#how"
              className="inline-block rounded-md border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/10"
            >
              How it works
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-white/70">
            Free scorecard from public data · no claims data, nothing to install, no obligation.
          </p>
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
          the chain earns more when your costs go up. We don&apos;t.
        </p>
        <WhoProfitsChart />
      </Section>

      <Section
        eyebrow="The platform"
        title="A team of agents, working your plan around the clock."
        tone="mist"
      >
        <p className="text-ink/80 max-w-3xl text-lg">
          Grounded Health is a platform: specialized agents review every claim as it lands, check
          bills against contracts, watch your rates against the market, track renewals, and score
          every vendor — 24/7, whether or not anyone&apos;s logged in.
        </p>
        <div className="mt-10">
          <PlatformCarousel />
        </div>
      </Section>

      <Section
        id="how"
        eyebrow="How it works"
        title="Start with easiest savings, mature to continuous oversight and automatic optimization."
        tone="white"
      >
        <FiveActs />
      </Section>

      <Section
        eyebrow="The questions we answer"
        title="What you've always wanted to know. Delivered."
        tone="mist"
      >
        <p className="text-ink/70 max-w-xl">
          Not a list of features — the things you&apos;d actually want to know if you could see
          inside your own health plan.
        </p>
        <div className="border-sage/30 mt-8 border-t">
          {QUESTIONS.map((item) => (
            <div
              key={item.q}
              className="border-sage/30 grid gap-3 border-b py-5 md:grid-cols-[1fr_300px] md:gap-10"
            >
              <div>
                <h3 className="text-ink text-lg font-bold">{item.q}</h3>
                <p className="text-ink/70 mt-1.5 max-w-md text-sm">{item.also}</p>
              </div>
              <div className="flex flex-col gap-3">
                {item.proofs.map((p) => (
                  <div key={p.stat} className="border-spruce border-l-2 pl-4">
                    <p
                      className={`text-spruce font-bold tracking-tight ${
                        item.proofs.length > 1 ? "text-base" : "text-xl"
                      }`}
                    >
                      {p.stat}
                    </p>
                    <p className="text-ink/70 mt-0.5 text-sm">{p.cap}</p>
                    {p.src ? <p className="text-spruce mt-0.5 text-xs italic">{p.src}</p> : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why it matters" title="Know before they ask." tone="white">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow text-spruce mb-3">For CFOs</p>
            <p className="text-ink text-lg">
              Controls, an audit trail, and recovered dollars straight to EBITDA — on the one line
              item that has none of them today.
            </p>
          </div>
          <div>
            <p className="eyebrow text-spruce mb-3">For HR</p>
            <p className="text-ink text-lg">
              Real-time answers when costs move, proof your program works, and a care-quality story
              that&apos;s a benefit — not a cut.
            </p>
          </div>
        </div>

        <div className="border-sage mt-12 border-t-2 pt-7">
          <h3 className="text-ink max-w-2xl text-2xl font-bold tracking-tight">
            It isn&apos;t about cutting. It&apos;s about what you get to reinvest.
          </h3>
          <div className="mt-9 grid gap-7 md:grid-cols-3">
            {REINVEST.map((item) => (
              <div key={item.name}>
                <h4 className="text-spruce font-bold">{item.name}</h4>
                <p className="text-ink/70 mt-1 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="scorecard" eyebrow="Start here" title="See your scorecard." tone="mist">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-ink text-lg">
              Search public Form 5500 data for an early view of what&apos;s working, what&apos;s
              overpriced, and what deserves a closer look before renewal.
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
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-ink text-xl font-bold">Run the public-data scorecard</h3>
            <p className="text-muted mt-3">
              Open the Grounded Health scorecard experience to search by employer and review plan
              signals from public filings.
            </p>
            <a
              href={SCORECARD_URL}
              className="bg-spruce hover:bg-spruce-dark mt-6 inline-block rounded-lg px-6 py-3 font-semibold text-white"
            >
              Open free scorecard
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
