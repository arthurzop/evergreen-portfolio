"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import LinkButton from "../ui/LinkButton";

// placeholder — troca por dado real quando o Velite entrar em cena
const articles = [
  {
    slug: "interface-atmosferica",
    title: "interface atmosférica",
    description:
      "Design, tecnologia e novos futuros — uma reflexão sobre como as interfaces moldam nossa percepção do ambiente digital.",
    date: "Jul 23, 2024",
  },
  {
    slug: "o-fim-da-eficiencia",
    title: "o fim da eficiência e seus limites",
    description:
      "Reflexões sobre interfaces e bem-estar, e o que perdemos quando otimizamos tudo em nome da velocidade.",
    date: "Jul 28, 2024",
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

export function WritingPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <Section
      id="writing"
      className="flex flex-col justify-center px-8 lg:px-64 gap-8 font-geist bg-off-white/50"
    >
      <div className="font-bricolage flex flex-col gap-2">
        <h2 className="text-6xl font-bold capitalize">/escrita</h2>
        <p className="text-gs-400 hover:text-gs-600 flex items-center gap-2 w-fit">
          <span>↳</span> ensaios, pesquisas e reflexões sobre design para além
          da interface.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col gap-6"
      >
        {articles.map((article) => (
          <motion.div key={article.slug} variants={card}>
            <Link
              href={`/writing/${article.slug}`}
              className="group flex flex-col md:flex-row gap-6 md:items-center"
            >
              <div className="aspect-video w-64 shrink-0 bg-neutral-700 rounded-xl flex items-center justify-center text-white/60 text-sm transition-transform group-hover:scale-[1.01]">
                {article.title}
              </div>

              <div className="flex flex-col gap-1 flex-1 justify-start">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-2xl font-bricolage capitalize">
                    {article.title}
                  </h3>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <p className="text-sm text-gray-500 max-w-xl">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm mt-2 text-gray-700 group-hover:text-green-700 transition-colors w-fit">
                  view <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center justify-end">
        <LinkButton text="or view all texts" href="/writing" />
      </div>
    </Section>
  );
}
