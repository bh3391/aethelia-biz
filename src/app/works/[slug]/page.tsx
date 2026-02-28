import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  // Logika Next Project Otomatis
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 md:pt-48 pb-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/works" 
          className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-stone-500 hover:text-gold transition-all mb-16"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Archives
        </Link>

        {/* Project Header */}
        <header className="mb-24 border-b border-stone-900 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">Project Overview</p>
              <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-none">
                {project.title}
              </h1>
            </div>
            <div className="text-right">
              <span className="text-4xl md:text-6xl font-serif italic text-stone-800 dark:text-stone-900">{project.year}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-3">Category</p>
              <p className="text-xs md:text-sm font-light">{project.category}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-3">Client</p>
              <p className="text-xs md:text-sm font-light">{project.content.client}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-3">Role</p>
              <p className="text-xs md:text-sm font-light">{project.content.role}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 2).map(tech => (
                  <span key={tech} className="text-[10px] px-2 py-0.5 border border-stone-800 text-stone-400 uppercase tracking-widest">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <section className="mb-32 relative aspect-video md:aspect-[21/9] overflow-hidden bg-stone-900 border border-stone-800/50 group shadow-2xl">
  {/* Fake Browser Top Bar - Agar konsisten dengan halaman list */}
  <div className="absolute top-0 left-0 w-full h-8 bg-black/40 backdrop-blur-md z-20 flex items-center px-4 gap-2 border-b border-white/5">
    <div className="w-1.5 h-1.5 rounded-full bg-stone-700" />
    <div className="w-1.5 h-1.5 rounded-full bg-stone-700" />
    <div className="w-1.5 h-1.5 rounded-full bg-stone-700" />
    <div className="ml-4 text-[9px] text-stone-500 tracking-[0.2em] uppercase hidden md:block">
      Project Showcase / {project.slug}.studio
    </div>
  </div>

  {/* Image Container with Scroll-on-Hover for Detail Exploration */}
  <div className="relative w-full h-full pt-8">
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover object-top opacity-60 group-hover:opacity-100 transition-all duration-[15000ms] ease-in-out group-hover:-translate-y-[calc(100%-400px)] grayscale group-hover:grayscale-0"
      priority
    />
  </div>

  {/* Gradient Overlay for Premium Look */}
  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 pointer-events-none z-10" />
  
  {/* Status Indicator */}
  <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
    </span>
    <span className="text-[10px] tracking-[0.4em] text-white/50 uppercase font-light">
      Live Archive
    </span>
  </div>
</section>

        {/* Narrative Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-48">
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h2 className="text-gold tracking-[0.5em] text-[10px] uppercase mb-8 flex items-center gap-4">
                <span className="h-[1px] w-8 bg-gold/50"></span> Description
              </h2>
              <p className="text-stone-300 text-xl md:text-3xl font-serif italic leading-relaxed tracking-tight">
                "{project.description}"
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-stone-900/50">
              <div className="space-y-4">
                <h3 className="text-white text-[10px] uppercase tracking-widest font-bold">The Challenge</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-light">{project.content.challenge}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-white text-[10px] uppercase tracking-widest font-bold">The Solution</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-light">{project.content.solution}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div className="p-8 border border-stone-900 bg-[#0a0a0a]/50 backdrop-blur-sm">
                <h2 className="text-gold tracking-[0.5em] text-[10px] uppercase mb-8 italic">Technologies</h2>
                <ul className="space-y-4">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-stone-400">
                      <span className="w-1 h-1 bg-gold rounded-full"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Rationale / Interactive Preview */}
        <section className="py-24 border-y border-stone-900/50 bg-[#080808]/30 relative -mx-6 md:-mx-24 px-6 md:px-24 mb-48">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-gold tracking-[0.5em] text-[10px] uppercase">Interactive Preview</h2>
              <h3 className="text-3xl font-serif italic text-white leading-tight">Digital Artisan <br/> Craftsmanship.</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Setiap baris kode dioptimalkan untuk memberikan responsivitas maksimal, memastikan visual premium tetap ringan saat diakses.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="group relative">
                <div className="flex justify-between items-center mb-4 px-2 text-[9px] uppercase tracking-widest text-stone-600">
                  <span>Project Mockup View</span>
                  <span className="italic group-hover:text-gold transition-colors">Hover to explore ↓</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden border border-stone-800 bg-stone-950 rounded-sm shadow-2xl">
                  {/* Efek Hover Scroll Otomatis */}
                  <img 
                    src={project.image} 
                    alt="Preview" 
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-[8000ms] ease-in-out hover:-translate-y-[60%]"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Footer */}
        <footer className="text-center pt-24 border-t border-stone-900">
          <p className="text-stone-600 text-[10px] uppercase tracking-[0.5em] mb-12">Next Artifact</p>
          <Link href={`/works/${nextProject.slug}`} className="group inline-block">
            <span className="text-gold text-[10px] tracking-widest uppercase mb-4 block opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
              Discover Project →
            </span>
            <h2 className="text-4xl md:text-8xl font-serif italic text-stone-800 group-hover:text-white transition-all duration-700">
              {nextProject.title}
            </h2>
          </Link>
        </footer>
      </div>
    </main>
  );
}