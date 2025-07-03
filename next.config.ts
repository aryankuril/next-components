import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["s3-us-west-2.amazonaws.com"],
  },
   rules: {
    "@next/next/no-img-element": "off",
  },
  /* config options here */
};

export default nextConfig;
