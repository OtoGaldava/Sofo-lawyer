import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/Sofo-lawyer",
  assetPrefix: "/Sofo-lawyer/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;