"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark"); // Default theme

  // Handle Theme Switching
  useEffect(() => {
    // Cek localStorage saat pertama kali load
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("light", savedTheme === "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${
          // Hapus bg-slate-50. Gunakan bg-transparent saat di atas, 
          // dan background theme (gelap) saat scroll.
          isScrolled || isMenuOpen 
            ? "bg-background/80 backdrop-blur-md border-b border-stone-800/50 py-4" 
            : "bg-transparent"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" onClick={closeMenu} className="group flex flex-col relative z-[110]">
          <span className="font-serif text-2xl tracking-widest dark:text-white text-foreground">AETHELIA</span>
          <span className="text-[8px] tracking-[0.4em] text-gold opacity-100 group-hover:tracking-[0.6em] transition-all duration-500 uppercase -mt-1 font-medium">
            Systems
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-12 items-center">
          {['Works', 'About', 'Inquiry'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.3em] text-stone-400 hover:text-gold transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 text-stone-400 hover:text-gold transition-colors border-l border-stone-800/50 ml-2 pl-6"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
          </button>
          <Link 
            href="/contact" 
            className="ml-4 border border-stone-700 px-6 py-2 text-[9px] uppercase tracking-[0.2em] text-stone-300 hover:border-gold hover:text-gold transition-all"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Menu Trigger (Hamburger) */}
        <div className="flex items-center gap-4 md:hidden">
           <button onClick={toggleTheme} className="text-stone-400 p-2">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 group relative z-[110] p-2"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-[1px] bg-foreground transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[4px]" : ""}`}></span>
            <span className={`w-6 h-[1px] bg-gold transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[3px]" : "w-4 self-end"}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            // Hapus bg-white. Gunakan bg-background (hitam pekat dari globals.css)
            className="fixed inset-0 bg-background z-[90] flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {['Works', 'About', 'Inquiry', 'Contact'].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    onClick={closeMenu}
                    // Ubah text-stone-600 ke text-stone-200 agar terbaca di dark mode
                    className="text-4xl font-serif italic text-stone-200 hover:text-gold transition-colors"
                  >
                    {item}.
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Socials di bottom mobile menu */}
            <div className="absolute bottom-12 left-8 border-t border-stone-900 pt-8 w-[calc(100%-64px)]">
              <p className="text-[10px] tracking-[0.3em] uppercase text-stone-600 mb-4">Socials</p>
              <div className="flex gap-8 text-[10px] tracking-widest uppercase text-gold">
                <a href="#" className="hover:text-stone-100 transition-colors">Instagram</a>
                <a href="#" className="hover:text-stone-100 transition-colors">Twitter</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}