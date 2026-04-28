export default function TrustBar() {
  const items = [
    "✅ No Consultation Fee",
    "✅ Oregon-Based & Licensed",
    "✅ FAA Compliant Operations",
  ];

  return (
    <section className="bg-wheat py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 text-center">
        {items.map((item) => (
          <span key={item} className="font-semibold text-darkforest text-lg">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
