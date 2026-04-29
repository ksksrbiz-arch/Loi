import type { Metadata } from "next";
import LOIForm from "@/components/LOIForm";

export const metadata: Metadata = {
  title: "Submit Your Letter of Intent | Oregon Aerial Services",
  description:
    "Submit a Letter of Intent for aerial agricultural services in Oregon. No consultation fee. No commitment. We'll follow up within 24 hours.",
};

export default function LOIPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-darkforest text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Submit Your Letter of Intent
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          No consultation fee. No commitment. We&apos;ll follow up within 24
          hours.
        </p>
      </section>

      {/* Form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <LOIForm />
          <p className="mt-6 text-sm text-gray-500 text-center">
            By submitting this form you are expressing interest in our services
            only. There is no charge, no contract, and no obligation. An Oregon
            Aerial Services representative will reach out to discuss your needs
            and provide a free estimate.
          </p>
        </div>
      </section>
    </>
  );
}
