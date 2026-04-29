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
    <section className="bg-wheat py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-darkforest mb-4">
        {heading}
      </h2>
      <p className="text-darkforest text-lg mb-8 max-w-xl mx-auto">{subtext}</p>
      <Link
        href={buttonHref}
        className="bg-forest text-white px-8 py-3 rounded font-semibold hover:bg-darkforest transition-colors"
      >
        {buttonText}
      </Link>
    </section>
  );
}
