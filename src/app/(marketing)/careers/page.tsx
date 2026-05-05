"use client";

import { Briefcase, GraduationCap, Laptop, Sparkles, TrendingUp, UserCheck, Heart, ChevronRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  { icon: TrendingUp, title: "Professional Growth", desc: "Extensive opportunities for continuing education and leadership training." },
  { icon: Heart, title: "Health & Wellness", desc: "Premium medical, dental, and vision packages for you and your family." },
  { icon: Laptop, title: "Modern Technology", desc: "Work with the most advanced medical systems and digital care platforms." },
  { icon: UserCheck, title: "Inclusive Culture", desc: "A diverse environment that celebrates every background and perspective." }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-navy py-32 text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10"
        >
          <span className="text-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Join Our Mission</span>
          <h1 className="font-display text-5xl md:text-8xl mb-10 leading-[0.9] tracking-tight">Shape the Future <br/> of New York <br/> Healthcare</h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-12">
            Build your career at one of the nation&apos;s leading academic medical centers. We are looking for passionate individuals to join our world-class team.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link 
              href="/careers/jobs"
              className="group bg-gold text-navy px-12 py-5 uppercase tracking-widest font-bold text-[12px] hover:bg-white transition-all shadow-xl flex items-center gap-3"
            >
              Search Openings <Briefcase size={16} />
            </Link>
            <Link 
              href="/careers/nursing"
              className="group border-2 border-white/20 text-white hover:bg-white hover:text-navy px-12 py-5 uppercase tracking-widest font-bold text-[12px] transition-all flex items-center gap-3"
            >
              Nursing Careers <GraduationCap size={18} />
            </Link>
          </div>
        </motion.div>
        
        {/* Decorative NY Map Element Placeholder */}
        <div className="absolute -bottom-20 -right-20 opacity-10 pointer-events-none">
          <MapPin size={600} className="text-white" strokeWidth={0.5} />
        </div>
      </section>

      {/* Institutional Stats */}
      <section className="py-32 bg-white border-b border-navy/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { val: "12,000+", label: "Dedicated Staff" },
              { val: "Top 5", label: "U.S. News Ranking" },
              { val: "Manhattan", label: "Institutional Heart" }
            ].map((stat, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <span className="block font-display text-7xl text-navy mb-4 tracking-tighter">{stat.val}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-32 bg-[#F4F3EE]">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-navy text-5xl font-display mb-6" data-aos="fade-up">Why Build Your Career Here?</h2>
            <div className="w-20 h-1 bg-gold mx-auto" data-aos="fade-up" data-aos-delay="100" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div 
                key={i} 
                className="group p-10 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gold/20 flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="w-20 h-20 rounded-full bg-navy/5 flex items-center justify-center text-gold mb-8 group-hover:bg-navy group-hover:scale-110 transition-all duration-500">
                  <b.icon size={36} />
                </div>
                <h3 className="text-navy font-bold text-[12px] uppercase tracking-widest mb-6">{b.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Link */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-navy p-16 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-white text-3xl font-display mb-2">Our Hiring Process</h3>
              <p className="text-white/40 text-base">Learn about our recruitment journey and what to expect.</p>
            </div>
            <Link 
              href="/careers/process" 
              className="group flex items-center gap-4 text-gold font-bold uppercase tracking-widest text-[11px]"
            >
              Learn More <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
