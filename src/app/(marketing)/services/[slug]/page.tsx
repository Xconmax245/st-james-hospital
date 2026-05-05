"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, Calendar, Users, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const serviceData: Record<string, any> = {
  "cardiovascular": {
    title: "Cardiovascular Care",
    tagline: "Heart & Vascular Center of Excellence",
    overview: "Our heart and vascular specialists are leaders in treating complex cardiac conditions, using the latest minimally invasive techniques.",
    highlights: ["Advanced Valve Repair", "Heart Failure Management", "Vascular Surgery", "Electrophysiology"],
    stats: { patients: "15k+", success: "99.2%", staff: "120+" }
  },
  "neurology": {
    title: "Neurology & Neurosurgery",
    tagline: "Advanced Brain & Spine Institute",
    overview: "Pioneering neurological care for conditions ranging from stroke and epilepsy to complex brain tumors and spinal disorders.",
    highlights: ["Neuro-Oncology", "Epilepsy Surgery", "Stroke Center", "Spinal Reconstruction"],
    stats: { patients: "10k+", success: "98.5%", staff: "85+" }
  },
  "oncology": {
    title: "Oncology",
    tagline: "Comprehensive Cancer Center",
    overview: "Integrating world-class research with compassionate patient care to provide the most advanced cancer treatments available.",
    highlights: ["Immunotherapy", "Precision Medicine", "Bone Marrow Transplant", "Clinical Trials"],
    stats: { patients: "20k+", success: "N/A", staff: "150+" }
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = serviceData[slug] || serviceData["cardiovascular"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Detail Hero */}
      <section className="bg-[#F4F3EE] py-32 border-b border-navy/5">
        <div className="container">
          <Link 
            href="/services" 
            className="group inline-flex items-center gap-2 text-navy/40 font-bold uppercase tracking-widest text-[10px] mb-12 hover:text-navy transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">{data.tagline}</span>
            <h1 className="text-navy font-display text-5xl md:text-8xl mb-8 leading-tight">{data.title}</h1>
            <p className="text-navy/60 text-xl leading-relaxed max-w-2xl">
              {data.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-16">
            <div data-aos="fade-up">
              <h2 className="text-navy text-3xl font-display mb-8">Clinical Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.highlights.map((h: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-warm-white border border-navy/5">
                    <CheckCircle2 size={24} className="text-gold shrink-0" />
                    <span className="text-navy font-bold text-[13px] uppercase tracking-wide">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-navy text-3xl font-display mb-8">Department Statistics</h2>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <span className="block text-4xl font-display text-navy mb-2">{data.stats.patients}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Annual Patients</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-display text-navy mb-2">{data.stats.staff}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Specialists</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-display text-navy mb-2">{data.stats.success}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Quality Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="p-10 bg-navy text-white">
              <h3 className="text-gold font-display text-2xl mb-6">Schedule Visit</h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">Ready to see a specialist? Our coordinators are here to assist with your appointment.</p>
              <button className="w-full btn btn-gold py-4 text-[11px] mb-4">Request Appointment</button>
              <button className="w-full flex items-center justify-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-all">
                View Faculty Directory <ChevronRight size={14} />
              </button>
            </div>

            <div className="p-8 border border-navy/10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-gold mt-1" />
                <div>
                  <p className="text-navy font-bold text-xs uppercase tracking-widest">Location</p>
                  <p className="text-navy/50 text-[13px]">Main Building, Level 4 <br/> Tisch Hospital</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar size={20} className="text-gold mt-1" />
                <div>
                  <p className="text-navy font-bold text-xs uppercase tracking-widest">Office Hours</p>
                  <p className="text-navy/50 text-[13px]">Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
