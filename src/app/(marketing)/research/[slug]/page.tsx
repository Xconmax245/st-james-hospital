"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ResearchSection {
  title: string;
  val: string;
}

interface ResearchInitiative {
  title: string;
  tagline: string;
  overview: string;
  sections: ResearchSection[];
}

const researchData: Record<string, ResearchInitiative> = {
  "clinical-trials": {
    title: "Clinical Trials",
    tagline: "Advancing Patient Outcomes",
    overview: "Explore our active clinical trials and learn how you can participate in groundbreaking medical research.",
    sections: [
      { title: "Active Studies", val: "150+" },
      { title: "Participants", val: "12k+" },
      { title: "Funding", val: "$45M+" }
    ]
  },
  "genomic-medicine": {
    title: "Genomic Medicine",
    tagline: "The Future of Personalized Care",
    overview: "Our genomics institute is mapping the relationship between genetics and disease to tailor individual patient treatments.",
    sections: [
      { title: "Sequencing Projects", val: "500+" },
      { title: "Data Volume", val: "2PB+" },
      { title: "Researchers", val: "45" }
    ]
  }
};

export default function ResearchDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = researchData[slug] || researchData["clinical-trials"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Detail Hero */}
      <section className="bg-navy py-32 text-white relative overflow-hidden">
        <div className="container relative z-10">
          <Link 
            href="/research" 
            className="group inline-flex items-center gap-2 text-white/40 font-bold uppercase tracking-widest text-[10px] mb-12 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Research
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">{data.tagline}</span>
            <h1 className="text-white font-display text-5xl md:text-8xl mb-8 leading-tight">{data.title}</h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              {data.overview}
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-full bg-gold/5 -skew-x-12 translate-x-1/2" />
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {data.sections.map((s, i) => (
              <div 
                key={i} 
                className="p-12 bg-warm-white border border-navy/5 text-center flex flex-col items-center group hover:bg-navy transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy transition-all">
                  <Zap size={28} />
                </div>
                <span className="block text-5xl font-display text-navy mb-2 group-hover:text-white transition-colors">{s.val}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{s.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
              <h2 className="text-navy text-4xl font-display mb-8">Pioneering Progress</h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10">
                Our research initiatives are supported by state-of-the-art facilities and a collaborative environment that brings together clinicians, basic scientists, and data experts.
              </p>
              <div className="space-y-4">
                {["FDA-Approved Facilities", "Multi-Disciplinary Teams", "Advanced Biorepositories"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-navy font-bold text-sm uppercase tracking-wide">
                    <ShieldCheck size={20} className="text-gold" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] bg-navy/5 overflow-hidden" data-aos="fade-left">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579154235602-4c0799797746?auto=format&fit=crop&q=80&w=800')" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
