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
    const id = slugger.slug(label); // sempre gera, mesmo fora do nível 2

    if (level === 2) toc.push({ id, label });
  }

  return toc;
}

const projects = s
  .object({
    slug: s.slug("projects"),
    title: s.string(),
    client: s.string(),
    category: s.array(s.string()),
    type: s.string().default("Client Work"),
    year: s.string(),
    cover: s.string(),
    images: s.array(s.string()).default([]),
    links: s
      .array(s.object({ label: s.string(), url: s.string() }))
      .default([]),
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
  },
  mdx: {
    rehypePlugins: [rehypeSlug],
  },
});
