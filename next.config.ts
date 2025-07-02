import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages uses repository name as base path
  basePath: process.env.NODE_ENV === 'production' ? '/numerix-consultants' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/numerix-consultants/' : '',
};

export default nextConfig;
