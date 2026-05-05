"use client";

import { Map, Activity, Users, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "View Hospital Map",
    desc: "Navigate our campus with ease using our interactive digital map.",
    icon: Map,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    href: "/patients/findingyourwayaround"
  },
  {
    title: "Find a Service",
    desc: "Search our wide range of medical departments and specialized services.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    href: "/services"
  },
  {
    title: "Find a Doctor",
    desc: "Directory of our leading medical professionals across all specialties.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    href: "/consultants"
  },
];

export default function GettingAround() {
  return (
    <section className="bg-warm-white py-16 sm:py-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-6 sm:gap-space-4">
          <div className="max-w-2xl">
            <h2 className="text-navy text-3xl sm:text-4xl mb-4" data-aos="fade-right">
              Getting Around NYU Langone
            </h2>
            <p className="text-muted text-base sm:text-lg" data-aos="fade-right" data-aos-delay="60">
              We are committed to making your visit as smooth as possible. Use our tools below to find your way.
            </p>
          </div>
          <button className="btn border border-navy/30 text-navy hover:bg-navy hover:text-white transition-all whitespace-nowrap text-[10px] sm:text-[11px] px-6 py-3" data-aos="fade-left">
            Patient Wayfinding
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-space-4">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`premium-card group relative h-[350px] sm:h-[400px] lg:h-[450px] overflow-hidden border border-navy/10 ${i === 1 ? 'md:-translate-y-6' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-85 transition-opacity group-hover:opacity-95" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-space-4 flex flex-col justify-end text-white">
                <div className="mb-4 sm:mb-space-3 w-10 h-10 sm:w-space-6 sm:h-space-6 bg-gold/10 backdrop-blur-md border border-gold/30 flex items-center justify-center text-gold">
                   <card.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-white text-xl sm:text-2xl mb-2 leading-tight">{card.title}</h3>
                <p className="text-white/80 text-[13px] sm:text-sm mb-6 sm:mb-space-4 leading-relaxed">
                  {card.desc}
                </p>
                <a 
                  href={card.href} 
                  className="flex items-center gap-2 text-gold font-bold uppercase tracking-[0.15em] text-[10px] sm:text-[11px]"
                >
                  Access Tool <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
