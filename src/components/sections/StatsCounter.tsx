"use client";

import { useEffect, useState, useRef } from "react";
import { 
  Activity, 
  Users, 
  Bed, 
  Stethoscope, 
  HeartPulse,
  TrendingUp,
  Award
} from "lucide-react";

const stats = [
  { 
    label: "Inpatient Beds", 
    value: 1000, 
    icon: Bed, 
    desc: "Licensed acute care and specialty beds across our NYC campus."
  },
  { 
    label: "Clinical Experts", 
    value: 4500, 
    icon: Users, 
    desc: "Board-certified physicians, nurses, and allied health professionals."
  },
  { 
    label: "Advanced CT Scans", 
    value: 35244, 
    icon: Activity, 
    desc: "Annual diagnostic procedures using ultra-low-dose imaging technology."
  },
  { 
    label: "Radiology Exams", 
    value: 125000, 
    icon: Stethoscope, 
    desc: "High-resolution digital X-rays and imaging sessions performed."
  },
  { 
    label: "Ultrasound Scans", 
    value: 28400, 
    icon: HeartPulse, 
    desc: "Specialized obstetric, cardiac, and vascular imaging studies."
  },
];

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      countRef.current = Math.floor(easedProgress * end);
      setCount(countRef.current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={containerRef}>{count.toLocaleString()}</span>;
};

export default function StatsCounter() {
  return (
    <section className="bg-navy text-white py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4" data-aos="fade-right">
              <Award className="text-gold" size={20} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Clinical Excellence</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-display mb-4" data-aos="fade-right" data-aos-delay="60">Scale of Our Commitment</h2>
            <p className="text-white/60 text-lg leading-relaxed" data-aos="fade-right" data-aos-delay="120">
              As a leader in academic medicine, NYU Langone Health operates at a massive scale to provide the highest quality care to the millions of patients who walk through our doors.
            </p>
          </div>
          <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-sm" data-aos="fade-left">
            <TrendingUp className="text-gold" size={24} />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none">2026</span>
              <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Performance Year</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className="group flex flex-col items-start"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <div className="mb-6 p-4 bg-white/5 border border-white/10 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500">
                <stat.icon size={28} className="text-gold" strokeWidth={1.5} />
              </div>
              <div className="font-display text-5xl text-white leading-none mb-3 tracking-tighter">
                <Counter end={stat.value} />
                <span className="text-gold ml-1 text-2xl">+</span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-4">
                {stat.label}
              </p>
              <p className="text-[13px] text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
