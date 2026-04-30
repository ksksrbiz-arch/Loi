"use client";

interface DroneGlyphProps {
  className?: string;
  spinning?: boolean;
}

const MOTORS = [
  { cx: 16, cy: 16 },
  { cx: 64, cy: 16 },
  { cx: 16, cy: 64 },
  { cx: 64, cy: 64 },
] as const;

function Propeller({ cx, cy, bladeClass }: { cx: number; cy: number; bladeClass: string }) {
  return (
    <g transform={`translate(${cx},${cy})`}>
      {/* Motor housing */}
      <circle r="9" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      {/* 3-blade propeller */}
      <g className={bladeClass} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <ellipse rx="8" ry="1.8" fill="currentColor" fillOpacity="0.75" />
        <ellipse rx="8" ry="1.8" transform="rotate(60)" fill="currentColor" fillOpacity="0.75" />
        <ellipse rx="8" ry="1.8" transform="rotate(120)" fill="currentColor" fillOpacity="0.75" />
      </g>
      {/* Hub */}
      <circle r="2.4" fill="currentColor" />
    </g>
  );
}

/**
 * Inline SVG agricultural drone with 3-blade propellers, detailed body,
 * camera gimbal, and landing gear. Pure SVG — renders crisp at any size.
 */
export default function DroneGlyph({
  className = "",
  spinning = true,
}: DroneGlyphProps) {
  const bladeClass = spinning ? "animate-blade-spin" : "";

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Agricultural drone"
    >
      {/* Arms */}
      <path
        d="M27 27 L17 17 M53 27 L63 17 M27 53 L17 63 M53 53 L63 63"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Motor housings + 3-blade propellers */}
      {MOTORS.map(({ cx, cy }) => (
        <Propeller key={`${cx}-${cy}`} cx={cx} cy={cy} bladeClass={bladeClass} />
      ))}

      {/* Main body — electronics housing */}
      <rect x="29" y="31" width="22" height="18" rx="4" fill="currentColor" fillOpacity="0.9" />

      {/* Body panel lines */}
      <line x1="40" y1="33" x2="40" y2="47" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round" />
      <line x1="31" y1="40" x2="49" y2="40" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round" />

      {/* Camera / sensor gimbal */}
      <ellipse cx="40" cy="51" rx="5" ry="3.5" fill="currentColor" fillOpacity="0.65" />
      <circle cx="40" cy="51" r="2" fill="currentColor" fillOpacity="0.35" />

      {/* Status LED */}
      <circle cx="40" cy="35" r="2" fill="#4ade80" fillOpacity="0.95" />

      {/* Landing gear struts */}
      <path d="M31 49 L29 57 M49 49 L51 57" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Landing skids */}
      <path d="M25 57 L33 57 M47 57 L55 57" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
