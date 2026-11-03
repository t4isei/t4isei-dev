import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // jsdom は実行時に default-stylesheet.css を読むため、バンドルせず外部扱いにする
  serverExternalPackages: ['isomorphic-dompurify', 'jsdom'],
};

export default nextConfig;
