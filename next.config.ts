import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: config => config, // No customization, just returning config
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;
