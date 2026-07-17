const STATS = [
  {
    value: "$2,700",
    label: "per employee, per year — what one employer was paying in broker fees alone",
  },
  {
    value: "$2.1B/yr",
    label: "in above-benchmark commissions across ~48,000 employers, hiding in public filings",
  },
  {
    value: "6–12 mo",
    label: "how far behind most employers' view of their own spend runs",
  },
  {
    value: "$0",
    label: "what we earn from your spend, your premiums, or your recoveries",
  },
] as const;

export default function StatBand() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <p className="text-ink text-4xl font-bold tracking-tight md:text-5xl">{stat.value}</p>
          <p className="text-muted mt-2 max-w-xs text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
