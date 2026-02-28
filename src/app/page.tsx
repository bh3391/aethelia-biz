"use client";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 2);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-700 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] md:h-screen flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-12 md:pb-20 overflow-hidden">
        <motion.div style={{ y: yRange }} className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Aethelia Hero"
            fill
            className="object-cover opacity-20 dark:opacity-30 grayscale contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-gold tracking-[0.4em] md:tracking-[0.7em] text-[8px] md:text-[10px] uppercase mb-4 md:mb-8 font-semibold">
              Bhakti Pratama — Digital Artisan
            </p>
            {/* Font size disesuaikan: text-6xl di mobile, 11vw di desktop */}
            <h1 className="text-6xl md:text-[11vw] font-serif leading-[0.9] md:leading-[0.75] tracking-tighter mb-8 md:mb-12">
              Aethelia <br className="hidden md:block" /> 
              <span className="italic font-extralight opacity-30 dark:opacity-40 ml-0 md:ml-20">Systems.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
              <p className="max-w-[280px] md:max-w-md text-stone-500 dark:text-stone-400 text-xs md:text-lg font-light leading-relaxed font-serif italic">
                Crafting digital sanctuaries where minimalist aesthetics 
                meet high-performance engineering.
              </p>
              <Link 
                href="/works" 
                className="group flex items-center gap-4 md:gap-8 text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-gold border-b border-gold/20 pb-2 md:pb-4 w-fit hover:border-gold transition-all duration-700"
              >
                Explore Archive 
                <span className="group-hover:translate-x-2 transition-transform duration-700">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-24 md:py-60 px-6 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center border-y border-stone-900/10 dark:border-stone-800/30 bg-stone-50/50 dark:bg-stone-900/20 transition-colors duration-700">
  
        {/* Kolom Gambar - Turun ke bawah di Mobile (order-2) */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden border border-stone-200 dark:border-stone-800/50 shadow-2xl group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1639749601642-8d30474f249f?q=80&w=736&auto=format&fit=crop" 
              alt="Aethelia Philosophy"
              fill
              className="object-cover opacity-90 dark:opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            {/* Subtle Overlay untuk kedalaman */}
            <div className="absolute inset-0 bg-stone-900/5 dark:bg-black/20" />
          </motion.div>
        </div>
        
        {/* Kolom Teks - Naik ke atas di Mobile (order-1) */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.4em] text-[9px] md:text-[10px] uppercase font-bold mb-4 md:mb-8">
              The Philosophy
            </p>
            
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif leading-[1.1] md:leading-[1] italic text-foreground">
              "Simplicity is the <br className="hidden md:block" /> 
              ultimate <span className="text-gold not-italic">sophistication</span>."
            </h2>
            
            <div className="h-[1px] w-20 md:w-40 bg-gold/40 mt-8 md:mt-12"></div>
            
            <p className="mt-8 md:mt-12 text-stone-500 dark:text-white text-xs md:text-sm tracking-widest uppercase leading-loose max-w-md">
              We believe that every line of code and every pixel is an architectural commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURED WORKS --- */}
      <section className="py-24 md:py-60 px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 md:mb-40 gap-4 border-b border-stone-900/10 dark:border-stone-900/50 pb-8 md:pb-12">
          <h2 className="text-4xl md:text-[8vw] font-serif">Featured <span className="italic opacity-20 font-light">Artifacts</span></h2>
          <Link href="/works" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-stone-500">
            View All ↗
          </Link>
        </div>

        {/* Grid: 1 kolom di mobile, 2 kolom di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-40">
  {featuredProjects.map((project, index) => (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={index % 2 !== 0 ? "md:mt-60" : ""}
    >
      <Link href={`/works/${project.slug}`} className="group block">
        {/* CONTAINER MOCKUP WINDOW */}
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 dark:bg-[#0a0a0a] border border-stone-200 dark:border-stone-900 rounded-sm shadow-xl transition-all duration-700">
          
          {/* FAKE BROWSER TOP BAR (Aesthetic Detail) */}
          <div className="absolute top-0 left-0 w-full h-6 bg-stone-200/50 dark:bg-stone-900/80 backdrop-blur-md z-20 flex items-center px-3 gap-1.5 border-b border-stone-300/20 dark:border-stone-800/50">
            <div className="w-1.5 h-1.5 rounded-full bg-stone-400/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-stone-400/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-stone-400/50" />
          </div>

          {/* THE SCREENSHOT - Grayscale by default, color on hover */}
          <div className="relative w-full h-full pt-6">
             <Image 
                src={project.image} 
                alt={project.title} 
                width={1200} // Sesuaikan lebar asli screenshot
                height={5000} // Sesuaikan panjang estimasi screenshot
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-[10000ms] ease-in-out group-hover:-translate-y-[calc(100%-400px)] object-top"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
             />
          </div>

          {/* GRADIENT OVERLAY (Mewah & Memberi Kedalaman) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none z-10" />
          
          {/* HOVER HINT */}
          <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <span className="text-[8px] uppercase tracking-[0.3em] text-white bg-gold px-2 py-1 rounded-full shadow-lg">Scroll View</span>
          </div>
        </div>

        {/* PROJECT INFO */}
        <div className="mt-6 md:mt-12 flex justify-between items-end border-t border-stone-900/10 dark:border-stone-900/50 pt-6">
          <div className="space-y-1">
            <p className="text-gold text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-bold">
              {project.category}
            </p>
            <h3 className="text-2xl md:text-5xl font-serif italic group-hover:translate-x-2 transition-transform duration-700 italic">
              {project.title}
            </h3>
          </div>
          <div className="text-right">
            <span className="block font-serif italic text-lg md:text-2xl opacity-40 group-hover:text-gold group-hover:opacity-100 transition-all duration-700">
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  ))}
</div>
      </section>

      {/* --- MARQUEE --- */}
      <section className="py-12 md:py-24 border-y border-stone-900/10 dark:border-stone-900/50 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((i) => (
            <span key={i} className="text-[12vw] md:text-[8vw] font-serif italic text-stone-200 dark:text-stone-900 tracking-tighter px-8 uppercase opacity-50">
              High Performance — Minimalist Sanctuary — 
            </span>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-40 md:py-80 px-6 text-center">
        <p className="text-gold tracking-[0.5em] text-[9px] md:text-[10px] uppercase mb-8 md:mb-16 font-bold">Inquiry</p>
        <Link href="/contact" className="group">
          <h2 className="text-5xl md:text-[10vw] font-serif italic leading-none tracking-tighter group-hover:text-gold transition-all duration-700">
            Let's build <br /> <span className="not-italic text-foreground">together.</span>
          </h2>
        </Link>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 md:px-24 border-t border-stone-900/10 dark:border-stone-900/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[8px] md:text-[10px] tracking-[0.3em] uppercase text-stone-500">
          <p>© 2026 AETHELIA SYSTEMS</p>
          <div className="flex gap-6 md:gap-12">
            <Link href="#" className="hover:text-gold">Instagram</Link>
            <Link href="#" className="hover:text-gold">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}