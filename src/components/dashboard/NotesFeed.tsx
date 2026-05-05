"use client";

import { FileText, Pin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Note {
  author: string;
  role: string;
  date: string;
  content: string;
  pinned?: boolean;
}

interface NotesFeedProps {
  notes: Note[];
}

export default function NotesFeed({ notes }: NotesFeedProps) {
  if (notes.length === 0) {
    return (
      <section
        id="notes"
        className="bg-white border border-navy/10 p-8 text-center print-white-bg"
      >
        <div className="flex flex-col items-center gap-3 opacity-30">
          <FileText size={48} strokeWidth={1} />
          <p className="text-[12px] font-bold uppercase tracking-[0.2em]">
            No clinical updates available
          </p>
        </div>
      </section>
    );
  }

  const sortedNotes = [...notes].sort(
    (a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)
  );

  return (
    <section id="notes">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2 shrink-0">
          <h3 className="text-navy uppercase text-[10px] font-bold tracking-[0.25em]">
            Doctor&apos;s Notes
          </h3>
          <span className="bg-navy text-white text-[9px] font-bold px-1.5 py-0.5 min-w-[18px] text-center">
            {notes.length}
          </span>
        </div>
        <div className="flex-1 h-[1px] bg-navy/10" />
      </div>

      {/* Notes */}
      <div className="space-y-4">
        {sortedNotes.map((note, i) => (
          <div
            key={i}
            className={cn(
              "bg-white border border-navy/10 p-5 relative print-white-bg transition-all",
              note.pinned
                ? "border-l-4 border-l-gold shadow-sm"
                : "border-l-4 border-l-[#F4F3EE]"
            )}
          >
            {note.pinned && (
              <div className="absolute top-3 right-3">
                <Pin size={12} className="text-gold fill-gold rotate-45" />
              </div>
            )}

            {/* Note Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-navy/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F4F3EE] text-navy font-bold flex items-center justify-center text-[10px] shrink-0">
                  {note.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex flex-col">
                  <span className="text-navy font-display font-bold text-sm leading-none">
                    {note.author}
                  </span>
                  <span className="text-gold text-[8px] font-bold uppercase tracking-[0.2em] mt-1">
                    {note.role}
                  </span>
                </div>
              </div>
              <span className="text-navy/40 text-[9px] font-bold uppercase tracking-widest bg-[#F4F3EE] px-2 py-0.5 self-start sm:self-auto">
                {note.date}
              </span>
            </div>

            {/* Content */}
            <p className="text-navy/80 text-[13px] leading-relaxed">
              {note.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
