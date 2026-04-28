import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // This is for Docker and Cloud efficiency
  reactCompiler: true,
  transpilePackages: ['simplex-noise'],

};

export default nextConfig;
