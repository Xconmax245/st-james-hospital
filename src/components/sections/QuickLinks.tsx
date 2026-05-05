"use client";

import { 
  MapPin, 
  UserSearch, 
  HeartHandshake, 
  Building2, 
  Briefcase, 
  Droplets, 
  Receipt,
  CreditCard 
} from "lucide-react";

const links = [
  { icon: MapPin, label: "Get directions", href: "/aboutus/gettingtothehospital" },
  { icon: CreditCard, label: "Patient portal", href: "/patient" },
  { icon: UserSearch, label: "Find a doctor", href: "/consultants" },
  { icon: HeartHandshake, label: "Make a donation", href: "https://nyulangone.org/give" },
  { icon: Building2, label: "Find a location", href: "/services" },
  { icon: Briefcase, label: "View job openings", href: "/careers" },
  { icon: Droplets, label: "Lab services", href: "/services/phlebotomybloodtesting" },
  { icon: Receipt, label: "Pay your bill", href: "/patients/payyourbill" },
];

export default function QuickLinks() {
  return (
    <section className="bg-warm-white">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-2">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="quick-tile flex flex-col items-center justify-center p-space-4 bg-white border border-navy/10 min-h-[140px] group text-center"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <div className="mb-space-3 text-navy group-hover:text-gold transition-colors duration-300">
                <link.icon size={28} strokeWidth={1.5} />
              </div>
              <span className="font-sans font-medium text-navy text-[12px] uppercase tracking-widest leading-tight">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
