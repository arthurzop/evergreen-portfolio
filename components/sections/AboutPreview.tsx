// components/sections/AboutPreview.tsx
"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import Image from "next/image";
import artur from "@/public/artur.jpg";

const links = [
  { label: "linkedin", href: "https://linkedin.com/in/arthurzop" },
  { label: "substack", href: "https://substack.com/@arthurzop" },
  { label: "github", href: "https://github.com/arthurzop" },
  { label: "cv", href: "/cv.pdf" },
];

const EMAIL = "medeirosartur48@gmail.com";

export function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Section
      id="about"
      className="flex flex-col justify-center px-64 gap-8 font-geist bg-off-white/80 items-center"
    >
      <div className="font-bricolage flex flex-col gap-2 w-full">
        <h2 className="text-6xl font-bold capitalize">/about me</h2>
        <p className="text-gs-400 hover:text-gs-600 flex items-center gap-2 w-fit">
          <span>↳</span> a ui &amp; product designer based in são paulo, brazil.
        </p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-[1fr_1.6fr] gap-12 items-start"
      >
        <div className="relative aspect-video w-150 h-full rounded-xl overflow-hidden">
          <Image
            src={artur}
            alt="me :)"
            fill
            className="object-cover"
            sizes=""
          />
        </div>

        <div className="flex flex-col gap-6 justify-between h-full w-150">
          <div>
            <h3 className="font-bricolage font-semibold text-2xl mb-3 capitalize">
              hi! im artur medeiros
            </h3>
            <p className="text-gray-600 leading-relaxed">
              i'm a ui &amp; product designer focused on creating products that
              balance strategic thinking with visual clarity. my work spans
              product design, design systems, branding and editorial
              experiences, always starting with understanding the problem before
              designing the interface.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              beyond client work, i see design as a continuous practice of
              research and documentation. that's why this portfolio brings
              together projects, writing and experiments, building an evolving
              archive of ideas, processes and visual explorations.
            </p>
          </div>

          <div className="flex flex-col gap-4 ">
            <div className="flex  gap-2 w-full justify-between">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center gap-1 text-sm bg-gs-200 hover:bg-gs-300 transition-colors rounded-full px-8 py-2 justify-center"
                >
                  {link.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 text-sm bg-gs-200 hover:bg-gs-300 transition-colors rounded-full px-8 py-2 w-full justify-center cursor-pointer"
            >
              {copied ? "copied!" : EMAIL}
              {copied ? (
                <Check size={14} className="text-green-700" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
