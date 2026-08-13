import * as L from "lucide-react";
import Link from "next/link";

type ProjectLink = { label: string; url: string };

type Project = {
  title: string;
  client: string;
  category: string[];
  type: string;
  year: string;
  links: ProjectLink[];
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
            <span className="text-gs-800 uppercase">ano: </span>
            {project.year}
          </span>
          <span className="flex justify-between gap-2">
            <span className="text-gs-800 uppercase">cliente:</span>{" "}
            {project.client}
          </span>
          <span className="flex justify-between gap-8">
            <span className="text-gs-800 uppercase">categorias: </span>{" "}
            {project.category.join(" · ")}
          </span>
        </div>
      </div>

      <div className="w-full border border-gs-100/50" />

      {hasLinks && (
        <>
          <div className="flex justify-between items-center gap-4">
            <p>Links</p>
            <div className="flex flex-wrap gap-2 justify-end">
              {project.links.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-full bg-off-white px-6 py-2"
                >
                  {link.label}
                  <L.ArrowUpRight size={16} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full border border-gs-100/50" />
        </>
      )}
    </header>
  );
}
