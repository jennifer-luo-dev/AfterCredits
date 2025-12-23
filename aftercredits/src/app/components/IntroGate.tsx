"use client";
import React, { useEffect, useState } from "react";
import ClapperboardIntro from "./clapperboardintro";

// Use sessionStorage so the intro runs once per browser session.
// It will rerun automatically when the user opens a new browser session.
const SESSION_KEY = "aftercredits_intro_played_session";

export default function IntroGate({ children }: { children: React.ReactNode }) {
  const [played, setPlayed] = useState<boolean | null>(null);

  useEffect(() => {
    // Check sessionStorage on client only; sessionStorage is cleared when the browser tab/window closes
    try {
      const val = sessionStorage.getItem(SESSION_KEY);
      setPlayed(val === "1");
    } catch (err) {
      // If sessionStorage not available, default to played=false so intro runs
      setPlayed(false);
    }
  }, []);

  const handleComplete = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch (err) {
      // ignore
    }
    setPlayed(true);
  };

  // While we don't know yet, render nothing to avoid layout shift
  if (played === null) return null;

  // If intro hasn't played, show it full-screen; it will call handleComplete when done
  if (!played) return <ClapperboardIntro onComplete={handleComplete} />;

  // Otherwise render children (login form / app)
  return <>{children}</>;
}
