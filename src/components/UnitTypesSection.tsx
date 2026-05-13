import Image from "next/image";
import Link from "next/link";
import { unitTypes } from "@/lib/site";
import { images } from "@/lib/images";
import { formatIDR } from "@/lib/format";
import {
  BedIcon,
  BathIcon,
  CarIcon,
  RulerIcon,
  ArrowRightIcon,
} from "./Icon";
import { Reveal } from "./Reveal";

const imageMap: Record<string, string> = {
  t58: images.units.t58[0].src,
  t85: images.units.t85[0].src,
  hook: images.units.hook[0].src,
};

export function UnitTypesSection() {
  return (
    <section id="tipe" className="section">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-xl">
            <Reveal>
              <div className="eyebrow">Tipe Unit</div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
                Tiga tipe, semuanya sudah berdiri.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="text-muted-2 max-w-sm">
              Pilih sesuai kebutuhan keluarga. Semua tipe tersedia opsi{" "}
              <span className="text-foreground font-medium">furnished</span>.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {unitTypes.map((u, i) => (
            <Reveal as="li" key={u.slug} delay={i * 120}>
              <article className="card lift hover-zoom group overflow-hidden flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imageMap[u.slug]}
                    alt={`Render ${u.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover hover-zoom-img"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {u.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[11px] font-medium tracking-wide px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-[var(--border)] text-foreground"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="font-display text-2xl text-foreground">
                      {u.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-2 leading-relaxed">
                      {u.description}
                    </p>
                  </div>

                  <dl className="grid grid-cols-4 gap-2 text-center text-xs text-muted-2">
                    <div className="rounded-lg bg-surface-2/60 py-2.5 px-2 flex flex-col items-center gap-1">
                      <RulerIcon className="h-4 w-4 text-accent" />
                      <dt className="sr-only">Luas tanah / bangunan</dt>
                      <dd className="leading-tight">
                        <span className="block text-foreground font-medium">
                          {u.landSize}/{u.buildingSize}
                        </span>
                        <span>m²</span>
                      </dd>
                    </div>
                    <div className="rounded-lg bg-surface-2/60 py-2.5 px-2 flex flex-col items-center gap-1">
                      <BedIcon className="h-4 w-4 text-accent" />
                      <dt className="sr-only">Kamar tidur</dt>
                      <dd className="leading-tight">
                        <span className="block text-foreground font-medium">
                          {u.bedrooms}
                        </span>
                        <span>K. Tidur</span>
                      </dd>
                    </div>
                    <div className="rounded-lg bg-surface-2/60 py-2.5 px-2 flex flex-col items-center gap-1">
                      <BathIcon className="h-4 w-4 text-accent" />
                      <dt className="sr-only">Kamar mandi</dt>
                      <dd className="leading-tight">
                        <span className="block text-foreground font-medium">
                          {u.bathrooms}
                        </span>
                        <span>K. Mandi</span>
                      </dd>
                    </div>
                    <div className="rounded-lg bg-surface-2/60 py-2.5 px-2 flex flex-col items-center gap-1">
                      <CarIcon className="h-4 w-4 text-accent" />
                      <dt className="sr-only">Carport</dt>
                      <dd className="leading-tight">
                        <span className="block text-foreground font-medium">
                          {u.carport}
                        </span>
                        <span>Carport</span>
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-muted">
                        Harga mulai
                      </div>
                      <div className="text-xl font-semibold text-foreground">
                        {formatIDR(u.priceFrom)}
                      </div>
                      <div className="text-[11px] text-bronze">
                        Cicilan dari {formatIDR(u.installmentFrom)}/bln*
                      </div>
                    </div>
                    <Link
                      href="#jadwal"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-700 transition-all group/link"
                    >
                      Detail
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 text-xs text-muted">
          *Ilustrasi cicilan dengan asumsi DP 20%, tenor 20 tahun, bunga fixed
          7,5%. Hasil akhir tergantung persetujuan bank.
        </p>
      </div>
    </section>
  );
}
