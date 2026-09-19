import { NavV2 } from "@/components/v2/NavV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { WhatsappIcon } from "@/components/Icon";
import { waHref } from "@/lib/site";
import Link from "next/link";

export default function PromoPage() {
  return (
    <>
      <NavV2 />
      <FloatingChat />
      <BackToTop />

      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-12 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div className="eyebrow">Penawaran Spesial</div>
            <h1 className="font-display display-xl mt-4 text-foreground leading-[1.15]">
              Promo Kemerdekaan <br className="hidden md:block" /> Tamaruma Sawangan
            </h1>
            <p className="mt-6 text-lg text-muted max-w-[640px] leading-relaxed">
              Miliki rumah ready stock idaman Anda di Sawangan tanpa perlu pusing
              menyiapkan ratusan juta rupiah di awal. Semua biaya tambahan sudah 
              kami tanggung.
            </p>
          </div>
        </section>

        <section className="pb-24 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-7 space-y-6">
                
                <div className="bg-surface border border-[var(--border)] rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <h2 className="font-display text-2xl text-foreground m-0">DP Flat Rp 50 Juta All-In</h2>
                  </div>
                  <p className="text-sm text-muted leading-relaxed pl-16">
                    Berapapun harga rumah pilihan Anda (Tipe 58, Tipe 85, maupun tipe Hook),
                    Down Payment (DP) yang dibayarkan ke developer dikunci (flat) di angka Rp 50 juta. 
                    Tanpa biaya tersembunyi.
                  </p>
                </div>

                <div className="bg-surface border border-[var(--border)] rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <h2 className="font-display text-2xl text-foreground m-0">Free Biaya Akad KPR (S&amp;K)</h2>
                  </div>
                  <p className="text-sm text-muted leading-relaxed pl-16">
                    Mencakup pembebasan biaya provisi bank, administrasi, asuransi jiwa,
                    asuransi kebakaran, hingga notaris APHT. Total penghematan bisa 
                    mencapai Rp 50-70 juta tergantung plafon.
                  </p>
                </div>

                <div className="bg-surface border border-[var(--border)] rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <h2 className="font-display text-2xl text-foreground m-0">Free BPHTB &amp; AJB</h2>
                  </div>
                  <p className="text-sm text-muted leading-relaxed pl-16">
                    Pajak pembeli (BPHTB) sebesar 5% dan biaya pembuatan Akta Jual Beli (AJB) 
                    ke Notaris/PPAT sudah di-cover penuh dalam harga jual.
                  </p>
                </div>

              </div>

              <div className="md:col-span-5">
                <div className="sticky top-32 bg-accent/5 border border-accent/20 rounded-2xl p-8">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-accent font-bold mb-4">
                    Validasi Promo
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-4">
                    Klaim Kuota Promo Anda Bulan Ini
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-8">
                    Promo ini terbatas dan dapat dihentikan sewaktu-waktu oleh developer 
                    tanpa pemberitahuan sebelumnya. Segera hubungi tim marketing kami untuk
                    mengunci kuota promo Anda sebelum visit.
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary shine w-full justify-center"
                    >
                      <WhatsappIcon className="h-5 w-5" />
                      Klaim Promo via WhatsApp
                    </a>
                    <Link
                      href="/harga"
                      className="btn btn-ghost w-full justify-center"
                    >
                      Lihat Daftar Harga (Pricelist)
                    </Link>
                  </div>

                  <div className="mt-6 pt-6 border-t border-accent/20 text-xs text-muted">
                    *Syarat dan ketentuan berlaku. Approval nilai plafon KPR 
                    sepenuhnya merupakan kewenangan bank penyedia kredit.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <FooterV2 />
    </>
  );
}
