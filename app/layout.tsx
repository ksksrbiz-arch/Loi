import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Oregon Aerial Services | Aerial Agricultural Solutions",
  description:
    "Oregon farmers: aerial fertilizer application, grass seed spreading, field mapping, Boltrak tracking, and aerial photography. No consultation fee.",
  keywords:
    "Oregon aerial services, aerial fertilizer Oregon, drone mapping Oregon, grass seed spreading, farm aerial photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
