"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MediaItem =
  | {
      type: "image";
      src: string;
      alt: string;
      title: string;
      caption: string;
    }
  | {
      type: "video";
      src: string;
      alt: string;
      title: string;
      caption: string;
      poster?: string;
    };

// Campuran foto & video disusun berselang-seling agar terasa satu narasi harian.
const moments: MediaItem[] = [
  {
    type: "image",
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778633655/Tamaruma_CLubhouse_gu5dfc.webp",
    alt: "NAMU Clubhouse Tamaruma Sawangan — fasilitas co-working dan lounge cluster Sawangan",
    title: "NAMU Clubhouse",
    caption: "Kopi pagi, co-working siang, percakapan sore.",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dzhvfbuks/video/upload/v1778633627/Rumah_Ready_Stok_Tamaruma_Sawangan_gm4wqu.mp4",
    alt: "Video rumah ready stock Tamaruma Sawangan — tour singkat cluster ready stock Sawangan",
    title: "Tour cluster",
    caption: "Jalan santai di komplek ready stock Sawangan.",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778633654/Lapangan_Basket_vnp84n.webp",
    alt: "Lapangan basket Tamaruma Sawangan — half court basketball di cluster Sawangan",
    title: "Half Court Basketball",
    caption: "Permainan sore sebelum matahari turun.",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dzhvfbuks/video/upload/v1778633619/Tamaruma_Pondok_Petir_otsfrn.mp4",
    alt: "Video Tamaruma Pondok Petir — area perumahan ready stock Sawangan Depok",
    title: "Workspace",
    caption: "Ruang kerja tenang di dalam rumah, tanpa perlu keluar cluster.",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778633617/Ruang_Santai_xfctrx.webp",
    alt: "Ruang santai rumah Tamaruma Sawangan — interior rumah ready stock Sawangan",
    title: "Ruang santai",
    caption: "Sudut baca yang jadi favorit anak.",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dzhvfbuks/video/upload/v1778633620/Tamaruma_Sawangan_Depok_zxx1d3.mp4",
    alt: "Video Tamaruma Sawangan Depok — perumahan tropical modern Sawangan Depok",
    title: "Suasana Perumahan",
    caption: "Lingkungan tenang, tetangga yang ramah, dan udara Sawangan yang segar.",
  },
];

/**
 * Horizontal scroll showcase with vertical scroll pinning (desktop only).
 * On mobile, falls back to a vertical stack.
 */
export function MomentsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mq = window.matchMedia("(min-width: 768px)");
    let raf = 0;

    const update = () => {
      if (!section || !track || !mq.matches) {
        setProgress(0);
        setOffset(0);
        return;
      }
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 0;
      setProgress(p);
      const maxOffset = Math.max(0, track.scrollWidth - window.innerWidth);
      setOffset(maxOffset * p);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mq.addEventListener("change", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <section
      id="momen"
      ref={sectionRef}
      className="relative dark-canvas md:h-[320vh]"
    >
      {/* Desktop: sticky pinned stage. Mobile: natural flow. */}
      <div className="md:sticky md:top-0 md:h-screen md:overflow-hidden">
        {/* HEADER BACKDROP — cinematic dark gradient behind heading */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-[5] h-[50%] pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,28,24,0.88) 0%, rgba(18,53,47,0.72) 40%, rgba(18,53,47,0.35) 70%, rgba(18,53,47,0) 100%)",
          }}
        />

        {/* Header */}
        <div className="relative md:absolute md:top-0 md:inset-x-0 z-10 px-[10px] md:px-10 pt-24 md:pt-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-baseline justify-between text-on-dark-muted">
              <div className="eyebrow eyebrow-on-dark">06 · Momen harian</div>
              <div className="eyebrow eyebrow-on-dark hidden md:block v-tabular">
                {Math.round(progress * 100).toString().padStart(2, "0")} / 100
              </div>
            </div>
            <h2
              className="mt-6 display-lg text-white max-w-4xl"
              style={{
                textShadow:
                  "0 2px 8px rgba(0,0,0,0.65), 0 4px 24px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              <span
                className="italic text-bronze"
                style={{
                  textShadow:
                    "0 2px 12px rgba(18,53,47,0.8), 0 0 32px rgba(138,94,58,0.35)",
                }}
              >
                Satu hari di komplek Tamaruma Sawangan —
              </span>{" "}
              <span className="text-white">
                dari kopi pagi hingga pelukan malam di perumahan tropical modern.
              </span>
            </h2>
          </div>
        </div>

        {/* DESKTOP horizontal track */}
        <div
          className="hidden md:flex absolute inset-0 items-end pb-20 pt-64 will-change-transform"
          style={{ transform: `translate3d(${-offset}px, 0, 0)` }}
        >
          <div ref={trackRef} className="flex gap-8 pl-10">
            {moments.map((m, i) => (
              <MomentFigure key={m.src} item={m} index={i} size="desktop" />
            ))}
            <div aria-hidden className="shrink-0 w-[10vw]" />
          </div>
        </div>

        {/* MOBILE stack */}
        <div className="md:hidden grid gap-6 px-[10px] pb-16 pt-10">
          {moments.map((m, i) => (
            <MomentFigure key={m.src} item={m} index={i} size="mobile" />
          ))}
        </div>

        {/* Progress bar (desktop only) */}
        <div className="hidden md:block absolute bottom-8 left-10 right-10 h-px bg-white/15 z-10">
          <div
            className="h-full bg-white"
            style={{
              width: `${Math.max(4, progress * 100)}%`,
              transition: "width 120ms linear",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function MomentFigure({
  item,
  index,
  size,
}: {
  item: MediaItem;
  index: number;
  size: "desktop" | "mobile";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // IntersectionObserver — pause video when off-screen, hemat bandwidth
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const containerClass =
    size === "desktop"
      ? "relative shrink-0 w-[55vw] lg:w-[42vw] aspect-[4/5] overflow-hidden rounded-sm bg-surface-2/20"
      : "relative aspect-[4/5] overflow-hidden rounded-sm bg-surface-2/20";

  return (
    <figure className={containerClass}>
      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={size === "desktop" ? "(min-width: 1024px) 42vw, 55vw" : "100vw"}
          className="object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          src={item.src}
          aria-label={item.alt}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={item.poster}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Gradient + badge video */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
      />
      {item.type === "video" && (
        <div className="absolute top-4 right-4 md:top-5 md:right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] tracking-[0.2em] uppercase text-white/90">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-bronze opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-bronze" />
          </span>
          Live
        </div>
      )}

      <figcaption
        className={
          size === "desktop"
            ? "absolute left-6 bottom-6 right-6 lg:left-8 lg:bottom-8"
            : "absolute left-5 bottom-5 right-5"
        }
      >
        <div className="v-tabular text-xs text-white/70">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div
          className={
            size === "desktop"
              ? "mt-2 font-display text-3xl lg:text-4xl text-white leading-tight"
              : "mt-1.5 font-display text-2xl text-white leading-tight"
          }
        >
          {item.title}
        </div>
        <div
          className={
            size === "desktop"
              ? "mt-1 text-sm text-white/75 max-w-sm"
              : "mt-1 text-sm text-white/75"
          }
        >
          {item.caption}
        </div>
      </figcaption>
    </figure>
  );
}
