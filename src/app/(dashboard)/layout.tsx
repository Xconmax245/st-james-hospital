"use client";

import { useParams } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const id = params?.id as string;

  const isDemo = id === "PT-256Z-005" || id === "PT-DEMO-01";
  const patientName = isDemo ? "Marcella Sachs" : "Patient Record";

  return (
    <div className="min-h-screen bg-[#F4F3EE] selection:bg-gold selection:text-navy">
      {/*
        Header is now STICKY (in normal flow), so the main content
        automatically starts below it — no padding-top needed on main.
        The sidebar is still FIXED and uses top offsets set in Sidebar.tsx.
      */}
      <Header />

      {/* Sidebar — fixed, positioned via internal top offsets */}
      <Sidebar patientName={patientName} patientId={id} />

      {/* Main Content — offset only for sidebar on lg+ */}
      <main
        className={cn(
          "transition-all duration-300 min-h-[calc(100vh-64px)] flex flex-col",
          "lg:ml-[240px]"
        )}
      >
        {/* Print-only Header */}
        <div className="print-header px-8 py-5 bg-white border-b-2 border-navy">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-navy text-2xl font-display font-bold tracking-tight">
                NYU LANGONE · TISCH HOSPITAL
              </h1>
              <p className="text-gold text-[10px] font-bold tracking-[0.3em] mt-1 uppercase">
                CareView · Patient Record
              </p>
            </div>
            <div className="text-right text-[10px] font-bold uppercase tracking-widest text-navy/40">
              <p>Generated: {new Date().toLocaleDateString("en-US")}</p>
              <p>Record ID: {id}</p>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 w-full max-w-[1400px] mx-auto">
          <div className="dashboard-content">{children}</div>
        </div>

        {/* Print-only Footer */}
        <div className="print-footer border-t border-navy/10 mt-auto py-4 text-center">
          <p className="font-bold text-[10px] tracking-widest uppercase text-navy/60">
            CONFIDENTIAL — FOR PATIENT USE ONLY
          </p>
          <p className="text-[9px] text-navy/30 uppercase mt-1">
            NYU Langone Tisch Hospital · 550 First Ave · New York, NY 10016
          </p>
        </div>
      </main>
    </div>
  );
}
