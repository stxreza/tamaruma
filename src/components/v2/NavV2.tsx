"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { waHref } from "@/lib/site";
import { WhatsappIcon } from "../Icon";
import { LocalTime } from "./LocalTime";

const mainLinks = [
  { href: "/", label: "Beranda", num: "01" },
  { href: "/harga", label: "Harga & Pricelist", num: "02" },
  { href: "/promo", label: "Promo Kemerdekaan", num: "03" },
  { href: "/panduan-kpr", label: "Panduan KPR", num: "04" },
  { href: "/tentang", label: "Tentang Kami", num: "05" },
  { href: "/kontak", label: "Kontak & Visit", num: "06" },
];

const subLinks = [
  {
    title: "Tipe Unit",
    links: [
      { href: "/tipe/58", label: "Tipe 58 (2 Kamar)" },
      { href: "/tipe/85", label: "Tipe 85 (3 Kamar)" },
      { href: "/tipe/hook", label: "Tipe Hook (Premium)" },
    ],
  },
  {
    title: "Kawasan & Fasilitas",
    links: [
      { href: "/fasilitas", label: "NAMU Clubhouse" },
      { href: "/lokasi/sawangan-depok", label: "Lokasi Sawangan Depok" },
      { href: "/#galeri-v2", label: "Galeri Foto" },
    ],
  },
];

export function NavV2() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-[var(--border)] text-foreground"
            : "bg-transparent text-white"
        }`}
      >
        <div className="px-5 md:px-10 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Tamaruma Sawangan"
          >
            <span
              className={`inline-block h-2 w-2 rounded-full transition-colors ${
                scrolled ? "bg-accent" : "bg-white"
              }`}
            />
            <span className="font-display text-2xl tracking-tight">
              Tamaruma
            </span>
            <span
              className={`hidden sm:inline text-[11px] tracking-[0.3em] uppercase transition-colors ${
                scrolled ? "text-muted" : "text-white/60"
              }`}
            >
              Sawangan
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <span
              className={`hidden md:inline text-[11px] tracking-[0.25em] uppercase transition-colors ${
                scrolled ? "text-muted" : "text-white/70"
              }`}
            >
              <LocalTime />
            </span>

            <button
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              aria-expanded={open}
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase group"
            >
              <span className="hidden md:inline">Menu</span>
              <span className="inline-flex flex-col gap-[5px]">
                <span
                  className={`block h-[1.5px] w-6 transition-all duration-300 ${
                    scrolled ? "bg-foreground" : "bg-white"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-4 ml-auto transition-all duration-300 group-hover:w-6 ${
                    scrolled ? "bg-foreground" : "bg-white"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/*
        FULLSCREEN MENU
        Simple fade + scale transition. No clip-path (which was clipping
        at the bottom because `circle(150%)` is relative to closest-side,
        not farthest-corner).
      */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 transition-opacity duration-500 ease-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#12352f" }}
      >
        <div className="h-full flex flex-col">
          {/* Top bar */}
          <div className="px-5 md:px-10 h-20 flex items-center justify-between shrink-0">
            <span className="font-display text-2xl text-on-dark">Tamaruma</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-on-dark"
            >
              Tutup
              <span className="relative h-5 w-5">
                <span className="absolute top-1/2 left-0 right-0 rotate-45 -translate-y-1/2 h-[1.5px] bg-on-dark" />
                <span className="absolute top-1/2 left-0 right-0 -rotate-45 -translate-y-1/2 h-[1.5px] bg-on-dark" />
              </span>
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 px-5 md:px-10 py-10 flex flex-col overflow-y-auto">
            <div className="grid md:grid-cols-[1fr_minmax(auto,300px)] gap-12 md:gap-20 max-w-5xl w-full mx-auto my-auto">
              <ul className="flex flex-col">
                {mainLinks.map((l, i) => (
                  <li
                    key={l.href}
                    className="border-t border-white/10 last:border-b"
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between py-4 md:py-6 transition-transform duration-500 ease-out"
                      style={{
                        opacity: open ? 1 : 0,
                        transform: open ? "translateY(0)" : "translateY(16px)",
                        transitionDelay: open ? `${150 + i * 60}ms` : "0ms",
                        transitionProperty: "opacity, transform",
                      }}
                    >
                      <span className="flex items-baseline gap-4 md:gap-8">
                        <span className="text-[10px] md:text-xs text-on-dark-muted v-tabular">
                          {l.num}
                        </span>
                        <span className="font-display text-3xl md:text-5xl text-on-dark group-hover:italic group-hover:text-bronze transition-colors duration-300">
                          {l.label}
                        </span>
                      </span>
                      <span className="text-on-dark-muted group-hover:text-on-dark transition-colors hidden sm:block">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              
              <div 
                className="flex flex-col gap-10 transition-transform duration-500 ease-out"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(16px)",
                  transitionDelay: open ? `500ms` : "0ms",
                  transitionProperty: "opacity, transform",
                }}
              >
                {subLinks.map((group) => (
                  <div key={group.title}>
                    <div className="eyebrow eyebrow-on-dark mb-5">{group.title}</div>
                    <ul className="space-y-4">
                      {group.links.map((l) => (
                        <li key={l.href}>
                          <a 
                            href={l.href} 
                            onClick={() => setOpen(false)}
                            className="text-on-dark-muted hover:text-on-dark transition-colors"
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </nav>

          {/* Bottom bar */}
          <div className="px-5 md:px-10 py-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-white/10 shrink-0">
            <div>
              <div className="eyebrow eyebrow-on-dark">Kontak cepat</div>
              <div className="mt-2 text-sm text-on-dark-muted">
                Tim marketing akan balas dalam 2 jam kerja.
              </div>
            </div>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shine self-start md:self-auto"
            >
              <WhatsappIcon className="h-5 w-5" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
