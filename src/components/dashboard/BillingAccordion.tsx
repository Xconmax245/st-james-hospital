"use client";

import { useState } from "react";
import {
  Receipt,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BillItem {
  description: string;
  category: string;
  amount: number;
  status: "Paid" | "Pending" | "Estimated";
  date: string;
}

interface BillingAccordionProps {
  items: BillItem[];
}

export default function BillingAccordion({ items }: BillingAccordionProps) {
  const [pendingOpen, setPendingOpen] = useState(true);
  const [paidOpen, setPaidOpen] = useState(false);
  const [estOpen, setEstOpen] = useState(false);

  const currentItems = items.filter(i => i.status !== "Estimated");
  const totalBilled  = currentItems.reduce((s, i) => s + i.amount, 0);
  const totalPaid    = currentItems.filter((i) => i.status === "Paid").reduce((s, i) => s + i.amount, 0);
  const totalPending = totalBilled - totalPaid;
  const paidPct      = totalBilled > 0 ? (totalPaid / totalBilled) * 100 : 0;

  const pendingItems   = items.filter((i) => i.status === "Pending");
  const paidItems      = items.filter((i) => i.status === "Paid");
  const estimatedItems = items.filter((i) => i.status === "Estimated");

  const fmt = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);

  if (items.length === 0) {
    return (
      <section
        id="billing"
        className="bg-white border border-navy/10 p-8 text-center print-white-bg"
      >
        <div className="flex flex-col items-center gap-3 opacity-30">
          <Receipt size={48} strokeWidth={1} />
          <p className="text-[12px] font-bold uppercase tracking-[0.2em]">
            No billing records found
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="billing">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-navy uppercase text-[10px] font-bold tracking-[0.25em] shrink-0">
          Financial Summary
        </h3>
        <div className="flex-1 h-[1px] bg-navy/10" />
      </div>

      {/* Summary Cards */}
      <div className="flex flex-col gap-3 mb-5">
        {/* Total */}
        <div className="bg-navy p-5 border-l-4 border-l-gold shadow-md">
          <div className="flex items-center gap-2 text-white/40 mb-2">
            <CreditCard size={13} />
            <span className="text-[9px] font-bold uppercase tracking-widest">
              Total Patient Liability
            </span>
          </div>
          <p className="text-3xl font-display text-white">{fmt(totalBilled)}</p>
        </div>

        {/* Paid / Outstanding */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border border-navy/10 p-4">
            <div className="flex items-center gap-1.5 mb-1.5 text-green-600">
              <CheckCircle2 size={12} />
              <span className="text-[8px] font-bold uppercase tracking-widest">
                Total Paid
              </span>
            </div>
            <p className="text-lg font-display text-navy">{fmt(totalPaid)}</p>
          </div>
          <div className="bg-white border border-navy/10 p-4">
            <div className="flex items-center gap-1.5 mb-1.5 text-gold">
              <Clock size={12} />
              <span className="text-[8px] font-bold uppercase tracking-widest">
                Outstanding
              </span>
            </div>
            <p className="text-lg font-display text-navy">{fmt(totalPending)}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-[#F4F3EE] h-1.5 w-full mb-5 overflow-hidden no-print rounded-full">
        <div
          className="h-full bg-green-500 transition-all duration-1000 rounded-full"
          style={{ width: `${paidPct}%` }}
        />
      </div>

      {/* Accordions */}
      <div className="space-y-3">
        {/* Pending Bills */}
        <div className="border border-navy/10 overflow-hidden">
          <button
            onClick={() => setPendingOpen(!pendingOpen)}
            className="w-full bg-[#F4F3EE] px-4 py-3 flex items-center justify-between hover:bg-navy/5 transition-colors no-print"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-navy">
                Pending Bills
              </span>
              <span className="bg-gold text-navy text-[8px] font-bold px-1.5 py-0.5">
                {pendingItems.length}
              </span>
            </div>
            {pendingOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>

          <div
            className={cn(
              "bg-white transition-all duration-300",
              pendingOpen ? "block" : "hidden",
              "print:block print:border-t"
            )}
          >
            {pendingItems.map((item, i) => (
              <div
                key={i}
                className="px-4 py-3 border-b border-navy/5 last:border-0 flex flex-wrap items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-navy mb-0.5 truncate">
                    {item.description}
                  </p>
                  <p className="text-[9px] text-[#6B6B6B] uppercase tracking-widest">
                    {item.category}
                  </p>
                </div>
                <div className="flex items-center gap-5 text-right shrink-0">
                  <div>
                    <p className="text-[8px] text-[#6B6B6B] uppercase tracking-widest mb-0.5">
                      Due Date
                    </p>
                    <p className="text-[10px] font-mono font-bold text-navy">
                      {item.date}
                    </p>
                  </div>
                  <p className="text-base font-display text-navy">
                    {fmt(item.amount)}
                  </p>
                </div>
              </div>
            ))}
            {pendingItems.length === 0 && (
              <div className="px-4 py-5 text-center text-[#6B6B6B] text-xs italic">
                No pending balances
              </div>
            )}
          </div>
        </div>

        {/* Future Estimates Section */}
        {estimatedItems.length > 0 && (
          <div className="border border-gold/30 overflow-hidden bg-gold/5">
            <button
              onClick={() => setEstOpen(!estOpen)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-gold/10 transition-colors no-print"
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-navy">
                  Institutional Remarks
                </span>
                <span className="bg-gold text-navy text-[8px] font-bold px-1.5 py-0.5">
                  {estimatedItems.length}
                </span>
              </div>
              {estOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>

            <div
              className={cn(
                "bg-white/50 transition-all duration-300",
                estOpen ? "block" : "hidden",
                "print:block print:border-t"
              )}
            >
              {estimatedItems.map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-3 border-b border-gold/10 last:border-0 flex flex-wrap items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-navy mb-0.5 truncate italic">
                      {item.description}
                    </p>
                    <p className="text-[9px] text-navy/40 uppercase tracking-widest">
                      {item.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-5 text-right shrink-0">
                    <div>
                      <p className="text-[8px] text-navy/40 uppercase tracking-widest mb-0.5">
                        Est. Provision
                      </p>
                      <p className="text-[10px] font-mono font-bold text-gold">
                        {item.date}
                      </p>
                    </div>
                    <p className="text-base font-display text-navy opacity-60">
                      {fmt(item.amount)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Paid History */}
        <div className="border border-navy/10 overflow-hidden">
          <button
            onClick={() => setPaidOpen(!paidOpen)}
            className="w-full bg-[#F4F3EE] px-4 py-3 flex items-center justify-between hover:bg-navy/5 transition-colors no-print"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-navy">
                Paid History
              </span>
              <span className="bg-navy text-white text-[8px] font-bold px-1.5 py-0.5">
                {paidItems.length}
              </span>
            </div>
            {paidOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>

          <div
            className={cn(
              "bg-white transition-all duration-300",
              paidOpen ? "block" : "hidden",
              "print:block print:border-t"
            )}
          >
            {paidItems.map((item, i) => (
              <div
                key={i}
                className="px-4 py-3 border-b border-navy/5 last:border-0 flex flex-wrap items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-navy/60 mb-0.5 truncate">
                    {item.description}
                  </p>
                  <p className="text-[9px] text-[#6B6B6B] uppercase tracking-widest">
                    {item.category}
                  </p>
                </div>
                <div className="flex items-center gap-5 text-right shrink-0">
                  <div>
                    <p className="text-[8px] text-[#6B6B6B] uppercase tracking-widest mb-0.5">
                      Paid Date
                    </p>
                    <p className="text-[10px] font-mono text-navy/40">
                      {item.date}
                    </p>
                  </div>
                  <p className="text-base font-display text-navy/40 line-through decoration-gold">
                    {fmt(item.amount)}
                  </p>
                </div>
              </div>
            ))}
            {paidItems.length === 0 && (
              <div className="px-4 py-5 text-center text-[#6B6B6B] text-xs italic">
                No payment records
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
