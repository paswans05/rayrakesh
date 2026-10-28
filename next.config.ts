import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["@libsql/client", "sharp", "nodemailer"],
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return [
      {
        source: "/passes/:filename*",
        destination: "/api/marathon-pass/:filename*",
      },
    ];
  },
};

export default nextConfig;
