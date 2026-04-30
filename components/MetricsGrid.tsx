"use client";

import AnimateIn from "./AnimateIn";
import CountUp from "./CountUp";

interface Metric {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  detail: string;
  /** Tailwind text-color for the number. */
  accent?: string;
}

const METRICS: Metric[] = [
  {
    end: 90,
    suffix: "%",
    label: "less water per acre",
    detail:
      "1–2 gallons/acre with ultra-low-volume drone spraying versus 10–20 gal with a ground rig.",
    accent: "text-wheat",
  },
  {
    end: 0,
    suffix: "",
    label: "soil compaction",
    detail:
      "Zero wheel passes means zero compaction in saturated soils — protect root zones during the wet season.",
    accent: "text-wheat",
  },
  {
    end: 30,
    suffix: "%",
    label: "less chemical drift",
    detail:
      "Rotor downwash drives droplets onto the canopy instead of carrying them off-target.",
    accent: "text-wheat",
  },
  {
    end: 1,
    prefix: "±",
    suffix: " cm",
    label: "RTK GPS accuracy",
    detail:
      "Centimeter-level swath spacing eliminates gaps and overlaps that waste product.",
    accent: "text-wheat",
  },
  {
    end: 40,
    suffix: " ac/hr",
    label: "coverage rate",
    detail:
      "A single Agras-class drone on a fast-fill workflow handles meaningful acreage in a window.",
    accent: "text-wheat",
  },
  {
    end: 1,
    suffix: " ac",
    label: "minimum field size",
    detail:
      "Skip the per-job ferry fees and minimum-acreage requirements that come with fixed-wing operators.",
    accent: "text-wheat",
  },
];

export default function MetricsGrid() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-14">
            <p className="text-forest font-semibold uppercase tracking-widest text-sm mb-3">
              The Drone Advantage, in numbers
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-darkforest">
              Why farms are switching to{" "}
              <span className="text-gradient-wheat">drone application</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Drones aren&apos;t just &ldquo;cool tech.&rdquo; They reshape the
              economics of every spray, seed, and scout pass. Here&apos;s what
              that looks like in the field.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {METRICS.map((m, i) => (
            <AnimateIn key={m.label} delay={i * 80} variant="up">
              <div className="group relative h-full rounded-2xl bg-white border border-gray-100 shadow-card hover:shadow-card-lg p-7 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Hover accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-wheat to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Subtle corner glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-wheat/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div
                    className={`font-display text-5xl md:text-6xl font-bold leading-none ${m.accent ?? "text-forest"}`}
                  >
                    <CountUp
                      end={m.end}
                      prefix={m.prefix}
                      suffix={m.suffix}
                      decimals={m.decimals ?? 0}
                    />
                  </div>
                  <div className="mt-3 text-darkforest font-bold text-base">
                    {m.label}
                  </div>
                  <div className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {m.detail}
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
