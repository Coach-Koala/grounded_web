import Image from "next/image";

const FEATURES = [
  {
    name: "Rate Intelligence agents",
    body: "Every hospital publishes the rates it accepts, by law. Agents compare yours to what comparable employers pay — continuously, as new pricing data lands — and turn the gap into a negotiation brief for your TPA.",
    image: "/screenshots/platform-rate-intelligence.jpg",
    alt: "Rate Intelligence view showing total excess spend versus market with verified savings opportunities",
  },
  {
    name: "Contract & fee agents",
    body: "Your plan is graded contract by contract: what's above market, what's renewing, and how much negotiation room you have — recalculated whenever a contract, fee, or filing changes.",
    image: "/screenshots/platform-contracts.jpg",
    alt: "Contract Structures view showing total annual contract spend, plan grade, and estimated negotiation room",
  },
  {
    name: "Billing review agents",
    body: "Every claim is reviewed as it lands — 100% audit coverage, not sampling. Findings are flagged, documented, and pushed toward resolution around the clock, so your payment integrity vendor has nowhere to hide.",
    image: "/screenshots/platform-billing.jpg",
    alt: "Billing Issues view showing flagged spend, recovered dollars, open findings, and full audit coverage",
  },
] as const;

export default function PlatformShowcase() {
  return (
    <div className="space-y-12">
      <figure className="overflow-hidden rounded-lg shadow-md">
        <Image
          src="/screenshots/platform-home.png"
          alt="Grounded Health employer home dashboard: actively managing plan quality frees up a $1.81M five-year reinvestment fund, with a trend chart comparing your actively-managed plan against leaving it on autopilot"
          width={1177}
          height={969}
          className="w-full"
        />
        <figcaption className="bg-white text-ink/70 px-6 py-4 text-sm">
          The employer home screen: your plan&apos;s trend vs. the market, the reinvestment fund
          that actively managing quality frees up, and what you could do with it — live, updated as
          agents process each claim. Not a quarterly deck.
        </figcaption>
      </figure>
      <div className="grid gap-8 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.name}
            className="bg-white flex flex-col overflow-hidden rounded-lg shadow-sm"
          >
            <Image
              src={feature.image}
              alt={feature.alt}
              width={1568}
              height={365}
              className="w-full"
            />
            <div className="flex-1 p-6">
              <h3 className="text-ink text-lg font-bold">{feature.name}</h3>
              <p className="text-ink/90 mt-2 text-sm">{feature.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
