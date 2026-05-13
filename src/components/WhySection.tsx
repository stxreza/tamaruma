import { whyCards } from "@/lib/site";
import {
  KeyIcon,
  SofaIcon,
  ShieldIcon,
  LeafIcon,
} from "./Icon";
import type { SVGProps } from "react";
import { Reveal } from "./Reveal";

const iconFor: Record<number, (p: SVGProps<SVGSVGElement>) => React.ReactNode> = {
  0: (p) => <KeyIcon {...p} />,
  1: (p) => <SofaIcon {...p} />,
  2: (p) => <ShieldIcon {...p} />,
  3: (p) => <LeafIcon {...p} />,
};

export function WhySection() {
  return (
    <section id="why" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <div className="eyebrow">Kenapa Tamaruma</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
              Dirancang untuk keluarga yang ingin pindah tahun ini — tanpa
              kompromi.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-muted-2">
              Tiga hal yang kami dengar paling sering dari calon penghuni, dan
              bagaimana Tamaruma menjawabnya secara konkret.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((c, i) => {
            const Icon = iconFor[i] ?? iconFor[0];
            return (
              <Reveal as="li" key={c.title} delay={i * 90}>
                <article className="card lift group relative p-6 flex flex-col gap-4 overflow-hidden h-full">
                  {/* hover gradient wash */}
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-bronze/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* top border accent */}
                  <span
                    aria-hidden
                    className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-bronze transition-all duration-500 group-hover:w-full"
                  />

                  <span className="relative inline-flex h-11 w-11 items-center justify-center text-accent">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-accent/8 scale-0 group-hover:scale-100 transition-transform duration-400"
                    />
                    <span className="relative">
                      {Icon({ className: "h-6 w-6" })}
                    </span>
                  </span>

                  <div className="relative eyebrow text-bronze">{c.pain}</div>
                  <h3 className="relative text-[17px] font-semibold leading-snug text-foreground">
                    {c.title}
                  </h3>
                  <p className="relative text-sm leading-relaxed text-muted-2">
                    {c.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
