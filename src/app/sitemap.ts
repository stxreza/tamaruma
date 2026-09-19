import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastContentUpdate = new Date("2026-09-19");
  return [
    {
      url: site.url,
      lastModified: lastContentUpdate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site.url}/harga`,
      lastModified: lastContentUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/kontak`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/tentang`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/lokasi/sawangan-depok`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/tipe/58`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/tipe/85`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/tipe/hook`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/fasilitas`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/promo`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/panduan-kpr`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/kebijakan-privasi`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${site.url}/disclaimer`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
