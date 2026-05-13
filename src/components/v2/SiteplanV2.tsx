"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Reveal } from "../Reveal";
import { SplitText } from "./SplitText";

const SITEPLAN_IMAGE =
  "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778697881/Masterplan_Tamaruma.webp";

const unitComposition = [
  {
    group: "Tipe 58",
    variant: "A & B",
    tagline: "Entry level, efisien & fungsional",
  },
  {
    group: "Tipe 85",
    variant: "A & B",
    tagline: "Mid-range, ruang keluarga yang lebih lapang",
  },
  {
    group: "Tipe 100",
    variant: "A & B",
    tagline: "Upper-mid, proporsi ruang yang lebih lega",
  },
  {
    group: "Tipe 119 · 144 · 146",
    variant: "Premium",
    tagline: "Unit spesial dengan lahan & bangunan lebih luas",
  },
  {
    group: "Tipe Hook",
    variant: "Corner",
    tagline: "Unit sudut dengan taman samping lebih lega",
  },
];

const facilities = [
  { icon: "🏊", label: "Swimming Pool" },
  { icon: "🏀", label: "Half Court Basketball" },
  { icon: "🛝", label: "Playground" },
  { icon: "🏡", label: "NAMU Clubhouse" },
  { icon: "🚪", label: "Single Entrance Gate" },
];

