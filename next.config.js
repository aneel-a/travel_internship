/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ Disable Image Optimization for Static Export
  },
};

module.exports = nextConfig;
