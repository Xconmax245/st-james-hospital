"use client";

import PatientHeader from "@/components/dashboard/PatientHeader";
import PersonnelGrid from "@/components/dashboard/PersonnelGrid";
import NotesFeed from "@/components/dashboard/NotesFeed";
import BillingAccordion from "@/components/dashboard/BillingAccordion";
import { MapPin, Navigation } from "lucide-react";

const DEMO_DATA = {
  id: "PT-256Z-005",
  name: "Marcella Sachs",
  status: "Discharged",
  admissionDate: "19 APR 2026",
  reason: "Advanced Orthopedic Reconstruction (Multi-fragmentary Leg Fracture)",
  estDischarge: "30 APR 2026",
  currentStep: 4,
  timeline: [
    { label: "Admitted", date: "Apr 19" },
    { label: "Diagnosed", date: "Apr 20" },
    { label: "Treatment", date: "Apr 21" },
    { label: "Recovering", date: "Completed" },
    { label: "Discharged", date: "Apr 30" },
  ],
  staff: [
    { 
      name: "Solomon .O", 
      role: "Doctor" as const, 
      responsibility: "Lead Attending Physician — Orthopedic Surgery", 
      experience: "15 Years Exp.", 
      onDuty: true 
    },
    { 
      name: "Eleazar .A", 
      role: "Nurse" as const, 
      responsibility: "Home-based redressing and post-op care duties", 
      experience: "9 Years Exp.", 
      onDuty: true,
      dutyStatus: "Home Service"
    },
    { 
      name: "Daniel .N", 
      role: "Pharmacist" as const, 
      responsibility: "Clinical Medication Management", 
      experience: "11 Years Exp.", 
      onDuty: false 
    },
    { 
      name: "Dr. Robert Wilson", 
      role: "Specialist" as const, 
      responsibility: "Physical Rehabilitation Lead", 
      experience: "12 Years Exp.", 
      onDuty: true 
    },
  ],
  notes: [
    {
      author: "Solomon .O",
      role: "Lead Physician",
      date: "30 APR · 09:15 AM",
      content: "Final clinical assessment complete. Patient has met all discharge criteria. The leg fracture is well-stabilized, and the patient is proficient in assisted mobilization. Discharge to home with home-based PT follow-up confirmed.",
      pinned: true
    },
    {
      author: "Eleazar .A",
      role: "Primary Nurse",
      date: "29 APR · 04:30 PM",
      content: "Discharge education completed with patient and family. Wound site is healing excellently with no drainage. Mobility is stable using a cane.",
    },
    {
      author: "Solomon .O",
      role: "Lead Physician",
      date: "21 APR · 08:00 PM",
      content: "Complex fracture stabilization completed without complications. Patient transferred to post-surgical recovery unit. Neurovascular status remains intact.",
    }
  ],
  billing: [
    { 
      description: "Orthopedic Consultation", 
      category: "Professional Services", 
      amount: 1250, 
      status: "Paid" as const, 
      date: "19 APR 2026" 
    },
    { 
      description: "Surgical Suite - Level 6", 
      category: "Facility Fees", 
      amount: 42000, 
      status: "Paid" as const, 
      date: "21 APR 2026" 
    },
    { 
      description: "Pharmacy & Clinical Supplies", 
      category: "Medical Supplies", 
      amount: 3350, 
      status: "Paid" as const, 
      date: "28 APR 2026" 
    },
    { 
      description: "Post-Operative Inpatient Care", 
      category: "Accommodation", 
      amount: 15000, 
      status: "Pending" as const, 
      date: "15 MAY 2026" 
    },
  ]
};

export default function PatientPage({ params }: { params: { id: string } }) {
  const isDemo = params.id === "PT-256Z-005" || params.id === "PT-DEMO-01";
  
  // Use demo data or default mock
  const data = isDemo ? DEMO_DATA : {
    ...DEMO_DATA,
    id: params.id,
    name: "Patient Record",
    status: "Under Care",
    staff: [],
    notes: [],
    billing: []
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-700 font-sans">


      <PatientHeader
        name={data.name}
        status={data.status}
        admissionDate={data.admissionDate}
        reason={data.reason}
        estDischarge={data.estDischarge}
        currentStep={data.currentStep}
        timeline={data.timeline}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <PersonnelGrid staff={data.staff} />
          <NotesFeed notes={data.notes} />
          
          {/* Facility Location — Professionalized Alignment */}
          <section id="location" className="bg-white border border-navy/10 overflow-hidden shadow-sm">
            <div className="border-b border-navy/5 px-6 py-4 flex items-center justify-between bg-[#F4F3EE]/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gold/10 rounded-full">
                  <MapPin size={16} className="text-gold" />
                </div>
                <h3 className="text-navy uppercase text-[10px] font-bold tracking-[0.2em]">Facility Location</h3>
              </div>
              <span className="text-[9px] text-navy/40 font-bold uppercase tracking-widest border-l border-navy/10 pl-4">NYU Langone Health</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: Info */}
              <div className="p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-navy/5">
                <div>
                  <div className="mb-6">
                    <p className="text-gold text-[9px] font-bold uppercase tracking-[0.3em] mb-2">Tisch Hospital</p>
                    <h4 className="text-navy font-display text-2xl leading-tight">Main Campus & Emergency Services</h4>
                  </div>
                  
                  <div className="space-y-1 mb-8">
                    <p className="text-navy/70 text-sm leading-relaxed font-sans">550 First Avenue</p>
                    <p className="text-navy/70 text-sm leading-relaxed font-sans">New York, NY 10016</p>
                    <p className="text-navy/70 text-sm leading-relaxed font-bold font-sans">United States</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-green-800 uppercase tracking-wider font-sans">Emergency Dept Open 24/7</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-100 rounded-sm">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider font-sans">Main Entrance Valet Available</span>
                  </div>
                </div>
              </div>
              
              {/* Right: Map */}
              <div className="relative aspect-square md:aspect-auto min-h-[350px] group overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s-hospital+0F2145(-73.9740,40.7419)/-73.9740,40.7419,15,0/800x800?access_token=pk.eyJ1IjoibW9ja3VzZXIiLCJhIjoiY2s1bmJ4Z3J5MGJyeTNscWp2eGZzYnd2ayJ9.placeholder')" }}
                />
                <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors" />
                
                {/* Float Overlay */}
                <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                   <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=NYU+Langone+Tisch+Hospital+550+First+Avenue+New+York+NY+10016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy text-white px-5 py-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest shadow-2xl hover:bg-gold hover:text-navy transition-all transform hover:-translate-y-1"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="xl:col-span-1">
          <BillingAccordion items={data.billing} />
        </div>
      </div>
    </div>
  );
}