export function SiteplanV2() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Subtle mouse-parallax on siteplan image (desktop only)
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const inner = el.querySelector<HTMLElement>("[data-parallax-inner]");
    if (!inner) return;

    let raf = 0;
    const onMove = (e: globalThis.MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        inner.style.transform = `translate3d(${mx * -14}px, ${my * -14}px, 0) scale(1.04)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      inner.style.transform = "translate3d(0,0,0) scale(1.04)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="siteplan-v2" className="bg-background py-24 md:py-36">
      <div className="px-[10px] md:px-10 max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="flex items-baseline justify-between mb-10">
          <div className="eyebrow">02 · Siteplan</div>
          <div className="eyebrow hidden md:block v-tabular">
            3 Ha · 177 Unit · 5 Blok
          </div>
        </div>

        {/* Caption kecil di atas heading */}
        <p className="font-display italic text-muted text-lg md:text-xl tracking-[-0.01em] mb-4">
          Tata ruang yang direncanakan matang.
        </p>

        <h2 className="display-lg text-foreground max-w-4xl">
          <SplitText
            text="Setiap blok punya akses,"
            mode="word"
            stagger={55}
            duration={900}
          />{" "}
          <SplitText
            text="udara, dan fasilitas"
            mode="word"
            stagger={55}
            duration={900}
            delay={350}
            italic
            charClassName="text-muted"
          />{" "}
          <SplitText
            text="yang sama dekat."
            mode="word"
            stagger={55}
            duration={900}
            delay={700}
          />
        </h2>

        <Reveal delay={200}>
          <p className="mt-8 text-lg md:text-xl text-muted-2 leading-relaxed max-w-3xl">
            Tamaruma Sawangan berdiri di atas lahan <strong className="font-normal text-foreground">3 hektar</strong> dengan <strong className="font-normal text-foreground">177 unit rumah</strong> yang ditata secara cermat — memastikan setiap blok memiliki akses jalan, sirkulasi udara, dan kedekatan ke fasilitas bersama.
          </p>
        </Reveal>

        {/* ── SITEPLAN IMAGE ── */}
        <div
          ref={panelRef}
          className="mt-14 md:mt-20 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm bg-surface-2 border border-[var(--border)]"
        >
          <div
            data-parallax-inner
            className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: "scale(1.04)" }}
          >
            <Image
              src={SITEPLAN_IMAGE}
              alt="Masterplan Tamaruma Sawangan — tata letak 177 unit rumah ready stock Sawangan di 5 blok dengan fasilitas clubhouse, kolam renang, dan playground"
              fill
              sizes="(min-width: 768px) 90vw, 100vw"
              className={`object-contain md:object-cover transition-opacity duration-700 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)}
            />
          </div>

          {/* Subtle top gradient to attach to surrounding canvas */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background/60 to-transparent pointer-events-none"
          />

          {/* Corner label */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6">
            <span className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full bg-background/92 backdrop-blur-md border border-[var(--border)] text-foreground">
              Masterplan
            </span>
          </div>

          {/* Corner meta — bottom right */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-foreground/60 bg-background/80 backdrop-blur-md border border-[var(--border)] rounded-full px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Fase 1
          </div>
        </div>

        {/* FIG. caption */}
        <Reveal delay={150}>
          <div className="mt-5 flex items-start gap-3 text-xs text-muted max-w-md">
            <span className="v-tabular shrink-0">FIG. 01</span>
            <span>
              Masterplan cluster Tamaruma Sawangan — 5 blok (A–E), fasilitas terpusat di jantung kawasan.
            </span>
          </div>
        </Reveal>

        {/* ── STATS STRIP ── */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 border-t border-[var(--border-strong)]">
          {[
            { value: "3 Ha", label: "Luas kawasan" },
            { value: "177", label: "Unit rumah" },
            { value: "5 Blok", label: "A · B · C · D · E" },
            { value: "1 Gate", label: "Akses tunggal" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={100 + i * 80}>
              <div>
                <div className="font-display text-4xl md:text-5xl text-foreground leading-none">
                  {s.value}
                </div>
                <div className="mt-3 text-xs tracking-[0.15em] uppercase text-muted">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── COMPOSITION + FACILITIES ── */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-10 md:gap-14">
          {/* Komposisi Kawasan */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="eyebrow mb-6">Komposisi kawasan</div>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="font-display text-3xl md:text-4xl text-foreground tracking-[-0.02em] leading-[1.15] mb-8 max-w-xl">
                Tiga kelompok tipe utama dalam lima blok.
              </h3>
            </Reveal>

            <div className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {unitComposition.map((u, i) => (
                <Reveal key={u.group} delay={140 + i * 60}>
                  <div className="flex items-start justify-between gap-6 py-5 group">
                    <div className="flex items-baseline gap-4 flex-1 min-w-0">
                      <span className="v-tabular text-xs text-muted w-6 shrink-0">
                        0{i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="font-display text-xl md:text-2xl text-foreground">
                            {u.group}
                          </span>
                          <span className="text-[11px] uppercase tracking-[0.15em] text-muted">
                            {u.variant}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm text-muted-2 leading-relaxed">
                          {u.tagline}
                        </p>
                      </div>
                    </div>
                    <span
                      aria-hidden
                      className="hidden md:block h-px w-8 bg-[var(--border-strong)] mt-4 transition-all duration-500 group-hover:w-14 group-hover:bg-foreground"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Fasilitas */}
          <div className="md:col-span-5 md:pl-6 lg:pl-10 md:border-l md:border-[var(--border)]">
            <Reveal>
              <div className="eyebrow mb-6">Fasilitas dalam kawasan</div>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="font-display text-3xl md:text-4xl text-foreground tracking-[-0.02em] leading-[1.15] mb-8">
                Semua di jantung kawasan.
              </h3>
            </Reveal>

            <ul className="flex flex-col gap-1">
              {facilities.map((f, i) => (
                <Reveal key={f.label} delay={140 + i * 70}>
                  <li className="group flex items-center gap-5 py-4 border-b border-[var(--border)] last:border-0 transition-all duration-300 hover:pl-2">
                    <span
                      aria-hidden
                      className="text-2xl md:text-3xl leading-none shrink-0 transition-transform duration-500 group-hover:scale-110"
                    >
                      {f.icon}
                    </span>
                    <span className="font-display text-lg md:text-xl text-foreground tracking-[-0.01em]">
                      {f.label}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={500}>
              <p className="mt-8 text-sm text-muted leading-relaxed">
                Seluruh fasilitas bersama terletak di titik sentral cluster — mudah diakses dari setiap blok dengan jarak tempuh kurang dari 3 menit jalan kaki.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
