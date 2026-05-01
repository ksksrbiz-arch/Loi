"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  /** Decimal precision for formatted number (default 0). */
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Add thousand separators (default true). */
  separators?: boolean;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({
  end,
  decimals = 0,
  duration = 1600,
  prefix = "",
  suffix = "",
  className = "",
  separators = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  // Initialize at the target value so SSR / JS-disabled / pre-hydration users
  // see the real number, never a placeholder zero.
  const [value, setValue] = useState(end);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      if (reduceMotion) {
        setValue(end);
        return;
      }

      const t0 = performance.now();
      setValue(0);
      const tick = (now: number) => {
        const elapsed = now - t0;
        const t = Math.min(1, elapsed / duration);
        setValue(end * easeOutCubic(t));
        if (t < 1) requestAnimationFrame(tick);
        else setValue(end);
      };
      requestAnimationFrame(tick);
    };

    if (typeof window.IntersectionObserver === "undefined") {
      start();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [end, duration]);

  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: separators,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
