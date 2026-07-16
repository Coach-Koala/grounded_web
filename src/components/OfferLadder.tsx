import Link from "next/link";

const OFFERS = [
  {
    step: "01",
    name: "Free Scorecard",
    body: "See how your health plan compares. Surface critical findings and get a fast read on potential savings — before you spend a dollar.",
    cta: { label: "Get your free scorecard", href: "/#scorecard" },
  },
  {
    step: "02",
    name: "Claims X-Ray",
    body: "A deep review of your paid medical and pharmacy claims. We find recoverable billing errors, contract violations, and fraud. Our fee is a percentage of what you verifiably recover — we get paid when you do.",
  },
  {
    step: "03",
    name: "Continuous Monitoring",
    body: "Ongoing oversight across claims, vendors, and contracts. Issues get caught before they compound, and savings stay visible year after year.",
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
