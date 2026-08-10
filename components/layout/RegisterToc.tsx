"use client";
import { useEffect } from "react";
import { useToc } from "@/lib/toc-context";

type TocItem = { id: string; label: string };

export function RegisterToc({ items }: { items: TocItem[] }) {
  const { setItems } = useToc();

  useEffect(() => {
    setItems(items);
    return () => setItems([]); // limpa ao sair da página
  }, [items]);

  return null;
}