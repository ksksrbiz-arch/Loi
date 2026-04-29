import Link from "next/link";

interface CTABannerProps {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTABanner({
  heading,
  subtext,
  buttonText,
  buttonHref,
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkforest/85 via-forest/75 to-darkforest/85" />

      {/* Decorative wheat-colored glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-wheat/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 text-shadow-lg">
          {heading}
        </h2>
        <p className="text-gray-200 text-lg mb-10 max-w-xl mx-auto">{subtext}</p>
        <Link
          href={buttonHref}
          className="inline-block bg-wheat text-darkforest px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-wheat shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
        >
          {buttonText} →
        </Link>
      </div>
    </section>
  );
}

