import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { waHref } from "@/lib/site";
import { WhatsappIcon, CalendarIcon } from "../Icon";
import { SplitText } from "./SplitText";
import { MagneticButton } from "./MagneticButton";
import { LocalTime } from "./LocalTime";

export function HeroV2() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden text-white bg-[#12352f]"
      style={{ height: "100vh", minHeight: "640px" }}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src={images.hero.src}
        alt="Tamaruma Sawangan"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] md:object-center"
      />

      {/* OVERLAYS */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/75 md:from-black/45 md:via-black/20 md:to-black/80"
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/55 via-black/10 to-transparent"
      />

      {/* VERTICAL LEFT RAIL — desktop only, very subtle */}
      <div
        aria-hidden
        className="hidden md:flex absolute left-6 bottom-28 z-10 flex-col items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-white/35"
      >
        <span className="rotate-180 [writing-mode:vertical-rl]">Est · 2026</span>
        <span className="block h-14 w-px bg-white/20" />
      </div>

      {/* FULL-HEIGHT FOREGROUND */}
      <div className="relative z-10 h-full w-full flex flex-col pt-24 md:pt-28 pb-[54px] md:pb-20 px-[10px] md:px-10">

        {/* TOP META BAR */}
        <div className="max-w-[1300px] mx-auto w-full">
          <div className="flex items-center justify-between gap-4 text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/55">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-bronze pulse-ring" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-bronze" />
              </span>
              Perumahan Tropical Modern
            </span>
            <LocalTime />
          </div>
          <div aria-hidden className="mt-3 h-px w-full bg-white/15 origin-left draw-x" />
        </div>

        {/* ── MOBILE LAYOUT ── heading tengah, CTA pin bawah */}
        <div className="md:hidden flex flex-col flex-1">
          <div className="flex-1 flex flex-col justify-center max-w-[1300px] mx-auto w-full">
            <div className="eyebrow !text-white/55 mb-3">
              Rumah Ready Stock Sawangan
            </div>
            <h1 className="flex flex-col">
              {/* SEO-only text — visually hidden, readable by crawlers */}
              <span className="sr-only">
                Tamaruma Sawangan — Rumah Ready Stock Sawangan.
              </span>
              <div
                className="font-display font-medium tracking-[-0.025em] leading-none"
                style={{ fontSize: "clamp(3.5rem, 18vw, 6rem)" }}
              >
                <SplitText
                  text="Tamaruma"
                  mode="char"
                  stagger={28}
                  duration={900}
                  delay={200}
                  charClassName="text-white"
                />
              </div>
              <div
                className="font-display font-medium tracking-[-0.02em] leading-none mt-[5px]"
                style={{ fontSize: "clamp(2rem, 10vw, 3.5rem)" }}
              >
                <SplitText
                  text="Sawangan."
                  mode="char"
                  stagger={22}
                  duration={900}
                  delay={600}
                  charClassName="text-white/75"
                />
              </div>
            </h1>
          </div>

          {/* CTA — pin ke bawah */}
          <div className="max-w-[1300px] mx-auto w-full pb-[10px] flex justify-center" style={{ transform: "translateY(-25px)" }}>
            <MagneticButton
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shine !px-10 !py-4 !text-base"
            >
              <WhatsappIcon className="h-5 w-5" />
              Chat WhatsApp
            </MagneticButton>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:flex flex-col flex-1">
          {/* Spacer — 40% dari sisa ruang, heading di posisi tengah-bawah */}
          <div className="flex-[2]" />

          <div className="max-w-[1300px] mx-auto w-full">
            {/* Eyebrow */}
            <div className="eyebrow !text-white/55 mb-5">
              Rumah Ready Stock Sawangan
            </div>

            {/* Heading — tiga baris dengan ukuran menurun */}
            <h1 className="flex flex-col">
              {/* SEO-only text — visually hidden, readable by crawlers */}
              <span className="sr-only">
                Tamaruma Sawangan — Rumah Ready Stock Sawangan, Living Slower.
              </span>

              {/* Baris 1: "Tamaruma" — paling besar */}
              <div
                className="font-display font-medium tracking-[-0.03em] leading-none"
                style={{ fontSize: "clamp(5rem, 9vw, 8.5rem)" }}
              >
                <SplitText
                  text="Tamaruma"
                  mode="char"
                  stagger={28}
                  duration={900}
                  delay={200}
                  charClassName="text-white"
                />
              </div>

              {/* Baris 2: "Sawangan." — lebih kecil, sedikit redup */}
              <div
                className="font-display font-medium tracking-[-0.025em] leading-none mt-[5px]"
                style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}
              >
                <SplitText
                  text="Sawangan."
                  mode="char"
                  stagger={24}
                  duration={900}
                  delay={550}
                  charClassName="text-white/70"
                />
              </div>

              {/* Baris 3: "Living, slower." — paling kecil, italic, bronze accent */}
              <div
                className="font-display font-medium italic tracking-[-0.01em] leading-none mt-[5px]"
                style={{ fontSize: "clamp(1.5rem, 2.8vw, 3rem)" }}
              >
                <SplitText
                  text="Living, slower."
                  mode="word"
                  stagger={80}
                  duration={900}
                  delay={950}
                  charClassName="text-bronze/80"
                />
              </div>
            </h1>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-4" style={{ transform: "translateY(10px)" }}>
              <MagneticButton
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shine !py-3.5 !px-7"
              >
                <WhatsappIcon className="h-5 w-5" />
                Chat WhatsApp
              </MagneticButton>
              <Link
                href="#tipe-v2"
                data-cursor="expand"
                className="btn btn-ghost-on-dark !py-3.5 !px-7"
              >
                <CalendarIcon className="h-5 w-5" />
                Jelajahi Proyek
              </Link>
            </div>
          </div>

          {/* Bottom spacer kecil */}
          <div className="flex-[1]" />
        </div>
      </div>

      {/* SCROLL HINT */}
      <div
        aria-hidden
        className="absolute bottom-5 right-6 md:right-10 z-10 flex items-center gap-3 text-white/40"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <span className="relative block h-8 w-px bg-white/20 overflow-hidden">
          <span
            className="absolute inset-x-0 top-0 h-3 bg-white origin-top"
            style={{
              animation: "scroll-hint 1.8s cubic-bezier(0.22,1,0.36,1) infinite",
            }}
          />
        </span>
      </div>
    </section>
  );
}
