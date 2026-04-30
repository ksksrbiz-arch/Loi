"use client";

import AnimateIn from "./AnimateIn";

type Verdict = "best" | "good" | "limited" | "poor";

interface Row {
  label: string;
  drone: { value: string; verdict: Verdict };
  plane: { value: string; verdict: Verdict };
  ground: { value: string; verdict: Verdict };
}

const ROWS: Row[] = [
  {
    label: "Minimum field size",
    drone: { value: "1 acre", verdict: "best" },
    plane: { value: "40+ acres", verdict: "limited" },
    ground: { value: "Any size", verdict: "good" },
  },
  {
    label: "Soil compaction",
    drone: { value: "None", verdict: "best" },
    plane: { value: "None", verdict: "best" },
    ground: { value: "Significant", verdict: "poor" },
  },
  {
    label: "Crop damage from wheel tracks",
    drone: { value: "0%", verdict: "best" },
    plane: { value: "0%", verdict: "best" },
    ground: { value: "3 – 7%", verdict: "poor" },
  },
  {
    label: "Water used per acre",
    drone: { value: "1 – 2 gal", verdict: "best" },
    plane: { value: "5 – 10 gal", verdict: "good" },
    ground: { value: "10 – 20 gal", verdict: "limited" },
  },
  {
    label: "Spray drift",
    drone: { value: "Low (downwash forces droplets down)", verdict: "best" },
    plane: { value: "High at speed", verdict: "limited" },
    ground: { value: "Moderate", verdict: "good" },
  },
  {
    label: "Application precision",
    drone: { value: "RTK GPS, ±1 cm pass spacing", verdict: "best" },
    plane: { value: "GPS guidance, several feet", verdict: "good" },
    ground: { value: "Boom-width swaths", verdict: "good" },
  },
  {
    label: "Steep / wet / irregular terrain",
    drone: { value: "No problem", verdict: "best" },
    plane: { value: "Open fields only", verdict: "limited" },
    ground: { value: "Often inaccessible", verdict: "poor" },
  },
  {
    label: "Mobilization time",
    drone: { value: "30 – 45 minutes on-site", verdict: "best" },
    plane: { value: "Hours – days (ferry & strip)", verdict: "limited" },
    ground: { value: "Hours (rig prep & hauling)", verdict: "good" },
  },
  {
    label: "Spot treatment / variable rate",
    drone: { value: "Native — zone-by-zone", verdict: "best" },
    plane: { value: "Difficult", verdict: "limited" },
    ground: { value: "Limited by boom layout", verdict: "good" },
  },
  {
    label: "Coverage rate",
    drone: { value: "Up to 40 ac/hr (swarm)", verdict: "good" },
    plane: { value: "100+ ac/hr", verdict: "best" },
    ground: { value: "15 – 25 ac/hr", verdict: "limited" },
  },
  {
    label: "Documentation & flight log",
    drone: { value: "Per-flight maps + telemetry", verdict: "best" },
    plane: { value: "Basic GPS log", verdict: "good" },
    ground: { value: "Manual / monitor data", verdict: "good" },
  },
];

const verdictStyles: Record<
  Verdict,
  { bg: string; text: string; symbol: string; label: string }
> = {
  best: {
    bg: "bg-emerald-500/15 border border-emerald-400/30",
    text: "text-emerald-300",
    symbol: "★",
    label: "Excellent",
  },
  good: {
    bg: "bg-sky-500/15 border border-sky-400/30",
    text: "text-sky-300",
    symbol: "✓",
    label: "Capable",
  },
  limited: {
    bg: "bg-amber-500/15 border border-amber-400/30",
    text: "text-amber-300",
    symbol: "△",
    label: "Limited",
  },
  poor: {
    bg: "bg-rose-500/15 border border-rose-400/30",
    text: "text-rose-300",
    symbol: "✕",
    label: "Drawback",
  },
};

function Cell({
  value,
  verdict,
  highlight,
}: {
  value: string;
  verdict: Verdict;
  highlight?: boolean;
}) {
  const s = verdictStyles[verdict];
  return (
    <td
      className={`p-4 align-top text-sm ${
        highlight ? "bg-wheat/[0.04]" : ""
      }`}
    >
      <div className="flex items-start gap-2.5">
        <span
          className={`shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-md text-[11px] font-bold ${s.bg} ${s.text}`}
          aria-label={s.label}
          title={s.label}
        >
          {s.symbol}
        </span>
        <span className="text-gray-100 leading-snug">{value}</span>
      </div>
    </td>
  );
}

export default function ComparisonTable() {
  return (
    <section className="relative bg-darkforest text-white py-24 px-6 overflow-hidden">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] bg-wheat/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-forest/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-12">
            <p className="text-wheat font-semibold uppercase tracking-widest text-sm mb-3">
              Drone vs. Plane vs. Ground Sprayer
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
              The numbers behind every pass
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Side-by-side comparison of how a modern agricultural drone stacks
              up against fixed-wing aerial application and traditional ground
              rigs across the metrics that actually move yield and margin.
            </p>
          </div>
        </AnimateIn>

        {/* Legend */}
        <AnimateIn delay={120}>
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs">
            {(Object.keys(verdictStyles) as Verdict[]).map((k) => {
              const s = verdictStyles[k];
              return (
                <div
                  key={k}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1 ${s.bg} ${s.text}`}
                >
                  <span className="font-bold">{s.symbol}</span>
                  <span className="text-white/85">{s.label}</span>
                </div>
              );
            })}
          </div>
        </AnimateIn>

        <AnimateIn variant="scale">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-card-lg overflow-hidden">
            {/* Mobile scroll hint */}
            <p className="md:hidden text-center text-xs text-gray-400 py-2 border-b border-white/5">
              ← Scroll to compare →
            </p>
            <div className="overflow-x-auto nice-scroll">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="bg-white/[0.04] text-left text-xs uppercase tracking-widest text-gray-300">
                    <th className="p-4 font-semibold">Metric</th>
                    <th className="p-4 font-semibold">
                      <div className="flex items-center gap-2 text-wheat">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-wheat/15 border border-wheat/30">
                          🛸
                        </span>
                        Drone
                      </div>
                    </th>
                    <th className="p-4 font-semibold">
                      <div className="flex items-center gap-2 text-gray-200">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white/10 border border-white/15">
                          ✈️
                        </span>
                        Plane
                      </div>
                    </th>
                    <th className="p-4 font-semibold">
                      <div className="flex items-center gap-2 text-gray-200">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white/10 border border-white/15">
                          🚜
                        </span>
                        Ground rig
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {ROWS.map((row) => (
                    <tr
                      key={row.label}
                      className="hover:bg-white/[0.04] transition-colors"
                    >
                      <td className="p-4 align-top text-sm font-semibold text-white/85">
                        {row.label}
                      </td>
                      <Cell {...row.drone} highlight />
                      <Cell {...row.plane} />
                      <Cell {...row.ground} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={180}>
          <p className="text-center text-xs text-gray-400 mt-5 max-w-2xl mx-auto">
            Ranges reflect typical agricultural drone platforms (e.g. DJI Agras
            T40 / T50) compared with light fixed-wing application and standard
            ground sprayers. Actual performance depends on payload,
            chemistry, weather, and field layout.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
