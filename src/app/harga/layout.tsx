import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE =
  "Harga & Pricelist Tamaruma Sawangan · Rumah Ready Stock Sawangan Mulai Rp 1,075 M";
const DESCRIPTION =
  "Pricelist resmi Tamaruma Sawangan per Februari 2026. Rumah ready stock Sawangan Tipe 58 & 85 di cluster Sawangan Depok, DP flat Rp 50 juta, free BPHTB, cicilan KPR mulai Rp 5,3 juta/bulan.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "harga Tamaruma Sawangan",
    "pricelist Tamaruma Sawangan",
    "harga rumah ready stock Sawangan",
    "simulasi KPR Tamaruma",
    "cluster Sawangan",
    "DP rumah Sawangan",
    "harga rumah Depok",
  ],
  alternates: {
    canonical: "/harga",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/harga`,
    images: [
      {
        url: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778635716/Pricelist_Tamaruma-1_pmyhys.webp",
        width: 1200,
        height: 800,
        alt: "Pricelist resmi Tamaruma Sawangan — rumah ready stock Sawangan",
      },
    ],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function HargaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // BreadcrumbList untuk halaman /harga
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Harga & Pricelist",
        item: `${site.url}/harga`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
