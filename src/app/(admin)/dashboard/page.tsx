"use client";

import { useState } from "react";
import { 
  Users, 
  UserPlus, 
  Activity, 
  Settings, 
  LogOut, 
  Search, 
  MoreVertical,
  Bell,
  LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";

const patients = [
  { id: "NYU-001", name: "John Doe", ward: "Kimmel Pavillion", status: "Inpatient", admission: "2026-05-01" },
  { id: "NYU-002", name: "Jane Smith", ward: "Cardiology", status: "Observation", admission: "2026-05-03" },
  { id: "NYU-003", name: "Robert Brown", ward: "Emergency", status: "Critical", admission: "2026-05-04" },
  { id: "NYU-004", name: "Emily White", ward: "Tisch-6", status: "Discharged", admission: "2026-04-28" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("patients");

  return (
    <div className="flex h-screen bg-surface overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-navy text-white flex flex-col shrink-0 border-r border-white/5">
        <div className="p-space-4 border-b border-white/5 flex items-center gap-space-2">
          <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold font-display font-bold">NY</div>
          <div>
            <p className="text-white font-display text-lg leading-tight tracking-tight">Admin Console</p>
            <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-bold">NYU Langone Tisch Hospital</p>
          </div>
        </div>

        <nav className="flex-1 p-space-3 space-y-space-1">
          {[
            { id: "dashboard", icon: LayoutDashboard, label: "Overview" },
            { id: "patients", icon: Users, label: "Patient Registry" },
            { id: "staff", icon: Activity, label: "Staff Management" },
            { id: "settings", icon: Settings, label: "System Config" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-space-3 px-space-3 py-space-3 text-[13px] font-medium transition-all group",
                activeTab === item.id 
                  ? "bg-gold text-navy" 
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon size={18} className={cn(activeTab === item.id ? "text-navy" : "text-gold")} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-space-4 border-t border-white/5">
          <button className="flex items-center gap-space-3 text-white/40 hover:text-alert transition-colors text-[11px] font-bold uppercase tracking-widest w-full px-space-2">
            <LogOut size={16} />
            Secure Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-navy/10 flex items-center justify-between px-space-5 shrink-0">
          <div className="flex items-center gap-space-2 bg-surface border border-navy/5 px-space-3 py-space-2 w-96">
            <Search className="text-navy/20" size={16} />
            <input 
              type="text" 
              placeholder="Search registry..." 
              className="bg-transparent outline-none text-sm w-full text-navy placeholder:text-navy/20"
            />
          </div>
          <div className="flex items-center gap-space-4">
            <button className="relative text-navy/40 hover:text-navy transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-alert border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-space-3 border-l pl-space-4 border-navy/5">
               <div className="text-right">
                  <p className="text-[11px] font-bold text-navy uppercase tracking-wider">Admin User</p>
                  <p className="text-[9px] text-muted uppercase tracking-[0.1em]">Security Level 5</p>
               </div>
               <div className="w-10 h-10 bg-navy text-white flex items-center justify-center font-bold text-xs">AD</div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-space-6 overflow-y-auto">
          <div className="flex justify-between items-end mb-space-5">
            <div>
              <h2 className="text-navy mb-space-1">Patient Registry</h2>
              <p className="text-muted text-[10px] uppercase tracking-[0.2em] font-bold">Managing {patients.length} active clinical records</p>
            </div>
            <button className="btn btn-primary gap-space-2 !py-2.5 !px-5 text-sm">
              <UserPlus size={16} />
              Register Patient
            </button>
          </div>

          <div className="bg-white border border-navy/10 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-navy/10">
                  <th className="p-space-3 text-[10px] font-bold uppercase tracking-widest text-navy/40">Identifier</th>
                  <th className="p-space-3 text-[10px] font-bold uppercase tracking-widest text-navy/40">Patient Name</th>
                  <th className="p-space-3 text-[10px] font-bold uppercase tracking-widest text-navy/40">Department</th>
                  <th className="p-space-3 text-[10px] font-bold uppercase tracking-widest text-navy/40">Status</th>
                  <th className="p-space-3 text-[10px] font-bold uppercase tracking-widest text-navy/40">Entry Date</th>
                  <th className="p-space-3 text-[10px] font-bold uppercase tracking-widest text-navy/40">Manage</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((p) => (
                  <tr key={p.id} className="border-b border-navy/5 last:border-0 hover:bg-surface/50 transition-colors">
                    <td className="p-space-3 text-[12px] font-mono text-navy/40">{p.id}</td>
                    <td className="p-space-3 text-sm font-bold text-navy">{p.name}</td>
                    <td className="p-space-3 text-[12px] text-muted uppercase tracking-wider">{p.ward}</td>
                    <td className="p-space-3">
                      <span className={cn(
                        "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 border",
                        p.status === "Critical" ? "bg-alert/5 border-alert/20 text-alert" : "bg-green-50 border-green-200 text-green-700"
                      )}>
                        {p.status}
                      </span>
                    </td>
                    <td className="p-space-3 text-[12px] text-muted">{p.admission}</td>
                    <td className="p-space-3">
                      <button className="p-space-1 hover:bg-navy/5 text-navy/30 transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
