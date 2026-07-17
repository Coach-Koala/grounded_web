const TEAM = [
  {
    name: "Alyssa Simpson Rochwerger",
    role: "CEO & CPO",
    blurb: "Builds AI products that survive contact with the real world. Author of Real World AI.",
    linkedin: "https://www.linkedin.com/in/alyssasr/",
    initials: "AR",
  },
  {
    name: "Benjamin Kearns",
    role: "CTO & Founder",
    blurb: "Applied technologist building 0-to-1 in health tech and data infrastructure.",
    linkedin: "https://www.linkedin.com/in/benjaminkearns/",
    initials: "BK",
  },
  {
    name: "Eric Shangle",
    role: "People & HR",
    blurb: "HR executive across industrial, renewables, and SaaS. Naval officer veteran.",
    linkedin: "https://www.linkedin.com/in/ericshangle/",
    initials: "ES",
  },
  {
    name: "Keith Vertrees",
    role: "AI Product",
    blurb: "A decade turning enterprise AI initiatives into real, measurable results.",
    linkedin: "https://www.linkedin.com/in/keithvertrees/",
    initials: "KV",
  },
] as const;

export default function Team() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {TEAM.map((person) => (
        <a
          key={person.name}
          href={person.linkedin}
          className="bg-white group flex flex-col rounded-lg p-6 shadow-sm"
        >
          <span
            aria-hidden="true"
            className="bg-spruce flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white"
          >
            {person.initials}
          </span>
          <h3 className="text-ink group-hover:text-spruce mt-4 text-lg font-bold">{person.name}</h3>
          <p className="eyebrow text-spruce mt-1">{person.role}</p>
          <p className="text-ink/80 mt-2 flex-1 text-sm">{person.blurb}</p>
          <span className="text-spruce mt-4 text-sm font-semibold group-hover:underline">
            LinkedIn →
          </span>
        </a>
      ))}
    </div>
  );
}
