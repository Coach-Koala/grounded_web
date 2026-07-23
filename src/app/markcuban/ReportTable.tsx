"use client";

import { useMemo, useState } from "react";
import { ROWS, type Row } from "./data";

type SortKey = "name" | "emp" | "total" | "pe";

const COLUMNS: { key: SortKey; label: string; numeric: boolean }[] = [
  { key: "name", label: "Employer", numeric: false },
  { key: "emp", label: "Employees", numeric: true },
  { key: "total", label: "At stake", numeric: true },
  { key: "pe", label: "$/employee", numeric: true },
];

function money(n: number): string {
  return n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : `$${n.toLocaleString()}`;
}

function flags(r: Row): string[] {
  const out: string[] = [];
  if (r.note) out.push(r.note);
  if (r.aka) out.push(`Now ${r.aka.split(" (")[0]}`);
  return out;
}

export default function ReportTable() {
  const [sortKey, setSortKey] = useState<SortKey>("total");
  const [dir, setDir] = useState<1 | -1>(-1);

  const rows = useMemo(() => {
    return [...ROWS].sort((a, b) => {
      const x = a[sortKey];
      const y = b[sortKey];
      return typeof x === "string" && typeof y === "string"
        ? dir * x.localeCompare(y)
        : dir * (Number(x) - Number(y));
    });
  }, [sortKey, dir]);

  function toggle(key: SortKey) {
    if (key === sortKey) setDir((d) => (d === 1 ? -1 : 1));
    else {
      setSortKey(key);
      setDir(key === "name" ? 1 : -1);
    }
  }

  return (
    <div className="tablewrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            {COLUMNS.map((c) => {
              const active = c.key === sortKey;
              return (
                <th
                  key={c.key}
                  className={c.numeric ? "sortable num" : "sortable"}
                  aria-sort={active ? (dir === 1 ? "ascending" : "descending") : undefined}
                  tabIndex={0}
                  onClick={() => toggle(c.key)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(c.key);
                    }
                  }}
                >
                  {c.label}
                  <span className="arw">{active && dir === -1 ? "▼" : "▲"}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.ein + r.rank}>
              <td className="rk">{r.rank}</td>
              <td className="nm">
                <span className={`rail s-${r.dom}`} />
                {r.name}
                <span className="rowmeta">
                  {r.city}, {r.state} · EIN {r.ein}
                </span>
                {flags(r).map((f) => (
                  <span className="flag" key={f}>
                    {f}
                  </span>
                ))}
              </td>
              <td className="num">{r.emp.toLocaleString()}</td>
              <td className="num tot">{money(r.total)}</td>
              <td className="num">${r.pe.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
