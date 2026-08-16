import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { writing } from "#site/content";

export default function WritingIndexPage() {
  const articles = [...writing].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <main className="px-8 lg:px-64 py-24 md:py-16 flex flex-col gap-12 font-geist bg-off-white/50 min-h-screen">
      <div className="font-bricolage flex flex-col gap-2">
        <h1 className="text-6xl font-bold capitalize">/writing</h1>
        <p className="text-gs-400 flex items-center gap-2 w-fit">
          <span>↳</span> ensaios, pesquisas e reflexões sobre design para além
          da interface.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/writing/${article.slug}`}
            className="group flex gap-6 items-center"
          >
            <div className="relative aspect-video w-64 shrink-0 rounded-xl overflow-hidden">
              <Image
                src={article.cover.src}
                alt={article.title}
                fill
                className="object-cover transition-transform group-hover:scale-[1.02]"
                sizes="256px"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-2xl font-bricolage">
                  {article.title}
                </h3>
                <span className="text-xs text-gray-400">
                  {new Date(article.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <p className="text-sm text-gray-500 max-w-xl">
                {article.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm mt-2 text-gray-700 group-hover:text-green-700 transition-colors w-fit">
                view <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
