"use client";

import AnimateIn from "./AnimateIn";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
  highlight?: string;
}

const gradients = [
  "from-emerald-900 via-forest to-green-800",
  "from-forest via-green-800 to-emerald-900",
  "from-green-900 via-emerald-800 to-forest",
];

export default function ServiceCard({
  icon,
  title,
  description,
  index = 0,
  highlight,
}: ServiceCardProps) {
  return (
    <AnimateIn delay={index * 80} variant="up">
      <div
        className={`relative h-full bg-gradient-to-br ${
          gradients[index % gradients.length]
        } text-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
        {/* Animated grid */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        <div className="relative p-7 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="text-5xl group-hover:scale-110 transition-transform duration-300 inline-block">
              {icon}
            </div>
            {highlight && (
              <span className="text-[10px] font-bold uppercase tracking-widest bg-wheat/20 text-wheat border border-wheat/30 rounded-full px-2.5 py-1">
                {highlight}
              </span>
            )}
          </div>
          <h3 className="font-display font-bold text-xl mb-3 text-white">
            {title}
          </h3>
          <p className="text-green-100 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-wheat/60 to-wheat/20 group-hover:from-wheat group-hover:to-wheat/40 transition-all duration-300" />
      </div>
    </AnimateIn>
  );
}
