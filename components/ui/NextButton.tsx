'use client'
import * as L from "lucide-react";

type ButtonProps = {
  text: string;
};


export default function NextButton({ text }: ButtonProps) {
  return (
    <button className="isolate bg-white/20 shadow-md ring-1 ring-black/3 cursor-pointer flex items-center justify-center gap-2 w-fit h-fit rounded-full text-[#5f5f5f] font-light hover:text-gray-900 hover:ring-black/10 px-6 py-1 font-geist" onClick={() => {window.scroll(0, 950)}}>
      {text}
      <L.ArrowDown size={18} strokeWidth={1.5}></L.ArrowDown>
    </button>
  );
}
