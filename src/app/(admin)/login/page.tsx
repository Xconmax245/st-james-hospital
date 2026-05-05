"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Eye, EyeOff, ShieldAlert } from "lucide-react";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-space-4">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1' fill='%23FFFFFF' /%3E%3C/svg%3E')]"></div>

      <div className="relative w-full max-w-md bg-white border border-white/10 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-navy-light p-space-5 text-center border-b border-navy/10">
          <div className="inline-flex items-center justify-center w-space-8 h-space-8 border border-gold/30 mb-space-3">
            <ShieldAlert className="text-gold" size={32} strokeWidth={1.5} />
          </div>
          <h2 className="text-white mb-space-1">Admin Access</h2>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-bold">Authorized Personnel Only</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-space-6 space-y-space-4">
          <div className="space-y-space-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-navy/50">Employee Identifier</label>
            <div className="relative">
              <User className="absolute left-space-2 top-1/2 -translate-y-1/2 text-navy/30" size={18} />
              <input
                type="text"
                placeholder="EMP-XXXXXX"
                className="w-full pl-space-6 pr-space-3 py-space-3 bg-surface/50 border border-navy/10 outline-none focus:border-gold transition-colors text-navy text-sm rounded-[2px]"
                required
              />
            </div>
          </div>

          <div className="space-y-space-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-navy/50">Security Key</label>
            <div className="relative">
              <Lock className="absolute left-space-2 top-1/2 -translate-y-1/2 text-navy/30" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                className="w-full pl-space-6 pr-space-7 py-space-3 bg-surface/50 border border-navy/10 outline-none focus:border-gold transition-colors text-navy text-sm rounded-[2px]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-space-2 top-1/2 -translate-y-1/2 text-navy/30 hover:text-navy transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full !py-space-4 mt-space-2">
            Verify & Secure Access
          </button>
          
          <div className="text-center">
            <a href="#" className="text-[11px] text-navy/40 hover:text-gold uppercase tracking-wider font-bold">Forgot Access Credentials?</a>
          </div>
        </form>

        {/* Footer Status */}
        <div className="p-space-4 bg-surface/30 border-t border-navy/5 flex items-center justify-center gap-space-2 text-navy/40">
           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
           <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Authentication Gateway Secure</span>
        </div>
      </div>
    </div>
  );
}
