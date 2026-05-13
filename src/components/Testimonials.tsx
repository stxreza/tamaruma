import { testimonials, trustLogos } from "@/lib/site";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimoni" className="section">
      <div className="container-x">
        <div className="max-w-xl">
          <Reveal>
            <div className="eyebrow">Cerita penghuni</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
              Dari keluarga yang sudah pindah duluan.
            </h2>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 120}>
              <article className="card lift p-6 flex flex-col gap-5 h-full">
                <svg
                  aria-hidden
                  viewBox="0 0 32 24"
                  className="h-6 w-6 text-bronze"
                  fill="currentColor"
                >
                  <path d="M0 24V12C0 5.373 5.373 0 12 0v4c-4.418 0-8 3.582-8 8h8v12H0Zm20 0V12C20 5.373 25.373 0 32 0v4c-4.418 0-8 3.582-8 8h8v12H20Z" />
                </svg>
                <p className="text-[15px] leading-relaxed text-foreground">
                  “{t.quote}”
                </p>
                <div className="mt-auto">
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 border-t border-[var(--border)] pt-8">
          <div className="eyebrow text-center">Partner KPR</div>
          <div className="mt-5">
            <Marquee speed={30}>
              {trustLogos.map((l) => (
                <span
                  key={l}
                  className="text-sm md:text-base tracking-[0.18em] text-muted-2 hover:text-foreground transition-colors font-semibold uppercase"
                >
                  {l}
                </span>
              ))}
            </Marquee>
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            Logo teks sementara — akan diganti dengan logo resmi setelah aset
            diterima.
          </p>
        </div>
      </div>
    </section>
  );
}
