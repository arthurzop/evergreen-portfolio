import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type NavProject = { slug: string; title: string } | undefined;

export function ProjectNav({
  prev,
  next,
  fixed = false,
  basePath = "/projects",
  backLabel = "Todos os Projetos",
}: {
  prev: NavProject;
  next: NavProject;
  fixed?: boolean;
  basePath?: string;
  backLabel?: string;
}) {
  if (!prev && !next) return null;

  return (
    <div className="blcok lg:fixed flex gap-8 mx-4 items-center inset-x-4 md:inset-x-16 2xl:inset-x-64 top-8 justify-between">
      <nav className="flex items-center justify-between rounded-full border border-off-white/20 bg-true-white/40 shadow backdrop-blur-sm py-4 px-4 xl:px-8 w-fit divide-x divide-gs-400/50">
        <Link
          href={basePath}
          className="text-sm text-gray-600 hover:text-green-700 transition-colors"
        >
          <span className="flex flex-row-reverse gap-2 md:flex-col md:gap-0">
            <span className="block text-xs text-gray-500 uppercase">
              Voltar
            </span>
            <span className="flex items-center gap-1">
              <ArrowLeft size={14} />
              <span className="hidden md:block text-nowrap">{backLabel}</span>
            </span>
          </span>
        </Link>
      </nav>
      <nav className="flex items-center justify-between rounded-full border border-off-white/20 bg-true-white/40 shadow backdrop-blur-sm py-4 px-4 md:px-8 w-fit text-nowrap gap-x-4 md:w-150 divide-x divide-gs-400/50">
        {prev ? (
          <Link
            href={`${basePath}/${prev.slug}`}
            className="flex items-center gap-2 text-sm text-gs-600 hover:text-green-700 transition-colors w-full "
          >
            <span>
              <span className="flex gap-1 items-center text-xs text-gs-500 uppercase pe-4">
                <ArrowLeft size={14} className="block md:hidden" /> Anterior
              </span>
              <span className="hidden md:flex items-center gap-1">
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
            href={`${basePath}/${next.slug}`}
            className="flex items-center justify-end gap-2 text-sm text-gs-600 hover:text-green-700 transition-colors w-full text-right"
          >
            <span>
              <span className="flex gap-1 items-center text-xs text-gs-500 uppercase">
                Próximo <ArrowRight size={14} className="block md:hidden" />
              </span>
              <span className="hidden md:flex items-center gap-1 ">
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
