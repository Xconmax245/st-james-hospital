"use client";

import { ArrowRight, MessageSquare, ClipboardCheck, Heart, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export default function UsefulLinks() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-navy mb-4">Patient Journeys</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Comprehensive guidance designed to support you through every stage of your care at NYU Langone Tisch Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Patient Experience Card */}
          <div className="group relative bg-[#F4F3EE] overflow-hidden border border-navy/5 p-10 lg:p-16 flex flex-col justify-between min-h-[500px]" data-aos="fade-right">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white shadow-sm text-gold">
                  <Heart size={24} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy/40">Patient Care</span>
              </div>
              
              <h3 className="text-navy text-4xl font-display mb-6">Patient <br/> Experience</h3>
              
              <p className="text-navy/60 text-lg mb-8 leading-relaxed max-w-md">
                Your comfort and well-being are our highest priorities. We provide dedicated advocacy services to ensure your voice is heard and your needs are met.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <MessageSquare size={18} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-navy font-bold text-sm uppercase tracking-wide">Patient Advocacy</p>
                    <p className="text-navy/50 text-[13px]">Dedicated advisors to help you navigate your care rights and preferences.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-navy font-bold text-sm uppercase tracking-wide">Quality & Safety</p>
                    <p className="text-navy/50 text-[13px]">Transparent reporting on clinical outcomes and hospital safety protocols.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <button className="flex items-center gap-3 text-navy font-bold uppercase tracking-widest text-[11px] group-hover:text-gold transition-colors">
                Explore Advocacy Services <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Operation Prep Card */}
          <div className="group relative bg-navy overflow-hidden p-10 lg:p-16 flex flex-col justify-between min-h-[500px]" data-aos="fade-left">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 text-gold border border-white/10">
                  <ClipboardCheck size={24} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Preparation Guide</span>
              </div>
              
              <h3 className="text-white text-4xl font-display mb-6">Operation <br/> Preparation</h3>
              
              <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
                Proper preparation is essential for a successful outcome. Our comprehensive guides help you and your family prepare for your upcoming procedure.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wide">Pre-Surgery Protocols</p>
                    <p className="text-white/40 text-[13px]">Fasting instructions, medication guidance, and arrival timelines.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wide">Recovery Planning</p>
                    <p className="text-white/40 text-[13px]">Discharge expectations and post-operative home care requirements.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <button className="flex items-center gap-3 text-gold font-bold uppercase tracking-widest text-[11px] hover:text-white transition-colors">
                Access Procedure Guidance <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
