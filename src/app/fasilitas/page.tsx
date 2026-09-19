import { NavV2 } from "@/components/v2/NavV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { facilities } from "@/lib/site";

export default function FasilitasPage() {
  return (
    <>
      <NavV2 />
      <FloatingChat />
      <BackToTop />

      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-12 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="eyebrow">Fasilitas Perumahan</div>
            <h1 className="font-display display-xl mt-4 text-foreground leading-[1.15]">
              NAMU Clubhouse &amp; Fasilitas Kawasan
            </h1>
            <p className="mt-6 text-lg text-muted max-w-[640px] leading-relaxed">
              Tamaruma Sawangan bukan sekadar kumpulan rumah, melainkan sebuah kawasan
              hunian seluas 3 hektar yang didesain untuk mendukung gaya hidup sehat
              dan sosial penghuninya.
            </p>
          </div>
        </section>

        <section className="pb-24 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <article className="prose-section space-y-4 text-[15px] text-muted leading-relaxed mb-12">
              <p>
                <strong>NAMU Clubhouse</strong> adalah pusat aktivitas sosial di dalam 
                cluster Tamaruma Sawangan. Semua fasilitas ini dikelola secara profesional 
                melalui iuran pengelolaan lingkungan (IPL) sebesar Rp 25.000/m² per bulan.
              </p>
              <p>
                Karena Tamaruma Sawangan adalah cluster rumah ready stock, semua fasilitas 
                berikut sudah selesai dibangun dan beroperasi penuh sejak awal 2026. Anda tidak 
                perlu menunggu janji developer yang seringkali tertunda bertahun-tahun 
                di proyek perumahan lain.
              </p>
            </article>

            <div className="grid md:grid-cols-2 gap-6">
              {facilities.map((f, i) => (
                <div key={f.title} className="bg-surface rounded-2xl p-8 border border-[var(--border)]">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted mb-4">
                    Fasilitas 0{i + 1}
                  </div>
                  <h2 className="font-display text-2xl text-foreground mb-3">{f.title}</h2>
                  <p className="text-sm text-muted leading-relaxed">
                    {f.caption}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-accent/5 border border-accent/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                Sistem Keamanan Terintegrasi
              </h2>
              <p className="text-muted mb-0 text-sm max-w-2xl mx-auto leading-relaxed">
                Kenyamanan berlindung di lingkungan yang aman adalah prioritas kami. 
                Cluster Tamaruma Sawangan dilindungi oleh <strong>One Gate System</strong> (Sistem Satu Gerbang)
                dengan portal elektronik, pantauan CCTV 24 jam di titik-titik krusial kawasan,
                serta regu satuan pengamanan (Satpam) yang berpatroli secara berkala.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FooterV2 />
    </>
  );
}
