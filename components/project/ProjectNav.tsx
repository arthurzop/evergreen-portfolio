import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type NavProject = { slug: string; title: string } | undefined;

export function ProjectNav({
  prev,
  next,
  fixed = false,
}: {
  prev: NavProject;
  next: NavProject;
  fixed?: boolean;
}) {
  if (!prev && !next) return null;

  return (
    <div className="fixed flex gap-8 mx-4 items-center inset-x-64 top-8 justify-between">
      <nav className="flex items-center justify-between rounded-full border border-off-white/20 bg-true-white/50 shadow backdrop-blur-sm py-4 px-8 w-fit divide-x divide-gs-400/50">
        <Link
          href="/projects"
          className="text-sm text-gray-600 hover:text-green-700 transition-colors"
        >
          <span>
            <span className="block text-xs text-gray-500 uppercase">
              Voltar
            </span>
            <span className="flex items-center gap-1">
              <ArrowLeft size={14} />
              Todos os Projetos
            </span>
          </span>
        </Link>
      </nav>
      <nav className="flex items-center justify-between rounded-full border border-off-white/20 bg-true-white/50 shadow backdrop-blur-sm py-4 px-8 w-150 divide-x divide-gs-400/50">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-700 transition-colors w-full "
          >
            <span>
              <span className="block text-xs text-gray-500 uppercase">
                Projeto Anterior
              </span>
              <span className="flex items-center gap-1">
                <ArrowLeft size={14} />
                {prev.title}
              </span>
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="flex items-center justify-end gap-2 text-sm text-gray-600 hover:text-green-700 transition-colors w-full text-right"
          >
            <span>
              <span className="block text-xs text-gray-500 uppercase">
                Próximo Projeto
              </span>
              <span className="flex items-center gap-1">
                {next.title}
                <ArrowRight size={14} />
              </span>
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
