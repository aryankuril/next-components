import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "img.icons8.com",          // existing one for icons
      "s3-us-west-2.amazonaws.com", // for your s3 images
    ],
  },
  /* other config options */
};

export default nextConfig;
