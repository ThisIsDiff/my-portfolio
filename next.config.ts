import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // This is for Docker and Cloud efficiency
  reactCompiler: true,
  transpilePackages: ['simplex-noise'],
  typescript: {
    ignoreBuildErrors: true, // Allow production builds to complete even if there are type errors
  }
};

export default nextConfig;
