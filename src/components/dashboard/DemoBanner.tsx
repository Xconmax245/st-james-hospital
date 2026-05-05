"use client";

import { Info } from "lucide-react";
import Link from "next/link";

interface DemoBannerProps {
  patientId: string;
}

export default function DemoBanner({ patientId }: DemoBannerProps) {
  return (
    <div className="demo-banner fixed top-0 left-0 right-0 z-[70] bg-navy text-gold h-[32px] flex items-center justify-between px-space-6 border-b border-gold/20 shadow-lg">
      <div className="flex items-center gap-space-3 font-mono text-[9px] font-bold tracking-[0.2em] uppercase">
        <Info size={14} className="animate-pulse" />
        <span>CareView Sandbox Mode <span className="opacity-40 px-2">|</span> {patientId}</span>
      </div>
      
      <Link 
        href="/patient" 
        className="text-[8px] font-bold uppercase tracking-[0.1em] border border-gold/30 px-3 py-1 hover:bg-gold hover:text-navy transition-all"
      >
        Authenticate ID
      </Link>
    </div>
  );
}
