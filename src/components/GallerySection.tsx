"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () =>
      setActive((a) =>
        a === null ? a : (a + 1) % images.interiors.length
      ),
    []
  );
  const prev = useCallback(
    () =>
      setActive((a) =>
        a === null
          ? a
          : (a - 1 + images.interiors.length) % images.interiors.length
      ),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section id="galeri" className="section bg-surface-2/50">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-xl">
            <Reveal>
              <div className="eyebrow">Galeri</div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
                Interior yang terasa hangat, bukan kaku.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="text-sm text-muted-2 max-w-sm">
              Klik foto untuk melihat detail. Visit langsung untuk melihat
              material dan pencahayaan alami.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-3 grid-cols-2 md:grid-cols-4">
          {images.interiors.map((img, i) => (
            <Reveal
              as="li"
              key={img.src}
              delay={i * 80}
              className={`${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"
              }`}
            >
              <button
                onClick={() => setActive(i)}
                className="relative w-full h-full overflow-hidden rounded-xl border border-[var(--border)] group hover-zoom focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label={`Perbesar: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover hover-zoom-img"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="bg-background/95 text-foreground text-xs font-medium rounded-full px-3 py-1.5 border border-[var(--border)] shadow-[var(--shadow-sm)]">
                    Lihat detail
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau foto"
          onClick={close}
          className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_200ms_ease-out]"
          style={{ animation: "fade-in 220ms ease-out" }}
        >
          <button
            aria-label="Tutup"
            onClick={close}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          <button
            aria-label="Sebelumnya"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 md:left-8 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-[16/10]"
          >
            <Image
              src={images.interiors[active].src}
              alt={images.interiors[active].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/80 bg-black/40 rounded-full px-3 py-1">
              {active + 1} / {images.interiors.length} ·{" "}
              {images.interiors[active].alt}
            </div>
          </div>

          <button
            aria-label="Berikutnya"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 md:right-8 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      ) : null}

      <style>{`@keyframes fade-in { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </section>
  );
}
