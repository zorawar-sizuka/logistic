/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    const staticAssetHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=2592000, stale-while-revalidate=86400",
      },
    ];

    return [
      {
        source: "/images/:path*",
        headers: staticAssetHeaders,
      },
      {
        source: "/services/:path*",
        headers: staticAssetHeaders,
      },
      {
        source: "/videos/:path*",
        headers: staticAssetHeaders,
      },
    ];
  },
};

export default nextConfig;
