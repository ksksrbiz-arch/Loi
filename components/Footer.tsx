import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkforest text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-wheat text-2xl">✈</span>
            <span className="font-display font-bold text-lg text-white">
              Oregon Aerial Services
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Professional aerial agricultural solutions for Oregon farmers.
            Precision application. Real results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest text-wheat mb-4">
            Quick Links
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
            <a
              href="tel:5030000000"
              className="hover:text-white transition-colors"
            >
              📞 (503) 000-0000
            </a>
            <p>📍 Portland, OR</p>
            <p className="text-xs text-gray-500 mt-2">
              Serving all 36 Oregon counties
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-900/50 text-center py-5 text-xs text-gray-500">
        © 2026 Oregon Aerial Services. All rights reserved. FAA Certified
        Operations.
      </div>
    </footer>
  );
}

