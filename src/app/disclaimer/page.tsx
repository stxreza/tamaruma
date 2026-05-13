"use client";

import { NavV2 } from "@/components/v2/NavV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { FloatingChat } from "@/components/FloatingChat";
import { BackToTop } from "@/components/BackToTop";
import { site } from "@/lib/site";
import { useInView } from "@/hooks/useInView";

export default function DisclaimerPage() {
  const { ref, inView } = useInView<HTMLDivElement>();

  const sections = [
    {
      id: "umum",
      title: "1. Disclaimer Umum",
      content: [
        "Website ini dikelola oleh tim pemasaran Tamaruma, sebuah proyek properti yang merupakan bagian dari Ruma.id. Website ini dibuat dan dioperasikan semata-mata untuk keperluan pemasaran dan informasi proyek perumahan Tamaruma Sawangan.",
        "Informasi yang disajikan di website ini bersifat umum, indikatif, dan dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Untuk informasi resmi, final, dan mengikat secara hukum, silakan merujuk pada dokumen perjanjian jual beli dan dokumen legal yang diterbitkan oleh Ruma.id selaku developer.",
        "Dengan mengakses dan menggunakan website ini, Anda menyetujui semua ketentuan dalam disclaimer ini. Jika Anda tidak setuju dengan ketentuan ini, mohon untuk tidak menggunakan website ini.",
      ],
    },
    {
      id: "ai-marketing",
      title: "2. Penggunaan Kecerdasan Buatan (AI)",
      content: [
        "Website ini menggunakan teknologi kecerdasan buatan (Artificial Intelligence/AI) untuk tujuan marketing, termasuk namun tidak terbatas pada:",
        "• Pembuatan konten teks dan copywriting\n• Optimasi SEO dan kata kunci\n• Personalisasi pengalaman pengguna\n• Analisis data pengunjung\n• Chatbot dan asisten virtual",
        "Konten yang dihasilkan oleh AI telah ditinjau dan diverifikasi oleh tim manusia kami untuk memastikan akurasi dan relevansi. Namun, kami tidak menjamin 100% akurasi dari setiap informasi yang dihasilkan atau dibantu oleh teknologi AI.",
        "Keputusan pembelian properti harus didasarkan pada verifikasi langsung, konsultasi dengan tim marketing kami, dan pemeriksaan dokumen legal yang sah.",
      ],
    },
    {
      id: "visual",
      title: "3. Materi Visual dan Representasi",
      content: [
        "Foto, gambar, render 3D, video, dan materi visual lainnya yang ditampilkan di website ini adalah untuk tujuan ilustrasi dan promosi. Beberapa hal yang perlu diperhatikan:",
        "• Foto show unit adalah foto aktual dari unit yang telah dibangun, namun finishing, furnitur, dan dekorasi dapat berbeda dengan unit yang Anda beli\n• Render 3D dan ilustrasi adalah representasi artistik yang dapat berbeda dengan hasil akhir pembangunan\n• Warna, tekstur, dan pencahayaan pada foto dapat berbeda dengan kondisi aktual karena faktor kamera, editing, dan kondisi pencahayaan saat pengambilan gambar\n• Foto lingkungan dan fasilitas dapat menampilkan kondisi ideal yang mungkin berbeda dengan kondisi sehari-hari\n• Tata letak lansekap, tanaman, dan elemen dekoratif dapat berubah sesuai dengan perkembangan proyek",
        "Kami sangat menyarankan Anda untuk melakukan kunjungan langsung (site visit) untuk melihat kondisi aktual properti sebelum membuat keputusan pembelian.",
      ],
    },
    {
      id: "harga",
      title: "4. Harga dan Informasi Finansial",
      content: [
        "Harga yang tercantum di website ini adalah harga pada saat publikasi dan dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Harga final akan dikonfirmasi dalam dokumen perjanjian jual beli.",
        "Simulasi KPR (Kredit Pemilikan Rumah) yang ditampilkan adalah estimasi berdasarkan asumsi tertentu dan bukan merupakan penawaran pasti dari lembaga keuangan. Perhitungan aktual dapat berbeda tergantung pada:",
        "• Kebijakan bank atau lembaga pembiayaan\n• Suku bunga yang berlaku saat pengajuan\n• Profil kredit dan kelayakan peminjam\n• Uang muka (down payment) yang dibayarkan\n• Tenor dan skema pembayaran yang dipilih\n• Biaya administrasi, provisi, asuransi, dan biaya lainnya",
        "Untuk informasi harga dan skema pembayaran yang akurat, silakan hubungi tim marketing kami secara langsung.",
      ],
    },
    {
      id: "ketersediaan",
      title: "5. Ketersediaan Unit",
      content: [
        "Status ketersediaan unit (ready stock, tersedia, sold out) yang ditampilkan di website ini diperbarui secara berkala, namun mungkin tidak real-time. Unit yang ditampilkan sebagai 'tersedia' dapat sudah terjual atau dibooking oleh calon pembeli lain.",
        "Konfirmasi ketersediaan unit harus dilakukan langsung dengan tim marketing kami sebelum Anda melakukan booking atau pembayaran.",
        "Kami tidak bertanggung jawab atas kekecewaan atau kerugian yang timbul akibat ketidaktersediaan unit yang sebelumnya ditampilkan sebagai tersedia di website.",
      ],
    },
    {
      id: "spesifikasi",
      title: "6. Spesifikasi dan Detail Teknis",
      content: [
        "Spesifikasi teknis yang tercantum (luas tanah, luas bangunan, jumlah kamar, material, dll) adalah berdasarkan desain dan perencanaan terkini. Developer berhak melakukan perubahan spesifikasi untuk penyesuaian teknis, regulasi, atau peningkatan kualitas.",
        "Perubahan signifikan akan dikomunikasikan kepada pembeli yang telah melakukan booking atau pembayaran. Spesifikasi final akan tercantum dalam dokumen perjanjian jual beli dan dokumen teknis yang sah.",
      ],
    },
    {
      id: "legalitas",
      title: "7. Legalitas dan Perizinan",
      content: [
        "Informasi mengenai legalitas, sertifikat, dan perizinan yang disebutkan di website ini adalah berdasarkan status terkini. Pembeli wajib melakukan verifikasi independen terhadap:",
        "• Status sertifikat tanah (SHM, SHGB, dll)\n• Izin Mendirikan Bangunan (IMB)\n• Izin lokasi dan tata ruang\n• Dokumen legal lainnya yang relevan",
        "Kami menyarankan Anda untuk berkonsultasi dengan notaris atau konsultan hukum independen sebelum melakukan transaksi pembelian properti.",
      ],
    },
    {
      id: "fasilitas",
      title: "8. Fasilitas dan Amenitas",
      content: [
        "Fasilitas yang disebutkan di website (kolam renang, playground, clubhouse, dll) adalah bagian dari rencana pengembangan. Ketersediaan, spesifikasi, dan waktu penyelesaian fasilitas dapat berubah sesuai dengan tahapan pembangunan proyek.",
        "Akses dan penggunaan fasilitas bersama dapat diatur melalui peraturan pengelolaan lingkungan dan mungkin memerlukan biaya iuran atau maintenance fee.",
      ],
    },
    {
      id: "lokasi",
      title: "9. Informasi Lokasi dan Aksesibilitas",
      content: [
        "Informasi mengenai jarak dan waktu tempuh ke lokasi-lokasi penting (mall, rumah sakit, universitas, akses tol, dll) adalah estimasi berdasarkan kondisi normal dan dapat bervariasi tergantung pada:",
        "• Kondisi lalu lintas\n• Waktu perjalanan (jam sibuk vs jam normal)\n• Rute yang dipilih\n• Moda transportasi yang digunakan\n• Kondisi jalan dan infrastruktur",
        "Kami tidak bertanggung jawab atas perbedaan waktu tempuh aktual dengan estimasi yang disebutkan di website.",
      ],
    },
    {
      id: "link-eksternal",
      title: "10. Link ke Website Pihak Ketiga",
      content: [
        "Website ini mungkin mengandung link ke website pihak ketiga (bank, lembaga pembiayaan, Google Maps, dll). Kami tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik dari website pihak ketiga tersebut.",
        "Penggunaan link eksternal adalah atas risiko Anda sendiri. Kami menyarankan Anda untuk membaca syarat dan ketentuan serta kebijakan privasi dari setiap website yang Anda kunjungi.",
      ],
    },
    {
      id: "tanggung-jawab",
      title: "11. Batasan Tanggung Jawab",
      content: [
        "Sejauh diizinkan oleh hukum yang berlaku, Ruma.id dan Tamaruma Sawangan tidak bertanggung jawab atas:",
        "• Kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan website ini\n• Kesalahan, ketidakakuratan, atau kelalaian dalam informasi yang disajikan\n• Gangguan atau ketidaktersediaan website\n• Virus atau malware yang mungkin menginfeksi perangkat Anda\n• Keputusan pembelian yang dibuat berdasarkan informasi di website ini tanpa verifikasi lebih lanjut",
        "Website ini disediakan \"sebagaimana adanya\" tanpa jaminan dalam bentuk apapun, baik tersurat maupun tersirat.",
      ],
    },
    {
      id: "perubahan",
      title: "12. Perubahan Disclaimer",
      content: [
        "Kami berhak untuk mengubah, memodifikasi, atau memperbarui disclaimer ini sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Perubahan akan berlaku segera setelah dipublikasikan di website ini.",
        "Penggunaan website ini setelah perubahan disclaimer dianggap sebagai persetujuan Anda terhadap disclaimer yang telah diperbarui. Kami menyarankan Anda untuk meninjau halaman ini secara berkala.",
        `Terakhir diperbarui: ${new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}`,
      ],
    },
    {
      id: "kontak",
      title: "13. Informasi Kontak",
      content: [
        "Jika Anda memiliki pertanyaan, kekhawatiran, atau memerlukan klarifikasi mengenai disclaimer ini atau informasi di website, silakan hubungi kami:",
        `Email: ${site.email}\nTelepon: ${site.phone}\nAlamat: ${site.address}`,
        "Tim kami akan dengan senang hati membantu Anda dan memberikan informasi yang Anda butuhkan untuk membuat keputusan pembelian yang tepat.",
      ],
    },
  ];

  return (
    <>
      <NavV2 />
      <FloatingChat />
      <BackToTop />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto px-[10px] md:px-0">
            <div
              ref={ref}
              className="transition-all duration-1000 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="eyebrow">Legal</div>
              <h1 className="font-display display-xl mt-4 text-foreground leading-[1.15]">
                Disclaimer
              </h1>
              <p className="mt-6 text-lg text-muted max-w-[600px] leading-relaxed">
                Informasi penting mengenai penggunaan website, konten yang
                dihasilkan AI, dan batasan tanggung jawab. Mohon baca dengan
                seksama sebelum menggunakan layanan kami.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-20 px-0 md:px-10">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              {/* Sticky TOC - Desktop Only */}
              <aside className="hidden md:block md:col-span-3">
                <div className="sticky top-28">
                  <div className="text-xs font-medium tracking-wider uppercase text-muted mb-4">
                    Daftar Isi
                  </div>
                  <nav>
                    <ul className="space-y-2 text-sm">
                      {sections.map((section, i) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="text-muted hover:text-foreground transition-colors block py-1"
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div className="md:col-span-9 space-y-12 px-[10px] md:px-0">
                {sections.map((section, i) => (
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 group"
                  >
                    <div className="bg-surface rounded-2xl p-6 md:p-8 border border-[var(--border)] transition-all duration-300 hover:border-accent/30 hover:shadow-[var(--shadow-md)]">
                      <h2 className="font-display text-2xl md:text-3xl text-foreground leading-tight">
                        {section.title}
                      </h2>
                      <div className="mt-4 space-y-4">
                        {section.content.map((paragraph, j) => (
                          <p
                            key={j}
                            className="text-muted leading-relaxed whitespace-pre-line"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}

                {/* Important Notice */}
                <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Penting untuk Diperhatikan
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        Disclaimer ini merupakan bagian tidak terpisahkan dari
                        syarat dan ketentuan penggunaan website Tamaruma
                        Sawangan. Untuk informasi lebih detail mengenai
                        perlindungan data pribadi Anda, silakan baca{" "}
                        <a
                          href="/kebijakan-privasi"
                          className="text-accent hover:underline"
                        >
                          Kebijakan Privasi
                        </a>{" "}
                        kami. Jika Anda memiliki pertanyaan atau memerlukan
                        klarifikasi, jangan ragu untuk menghubungi tim kami.
                      </p>
                    </div>
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
