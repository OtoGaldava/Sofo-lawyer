import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Sofo-lawyer", 
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;