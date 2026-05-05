import Link from "next/link";
import { FacebookIcon, TwitterIcon, LinkedinIcon, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-space-8 pb-space-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 mb-space-8">
          {/* Column 1: Institutional */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-1">NYU Langone Health</span>
              <span className="font-display text-white text-2xl leading-none">Tisch Hospital</span>
            </div>
            <p className="text-[13px] text-white/50 leading-relaxed max-w-xs">
              One of the nation&apos;s premier academic medical centers, dedicated to excellence in patient care, education, and research.
            </p>
          </div>

          {/* Column 2: Patient Resources */}
          <div>
            <h3 className="text-white font-bold text-[12px] uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Resources</h3>
            <ul className="space-y-3 text-[13px] text-white/60">
              <li><Link href="/patient" className="hover:text-gold transition-colors">Patient Portal</Link></li>
              <li><Link href="/patients/payyourbill" className="hover:text-gold transition-colors">Pay Your Bill</Link></li>
              <li><Link href="/patients/visiting" className="hover:text-gold transition-colors">Visiting Information</Link></li>
              <li><Link href="/aboutus" className="hover:text-gold transition-colors">About NYU Langone</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-white font-bold text-[12px] uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Location</h3>
            <div className="text-[13px] text-white/60 space-y-2">
              <p>550 First Avenue</p>
              <p>New York, NY 10016</p>
              <div className="pt-2">
                <p className="text-white font-bold">General: (212) 263-5000</p>
                <p className="text-gold font-bold">Emergency: (212) 263-5550</p>
              </div>
            </div>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h3 className="text-white font-bold text-[12px] uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Social</h3>
            <div className="flex gap-3 mb-6">
              {[
                { icon: LinkedinIcon, href: "#" },
                { icon: FacebookIcon, href: "#" },
                { icon: TwitterIcon, href: "#" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
            <Link href="/careers" className="text-[11px] font-bold uppercase tracking-widest text-gold hover:text-white transition-colors flex items-center gap-2">
              Careers at NYU Langone <MessageSquare size={14} />
            </Link>
          </div>
        </div>

        {/* Institutional Partners */}
        <div className="border-t border-white/5 py-8 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-30">
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <span className="text-[11px] font-bold tracking-widest">NYU SCHOOL OF MEDICINE</span>
            <span className="text-[11px] font-bold tracking-widest">NYU HEALTH</span>
            <span className="text-[11px] font-bold tracking-widest">TISCH</span>
          </div>
          <div className="text-[10px] font-bold tracking-widest text-white/50">
            A MEMBER OF NYU LANGONE HEALTH
          </div>
        </div>

        {/* Final Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 font-bold uppercase tracking-widest">
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/disclaimer" className="hover:text-white transition-colors">Legal</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
          <p>© 2026 NYU Langone Health. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
