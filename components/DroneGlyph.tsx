"use client";

interface DroneGlyphProps {
  className?: string;
  spinning?: boolean;
}

/**
 * Inline SVG drone with optional spinning rotors.
 * Pure SVG so it renders at any size with no extra request.
 */
export default function DroneGlyph({
  className = "",
  spinning = true,
}: DroneGlyphProps) {
  const blade = spinning ? "animate-blade-spin" : "";
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Agricultural drone"
    >
      {/* Rotors */}
      <g stroke="currentColor" strokeWidth="1.5">
        <circle
          cx="14"
          cy="14"
          r="7"
          className={blade}
          style={{ transformBox: "fill-box", transformOrigin: "14px 14px" }}
        />
        <circle
          cx="50"
          cy="14"
          r="7"
          className={blade}
          style={{ transformBox: "fill-box", transformOrigin: "50px 14px" }}
        />
        <circle
          cx="14"
          cy="50"
          r="7"
          className={blade}
          style={{ transformBox: "fill-box", transformOrigin: "14px 50px" }}
        />
        <circle
          cx="50"
          cy="50"
          r="7"
          className={blade}
          style={{ transformBox: "fill-box", transformOrigin: "50px 50px" }}
        />
      </g>
      {/* Arms */}
      <path
        d="M20 20 L28 28 M44 20 L36 28 M20 44 L28 36 M44 44 L36 36"
        stroke="currentColor"
        strokeWidth="2.2"
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
        opacity="0.9"
      />
      {/* Status light */}
      <circle cx="32" cy="32" r="1.6" fill="#1a3009" />
    </svg>
  );
}
