import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title:
    "Oregon Aerial Services | Precision Drone Agriculture for Oregon Farms",
  description:
    "Modern agricultural drones for Oregon farmers — precision spraying, aerial seeding, NDVI mapping, and full flight-log documentation. Less drift, no compaction, no consultation fee.",
  keywords:
    "Oregon drone services, agricultural drone Oregon, drone spraying Oregon, drone seeding Oregon, NDVI mapping Oregon, precision agriculture, aerial fertilizer drone Oregon",
  openGraph: {
    title: "Oregon Aerial Services — Precision Drone Agriculture",
    description:
      "Modern agricultural drones for Oregon farmers. Less drift, no compaction, full flight data on every pass.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1a3009" />
      </head>
      <body className="flex flex-col min-h-screen bg-[#fafaf7]">
        <PageLoader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
