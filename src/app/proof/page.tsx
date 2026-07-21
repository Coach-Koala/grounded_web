import type { Metadata } from "next";
import LogoMarquee from "@/components/LogoMarquee";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Proof",
  description:
    "The methodology already works: hundreds of employers have cut health costs 20–40% per capita. Here's their track record, the economic case, early reactions to Grounded, and the people we build alongside.",
};

const CASE_STUDIES = [
  {
    employer: "Rosen Hotels & Resorts",
    employees: "5,700",
    industry: "Hospitality",
    metric: "$315M cumulative",
    note: "40% below industry avg",
  },
  {
    employer: "DeSoto Memorial Hospital",
    employees: "220",
    industry: "Healthcare",
    metric: "$1.2M saved",
    note: "54% cost reduction",
  },
  {
    employer: "City of Milwaukee",
    employees: "6,800",
    industry: "Government",
    metric: "$50M+ saved",
    note: "25% below benchmark",
  },
  {
    employer: "Robert Wood Johnson Foundation",
    employees: "650",
    industry: "Philanthropy",
    metric: "22% per-capita cut",
    note: "in year one",
  },
  {
    employer: "Aldrich CPAs",
    employees: "200",
    industry: "Professional services",
    metric: "$1.2M saved in 2 yrs",
    note: "15–20% reduction",
  },
  {
    employer: "Employers Council",
    employees: "280",
    industry: "Consulting",
    metric: "24% premium reduction",
    note: "plus richer benefits",
  },
  {
    employer: "Langdale Industries",
    employees: "2,500",
    industry: "Manufacturing",
    metric: "Trend flat for 5 yrs",
    note: "vs. 6–8% market",
  },
  {
    employer: "Shea Butter",
    employees: "350",
    industry: "Consumer goods",
    metric: "$780K saved",
    note: "family OOP down 30%",
  },
] as const;

const REACTIONS = [
  {
    quote:
      "It gives you visibility into the black box. Information is exactly what you need to start having real conversations with your carrier.",
    name: "Head of Benefits",
    title: "Fortune 500 software company",
  },
  {
    quote:
      "The claims and up-coding piece is the most interesting part — that's what got me excited. You're heading in exactly the right direction.",
    name: "Head of Benefits",
    title: "Large enterprise technology company",
  },
  {
    quote: "This is the kind of transparency the market's been missing.",
    name: "Founder",
    title: "Healthcare advisory firm · former hospital-group CIO",
  },
  {
    quote:
      "Most CEOs have never read their own health plan filing. Once you see it, you can change it — and Grounded shows you.",
    name: "Independent health-plan advisor",
    title: "Board member, benefits advisory firm",
  },
  {
    quote: "You're speaking my language. It starts with exactly what you're doing — transparency.",
    name: "Physician",
    title: "Health-tech advisor",
  },
  {
    quote:
      "That's compelling. If you can save me a million to two million of EBITDA, that gets my attention — I can take that straight to the board.",
    name: "CEO",
    title: "~800-person direct-to-consumer retail company",
  },
] as const;

const PARTNERS = [
  {
    name: "Nautilus Health",
    desc: "Independent, fiduciary-aligned Contract X-ray scoring for PBM contracts — the methodology behind our contract review.",
    href: "https://www.contractxray.com",
  },
  {
    name: "Turquoise Health",
    desc: "Price-transparency data: real negotiated rates, provider by provider — the market benchmark behind our rate intelligence.",
    href: "https://turquoise.health/",
  },
  {
    name: "Avelis Health",
    desc: "AI plus clinician review that audits medical claims and recovers overpayments — reducing plan spend 2–7%.",
    href: "https://www.avelishealth.com/",
  },
  {
    name: "Orderly Health",
    desc: "Automated provider-data and roster accuracy. First Choice Health cleared a six-month backlog and lifted throughput 750%+.",
    href: "https://orderlyhealth.com/customer-stories/from-backlog-to-breakthrough-first-choice-healths-success-story/",
  },
  {
    name: "Health Rosetta",
    desc: "The open methodology and advisor community proving transparent, fiduciary-aligned health plans at scale. The case studies above come from its network.",
    href: "https://www.healthrosetta.org",
  },
] as const;

