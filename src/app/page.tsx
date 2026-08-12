import Link from "next/link";
import FiveActs from "@/components/FiveActs";
import PlatformCarousel from "@/components/PlatformCarousel";
import WhoProfitsChart from "@/components/WhoProfitsChart";
import { Section } from "@/components/Section";

const CALENDLY_URL = "https://calendly.com/alyssasr/grounded-health-report";
const SCORECARD_URL = "https://scorecard.getgroundedhealth.com";

const MACHINE_STATS = [
  {
    value: "+9%",
    label: "projected 2026 cost increase for large employers — the steepest in over a decade.",
    source: "Business Group on Health, 2026 Employer Health Care Strategy Survey",
  },
  {
    value: "25%",
    label:
      "of every U.S. health-care dollar is wasted — more than $1 trillion a year that employers help fund but never see.",
    source: "Peter G. Peterson Foundation, 2025",
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
] as const;

// Role-abstracted reactions to Grounded. No names — see global rule.
const PROOF_QUOTES = [
  {
    quote:
      "I didn't even think this was possible — we've all had this apathy of thinking we don't have any control over any of it. And I've never been able to get data that's actually actionable around this.",
    name: "CHRO",
    title: "Private-equity-backed healthcare company",
  },
  {
    quote:
      "Relying on your broker to check this is kind of like letting the fox guard the henhouse.",
    name: "SVP",
    title: "Fortune 500 payments company",
  },
  {
    quote:
      "After five years in healthcare, this is the problem Alyssa has finally cracked — real visibility into what enterprises are actually paying their brokers.",
    name: "Health-plan advisor and author",
    title: "Former benefits executive",
  },
] as const;

// The three value pillars, verbatim from the July 2026 pitch deck (slide 5).
const PILLARS = [
  {
    name: "Flag Overpayments and Billing Errors",
    body: "Independent QA on every claim, to catch billing and coding errors.",
  },
  {
    name: "Proactive Major Claim Management",
    body: "Hold the care-management vendor you already pay accountable, with automated care-management QA.",
  },
  {
    name: "Industry Benchmarking Intelligence",
    body: "See what you pay for care and services compared to your peers — broker, stop-loss, carrier, and down to the cost of individual procedures.",
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
          <p className="eyebrow mb-4 text-white">
            The quality &amp; accountability layer for self-funded health plans
          </p>
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

      <section className="bg-mist border-sage/30 border-b">
        <Link
          href="/proof/"
          className="text-ink hover:text-spruce mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-6 py-4 text-center text-sm"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 shrink-0 fill-current"
            focusable="false"
          >
            <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
          </svg>
          <span className="font-semibold">
            &ldquo;If you care about healthcare costs, read this.&rdquo;
          </span>
          <span className="text-ink/70">— Mark Cuban on X, seen 200K+ times →</span>
        </Link>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="eyebrow text-amber mb-3">The problem</p>
          <h2 className="mb-3 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
            Health costs are out of control.
          </h2>
          <p className="mb-10 max-w-3xl text-lg text-white/70">
            Costs are climbing faster than they have in a generation, and a quarter of every dollar
            never becomes care. Now AI writes the notes, codes the claims, and prices the care —
            billing your plan more, at scale.
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
        eyebrow="Why you can't see it"
        title="The system as designed keeps you in the dark."
        tone="white"
      >
        <p className="text-ink/80 max-w-3xl text-lg">
          Your plan is run by the same brokers, TPAs, PBMs, and carriers who earn more when spend
          goes up. That isn&apos;t a conspiracy — it&apos;s just how the incentives are wired. Every
          party in the chain earns more when your costs go up. We don&apos;t.
        </p>
        <WhoProfitsChart />
        {/*
          SOURCE NEEDED BEFORE PUBLISH: transcribed from the July 2026 pitch deck (slide 4),
          which cites only "Mark Cuban · May 2026" with no link. Could not locate the original
          post. Every other claim on this site carries a source — add one here or pull the quote.
        */}
        <figure className="border-sage mt-12 max-w-3xl border-l-4 pl-6">
          <blockquote className="text-ink text-xl font-medium md:text-2xl">
            &ldquo;Insurance companies and PBMs have departments of people and AI to find new ways
            to downcode, add fees, mark up, deny, underpay and more. Employers cannot even get
            claims data reliably. And that is by design.&rdquo;
          </blockquote>
          <figcaption className="text-ink/70 mt-4 text-sm">
            <span className="text-ink font-semibold">Mark Cuban</span> · May 2026
          </figcaption>
        </figure>
      </Section>

      <Section
        eyebrow="How we create value"
        title="Grounded Health turns the lights on."
        tone="mist"
      >
        <p className="text-ink/80 max-w-3xl text-lg">
          Grounded Health is a platform: specialized agents review every claim as it lands, check
          bills against contracts, watch your rates against the market, track renewals, and score
          every vendor — 24/7, whether or not anyone&apos;s logged in. From reactive healthcare
          spending to proactive financial management.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.name} className="border-sage/30 bg-white rounded-lg border p-6 shadow-sm">
              <h3 className="text-ink text-lg font-bold">{p.name}</h3>
              <p className="text-ink/80 mt-2 text-sm">{p.body}</p>
            </div>
          ))}
        </div>
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
        <p className="text-ink/80 mb-8 max-w-3xl text-lg">
          Every step ends in a decision you control. Nothing material? Keep the report — we walk
          away.
        </p>
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

      {/* PROOF — role-abstracted reactions + honest "playbook works" framing. */}
      <Section eyebrow="Proof" title="We're new. The playbook isn't." tone="bone">
        <p className="text-ink/80 max-w-3xl text-lg">
          The transparent, fiduciary-aligned approach Grounded runs on has already cut costs 20–40%
          per capita for hundreds of employers — years before us. Here&apos;s what people say when
          they see it applied to their own plan.
        </p>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {PROOF_QUOTES.map((r) => (
            <figure
              key={r.name + r.quote}
              className="border-sage/30 bg-white flex flex-col rounded-lg border p-6 shadow-sm"
            >
              <blockquote className="text-ink flex-1 text-base">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-4">
                <p className="text-ink font-semibold">{r.name}</p>
                <p className="text-ink/70 text-sm">{r.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="text-ink/70 mt-6 max-w-3xl text-sm">
          The 20–40% results belong to employers running transparent plans through the Health
          Rosetta community — <strong>not Grounded clients</strong>. It&apos;s the approach we build
          on.{" "}
          <Link href="/proof/" className="text-spruce font-semibold underline">
            See the full track record →
          </Link>
        </p>
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
                Book a quick call
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
