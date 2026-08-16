import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque } from "next/font/google";
import SideNav from "@/components/layout/SideNav";
import { TocProvider } from "@/lib/toc-context";
import Footer from "@/components/home-sections/Footer";
import { GrainGradient } from "@paper-design/shaders-react";
import { MotionConfig } from "motion/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artur-medeiros.vercel.app"),
  title: "Artur Medeiros — UI & Product Designer",
  description:
    "UI & Product Designer based in São Paulo. An evergreen archive of projects, writing and experiments.",
  openGraph: {
    title: "Artur Medeiros — UI & Product Designer",
    description:
      "UI & Product Designer based in São Paulo. An evergreen archive of projects, writing and experiments.",
    url: "https://artur-medeiros.vercel.app",
    siteName: "Artur Medeiros",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artur Medeiros — UI & Product Designer",
    description:
      "UI & Product Designer based in São Paulo. An evergreen archive of projects, writing and experiments.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${bricolage.variable}`}
    >
      <body className="min-h-full flex flex-col text-night-black">
        <GrainGradient
          width="100%"
          height="100%"
          colors={["#DAD7CD", "#A3B18A", "#588157", "#3A5A40", "#344E41"]}
          colorBack="#BBC6BB20"
          softness={2}
          intensity={0.3}
          noise={0.2}
          shape="corners"
          speed={1}
          className="fixed -z-10 inset-0 opacity-60"
        />
        <MotionConfig reducedMotion="user">
          <TocProvider>
            <SideNav />
            {children}
          </TocProvider>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
