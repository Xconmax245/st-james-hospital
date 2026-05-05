"use client";

import { ArrowRight, Calendar, Tag } from "lucide-react";

const newsItems = [
  {
    title: "Breakthrough in Robotic-Assisted Orthopedic Surgery",
    category: "Clinical Innovation",
    date: "MAY 04, 2026",
    excerpt: "NYU Langone surgeons at Tisch Hospital are utilizing next-generation robotic platforms to improve precision and recovery times for complex joint reconstructions.",
    image: "https://images.unsplash.com/photo-1579154235602-4c0799797746?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "New Genomics Center to Accelerate Personalized Medicine",
    category: "Research",
    date: "APR 28, 2026",
    excerpt: "The NYU Grossman School of Medicine announces a major expansion of its genomic research facilities, aimed at tailoring cancer treatments to individual genetic profiles.",
    image: "https://images.unsplash.com/photo-1532187863486-abf91ad1baf4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Expanding Access to Pediatric Specialist Care in NYC",
    category: "Community Health",
    date: "APR 20, 2026",
    excerpt: "A new network of neighborhood-based pediatric clinics is set to open this fall, bringing NYU Langone's world-class specialty care closer to families across the five boroughs.",
    image: "https://images.unsplash.com/photo-1502740479735-538104e03073?auto=format&fit=crop&q=80&w=800",
  },
];

export default function NewsFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-navy mb-4">Latest from NYU Langone</h2>
            <p className="text-muted text-lg">
              Explore the latest breakthroughs in clinical research, patient care delivery, and institutional milestones.
            </p>
          </div>
          <button className="btn border border-navy/20 text-navy hover:bg-navy hover:text-white transition-all whitespace-nowrap">
            View All News
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {newsItems.map((item, i) => (
            <article 
              key={item.title} 
              className="group cursor-pointer flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image Container */}
              <div className="relative h-64 mb-8 overflow-hidden bg-surface">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 flex items-center gap-2 shadow-sm">
                  <Tag size={10} className="text-gold" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-navy">{item.category}</span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-4 text-[10px] font-bold text-navy/40 uppercase tracking-widest">
                <Calendar size={12} className="text-gold" />
                <span>{item.date}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-2xl text-navy mb-4 group-hover:text-gold transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed line-clamp-3 mb-6">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-navy/5">
                <span className="flex items-center gap-2 text-navy font-bold uppercase tracking-widest text-[10px] group-hover:text-gold transition-colors">
                  Read Full Story <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
