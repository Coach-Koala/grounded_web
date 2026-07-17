import type { Metadata } from "next";
import Team from "@/components/Team";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Grounded Health is a public benefit corporation building the independent check on employer healthcare — by people who have lived the problem from the inside.",
};

const BELIEFS = [
  "We do work we're proud to stand behind — ethically, practically, and over time.",
  "We care about outcomes, not optics. If it doesn't create real value, it doesn't matter.",
  "We hold a high bar — for ourselves, for our partners, and for the work itself.",
  "We say no to work that doesn't meet that bar, even when it's easier to say yes.",
  "We believe how something gets built matters as much as what gets built.",
  "We design for durability — systems, teams, and decisions that hold up beyond the moment.",
  "We believe AI should make people more effective, not more replaceable.",
  "We prioritize clarity over complexity, and honesty over comfort.",
  "We believe great teams are built on trust, shared standards, and mutual respect.",
  "We measure success by whether the work leaves the organization — and the people in it — stronger than we found them.",
];

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="About us" title="Solving hard problems together." tone="band">
        <p className="max-w-3xl text-lg text-white/90">
          We&apos;ve spent our careers at the intersection of technology, transformation, and
          real-world impact. And we&apos;ve each lived this particular problem from the inside — as
          the employee blindsided by a bill, the parent fighting a denied claim, the leader signing
          a renewal we couldn&apos;t fully see inside.
        </p>
        <p className="mt-8 max-w-3xl text-2xl font-bold text-white md:text-3xl">
          The hardest problems in healthcare aren&apos;t technical — they&apos;re human.
        </p>
        <p className="mt-8 max-w-3xl text-white/90">
          Employers don&apos;t overspend because they lack tools. They overspend because aligning
          people, incentives, data, and vendors is messy in the real world — and nearly everyone in
          the chain is paid to keep it that way. That&apos;s the work we do: making the plan
          visible, and making the incentives honest.
        </p>
      </Section>

      <Section eyebrow="The standards behind the work" title="What we believe." tone="bone">
        <div className="grid gap-4 md:grid-cols-2">
          {BELIEFS.map((belief) => (
            <div
              key={belief}
              className="border-sage/30 bg-white flex gap-3 rounded-lg border p-5 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="bg-spruce mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
              >
                ✓
              </span>
              <p className="text-ink text-sm md:text-base">{belief}</p>
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
        tone="bone"
      >
        <div className="border-spruce bg-white max-w-3xl rounded-lg border-2 p-8">
          <p className="text-ink/80">
            Grounded Health is incorporated as a public benefit corporation. Our charter legally
            binds our directors to weigh the interests of the people who depend on employer health
            plans — patients, plan members, and the employers who sponsor them — alongside those of
            shareholders.
          </p>
          <p className="text-ink/80 mt-4">
            Most healthcare vendors promise alignment. We made it a duty written into our founding
            documents. Combined with flat-fee pricing and zero ownership by any broker, carrier,
            TPA, or PBM, our independence isn&apos;t a marketing claim — it&apos;s our corporate
            structure. It&apos;s the reason we can put our name on the numbers.
          </p>
        </div>
      </Section>
    </>
  );
}
