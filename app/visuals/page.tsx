"use client";
import { useState } from "react";
import Image from "next/image";
import { visuals } from "#site/content";
import { VisualModal } from "@/components/visuals/VisualModal";

export default function VisualsPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const openIndex = visuals.findIndex((v) => v.slug === openSlug);
  const openVisual = openIndex >= 0 ? visuals[openIndex] : null;

  return (
    <main className="px-4 md:px-24 2xl:px-64 py-24 flex flex-col gap-12 font-geist bg-off-white/50 min-h-screen">
      <div className="font-bricolage flex flex-col gap-2">
        <h1 className="text-6xl font-bold capitalize">/visuals</h1>
        <p className="text-gs-400 flex items-center gap-2 w-fit">
          <span>↳</span> peças gráficas soltas: social media, email marketing,
          design gráfico, etc.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {visuals.map((visual) => (
          <button
            key={visual.slug}
            onClick={() => setOpenSlug(visual.slug)}
            className="block w-full mb-4 break-inside-avoid group cursor-pointer"
          >
            <Image
              src={visual.images[0].src}
              alt={visual.title}
              width={visual.images[0].width}
              height={visual.images[0].height}
              className="w-full h-auto rounded-xl transition-transform group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </button>
        ))}
      </div>

      {openVisual && (
        <VisualModal visual={openVisual} onClose={() => setOpenSlug(null)} />
      )}
    </main>
  );
}
