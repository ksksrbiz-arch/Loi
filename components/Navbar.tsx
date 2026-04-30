"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DroneGlyph from "./DroneGlyph";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-darkforest/95 shadow-xl backdrop-blur-md"
          : "bg-darkforest/80 glass"
      } text-white`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold hover:text-wheat transition-colors group"
        >
          <span className="relative w-8 h-8 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-wheat/15 group-hover:bg-wheat/30 transition-colors duration-300" />
            <DroneGlyph
              className="relative w-6 h-6 text-wheat"
              spinning={false}
            />
          </span>
          <span className="font-display tracking-tight">
            Oregon <span className="text-wheat">Aerial</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/services"
            className="text-gray-200 hover:text-wheat transition-colors font-medium relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wheat group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/#compare"
            className="text-gray-200 hover:text-wheat transition-colors font-medium relative group"
          >
            Why Drones
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wheat group-hover:w-full transition-all duration-300" />
          </Link>
          <a
            href="tel:5030000000"
            className="text-gray-300 text-sm hover:text-wheat transition-colors hidden lg:flex items-center gap-1.5"
          >
            📞 (503) 000-0000
          </a>
          <Link
            href="/loi"
            className="bg-wheat text-darkforest px-5 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-all shadow-lg hover:shadow-wheat hover:-translate-y-0.5"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-darkforest border-t border-green-900 px-6 pb-6 flex flex-col gap-4 animate-fade-down">
          <Link
            href="/services"
            className="text-gray-200 hover:text-wheat transition-colors py-1"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#compare"
            className="text-gray-200 hover:text-wheat transition-colors py-1"
            onClick={() => setMenuOpen(false)}
          >
            Why Drones
          </Link>
          <Link
            href="/loi"
            className="bg-wheat text-darkforest px-5 py-2.5 rounded-lg font-bold text-center hover:bg-yellow-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:5030000000"
            className="text-gray-300 text-sm hover:text-wheat transition-colors"
          >
            📞 (503) 000-0000
          </a>
        </div>
      )}
    </nav>
  );
}
