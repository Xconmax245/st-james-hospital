"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-navy overflow-hidden aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]">
      {/* Background: Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-navy/30 z-10" />
        {/* Professional Hospital Image */}
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-linear hover:scale-110"
          style={{ backgroundImage: "url('/NYU20Medical20(New20City)..jpg')" }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 container h-full flex flex-col justify-center items-start pt-space-10 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="max-w-3xl"
        >
          <div className="flex flex-col mb-space-3">
            <span className="text-gold text-sm md:text-base uppercase tracking-[0.3em] font-bold">NYU Langone Health</span>
            <h1 className="font-display text-white mt-space-2 leading-[1.05] text-5xl md:text-7xl">
              World-Class Care, <br className="hidden md:block" />
              Right Here in NYC.
            </h1>
          </div>
          
          <p className="font-sans text-base md:text-xl text-white/80 max-w-xl mb-space-6 leading-relaxed">
            Leading the way in clinical excellence and research. Discover why NYU Langone Tisch Hospital is consistently ranked among the nation&apos;s best.
          </p>
          
          <div className="flex flex-wrap gap-space-3">
            <button className="btn btn-gold gap-space-1 px-8">
              Find a Doctor <ChevronRight size={16} />
            </button>
            <button className="btn border-2 border-white/30 text-white hover:bg-white hover:text-navy transition-all px-8">
              Virtual Visit
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Subtle Shadow (Replaced the thick white blur) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent z-30" />
    </section>
  );
}
