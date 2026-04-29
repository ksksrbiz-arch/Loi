"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-darkforest text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-wheat transition-colors">
          Oregon Aerial Services
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/services" className="hover:text-wheat transition-colors">
            Services
          </Link>
          <Link
            href="/loi"
            className="bg-wheat text-darkforest px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors"
          >
            Get a Quote
          </Link>
          <span className="text-gray-300 text-sm">📞 (503) 000-0000</span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-darkforest border-t border-green-900 px-6 pb-4 flex flex-col gap-4">
          <Link href="/services" className="hover:text-wheat transition-colors" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/loi" className="hover:text-wheat transition-colors" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </Link>
          <span className="text-gray-300 text-sm">📞 (503) 000-0000</span>
        </div>
      )}
    </nav>
  );
}
