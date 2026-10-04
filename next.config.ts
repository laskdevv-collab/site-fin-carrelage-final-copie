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
    // Formats modernes en priorité
    formats: ['image/avif', 'image/webp'],
  },
  // Headers de cache pour les assets statiques
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800',
          },
        ],
      },
    ];
  },
  // Redirection canonique 301 automatique du domaine nu (non-www) vers www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'mp-carrelage.com',
          },
        ],
        destination: 'https://www.mp-carrelage.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
