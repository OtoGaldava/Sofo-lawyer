/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/Sofo-lawyer" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Sofo-lawyer/" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;