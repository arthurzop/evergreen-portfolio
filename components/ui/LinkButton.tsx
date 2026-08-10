"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type LinkButtonProps = {
  text: string;
  href: string;
};

export default function LinkButton({ text, href }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="isolate flex w-fit items-center justify-center gap-2 rounded-full bg-white/20 px-6 py-2 text-lg font-light text-[#5f5f5f] shadow-md ring-1 ring-black/3 transition-colors hover:text-gray-900 hover:ring-black/10 font-geist"
    >
      {text}
      <ArrowUpRight size={18} />
    </Link>
  );
}
