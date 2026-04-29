export default function TrustBar() {
  const items = [
    {
      icon: "🚫💲",
      label: "No Consultation Fee",
      sub: "Free quotes, always",
    },
    {
      icon: "🏛️",
      label: "Oregon-Based & Licensed",
      sub: "Local expertise you can trust",
    },
    {
      icon: "✈️",
      label: "FAA Compliant Operations",
      sub: "Fully certified pilots & aircraft",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-darkforest to-forest py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4 border border-white/10"
          >
            <div className="text-3xl shrink-0">{item.icon}</div>
            <div>
              <p className="font-bold text-white text-sm md:text-base">
                {item.label}
              </p>
              <p className="text-green-200 text-xs mt-0.5">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

