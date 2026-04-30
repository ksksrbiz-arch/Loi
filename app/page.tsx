import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";
import MetricsGrid from "@/components/MetricsGrid";
import ComparisonTable from "@/components/ComparisonTable";
import WhyDrone from "@/components/WhyDrone";
import UseCases from "@/components/UseCases";
import AnimateIn from "@/components/AnimateIn";
import DroneGlyph from "@/components/DroneGlyph";

const services = [
  {
    icon: "🌿",
    title: "Precision Drone Spraying",
    description:
      "Fertilizer, fungicide, and crop protection delivered with RTK-GPS swath spacing and ultra-low water volumes.",
    highlight: "Most popular",
  },
  {
    icon: "🌾",
    title: "Aerial Seeding",
    description:
      "Cover crops, grass seed, and pasture restoration spread evenly — even on slopes ground rigs can't reach.",
  },
  {
    icon: "🗺️",
    title: "Field Mapping & NDVI",
    description:
      "Georeferenced orthomosaics, elevation models, and crop-health imagery exported for your farm software.",
  },
  {
    icon: "🛰️",
    title: "Boltrak Flight Logs",
    description:
      "Every flight produces a coverage map and application telemetry — clean documentation for compliance and planning.",
  },
  {
    icon: "📸",
    title: "Aerial Photography",
    description:
      "High-resolution stills and 4K video for records, insurance, marketing, and agritourism.",
  },
  {
    icon: "🔬",
    title: "Scouting & Inspection",
    description:
      "Find disease, drainage, and stand-loss issues from above before they cost you a season.",
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />

        {/* Animated grid */}
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

        {/* Floating drone glyph */}
        <div className="absolute top-[18%] right-[8%] hidden md:block animate-drone-hover">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-wheat/20 blur-2xl" />
            <DroneGlyph className="relative w-24 h-24 text-wheat drop-shadow-lg" />
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 glass border border-white/25 text-wheat rounded-full px-5 py-2 text-sm font-semibold mb-8 animate-fade-in">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-wheat opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-wheat" />
            </span>
            <span>Precision drone agriculture for Oregon farms</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-shadow-lg animate-fade-up">
            The smarter way to
            <br />
            <span className="text-gradient-wheat">treat every acre</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            We fly modern agricultural drones so you stop trading yield for
            access. Less drift, no soil compaction, on-site within the hour —
            and the data to prove every pass.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/loi"
              className="bg-wheat text-darkforest px-9 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-wheat hover:-translate-y-0.5"
            >
              Get Your Free Quote →
            </Link>
            <Link
              href="#compare"
              className="bg-white/10 glass border-2 border-white/40 text-white px-9 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Drone vs. Plane vs. Ground
            </Link>
          </div>

          {/* Inline trust signals */}
          <div
            className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-wheat">✓</span> No Consultation Fee
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-wheat">✓</span> FAA Part 137 Certified
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-wheat">✓</span> RTK-GPS Precision
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-wheat">✓</span> 1-Acre Minimum
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

      {/* ── Pitch Strip ── */}
      <section className="bg-darkforest text-white py-12 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <AnimateIn variant="left">
            <div className="flex md:flex-col items-center md:items-start gap-3">
              <span className="font-display text-3xl md:text-4xl text-wheat font-bold shrink-0">01</span>
              <p className="text-sm md:text-base text-gray-200 leading-snug">
                <span className="font-bold text-white">No more &ldquo;not big enough.&rdquo;</span>{" "}
                Plane operators won&apos;t touch fields under 40 acres. We&apos;re
                set up for 1 acre and up.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn>
            <div className="flex md:flex-col items-center md:items-start gap-3">
              <span className="font-display text-3xl md:text-4xl text-wheat font-bold shrink-0">02</span>
              <p className="text-sm md:text-base text-gray-200 leading-snug">
                <span className="font-bold text-white">No more wheel tracks.</span>{" "}
                Wet ground? Steep ground? Trellised canopy? We fly over all of it.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn variant="right">
            <div className="flex md:flex-col items-center md:items-start gap-3">
              <span className="font-display text-3xl md:text-4xl text-wheat font-bold shrink-0">03</span>
              <p className="text-sm md:text-base text-gray-200 leading-snug">
                <span className="font-bold text-white">No more guesswork.</span>{" "}
                Every pass returns a coverage map, a flight log, and proof of
                application.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Big-number metrics ── */}
      <MetricsGrid />

      {/* ── Drone vs Plane vs Ground table ── */}
      <div id="compare">
        <ComparisonTable />
      </div>

      {/* ── Why drone wins ── */}
      <WhyDrone />

      {/* ── Trust bar ── */}
      <TrustBar />

      {/* ── Use cases ── */}
      <UseCases />

      {/* ── Services preview ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <p className="text-forest font-semibold uppercase tracking-widest text-sm mb-2">
                What we offer
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-darkforest">
                Full-service drone agriculture
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                FAA Part 137 certified pilots flying agricultural-class drones
                — purpose-built for Oregon&apos;s terrain, weather, and crops.
              </p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border-2 border-forest text-forest px-8 py-3 rounded-xl font-semibold hover:bg-forest hover:text-white transition-all"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-forest font-semibold uppercase tracking-widest text-sm mb-2">
                Simple process
              </p>
              <h2 className="font-display text-4xl font-bold text-darkforest">
                From inquiry to flight in days
              </h2>
            </div>
          </AnimateIn>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Connector line for desktop */}
            <div
              className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent"
              aria-hidden="true"
            />
            {[
              {
                step: "01",
                title: "Submit your LOI",
                desc: "A 2-minute Letter of Intent — no fees, no commitment, just your project details.",
              },
              {
                step: "02",
                title: "We scope the field",
                desc: "We review acreage, crop, and timing, then build a quote with a real flight plan.",
              },
              {
                step: "03",
                title: "We fly your fields",
                desc: "Once you approve, we mobilize on-site, fly the plan, and hand back full flight data.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.step} delay={i * 100}>
                <div className="relative text-center group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-full">
                  <div className="w-16 h-16 rounded-full bg-forest text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-forest group-hover:bg-wheat group-hover:text-darkforest transition-all duration-300">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-xl text-darkforest mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner
        heading="Ready to fly the smarter way?"
        subtext="Submit a Letter of Intent — no commitment, no consultation fee. We&apos;ll come back with a real flight plan."
        buttonText="Submit Your LOI"
        buttonHref="/loi"
        secondaryText="or call (503) 000-0000 →"
        secondaryHref="tel:5030000000"
      />
    </>
  );
}
