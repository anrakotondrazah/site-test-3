import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,       // ← désactive l'optimisation (fix rapide)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',      // ← autorise TOUS les domaines externes
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
