"use client";

import { useState } from "react";

const PER_EMP_M = 0.017; // ~$17k blended annual plan cost, in $millions
const EMP_MIN = 300;
const EMP_MAX = 15000;
const EMP_STEP = 100;
const EMP_DEFAULT = 1500;
const PLOT_H = 260;

const PARTIES = [
  { name: "Providers", rate: 0.8 },
  { name: "Stop-loss", rate: 0.07 },
  { name: "TPA", rate: 0.06 },
  { name: "Broker", rate: 0.04 },
  { name: "Vendors", rate: 0.03 },
] as const;

function money(m: number): string {
  if (m >= 1) {
    const v = m >= 10 ? String(Math.round(m)) : m.toFixed(1).replace(/\.0$/, "");
    return `$${v}M`;
  }
  return `$${Math.round(m * 100) * 10}k`;
}

function niceStep(range: number): number {
  const raw = range / 4;
  const exp = Math.pow(10, Math.floor(Math.log10(raw)));
  const f = raw / exp;
  const nf = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
  return nf * exp;
}

export default function WhoProfitsChart() {
  const [emp, setEmp] = useState(EMP_DEFAULT);

  const spend = emp * PER_EMP_M;
  const maxBar = spend * PARTIES[0].rate;
  const step = niceStep(maxBar);
  const ymax = Math.max(step, Math.ceil(maxBar / step) * step);

  const ticks: number[] = [];
  for (let v = 0; v <= ymax + 1e-6; v += step) ticks.push(v);

  return (
    <div className="border-sage/40 mt-10 rounded-lg border bg-white p-6 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-ink/60 text-sm">Total annual plan cost</p>
          <p className="text-ink text-4xl font-bold tracking-tight">{money(spend)}</p>
        </div>
        <p className="text-ink/50 text-right text-xs leading-relaxed">
          self-insured employer
          <br />
          grows with headcount
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <label htmlFor="who-emp" className="text-ink/70 text-sm">
          Covered employees
        </label>
        <input
          id="who-emp"
          type="range"
          min={EMP_MIN}
          max={EMP_MAX}
          step={EMP_STEP}
          value={emp}
          onChange={(e) => setEmp(Number(e.target.value))}
          aria-label="Covered employees"
          className="accent-amber h-1 flex-1 cursor-pointer"
        />
        <span className="text-ink w-20 text-lg font-bold">{emp.toLocaleString()}</span>
      </div>

      <div className="mt-6 flex">
        <div className="relative w-12 flex-none" style={{ height: PLOT_H }} aria-hidden="true">
          {ticks.map((v) => (
            <span
              key={v}
              className="text-ink/40 absolute right-2 -translate-y-1/2 text-[11px]"
              style={{ top: `${(1 - v / ymax) * 100}%` }}
            >
              {money(v)}
            </span>
          ))}
        </div>
        <div className="min-w-0 flex-1">
          <div className="relative" style={{ height: PLOT_H }}>
            <div className="absolute inset-0" aria-hidden="true">
              {ticks.map((v) => (
                <div
                  key={v}
                  className="bg-sage/30 absolute right-0 left-0 h-px"
                  style={{ top: `${(1 - v / ymax) * 100}%` }}
                />
              ))}
            </div>
            <div
              className="absolute inset-0 flex items-end gap-2.5"
              role="img"
              aria-label="Annual revenue by party, growing with headcount"
            >
              {PARTIES.map((p) => {
                const rev = spend * p.rate;
                const h = Math.max(3, Math.round((rev / ymax) * PLOT_H));
                return (
                  <div
                    key={p.name}
                    className="flex h-full flex-1 flex-col items-center justify-end"
                  >
                    <span className="text-amber mb-1 text-[11px] font-semibold whitespace-nowrap">
                      {money(rev)}
                    </span>
                    <div className="bg-amber w-full max-w-[64px] rounded-t" style={{ height: h }} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-2 flex gap-2.5">
            {PARTIES.map((p) => (
              <div key={p.name} className="text-ink/70 flex-1 text-center text-[11px]">
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-ink/50 mt-6 text-xs leading-relaxed">
        Revenue = covered employees × ~$17k blended plan cost (
        <a
          href="https://www.kff.org/health-costs/2025-employer-health-benefits-survey/"
          target="_blank"
          rel="noopener"
          className="text-spruce underline"
        >
          KFF 2025
        </a>
        ) × each party&apos;s share of the plan dollar: providers &amp; Rx ~80%, stop-loss ~7% (
        <a
          href="https://www.aegisrisk.com/stop-loss-premium-survey"
          target="_blank"
          rel="noopener"
          className="text-spruce underline"
        >
          Aegis 2025
        </a>
        ), carrier &amp; TPA ~6%, broker ~4% (KFF 2025, range 2–7%), point solutions ~3% (est.).
        Provider and point-solution shares are estimates and vary by employer.
      </p>
    </div>
  );
}
