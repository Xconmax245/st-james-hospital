"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PatientLanding() {
  const [patientId, setPatientId] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleDemoAccess = () => {
    router.push("/patient/PT-256Z-005");
  };

  const handleIdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Allow alphanumeric IDs like PT-256Z-005
    const regex = /^PT-[A-Z0-9-]{4,10}$/i;
    if (regex.test(patientId)) {
      router.push(`/patient/${patientId.toUpperCase()}`);
    } else {
      setError("Please enter a valid Patient ID (e.g., PT-256Z-005)");
    }
  };

  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center p-space-4 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1' fill='%23FFFFFF' /%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 w-full max-w-xl text-center space-y-space-8">
        {/* Branding */}
        <div className="space-y-space-2" data-aos="fade-up">
          <span className="text-gold font-mono text-[10px] uppercase tracking-[0.4em] font-bold">NYU Langone Health</span>
          <h1 className="text-white font-display text-5xl md:text-6xl tracking-tight">CareView</h1>
          <p className="text-white/60 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Patient Transparency Dashboard. Secure, read-only access to your clinical status and care team.
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-4" data-aos="fade-up" data-aos-delay="100">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group bg-white p-space-6 border border-white/10 hover:border-gold transition-all text-left flex flex-col justify-between min-h-[180px]"
          >
            <User className="text-navy mb-space-4" size={32} />
            <div>
              <span className="text-navy font-bold text-lg block mb-1">Enter Patient ID</span>
              <span className="text-navy/40 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                Secure Access <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>

          <button 
            onClick={handleDemoAccess}
            className="group bg-navy-light p-space-6 border border-white/5 hover:border-gold transition-all text-left flex flex-col justify-between min-h-[180px]"
          >
            <ShieldCheck className="text-gold mb-space-4" size={32} />
            <div>
              <span className="text-white font-bold text-lg block mb-1">Marcella Sachs Demo</span>
              <span className="text-gold/60 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                Code: PT-256Z-005 <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>
        </div>

        {/* ID Entry Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-space-4">
            <div 
              className="absolute inset-0 bg-navy/90 backdrop-blur-sm" 
              onClick={() => setIsModalOpen(false)}
            />
            
            <div className="relative bg-white w-full max-w-md p-space-8 shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="mb-space-6 text-left">
                <div className="w-12 h-12 bg-surface flex items-center justify-center text-navy mb-space-4">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-navy text-2xl font-display mb-2">Patient Access</h2>
                <p className="text-muted text-sm">Enter your unique CareView ID provided during admission.</p>
              </div>

              <form onSubmit={handleIdSubmit} className="space-y-space-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-navy/40">Patient Identifier</label>
                  <input 
                    type="text" 
                    placeholder="PT-XXXX"
                    className={cn(
                      "w-full bg-surface border border-navy/10 p-space-3 font-mono text-lg text-navy uppercase tracking-widest outline-none transition-all",
                      error ? "border-alert" : "focus:border-gold"
                    )}
                    value={patientId}
                    onChange={(e) => {
                      setPatientId(e.target.value);
                      setError("");
                    }}
                    autoFocus
                  />
                  {error && <p className="text-alert text-[10px] font-bold uppercase tracking-wider">{error}</p>}
                </div>

                <button 
                  type="submit"
                  className="btn btn-primary w-full !py-space-4"
                >
                  Verify Access
                </button>
                
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full text-[10px] font-bold uppercase tracking-widest text-navy/40 py-2 hover:text-navy transition-colors"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-space-8 opacity-40" data-aos="fade-up" data-aos-delay="200">
          <p className="text-[9px] text-white uppercase tracking-[0.3em] font-bold">
            Authorized Patient Access Only · Encrypted Data Transmission
          </p>
        </div>
      </div>
    </div>
  );
}
