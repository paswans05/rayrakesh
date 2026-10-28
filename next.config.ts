import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["better-sqlite3", "sharp"],
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
