"use client";

import Image from "next/image";
import Link from "next/link";
import { useElementScrollProgress } from "@/hooks/useParallax";
import { waHref, site } from "@/lib/site";
import { Reveal } from "../Reveal";
import { WhatsappIcon, CalendarIcon } from "../Icon";
import { SplitText } from "./SplitText";
import { MagneticButton } from "./MagneticButton";

export function CtaBlockV2() {
  const { ref, progress } = useElementScrollProgress<HTMLDivElement>();
  // ±40px range. Scale 1.15 gives 75px cushion on each side.
  const y = (progress - 0.5) * 80;

  return (
    <section
      id="kontak-v2"
      ref={ref}
      className="relative min-h-[90vh] flex items-center overflow-hidden text-white"
      style={{ background: "var(--surface-dark, #12352f)" }}
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${y}px, 0) scale(1.15)` }}
      >
        <Image
          src="https://res.cloudinary.com/dzhvfbuks/image/upload/v1778623125/Foto_Interior_Rumah_Tamaruma_2_wzbqeh.webp"
          alt="Interior rumah Tamaruma Sawangan — ruang dalam rumah ready stock Sawangan"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* Overlay berlapis: warm dark tone agar foto interior tetap terlihat tapi teks terbaca */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"
      />

      <div className="relative z-10 w-full py-28 md:py-36 px-[10px] md:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-14 md:mb-20 text-white/70">
          <div className="eyebrow !text-white/70">06 · Kontak</div>
          <div className="eyebrow !text-white/70 hidden md:block">
            Visit by appointment
          </div>
        </div>

        <h2 className="display-xl">
          <SplitText
            text="Datang,"
            mode="char"
            stagger={30}
            duration={1000}
            italic
            charClassName="text-white/85"
          />{" "}
          <SplitText
            text="lihat,"
            mode="char"
            stagger={30}
            duration={1000}
            delay={250}
            charClassName="text-white"
          />
          <br />
          <SplitText
            text="rasakan."
            mode="char"
            stagger={30}
            duration={1000}
            delay={500}
            charClassName="text-white"
          />
        </h2>

        <div className="mt-12 grid md:grid-cols-12 gap-8 md:gap-10 items-end">
          <Reveal delay={200} className="md:col-span-6">
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl">
              Kami lebih percaya kunjungan daripada brosur. Luangkan 45 menit, kami akan ajak keliling rumah ready stock Sawangan di komplek Tamaruma Sawangan — tour show unit, simulasi KPR personal, dan kopi pagi di NAMU Clubhouse.
            </p>
          </Reveal>

          <Reveal
            delay={280}
            className="md:col-span-6 flex flex-col sm:flex-row gap-3 md:justify-end"
          >
            <MagneticButton
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shine !py-4 !px-7 !text-base"
              strength={0.2}
            >
              <WhatsappIcon className="h-5 w-5" />
              Chat WhatsApp
            </MagneticButton>
            <Link
              href="/#jadwal"
              data-cursor="expand"
              className="btn btn-ghost-on-dark !py-4 !px-7 !text-base"
            >
              <CalendarIcon className="h-5 w-5" />
              Jadwalkan Visit
            </Link>
          </Reveal>
        </div>

        {/* Bottom meta */}
        <div className="mt-16 pt-6 border-t border-white/20 grid md:grid-cols-3 gap-6 text-xs uppercase tracking-[0.2em] text-white/70">
          <div>
            <div className="text-white/50 mb-2">Alamat</div>
            <div className="text-white text-sm normal-case tracking-normal">
              {site.address}
            </div>
          </div>
          <div>
            <div className="text-white/50 mb-2">Jam marketing</div>
            <div className="text-white text-sm normal-case tracking-normal">
              Senin – Sabtu · 09.00 – 17.00 WIB
            </div>
          </div>
          <div>
            <div className="text-white/50 mb-2">Respons WhatsApp</div>
            <div className="text-white text-sm normal-case tracking-normal">
              Rata-rata dalam 2 jam kerja
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
