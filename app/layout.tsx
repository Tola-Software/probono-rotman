import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROTMAN - Roti Bakar & Terang Bulan | Paling Nagih di Bali",
  description:
    "Roti Bakar & Terang Bulan spesial dari ROTMAN. Dibuat fresh dengan resep tradisional, tekstur renyah luar lembut dalam. Buka setiap hari 16:00-23:30 di Jl. Karang Sari No.4 Padangsambian kaja, Denpasar, Bali.",
  keywords: "roti bakar, terang bulan, martabak manis, makanan jalanan, denpasar, bali, halal, makanan malam",
  icons: {
    icon: "/images/rotman-logo.png",
  },
  openGraph: {
    title: "ROTMAN - Roti Bakar & Terang Bulan | Paling Nagih di Bali",
    description: "Roti Bakar & Terang Bulan dengan cita rasa autentik yang nagih dan lezat.",
    url: "https://rotman.id",
    siteName: "ROTMAN",
    images: [
      {
        url: "/images/banner-rotman.jpeg",
        width: 1200,
        height: 630,
        alt: "ROTMAN - Roti Bakar & Terang Bulan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROTMAN - Roti Bakar & Terang Bulan | Paling Nagih di Bali",
    description: "Roti Bakar & Terang Bulan dengan cita rasa autentik yang nagih dan lezat.",
    images: ["/images/banner-rotman.jpeg"],
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
  description: "Roti Bakar & Terang Bulan spesial dari ROTMAN dengan cita rasa autentik yang nagih.",
  url: "https://rotman.id",
  telephone: "+62-813-3703-7980",
  servesCuisine: "Indonesian",
  hasMenu: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Karang Sari No.4 Padangsambian kaja",
    addressLocality: "Denpasar",
    addressRegion: "Bali",
    postalCode: "80114",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.6306967,
    longitude: 115.1881169,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "16:00",
    closes: "23:30",
  },
  image: "/images/banner-rotman.jpeg",
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
      </body>
    </html>
  );
}
