import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE = "Tipe 58 Tamaruma Sawangan · Rumah Ready Stock 2 Kamar";
const DESCRIPTION =
  "Rumah ready stock Sawangan Tipe 58 di cluster Tamaruma. LB 58 m², LT 84 m², 2 kamar tidur, desain tropical modern. DP flat Rp 50 juta, free BPHTB, siap huni.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Tipe 58 Tamaruma Sawangan",
    "rumah ready stock Sawangan tipe 58",
    "rumah 2 kamar Sawangan",
    "Tamaruma Sawangan",
  ],
  alternates: {
    canonical: "/tipe/58",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/tipe/58`,
    images: [
      {
        url: "https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551141/Tamaruma_Tipe_58.webp",
        width: 1200,
        height: 800,
        alt: "Tipe 58 Tamaruma Sawangan — rumah ready stock 2 kamar",
      },
    ],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: ["https://res.cloudinary.com/dzhvfbuks/image/upload/v1778551141/Tamaruma_Tipe_58.webp"],
  },
};

export default function Tipe58Layout({
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
        name: "Tipe 58",
        item: `${site.url}/tipe/58`,
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
