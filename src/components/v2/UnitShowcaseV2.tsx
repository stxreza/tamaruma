"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { unitTypes } from "@/lib/site";
import { images } from "@/lib/images";
import { formatIDR } from "@/lib/format";
import { ArrowRightIcon } from "../Icon";
import { SplitText } from "./SplitText";

const slideMap: Record<string, { src: string; alt: string }[]> = {
  t58: [...images.units.t58],
  t85: [...images.units.t85],
  hook: [...images.units.hook],
};

export function UnitShowcaseV2() {
  const [active, setActive] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const unit = unitTypes[active];
  const slides = slideMap[unit.slug];

  // Reset slide ke 0 saat ganti unit
  useEffect(() => {
    setSlideIndex(0);
  }, [active]);

  const goTo = (i: number) => setSlideIndex(i);
  const goPrev = () => setSlideIndex((p) => (p - 1 + slides.length) % slides.length);
  const goNext = () => setSlideIndex((p) => (p + 1) % slides.length);

  // Swipe support
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  };

  // Parallax on image panel based on mouse
  const panelRef = useRef<HTMLDivElement>(null);
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
        inner.style.transform = `translate3d(${mx * -16}px, ${my * -16}px, 0) scale(1.06)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      inner.style.transform = "translate3d(0,0,0) scale(1.06)";
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
    <section id="tipe-v2" className="bg-background py-24 md:py-36">
      <div className="px-[10px] md:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <div className="eyebrow">03 · Tipe Hunian</div>
          <div className="eyebrow hidden md:block v-tabular">
            0{active + 1} / 0{unitTypes.length}
          </div>
        </div>

        {/* Caption kecil di atas heading */}
        <p className="font-display italic text-muted text-lg md:text-xl tracking-[-0.01em] mb-4">
          Tiga dimensi ruang, tanpa waktu tunggu.
        </p>

        <h2 className="display-lg text-foreground max-w-4xl">
          <SplitText
            text="Pilih Tipe 58, 85, atau Hook—"
            mode="word"
            stagger={55}
            duration={900}
          />
          <SplitText
            text="semuanya siap huni."
            mode="word"
            stagger={50}
            duration={900}
            delay={400}
            italic
            charClassName="text-muted"
          />
        </h2>

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-6 md:gap-10 items-start">
          {/* IMAGE PANEL */}
          <div
            ref={panelRef}
            className="md:col-span-7 relative aspect-[3/4] overflow-hidden rounded-sm bg-surface-2"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              data-parallax-inner
              className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: slideIndex === 0 ? "scale(1.06)" : "scale(1)" }}
            >
              {/* Slider: semua slide ditumpuk, yang aktif opacity-100 */}
              {slides.map((slide, i) => {
                const isDenah = i > 0;
                return (
                  <div
                    key={`${unit.slug}-${i}`}
                    className="absolute inset-0"
                    style={{
                      opacity: i === slideIndex ? 1 : 0,
                      transition: "opacity 300ms ease-in-out",
                      pointerEvents: i === slideIndex ? "auto" : "none",
                      background: isDenah ? "var(--background)" : undefined,
                    }}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(min-width: 768px) 60vw, 100vw"
                      className={isDenah ? "object-contain p-6" : "object-cover"}
                      priority={i === 0 && active === 0}
                    />
                  </div>
                );
              })}
            </div>

            {/* Floating badges — Tipe + Ready Stock (hanya saat foto rumah) */}
            <div
              key={`label-${active}`}
              className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-wrap gap-2 transition-all duration-300"
              style={{
                opacity: slideIndex === 0 ? 1 : 0,
                transform: slideIndex === 0 ? "translateY(0)" : "translateY(-6px)",
                pointerEvents: slideIndex === 0 ? "auto" : "none",
              }}
            >
              <span className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full bg-background/92 backdrop-blur-md border border-[var(--border)] text-foreground">
                {unit.name}
              </span>
              <span className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full bg-accent text-white">
                Ready Stock
              </span>
            </div>

            {/* "Denah" badge — muncul saat bukan foto pertama */}
            <div
              className="absolute top-4 right-4 md:top-6 md:right-6 transition-all duration-300"
              style={{
                opacity: slideIndex > 0 ? 1 : 0,
                transform: slideIndex > 0 ? "translateY(0)" : "translateY(-6px)",
                pointerEvents: slideIndex > 0 ? "auto" : "none",
              }}
            >
              <span className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full bg-background/92 backdrop-blur-md border border-[var(--border)] text-foreground">
                Denah
              </span>
            </div>

            {/* Prev / Next click areas — desktop */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  aria-label="Foto sebelumnya"
                  className="absolute left-0 top-0 h-full w-1/2 cursor-w-resize z-10 focus-visible:outline-none"
                />
                <button
                  onClick={goNext}
                  aria-label="Foto berikutnya"
                  className="absolute right-0 top-0 h-full w-1/2 cursor-e-resize z-10 focus-visible:outline-none"
                />
              </>
            )}

            {/* Slide dots */}
            {slides.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 pointer-events-none">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`rounded-full transition-all duration-300 ${
                      i === slideIndex
                        ? "w-5 h-1.5 bg-white"
                        : "w-1.5 h-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Big ghost number */}
            <div
              aria-hidden
              key={`n-${active}`}
              className="absolute -right-2 -bottom-6 font-display text-[16vw] md:text-[9vw] leading-none text-white/10 select-none pointer-events-none animate-[reveal-up_900ms_cubic-bezier(0.22,1,0.36,1)_both]"
            >
              0{active + 1}
            </div>
          </div>

          {/* DETAIL PANEL */}
          <div className="md:col-span-5 md:sticky md:top-28">
            {/* Tabs */}
            <div className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {unitTypes.map((u, i) => (
                <button
                  key={u.slug}
                  onClick={() => setActive(i)}
                  data-cursor="expand"
                  className="group flex items-center justify-between py-4 text-left"
                  aria-pressed={i === active}
                >
                  <span className="flex items-baseline gap-4">
                    <span
                      className={`v-tabular text-xs w-6 transition-colors ${
                        i === active ? "text-accent" : "text-muted"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`font-display text-2xl md:text-3xl transition-all duration-500 ${
                        i === active
                          ? "text-foreground translate-x-1"
                          : "text-muted group-hover:text-foreground group-hover:translate-x-1"
                      }`}
                    >
                      {u.name}
                    </span>
                  </span>
                  <span
                    className={`h-px transition-all duration-500 ${
                      i === active
                        ? "w-16 bg-accent"
                        : "w-8 bg-[var(--border-strong)] group-hover:w-12 group-hover:bg-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Details */}
            <div
              key={unit.slug}
              className="mt-6 animate-[reveal-up_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
            >
              <p className="text-base text-muted-2 leading-relaxed">
                {unit.description}
              </p>

              {"hookVariants" in unit ? (
                /* ── HOOK: tabel per-varian ── */
                <div className="mt-6 flex flex-col gap-5">
                  {unit.hookVariants.map((v) => (
                    <div key={v.label} className="border border-[var(--border)] rounded-sm overflow-hidden">
                      <div className="px-4 py-2.5 bg-surface-2 flex items-center justify-between">
                        <span className="text-sm font-semibold text-foreground">{v.label}</span>
                        <span className="text-xs text-muted">LB {v.buildingSize} m²</span>
                      </div>
                      {v.units.map((u, ui) => (
                        <div
                          key={ui}
                          className={`px-4 py-3 text-xs grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 ${
                            ui < v.units.length - 1 ? "border-b border-[var(--border)]" : ""
                          }`}
                        >
                          <span className="text-muted uppercase tracking-[0.12em]">Unit</span>
                          <span className="text-foreground font-medium">{u.unitId}</span>
                          <span className="text-muted uppercase tracking-[0.12em]">LT</span>
                          <span className="text-foreground">{u.landSize} m²</span>
                          <span className="text-muted uppercase tracking-[0.12em]">KT / KM</span>
                          <span className="text-foreground">{u.bedrooms} KT · {u.bathrooms} KM · {u.carport} Carport</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="mt-2">
                    <div className="eyebrow">Harga mulai</div>
                    <div className="mt-1 font-display text-4xl md:text-5xl text-foreground v-tabular">
                      {formatIDR(unit.priceFrom)}
                    </div>
                    <div className="mt-1 text-xs text-muted">Hubungi tim untuk info harga per unit</div>
                  </div>
                </div>
              ) : (
                /* ── REGULAR: spec + unit price table ── */
                <>
                  {/* Spec row */}
                  <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                    {[
                      { k: "LT / LB", v: `${unit.landSize} / ${unit.buildingSize} m²` },
                      { k: "Kamar tidur", v: `${unit.bedrooms} kamar` },
                      { k: "Kamar mandi", v: `${unit.bathrooms} kamar` },
                      { k: "Carport", v: `${unit.carport} mobil` },
                    ].map((r) => (
                      <div key={r.k} className="flex flex-col gap-0.5 pb-3 border-b border-[var(--border)]">
                        <dt className="text-[11px] uppercase tracking-[0.15em] text-muted">{r.k}</dt>
                        <dd className="text-foreground font-medium">{r.v}</dd>
                      </div>
                    ))}
                  </dl>

                  {/* Unit price table */}
                  {"units" in unit && (
                    <div className="mt-6">
                      <div className="eyebrow mb-3">Unit tersedia & harga</div>
                      <div className="border border-[var(--border)] rounded-sm overflow-hidden">
                        <div className="grid grid-cols-[2rem_1fr_auto] gap-x-3 px-3 py-2 bg-surface-2 text-[10px] uppercase tracking-[0.15em] text-muted">
                          <span>Unit</span>
                          <span>LT</span>
                          <span className="text-right">Harga</span>
                        </div>
                        <div className="max-h-[220px] overflow-y-auto divide-y divide-[var(--border)]">
                          {unit.units.map((u) => (
                            <div
                              key={u.unitId}
                              className="grid grid-cols-[2rem_1fr_auto] gap-x-3 px-3 py-2.5 text-xs items-center hover:bg-surface-2/50 transition-colors"
                            >
                              <span className="font-semibold text-foreground v-tabular">{u.unitId}</span>
                              <span className="text-muted">{u.landSize} m²</span>
                              <span className="text-right font-medium text-foreground">{formatIDR(u.price)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* KPR cicilan */}
                  {"units" in unit && unit.units.length > 0 && (
                    <div className="mt-5 p-4 rounded-sm bg-surface-2 border border-[var(--border)]">
                      <div className="text-[10px] uppercase tracking-[0.15em] text-muted mb-3">
                        Estimasi cicilan KPR · DP Rp 50 jt
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        {[
                          { tenor: "15 th", val: unit.units[unit.units.length - 1].kpr15 },
                          { tenor: "20 th", val: unit.units[unit.units.length - 1].kpr20 },
                          { tenor: "25 th", val: unit.units[unit.units.length - 1].kpr25 },
                        ].map((k) => (
                          <div key={k.tenor} className="flex flex-col gap-1">
                            <span className="text-[10px] text-muted">{k.tenor}</span>
                            <span className="text-sm font-semibold text-foreground v-tabular leading-tight">
                              {formatIDR(k.val)}
                            </span>
                            <span className="text-[10px] text-muted">/bln</span>
                          </div>
                        ))}
                      </div>
                      <p className="mt-3 text-[10px] text-muted leading-relaxed">
                        *Ilustrasi cicilan. Angka final tergantung program bank & profil pemohon.
                      </p>
                    </div>
                  )}
                </>
              )}

              <div className="mt-6 flex items-center justify-between gap-4">
                {"hookVariants" in unit ? null : (
                  <div>
                    <div className="eyebrow">Harga mulai</div>
                    <div className="mt-1 font-display text-3xl md:text-4xl text-foreground v-tabular">
                      {formatIDR(unit.priceFrom)}
                    </div>
                  </div>
                )}
                <Link
                  href="#kontak-v2"
                  data-cursor="expand"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group/link pb-1 border-b border-foreground hover:border-accent shrink-0"
                >
                  Jadwal visit
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
