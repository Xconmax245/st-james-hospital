"use client";

import { useState } from "react";
import { Car, Bus, Train, Footprints, Truck, Navigation, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const transportModes = [
  { id: "car", icon: Car, label: "Car" },
  { id: "bus", icon: Bus, label: "Bus" },
  { id: "subway", icon: Train, label: "Subway" },
  { id: "walk", icon: Footprints, label: "Walk" },
  { id: "taxi", icon: Truck, label: "Taxi" },
];

export default function DirectionsWidget() {
  const [activeMode, setActiveMode] = useState("car");

  return (
    <section className="surface-texture py-16 sm:py-24">
      <div className="container">
        <div className="bg-white border border-navy/10 flex flex-col lg:flex-row overflow-hidden shadow-sm">
          {/* Left: Info & Controls */}
          <div className="p-6 sm:p-10 lg:w-1/3 flex flex-col justify-between">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-navy text-3xl sm:text-4xl mb-4 font-display">Getting to Tisch Hospital</h2>
              <p className="text-muted mb-8 leading-relaxed text-sm sm:text-base">
                Choose your mode of transport to find the best route to NYU Langone Tisch Hospital at 550 First Avenue.
              </p>
              
              <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-3 gap-2 sm:gap-3 mb-8">
                {transportModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(mode.id)}
                    className={cn(
                      "flex flex-col items-center gap-2 p-3 sm:p-4 border transition-all duration-200",
                      activeMode === mode.id 
                        ? "border-navy bg-navy text-white" 
                        : "border-navy/10 hover:border-navy/30 bg-warm-surface/50"
                    )}
                  >
                    <mode.icon size={20} className="sm:w-6 sm:h-6" />
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest hidden sm:block">{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=NYU+Langone+Tisch+Hospital&travelmode=${activeMode}`, '_blank')}
              className="btn btn-primary w-full gap-3 bg-navy text-white hover:bg-gold hover:text-navy transition-all py-4 text-[11px] font-bold uppercase tracking-widest"
            >
              <Navigation size={18} />
              Google Maps Directions
            </button>
          </div>

          {/* Right: Map Placeholder (NYC - Tisch Hospital Coords) */}
          <div className="lg:w-2/3 h-[300px] sm:h-[400px] lg:h-auto min-h-[300px] lg:min-h-[450px] bg-surface relative group overflow-hidden border-t lg:border-t-0 lg:border-l border-navy/10">
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s+navy(-73.9748,40.7419)/-73.9748,40.7419,15,0/1200x800?access_token=pk.eyJ1IjoibW9ja3VzZXIiLCJhIjoiY2s1bmJ4Z3J5MGJyeTNscWp2eGZzYnd2ayJ9.placeholder')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors"></div>
            
            {/* Marker Placeholder */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-navy animate-ping opacity-10"></div>
                  <div className="relative bg-white p-2 border border-navy/20">
                    <div className="bg-navy p-2 text-white">
                      <Building2 size={24} />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
