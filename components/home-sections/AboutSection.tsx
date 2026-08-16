"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import Image from "next/image";
import artur from "@/public/artur.jpeg";
import Link from "next/link";

const links = [
  { label: "linkedin", href: "https://linkedin.com/in/arthurzop" },
  { label: "substack", href: "https://substack.com/@arthurzop" },
  { label: "github", href: "https://github.com/arthurzop" },
  { label: "cv", href: "/cv.pdf" },
];

const EMAIL = "medeirosartur48@gmail.com";
const INSTAGRAM = "https://instagram.com/arthurzop";

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
      className="bg-off-white/50 items-center"
    >
      <div className="font-bricolage flex flex-col gap-2 w-full">
        <h2 className="text-6xl font-bold capitalize">/sobre mim</h2>
        <p className="text-gs-400 hover:text-gs-600 flex items-center gap-2 w-fit">
          <span>↳</span> um UI &amp; Product Designer baseado em São Paulo,
          Brasil.
        </p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col xl:flex-row justify-between w-full gap-12"
      >
        <div className="relative aspect-video w-full h-full rounded-xl overflow-hidden">
          <Image
            src={artur}
            alt="me :)"
            fill
            className="object-cover"
            sizes=""
          />
        </div>

        <div className="flex flex-col justify-between lg:w-200">
          <div className="">
            <h3 className="font-bricolage font-semibold text-2xl mb-3 flex flex-col gap-1">
              oii! sou o Artur Medeiros
              <Link
                href={INSTAGRAM}
                target="_blank"
                className="text-sm uppercase text-gs-400 font-geist hover:text-green-700"
              >
                @arthurzop {">.<"}
              </Link>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sou um UI &amp; Product Designer em formação e trabalho na criação
              de produtos que equilibram pensamento estratégico, consistência e
              clareza visual. Além de UI/UX, hoje meu trabalho passa por Product
              Design, Design Gráfico e Branding.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Além dos projetos para clientes, mantenho o design como uma
              prática contínua de pesquisa, experimentação e documentação. Gosto
              de explorar referências, testar ideias e registrar o que descubro
              ao longo do processo. É por isso que este portfólio reúne
              projetose e textos, funcionando também como um arquivo em
              constante evolução do que estou pensando, estudando e construindo.
            </p>
          </div>

          <div className="flex flex-col gap-4 h-fit">
            <div className="flex flex-col md:flex-row pt-4 gap-2 lg:w-full justify-between">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center gap-1 text-sm bg-gs-200 hover:bg-gs-300 transition-colors rounded-full px-8 py-2 justify-center"
                >
                  {link.label} <ArrowUpRight size={14} />
                </Link>
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
