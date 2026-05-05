"use client";

import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Staff {
  name: string;
  role: "Doctor" | "Nurse" | "Pharmacist" | "Specialist";
  responsibility: string;
  experience: string;
  onDuty: boolean;
  dutyStatus?: string;
}

interface PersonnelGridProps {
  staff: Staff[];
}

const roleColors = {
  Doctor:     "bg-blue-50 text-blue-700 border-blue-200",
  Nurse:      "bg-green-50 text-green-700 border-green-200",
  Pharmacist: "bg-purple-50 text-purple-700 border-purple-200",
  Specialist: "bg-amber-50 text-amber-700 border-amber-200",
};

export default function PersonnelGrid({ staff }: PersonnelGridProps) {
  if (staff.length === 0) {
    return (
      <section
        id="personnel"
        className="bg-white border border-navy/10 p-8 text-center print-white-bg"
      >
        <div className="flex flex-col items-center gap-3 opacity-30">
          <User size={48} strokeWidth={1} />
          <p className="text-[12px] font-bold uppercase tracking-[0.2em]">
            No staff assigned yet
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="personnel">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-navy uppercase text-[10px] font-bold tracking-[0.25em] shrink-0">
          Care Team
        </h3>
        <div className="flex-1 h-[1px] bg-navy/10" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {staff.map((person) => {
          const initials = person.name
            .split(" ")
            .map((n) => n[0])
            .join("");
          return (
            <div
              key={person.name}
              className="bg-white border-t-2 border-t-gold/40 border border-navy/10 p-5 flex items-start gap-4 print-white-bg group hover:border-navy/20 hover:shadow-sm transition-all duration-200"
            >
              {/* Avatar */}
              <div className="w-12 h-12 bg-navy text-gold font-display font-bold text-lg flex items-center justify-center shrink-0">
                {initials}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-navy font-display text-base tracking-tight truncate">
                    {person.name}
                  </h4>
                  <span
                    className={cn(
                      "text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 border shrink-0",
                      roleColors[person.role]
                    )}
                  >
                    {person.role}
                  </span>
                </div>

                <p className="text-[12px] text-navy/70 leading-relaxed mb-3">
                  {person.responsibility}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-navy/5">
                  <span className="text-[9px] text-navy/40 font-bold uppercase tracking-[0.2em]">
                    {person.experience}
                  </span>

                  {person.onDuty && (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-gold/10">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                      <span className="text-[8px] font-bold text-navy uppercase tracking-[0.1em]">
                        {person.dutyStatus || "On Duty Today"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
