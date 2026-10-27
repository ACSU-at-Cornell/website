import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Tells Next.js to generate flat HTML files
  images: { unoptimized: true }, // Required for static export mode
  trailingSlash: true,

  allowedDevOrigins: ["*.ngrok-free.app"],
};

export default nextConfig;
