import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Schema from "@/components/Schema";


const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Ini harus match dengan --font-sans di CSS
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif", // Ini harus match dengan --font-serif di CSS
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Aethelia | Digital Sanctuary & Minimalist Web Architecture",
    template: "%s | Aethelia"
  },
  description: "Bhakti Pratama is a Digital Architect crafting high-performance, minimalist web experiences. Specializing in Next.js, premium aesthetics, and silent performance.",
  keywords: ["Digital Architect", "Minimalist Web Design", "Next.js Developer Bali", "Premium Portfolio", "Bhakti Pratama", "Aethelia Studio"],
  authors: [{ name: "Bhakti Pratama" }],
  creator: "Bhakti Pratama",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aethelia.biz.id/",
    siteName: "Aethelia",
    title: "Aethelia | Digital Sanctuary & Minimalist Web Architecture",
    description: "Crafting digital spaces that breathe. High-performance web architecture with a soul.",
    images: [
      {
        url: "/og-image.jpg", // Create a clean 1200x630 image
        width: 1200,
        height: 630,
        alt: "Aethelia Studio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethelia | Digital Architect",
    description: "Building the next generation of silent, high-performance web experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      
        <body className="antialiased font-sans">
          <Navbar />
          {children}
          <Schema />
        </body>
      
    </html>
  );
}
   