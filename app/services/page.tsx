import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import LazyImage from "@/components/LazyImage";
import AnimateIn from "@/components/AnimateIn";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "Drone Services | Oregon Aerial Services",
  description:
    "Precision drone spraying, aerial seeding, NDVI mapping, flight log and coverage reports, and aerial photography for Oregon farmers. No consultation fee.",
};

const services = [
  {
    icon: "🌿",
    title: "Precision Drone Spraying",
    image:
      "https://images.unsplash.com/photo-1625246333195-cbbb14e83d84?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Green crop field benefiting from precision drone spraying",
    detail: [
      "We deliver fertilizer, fungicide, and crop-protection chemistries with ultra-low-volume drone passes — typically 1–2 gallons of water per acre versus 10–20 with a ground rig.",
      "RTK-GPS guidance gives us centimeter-level swath spacing, so there are no gaps and no double-coverage. Rotor downwash drives droplets onto the canopy instead of letting them blow off-target.",
      "Variable-rate prescriptions and zone-by-zone spot treatment are native — we treat the 8 acres that need attention, not the whole 80.",
    ],
    bullets: [
      "FAA Part 107 Pilot · Part 137 application pending for 2026 season",
      "Down to 1-acre minimums (no plane ferry fees)",
      "Up to ~40 ac/hr coverage with a fast-fill workflow",
    ],
    reversed: false,
  },
  {
    icon: "🌾",
    title: "Aerial Seeding & Cover Crops",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Lush green pasture and rolling hills in Oregon",
    detail: [
      "Drones are the fastest, lowest-impact way to seed pastures, hillsides, riparian buffers, and cover crops — including over standing crops where ground rigs would crush stands.",
      "We calibrate hoppers for ryegrass, fescue, clover, vetch, radish, and native Oregon mixes. You get even distribution at the rate you specify, even on slopes that would put a tractor on its side.",
      "Fly-on dates align with weather windows so seed isn't washed off before germination.",
    ],
    bullets: [
      "Slopes up to ~35° handled cleanly",
      "Inter-seeding into living cash crops",
      "Riparian and restoration zones welcome",
    ],
    reversed: true,
  },
  {
    icon: "🗺️",
    title: "Field Mapping & NDVI",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Aerial view of farm fields showing geometric patterns",
    detail: [
      "We capture georeferenced orthomosaics, elevation models, and multispectral NDVI imagery for crop-health diagnostics — all exportable as GeoTIFFs and shapefiles.",
      "Output is ready for John Deere Operations Center, Climate FieldView, Granular, and most farm-management software you already use.",
      "Mapping flights are scheduled around your operational needs, with deliverables built for practical on-farm decisions, not screenshots.",
    ],
    bullets: [
      "RGB, multispectral, and NDVI captures",
      "Stitched orthomosaics + DSM/DTM elevation",
      "Drainage, weed, and stand-loss diagnostics",
    ],
    reversed: false,
  },
  {
    icon: "🛰️",
    title: "Flight Log & Coverage Reports",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Aerial view of precisely tracked crop rows",
    detail: [
      "Every flight ships with real-time tracking and post-flight reports — coverage maps, application rates, and full GPS telemetry.",
      "This is the documentation insurance and compliance want, and it's also the data you'll actually use to plan next season.",
      "Pairs at no extra hardware cost with our spraying and seeding work.",
    ],
    bullets: [
      "Per-pass coverage and rate maps",
      "Full GPS flight log + telemetry export",
      "Compliance-ready documentation",
    ],
    reversed: true,
  },
  {
    icon: "🔬",
    title: "Scouting & Inspection",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Aerial farm scouting captures field detail at high resolution",
    detail: [
      "We fly fast scouting passes to find disease patches, drainage issues, irrigation failures, and stand loss — before the problem doubles in size.",
      "Output ranges from a quick photo report to a full multispectral diagnostic, depending on what you need.",
      "Most farms run scouting 2–4× per season; we can build a recurring schedule around your crop calendar.",
    ],
    bullets: [
      "Targeted fly-overs after weather events",
      "Disease, drainage, and irrigation issues",
      "Recurring season-long scouting plans",
    ],
    reversed: false,
  },
  {
    icon: "📸",
    title: "Aerial Photography & Video",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Beautiful aerial farm photography showcasing Oregon farmland",
    detail: [
      "High-resolution stills and 4K video for records, real-estate, insurance, and marketing — agritourism, vineyard sites, ranch listings, you name it.",
      "Delivered digitally with both full-resolution masters and a web-optimized gallery you can share.",
      "Often paired with a mapping or scouting flight, so you cover two needs in one mobilization.",
    ],
    bullets: [
      "20+ MP stills and 4K cinematic video",
      "Drone, slider, and orbit moves",
      "Web-ready exports + raw masters",
    ],
    reversed: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative py-20 md:py-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-darkforest/85 via-darkforest/60 to-darkforest/90" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative z-10 animate-fade-up">
          <p className="text-wheat font-semibold uppercase tracking-widest text-sm mb-3">
            What we do
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5 text-shadow-lg">
            Drone Services for Oregon Farms
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            From precision spraying to NDVI scouting — every service uses
            modern agricultural drones to deliver outcomes a plane or a
            ground rig can&apos;t match.
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
            className={`max-w-6xl mx-auto flex flex-col ${
              svc.reversed ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12`}
          >
            {/* Image */}
            <AnimateIn
              variant={svc.reversed ? "right" : "left"}
              className="w-full md:w-2/5 shrink-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card-lg group">
                <LazyImage
                  src={svc.image}
                  alt={svc.imageAlt}
                  width={900}
                  height={675}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={idx === 0}
                  rounded="rounded-2xl"
                  wrapperClassName="aspect-[4/3]"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-darkforest/90 backdrop-blur-md text-wheat px-3 py-2 rounded-lg border border-wheat/20 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-wheat animate-pulse" />
                  Drone-delivered
                </div>
              </div>
            </AnimateIn>

            {/* Content */}
            <AnimateIn
              variant={svc.reversed ? "left" : "right"}
              className="flex-1"
            >
              <div className="text-4xl mb-3">{svc.icon}</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-darkforest mb-5">
                {svc.title}
              </h2>
              <div className="space-y-3 mb-6">
                {svc.detail.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <ul className="space-y-2 mb-7">
                {svc.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm text-darkforest"
                  >
                    <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded bg-emerald-100 text-emerald-700 font-bold">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/loi"
                className="inline-block bg-forest text-white px-7 py-3 rounded-xl font-bold hover:bg-darkforest transition-all shadow-lg hover:-translate-y-0.5"
              >
                Get a Quote for This Service →
              </Link>
            </AnimateIn>
          </div>
        </section>
      ))}

      <ComparisonTable />

      <CTABanner
        heading="Ready to fly?"
        subtext="Submit a Letter of Intent — no commitment, no consultation fee."
        buttonText="Submit Your LOI"
        buttonHref="/loi"
      />
    </>
  );
}
