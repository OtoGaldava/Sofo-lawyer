import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  reactStrictMode: true,
  trailingSlash: true, 
  images: {
    unoptimized: true, 
  },
  basePath: "/Sofo-lawyer",
  assetPrefix: "/Sofo-lawyer/",
};

export default nextConfig;