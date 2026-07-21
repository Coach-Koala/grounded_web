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
      "I didn't even think this was possible — it wasn't something I was wishing for. We've all had this apathy of thinking we don't have any control over any of it. And I've never been able to get data that's actually actionable around this.",
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
      "After five years in healthcare, this is the problem Alyssa has finally cracked — a powerful capability for giving enterprises real visibility into what they're actually paying their brokers.",
    name: "Health-plan advisor and author",
    title: "Former benefits executive",
  },
  {
    quote:
      "This is me sending it to my boss saying, look how good I am at my job. And are you going to kill all the point solutions? That alone would be great for my inbox.",
    name: "Head of Benefits",
    title: "Fortune 500 technology company",
  },
  {
    quote:
      "Part of what this does is empower employers to stop feeling like victims of the system — which is exactly where they are right now.",
    name: "C-suite connector and benefits advisor",
    title: "Executive network",
  },
  {
    quote:
      "It's amazing how much data you've accumulated to support decision-making. I've always believed the person with the most data wins — and I like what I'm seeing.",
    name: "Third-generation benefits broker",
    title: "Independent brokerage",
  },
] as const;

const PARTNERS = [
  {
    name: "Nautilus Health",
    desc: "Independent, fiduciary-aligned analysis of PBM and vendor contracts — open, standardized scoring that shows plan sponsors what their contracts actually say.",
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
    desc: "Automated provider-data and roster accuracy — now part of First Choice Health, an independent, fiduciary-aligned TPA.",
    href: "https://orderlyhealth.com/",
  },
  {
    name: "Health Rosetta",
    desc: "The open methodology and advisor community proving transparent, fiduciary-aligned health plans at scale. The case studies above come from its network.",
    href: "https://www.healthrosetta.org",
  },
  {
    name: "Relentless Health Value",
    desc: "The essential podcast on how employer healthcare really works — sharp, unsparing interviews with the people fixing (and breaking) it. We recommend it without reservation; start anywhere.",
    href: "https://relentlesshealthvalue.com",
  },
  {
    name: "KFF Employer Health Benefits Survey",
    desc: "The definitive annual data on what employers actually pay for coverage — the benchmark everyone in this space cites.",
    href: "https://www.kff.org/health-costs/2025-employer-health-benefits-survey/",
  },
  {
    name: "Health Transformation Alliance",
    desc: "A coalition of large employers pooling data and buying power to fix healthcare — proof the demand side can organize.",
    href: "https://www.htahealth.com",
  },
] as const;

// Verified from the live IRS_5500 database (Metabase), 2026-07-21. All three are
// SELF-FUNDED medical plans; the figure is Schedule C service-provider direct
// compensation (fees to the brokers, TPAs & consultants that run the plan) as
// filed on their Form 5500. Per-participant fees cross-check as plausible
// ($613 / $840 / $439 per life). Public record — but confirm these three names
// with the founder before any production publish.
const OVERPAYERS = [
  {
    employer: "Delta Air Lines, Inc.",
    spend: "$2.7M",
    detail: "in disclosed fees to plan service providers — brokers, TPAs & consultants",
    context: "4,402 covered lives · self-funded · plan year 2025",
  },
  {
    employer: "Emerson Electric Company",
    spend: "$9.3M",
    detail: "in disclosed fees to plan service providers — brokers, TPAs & consultants",
    context: "11,113 covered lives · self-funded · plan year 2024",
  },
  {
    employer: "U-Haul Holding Company",
    spend: "$5.5M",
    detail: "in disclosed fees to plan service providers — brokers, TPAs & consultants",
    context: "12,467 covered lives · self-funded · plan year 2024",
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
        eyebrow="It's all public"
        title="Every employer files it. Almost none of them read it."
        tone="mist"
      >
        <p className="text-ink/80 mb-8 max-w-3xl text-lg">
          These employers self-fund — they pay their own claims. Their Form 5500 discloses the fees
          flowing to the brokers, TPAs, and consultants who run the plan, right there in the public
          record. Here&apos;s what a few large self-funded employers&apos; most recent filings show.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {OVERPAYERS.map((o) => (
            <div key={o.employer} className="border-critical/30 bg-white rounded-lg border p-6">
              <p className="text-ink text-lg font-bold">{o.employer}</p>
              <p className="text-critical mt-3 text-3xl font-bold tracking-tight">{o.spend}</p>
              <p className="text-ink/70 mt-1 text-sm">{o.detail}</p>
              <p className="text-ink/60 mt-3 text-sm font-medium">{o.context}</p>
              <p className="text-ink/40 mt-3 text-xs italic">
                Source: IRS Form 5500, Schedule C (public record)
              </p>
            </div>
          ))}
        </div>
        <div className="border-sage mt-10 border-t-2 pt-7">
          <h3 className="text-ink max-w-2xl text-2xl font-bold tracking-tight">
            Wondering where your plan lands?
          </h3>
          <p className="text-ink/70 mt-2 max-w-2xl">
            Your filing is public too. We&apos;ll show you in minutes — free, no obligation.
          </p>
          <a
            href="https://scorecard.getgroundedhealth.com"
            className="bg-spruce hover:bg-spruce-dark mt-5 inline-block rounded-lg px-6 py-3 font-semibold text-white"
          >
            See your scorecard — free
          </a>
        </div>
      </Section>

      <Section eyebrow="Early reactions" title="What people say when they see it." tone="bone">
        <p className="text-ink/80 mb-8 max-w-3xl">
          Grounded is early. These are real reactions from benefits leaders, brokers, and advisors
          who&apos;ve seen the platform — anonymized to role to protect privacy.
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
      </Section>
    </>
  );
}
