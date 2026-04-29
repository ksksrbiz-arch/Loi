import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    icon: "🌿",
    title: "Aerial Fertilizer Application",
    description:
      "Precision aerial fertilizer spreading across your entire acreage in a fraction of the time ground equipment takes.",
  },
  {
    icon: "📡",
    title: "Boltrak Field Tracking",
    description:
      "Real-time field tracking and data logging with detailed coverage reports for smarter farm decisions.",
  },
  {
    icon: "🌾",
    title: "Grass Seed Spreading",
    description:
      "Efficient aerial grass seed distribution calibrated for optimal germination across pastures and restoration projects.",
  },
  {
    icon: "🗺️",
    title: "Field Mapping",
    description:
      "Aerial mapping with georeferenced orthomosaics and shapefiles prepared for practical farm planning.",
  },
  {
    icon: "📸",
    title: "Aerial Photography",
    description:
      "High-resolution aerial photos and video of your farm for records, insurance, and marketing.",
  },
];

const benefits = [
  {
    title: "Less Soil Compaction",
    description: "Cover fields from the air and keep heavy equipment out of sensitive ground conditions.",
  },
  {
    title: "Faster Field Coverage",
    description: "Handle large application and seeding needs efficiently when timing matters most.",
  },
  {
    title: "Sharper Crop Decisions",
    description: "Use mapping and tracking insights to spot issues earlier and plan the next move with confidence.",
  },
  {
    title: "Cleaner Documentation",
    description: "Keep organized imagery and flight records ready for planning, communication, and reporting.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-hero-overlay" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 glass border border-white/25 text-wheat rounded-full px-5 py-2 text-sm font-semibold mb-8 animate-fade-in">
            <span>✈️</span>
            <span>Aerial agricultural services for Oregon farms</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight text-shadow-lg animate-fade-up">
            Elevate Your
            <br />
            <span className="text-wheat">Farm&apos;s Potential</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.15s", opacity: 0 }}
          >
            Professional aerial agricultural services built for Oregon farmers.
            From precision fertilizer application to field mapping — we fly so
            you don&apos;t have to.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <Link
              href="/loi"
              className="bg-wheat text-darkforest px-9 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-wheat hover:-translate-y-0.5"
            >
              Get Your Free Quote →
            </Link>
            <Link
              href="/services"
              className="bg-white/10 glass border-2 border-white/40 text-white px-9 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Explore Services
            </Link>
          </div>

          {/* Inline trust signals */}
          <div
            className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300 animate-fade-in"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-wheat">✓</span> No Consultation Fee
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-wheat">✓</span> Oregon-Based &amp; Licensed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-wheat">✓</span> FAA Compliant
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-7 h-7 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ── Outcomes Strip ── */}
      <section className="bg-forest py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {benefits.map((benefit) => (
            <div key={benefit.title}>
              <div className="font-display text-2xl md:text-3xl font-bold text-wheat">
                {benefit.title}
              </div>
              <div className="text-green-200 text-sm mt-2 leading-relaxed">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-forest font-semibold uppercase tracking-widest text-sm mb-2">
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-darkforest">
              Full-Service Aerial Agriculture
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Every service is delivered by FAA-certified pilots using
              precision-guided aircraft — optimized for Oregon&apos;s terrain.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block border-2 border-forest text-forest px-8 py-3 rounded-xl font-semibold hover:bg-forest hover:text-white transition-all"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <TrustBar />

      {/* ── How It Works ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <p className="text-forest font-semibold uppercase tracking-widest text-sm mb-2">
            Simple Process
          </p>
          <h2 className="font-display text-4xl font-bold text-darkforest">
            Getting Started Is Easy
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Submit Your LOI",
              desc: "Fill out our quick Letter of Intent — no fees, no commitment, just your project details.",
            },
            {
              step: "02",
              title: "We Review Your Request",
              desc: "Our team reviews your project details and reaches out to discuss the right next step for your operation.",
            },
            {
              step: "03",
              title: "We Fly Your Fields",
              desc: "Once you approve the quote, we schedule the operation and get to work on your land.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-forest/10 text-forest font-display font-bold text-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-forest group-hover:text-white transition-all duration-300">
                {item.step}
              </div>
              <h3 className="font-bold text-lg text-darkforest mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner
        heading="Ready to Get Started?"
        subtext="Submit a Letter of Intent — no commitment, no consultation fee."
        buttonText="Submit Your LOI"
        buttonHref="/loi"
      />
    </>
  );
}
