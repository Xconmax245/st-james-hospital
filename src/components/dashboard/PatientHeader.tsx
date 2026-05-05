"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  label: string;
  date: string;
}

interface PatientHeaderProps {
  name: string;
  status: string;
  admissionDate: string;
  reason: string;
  estDischarge?: string;
  currentStep: number; // 0–4
  timeline?: TimelineStep[];
}

const defaultSteps = [
  { label: "Admitted", date: "May 01" },
  { label: "Diagnosed", date: "May 02" },
  { label: "Treatment", date: "May 03" },
  { label: "Recovering", date: "Ongoing" },
  { label: "Discharged", date: "Est. May 12" },
];

export default function PatientHeader({
  name,
  status,
  admissionDate,
  reason,
  estDischarge,
  currentStep,
  timeline,
}: PatientHeaderProps) {
  const steps = timeline || defaultSteps;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const getStatusColor = (s: string) => {
    switch (s.toLowerCase()) {
      case "under care":  return "bg-navy text-white";
      case "recovering":
      case "post-surgical monitoring":  return "bg-gold text-navy";
      case "scheduled":   return "bg-blue-100 text-blue-800";
      case "discharged":  return "bg-green-100 text-green-800";
      default:            return "bg-[#F4F3EE] text-[#6B6B6B]";
    }
  };

  return (
    <section
      id="overview"
      className="bg-white border-l-4 border-l-gold shadow-sm overflow-hidden print-white-bg"
    >
      <div className="p-5 md:p-7">
        {/* Top Row: Avatar + Info + Meta */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left: Avatar + Name */}
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-amber-glow flex items-center justify-center text-navy font-display text-3xl md:text-4xl shadow-lg shrink-0">
              {initials}
            </div>

            <div className="space-y-1.5">
              <div
                className={cn(
                  "inline-block px-3 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em]",
                  getStatusColor(status)
                )}
              >
                {status}
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-navy tracking-tight leading-none">
                {name}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-[#6B6B6B] text-[10px] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-gold" />
                  ADMITTED: {admissionDate}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Reason + Discharge */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 pt-5 lg:pt-0 border-t lg:border-t-0 lg:border-l border-navy/5 lg:pl-7 shrink-0">
            <div>
              <p className="text-[9px] font-bold text-navy/40 uppercase tracking-[0.2em] mb-1">
                Reason for Admission
              </p>
              <p className="text-navy font-display text-[14px] font-bold uppercase tracking-wider leading-snug">
                {reason}
              </p>
            </div>

            {estDischarge && (
              <div>
                <p className="text-[9px] font-bold text-navy/40 uppercase tracking-[0.2em] mb-1">
                  Estimated Discharge
                </p>
                <p className="text-gold font-display text-[14px] font-bold uppercase tracking-wider">
                  {estDischarge}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Timeline — screen only */}
        <div className="mt-8 no-print">
          {/* Track + Dots */}
          <div className="relative flex items-center h-6">
            {/* BG rail */}
            <div className="absolute inset-x-0 top-1/2 h-[2px] bg-navy/5 -translate-y-1/2" />
            {/* Progress rail */}
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${(currentStep / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 top-1/2 h-[3px] bg-gold -translate-y-1/2 z-10"
            />
            {/* Dots row */}
            <div className="relative z-20 flex justify-between w-full">
              {steps.map((step, i) => (
                <div
                  key={step.label}
                  className="flex items-center justify-center w-5"
                >
                  <div
                    className={cn(
                      "w-4 h-4 transition-all duration-700",
                      i <= currentStep
                        ? "bg-gold rotate-45"
                        : "bg-white border-2 border-navy/10",
                      i === currentStep &&
                        "animate-pulse shadow-[0_0_16px_rgba(245,192,0,0.55)]"
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Labels row — separate from dots, no absolute positioning */}
          <div className="flex justify-between mt-3">
            {steps.map((step, i) => (
              <div key={step.label} className="text-center" style={{ width: "20%" }}>
                <p
                  className={cn(
                    "text-[8px] font-bold uppercase tracking-[0.12em] leading-tight",
                    i <= currentStep ? "text-navy" : "text-navy/20"
                  )}
                >
                  {step.label}
                </p>
                <p className="text-[7px] font-bold text-[#6B6B6B] uppercase tracking-wider mt-0.5">
                  {step.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Print Timeline Alternative */}
        <div className="hidden print:block mt-4 border-t pt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-navy mb-2">
            Care Status
          </p>
          <ul className="space-y-1">
            {steps.map((step, i) => (
              <li key={step.label} className="text-[10px] flex gap-4">
                <span className="w-24 opacity-60">{step.label}</span>
                <span className={cn(i <= currentStep ? "font-bold" : "opacity-30")}>
                  {step.date} {i === currentStep && "(Current Phase)"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
