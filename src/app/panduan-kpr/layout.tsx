import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE = "Panduan KPR & Simulasi Cicilan Rumah Sawangan";
const DESCRIPTION =
  "Panduan KPR Tamaruma Sawangan. Bekerja sama dengan BSI, Mandiri, BTN, BNI, dan BRI. DP flat Rp 50 juta all-in, free biaya KPR, BPHTB, dan notaris.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "simulasi KPR Sawangan",
    "kpr rumah Sawangan",
    "KPR BSI Depok",
    "KPR Mandiri Depok",
    "DP flat 50 juta rumah",
  ],
  alternates: {
    canonical: "/panduan-kpr",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/panduan-kpr`,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Panduan KPR Tamaruma Sawangan",
      },
    ],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: [site.ogImage],
  },
};

export default function PanduanKprLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        name: "Panduan KPR",
        item: `${site.url}/panduan-kpr`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb),
        }}
      />
      {children}
    </>
  );
}
