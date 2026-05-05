"use client";

import { Activity, Heart, Stethoscope, Baby, Brain, Microscope, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { slug: "cardiovascular", icon: Activity, title: "Cardiovascular Care", desc: "Leading treatments for complex heart and vascular conditions.", color: "bg-red-50 text-red-600" },
  { slug: "neurology", icon: Brain, title: "Neurology & Neurosurgery", desc: "Expert care for the brain, spine, and nervous system.", color: "bg-blue-50 text-blue-600" },
  { slug: "oncology", icon: Heart, title: "Oncology", desc: "Comprehensive cancer care and innovative clinical trials.", color: "bg-purple-50 text-purple-600" },
  { slug: "orthopedics", icon: Stethoscope, title: "Orthopedics", desc: "Specialized treatment for joints, bones, and muscles.", color: "bg-orange-50 text-orange-600" },
  { slug: "pediatrics", icon: Baby, title: "Pediatrics", desc: "Compassionate care for children and adolescents.", color: "bg-green-50 text-green-600" },
  { slug: "diagnostics", icon: Microscope, title: "Specialized Diagnostics", desc: "Advanced imaging and laboratory services.", color: "bg-gray-50 text-gray-600" }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-navy py-32 text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10"
        >
          <span className="text-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Clinical Departments</span>
          <h1 className="font-display text-5xl md:text-8xl mb-8 leading-[0.9] tracking-tight">World-Class <br/> Medical Services</h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            From routine check-ups to the most complex surgical procedures, our specialists are dedicated to providing the highest level of care.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(196,164,132,0.1),transparent_50%)]" />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {services.map((s, i) => (
              <Link 
                key={i} 
                href={`/services/${s.slug}`}
                className="group relative p-12 border border-navy/5 transition-all duration-700 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${s.color} flex items-center justify-center mb-10 group-hover:bg-white group-hover:scale-110 transition-all duration-500`}>
                    <s.icon size={32} />
                  </div>
                  <h3 className="text-navy font-display text-3xl mb-4 group-hover:text-white transition-colors duration-500">{s.title}</h3>
                  <p className="text-navy/60 text-base leading-relaxed group-hover:text-white/50 transition-colors duration-500 mb-8">{s.desc}</p>
                  
                  <div className="flex items-center gap-3 text-gold font-bold text-[11px] uppercase tracking-widest group-hover:text-white">
                    Explore Department <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gold">
        <div className="container text-center">
          <h2 className="text-navy text-5xl font-display mb-10">Need a Specialty Consultation?</h2>
          <Link 
            href="/patient" 
            className="inline-block bg-navy text-white px-12 py-5 uppercase tracking-widest font-bold text-[12px] hover:bg-white hover:text-navy transition-all shadow-2xl"
          >
            Find a Doctor
          </Link>
        </div>
      </section>
    </div>
  );
}
