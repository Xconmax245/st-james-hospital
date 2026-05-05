"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, Command, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mockResults = [
  { category: "Services", title: "Emergency Department", href: "/services/ed" },
  { category: "Services", title: "Oncology & Cancer Care", href: "/services/oncology" },
  { category: "Patients", title: "Visiting Hours", href: "/patients/visiting" },
  { category: "Patients", title: "Parking & Directions", href: "/patients/parking" },
  { category: "Consultants", title: "Dr. Sarah O'Neill - Cardiology", href: "/consultants/1" },
  { category: "Wards", title: "St. John's Ward", href: "/wards/john" },
];

export const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const filteredResults = query 
    ? mockResults.filter(r => r.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/95 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            className="relative w-full max-w-2xl bg-white border border-white/20 shadow-2xl overflow-hidden"
          >
            <div className="p-space-4 border-b border-navy/10 flex items-center gap-space-3">
              <Search className="text-navy/30" size={20} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Find a service, ward, or consultant..."
                className="flex-1 text-lg font-sans outline-none text-navy placeholder:text-navy/20"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={onClose}
                className="p-space-1 hover:bg-navy/5 text-navy/40 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-space-2">
              {query === "" ? (
                <div className="py-space-6 text-center text-muted">
                  <Command className="mx-auto mb-space-3 opacity-10" size={48} strokeWidth={1} />
                  <p className="text-[13px] uppercase tracking-widest font-bold opacity-40">Start typing to search records</p>
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="space-y-space-1">
                  {filteredResults.map((result) => (
                    <a
                      key={result.title}
                      href={result.href}
                      className="flex items-center justify-between p-space-3 hover:bg-surface border border-transparent hover:border-navy/10 transition-all group"
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">
                          {result.category}
                        </span>
                        <span className="text-base font-medium text-navy">{result.title}</span>
                      </div>
                      <ArrowRight className="text-gold opacity-0 -translate-x-space-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" size={16} />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="py-space-6 text-center text-muted">
                  <p className="text-sm">No clinical records found for &quot;{query}&quot;</p>
                </div>
              )}
            </div>

            <div className="bg-surface p-space-3 border-t border-navy/10 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-navy/40">
              <div className="flex gap-space-4">
                <span className="flex items-center gap-1"><Command size={10} /> Navigate</span>
                <span className="flex items-center gap-1">Esc Exit</span>
              </div>
              <span className="text-gold">Institutional Search</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
