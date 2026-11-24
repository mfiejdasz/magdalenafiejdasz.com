import type { APIRoute } from "astro";
import { isIndexable } from "../utils/indexing";

export const GET: APIRoute = ({ site }) => {
  const headers = { "Content-Type": "text/plain; charset=utf-8" };

  if (!site || !isIndexable(site)) {
    return new Response("User-agent: *\nDisallow: /\n", { headers });
  }

  const sitemapUrl = new URL("sitemap-index.xml", site);

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`, { headers });
};
