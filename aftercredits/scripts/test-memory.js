// Simple test script to POST a memory to local dev server
// Usage: node scripts/test-memory.js

const BASE = process.env.BASE_URL || "http://localhost:3000";

async function postMemory() {
  const res = await fetch(`${BASE}/api/memory`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Test Memory from script",
      date: "2025-12-18",
      location: "Test Park",
      description: "Created by test script",
      imageUrl: null,
    }),
  });

  const body = await res.text();
  console.log("Status:", res.status);
  console.log("Body:", body);
}

postMemory().catch((err) => {
  console.error(err);
  process.exit(1);
});
