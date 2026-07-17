type Chip = { label: string; solid?: boolean; outline?: boolean };
type Need = { icons: IconName[]; title: string; body: string };
type Get = { lead: string; body: string };
type Act = {
  name: string;
  chips: Chip[];
  meter: number;
  need: Need;
  get: Get;
  featured?: boolean;
};

type IconName = "public" | "nda" | "cloud" | "subset" | "lock" | "loop" | "clinical";

const ACTS: Act[] = [
  {
    name: "Health Plan Scorecard",
    chips: [{ label: "Free", solid: true }, { label: "Instant" }],
    meter: 1,
    need: {
      icons: ["public"],
      title: "Nothing — public data only",
      body: "Your filings and price-transparency data. We build it before we ever meet.",
    },
    get: {
      lead: "How you look vs. peers:",
      body: "fees, funding, plan design, red flags — with the counterparties named. The “wait, we pay what?” moment.",
    },
  },
  {
    name: "Contract Review",
    chips: [{ label: "Flat fee", solid: true }, { label: "Under a week" }],
    meter: 2,
    need: {
      icons: ["nda"],
      title: "Sign an NDA",
      body: "Just your contract documents — your PBM agreement, fee schedules, plan docs. No claims data, no PHI.",
    },
    get: {
      lead: "The contract diagnostic:",
      body: "your PBM contract scored against ten fiduciary-aligned standards — spread pricing and retained rebates, missing audit and data-ownership rights, network steering, hidden admin fees, and clean-exit barriers — plus your CAA 2026 readiness and the model language to close each gap at renewal.",
    },
    featured: true,
  },
  {
    name: "Claims X-ray",
    chips: [{ label: "Flat fee", solid: true }, { label: "1 hour in your cloud" }],
    meter: 3,
    need: {
      icons: ["cloud"],
      title: "De-identified claims data",
      body: "The claims data runs inside your own cloud; nothing sensitive leaves.",
    },
    get: {
      lead: "The claims diagnostic:",
      body: "every claim checked, not a 1% sample — providers billing above your contracted rates, duplicate and erroneous charges, out-of-network paid as in-network, plus whether your people are actually using the high-quality providers you're paying for.",
    },
  },
  {
    name: "Overpayment Recovery",
    chips: [
      { label: "Partner's contingency — we take $0", outline: true },
      { label: "Starts immediately" },
    ],
    meter: 3,
    need: {
      icons: ["subset", "lock"],
      title: "Only the flagged claims + selective PHI",
      body: "The subset of claims where we found overpayments — passed to our recovery partner with just the PHI they need to pursue them. You approve exactly what's exposed.",
    },
    get: {
      lead: "Money back:",
      body: "a vetted recovery partner works the flagged claims on contingency, with first dollars back in as little as 90 days and reviews running continuously. Their fee is theirs — we don't touch it, so our diagnosis is never inflated by a commission.",
    },
  },
  {
    name: "Assurance",
    chips: [{ label: "Flat annual", solid: true }, { label: "Continuous" }],
    meter: 4,
    need: {
      icons: ["loop"],
      title: "Ongoing feed",
      body: "The same in-cloud pipes, kept warm. Only aggregated, de-identified results come out.",
    },
    get: {
      lead: "It never drifts back:",
      body: "agents keep reviewing every claim, contract, and vendor around the clock — real-time spend dashboard, continuous billing checks, vendor accountability scorecards, and the annual fiduciary evidence file your CFO and board can stand behind.",
    },
  },
  {
    name: "Care Quality Verification",
    chips: [{ label: "Assurance add-on", solid: true }, { label: "Continuous" }],
    meter: 5,
    need: {
      icons: ["clinical"],
      title: "BAA + EHR authorization",
      body: "A signed BAA and your authorization to pull clinical EHR data — matched inside your cloud, surfaced only as de-identified, aggregate insight.",
    },
    get: {
      lead: "Is the care any good:",
      body: "billed-vs-delivered verification, which of your people are the clinical outliers, care-gap and acute early warnings, and your population's trends vs. national norms — proof your people get the care you pay for.",
    },
  },
];

