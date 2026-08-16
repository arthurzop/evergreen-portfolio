import { notFound } from "next/navigation";
import { writing } from "#site/content";
import { RegisterToc } from "@/components/layout/RegisterToc";
import { MdxContent } from "@/components/project/MdxContent";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { ProjectNav } from "@/components/project/ProjectNav";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return writing.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = writing.findIndex((a) => a.slug === slug);
  const article = writing[index];
  if (!article) notFound();

  const prev = writing[index - 1];
  const next = writing[index + 1];
  const toc = article.toc.map((h) => ({ id: h.id, label: h.label }));

  return (
    <article className="lg:px-64 py-24 flex flex-col gap-16 font-geist mx-auto w-full bg-off-white/50">
      <RegisterToc items={toc} />

      <nav className="flex items-center justify-between rounded-full border border-off-white/20 bg-true-white/50 shadow backdrop-blur-sm py-4 px-8 w-fit divide-x divide-gs-400/50">
        <Link
          href="/writing"
          className="text-sm text-gray-600 hover:text-green-700 transition-colors"
        >
          <span>
            <span className="block text-xs text-gray-500 uppercase">
              Voltar
            </span>
            <span className="flex items-center gap-1">
              <ArrowLeft size={14} />
              Todos os Textos
            </span>
          </span>
        </Link>
      </nav>
      <ArticleHeader article={article} />
      <ProjectNav prev={prev} next={next} />
      <div className="article gap-x-12 prose prose-neutral max-w-none prose-h2:font-bricolage prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-16 prose-h2:mb-4 prose-h3:font-bricolage prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-black text-justify">
        <MdxContent code={article.body} />
      </div>

      <ProjectNav prev={prev} next={next} />
    </article>
  );
}
