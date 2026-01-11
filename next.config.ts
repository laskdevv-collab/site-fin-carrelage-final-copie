import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Configuration pour supporter les images locales et Supabase Storage
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.in',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // Qualités d'images supportées
    qualities: [75, 90],
  },
};

export default nextConfig;
