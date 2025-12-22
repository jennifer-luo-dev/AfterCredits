"use client";
import React, { createContext, useContext, useState } from "react";

type View = "timeline" | "messages" | "new-memory";

type ViewContextValue = {
  view: View;
  setView: (v: View) => void;
};

const ViewContext = createContext<ViewContextValue | undefined>(undefined);

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<View>("timeline");

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const ctx = useContext(ViewContext);
  if (!ctx) throw new Error("useView must be used within a ViewProvider");
  return ctx;
}
