import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.preview.c40.airoapp.ai",
    "*.airoapp.ai",
    "yyon9bieiw.preview.c40.airoapp.ai",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/cruises",
        destination: "/hotels",
        permanent: true,
      },
      {
        source: "/cruises/:slug*",
        destination: "/hotels",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
