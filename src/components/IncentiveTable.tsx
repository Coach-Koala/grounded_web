const ROWS = [
  {
    who: "Your broker",
    how: "Earns commissions tied to premiums. Premiums go up, they earn more.",
  },
  {
    who: "Your carrier & TPA",
    how: "Earn fees on claims flow — some even charge a percentage to fix their own billing errors.",
  },
  {
    who: "Providers",
    how: "Bill more, and increasingly bill with AI. Coding errors overwhelmingly favor the biller.",
  },
  {
    who: "Point-solution vendors",
    how: "Grade their own homework. Engagement and ROI numbers come from the vendor being measured.",
  },
] as const;

export default function IncentiveTable() {
  return (
    <div className="border-sage/40 mt-10 overflow-hidden rounded-lg border bg-white">
      {ROWS.map((row) => (
        <div key={row.who} className="border-sage/30 grid border-b sm:grid-cols-[200px_1fr]">
          <p className="bg-mist text-ink px-6 py-4 text-sm font-semibold">{row.who}</p>
          <p className="text-ink/70 px-6 py-4 text-sm">{row.how}</p>
        </div>
      ))}
      <div className="grid sm:grid-cols-[200px_1fr]">
        <p className="bg-spruce px-6 py-4 text-sm font-semibold text-white">Grounded Health</p>
        <p className="text-ink px-6 py-4 text-sm font-medium">
          Flat fee. No commissions, no percentage of spend, no cut of recoveries. We&apos;re the
          only party at the table with nothing riding on your costs going up.
        </p>
      </div>
    </div>
  );
}
