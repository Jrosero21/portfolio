import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👇 Required for GitHub Pages (generates static HTML/JS/CSS)
  output: "export",

  // 👇 Needed because GitHub Pages doesn’t run the Next.js image optimizer
  images: {
    unoptimized: true,
  },

  // 👇 Optional: ensures URLs like /about/ work (avoids 404 on refresh)
  trailingSlash: true,
};

export default nextConfig;
