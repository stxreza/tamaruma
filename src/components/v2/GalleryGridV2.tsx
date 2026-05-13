"use client";

import Image from "next/image";
import { useElementScrollProgress } from "@/hooks/useParallax";
import { Reveal } from "../Reveal";
import { SplitText } from "./SplitText";

const galleryPhotos = [
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778628858/Workdpsce_Area_eicefp.webp",
    alt: "Workspace area rumah Tamaruma Sawangan — ruang kerja di rumah ready stock Sawangan",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778628858/Rumah_Tipe_58_1_rkjvvk.webp",
    alt: "Fasad rumah Tipe 58 Tamaruma Sawangan — tampak depan unit ready stock Sawangan",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778628857/Suasana_Sore_Hari_di_Tamaruma_vda8zx.webp",
    alt: "Suasana sore hari di komplek Tamaruma Sawangan — perumahan tropical modern Depok",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778628857/Kamar_Tamaruma_ojpppx.webp",
    alt: "Kamar tidur rumah Tamaruma Sawangan — interior kamar cluster ready stock Sawangan",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778628857/Backyard_Room_waj9rq.webp",
    alt: "Backyard room Tamaruma Sawangan — area belakang rumah ready stock Sawangan",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778628857/Family_Room_ropwlb.webp",
    alt: "Family room Tamaruma Sawangan — ruang keluarga rumah tropical modern Sawangan",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778628857/a82a7ec2-3f64-4a3c-bd87-1ca876c0c306_ytzp3i.webp",
    alt: "Area outdoor Tamaruma Sawangan — lingkungan perumahan cluster Sawangan Depok",
  },
  {
    src: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778629235/Taman_Belakang_Rumah_xrqrcb.webp",
    alt: "Taman belakang rumah Tamaruma Sawangan — lanskap tropis perumahan cluster Sawangan",
  },
];

// Bagi 8 foto: kolom kiri 4, kolom kanan 4
const leftPhotos = [galleryPhotos[0], galleryPhotos[2], galleryPhotos[4], galleryPhotos[6]];
const rightPhotos = [galleryPhotos[1], galleryPhotos[3], galleryPhotos[5], galleryPhotos[7]];

export function GalleryGridV2() {
  const { ref, progress } = useElementScrollProgress<HTMLDivElement>();
  const leftY = (progress - 0.5) * 40;
  const rightY = (0.5 - progress) * 40;

  return (
    <section id="galeri-v2" className="bg-background py-24 md:py-36">
      <div className="px-[10px] md:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <div className="eyebrow">04 · Galeri</div>
          <div className="eyebrow hidden md:block">
            Tamaruma Sawangan in frames
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-end mb-14 md:mb-20">
          <div className="md:col-span-7">
            <h2 className="display-lg text-foreground">
              <SplitText
                text="Sebelum Anda memutuskan,"
                mode="word"
                stagger={60}
                duration={900}
                italic
                charClassName="text-muted"
              />{" "}
              <SplitText
                text="kami ingin Anda merasakannya dulu."
                mode="word"
                stagger={55}
                duration={900}
                delay={500}
              />
            </h2>
          </div>
          <Reveal delay={180} className="md:col-span-4 md:col-start-9">
            <p className="text-base text-muted-2 leading-relaxed">
              Berdiri di depan jendelanya. Sentuh dindingnya. Bayangkan pagi pertama Anda di sini — karena semua yang ada di foto ini sudah menunggu, bukan sedang dibuat.
            </p>
          </Reveal>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-5 md:gap-8 items-start"
        >
          {/* Kolom kiri — 4 foto, offset ke bawah di desktop */}
          <div
            className="grid gap-5 md:gap-8 md:mt-16 will-change-transform"
            style={{ transform: `translate3d(0, ${leftY}px, 0)` }}
          >
            {leftPhotos.map((img, i) => (
              <GalleryFigure
                key={img.src}
                src={img.src}
                alt={img.alt}
                index={i * 2 + 1}
                total={galleryPhotos.length}
                delay={i * 120}
                aspect={i % 2 === 0 ? "4/5" : "5/6"}
              />
            ))}
          </div>

          {/* Kolom kanan — 3 foto */}
          <div
            className="grid gap-5 md:gap-8 will-change-transform"
            style={{ transform: `translate3d(0, ${rightY}px, 0)` }}
          >
            {rightPhotos.map((img, i) => (
              <GalleryFigure
                key={img.src}
                src={img.src}
                alt={img.alt}
                index={i * 2 + 2}
                total={galleryPhotos.length}
                delay={i * 120 + 140}
                aspect={i % 2 === 0 ? "5/6" : "4/5"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryFigure({
  src,
  alt,
  index,
  total,
  delay,
  aspect,
}: {
  src: string;
  alt: string;
  index: number;
  total: number;
  delay: number;
  aspect: "4/5" | "5/6";
}) {
  return (
    <Reveal
      as="figure"
      delay={delay}
      className={`relative overflow-hidden rounded-sm group bg-surface-2 ${
        aspect === "4/5" ? "aspect-[4/5]" : "aspect-[5/6]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 40vw, 100vw"
        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />
      <span className="absolute top-4 right-4 text-[10px] tracking-[0.25em] uppercase text-white/70 v-tabular opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
        {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <figcaption className="absolute bottom-5 left-5 right-5 text-sm text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        {alt}
      </figcaption>
    </Reveal>
  );
}
