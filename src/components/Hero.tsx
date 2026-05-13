import Image from "next/image";
import Link from "next/link";
import { WhatsappIcon, CalendarIcon, CheckIcon } from "./Icon";
import { images } from "@/lib/images";
import { site, waHref } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden"
    >
      {/* Static decorative blobs — no parallax */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-24 h-[320px] w-[320px] rounded-full bg-bronze/10 blur-3xl"
      />

      <div className="container-x grid gap-10 lg:gap-14 lg:grid-cols-[1.05fr_1fr] items-center">
        <div>
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-strong)] bg-surface">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs tracking-wide text-muted-2">
                Fase 1 — Unit ready di {site.location}
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={80}>
            <h1 className="mt-5 font-display text-[clamp(2rem,6vw,3.25rem)] leading-[1.05] text-foreground">
              Rumah tropical modern,
              <br />
              <span className="text-gradient">siap huni</span> di Sawangan.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={160}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-2">
              Unit sudah berdiri, bisa dicek langsung. Pilihan{" "}
              <strong className="text-foreground font-semibold">
                full furnished
              </strong>
              , clubhouse NAMU, dan kemudahan KPR dengan 6 bank rekanan.
            </p>
          </Reveal>

          <Reveal direction="up" delay={220}>
            <ul className="mt-6 space-y-2.5 text-[15px] text-muted-2">
              {[
                "Unit ready stock, visit show unit kapan saja",
                "Opsi paket full furnished, pindah dalam 30 hari",
                "SHM, free BPHTB, in-house KPR team",
              ].map((t) => (
                <li key={t} className="flex gap-2.5 items-start">
                  <CheckIcon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={280}>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shine w-full sm:w-auto"
              >
                <WhatsappIcon className="h-5 w-5" />
                Chat WhatsApp
              </a>
              <Link
                href="#jadwal"
                className="btn btn-secondary w-full sm:w-auto"
              >
                <CalendarIcon className="h-5 w-5" />
                Jadwalkan Visit
              </Link>
            </div>
          </Reveal>

          <Reveal direction="up" delay={340}>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted">
              <div>
                <div className="text-foreground font-semibold text-base">
                  <Counter value={6} />
                  <span className="ml-1 text-muted font-normal">Bank</span>
                </div>
                <div>Partner KPR</div>
              </div>
              <div className="h-8 w-px bg-[var(--border-strong)]" />
              <div>
                <div className="text-foreground font-semibold text-base">
                  <Counter value={30} />
                  <span className="ml-1 text-muted font-normal">Hari</span>
                </div>
                <div>Siap huni</div>
              </div>
              <div className="h-8 w-px bg-[var(--border-strong)]" />
              <div>
                <div className="text-foreground font-semibold text-base">
                  SHM
                </div>
                <div>Per unit</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero visual */}
        <Reveal direction="left" delay={200} className="relative">
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] hover-zoom group">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover hover-zoom-img"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            />
            <div className="absolute left-4 bottom-4 right-4 md:left-6 md:bottom-6 md:right-auto md:max-w-xs">
              <div className="bg-background/90 backdrop-blur-md rounded-xl p-4 border border-[var(--border)] shadow-[var(--shadow-sm)]">
                <div className="eyebrow">Tipe Ruma 85</div>
                <div className="mt-1 text-sm text-foreground">
                  Fasad kayu & batu alam, bukaan lebar untuk ventilasi tropis.
                </div>
              </div>
            </div>
          </div>
          {/* accent image */}
          <div className="hidden md:block absolute -bottom-8 -left-8 w-40 h-52 rounded-xl overflow-hidden border border-[var(--border)] shadow-[var(--shadow-md)] animate-float">
            <Image
              src={images.heroAccent.src}
              alt={images.heroAccent.alt}
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
