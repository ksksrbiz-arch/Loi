"use client";

import LazyImage from "./LazyImage";
import AnimateIn from "./AnimateIn";

interface UseCase {
  crop: string;
  title: string;
  problem: string;
  solution: string;
  image: string;
  alt: string;
}

const CASES: UseCase[] = [
  {
    crop: "Grass seed",
    title: "Steep Willamette hillsides",
    problem:
      "Tractors slip, planes overspread, and re-seeding washes downhill before it germinates.",
    solution:
      "Low-altitude drone passes calibrated for ryegrass, fescue, and clover — even 35° slopes get even coverage.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    alt: "Lush rolling hills typical of Willamette grass-seed fields",
  },
  {
    crop: "Hops & vineyards",
    title: "Trellised canopies",
    problem:
      "Booms can&apos;t reach above the wire and planes can&apos;t fly low enough to penetrate.",
    solution:
      "Drones fly the rows from above with downwash that drives droplets into the canopy — no rig in the row, no broken trellis.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80",
    alt: "Vineyard rows with trellised vines at sunset",
  },
  {
    crop: "Blueberries & cane fruit",
    title: "Wet-foot fields",
    problem:
      "Saturated rows mean ground rigs leave 4-inch ruts and planes can&apos;t hit narrow spray windows.",
    solution:
      "Drones launch from the headland and finish in a single calibrated pass — no soil compaction, no flagger crew needed.",
    image:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=900&q=80",
    alt: "Blueberry rows in the Pacific Northwest",
  },
  {
    crop: "Hazelnuts & orchards",
    title: "Tall canopies, narrow alleys",
    problem:
      "Air-blast sprayers shake the trees and planes drift onto neighbors. Coverage on the upper canopy is uneven.",
    solution:
      "Drones traverse the top of the canopy with overlapping precision swaths — every nut zone gets the rate it needs.",
    image:
      "https://images.unsplash.com/photo-1444858345567-fc7afae3f9b9?auto=format&fit=crop&w=900&q=80",
    alt: "Mature orchard rows in the Willamette Valley",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-14">
            <p className="text-forest font-semibold uppercase tracking-widest text-sm mb-3">
              Built for Oregon&apos;s crops
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-darkforest">
              Where a drone changes the equation
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              These are the fields where drones don&apos;t just compete — they
              are flat-out the right tool for the job.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASES.map((c, i) => (
            <AnimateIn
              key={c.title}
              delay={(i % 2) * 90}
              variant={i % 2 === 0 ? "left" : "right"}
            >
              <article className="group h-full rounded-2xl bg-white border border-gray-100 shadow-card hover:shadow-card-lg overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <LazyImage
                    src={c.image}
                    alt={c.alt}
                    width={900}
                    height={500}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    rounded="rounded-none"
                    wrapperClassName="aspect-[16/9]"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-darkforest/85 text-wheat px-3 py-1.5 rounded-full text-xs font-bold tracking-wide backdrop-blur-md border border-wheat/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-wheat animate-pulse" />
                      {c.crop}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold text-darkforest mb-4">
                    {c.title}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-md bg-rose-50 text-rose-600 font-bold text-xs">
                        !
                      </span>
                      <p className="text-gray-600 leading-relaxed">
                        <span className="font-semibold text-darkforest">
                          The problem:
                        </span>{" "}
                        {c.problem}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 font-bold text-xs">
                        ✓
                      </span>
                      <p className="text-gray-600 leading-relaxed">
                        <span className="font-semibold text-darkforest">
                          What we do:
                        </span>{" "}
                        {c.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
