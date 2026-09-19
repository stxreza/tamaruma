import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE = "Tipe Hook Tamaruma Sawangan · Rumah Ready Stock Premium";
const DESCRIPTION =
  "Tipe Hook Tamaruma Sawangan. LB 119-146 m², posisi sudut, lahan lebih luas, privasi ekstra. DP flat Rp 50 juta, ready stock Sawangan siap huni.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Tipe Hook Tamaruma Sawangan",
    "rumah hook Sawangan",
    "rumah sudut Sawangan",
    "rumah ready stock premium Depok",
  ],
  alternates: {
    canonical: "/tipe/hook",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/tipe/hook`,
    images: [
      {
        url: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551805/Tamaruma_Tipe_144.webp",
        width: 1200,
        height: 800,
        alt: "Tipe Hook Tamaruma Sawangan — rumah ready stock premium",
      },
    ],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: ["https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551805/Tamaruma_Tipe_144.webp"],
  },
};

export default function TipeHookLayout({
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
        name: "Tipe Rumah",
        item: `${site.url}/#tipe-v2`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tipe Hook",
        item: `${site.url}/tipe/hook`,
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${site.url}/#tipe-hook-product`,
    name: "Tipe Hook — Rumah Ready Stock Sawangan",
    description: DESCRIPTION,
    image: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551805/Tamaruma_Tipe_144.webp",
    brand: {
      "@type": "Brand",
      name: "Tamaruma Sawangan",
    },
    category: "Perumahan / Cluster / Rumah Tinggal",
    sku: "TAMARUMA-HOOK",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "IDR",
      lowPrice: 2800000000,
      highPrice: 2800000000,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      priceValidUntil: "2027-12-31",
      url: `${site.url}/tipe/hook`,
      seller: {
        "@id": `${site.url}/#realestateagent`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, productSchema]),
        }}
      />
      {children}
    </>
  );
}
