"use client";

import { useElementScrollProgress } from "@/hooks/useParallax";
import Image from "next/image";
import { Reveal } from "../Reveal";
import { SplitText } from "./SplitText";

export function ManifestoV2() {
  const { ref, progress } = useElementScrollProgress<HTMLDivElement>();
  const bgY = (progress - 0.5) * 120;

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative dark-canvas overflow-hidden"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${bgY}px, 0) scale(1.2)` }}
      >
        <Image
          src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778532923/Rumah_Ready_Stok_Tamaruma_Sawangan_2.webp"
          alt="Komplek perumahan Tamaruma Sawangan dari udara"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[var(--surface-dark)]/70 via-[var(--surface-dark)]/85 to-[var(--surface-dark)]"
      />

      <div className="relative py-24 md:py-36 px-[10px] md:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-12 md:mb-16 text-on-dark-muted">
          <div className="eyebrow eyebrow-on-dark">04 · Manifesto</div>
          <div className="eyebrow eyebrow-on-dark hidden md:block">
            A new kind of home
          </div>
        </div>

        {/* Heading — editorial stacked, mixed weights & sizes */}
        <h2 className="max-w-5xl">
          <span
            className="block font-display italic font-medium tracking-[-0.03em] text-bronze leading-[1.15]"
            style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)" }}
          >
            <SplitText
              text="Slow living,"
              mode="char"
              stagger={35}
              duration={1100}
              charClassName="text-bronze"
            />
          </span>
          <span
            className="block font-display font-medium tracking-[-0.025em] text-on-dark/80 leading-[1.2] mt-2 md:mt-3"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}
          >
            <SplitText
              text="ten minutes from the city."
              mode="word"
              stagger={60}
              duration={1000}
              delay={500}
              charClassName="text-on-dark/80"
            />
          </span>
        </h2>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-8 md:gap-14">
          {[
            {
              n: "01",
              h: "Sawangan, akses tanpa kompromi.",
              p: "MRT, tol, sekolah, dan pusat perbelanjaan semuanya dalam jangkauan — karena lokasi yang tepat adalah bagian dari kenyamanan itu sendiri.",
            },
            {
              n: "02",
              h: "Fasilitas Kawasan",
              p: "Swimming pool, basketball court, playground, dan NAMU Clubhouse semua aktif agar Anda selalu bisa gunakan setiap hari.",
            },
            {
              n: "03",
              h: "Ready, bukan dijanjikan",
              p: "Semua unit di Tamaruma Sawangan adalah rumah ready stock Sawangan. Visit show unit, cek material, ukur kamar sendiri. Kalau cocok, bisa pindah dalam 30 hari.",
            },
          ].map((c, i) => (
            <Reveal key={c.n} delay={200 + i * 180}>
              <div className="group relative border-t border-white/15 pt-5">
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-px w-0 bg-bronze transition-all duration-700 group-hover:w-16"
                />
                <div className="v-tabular text-xs text-on-dark-muted">
                  {c.n}
                </div>
                <h3 className="mt-3 font-display text-2xl md:text-3xl text-on-dark leading-tight">
                  {c.h}
                </h3>
                <p className="mt-3 text-sm text-on-dark-muted leading-relaxed">
                  {c.p}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
