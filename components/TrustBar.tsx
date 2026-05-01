"use client";

import AnimateIn from "./AnimateIn";

export default function TrustBar() {
  const items = [
    {
      icon: "🛂",
      label: "FAA Part 107 Remote Pilot",
      sub: "Part 137 application pending for 2026 season",
    },
    {
      icon: "🛰️",
      label: "RTK-GPS Precision",
      sub: "Centimeter-level pass spacing",
    },
    {
      icon: "🏛️",
      label: "Oregon-Based",
      sub: "Local crews, local response",
    },
    {
      icon: "💰",
      label: "No Consultation Fee",
      sub: "Free quotes, always",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-darkforest via-forest to-darkforest py-12 px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <AnimateIn key={item.label} delay={i * 70} variant="up">
            <div className="flex items-center gap-2.5 sm:gap-4 bg-white/5 rounded-xl px-3 py-3 sm:px-5 sm:py-4 border border-white/10 hover:bg-white/10 hover:border-wheat/30 transition-all duration-300 h-full">
              <div className="text-2xl sm:text-3xl shrink-0">{item.icon}</div>
              <div className="min-w-0">
                <p className="font-bold text-white text-xs sm:text-sm md:text-base leading-tight">
                  {item.label}
                </p>
                <p className="text-green-200 text-[11px] sm:text-xs mt-0.5 sm:mt-1">{item.sub}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
