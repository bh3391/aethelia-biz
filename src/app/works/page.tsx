"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

import { motion } from "framer-motion";

export default function WorksPage() {
  return (
   
      <main className="min-h-screen bg-background text-foreground pt-40 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <header className="mb-32 space-y-6 max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gold tracking-[0.6em] text-[10px] uppercase font-medium"
            >
              Selected Archives
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-9xl font-serif tracking-tighter leading-[0.85]"
            >
              Digital <br />
              <span className="italic font-light opacity-40 text-stone-400">Artifacts.</span>
            </motion.h1>
            <div className="h-[1px] w-32 bg-gold/30 mt-12"></div>
          </header>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-x-16 items-start">
  {projects.map((project, index) => {
    const isLarge = index % 3 === 0;
    const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
    const marginTop = !isLarge && index % 2 !== 0 ? "md:mt-48" : "mt-0";

    return (
      <motion.div
        key={project.slug}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`${colSpan} ${marginTop} group relative`}
      >
        <Link href={`/works/${project.slug}`} className="block">
          {/* Image Container / Window Mockup */}
          <div className="relative overflow-hidden bg-stone-900 aspect-[4/5] md:aspect-auto md:h-[650px] border border-white/5 shadow-2xl">
            
            {/* Fake Browser Top Bar (Aesthetic Detail) */}
            <div className="absolute top-0 left-0 w-full h-8 bg-stone-950/80 backdrop-blur-md z-20 flex items-center px-4 gap-2 border-b border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-700" />
              <div className="w-1.5 h-1.5 rounded-full bg-stone-700" />
              <div className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            </div>

            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

            {/* FULLPAGE SCREENSHOT SCROLL LOGIC */}
            <div className="relative w-full h-full pt-8">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={8000} // Height besar untuk mendukung resolusi panjang
                className="w-full h-auto object-top grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-[10000ms] ease-in-out group-hover:-translate-y-[calc(100%-600px)]"
                priority={index < 2}
              />
            </div>

            {/* Label Floating */}
            <div className="absolute top-12 right-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-[9px] tracking-[0.4em] text-gold bg-black/60 backdrop-blur-md px-4 py-2 border border-gold/20 uppercase">
                Explore View
              </span>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-10 space-y-4 border-l border-stone-900 pl-8 group-hover:border-gold transition-colors duration-700">
            <div className="flex justify-between items-center text-[9px] tracking-[0.4em] uppercase text-stone-500 font-light">
              <span>{project.category}</span>
              <span className="text-gold/40">{project.year}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-serif italic tracking-tight text-stone-200 group-hover:text-gold transition-colors duration-500">
              {project.title}
            </h3>

            <div className="flex items-center gap-4 pt-4 text-stone-600 group-hover:text-gold transition-all duration-500">
              <div className="h-[1px] w-8 bg-stone-800 group-hover:w-16 group-hover:bg-gold transition-all duration-700"></div>
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 font-bold">
                View Narrative
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  })}
</div>

          {/* Empty State */}
          {projects.length === 0 && (
            <div className="py-60 text-center">
              <p className="font-serif italic text-stone-600 text-2xl">The archive is currently being curated.</p>
            </div>
          )}

        </div>
      </main>
    
  );
}