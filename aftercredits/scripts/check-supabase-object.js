// Check if a specific object exists in the 'memories' bucket using service role key
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

async function main() {
  const prefix =
    "memories/1766183473626-Colorful Playful Bold Style Events Schedule Flyer .PNG";

  try {
    console.log("Listing items with prefix:", prefix);
    const { data, error } = await supabaseAdmin.storage
      .from("memories")
      .list("", { limit: 100 });
    if (error) {
      console.error("List error:", error.message);
      process.exit(1);
    }
    console.log("Total items in bucket (sample):", data.length);
    const found = data.find(
      (d) => d.name === prefix || d.name === decodeURIComponent(prefix)
    );
    if (found) {
      console.log("Found object:", found);
    } else {
      console.log(
        "Object not found by exact name. Searching by partial match..."
      );
      const partial = "Colorful Playful";
      const partialFound = data.filter(
        (d) => d.name.includes("Colorful") || d.name.includes("Colorful-")
      );
      console.log(
        "Partial matches:",
        partialFound.map((f) => f.name).slice(0, 10)
      );
    }
  } catch (err) {
    console.error("Error checking bucket:", err);
    process.exit(1);
  }
}

main();
