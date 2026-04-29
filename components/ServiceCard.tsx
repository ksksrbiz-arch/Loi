interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
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
}: ServiceCardProps) {
  return (
    <div
      className={`relative bg-gradient-to-br ${
        gradients[index % gradients.length]
      } text-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.4),transparent_60%)]" />

      <div className="relative p-7">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
          {icon}
        </div>
        <h3 className="font-display font-bold text-xl mb-3 text-white">{title}</h3>
        <p className="text-green-100 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-wheat/60 to-wheat/20 group-hover:from-wheat group-hover:to-wheat/40 transition-all duration-300" />
    </div>
  );
}

