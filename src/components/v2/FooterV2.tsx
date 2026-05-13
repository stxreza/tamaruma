"use client";

import { site } from "@/lib/site";
import { useInView } from "@/hooks/useInView";
import { LocalTime } from "./LocalTime";

export function FooterV2() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <footer
      ref={ref}
      className="dark-canvas pt-20 pb-8 relative overflow-hidden z-10"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 pointer-events-none flex items-end justify-center select-none overflow-hidden"
      >
        <span
          className="font-display text-[22vw] leading-[0.8] text-white/[0.05] tracking-tighter will-change-transform transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: inView ? "translateY(0)" : "translateY(30%)",
          }}
        >
          Tamaruma
        </span>
      </div>

      <div className="relative px-[10px] md:px-10 max-w-[1400px] mx-auto z-10">
        <div className="grid md:grid-cols-12 gap-10 pb-16">
          <div className="md:col-span-5">
            <div className="font-display text-4xl md:text-5xl text-on-dark leading-tight">
              Tamaruma Sawangan.
            </div>
            <p className="mt-4 text-sm text-on-dark-muted max-w-sm">
              {site.tagline}. Developed by {site.developer}.
            </p>
            <div className="mt-6 text-[11px] tracking-[0.25em] uppercase text-on-dark-muted">
              <LocalTime />
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <div className="eyebrow eyebrow-on-dark">Jelajah</div>
            <ul className="mt-4 space-y-2 text-sm text-on-dark-muted">
              <li>
                <a href="/#intro-v2" className="hover:text-on-dark">
                  Intro
                </a>
              </li>
              <li>
                <a href="/#tipe-v2" className="hover:text-on-dark">
                  Tipe
                </a>
              </li>
              <li>
                <a href="/#manifesto" className="hover:text-on-dark">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="/#galeri-v2" className="hover:text-on-dark">
                  Galeri
                </a>
              </li>
              <li>
                <a href="/#momen" className="hover:text-on-dark">
                  Momen harian
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow eyebrow-on-dark">Navigasi</div>
            <ul className="mt-4 space-y-2 text-sm text-on-dark-muted">
              <li>
                <a href="/kontak" className="hover:text-on-dark">
                  Kontak
                </a>
              </li>
              <li>
                <a href="/harga" className="hover:text-on-dark">
                  Harga
                </a>
              </li>
              <li>
                <a href="/#kontak-v2" className="hover:text-on-dark">
                  Jadwal visit
                </a>
              </li>
              <li>
                <a href="/kebijakan-privasi" className="hover:text-on-dark">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-on-dark">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow eyebrow-on-dark">Kontak</div>
            <ul className="mt-4 space-y-2 text-sm text-on-dark-muted">
              <li>{site.address}</li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\D/g, "")}`}
                  className="hover:text-on-dark"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-on-dark">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row gap-2 justify-between text-xs text-on-dark-muted">
          <div>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://sakani.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-on-dark transition-colors"
            >
              Sakani.id
            </a>
            . Semua hak dilindungi.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>
              Render, denah, dan harga bersifat ilustrasi dan dapat berubah.
            </span>
            <a
              href="/disclaimer"
              className="hover:text-on-dark underline underline-offset-2"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
