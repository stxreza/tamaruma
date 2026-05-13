import type { NextConfig } from "next";

/**
 * Next.js config
 *
 * Images: saat ini memakai stock photo (Unsplash) sebagai placeholder.
 * Ke depan akan beralih ke Cloudinary — cukup aktifkan remote pattern Cloudinary
 * di bawah dan ganti `src` di `lib/images.ts`.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
