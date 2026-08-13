import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "#site/content";

export default function ProjectsIndexPage() {
  return (
    <main className="px-8 lg:px-64 py-24 md:py-16 flex flex-col gap-12 font-geist bg-off-white/50 min-h-screen">
      <div className="font-bricolage flex flex-col gap-2">
        <h1 className="text-6xl font-bold capitalize">/projetos</h1>

        <p className="text-gs-400 flex items-center gap-2 w-fit">
          <span>↳</span>
          uma coleção de produtos, identidades e experiências digitais
          construídas a partir de pesquisa, sistemas e execução cuidadosa.
        </p>
      </div>

      <div className="flex flex-col lg:grid grid-cols-2 gap-x-6 gap-y-6  md:gap-y-12">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <div className="aspect-video bg-neutral-700 rounded-xl mb-4 flex items-center justify-center text-white/60 text-sm transition-transform group-hover:scale-[1.01]">
              {project.title}
            </div>

            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <h3 className="font-semibold text-xl font-bricolage">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {project.category.join(" · ")}
                </p>
              </div>

              <span className="inline-flex items-center gap-1 text-sm text-gray-700 group-hover:text-green-700 transition-colors">
                ver <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
