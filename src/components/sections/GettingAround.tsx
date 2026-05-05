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
    <section className="bg-warm-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-space-6 gap-space-4">
          <div className="max-w-2xl">
            <h2 className="text-navy mb-space-3" data-aos="fade-right">
              Getting Around NYU Langone
            </h2>
            <p className="text-muted text-lg" data-aos="fade-right" data-aos-delay="60">
              We are committed to making your visit as smooth as possible. Use our tools below to find your way.
            </p>
          </div>
          <button className="btn border border-navy/30 text-navy hover:bg-navy hover:text-white transition-all whitespace-nowrap" data-aos="fade-left">
            Patient Wayfinding
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-4">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`premium-card group relative h-[450px] overflow-hidden border border-navy/10 ${i === 1 ? 'md:-translate-y-space-4' : ''}`}
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
              <div className="absolute inset-0 p-space-4 flex flex-col justify-end text-white">
                <div className="mb-space-3 w-space-6 h-space-6 bg-gold/10 backdrop-blur-md border border-gold/30 flex items-center justify-center text-gold">
                  <card.icon size={24} />
                </div>
                <h3 className="text-white mb-space-2 leading-tight">{card.title}</h3>
                <p className="text-white/80 text-sm mb-space-4 leading-relaxed">
                  {card.desc}
                </p>
                <a 
                  href={card.href} 
                  className="flex items-center gap-space-2 text-gold font-bold uppercase tracking-[0.15em] text-[11px]"
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
