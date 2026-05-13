import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE =
  "Kontak Tamaruma Sawangan · Jadwal Visit Rumah Ready Stock Sawangan";
const DESCRIPTION =
  "Hubungi tim pemasaran Tamaruma Sawangan untuk jadwal visit, info tipe rumah ready stock Sawangan, simulasi KPR, dan tour cluster Sawangan Depok. Balas WhatsApp dalam ~2 jam.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "kontak Tamaruma Sawangan",
    "jadwal visit Tamaruma",
    "marketing Tamaruma SWG",
    "nomor kontak Tamaruma",
    "cluster Sawangan kontak",
    "rumah ready stock Sawangan WhatsApp",
  ],
  alternates: {
    canonical: "/kontak",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/kontak`,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function KontakLayout({
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
        name: "Kontak",
        item: `${site.url}/kontak`,
      },
    ],
  };

  // ContactPage schema
  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/kontak`,
    mainEntity: {
      "@type": "RealEstateAgent",
      name: site.developer,
      telephone: site.phoneE164,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        ...site.addressStructured,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, contactPage]),
        }}
      />
      {children}
    </>
  );
}