function Icon({ name }: { name: IconName }) {
  const common = {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "public":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18" />
        </svg>
      );
    case "nda":
      return (
        <svg {...common}>
          <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z" />
          <path d="M14 3v4h4" />
          <path d="M9 17c1.2-2.2 3.8-2.2 5 0" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18a4 4 0 0 1 .5-8 5 5 0 0 1 9.6-1.2A3.5 3.5 0 0 1 17.5 18z" />
        </svg>
      );
    case "subset":
      return (
        <svg {...common}>
          <path d="M4 5h16l-6 7v5l-4 2v-7z" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      );
    case "loop":
      return (
        <svg {...common}>
          <path d="M20 11a8 8 0 1 0-2 5.3" />
          <path d="M20 5v6h-6" />
        </svg>
      );
    case "clinical":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10z" />
          <path d="M7.5 12h2l1.3-3 1.6 5 1-2h2.6" />
        </svg>
      );
  }
}

function Meter({ level }: { level: number }) {
  return (
    <div aria-hidden="true" className="mb-2 flex gap-1">
      {[1, 2, 3, 4, 5].map((step) => (
        <i
          key={step}
          className={`h-2 w-6 rounded-sm ${step <= level ? "bg-spruce" : "bg-mist border-sage/40 border"}`}
        />
      ))}
    </div>
  );
}

function Chips({ chips }: { chips: Chip[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <span
          key={chip.label}
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            chip.solid
              ? "bg-spruce text-white"
              : chip.outline
                ? "border-spruce text-spruce bg-white border"
                : "bg-mist text-ink/70"
          }`}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
}

function NeedBlock({ need, meter }: { need: Need; meter?: number }) {
  return (
    <div>
      {meter !== undefined && <Meter level={meter} />}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-spruce flex gap-1.5">
          {need.icons.map((icon) => (
            <Icon key={icon} name={icon} />
          ))}
        </span>
        <p className="text-ink text-sm font-semibold">{need.title}</p>
      </div>
      <p className="text-ink/70 text-sm">{need.body}</p>
    </div>
  );
}

function GetBlock({ get }: { get: Get }) {
  return (
    <p className="text-ink/80 text-sm md:self-center">
      <b className="text-ink">{get.lead}</b> {get.body}
    </p>
  );
}

export default function FiveActs() {
  const last = ACTS.length - 1;
  return (
    <div className="mt-4">
      {/* column headers, offset to align with the cards beside the rail */}
      <div className="hidden md:flex md:gap-6">
        <div className="w-11 shrink-0" aria-hidden="true" />
        <div className="text-ink/60 grid flex-1 grid-cols-[280px_260px_1fr] gap-6 px-7">
          <span />
          <p className="eyebrow">What we need from you</p>
          <p className="eyebrow">What you get</p>
        </div>
      </div>

      {ACTS.map((act, i) => (
        <div key={act.name} className="flex gap-4 md:gap-6">
          {/* progression rail: numbered node on a connecting line */}
          <div className="flex w-11 shrink-0 flex-col items-center">
            <div
              className={`w-0.5 flex-1 ${i === 0 ? "bg-transparent" : "bg-sage/50"}`}
              aria-hidden="true"
            />
            <div className="bg-spruce flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white shadow-sm">
              <span className="sr-only">Component </span>
              {i + 1}
            </div>
            <div
              className={`w-0.5 flex-1 ${i === last ? "bg-transparent" : "bg-sage/50"}`}
              aria-hidden="true"
            />
          </div>

          {/* card */}
          <div
            className={`bg-white my-2 flex-1 rounded-lg p-7 shadow-sm ${
              act.featured ? "border-spruce border-2" : "border-sage/30 border"
            }`}
          >
            <div className="grid gap-4 md:grid-cols-[280px_260px_1fr] md:gap-6">
              <div>
                {act.featured && <p className="eyebrow text-spruce mb-1">Start here</p>}
                <h3 className="text-ink text-lg font-bold">{act.name}</h3>
                <Chips chips={act.chips} />
              </div>
              <NeedBlock need={act.need} meter={act.meter} />
              <GetBlock get={act.get} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
