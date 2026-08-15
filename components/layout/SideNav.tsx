"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "motion/react";
import * as L from "lucide-react";
import { useToc } from "@/lib/toc-context";

const navItems = [
  { href: "/", icon: L.Home, label: "Home" },
  { href: "/projects", icon: L.Globe, label: "Projects" },
  { href: "/writing", icon: L.Feather, label: "Writing" },
  // { href: "/lab", icon: L.FlaskConical, label: "Lab" },
  { href: "/#about", icon: L.Info, label: "About me" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SideNav() {
  const pathname = usePathname();
  const { items, activeId } = useToc();
  const activeIndex = items.findIndex((i) => i.id === activeId);
  const number =
    activeIndex >= 0 ? String(activeIndex + 1).padStart(2, "0") : null;

  return (
    <>
      {/* ── Desktop: pill vertical fixa na lateral ── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:flex fixed flex-col w-24 mx-4 h-full items-center justify-center left-0 z-10"
      >
        {number && (
          <div className="bg-gs-400/10 fixed top-38 w-fit h-30 rounded-full flex items-center justify-center pb-5 px-4.5">
            <p className="text-xl font-semibold text-green-500">{number}</p>
          </div>
        )}
        <div className="flex flex-col h-auto rounded-full border border-off-white/20 bg-true-white/50 shadow backdrop-blur-sm px-3 py-12 gap-16 justify-center items-center">
          <p className="text-black [writing-mode:vertical-rl] text-nowrap font-medium text-xl">
            artur medeiros
          </p>
          <motion.nav
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-3 items-center divide-gray-300/70 divide-y"
          >
            {navItems.map(({ href, icon: Icon, label }) => {
              const isActive = pathname === href;
              return (
                <motion.div key={href} variants={item} className="pb-2">
                  <Link
                    href={href}
                    title={label}
                    aria-label={label}
                    className={`block transition-colors ${
                      isActive
                        ? "text-green-700"
                        : "text-gray-600 hover:text-green-700"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex lg:hidden fixed top-4 rounded-full inset-x-0 z-20 h-14 items-center justify-between mx-4 border border-white/20 bg-white/10 py-4 px-8 shadow-xl backdrop-blur-md"
      >
        <span className="font-medium text-sm">artur medeiros</span>
        <nav className="flex items-center gap-2 divide-x divide-gray-300/70">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-label={label}
                className={`pr-2 ${isActive ? "text-green-700" : "text-gray-600"}`}
              >
                <Icon size={18} strokeWidth={1.5} />
              </Link>
            );
          })}
        </nav>
      </motion.div>
    </>
  );
}
