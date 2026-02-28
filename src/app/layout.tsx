import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


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
  title: "Aethelia | Bespoke Digital Architecture",
  description: "High-end Fullstack Web Development & Luxury Design",
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
        </body>
      
    </html>
  );
}
   