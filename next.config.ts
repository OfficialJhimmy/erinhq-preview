import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://erinhq.com/portfolio",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;