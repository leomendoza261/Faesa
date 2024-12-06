import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    serverActions: {
      strictOrigin: false,
    },
  },
};

export default nextConfig;
