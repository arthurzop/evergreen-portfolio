import Image from "next/image";

type Article = {
  title: string;
  subtitle: string;
  date: string;
  cover: { src: string; width: number; height: number };
};

export function ArticleHeader({ article }: { article: Article }) {
  const formattedDate = new Date(article.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex flex-col gap-6 py-2">
      <div className="flex flex-col gap-2">
        <h1 className="font-bricolage text-5xl font-bold">/{article.title}</h1>
        <p className="text-gray-500 text-lg">{article.subtitle}</p>
        <span className="text-sm text-gray-400">{formattedDate}</span>
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden">
        <Image
          src={article.cover.src}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 60vw, 100vw"
          priority
        />
      </div>
    </header>
  );
}
