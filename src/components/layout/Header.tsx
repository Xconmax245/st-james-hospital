"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, Phone } from "lucide-react";
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Top Utility Bar ── */}
      <div className="hidden lg:block bg-navy border-b border-white/5">
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
          isScrolled
            ? "bg-white shadow-[0_2px_20px_rgba(15,33,69,0.08)] border-navy/10 py-3"
            : "bg-white/95 backdrop-blur-md border-navy/5 py-4"
        )}
      >
        <div className="container">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">

            {/* ── Logo (Left) ── */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-4 shrink-0 group">
                {/* Brand Logo Image */}
                <div className="relative w-12 h-12 flex items-center justify-center shrink-0 overflow-hidden bg-white rounded-sm p-1 shadow-sm group-hover:shadow-md transition-all">
                  <Image src="/download.png" alt="NYU Langone Logo" fill className="object-contain p-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-gold font-bold leading-none mb-1">
                    NYU Langone
                  </span>
                  <span className="font-display text-navy text-[17px] leading-none tracking-tight">
                    Tisch Hospital
                  </span>
                </div>
              </Link>
            </div>

            {/* ── Desktop Nav (Center) ── */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 whitespace-nowrap",
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
            <div className="flex items-center justify-end gap-3">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="p-2 text-navy/50 hover:text-navy hover:bg-navy/5 rounded-sm transition-all duration-200"
              >
                <Search size={18} />
              </button>

              {/* CTA — Portal */}
              <Link
                href="/patient"
                className="hidden sm:flex items-center gap-2 bg-navy text-white text-[10px] font-bold uppercase tracking-[0.15em] px-5 py-2.5 hover:bg-gold hover:text-navy transition-all duration-200 border border-transparent hover:border-gold/30"
              >
                Patient Portal
              </Link>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden p-2 text-navy/70 hover:text-navy hover:bg-navy/5 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-navy/5",
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white px-4 pb-6 pt-2">
            {/* Nav Links */}
            <nav className="flex flex-col mb-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-3.5 border-b border-navy/5 text-[13px] font-bold uppercase tracking-[0.1em] transition-colors",
                      isActive ? "text-gold" : "text-navy hover:text-gold"
                    )}
                  >
                    {item.name}
                    {isActive && <span className="w-1.5 h-1.5 bg-gold rounded-full" />}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-3">
              <Link
                href="/patient"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary w-full justify-center py-3"
              >
                Patient Portal — Sign In
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full py-3 border border-navy/10 text-[10px] font-bold uppercase tracking-widest text-navy/60 hover:border-navy/30 hover:text-navy transition-all"
              >
                <Search size={14} />
                Search
              </button>
              <a
                href="tel:+12122635000"
                className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-navy/40 py-2"
              >
                <Phone size={12} className="text-gold" />
                (212) 263-5000
              </a>
            </div>
          </div>
        </div>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
