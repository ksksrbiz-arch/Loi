"use client";

import { useEffect, useState } from "react";

/**
 * Brief intro overlay that fades out once the page is interactive.
 * Lives at the root layout so every route gets it on first paint.
 */
export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Respect already-loaded state (router transitions)
    const ready = document.readyState === "complete";
    const t = window.setTimeout(() => setHidden(true), ready ? 200 : 600);
    const handle = () => setHidden(true);
    window.addEventListener("load", handle, { once: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", handle);
    };
  }, []);

  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setRemoved(true), 700);
    return () => window.clearTimeout(t);
  }, [hidden]);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-darkforest transition-opacity duration-700 ease-out ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative">
        {/* Pulsing rings */}
        <span className="absolute inset-0 rounded-full bg-wheat/30 animate-pulse-ring" />
        <span
          className="absolute inset-0 rounded-full bg-wheat/20 animate-pulse-ring"
          style={{ animationDelay: "0.6s" }}
        />

        {/* Drone glyph */}
        <div className="relative w-24 h-24 rounded-full bg-darkforest border border-wheat/40 flex items-center justify-center shadow-glow">
          <DroneIcon className="w-12 h-12 text-wheat" />
        </div>
      </div>

      <p className="absolute bottom-16 left-1/2 -translate-x-1/2 text-wheat/70 text-xs uppercase tracking-[0.4em] font-semibold">
        Spinning up rotors…
      </p>
    </div>
  );
}

function DroneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rotors */}
      <circle
        cx="14"
        cy="14"
        r="7"
        stroke="currentColor"
        strokeWidth="1.5"
        className="origin-center animate-blade-spin"
        style={{ transformBox: "fill-box", transformOrigin: "14px 14px" }}
      />
      <circle
        cx="50"
        cy="14"
        r="7"
        stroke="currentColor"
        strokeWidth="1.5"
        className="origin-center animate-blade-spin"
        style={{ transformBox: "fill-box", transformOrigin: "50px 14px" }}
      />
      <circle
        cx="14"
        cy="50"
        r="7"
        stroke="currentColor"
        strokeWidth="1.5"
        className="origin-center animate-blade-spin"
        style={{ transformBox: "fill-box", transformOrigin: "14px 50px" }}
      />
      <circle
        cx="50"
        cy="50"
        r="7"
        stroke="currentColor"
        strokeWidth="1.5"
        className="origin-center animate-blade-spin"
        style={{ transformBox: "fill-box", transformOrigin: "50px 50px" }}
      />
      {/* Arms */}
      <path
        d="M20 20 L28 28 M44 20 L36 28 M20 44 L28 36 M44 44 L36 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Body */}
      <rect
        x="24"
        y="24"
        width="16"
        height="16"
        rx="3"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}
