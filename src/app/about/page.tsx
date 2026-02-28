"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    // Ganti bg-[#050505] menjadi bg-background dan text-[#f0f0f0] menjadi text-foreground
    <main className="min-h-screen bg-background text-foreground pt-48 pb-32 px-6 md:px-24 selection:bg-gold selection:text-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Section 1: Intro */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-64">
          <div className="md:col-span-12 lg:col-span-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold tracking-[0.6em] text-[10px] uppercase mb-12 font-bold"
            >
              Curator of Digital Spaces
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-[7vw] font-serif leading-[1.1] tracking-tighter mb-16"
            >
              Simplicity is the <br /> 
              <span className="italic font-light opacity-40">Ultimate Sophistication.</span>
            </motion.h1>
          </div>

          <div className="md:col-start-5 md:col-span-8 lg:col-start-6 lg:col-span-6 space-y-12">
            {/* Menggunakan border-subtle dari konfigmu */}
            <div className="h-[1px] w-24 bg-gold/30 mb-12" />
            <div className="space-y-8 text-foreground/60 text-lg md:text-2xl font-light leading-relaxed">
              <p>
                Nama saya <span className="text-foreground italic font-medium">Bhakti Pratama</span>. Saya membangun infrastruktur digital melalui lensa ketenangan. 
              </p>
              <p>
                Aethelia lahir dari kejenuhan terhadap dunia digital yang terlalu bising. Saya percaya bahwa sebuah sistem yang kuat tidak butuh dekorasi berlebihan.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Mood & Atmosphere */}
        {/* Ganti bg-stone-900 menjadi bg-border-subtle agar berubah saat light mode */}
        <section className="mb-64 relative aspect-[21/9] overflow-hidden bg-border-subtle border border-foreground/5 shadow-2xl">
           <div className="absolute inset-0 flex items-center justify-center">
             <p className="italic text-foreground/20 font-serif text-sm tracking-[0.5em] uppercase">
                Aethelia Sanctuary — North Bali
             </p>
           </div>
           <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10 pointer-events-none" />
           {/* Gradient diatur agar menyatu dengan background tema */}
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </section>

        {/* Section 3: Principles */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-64 border-t border-border-subtle pt-24">
          <div className="md:col-span-4">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-gold sticky top-48 font-bold">Core Philosophy</h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
            {[
              { t: "Functional Art", d: "Web bukan sekadar kode, tapi ruang yang dihuni manusia. Setiap piksel harus memiliki tujuan." },
              { t: "Silent Performance", d: "Kecepatan adalah bentuk kesopanan tertinggi terhadap waktu pengguna." },
              { t: "Timeless Aesthetic", d: "Menolak tren sementara untuk menciptakan solusi yang tetap relevan." },
              { t: "Technical Integrity", d: "Arsitektur yang bersih di balik layar menghasilkan ketenangan di permukaan." }
            ].map((item) => (
              <div key={item.t} className="space-y-6">
                <h3 className="text-3xl font-serif italic text-foreground/90">{item.t}</h3>
                <p className="text-foreground/50 text-base leading-relaxed font-light">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Minimalist CTA */}
        <section className="relative py-40 flex flex-col items-center justify-center overflow-hidden">
           <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-border-subtle to-transparent top-0" />
           <p className="text-[10px] tracking-[0.6em] text-gold mb-12 uppercase font-bold">Let's build something quiet</p>
           <Link 
             href="/inquiry" 
             className="text-5xl md:text-[8vw] font-serif tracking-tighter hover:italic transition-all duration-700 text-foreground"
           >
             Inquiry.
           </Link>
           <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-border-subtle to-transparent bottom-0" />
        </section>

      </div>
    </main>
  );
}