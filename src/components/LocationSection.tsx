import Image from "next/image";
import { images } from "@/lib/images";
import { MapPinIcon } from "./Icon";
import { Reveal } from "./Reveal";

const points = [
  { label: "Stasiun KRL Citayam", time: "12 menit" },
  { label: "Tol Desari (Depok–Antasari)", time: "8 menit" },
  { label: "RS Meilia Cibubur / Bhineka Bakti Husada", time: "15 menit" },
  { label: "Sekolah Al-Azhar & Global Islamic School", time: "10 menit" },
  { label: "AEON Mall & Cinere Bellevue", time: "18 menit" },
  { label: "Setu Asih — ruang hijau kota", time: "5 menit" },
];

export function LocationSection() {
  return (
    <section id="lokasi" className="section bg-surface-2/60">
      <div className="container-x grid gap-10 lg:gap-14 lg:grid-cols-[1fr_1.1fr] items-center">
        <div>
          <Reveal>
            <div className="eyebrow">Lokasi</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
              Di sisi tenang Sawangan — dekat akses kota, jauh dari hiruk.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-muted-2 max-w-xl">
              Cluster berada di koridor Sawangan yang tenang namun dekat dengan
              Tol Desari, KRL, dan sekolah utama. Rute ke Jakarta Selatan bisa
              di bawah 30 menit di luar jam sibuk.
            </p>
          </Reveal>

          <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {points.map((p, i) => (
              <Reveal as="li" key={p.label} delay={180 + i * 60}>
                <div className="flex items-start gap-3 group">
                  <span className="relative mt-0.5 shrink-0">
                    <MapPinIcon className="h-5 w-5 text-accent transition-transform group-hover:-translate-y-0.5" />
                  </span>
                  <div>
                    <div className="text-sm text-foreground font-medium">
                      {p.label}
                    </div>
                    <div className="text-xs text-muted">
                      ± {p.time} berkendara
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal
          direction="left"
          delay={200}
          className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden border border-[var(--border)] shadow-[var(--shadow-md)] group hover-zoom"
        >
          <Image
            src={images.location.src}
            alt={images.location.alt}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover hover-zoom-img"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />

          {/* animated map pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent pulse-ring" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-accent ring-4 ring-background/90" />
            </span>
          </div>

          <div className="absolute left-5 bottom-5 right-5 md:right-auto md:max-w-xs">
            <div className="bg-background/92 backdrop-blur-md rounded-xl p-4 border border-[var(--border)] shadow-[var(--shadow-sm)]">
              <div className="eyebrow">Tamaruma Sawangan</div>
              <div className="mt-1 text-sm text-foreground">
                Jl. Raya Sawangan, Pasir Putih, Depok
              </div>
              <div className="mt-1 text-xs text-muted">
                Koordinat peta sementara — akan diganti peta interaktif.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
