const STATS = [
  {
    value: "$26,993",
    label: "Average family premium in 2025",
    source: "KFF",
  },
  {
    value: "+6.5–10%",
    label: "Projected 2026 cost increase — steepest in 15 years",
    source: "Mercer",
  },
  {
    value: "59%",
    label: "Of employers cutting plan benefits in 2026 (up from 44% in 2024)",
    source: "Mercer",
  },
] as const;

export default function StatBand() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {STATS.map((stat) => (
        <div key={stat.label} className="border-sage/30 rounded-lg border bg-white p-6 shadow-sm">
          <p className="text-spruce text-4xl font-bold tracking-tight md:text-5xl">{stat.value}</p>
          <p className="text-ink/80 mt-2 text-sm">{stat.label}</p>
          <p className="eyebrow text-ink/50 mt-4 text-xs">Source: {stat.source}</p>
        </div>
      ))}
    </div>
  );
}
