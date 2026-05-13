"use client";

import { useState, useEffect } from "react";
import { waHref, site } from "@/lib/site";
import { WhatsappIcon, CalendarIcon } from "./Icon";

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Muncul setelah 1.5 detik
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Tooltip hint muncul sebentar setelah 6 detik kalau user belum klik
  useEffect(() => {
    if (!visible || open) return;
    const t = setTimeout(() => setShowHint(true), 4500);
    const t2 = setTimeout(() => setShowHint(false), 12500);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [visible, open]);

  // Tutup panel saat klik di luar
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const el = document.getElementById("floating-chat-root");
      if (el && !el.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <div
      id="floating-chat-root"
      className={`fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Panel popup */}
      <div
        aria-hidden={!open}
        className={`w-72 rounded-2xl overflow-hidden border border-[var(--border-strong)] shadow-[var(--shadow-lg)] bg-background transition-all duration-300 origin-bottom-right ${
          open
            ? "scale-100 opacity-100 pointer-events-auto translate-y-0"
            : "scale-95 opacity-0 pointer-events-none translate-y-2"
        }`}
      >
        <div className="bg-surface-dark px-5 py-4 flex items-center gap-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
              <WhatsappIcon className="h-5 w-5 text-accent-300" />
            </div>
            <span
              aria-hidden
              className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-surface-dark"
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-on-dark">
              Tim Marketing
            </div>
            <div className="text-xs text-on-dark-muted">
              Tamaruma Sawangan · Online
            </div>
          </div>
        </div>

        <div className="px-4 py-5 bg-surface">
          <div className="inline-block max-w-[90%] bg-background rounded-2xl rounded-tl-sm px-4 py-3 border border-[var(--border)] shadow-[var(--shadow-sm)]">
            <p className="text-sm text-foreground leading-relaxed">
              Halo! 👋 Ada yang bisa kami bantu soal{" "}
              <span className="font-medium">Tamaruma Sawangan</span>?
            </p>
            <p className="mt-1.5 text-sm text-foreground leading-relaxed">
              Tanya harga, jadwal visit, atau simulasi KPR — kami siap bantu.
            </p>
            <div className="mt-2 text-[11px] text-muted text-right">
              Balas dalam ~2 jam
            </div>
          </div>
        </div>

        <div className="px-4 pb-4 bg-surface flex flex-col gap-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-primary shine !w-full !justify-center !py-3 !text-sm"
          >
            <WhatsappIcon className="h-4 w-4" />
            Chat WhatsApp Sekarang
          </a>
          <a
            href="#jadwal"
            onClick={() => setOpen(false)}
            className="btn btn-secondary !w-full !justify-center !py-2.5 !text-sm bg-background"
          >
            <CalendarIcon className="h-4 w-4" />
            Jadwalkan Visit
          </a>
        </div>

        <div className="px-4 py-2.5 bg-surface border-t border-[var(--border)] text-center">
          <span className="text-[11px] text-muted">{site.name}</span>
        </div>
      </div>

      {/* Tooltip hint */}
      <div
        aria-hidden
        className={`absolute bottom-2 right-16 origin-right transition-all duration-300 ${
          showHint && !open
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-2 scale-95 pointer-events-none"
        }`}
      >
        <div className="relative bg-foreground text-background text-xs font-medium px-3 py-2 rounded-lg shadow-[var(--shadow-md)] whitespace-nowrap">
          Ada pertanyaan? Chat kami 💬
          <span
            aria-hidden
            className="absolute top-1/2 -right-1 -translate-y-1/2 h-2 w-2 rotate-45 bg-foreground"
          />
        </div>
      </div>

      {/* FAB button */}
      <button
        onClick={() => {
          setOpen((o) => !o);
          setShowHint(false);
        }}
        aria-label={open ? "Tutup chat" : "Buka chat WhatsApp"}
        aria-expanded={open}
        className="relative h-14 w-14 rounded-full bg-accent text-white shadow-[var(--shadow-lg)] flex items-center justify-center transition-all duration-300 hover:bg-accent-700 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        {!open && (
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-accent pulse-ring"
          />
        )}

        <span
          className={`absolute transition-all duration-200 ${
            open
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-75"
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </span>
        <span
          className={`absolute transition-all duration-200 ${
            open
              ? "opacity-0 -rotate-90 scale-75"
              : "opacity-100 rotate-0 scale-100"
          }`}
        >
          <WhatsappIcon className="h-6 w-6" />
        </span>
      </button>
    </div>
  );
}
