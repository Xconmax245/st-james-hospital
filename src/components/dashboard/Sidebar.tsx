"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FileText,
  Banknote,
  Printer,
  Menu,
  X,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", href: "#overview", icon: LayoutDashboard },
  { name: "Care Team", href: "#personnel", icon: Users },
  { name: "Doctor's Notes", href: "#notes", icon: FileText },
  { name: "Billing", href: "#billing", icon: Banknote },
  { name: "Location", href: "#location", icon: MapPin },
];

interface SidebarProps {
  patientName: string;
  patientId: string;
}

export default function Sidebar({ patientName, patientId }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const handlePrint = () => window.print();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Toggle — sits in the page flow area, below header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "lg:hidden fixed z-[60] p-2.5 bg-navy text-white shadow-lg rounded-sm transition-all",
          // top offset: mobile header ~60px + 8px gap
          "top-[68px] left-4"
        )}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Sidebar panel
          top offset breakdown:
          - Mobile: sticky header ≈ 60px
          - lg+: utility bar (32px) + main header (64px) = 96px
          We use CSS calc with a custom property set via the header's measured height,
          but since we can't do that statically, we use safe estimates.
      */}
      <aside
        className={cn(
          "dashboard-sidebar fixed left-0 bottom-0 z-40 w-[240px] bg-navy text-white flex flex-col",
          "transition-transform duration-300 ease-in-out lg:translate-x-0",
          "border-r border-white/5 shadow-2xl",
          // top: mobile ~60px, lg: utility(~32px) + nav(~64px) = ~96px
          "top-[60px] lg:top-[96px]",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Branding */}
        <div className="px-5 py-4 border-b border-white/5 bg-white/[0.02] shrink-0">
          <Link href="/" className="block">
            <span className="text-gold text-[8px] font-bold uppercase tracking-[0.3em] block mb-1">
              NYU Langone
            </span>
            <span className="text-white font-display text-xl leading-none tracking-tight block">
              CareView
            </span>
            <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em] mt-0.5 block">
              Patient Console
            </span>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 py-2 overflow-y-auto">
          <ul>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-5 py-3.5",
                      "text-[10px] font-bold uppercase tracking-[0.15em]",
                      "border-l-[3px] transition-all duration-200",
                      isActive
                        ? "border-gold bg-white/[0.07] text-gold"
                        : "border-transparent text-white/40 hover:text-white/80 hover:bg-white/[0.03] hover:border-white/10"
                    )}
                  >
                    <item.icon
                      size={15}
                      className={cn(
                        "shrink-0 transition-colors",
                        isActive ? "text-gold" : "text-white/20"
                      )}
                    />
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom: Patient ID + Print */}
        <div className="px-4 py-4 border-t border-white/5 shrink-0 bg-black/10">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 w-full py-2.5 px-3 mb-4 border border-white/10 hover:bg-gold hover:text-navy hover:border-gold transition-all text-[9px] font-bold uppercase tracking-widest text-white/60"
          >
            <Printer size={13} />
            Print Summary
          </button>

          <div className="space-y-0.5 min-w-0">
            <p className="text-white font-display text-sm leading-tight truncate">
              {patientName}
            </p>
            <p className="text-gold text-[8px] font-bold tracking-widest uppercase">
              {patientId}
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-navy/70 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
