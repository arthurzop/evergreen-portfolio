"use client";
import SpyNav from "@/components/layout/SpyNav";
import { RegisterToc } from "@/components/layout/RegisterToc";
import { Hero } from "@/components/home-sections/Hero";
import { Featured } from "@/components/home-sections/Featured";
import { ProjectsPreview } from "@/components/home-sections/ProjectsPreview";
import { WritingPreview } from "@/components/home-sections/WritingPreview";
import { AboutPreview } from "@/components/home-sections/AboutSection";
import ContactButton from "@/components/ui/ContactButton";

const homeToc = [
  { id: "hero", label: "Intro" },
  { id: "featured", label: "Em Destaque" },
  { id: "projects", label: "Projetos" },
  { id: "writing", label: "Escrita" },
  { id: "about", label: "Sobre Mim" },
];

export default function Home() {
  return (
    <main>
      <RegisterToc items={homeToc} />
      <div className="absolute bottom-10 right-10">
        <ContactButton />
      </div>
      <SpyNav />
      <Hero />
      <Featured />
      <ProjectsPreview />
      <WritingPreview />
      <AboutPreview />
    </main>
  );
}
