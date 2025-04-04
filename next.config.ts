import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  basePath: "/Sofo-lawyer", 
  assetPrefix: "/Sofo-lawyer/", 
};

export default nextConfig;