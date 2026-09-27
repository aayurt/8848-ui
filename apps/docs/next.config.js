/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@aayurt/8848-ui-core",
    "@aayurt/8848-ui-react",
    "@aayurt/8848-ui-hooks",
    "@aayurt/8848-ui-utils",
  ],
  experimental: {
    optimizePackageImports: [
      "@aayurt/8848-ui-react",
      "lucide-react",
    ],
  },
};

module.exports = nextConfig;