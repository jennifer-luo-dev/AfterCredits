"use client";
import React, { useState } from "react";
import { Navigation } from "./navigation";

export default function NavigationClient() {
  const [currentView, setCurrentView] = useState<
    "timeline" | "messages" | "new-memory"
  >("timeline");

  const handleViewChange = (view: "timeline" | "messages" | "new-memory") => {
    setCurrentView(view);
  };

  const handleSignOut = () => {
    // placeholder sign-out logic
    // console.log("Signing out...");
  };

  return <Navigation />;
}
