"use client";

import { Briefcase, Search, Filter, MapPin, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const jobs = [
  { title: "Senior Staff Nurse - Oncology", dept: "Nursing", location: "Tisch Hospital", type: "Full-Time" },
  { title: "Clinical Research Coordinator", dept: "Research", location: "Grossman School", type: "Full-Time" },
  { title: "Radiology Technologist", dept: "Diagnostics", location: "Main Campus", type: "Part-Time" },
  { title: "Patient Care Associate", dept: "Clinical Support", location: "Kimmel Pavilion", type: "Full-Time" },
  { title: "Senior Data Scientist", dept: "IT & Analytics", location: "Remote/Hybrid", type: "Full-Time" }
];

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Area */}
      <section className="bg-[#F4F3EE] py-24 border-b border-navy/5">
        <div className="container">
          <Link 
            href="/careers" 
            className="group inline-flex items-center gap-2 text-navy/40 font-bold uppercase tracking-widest text-[10px] mb-8 hover:text-navy transition-all"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Careers
          </Link>
          <h1 className="text-navy font-display text-5xl mb-12">Search Openings</h1>
          
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30" size={20} />
              <input 
                type="text" 
                placeholder="Job title, keywords, or department..."
                className="w-full pl-12 pr-6 py-5 bg-white border border-navy/10 focus:border-gold outline-none transition-all text-sm"
              />
            </div>
            <button className="bg-navy text-white px-10 py-5 flex items-center justify-center gap-3 uppercase tracking-widest font-bold text-[11px] hover:bg-gold hover:text-navy transition-all">
              Search Jobs <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-navy/5">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy/40">{jobs.length} Positions Found</span>
            <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-navy">
              <Filter size={14} /> Filter Results
            </button>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-warm-white border border-transparent hover:border-gold/30 hover:bg-white hover:shadow-xl transition-all cursor-pointer flex flex-col md:flex-row justify-between items-center gap-8"
              >
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-2 block">{job.dept}</span>
                  <h3 className="text-navy text-2xl font-display mb-4">{job.title}</h3>
                  <div className="flex flex-wrap gap-6 text-navy/40 text-[11px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock size={14} className="text-gold" /> {job.type}</span>
                  </div>
                </div>
                <button className="btn bg-navy text-white group-hover:bg-gold group-hover:text-navy px-8 py-3 transition-all">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
