"use client";

import { Microscope, FlaskConical, TestTube, Dna, FileSearch, Share2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const initiatives = [
  { slug: "clinical-trials", icon: Microscope, title: "Clinical Trials", desc: "Access to the latest experimental treatments and therapies targeting complex conditions." },
  { slug: "genomic-medicine", icon: Dna, title: "Genomic Medicine", desc: "Pioneering research in personalized healthcare and genetics-based diagnostics." },
  { slug: "lab-research", icon: FlaskConical, title: "Laboratory Science", desc: "Fundamental biological research driving medical breakthroughs in our NYC labs." },
  { slug: "data-science", icon: FileSearch, title: "Health Data Science", desc: "Leveraging big data and AI to improve clinical outcomes and patient safety." }
];

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-navy py-32 text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="container relative z-10"
        >
          <span className="text-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Discovery & Innovation</span>
          <h1 className="font-display text-5xl md:text-8xl mb-8 leading-[0.9] tracking-tight">Advancing the <br/> Frontiers of <br/> Medicine</h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Through rigorous research and clinical trials, we are transforming how diseases are diagnosed and treated globally.
          </p>
        </motion.div>
        
        {/* Animated Particles/Dots Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-gold rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse delay-1000" />
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {initiatives.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row gap-8 p-12 bg-[#F4F3EE] border border-navy/5 shadow-sm hover:shadow-xl transition-all"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="shrink-0 w-20 h-20 bg-white shadow-sm flex items-center justify-center text-gold border border-gold/10">
                  <item.icon size={36} />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-navy font-display text-3xl mb-4">{item.title}</h3>
                    <p className="text-navy/60 text-base leading-relaxed mb-8">{item.desc}</p>
                  </div>
                  <Link 
                    href={`/research/${item.slug}`}
                    className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-navy hover:text-gold transition-colors"
                  >
                    Explore Initiative <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Banner */}
      <section className="bg-gold py-24 relative overflow-hidden">
        <div className="container relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div data-aos="fade-right">
            <h2 className="text-navy text-5xl font-display mb-4 leading-tight">Explore Our Latest <br/> Scientific Publications</h2>
            <p className="text-navy/60 text-lg">Access peer-reviewed studies from our world-class faculty.</p>
          </div>
          <Link 
            href="/research/publications"
            data-aos="fade-left"
            className="group bg-navy text-white hover:bg-white hover:text-navy transition-all px-12 py-5 uppercase tracking-widest text-[12px] font-bold shadow-2xl flex items-center gap-4"
          >
            Search Repository <Share2 size={16} className="group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      </section>
    </div>
  );
}
