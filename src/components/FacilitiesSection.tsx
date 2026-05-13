import Image from "next/image";
import { facilities } from "@/lib/site";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";

export function FacilitiesSection() {
  return (
    <section id="fasilitas" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <div className="eyebrow">Fasilitas</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
              NAMU Clubhouse dan area yang bikin akhir pekan jadi pendek.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-muted-2">
              Fasilitas dirancang agar bisa dipakai harian — bukan sekadar
              amenitas brosur.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-6 md:grid-rows-2 md:auto-rows-[220px]">
          {images.facilities.map((f, i) => {
            const facility = facilities[i];
            const span =
              i === 0
                ? "md:col-span-4 md:row-span-2"
                : i === 1
                ? "md:col-span-2"
                : "md:col-span-1";

            return (
              <Reveal
                as="figure"
                key={f.key}
                delay={i * 110}
                className={`relative overflow-hidden rounded-2xl border border-[var(--border)] group hover-zoom ${span}`}
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover hover-zoom-img"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                />
                <figcaption className="absolute left-4 bottom-4 right-4">
                  <div className="inline-flex flex-col bg-background/92 backdrop-blur-md rounded-lg px-3 py-2 border border-[var(--border)] translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                    <span className="text-sm font-medium text-foreground">
                      {facility?.title}
                    </span>
                    <span className="text-xs text-muted">
                      {facility?.caption}
                    </span>
                  </div>
                </figcaption>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
