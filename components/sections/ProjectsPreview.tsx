"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import LinkButton from "../ui/LinkButton";

// placeholder — troca por dado real quando o Velite entrar em cena
const projects = [
  {
    slug: "suporte-de-domingo",
    title: "suporte de domingo",
    description: "Tech branding, website and visual identity.",
  },
  {
    slug: "teacher-marcelli",
    title: "teacher marcelli",
    description: "Branding and visual identity for an educator.",
  },
  {
    slug: "prof-correa",
    title: "prof correa",
    description: "Visual identity and digital presence.",
  },
];

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

  return (
    <Section
      id="projects"
      className="flex flex-col justify-center px-64 gap-8 font-geist  bg-linear-to-b from-off-white/0 via-off-white/50 to-off-white/80"
    >
      <div className="font-bricolage flex flex-col gap-2">
        <h2 className="text-6xl font-bold capitalize">/projects</h2>
        <p className="text-gs-400 hover:text-gs-600 flex items-center gap-2 w-fit">
          <span>↳</span> a collection of products, identities and digital
          experiences shaped through research, systems and thoughtful execution.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={card}>
            <Link href={`/projects/${project.slug}`} className="group block">
              <div className="aspect-video bg-neutral-700 rounded-xl mb-4 flex items-center justify-center text-white/60 text-sm transition-transform group-hover:scale-[1.01]">
                {project.title}
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-2xl font-bricolage capitalize">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {project.description}
                  </p>
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
        <LinkButton text="or view all projects" href="/projects"></LinkButton>
      </div>
    </Section>
  );
}
