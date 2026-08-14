import { notFound } from "next/navigation";
import { projects } from "#site/content";
import { RegisterToc } from "@/components/layout/RegisterToc";
import { MdxContent } from "@/components/project/MdxContent";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectNav } from "@/components/project/ProjectNav";
import SpyNav from "@/components/layout/SpyNav";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();

  const prev = projects[index - 1];
  const next = projects[index + 1];
  const toc = project.toc.map((h) => ({ id: h.id, label: h.label }));

  return (
    <article className="lg:px-64 py-24 flex flex-col gap-16 font-geist mx-auto w-full bg-off-white/50">
      <SpyNav />
      <RegisterToc items={toc} />
      <ProjectNav prev={prev} next={next} fixed />
      <div className="flex flex-col p-10 rounded-2xl gap-2">
        <ProjectHeader project={project} />
        <div
          className="article-columns gap-x-12 prose prose-neutral max-w-none
          prose-h2:font-bricolage prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
          prose-h3:font-bricolage prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6
          prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-black text-justify"
        >
          <MdxContent code={project.body} />
        </div>
      </div>
      <ProjectNav prev={prev} next={next} />
    </article>
  );
}
