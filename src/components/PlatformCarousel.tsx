"use client";

import Image from "next/image";
import { useState } from "react";

const SLIDES = [
  {
    src: "/screenshots/platform-home.png",
    width: 1177,
    height: 969,
    alt: "Employer Home dashboard: actively managing plan quality frees up a $1.81M five-year reinvestment fund, with an actively-managed vs. autopilot trend chart",
    caption: "Your plan, actively managed — $1.81M freed to reinvest.",
  },
  {
    src: "/screenshots/platform-healthcare-savings.png",
    width: 1192,
    height: 1051,
    alt: "Healthcare Savings view: claims quality, care navigation, and population-health savings, with $304,300 booked year-to-date to reinvest",
    caption: "Three ways we find money — $304K already booked to reinvest.",
  },
  {
    src: "/screenshots/platform-claims-quality.png",
    width: 1299,
    height: 1148,
    alt: "Claims Quality view: $554,188 in billing errors found across 12,438 claims reviewed, a correction pipeline, and a breakdown by error type",
    caption: "$554,188 in billing errors found — 100% audit coverage, not sampling.",
  },
  {
    src: "/screenshots/platform-population-health.png",
    width: 1224,
    height: 1123,
    alt: "Population Health view: $162K addressable through targeted care navigation, top care-gap opportunities, and a ranked take-action queue",
    caption: "$162K in care-gap opportunity, ranked into a take-action queue.",
  },
  {
    src: "/screenshots/platform-spend-leverage.png",
    width: 1172,
    height: 979,
    alt: "Spend & Leverage view: $2.9M–$4.7M/yr you can return to the plan, fiduciary monitoring scores, and a renewal negotiation window",
    caption: "$2.9M–$4.7M/yr you can return to the plan, with sourced evidence.",
  },
] as const;

export default function PlatformCarousel() {
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;
  const go = (next: number) => setIndex(((next % count) + count) % count);

  const slide = SLIDES[index] ?? SLIDES[0];

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Product screens"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
      className="focus:outline-spruce/40 focus:outline-2 focus:outline-offset-4"
    >
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
            className="h-full w-full object-cover object-top"
            priority={index === 0}
          />
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous screen"
              className="border-sage/40 text-spruce hover:bg-white absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-white/90 shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next screen"
              className="border-sage/40 text-spruce hover:bg-white absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-white/90 shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-ink/70 text-sm">{slide.caption}</p>
        {count > 1 && (
          <div className="flex shrink-0 gap-0.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to screen ${i + 1}`}
                aria-current={i === index}
                className="group flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    i === index ? "bg-spruce" : "bg-sage/40 group-hover:bg-sage"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
