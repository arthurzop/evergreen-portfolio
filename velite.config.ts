import { defineConfig, s } from "velite";
import GithubSlugger from "github-slugger";
import rehypeSlug from "rehype-slug";

function extractToc(raw: string) {
  const slugger = new GithubSlugger();
  const toc: { id: string; label: string }[] = [];

  for (const line of raw.split("\n")) {
    const match = /^(#{2,4})\s+(.*)$/.exec(line.trim());
    if (!match) continue;

    const level = match[1].length;
    const label = match[2].trim();
    const id = slugger.slug(label);

    if (level === 2) toc.push({ id, label });
  }

  return toc;
}

const projects = s
  .object({
    slug: s.slug("projects"),
    title: s.string(),
    description: s.string(),
    client: s.string(),
    category: s.array(s.string()),
    type: s.string().default("Client Work"),
    year: s.string(),
    cover: s.image(),
    links: s
      .array(s.object({ label: s.string(), url: s.string() }))
      .default([]),
    raw: s.raw(),
    body: s.mdx(),
  })
  .transform((data) => ({ ...data, toc: extractToc(data.raw) }));

const writing = s
  .object({
    slug: s.slug("writing"),
    title: s.string(),
    subtitle: s.string(),
    description: s.string(),
    date: s.isodate(),
    cover: s.image(),
    raw: s.raw(),
    body: s.mdx(),
  })
  .transform((data) => ({ ...data, toc: extractToc(data.raw) }));

export default defineConfig({
  root: "content",
  collections: {
    projects: {
      name: "Project",
      pattern: "projects/**/index.mdx",
      schema: projects,
    },
    writing: {
      name: "Article",
      pattern: "writing/**/index.mdx",
      schema: writing,
    },
  },
  mdx: {
    rehypePlugins: [rehypeSlug],
  },
});
