const STATS = [
  {
    value: "20–40%",
    label: "Typical overpayment on employer health spend",
  },
  {
    value: "$0",
    label: "Cost of your scorecard — and no data lift for your team",
  },
  {
    value: "100%",
    label: "Independent — our only client is you",
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
