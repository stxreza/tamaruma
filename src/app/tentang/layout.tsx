import type { Metadata } from "next";
import { site } from "@/lib/site";

const TITLE = "Tentang Tamaruma Sawangan · Cluster Sawangan Depok";
const DESCRIPTION =
  "Tentang Tamaruma Sawangan — cluster perumahan tropical modern 177 unit di Sawangan, Depok oleh Ruma ID. Kawasan 3 hektar, NAMU Clubhouse, SHM, dan 6 bank partner KPR.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tentang Tamaruma Sawangan",
    "profil Tamaruma Sawangan",
    "developer Tamaruma Sawangan",
    "Ruma ID Tamaruma",
    "cluster Sawangan Depok",
    "perumahan Sawangan",
  ],
  alternates: {
    canonical: "/tentang",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/tentang`,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Tentang Tamaruma Sawangan — cluster Sawangan Depok",
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

export default function TentangLayout({
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
        name: "Tentang",
        item: `${site.url}/tentang`,
      },
    ],
  };

  const aboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/tentang`,
    mainEntity: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, aboutPage]),
        }}
      />
      {children}
    </>
  );
}
