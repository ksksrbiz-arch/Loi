import Link from "next/link";

interface CTABannerProps {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
  /** Optional secondary link / phone CTA. */
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  heading,
  subtext,
  buttonText,
  buttonHref,
  secondaryText,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section
      className="relative py-24 px-6 text-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1560993674-2a20a6b38c99?auto=format&fit=crop&w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-darkforest/90 via-forest/80 to-darkforest/90" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Decorative wheat-colored glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-wheat/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 text-shadow-lg">
          {heading}
        </h2>
        <p className="text-gray-200 text-lg mb-10 max-w-xl mx-auto">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={buttonHref}
            className="inline-block bg-wheat text-darkforest px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-wheat shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
          >
            {buttonText} →
          </Link>
          {secondaryText && secondaryHref && (
            <a
              href={secondaryHref}
              className="text-white/85 hover:text-wheat transition-colors font-semibold text-sm flex items-center gap-2"
            >
              {secondaryText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
