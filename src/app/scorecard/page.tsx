import type { Metadata } from "next";

const DEFAULT_SCORECARD_URL = "https://scorecard.getgroundedhealth.com";

export const metadata: Metadata = {
  title: "Free Form 5500 scorecard",
  description:
    "Run the Grounded Health public Form 5500 scorecard to see plan signals from public data.",
};

function scorecardUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SCORECARD_APP_URL?.trim();
  return configured && configured.length > 0 ? configured : DEFAULT_SCORECARD_URL;
}

export default function ScorecardPage() {
  const url = scorecardUrl();

  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow text-spruce mb-3">Public Form 5500 scorecard</p>
            <h1 className="text-ink text-4xl font-bold tracking-tight uppercase md:text-6xl">
              Start with the free Grounded Health scorecard.
            </h1>
            <p className="text-muted mt-5 text-lg md:text-xl">
              Search public filings for early signals in plan spend, broker compensation, vendor
              complexity, and renewal exposure — the first check before claims access,
              implementation, or a sales conversation.
            </p>
          </div>

          <aside className="border-line bg-white rounded-2xl border p-6 shadow-sm">
            <h2 className="text-ink text-lg font-bold">Built from public data</h2>
            <p className="text-muted mt-2 text-sm">
              No claims data required. If your browser blocks the embedded scorecard, open the same
              secure experience in a new tab.
            </p>
            <a
              href={url}
              className="bg-spruce hover:bg-spruce-dark mt-5 inline-block rounded-lg px-5 py-3 text-sm font-semibold text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open scorecard in a new tab
            </a>
          </aside>
        </div>

        <div className="border-line bg-white overflow-hidden rounded-2xl border shadow-sm">
          <iframe
            className="h-[1200px] w-full md:h-[1320px]"
            src={url}
            title="Grounded Health public Form 5500 scorecard"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