const RHV_EPISODES = [
  {
    ep: "EP372",
    title: "Step One for Employers: Get Your Data",
    guest: "Cora Opsahl, 32BJ Health Fund",
    takeaway:
      "You can't fix what you can't see — the first move for any self-funded employer is owning its own claims data.",
    href: "https://relentlesshealthvalue.com/blog/transcript-for-encore-ep372-step-one-for-employers-and-unionsget-your-data-with-cora-opsahl",
  },
  {
    ep: "EP397",
    title: "The PBM Contract Minefield",
    guest: "Paul Holmes",
    takeaway:
      "PBM contracts are a minefield of definitions written against the plan sponsor — the case for reading every clause.",
    href: "https://relentlesshealthvalue.com/blog/transcript-of-encore-ep397-with-paul-holmes",
  },
  {
    ep: "EP379",
    title: "Broker & Consultant Compensation",
    guest: "A. J. Loiacono",
    takeaway: "How broker and consultant pay quietly misaligns with the employer footing the bill.",
    href: "https://relentlesshealthvalue.com/blog/transcript-for-ep379",
  },
  {
    ep: "EP418",
    title: "Advice for Self-Insured Employers",
    guest: "Mark Cuban & Ferrin Williams",
    takeaway: "Cut out the middlemen, demand transparency, and act on your own data.",
    href: "https://relentlesshealthvalue.com/blog/transcript-for-encore-ep418-with-mark-cuban-and-ferrin-williams",
  },
  {
    ep: "EP415",
    title: "How Jumbo Employers Save",
    guest: "Rob Andrews, Health Transformation Alliance",
    takeaway:
      "Large employers get better outcomes and real savings by pooling and acting on their data.",
    href: "https://relentlesshealthvalue.com/blog/transcript-for-encore-ep415-with-rob-andrews",
  },
] as const;

const RESOURCES = [
  {
    name: "KFF — 2025 Employer Health Benefits Survey",
    desc: "The definitive annual data on what employers pay for coverage.",
    href: "https://www.kff.org/health-costs/2025-employer-health-benefits-survey/",
  },
  {
    name: "Health Transformation Alliance",
    desc: "A coalition of large employers pooling data and buying power to fix healthcare.",
    href: "https://www.htahealth.com",
  },
  {
    name: "Relentless Health Value",
    desc: "The full podcast archive — start anywhere.",
    href: "https://relentlesshealthvalue.com",
  },
] as const;

