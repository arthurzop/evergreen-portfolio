// components/visuals/VisualModal.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Visual = {
  slug: string;
  title: string;
  type: string;
  tags: string[];
  images: { src: string; width: number; height: number }[];
};

export function VisualModal({
  visual,
  onClose,
}: {
  visual: Visual;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => setImgIndex(0), [visual.slug]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setImgIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setImgIndex((i) => Math.min(visual.images.length - 1, i + 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visual.images.length, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const hasCarousel = visual.images.length > 1;
  const current = visual.images[imgIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-off-white/20 backdrop-blur-xl flex items-center justify-center p-4 lg:p-16"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 lg:top-6 lg:right-6 text-gs-600 hover:text-black transition-colors flex gap-1 text-sm uppercase items-center cursor-pointer p-2 "
      >
        <span className="hidden md:block"></span>
        <X size={22} />
      </button>

      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full max-h-full min-h-[60vh] lg:h-full max-w-6xl rounded-xl border border-off-white/20 bg-true-white/50 shadow backdrop-blur-sm overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-4 justify-center px-4 pt-6 lg:px-0 lg:pt-0 lg:h-full">
          <Image
            key={current.src}
            src={current.src}
            alt={visual.title}
            width={current.width}
            height={current.height}
            className="max-w-full max-h-[42vh] lg:max-w-[90%] lg:max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            priority
          />

          {hasCarousel && (
            <div className="flex items-center gap-4">
              <button
                onClick={() => setImgIndex((i) => Math.max(0, i - 1))}
                disabled={imgIndex === 0}
                className="px-3 py-1 rounded-full bg-white/60 hover:bg-white disabled:opacity-30 transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex gap-1.5">
                {visual.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`h-1.5 rounded-full transition-all  ${
                      i === imgIndex ? "w-10 bg-green-700" : "w-1.5 bg-gs-500"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setImgIndex((i) => Math.min(visual.images.length - 1, i + 1))
                }
                disabled={imgIndex === visual.images.length - 1}
                className="px-3 py-1 rounded-full bg-white/60 hover:bg-white disabled:opacity-30 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 p-6 pt-2 text-center lg:p-8 lg:ps-2 lg:text-left">
          <div>
            <h2 className="font-bricolage text-xl font-semibold">
              {visual.title}
            </h2>
            <p className="text-sm text-gs-700">{visual.type}</p>
          </div>

          {visual.tags.length > 0 && (
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <p className="text-gs-600 text-sm uppercase">tags:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {visual.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gs-800 rounded-full px-3 py-1.5 text-gs-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
