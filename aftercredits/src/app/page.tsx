"use client";
import Timeline from "./components/timeline";

export default function Page() {
  const accessToken = "YOUR_ACCESS_TOKEN";
  const handleMemoryClick = (memoryId: string) => {
    console.log("Clicked memory:", memoryId);
  };
  return <Timeline />;
}
