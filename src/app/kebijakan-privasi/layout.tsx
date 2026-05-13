import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE =
  "Kebijakan Privasi Tamaruma Sawangan · Perlindungan Data Calon Pembeli";
const DESCRIPTION =
  "Kebijakan privasi resmi Tamaruma Sawangan. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data calon pembeli rumah ready stock Sawangan di cluster Sawangan Depok.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "kebijakan privasi Tamaruma Sawangan",
    "privasi data properti",
    "cluster Sawangan privasi",
    "perlindungan data rumah ready stock Sawangan",
  ],
  alternates: {
    canonical: "/kebijakan-privasi",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/kebijakan-privasi`,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Kebijakan Privasi Tamaruma Sawangan — rumah ready stock Sawangan",
      },
    ],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KebijakanPrivasiLayout({
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
        name: "Kebijakan Privasi",
        item: `${site.url}/kebijakan-privasi`,
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
