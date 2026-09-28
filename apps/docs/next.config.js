const createMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: [
    "@aayurt/8848-ui-core",
    "@aayurt/8848-ui-react",
    "@aayurt/8848-ui-hooks",
    "@aayurt/8848-ui-utils",
  ],
  experimental: {
    optimizePackageImports: [
      "lucide-react",
    ],
  },
};

module.exports = createMDX(nextConfig);