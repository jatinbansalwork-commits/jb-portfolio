import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "neal.fun",
        pathname: "/not-a-robot/**",
      },
    ],
  },
};

export default nextConfig;
