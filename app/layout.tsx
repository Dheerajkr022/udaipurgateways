import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Udaipur Gateway | Independent Travel Agency & Courier Assistance",
  description: "Plan your visit to Udaipur, Rajasthan with Udaipur Gateway. Comprehensive travel guides, heritage palace stays, sightseeing places, excursion planning, and reliable courier assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
