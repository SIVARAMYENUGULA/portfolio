import type { MetadataRoute } from "next";
import { config } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const base = config.siteUrl.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
