import type { Metadata } from "next";
import ReportTable from "./ReportTable";
import "./report.css";

// Unlisted landing page: reachable only by direct URL. Deliberately absent
// from the header nav, the footer, and sitemap.ts, and marked noindex so it
// does not surface in search.
export const metadata: Metadata = {
  title: "The 100 employers overpaying the most",
  description:
    "Every U.S. employer that files a Form 5500, scored against carrier price positions from the federal Transparency-in-Coverage files, ranked worst-first.",
  robots: { index: false, follow: false },
  alternates: { canonical: undefined },
};

export default function MarkCubanPage() {
  return (
    <div className="mcr">
      <div className="masthead">
        <div className="wrap">
          <p className="eyebrow">
            Employer health-plan cost analysis · Form 5500 × federal price transparency
          </p>
          <h1 className="serif">
            The 100 employers <em>overpaying the most</em> on their health plans
          </h1>
          <p className="dek">
            Every U.S. employer that files a Form 5500, scored against carrier price positions drawn
            from the federal Transparency&#8209;in&#8209;Coverage files, then ranked
            worst&#8209;first.
          </p>
        </div>
      </div>

      <section className="wrap">
        <div className="caution">
          <h2 className="serif">Notes before reviewing the list</h2>
          <p>
            Most of this money is one calculation:{" "}
            <span className="formula mono">
              what the plan spends × how far above market its carrier prices
            </span>
            . That multiple is <strong>per carrier, not per employer</strong> — every Cigna plan
            gets 1.45×, every Aetna plan 1.32×. So a row means{" "}
            <em>&ldquo;this company buys care through an expensive network,&rdquo;</em> not{" "}
            <em>&ldquo;we audited this company&rsquo;s claims.&rdquo;</em> That is why the same
            $/employee number repeats down the list.
          </p>
          <p>
            These are estimates off public filings. Not invoices, not accusations. Where the plan
            couldn&rsquo;t be tied to a carrier with confidence, the finding was thrown out rather
            than hedged — that killed 647 of 1,117 network findings and $1.3B off the headline
            number.
          </p>
        </div>
      </section>

      <section className="wrap">
        <h2 className="serif">Where the money sits</h2>
        <p className="sub">$563.8M across the 100, by finding type.</p>
        <div className="cbar">
          <div
            className="cbar-seg s-d_carrier"
            style={{ flex: 315798530 }}
            title="Network rate position: $315.8M"
          />
          <div
            className="cbar-seg s-d_chronic"
            style={{ flex: 176394687 }}
            title="Voluntary-benefit take: $176.4M"
          />
          <div
            className="cbar-seg s-d_broker"
            style={{ flex: 43089021 }}
            title="Broker compensation: $43.1M"
          />
          <div
            className="cbar-seg s-d_wage"
            style={{ flex: 28560572 }}
            title="Wage-relative burden: $28.6M"
          />
        </div>
        <ul className="ckey">
          <li>
            <span className="dot s-d_carrier" />
            <b>Network rate position</b>
            <span className="cnum">$315.8M</span>
          </li>
          <li>
            <span className="dot s-d_chronic" />
            <b>Voluntary-benefit take</b>
            <span className="cnum">$176.4M</span>
          </li>
          <li>
            <span className="dot s-d_broker" />
            <b>Broker compensation</b>
            <span className="cnum">$43.1M</span>
          </li>
          <li>
            <span className="dot s-d_wage" />
            <b>Wage-relative burden</b>
            <span className="cnum">$28.6M</span>
          </li>
        </ul>
      </section>

      <section className="wrap">
        <h2 className="serif">The list</h2>
        <p className="sub">
          Ranked by total dollars at stake. Click any column heading to re&#8209;sort —{" "}
          <strong>$/employee</strong> tells a different story than the raw total.
        </p>
        <ReportTable />
      </section>

      <section className="wrap narrow">
        <h2 className="serif">Methodology</h2>

        <h3>What is measured</h3>
        <ul className="plain">
          <li>
            <b>Network rate position</b> — estimated plan spend multiplied by how far the
            employer&rsquo;s carrier prices above market nationally, from the
            Transparency&#8209;in&#8209;Coverage in&#8209;network files. Carrier&#8209;level, as
            described above.
          </li>
          <li>
            <b>Voluntary&#8209;benefit take</b> — the share of voluntary&#8209;benefit premium
            retained rather than paid out in claims, across consecutive plan years.
          </li>
          <li>
            <b>Broker compensation</b> — commissions and fees disclosed on Schedule A, measured
            against sector benchmarks for comparable plans.
          </li>
          <li>
            <b>Wage&#8209;relative burden</b> — employee cost&#8209;sharing measured against the
            wage base of the workforce actually carrying it.
          </li>
        </ul>

        <h3>What was excluded, and why</h3>
        <ul className="plain">
          <li>Employers failing the scorecard publish gate.</li>
          <li>
            Network&#8209;rate findings whose carrier attribution is inferred rather than filed (
            <code>self_funded_fallback_schA</code>, <code>tic_mrf_index</code>) — kept only{" "}
            <code>insured_schA</code> and <code>self_funded_aso</code>.
          </li>
          <li>
            One entity that ranked inside the top 100 but is a Direct Filing Entity — a benefits
            trust filing on behalf of many employers, with no medical coverage of its own. It is not
            an employer, so it was removed and the list backfilled.
          </li>
        </ul>

        <h3>How to read a row</h3>
        <p>
          Grades come from the plan scorecard (0&#8211;100, banded by employer size), computed
          independently of the dollar figures. Employee counts are Form 5500 participants: enrolled
          employees plus retirees receiving benefits — not total headcount, which is why $/employee
          runs high for plans covering a subset of the workforce. Rows carrying a structural
          qualifier are flagged inline.
        </p>

        <h3>Sources</h3>
        <p>
          IRS/DOL Form 5500 with Schedules A, C and H (plan years through 2024); CMS
          Transparency&#8209;in&#8209;Coverage in&#8209;network rate files; Medicare fee schedules
          as the reference price. All inputs are public filings.
        </p>
      </section>

      <div className="colophon">
        <div className="wrap">
          <p>
            <strong>These are estimates from public filings, not audited findings.</strong> Dollar
            figures are modeled from disclosed premiums, fees and published rate files; they are not
            invoices, and appearing on this list is not evidence of wrongdoing by any employer,
            carrier or broker named. Employers whose filings are incomplete or ambiguous were
            excluded rather than estimated.
          </p>
        </div>
      </div>
    </div>
  );
}
