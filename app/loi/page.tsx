import type { Metadata } from "next";
import LOIForm from "@/components/LOIForm";

export const metadata: Metadata = {
  title: "Submit Your Letter of Intent | Oregon Aerial Services",
  description:
    "Submit a Letter of Intent for aerial agricultural services in Oregon. No consultation fee. No commitment. We'll follow up within 24 hours.",
};

export default function LOIPage() {
  return (
    <div className="flex min-h-[calc(100vh-68px)]">
      {/* ── Left: Photo panel (desktop only) ── */}
      <div
        className="hidden lg:flex lg:w-[45%] relative flex-col justify-end"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-darkforest/95 via-darkforest/30 to-transparent" />

        {/* Content at bottom of image */}
        <div className="relative z-10 p-12 text-white">
          <p className="text-wheat font-semibold uppercase tracking-widest text-xs mb-4">
            Oregon Aerial Services
          </p>
          <blockquote className="font-display text-2xl font-bold leading-snug mb-6 text-shadow">
            &ldquo;We fly so you don&apos;t have to — faster coverage, less
            compaction, better yields.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-wheat/20 flex items-center justify-center text-xl">
              ✈️
            </div>
            <div>
              <p className="font-semibold text-sm">Oregon Aerial Team</p>
              <p className="text-gray-300 text-xs">Serving all 36 Oregon counties</p>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-3 gap-4 text-center">
            {[
              { val: "100K+", lbl: "Acres Served" },
              { val: "24hr", lbl: "Response Time" },
              { val: "$0", lbl: "Consultation Fee" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-display text-xl font-bold text-wheat">
                  {s.val}
                </div>
                <div className="text-gray-300 text-xs mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right: Form panel ── */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        {/* Mobile hero (visible only on small screens) */}
        <div
          className="lg:hidden relative py-16 px-6 text-center text-white overflow-hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-darkforest/80" />
          <div className="relative z-10">
            <h1 className="font-display text-3xl font-bold mb-2">
              Submit Your Letter of Intent
            </h1>
            <p className="text-gray-200 text-sm">
              No consultation fee. No commitment. We&apos;ll follow up within 24
              hours.
            </p>
          </div>
        </div>

        {/* Form content */}
        <div className="max-w-xl mx-auto px-6 py-12">
          {/* Desktop heading */}
          <div className="hidden lg:block mb-8">
            <p className="text-forest font-semibold uppercase tracking-widest text-xs mb-2">
              Get Started Today
            </p>
            <h1 className="font-display text-4xl font-bold text-darkforest">
              Submit Your Letter of Intent
            </h1>
            <p className="text-gray-500 mt-3">
              No consultation fee. No commitment. We&apos;ll follow up within 24
              hours with a free estimate.
            </p>
          </div>

          <LOIForm />

          <p className="mt-6 text-xs text-gray-400 text-center leading-relaxed">
            By submitting this form you are expressing interest only. There is no
            charge, no contract, and no obligation. An Oregon Aerial Services
            representative will reach out to discuss your needs and provide a
            free estimate.
          </p>
        </div>
      </div>
    </div>
  );
}

