import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Oregon Aerial Services",
  description:
    "Your Letter of Intent has been received. We'll review it and follow up with next steps.",
};

export default function ThankYouPage() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-68px)] px-6 text-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-darkforest/85 via-darkforest/75 to-darkforest/95" />
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="relative z-10 text-white max-w-xl mx-auto py-16 animate-fade-up">
        {/* Success icon */}
        <div className="relative mx-auto mb-8 w-24 h-24">
          <span className="absolute inset-0 rounded-full bg-wheat/30 animate-pulse-ring" />
          <span
            className="absolute inset-0 rounded-full bg-wheat/20 animate-pulse-ring"
            style={{ animationDelay: "0.6s" }}
          />
          <div className="relative w-24 h-24 rounded-full bg-wheat flex items-center justify-center shadow-wheat shadow-2xl">
            <svg
              className="w-12 h-12 text-darkforest"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <p className="text-wheat font-semibold uppercase tracking-widest text-sm mb-3">
          Successfully Submitted
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-5 text-shadow-lg">
          We Got Your LOI!
        </h1>
        <p className="text-lg text-gray-200 mb-4 leading-relaxed">
          Thank you for submitting your Letter of Intent. Our team will review
          your request and follow up with the right next steps for your
          operation.
        </p>
        <p className="text-gray-300 text-sm mb-10 leading-relaxed">
          There is no consultation fee and no obligation — we&apos;re simply
          here to answer your questions and put together a free estimate.
        </p>

        {/* Stats reminder */}
        <div className="grid grid-cols-3 gap-4 mb-10 border-t border-white/20 pt-8">
          {[
            { val: "1 acre", lbl: "Minimum field" },
            { val: "0%", lbl: "Soil compaction" },
            { val: "±1 cm", lbl: "RTK accuracy" },
          ].map((s) => (
            <div key={s.lbl}>
              <div className="font-display text-2xl font-bold text-wheat">
                {s.val}
              </div>
              <div className="text-gray-300 text-xs mt-0.5">{s.lbl}</div>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block bg-wheat text-darkforest px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-wheat shadow-lg hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
