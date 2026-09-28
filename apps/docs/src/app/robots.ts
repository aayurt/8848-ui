import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://8848.aayurtshrestha.com.np";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
