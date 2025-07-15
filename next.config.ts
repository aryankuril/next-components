import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["s3-us-west-2.amazonaws.com" ,'picsum.photos' , 'images.unsplash.com'],

  },
};

export default nextConfig;
