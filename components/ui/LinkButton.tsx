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
      className="isolate flex md:w-fit items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-1  font-geist font-light text-gs-600 shadow-xl backdrop-blur-md transition-colors hover:text-gray-900 "
    >
      {text}
      <ArrowUpRight size={18} />
    </Link>
  );
}
