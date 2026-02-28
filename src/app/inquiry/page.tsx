"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { sendInquiry } from "./actions";

export default function InquiryPage() {
  const [isPending, startTransition] = useTransition();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await sendInquiry(formData);
      if (result.success) {
        setShowModal(true);
        // Tunggu 3 detik sambil menunjukkan progress bar, lalu pindah ke home
        setTimeout(() => {
          router.push("/");
        }, 3500);
      } else {
        alert("Failed to send: " + result.error);
      }
    });
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 relative selection:bg-gold selection:text-black">
      <div className="max-w-3xl mx-auto">
        <header className="mb-20">
          <p className="text-gold tracking-[0.5em] text-[10px] uppercase mb-4 font-medium">Step into the Light</p>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter">
            Start your <br/>
            <span className="italic font-light opacity-60">Legacy.</span>
          </h1>
        </header>

        <form action={handleSubmit} className="space-y-12">
          <div className="group border-b border-stone-800 focus-within:border-gold transition-colors py-4">
            <label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-2">Who is reaching out?</label>
            <input name="name" type="text" placeholder="Your Name or Brand" className="w-full bg-transparent outline-none text-xl md:text-2xl font-serif placeholder:text-stone-700 italic text-foreground" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group border-b border-stone-800 focus-within:border-gold transition-colors py-4">
              <label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
              <input name="email" type="email" placeholder="email@example.com" className="w-full bg-transparent outline-none text-xl font-serif placeholder:text-stone-700 italic text-foreground" required />
            </div>
            <div className="group border-b border-stone-800 focus-within:border-gold transition-colors py-4">
              <label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-2">WhatsApp Number</label>
              <input name="phone" type="tel" placeholder="+62..." className="w-full bg-transparent outline-none text-xl font-serif placeholder:text-stone-700 italic text-foreground" required />
            </div>
          </div>

          <div className="group border-b border-stone-800 focus-within:border-gold transition-colors py-4">
            <label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-2">What is your vision?</label>
            <textarea name="vision" placeholder="Tell us about the project..." rows={4} className="w-full bg-transparent outline-none text-xl md:text-2xl font-serif placeholder:text-stone-700 italic resize-none text-foreground" required></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full md:w-auto border border-gold text-gold px-16 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-background transition-all duration-500 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "SENDING TO SANCTUARY..." : "SEND INQUIRY"}
          </button>
        </form>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className="text-center p-12 border border-gold/20 bg-stone-900/40 max-w-sm"
            >
              <div className="w-16 h-16 border border-gold rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-gold text-2xl">✓</span>
              </div>
              <h2 className="text-3xl font-serif italic mb-4 text-gold">Sent.</h2>
              <p className="text-stone-400 text-sm leading-relaxed tracking-wide mb-8">
                Your vision has been transmitted. Expect a response in your digital sanctuary soon.
              </p>
              
              {/* Progress Bar Loader */}
              <div className="h-[1px] w-full bg-stone-800 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="absolute inset-0 bg-gold"
                />
              </div>
              <p className="text-[8px] uppercase tracking-[0.4em] text-stone-600 mt-4">Returning to Aethelia</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}