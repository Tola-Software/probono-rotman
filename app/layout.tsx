import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROTMAN - Roti Bakar & Terang Bulan | Bold flavors, late nights",
  description:
    "Street food vendor specializing in Roti Bakar and Terang Bulan. Made-to-order, smoky & fresh. Halal ingredients. Open Mon-Sun 6PM-12:30AM at Jl. Sunset Road 88, Kuta.",
  keywords: "roti bakar, terang bulan, martabak manis, street food, kuta, bali, halal, late night food",
  openGraph: {
    title: "ROTMAN - Roti Bakar & Terang Bulan",
    description: "Bold flavors, late nights. Made-to-order street food in Kuta.",
    url: "https://rotman.id",
    siteName: "ROTMAN",
    images: [
      {
        url: "/images/stall-hero.webp",
        width: 1200,
        height: 630,
        alt: "ROTMAN street food stall",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROTMAN - Roti Bakar & Terang Bulan",
    description: "Bold flavors, late nights. Made-to-order street food in Kuta.",
    images: ["/images/stall-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ROTMAN",
  description: "Street food vendor specializing in Roti Bakar and Terang Bulan",
  url: "https://rotman.id",
  telephone: "+62 812-3456-7890",
  servesCuisine: "Indonesian",
  hasMenu: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Sunset Road 88",
    addressLocality: "Kuta",
    addressRegion: "Bali",
    addressCountry: "ID",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "18:00",
    closes: "00:30",
  },
  priceRange: "IDR 8,000 - IDR 95,000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} bg-background text-text-primary antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
