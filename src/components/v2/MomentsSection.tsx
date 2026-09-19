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
    alt: "",
    title: "NAMU Clubhouse",
    caption: "Kopi pagi, co-working siang, percakapan sore.",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dzhvfbuks/video/upload/v1778633627/Rumah_Ready_Stok_Tamaruma_Sawangan_gm4wqu.mp4",
    alt: "Video rumah ready stock Tamaruma Sawangan, tour singkat cluster ready stock Sawangan",
    title: "Tour cluster",
    caption: "Jalan santai di komplek ready stock Sawangan.",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778633654/Lapangan_Basket_vnp84n.webp",
    alt: "Lapangan basket Tamaruma Sawangan, half court basketball di cluster Sawangan",
    title: "Half Court Basketball",
    caption: "Permainan sore sebelum matahari turun.",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dzhvfbuks/video/upload/v1778633619/Tamaruma_Pondok_Petir_otsfrn.mp4",
    alt: "Video Tamaruma Pondok Petir, area perumahan ready stock Sawangan Depok",
    title: "Workspace",
    caption: "Ruang kerja tenang di dalam rumah, tanpa perlu keluar cluster.",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778633617/Ruang_Santai_xfctrx.webp",
    alt: "Ruang santai rumah Tamaruma Sawangan, interior rumah ready stock Sawangan",
    title: "Ruang santai",
    caption: "Sudut baca yang jadi favorit anak.",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dzhvfbuks/video/upload/v1778633620/Tamaruma_Sawangan_Depok_zxx1d3.mp4",
    alt: "Video Tamaruma Sawangan Depok, perumahan tropical modern Sawangan Depok",
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

    let raf = 0;

    const update = () => {
      if (!section || !track) {
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

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="momen"
      ref={sectionRef}
      className="relative dark-canvas h-[400vh] md:h-[320vh]"
    >
      {/* Sticky pinned stage for all devices */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header backdrop */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-[5] h-[50%] pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,28,24,0.88) 0%, rgba(18,53,47,0.72) 40%, rgba(18,53,47,0.35) 70%, rgba(18,53,47,0) 100%)",
          }}
        />



        {/* Horizontal track */}
        <div
          className="flex absolute inset-0 items-center justify-start will-change-transform"
          style={{ transform: `translate3d(${-offset}px, 0, 0)` }}
        >
          <div ref={trackRef} className="flex gap-4 md:gap-8 pl-5 md:pl-10">
            {moments.map((m, i) => (
              <MomentFigure key={m.src} item={m} index={i} size="desktop" />
            ))}
            <div aria-hidden className="shrink-0 w-[10vw]" />
          </div>
        </div>

        {/* Progress bar (desktop only) */}
        <div className="hidden md:block absolute bottom-6 left-10 right-10 h-px bg-white/15 z-20">
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

  // Pause video when off-screen
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
    "relative shrink-0 h-[60vh] md:h-[70vh] w-auto aspect-[4/5] max-w-[85vw] md:max-w-[70vw] overflow-hidden rounded-sm bg-surface-2/20";

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
        <div className="absolute top-4 right-4 md:top-5 md:right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-white/20 text-[10px] tracking-[0.2em] uppercase text-white/90">
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
