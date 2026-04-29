import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Oregon Aerial Services",
  description: "We received your Letter of Intent. We'll follow up within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <section className="flex flex-col items-center justify-center py-32 px-6 text-center bg-gray-50 flex-grow">
      <div className="text-8xl mb-6">✅</div>
      <h1 className="text-4xl font-bold text-forest mb-4">
        We Got Your LOI!
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-4">
        Thank you for submitting your Letter of Intent. Our team will review
        your request and follow up within 24 hours.
      </p>
      <p className="text-gray-600 max-w-xl mb-8">
        There is no consultation fee and no obligation — we&apos;re simply here
        to answer your questions and put together a free estimate for your
        operation.
      </p>
      <Link
        href="/"
        className="bg-forest text-white px-8 py-3 rounded font-semibold hover:bg-darkforest transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
}
