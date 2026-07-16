const STATS = [
  {
    value: "30%",
    label: "of your direct employee cost is healthcare — usually the least-managed line on the P&L",
  },
  {
    value: "70%",
    label: "of total costs can be people costs. Managing the health plan moves the whole number",
  },
  {
    value: "100%",
    label: "of recovered waste is contribution margin — straight to operating income",
  },
] as const;

export default function StatBand() {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <p className="text-ink text-5xl font-bold tracking-tight md:text-6xl">{stat.value}</p>
          <p className="text-ink/80 mt-2 max-w-xs">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
