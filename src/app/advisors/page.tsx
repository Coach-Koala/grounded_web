import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "For advisors",
  description:
    "Independent claims, vendor, and contract intelligence that makes your recommendations sharper — and your renewals easier to defend.",
};

const TOOLS = [
  {
    name: "Decision support",
    body: "Claims-level evidence behind the recommendations you're already making. Walk into renewal meetings with numbers, not vibes.",
  },
  {
    name: "Benchmarking when it matters",
    body: "When a client is shopping — for a broker, a vendor, a network — we help you show them how the options actually compare.",
  },
  {
    name: "Negotiation leverage",
    body: "Contract terms and pricing flagged against peers, so you can push back on the lines that deserve it.",
  },
  {
    name: "Independent validation",
    body: "A third party confirming your advice isn't a threat to your seat at the table. It's what keeps you in it.",
  },
] as const;

export default function AdvisorsPage() {
  return (
    <>
      <Section
        eyebrow="For advisors"
        title="You know the plan is leaking. Now you can show exactly where."
        tone="bone"
      >
        <p className="text-ink max-w-2xl text-lg">
          You&apos;ve built your practice on doing right by clients. Grounded gives you the
          independent data layer to prove it — claims, vendors, and contracts, analyzed without a
          carrier&apos;s thumb on the scale.
        </p>
      </Section>

      <Section eyebrow="In your toolkit" tone="mist">
        <div className="grid gap-8 md:grid-cols-2">
          {TOOLS.map((item) => (
            <div key={item.name} className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-ink text-xl font-bold">{item.name}</h3>
              <p className="text-ink mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="scorecard"
        eyebrow="Start here"
        title="Run a scorecard for a client."
        tone="bone"
      >
        <div className="max-w-2xl">
          <LeadForm defaultAudience="advisor" />
        </div>
      </Section>
    </>
  );
}
