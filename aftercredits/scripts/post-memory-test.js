(async () => {
  try {
    const payload = {
      title: "API programmatic memory",
      date: new Date().toISOString(),
      location: "Node Park",
      description: "Created via scripts/post-memory-test.js",
      imagePath: null,
      userId: null,
    };

    console.log("Posting payload:", payload);

    const res = await fetch("http://localhost:3000/api/memory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    console.log("Status:", res.status);
    console.log("Response:", text);
  } catch (err) {
    console.error("Fetch error:", err);
    process.exit(1);
  }
})();
