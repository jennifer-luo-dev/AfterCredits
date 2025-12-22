"use client";
import React from "react";
import MemoryDetailView from "../../components/memorydetail";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  return <MemoryDetailView id={Number(id)} />;
}
