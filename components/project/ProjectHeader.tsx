import * as L from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Project = {
  title: string;
  client: string;
  category: string[];
  type: string;
  year: string;
  links: { label: string; url: string }[];
  cover: { src: string; width: number; height: number };
};

export function ProjectHeader({ project }: { project: Project }) {
  const hasLinks = project.links.length > 0;

  return (
    <header className="flex flex-col gap-6 py-2">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-bricolage text-5xl font-bold">
            /{project.title}
          </h1>
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <span className="flex justify-between gap-6">
            <span className="uppercase">ano: </span>
            <span className="text-gs-800">{project.year}</span>
          </span>
          <span className="flex justify-between gap-2">
            <span className="uppercase">cliente:</span>
            <span className="text-gs-800">{project.client}</span>
          </span>
          <span className="flex justify-between gap-8">
            <span className="uppercase">categorias: </span>{" "}
            <span className="text-gs-800">{project.category.join(" · ")}</span>
          </span>
        </div>

        {hasLinks && (
          <>
            <div className="flex justify-between items-center gap-4">
              <p className=" uppercase text-sm text-gray-500">Links:</p>
              <div className="flex flex-wrap gap-2 justify-end">
                {project.links.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center justify-center gap-2 rounded-full bg-white/20 px-6 py-1 font-light text-[#5f5f5f] shadow-md ring-1 ring-black/3 transition-colors hover:text-gray-900 hover:ring-black/10 font-geist"
                  >
                    {link.label}
                    <L.ArrowUpRight size={16} strokeWidth={1.5} />
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <Image
            src={project.cover.src}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 60vw, 100vw"
            priority
          />
        </div>
      </div>

      <div className="w-full border border-gs-100/50" />
    </header>
  );
}
