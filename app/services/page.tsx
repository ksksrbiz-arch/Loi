import type { Metadata } from "next";
import Image from "next/image";
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
    image:
      "https://images.unsplash.com/photo-1625246333195-cbbb14e83d84?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Green crop field ready for aerial fertilizer application",
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
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Aerial view of precisely tracked crop rows",
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
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Lush green pasture and rolling hills in Oregon",
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
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Aerial view of farm fields showing geometric patterns",
    detail: [
      "Our field mapping service delivers GPS-accurate aerial imagery and boundary data for your entire property.",
      "Deliverables include georeferenced orthomosaics, elevation models, and exportable shapefiles compatible with common farm management software.",
      "Field maps are invaluable for planning irrigation layouts, documenting drainage issues, and tracking crop health over time.",
      "Mapping flights are planned around your operational needs, with deliverables prepared for practical on-farm use.",
    ],
    reversed: true,
  },
  {
    icon: "📸",
    title: "Aerial Photography",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Beautiful aerial farm photography showcasing Oregon farmland",
    detail: [
      "High-resolution aerial photography gives you a bird&apos;s-eye view of your farm for records, marketing, or insurance documentation.",
      "We capture high-resolution still images and video footage for records, planning, insurance, and marketing needs.",
      "Photos are useful for monitoring crop progress, identifying problem areas, and building marketing materials for farm sales or agritourism.",
      "All imagery is delivered digitally with full resolution files and a web-optimized gallery link.",
    ],
    reversed: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative py-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-darkforest/80 via-darkforest/60 to-darkforest/80" />
        <div className="relative z-10">
          <p className="text-wheat font-semibold uppercase tracking-widest text-sm mb-3">
            What We Do
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5 text-shadow-lg">
            Our Aerial Services
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            From precision fertilizer application to detailed field mapping, we
            provide the full range of aerial agricultural services Oregon farmers
            need.
          </p>
        </div>
      </section>

      {/* ── Service Sections ── */}
      {services.map((svc, idx) => (
        <section
          key={svc.title}
          className={`py-20 px-6 ${svc.reversed ? "bg-gray-50" : "bg-white"}`}
        >
          <div
            className={`max-w-5xl mx-auto flex flex-col ${
              svc.reversed ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12`}
          >
            {/* Image */}
            <div className="w-full md:w-2/5 shrink-0 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={svc.image}
                  alt={svc.imageAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={idx === 0}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="text-4xl mb-3">{svc.icon}</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-darkforest mb-5">
                {svc.title}
              </h2>
              <div className="space-y-3">
                {svc.detail.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <Link
                href="/loi"
                className="inline-block mt-7 bg-forest text-white px-7 py-3 rounded-xl font-bold hover:bg-darkforest transition-all shadow-lg hover:-translate-y-0.5"
              >
                Get a Quote for This Service →
              </Link>
            </div>
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
