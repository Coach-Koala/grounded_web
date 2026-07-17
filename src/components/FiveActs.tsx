const ACTS = [
  {
    badge: "Component 1",
    name: "Health Plan Scorecard",
    chips: [{ label: "Free", variant: "success" }, { label: "Same day" }],
    meter: 1,
    needTitle: "Nothing — public data only",
    needBody: "Your filings and price-transparency data. We build it before we ever meet.",
    getLead: "How you look vs. peers:",
    getBody:
      "fees, funding, plan design, red flags — with the counterparties named. The “wait, we pay what?” moment.",
    featured: false,
  },
  {
    badge: "Component 2 · Start here",
    name: "Health Plan X-ray",
    chips: [{ label: "Flat fee", variant: "info" }, { label: "Findings in 2–3 wks" }],
    meter: 3,
    needTitle: "Your documents — no PHI",
    needBody:
      "Contracts, fee schedules, plan docs, census. The claims lane runs inside your own cloud; nothing sensitive leaves.",
    getLead: "The full diagnostic:",
    getBody:
      "problematic contract terms, above-market fees, vendor overcharges, billing that doesn't match the contract — and the negotiation leverage package for your next renewal.",
    featured: true,
  },
  {
    badge: "Component 3",
    name: "Recovery",
    chips: [
      { label: "Partner's contingency — we take $0", variant: "success" },
      { label: "60–120 days" },
    ],
    meter: 3,
    needTitle: "Nothing new",
    needBody:
      "We hand the X-ray's verified findings to a vetted recovery specialist. You approve every step.",
    getLead: "Money back:",
    getBody:
      "overcharges and billing errors recovered on the specialist's contingency. Their fee is theirs — we don't touch it, so our diagnosis is never inflated by a commission.",
    featured: false,
  },
  {
    badge: "Component 4",
    name: "Assurance",
    chips: [{ label: "Flat annual", variant: "info" }, { label: "Continuous" }],
    meter: 4,
    needTitle: "Ongoing feed",
    needBody:
      "The same in-cloud pipes, kept warm. Only aggregated, de-identified results come out.",
    getLead: "It never drifts back:",
    getBody:
      "agents keep reviewing every claim, contract, and vendor around the clock — real-time spend dashboard, continuous billing checks, vendor accountability scorecards, and the annual fiduciary evidence file your CFO and board can stand behind.",
    featured: false,
  },
  {
    badge: "Component 5",
    name: "Care Quality Verification",
    chips: [{ label: "Assurance add-on", variant: "info" }, { label: "Continuous" }],
    meter: 5,
    needTitle: "Claims + clinical signals",
    needBody:
      "The deepest level — matched inside your cloud, surfaced only as de-identified, aggregate insight.",
    getLead: "Is the care any good:",
    getBody:
      "billed-vs-delivered verification, provider quality in your network, your population's trends vs. national norms, care-gap and acute early warnings — proof your people get the care you pay for.",
    featured: false,
  },
] as const;

function Meter({ level }: { level: number }) {
  return (
    <div aria-hidden="true" className="mb-2 flex gap-1">
      {[1, 2, 3, 4, 5].map((step) => (
        <i
          key={step}
          className={`h-2 w-6 rounded-sm ${step <= level ? "bg-spruce" : "bg-mist border-line border"}`}
        />
      ))}
    </div>
  );
}

export default function FiveActs() {
  return (
    <div className="mt-4 space-y-4">
      <div className="text-subtle hidden grid-cols-[280px_260px_1fr] gap-6 px-7 md:grid">
        <p className="eyebrow">The offer</p>
        <p className="eyebrow">What we need from you</p>
        <p className="eyebrow">What you get</p>
      </div>
      {ACTS.map((act) => (
        <div
          key={act.badge}
          className={`bg-white grid gap-4 rounded-xl p-7 shadow-sm md:grid-cols-[280px_260px_1fr] md:gap-6 ${
            act.featured ? "border-spruce border-2" : "border-line border"
          }`}
        >
          <div>
            <p className="eyebrow text-spruce mb-1">{act.badge}</p>
            <h3 className="text-ink text-lg font-bold">{act.name}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {act.chips.map((chip) => (
                <span
                  key={chip.label}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    "variant" in chip && chip.variant === "success"
                      ? "bg-positive-soft text-positive"
                      : "variant" in chip && chip.variant === "info"
                        ? "bg-spruce-soft text-spruce"
                        : "bg-mist text-muted"
                  }`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Meter level={act.meter} />
            <p className="text-ink text-sm font-semibold">{act.needTitle}</p>
            <p className="text-muted mt-1 text-sm">{act.needBody}</p>
          </div>
          <p className="text-muted text-sm md:self-center">
            <b className="text-ink">{act.getLead}</b> {act.getBody}
          </p>
        </div>
      ))}
      <p className="text-subtle px-7 text-sm">
        The meter shows how much data each component uses: public data → documents → claims (in your
        cloud) → ongoing feed → clinical. It only moves right once the previous component has earned
        it.
      </p>
    </div>
  );
}
