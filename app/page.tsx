import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    icon: "🌿",
    title: "Aerial Fertilizer Application",
    description:
      "Precision aerial fertilizer spreading across your entire acreage, fast.",
  },
  {
    icon: "📡",
    title: "Boltrak Field Tracking",
    description:
      "Real-time field tracking and data logging for smarter farm decisions.",
  },
  {
    icon: "🌾",
    title: "Grass Seed Spreading",
    description:
      "Efficient aerial grass seed distribution for pastures and restoration projects.",
  },
  {
    icon: "🗺️",
    title: "Field Mapping",
    description:
      "Detailed aerial mapping of your property with GPS-accurate deliverables.",
  },
  {
    icon: "📸",
    title: "Aerial Photography",
    description:
      "High-resolution aerial photos of your farm for records, marketing, or insurance.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-darkforest text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Are You an Oregon Farmer?
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
          Do you or someone you know need aerial agricultural services? We fly so
          you don&apos;t have to.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-darkforest transition-colors"
          >
            See Our Services
          </Link>
          <Link
            href="/loi"
            className="bg-wheat text-darkforest px-8 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-forest mb-10">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Get Started?"
        subtext="Submit a Letter of Intent — no commitment, no consultation fee."
        buttonText="Submit Your LOI"
        buttonHref="/loi"
      />
    </>
  );
}
