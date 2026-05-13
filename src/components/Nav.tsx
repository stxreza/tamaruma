"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { waHref } from "@/lib/site";
import { WhatsappIcon } from "./Icon";

const links = [
  { href: "#why", label: "Kenapa" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#tipe", label: "Tipe Unit" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kpr", label: "KPR" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Pilih section dengan ratio tertinggi yang sedang terlihat
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16">
        <Link
          href="#top"
          className="flex items-center gap-2 group"
          aria-label="Kembali ke atas"
        >
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-accent transition-transform group-hover:scale-110"
          />
          <span className="font-display text-xl text-foreground tracking-tight">
            Tamaruma
          </span>
          <span className="text-sm text-muted hidden sm:inline">Sawangan</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-active={active === l.href}
              className="nav-link text-sm text-muted-2 hover:text-foreground transition-colors data-[active=true]:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary shine hidden sm:inline-flex !py-2.5 !px-4 !text-sm"
          >
            <WhatsappIcon className="h-4 w-4" />
            Chat Sekarang
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-foreground"
          >
            <span className="sr-only">Menu</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-background/95 backdrop-blur-md border-b border-[var(--border)] ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              data-active={active === l.href}
              className="py-3 text-base text-muted-2 data-[active=true]:text-foreground border-b border-[var(--border)] last:border-b-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
