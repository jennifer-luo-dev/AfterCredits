// Upload a local image to Supabase storage using the service role key, then create a memory via API
const path = require("path");
const fs = require("fs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local"
  );
  process.exit(1);
}

const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

async function main() {
  try {
    const localFile = path.resolve(__dirname, "../public/logo512.png");
    const buffer = fs.readFileSync(localFile);
    const safeName = `test-${Date.now()}-logo512.png`;
    const filePath = `memories/${safeName}`;

    console.log('Ensuring bucket "memories" exists...');
    const { data: buckets } = await supabaseAdmin.storage.listBuckets();
    const hasMemories = buckets.some((b) => b.name === "memories");
    if (!hasMemories) {
      console.log('Bucket not found — creating "memories" (private)...');
      const { error: createErr } = await supabaseAdmin.storage.createBucket(
        "memories",
        { public: false }
      );
      if (createErr) {
        console.error("Failed to create bucket:", createErr.message);
        process.exit(1);
      }
      console.log("Bucket created.");
    }

    console.log("Uploading", localFile, "to", filePath);
    const { data, error } = await supabaseAdmin.storage
      .from("memories")
      .upload(filePath, buffer, { contentType: "image/png", upsert: false });
    if (error) {
      console.error("Upload error:", error.message);
      process.exit(1);
    }
    console.log("Upload success:", data);

    // Create a memory pointing to this path
    const payload = {
      title: "Uploaded from script",
      date: new Date().toISOString(),
      location: "Scriptville",
      description: "Created by upload-and-create-memory.js",
      imagePath: filePath,
      userId: null,
    };

    console.log("Creating memory with payload:", payload);
    const res = await fetch("http://localhost:3000/api/memory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    console.log("Memory create status:", res.status);
    console.log("Response:", text);

    // Verify GET /api/memory contains imageSrc
    const getRes = await fetch("http://localhost:3000/api/memory");
    const json = await getRes.json();
    console.log(
      "GET /api/memory result (latest):",
      JSON.stringify(json[0], null, 2)
    );
  } catch (err) {
    console.error("Error in script:", err);
    process.exit(1);
  }
}

main();