export default function ProofPage() {
  return (
    <>
      <Section
        eyebrow="Proof"
        title="The framework already works. We just make it easier to run."
        tone="band"
      >
        <p className="max-w-3xl text-lg text-white/90">
          Transparent, fiduciary-aligned health plans aren&apos;t a theory — hundreds of employers
          have already cut costs 20–40% per capita this way, years before us. The results here
          belong to the employers and advisors who earned them, not to us.
        </p>
      </Section>

      <section className="border-sage/20 border-y bg-white py-10">
        <p className="eyebrow text-ink/70 mx-auto mb-6 max-w-6xl px-6 text-center">
          Employers already running transparent, fiduciary-aligned plans
        </p>
        <LogoMarquee />
      </section>

      <Section
        eyebrow="The track record"
        title="Employers already running this playbook."
        tone="bone"
      >
        <p className="text-ink/80 mb-8 max-w-3xl">
          These are results from employers who adopted transparent, fiduciary-aligned health plans
          through the Health Rosetta community — <strong>not Grounded clients</strong>. Median
          savings run 20–40% per capita. It&apos;s the approach we build on.
        </p>
        <div className="border-sage/40 overflow-x-auto rounded-lg border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-spruce text-white">
                <th className="px-4 py-3 font-semibold">Employer</th>
                <th className="px-4 py-3 font-semibold">Employees</th>
                <th className="px-4 py-3 font-semibold">Industry</th>
                <th className="px-4 py-3 font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {CASE_STUDIES.map((c) => (
                <tr key={c.employer} className="border-sage/30 border-b bg-white last:border-0">
                  <td className="text-ink px-4 py-3 font-semibold">{c.employer}</td>
                  <td className="text-ink/70 px-4 py-3">{c.employees}</td>
                  <td className="text-ink/70 px-4 py-3">{c.industry}</td>
                  <td className="px-4 py-3">
                    <span className="text-spruce font-bold">{c.metric}</span>{" "}
                    <span className="text-ink/60">· {c.note}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-ink/50 mt-4 max-w-3xl text-xs">
          Source: Health Plan Heroes v2 (Dave Chase / Patients Rising), via the{" "}
          <a
            href="https://members.healthrosetta.org/employer-webinars/"
            className="text-spruce underline"
            target="_blank"
            rel="noopener"
          >
            Health Rosetta community
          </a>{" "}
          — 26 documented cases; advisors operate under Health Rosetta&apos;s transparent
          compensation model.
        </p>
      </Section>

      <Section
        eyebrow="The economic case"
        title="What a better plan is actually worth."
        tone="mist"
      >
        <div className="bg-ink grid gap-8 rounded-2xl p-8 md:grid-cols-[1fr_320px] md:p-12">
          <div>
            <blockquote className="text-2xl font-bold tracking-tight text-white md:text-3xl md:leading-snug">
              One employer had <span className="text-sage">$2,300 less per employee per year</span>,
              with better benefits. When the acquiring company moved 2,500 employees onto that plan,
              the change created{" "}
              <span className="text-sage">more than a quarter billion dollars of equity value</span>{" "}
              that had not been priced in.
            </blockquote>
            <p className="text-mist mt-6 text-sm">
              Benefits strategy lead, large-employer purchasing coalition
            </p>
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

      <Section eyebrow="Early reactions" title="What people say when they see it." tone="bone">
        <p className="text-ink/80 mb-8 max-w-3xl">
          Grounded is early. These are reactions from benefits leaders and advisors who&apos;ve seen
          the platform — lightly polished from live conversations for clarity, anonymized to role to
          protect privacy.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REACTIONS.map((r) => (
            <figure
              key={r.name + r.quote}
              className="border-sage/30 bg-white flex flex-col rounded-lg border p-6 shadow-sm"
            >
              <blockquote className="text-ink flex-1 text-base">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-4">
                <p className="text-ink font-semibold">{r.name}</p>
                <p className="text-ink/60 text-sm">{r.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Better together"
        title="Fixing American healthcare isn't a one-company job."
        tone="bone"
      >
        <p className="text-ink/80 mb-8 max-w-3xl">
          No single company un-breaks US healthcare. These are the partners, methodologies, and
          voices we build alongside, learn from, and recommend.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {PARTNERS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener"
              className="border-sage/30 bg-white group flex flex-col rounded-lg border p-6 shadow-sm"
            >
              <h3 className="text-ink group-hover:text-spruce text-lg font-bold">{p.name}</h3>
              <p className="text-ink/80 mt-2 flex-1 text-sm">{p.desc}</p>
              <span className="text-spruce mt-4 text-sm font-semibold group-hover:underline">
                Visit →
              </span>
            </a>
          ))}
        </div>

        <p className="eyebrow text-ink/70 mt-12 mb-4">Worth your time</p>
        <div className="border-sage/30 divide-sage/30 divide-y overflow-hidden rounded-lg border bg-white">
          {RESOURCES.map((r) => (
            <a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noopener"
              className="group grid gap-1 p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
            >
              <div>
                <p className="text-ink group-hover:text-spruce font-semibold">{r.name}</p>
                <p className="text-ink/70 mt-0.5 text-sm">{r.desc}</p>
              </div>
              <span className="text-spruce text-sm font-semibold group-hover:underline">
                Visit →
              </span>
            </a>
          ))}
          {RHV_EPISODES.map((e) => (
            <a
              key={e.ep}
              href={e.href}
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-between gap-4 p-4"
            >
              <p className="text-ink group-hover:text-spruce text-sm">
                <span className="text-spruce font-semibold">Relentless Health Value {e.ep}</span> ·{" "}
                {e.title} <span className="text-ink/60">— {e.guest}</span>
              </p>
              <span className="text-spruce shrink-0 text-sm font-semibold group-hover:underline">
                Listen →
              </span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
