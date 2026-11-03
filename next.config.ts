import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  // jsdom は実行時に default-stylesheet.css を読むため、バンドルせず外部扱いにする
  serverExternalPackages: ['isomorphic-dompurify', 'jsdom'],
};

export default nextConfig;
