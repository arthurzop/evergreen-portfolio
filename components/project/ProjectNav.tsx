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
    <nav
      className={`mx-4 flex items-center justify-between rounded-full border border-white/20 bg-white/10 py-4 px-8 shadow-xl backdrop-blur-md ${
        fixed ? "md:fixed md:inset-x-100 top-8 z-20" : ""
      }`}
    >
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-700 transition-colors"
        >
          <span>
            <span className="block text-xs text-gray-400">Anterior</span>
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
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-700 transition-colors text-right"
        >
          <span>
            <span className="block text-xs text-gray-400">Próximo</span>
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
  );
}
