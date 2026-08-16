"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { writing } from "#site/content";
import LinkButton from "../ui/LinkButton";

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

  const articles = [...writing]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <Section id="writing" className="justify-between bg-off-white/50">
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
          <motion.div
            key={article.slug}
            variants={card}
            className="flex flex-col"
          >
            <Link
              href={`/writing/${article.slug}`}
              className="group flex flex-col lg:flex-row gap-6 items-center"
            >
              <div className="relative aspect-video w-full lg:w-64 shrink-0 rounded-xl overflow-hidden ">
                <Image
                  src={article.cover.src}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-[1.01]"
                  sizes="256px"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-2xl font-bricolage">
                    {article.title}
                  </h3>
                  <span className="text-xs text-gray-400">
                    {new Date(article.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </span>
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
