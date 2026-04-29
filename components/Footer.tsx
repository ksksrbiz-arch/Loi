import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkforest text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-wheat">About Us</h3>
          <p className="text-gray-300 text-sm">
            Oregon Aerial Services provides professional aerial agricultural
            solutions to farmers across Oregon.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-wheat">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/loi" className="hover:text-white transition-colors">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-wheat">Contact</h3>
          <p className="text-gray-300 text-sm">📞 (503) 000-0000</p>
          <p className="text-gray-300 text-sm mt-1">Portland, OR</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-900 text-center py-4 text-sm text-gray-400">
        © 2026 Oregon Aerial Services. All rights reserved.
      </div>
    </footer>
  );
}
