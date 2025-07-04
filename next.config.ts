import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["s3-us-west-2.amazonaws.com"],
  },
extends: ["next", "next/core-web-vitals", "eslint:recommended"],
  rules: {
    "@next/next/no-img-element": "off",
  },
};

export default nextConfig;
