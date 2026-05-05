"use client";

import { Award, Heart, ShieldCheck, Users, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy py-32 text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10"
        >
          <span className="text-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Our Institution</span>
          <h1 className="font-display text-5xl md:text-8xl mb-8 leading-[0.9] tracking-tight">Excellence in <br/> New York <br/> Healthcare</h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
            NYU Langone Tisch Hospital is a premier academic medical center dedicated to excellence in patient care, education, and research.
          </p>
          <div className="h-1 w-24 bg-gold" />
        </motion.div>
        
        {/* Animated Background Element */}
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: '50%' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-full h-full bg-white/5 skew-x-[-12deg] pointer-events-none" 
        />
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Heart, title: "Compassion", desc: "Treating every patient with dignity and respect." },
              { icon: ShieldCheck, title: "Integrity", desc: "Commitment to the highest ethical standards." },
              { icon: Award, title: "Excellence", desc: "Pursuing the best clinical outcomes." },
              { icon: Users, title: "Collaboration", desc: "Working together as one care team." }
            ].map((v, i) => (
              <div 
                key={i} 
                className="flex flex-col items-start group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="p-4 bg-navy/5 text-gold mb-6 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <v.icon size={28} />
                </div>
                <h3 className="text-navy font-display text-2xl mb-4">{v.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History/Story */}
      <section className="py-32 bg-[#F4F3EE] overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="h-[600px] bg-navy/10 relative overflow-hidden">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000')" }} 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold flex items-center justify-center p-8 text-navy font-display text-center leading-tight">
                Since <br/> 1841
              </div>
            </div>
            
            <div data-aos="fade-left">
              <h2 className="text-navy text-5xl font-display mb-8">Our Legacy of <br/> Clinical Innovation</h2>
              <p className="text-navy/70 mb-8 text-lg leading-relaxed">
                Founded on the principles of patient-centered care, NYU Langone has grown into one of the nation&apos;s most respected medical institutions. We continue to push the boundaries of what is possible in medicine through groundbreaking research and world-class clinical expertise.
              </p>
              <Link 
                href="/aboutus/history"
                className="group inline-flex items-center gap-4 bg-navy text-white hover:bg-gold hover:text-navy transition-all px-10 py-5 uppercase tracking-widest text-[11px] font-bold shadow-xl"
              >
                Read Our Full History <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
