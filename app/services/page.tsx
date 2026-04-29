import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Services | Oregon Aerial Services",
  description:
    "Aerial fertilizer application, Boltrak field tracking, grass seed spreading, field mapping, and aerial photography for Oregon farmers.",
};

const services = [
  {
    icon: "🌿",
    title: "Aerial Fertilizer Application",
    detail: [
      "Our aerial fertilizer application service covers vast acreage in a fraction of the time it takes ground equipment.",
      "We use precision GPS-guided flight paths to ensure even distribution across your entire field, minimizing waste.",
      "Whether you need nitrogen, phosphate, or custom blends, our pilots work with your agronomist to deliver exactly what your crops need.",
      "Reduce soil compaction and protect your crop stands by keeping heavy machinery off the field.",
    ],
    reversed: false,
  },
  {
    icon: "📡",
    title: "Boltrak Field Tracking",
    detail: [
      "Boltrak integrates with our aircraft to provide real-time field tracking and data logging during every flight.",
      "After each operation you receive a detailed report showing coverage maps, application rates, and GPS flight logs.",
      "This data helps you make smarter decisions for future seasons and provides documentation for insurance or compliance purposes.",
      "Our Boltrak service pairs seamlessly with fertilizer application or seed spreading jobs at no extra hardware cost.",
    ],
    reversed: true,
  },
  {
    icon: "🌾",
    title: "Grass Seed Spreading",
    detail: [
      "Aerial grass seed spreading is the fastest and most efficient method for large pastures, hillsides, and riparian restoration zones.",
      "We calibrate our hoppers for precise seed-rate delivery so you get optimal germination without overseeding.",
      "Our pilots have experience with ryegrass, fescue, clover, and native Oregon grass mixes.",
      "Aerial spreading reaches terrain that is inaccessible or risky for ground equipment, making it ideal for steep or wet fields.",
    ],
    reversed: false,
  },
  {
    icon: "🗺️",
    title: "Field Mapping",
    detail: [
      "Our field mapping service delivers GPS-accurate aerial imagery and boundary data for your entire property.",
      "Deliverables include georeferenced orthomosaics, elevation models, and exportable shapefiles compatible with common farm management software.",
      "Field maps are invaluable for planning irrigation layouts, documenting drainage issues, and tracking crop health over time.",
      "Mapping flights are typically completed in a single day, with processed deliverables ready within 48 hours.",
    ],
    reversed: true,
  },
  {
    icon: "📸",
    title: "Aerial Photography",
    detail: [
      "High-resolution aerial photography gives you a bird&apos;s-eye view of your farm for records, marketing, or insurance documentation.",
      "We capture still images and video footage in 4K, giving you professional-quality visuals that showcase your operation.",
      "Photos are useful for monitoring crop progress, identifying problem areas, and building marketing materials for farm sales or agritourism.",
      "All imagery is delivered digitally with full resolution files and a web-optimized gallery link.",
    ],
    reversed: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-darkforest text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Aerial Services
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          From precision fertilizer application to detailed field mapping, we
          provide the full range of aerial agricultural services Oregon farmers
          need.
        </p>
      </section>

      {/* Service Sections */}
      {services.map((svc) => (
        <section
          key={svc.title}
          className={`py-16 px-6 ${svc.reversed ? "bg-gray-50" : "bg-white"}`}
        >
          <div
            className={`max-w-5xl mx-auto flex flex-col ${
              svc.reversed ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10`}
          >
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-3xl font-bold text-forest mb-4">
                {svc.title}
              </h2>
              {svc.detail.map((para, i) => (
                <p key={i} className="text-gray-600 mb-3">
                  {para}
                </p>
              ))}
              <Link
                href="/loi"
                className="inline-block mt-4 bg-forest text-white px-6 py-2 rounded font-semibold hover:bg-darkforest transition-colors"
              >
                Get a Quote for This Service →
              </Link>
            </div>
            <div className="text-8xl md:flex-none">{svc.icon}</div>
          </div>
        </section>
      ))}

      <CTABanner
        heading="Ready to Fly?"
        subtext="Submit a Letter of Intent — no commitment, no consultation fee."
        buttonText="Submit Your LOI"
        buttonHref="/loi"
      />
    </>
  );
}
