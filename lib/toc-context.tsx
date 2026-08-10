"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

type TocItem = { id: string; label: string };

type TocContextValue = {
  items: TocItem[];
  setItems: (items: TocItem[]) => void;
  activeId: string | undefined;
};

const TocContext = createContext<TocContextValue | null>(null);

export function TocProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const activeId = useScrollSpy(items.map((i) => i.id));

  return (
    <TocContext.Provider value={{ items, setItems, activeId }}>
      {children}
    </TocContext.Provider>
  );
}

export function useToc() {
  const ctx = useContext(TocContext);
  if (!ctx) throw new Error("useToc precisa estar dentro de um TocProvider");
  return ctx;
}
