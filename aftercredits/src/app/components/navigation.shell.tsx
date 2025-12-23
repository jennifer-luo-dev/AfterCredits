"use client";
import { ViewProvider } from "../context/ViewContext";
import { Navigation } from "./navigation";

export default function NavigationShell() {
  return (
    <ViewProvider>
      <Navigation />
    </ViewProvider>
  );
}
