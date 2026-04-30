"use client";

import AnimateIn from "./AnimateIn";

interface Reason {
  title: string;
  body: string;
  icon: string;
  vsPlane: string;
  vsGround: string;
}

const REASONS: Reason[] = [
  {
    title: "Spray exactly where it matters",
    icon: "🎯",
    body: "Variable-rate prescriptions, zone-by-zone passes, and on-the-fly spot treatment. We treat the 8 acres that need attention — not the whole 80.",
    vsPlane: "Planes can't easily skip a zone or change rate mid-pass.",
    vsGround: "Ground rigs are limited to whatever the boom width covers.",
  },
  {
    title: "Fly when others can't",
    icon: "🌧️",
    body: "Saturated soils, steep grass-seed hillsides, hop yards, blueberry fields, vineyards, riparian buffers — drones reach what wheels can't roll on and what wings can't fly low enough for.",
    vsPlane: "Fixed-wing needs open, level ground and a clean approach.",
    vsGround: "Tractors and rigs leave deep ruts in wet Oregon ground.",
  },
  {
    title: "Less product, less waste",
    icon: "💧",
    body: "Ultra-low-volume spraying with rotor-driven canopy penetration means you put product on the leaf — not on the soil, the road, or your neighbor's field.",
    vsPlane: "Higher altitude and airspeed increase off-target drift.",
    vsGround: "Boom rigs over-apply at headlands and overlap zones.",
  },
  {
    title: "No wheel tracks, no compaction",
    icon: "🌱",
    body: "Every ground pass costs you yield — wheel tracks, compaction, and broken stands. Drone application leaves nothing behind but the application itself.",
    vsPlane: "Tied across both — neither touches the field.",
    vsGround: "Studies attribute 3–7% yield loss to ground rig traffic.",
  },
  {
    title: "Show up the same day",
    icon: "⚡",
    body: "We can be on-site, set up, calibrated, and flying within an hour. No airstrip, no ferry fees, no scheduling around an aircraft 90 miles away.",
    vsPlane: "Plane operations need an airstrip and a ferry leg.",
    vsGround: "Hauling a sprayer + tender takes hours per move.",
  },
  {
    title: "Receipts on every pass",
    icon: "📊",
    body: "Every flight produces a coverage map, application log, and GPS telemetry. Compliance, insurance, and next-season planning all run on the same data.",
    vsPlane: "Plane logs are typically a basic GPS strip.",
    vsGround: "Most ground rig data lives on a single monitor screen.",
  },
];

export default function WhyDrone() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="absolute -top-40 -left-32 w-[420px] h-[420px] bg-forest/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-[420px] h-[420px] bg-wheat/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-14">
            <p className="text-forest font-semibold uppercase tracking-widest text-sm mb-3">
              Why a drone, and why now
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-darkforest">
              Six reasons drones beat the alternative
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just sell flight time. We sell the difference
              between a perfect pass and a wasted load.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <AnimateIn key={r.title} delay={i * 70} variant="up">
              <div className="group relative h-full rounded-2xl border border-gray-100 bg-white shadow-card hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Top stripe */}
                <div className="h-1.5 bg-gradient-to-r from-forest via-wheat to-forest" />
                <div className="p-7 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-forest/10 text-2xl flex items-center justify-center group-hover:bg-forest group-hover:scale-105 transition-all duration-300">
                      <span className="group-hover:[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.5))]">
                        {r.icon}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-darkforest leading-tight">
                      {r.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {r.body}
                  </p>
                  <div className="mt-auto pt-5 border-t border-dashed border-gray-200 space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded bg-amber-100 text-amber-700 font-bold">
                        ✈
                      </span>
                      <span className="text-gray-500">
                        <span className="font-semibold text-gray-700">vs. plane:</span>{" "}
                        {r.vsPlane}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded bg-rose-100 text-rose-700 font-bold">
                        🚜
                      </span>
                      <span className="text-gray-500">
                        <span className="font-semibold text-gray-700">vs. ground:</span>{" "}
                        {r.vsGround}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
