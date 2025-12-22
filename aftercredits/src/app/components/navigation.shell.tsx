"use client";
import React from "react";
import { ViewProvider } from "../context/ViewContext";
import { Navigation } from "./navigation";

export default function NavigationShell() {
  return (
    <ViewProvider>
      <Navigation />
    </ViewProvider>
  );
}
