import type { MetadataRoute } from "next";
import { projects, writing } from "#site/content";

const BASE_URL = "https://artur-medeiros.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/writing", "/about"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const writingRoutes = writing.map((a) => ({
    url: `${BASE_URL}/writing/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  return [...staticRoutes, ...projectRoutes, ...writingRoutes];
}
