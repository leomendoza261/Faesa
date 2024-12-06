import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

//recorda quitar esto jaja
module.exports = {
  experimental: {
    serverActions: {
      strictOrigin: false,
    },
  },
};

export default nextConfig;
