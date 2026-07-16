import Link from "next/link";

const OFFERS = [
  {
    step: "01",
    name: "Free Scorecard",
    body: "Built entirely from your plan's own public filings — broker pay, carrier rates, funding structure. See how your costs stack up against companies like yours. Two minutes, no claims data required.",
    cta: { label: "Get your free scorecard", href: "/#scorecard" },
  },
  {
    step: "02",
    name: "Spend X-Ray",
    body: "A full independent view of where your healthcare dollars actually go: claims and pharmacy spend, contract terms and fees, rates versus your market, and what every vendor is delivering for what you pay.",
  },
  {
    step: "03",
    name: "Continuous Management",
    body: "Grounded runs alongside your plan year-round. Billing issues get flagged, contracts are tracked to renewal, and every vendor — including your payment integrity provider — is scored on what it actually returns.",
  },
] as const;

export default function OfferLadder() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {OFFERS.map((offer) => (
        <div key={offer.step} className="bg-white flex flex-col rounded-lg p-8 shadow-sm">
          <p className="eyebrow text-spruce">{offer.step}</p>
          <h3 className="text-ink mt-2 text-2xl font-bold">{offer.name}</h3>
          <p className="text-ink/90 mt-3 flex-1">{offer.body}</p>
          {"cta" in offer && offer.cta ? (
            <Link href={offer.cta.href} className="text-spruce mt-6 font-semibold hover:underline">
              {offer.cta.label} →
            </Link>
          ) : null}
        </div>
      ))}
    </div>
  );
}
