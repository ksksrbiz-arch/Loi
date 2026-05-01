import Link from "next/link";
import DroneGlyph from "./DroneGlyph";

export default function Footer() {
  return (
    <footer className="relative bg-darkforest text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-forest/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="relative w-8 h-8 flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-wheat/15" />
              <DroneGlyph
                className="relative w-6 h-6 text-wheat"
                spinning={false}
              />
            </span>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              Oregon <span className="text-wheat">Aerial</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Modern drone agriculture for Oregon farms. Precision spraying,
            aerial seeding, and field intelligence — delivered with less drift,
            no compaction, and the data to prove every pass.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["FAA Part 107", "RTK-GPS", "Oregon-based"].map(
              (b) => (
                <span
                  key={b}
                  className="text-[11px] uppercase tracking-widest font-bold bg-white/5 border border-white/10 text-wheat px-2.5 py-1 rounded-full"
                >
                  {b}
                </span>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest text-wheat mb-4">
            Site
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#compare"
                className="hover:text-white transition-colors"
              >
                Drone vs. Plane vs. Ground
              </Link>
            </li>
            <li>
              <Link href="/loi" className="hover:text-white transition-colors">
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest text-wheat mb-4">
            Contact
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <p>📍 Portland, OR</p>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Operating across the Willamette Valley, Columbia Basin, Southern
              Oregon, and Eastern Oregon.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-green-900/60 text-center py-5 px-6 text-xs text-gray-500 space-y-1.5">
        <p>
          Oregon Aerial Services is a registered assumed business name of
          1Commerce LLC, an Oregon limited liability company.
        </p>
        <p>© 2026 1Commerce LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
