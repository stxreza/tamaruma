import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE = "Fasilitas Perumahan Tamaruma Sawangan · NAMU Clubhouse";
const DESCRIPTION =
  "Fasilitas lengkap di Tamaruma Sawangan: NAMU Clubhouse, Kolam Renang, Half Court Basketball, Playground, dan One Gate System 24 jam.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fasilitas Tamaruma Sawangan",
    "clubhouse perumahan Sawangan",
    "perumahan ada kolam renang Sawangan",
    "Tamaruma Sawangan Depok",
  ],
  alternates: {
    canonical: "/fasilitas",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/fasilitas`,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Fasilitas NAMU Clubhouse Tamaruma Sawangan",
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

export default function FasilitasLayout({
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
        name: "Fasilitas",
        item: `${site.url}/fasilitas`,
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
