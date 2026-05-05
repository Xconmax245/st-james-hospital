"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, Phone, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchModal } from "./SearchModal";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Research", href: "/research" },
  { name: "Careers", href: "/careers" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Top Utility Bar (Hidden on Mobile/Tablet) ── */}
      <div className="hidden xl:block bg-navy border-b border-white/5">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              NYU Langone Health
            </span>
            <div className="h-3 w-px bg-white/10" />
            <a
              href="tel:+12122635000"
              className="flex items-center gap-1.5 text-gold text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              <Phone size={10} />
              (212) 263-5000
            </a>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/30">
            <Link href="/patient/PT-256Z-005" className="hover:text-gold transition-colors">
              Patient Portal
            </Link>
            <div className="h-3 w-px bg-white/10" />
            <Link href="/patient" className="hover:text-gold transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header
        className={cn(
          "sticky top-0 w-full z-50 transition-all duration-300 border-b",
          isScrolled || mobileMenuOpen
            ? "bg-white shadow-[0_2px_20px_rgba(15,33,69,0.08)] border-navy/10 py-3"
            : "bg-white/95 backdrop-blur-md border-navy/5 py-4"
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6">

            {/* ── Logo (Left) ── */}
            <div className="flex items-center shrink-0">
              <Link href="/" className="flex items-center gap-2 sm:gap-4 group">
                {/* Brand Logo Image */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 overflow-hidden bg-white rounded-sm p-1 shadow-sm group-hover:shadow-md transition-all">
                  <Image src="/download.png" alt="NYU Langone Logo" fill className="object-contain p-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.3em] text-gold font-bold leading-none mb-1">
                    NYU Langone
                  </span>
                  <span className="font-display text-navy text-[13px] sm:text-[17px] leading-none tracking-tight">
                    Tisch Hospital
                  </span>
                </div>
              </Link>
            </div>

            {/* ── Desktop Nav (Center) ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 whitespace-nowrap",
                      isActive
                        ? "text-gold"
                        : "text-navy/60 hover:text-navy"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── Right Actions (Right) ── */}
            <div className="flex items-center justify-end gap-2 sm:gap-3">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="p-2 text-navy/50 hover:text-navy hover:bg-navy/5 rounded-sm transition-all duration-200"
              >
                <Search size={18} />
              </button>

              {/* CTA — Portal (Hidden on Mobile) */}
              <Link
                href="/patient"
                className="hidden sm:flex items-center gap-2 bg-navy text-white text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.15em] px-4 xl:px-5 py-2.5 hover:bg-gold hover:text-navy transition-all duration-200 border border-transparent hover:border-gold/30"
              >
                Patient Portal
              </Link>

              {/* Mobile Hamburger */}
              <button
                className="lg:hidden p-2 text-navy/70 hover:text-navy hover:bg-navy/5 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile Menu (Overlay) ── */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 top-[65px] sm:top-[73px] bg-white z-[40] transition-all duration-500 ease-in-out",
            mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          )}
        >
          <div className="container py-8 h-full flex flex-col">
            {/* Nav Links */}
            <nav className="flex flex-col gap-1 mb-8 overflow-y-auto">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ transitionDelay: `${i * 50}ms` }}
                    className={cn(
                      "flex items-center justify-between p-4 border-b border-navy/5 text-lg sm:text-xl font-display tracking-tight transition-all duration-500",
                      mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
                      isActive ? "text-gold bg-navy/5" : "text-navy hover:text-gold"
                    )}
                  >
                    {item.name}
                    {isActive ? (
                       <div className="w-2 h-2 bg-gold rounded-full" />
                    ) : (
                       <ChevronRight size={18} className="text-navy/20" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-auto flex flex-col gap-4 pb-12">
              <Link
                href="/patient"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-navy text-white w-full py-5 text-center text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all"
              >
                Patient Portal — Sign In
              </Link>
              <div className="flex flex-col items-center gap-4 pt-4">
                 <a
                  href="tel:+12122635000"
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-navy/40"
                >
                  <Phone size={14} className="text-gold" />
                  (212) 263-5000
                </a>
                <span className="text-[8px] uppercase tracking-[0.5em] text-navy/20 font-bold">NYU Langone Health</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
