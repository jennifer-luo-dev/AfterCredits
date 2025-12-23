import { PrismaClient } from "@prisma/client";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const prisma = new PrismaClient();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing Supabase environment variables");
}

const supabaseAdmin = createSupabaseClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
);

async function migrateToFolderPaths() {
  console.log("Starting migration to folder paths...");

  const memories = await prisma.memory.findMany({
    where: {
      imagePath: {
        not: null,
      },
    },
  });

  console.log(`Found ${memories.length} memories with imagePath`);

  for (const memory of memories) {
    if (!memory.imagePath) continue;

    try {
      // Check if the imagePath already points to a folder
      const { data: listData, error: listError } = await supabaseAdmin.storage
        .from("memories")
        .list(memory.imagePath);

      if (!listError && listData && Array.isArray(listData)) {
        // It's already a folder, skip it
        console.log(
          `✓ Memory ${memory.id} (${memory.title}) already has folder path: ${memory.imagePath}`
        );
        continue;
      }

      // If it's a file path, extract the folder path
      if (memory.imagePath.includes("/")) {
        const folderPath = memory.imagePath.substring(
          0,
          memory.imagePath.lastIndexOf("/")
        );

        // Verify the folder exists
        const { data: folderData, error: folderError } =
          await supabaseAdmin.storage.from("memories").list(folderPath);

        if (!folderError && folderData) {
          // Update the memory to use the folder path
          await prisma.memory.update({
            where: { id: memory.id },
            data: { imagePath: folderPath },
          });
          console.log(
            `✓ Updated Memory ${memory.id} (${memory.title}) from ${memory.imagePath} to ${folderPath}`
          );
        } else {
          console.log(
            `✗ Memory ${memory.id} (${memory.title}): Could not find folder at ${folderPath}`
          );
        }
      }
    } catch (err) {
      console.error(
        `Error processing memory ${memory.id} (${memory.title}):`,
        err
      );
    }
  }

  console.log("Migration complete!");
}

migrateToFolderPaths()
  .catch((err) => {
    console.error("Migration failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
