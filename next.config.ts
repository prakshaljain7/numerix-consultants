import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/numerix-consultants',
  assetPrefix: '/numerix-consultants',
};

export default nextConfig;
