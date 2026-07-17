const TEAM = [
  {
    name: "Alyssa Simpson Rochwerger",
    role: "CEO & CPO",
    bio: "Builds AI products that survive contact with the real world — from prototype to production systems used by millions. Author of Real World AI. She's led product and go-to-market at companies turning messy data into decisions people actually trust.",
    linkedin: "https://www.linkedin.com/in/alyssasr/",
    initials: "AR",
  },
  {
    name: "Benjamin Kearns",
    role: "CTO & Founder",
    bio: "Serial CTO and VP of Engineering who builds 0-to-1 in health tech and data infrastructure. He turns complex, regulated systems into durable platforms — and builds the engineering teams that keep them running.",
    linkedin: "https://www.linkedin.com/in/benjaminkearns/",
    initials: "BK",
  },
  {
    name: "Keith Vertrees",
    role: "AI Product & Architecture",
    bio: "Spends his time deploying AI inside organizations, converting strategy into working systems fast. A decade of turning enterprise AI initiatives into real, measurable results rather than pilots that never ship.",
    linkedin: "https://www.linkedin.com/in/keithvertrees/",
    initials: "KV",
  },
  {
    name: "Eric Shangle",
    role: "People & Organization",
    bio: "Scales human organizations in complex environments — from PE-backed growth to energy transitions. An HR executive across industrial, renewables, and SaaS, and a Naval officer veteran who's led through hard changes.",
    linkedin: "https://www.linkedin.com/in/ericshangle/",
    initials: "ES",
  },
] as const;

export default function Team() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {TEAM.map((person) => (
        <a
          key={person.name}
          href={person.linkedin}
          target="_blank"
          rel="noopener"
          className="border-sage/30 bg-white group flex gap-5 rounded-lg border p-6 shadow-sm"
        >
          <span
            aria-hidden="true"
            className="bg-spruce flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
          >
            {person.initials}
          </span>
          <div>
            <h3 className="text-ink group-hover:text-spruce text-lg font-bold">{person.name}</h3>
            <p className="eyebrow text-spruce mt-1">{person.role}</p>
            <p className="text-ink/80 mt-3 text-sm">{person.bio}</p>
            <span className="text-spruce mt-4 inline-block text-sm font-semibold group-hover:underline">
              LinkedIn →
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
