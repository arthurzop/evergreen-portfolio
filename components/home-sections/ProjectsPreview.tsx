"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { projects } from "#site/content";
import LinkButton from "../ui/LinkButton";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ProjectsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const featured = projects.slice(0, 3);

  return (
    <Section
      id="projects"
      className="flex flex-col justify-center py-24 md:py-0 px-8 lg:px-64 gap-8 font-geist bg-linear-to-b to-off-white/50"
    >
      <div className="font-bricolage flex flex-col gap-2">
        <h2 className="text-6xl font-bold capitalize">/projetos</h2>
        <p className="text-gs-400 hover:text-gs-600 flex items-center gap-2 w-fit">
          <span>↳</span> uma coleção de produtos, identidades e experiências
          digitais construídas a partir de pesquisa, sistemas e execução
          cuidadosa.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col gap-4 md:grid grid-cols-3 md:gap-6"
      >
        {featured.map((project) => (
          <motion.div key={project.slug} variants={card}>
            <Link href={`/projects/${project.slug}`} className="group block">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.cover.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-[1.01]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-2xl font-bricolage capitalize">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.description}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm mt-2 text-gray-700 group-hover:text-green-700 transition-colors">
                  view <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center justify-end">
        <LinkButton
          text="ver todos os projetos"
          href="/projects"
        ></LinkButton>
      </div>
    </Section>
  );
}
