"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useElementScrollProgress } from "@/hooks/useParallax";
import { Reveal } from "../Reveal";
import { SplitText } from "./SplitText";
const slides = [
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778534747/Lingkungan.webp",
    alt: "Lingkungan komplek Tamaruma Sawangan — perumahan tropical modern Sawangan Depok",
    caption: "Lingkungan cluster Tamaruma Sawangan",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778534747/Deatail_Ruang_Tamu.webp",
    alt: "Detail ruang tamu rumah ready stock Sawangan di Tamaruma Sawangan",
    caption: "Detail ruang tamu — show unit aktual",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778534747/Kamar_Tidur_Utama.webp",
    alt: "Kamar tidur utama rumah Tamaruma Sawangan dengan desain tropical modern",
    caption: "Kamar tidur utama Tipe 85",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778534747/Bakcyard_Rumah.webp",
    alt: "Backyard rumah ready stock Sawangan di komplek Tamaruma Sawangan",
    caption: "Backyard untuk dining outdoor",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778534747/Taman_Belakang.webp",
    alt: "Taman belakang perumahan Tamaruma Sawangan — lanskap tropis cluster Sawangan",
    caption: "Taman belakang dengan lanskap tropis",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778621765/Main_Gate_Tamaruma_Sawangan_v2yabu.webp",
    alt: "Main gate Tamaruma Sawangan — gerbang utama perumahan cluster Sawangan Depok",
    caption: "Main gate Tamaruma Sawangan",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778621765/Entrance_One_Gate_System_ckjrtp.webp",
    alt: "Entrance one gate system Tamaruma Sawangan — sistem keamanan satu pintu masuk cluster",
    caption: "Entrance — one gate system",
  },
];

const INTERVAL = 4000; // ms per slide

export function IntroV2() {
  const { ref, progress } = useElementScrollProgress<HTMLDivElement>();
  const imgY = (progress - 0.5) * 60;

  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop for parallax (SSR-safe)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="intro-v2" className="bg-background py-24 md:py-36 relative">
      <div className="px-[10px] md:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div className="eyebrow">01 · Intro</div>
          <div className="eyebrow hidden md:block">
            Tamaruma Sawangan by Ruma.id — Perumahan Sawangan Depok · Ready Stock
          </div>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-12 gap-10 md:gap-12 items-start"
        >
          <div className="md:col-span-7 md:pr-6 lg:pr-10">
            <h2 className="display-lg text-foreground">
              <SplitText
                text="Temukan cara baru menikmati"
                mode="word"
                stagger={55}
                duration={900}
              />{" "}
              <SplitText
                text="ketenangan"
                mode="word"
                stagger={55}
                duration={900}
                delay={350}
                italic
                charClassName="text-accent"
              />{" "}
              <SplitText
                text="di Sawangan."
                mode="word"
                stagger={55}
                duration={900}
                delay={600}
              />
            </h2>

            <Reveal delay={180}>
              <p className="mt-8 text-lg md:text-xl text-muted-2 leading-relaxed max-w-2xl">
                Nama <strong className="font-normal text-foreground">Tamaruma Sawangan</strong> berasal dari dua kata: <em>tama</em> (permata) dan <em>ruma</em> (rumah). Filosofinya sederhana — komplek perumahan yang jadi titik balik. Tempat tenang setelah hari yang panjang, tempat anak tumbuh, tempat tamu betah lebih lama dari rencana. Semua unit di cluster ini adalah rumah ready stock Sawangan, sudah berdiri, siap dicek langsung.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 pt-8 border-t border-[var(--border-strong)]">
              {[
                { value: "3 Ha", label: "Hektar total kawasan" },
                { value: "177", label: "Unit rumah" },
                { value: "3 Tipe", label: "Tipe rumah" },
              ].map((s, i) => (
                <Reveal key={s.label} delay={220 + i * 90}>
                  <div>
                    <div className="font-display text-5xl md:text-6xl text-foreground leading-none">
                      {s.value}
                    </div>
                    <div className="mt-3 text-xs tracking-[0.15em] uppercase text-muted">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* IMAGE SLIDER */}
          <div className="md:col-span-5 mt-10 md:mt-0">
            {/* Mobile: no parallax/scale to prevent overflow and cover stats above */}
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-sm bg-surface-2"
              style={
                isDesktop
                  ? { transform: `translate3d(0, ${imgY}px, 0) scale(1.15)`, willChange: "transform" }
                  : undefined
              }
            >
              {slides.map((slide, i) => (
                <div
                  key={slide.src}
                  aria-hidden={i !== current}
                  className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
                  style={{ opacity: i === current ? 1 : 0 }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                    loading="eager"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Dot indicators */}
              <div
                aria-hidden
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10"
              >
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === current
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Foto ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Caption — update sesuai slide aktif */}
            <Reveal delay={280}>
              <div className="mt-5 flex items-start gap-3 text-xs text-muted max-w-sm">
                <span className="v-tabular shrink-0">
                  FIG. {String(current + 1).padStart(2, "0")}
                </span>
                <span>{slides[current].caption}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
