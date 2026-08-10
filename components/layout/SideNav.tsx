"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "motion/react";
import * as L from "lucide-react";
import { useToc } from "@/lib/toc-context";

const navItems = [
  { href: "/", icon: L.Home, label: "Home" },
  { href: "/projects", icon: L.Globe, label: "Projects" },
  { href: "/writing", icon: L.Feather, label: "Writing" },
  { href: "/lab", icon: L.FlaskConical, label: "Lab" },
  { href: "/about", icon: L.Info, label: "About me" },
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
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed flex flex-col w-24 mx-4 h-full items-center justify-center left-0 z-10"
    >
      {number && (
        <div className="bg-gray-500/10 fixed top-40 w-fit h-24 rounded-full flex items-center justify-center pb-5 px-4.5">
          <AnimatePresence mode="wait">
            <motion.p
              key={number}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-xl font-semibold text-green-500"
            >
              {number}
            </motion.p>
          </AnimatePresence>
        </div>
      )}

      <div className="flex flex-col bg-off-white/70 backdrop-blur-lg h-auto rounded-full px-4 py-12 gap-16 justify-center items-center">
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
  );
}
