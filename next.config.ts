import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  images: {
    qualities: [70, 75, 80, 85],
  },
};

export default nextConfig;