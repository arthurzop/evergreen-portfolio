"use client";
import SpyNav from "@/components/layout/SpyNav";
import { RegisterToc } from "@/components/layout/RegisterToc";
import { Hero } from "@/components/home-sections/Hero";
import { Featured } from "@/components/home-sections/Featured";
import { ProjectsPreview } from "@/components/home-sections/ProjectsPreview";
import { WritingPreview } from "@/components/home-sections/WritingPreview";
import { AboutPreview } from "@/components/home-sections/AboutSection";

const homeToc = [
  { id: "hero", label: "Intro" },
  { id: "featured", label: "Featured" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "about", label: "About" },
];

export default function Home() {
  return (
    <main>
      <RegisterToc items={homeToc} />

      <SpyNav />
      <Hero />
      <Featured />
      <ProjectsPreview />
      <WritingPreview />
      <AboutPreview />
    </main>
  );
}
