"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-48 pb-32 px-6 md:px-24 selection:bg-gold selection:text-black">
  <div className="max-w-6xl mx-auto">
    
    {/* Section 1: Intro */}
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-64">
      <div className="md:col-span-12 lg:col-span-10">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gold tracking-[0.6em] text-[10px] uppercase mb-12 font-medium"
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
        <div className="h-[1px] w-24 bg-gold/30 mb-12" />
        <div className="space-y-8 text-foreground/60 text-lg md:text-2xl font-light leading-relaxed">
          <p>
            I am <span className="text-foreground italic font-medium">Bhakti Pratama</span>. I architect digital infrastructures through the lens of tranquility.
          </p>
          <p>
            Aethelia was born from a fatigue of the digital noise. I believe a resilient system requires no excessive decoration—only honesty in function and precision in aesthetics.
          </p>
        </div>
      </div>
    </section>

    {/* Section 2: Placeholder for Abstract Visual */}
    <section className="mb-64 relative aspect-[21/9] overflow-hidden bg-border-subtle border border-foreground/5 shadow-2xl">
       <div className="absolute inset-0 flex items-center justify-center">
         <p className="italic text-foreground/20 font-serif text-sm tracking-[0.5em] uppercase px-6 text-center">
            Aethelia Sanctuary — North Bali
         </p>
       </div>
       <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </section>

    {/* Section 3: Core Philosophy */}
    <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-64 border-t border-border-subtle pt-24">
      <div className="md:col-span-4">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-gold sticky top-48 font-bold">Core Philosophy</h2>
      </div>
      <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
        {[
          { 
            t: "Functional Art", 
            d: "The web is not merely code, but a space inhabited by humans. Every pixel must serve a purpose." 
          },
          { 
            t: "Silent Performance", 
            d: "Speed is the highest form of respect for a user's time and digital well-being." 
          },
          { 
            t: "Timeless Aesthetic", 
            d: "Rejecting fleeting trends to create digital solutions that remain relevant for a decade." 
          },
          { 
            t: "Technical Integrity", 
            d: "A clean architecture behind the scenes produces a profound sense of calm on the surface." 
          }
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