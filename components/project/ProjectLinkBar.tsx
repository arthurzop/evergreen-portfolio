import Link from "next/link";
import * as L from "lucide-react";

type ProjectLink = { label: string; url: string };

export function ProjectLinksBar({ links }: { links: ProjectLink[] }) {
  if (!links.length) return null;

  return (
    <div className="sticky bottom-6 z-20 flex  justify-center pointer-events-none mt-10">
      <div className="pointer-events-auto flex w-fit items-center gap-3 rounded-full border border-off-white/20 bg-true-white/60 shadow-lg backdrop-blur-md px-4 py-2">
        <span className="text-xs uppercase text-gs-600 pl-2">Links:</span>
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-light text-[#5f5f5f] shadow-md ring-1 ring-black/3 transition-colors hover:text-gray-900 hover:ring-black/10 font-geist w-fit "
          >
            <span className="truncate">{link.label}</span>
            <L.ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        ))}
      </div>
    </div>
  );
}
