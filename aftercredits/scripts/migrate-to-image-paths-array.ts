// scripts/migrate-to-image-paths-array.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function migrateToImagePathsArray() {
  console.log("Starting migration from imagePath to imagePaths array...");

  const memories = await prisma.memory.findMany({
    where: {
      imagePath: {
        not: null,
      },
      imagePaths: {
        isEmpty: true, // Only migrate if imagePaths is empty
      },
    },
  });

  console.log(`Found ${memories.length} memories to migrate`);

  for (const memory of memories) {
    if (!memory.imagePath) continue;

    try {
      // Move single imagePath into imagePaths array
      await prisma.memory.update({
        where: { id: memory.id },
        data: {
          imagePaths: [memory.imagePath], // Convert to array
        },
      });

      console.log(
        `✓ Migrated Memory ${memory.id} (${memory.title}): ${memory.imagePath} -> [${memory.imagePath}]`
      );
    } catch (err) {
      console.error(
        `✗ Error migrating memory ${memory.id} (${memory.title}):`,
        err
      );
    }
  }

  console.log("Migration complete!");
}

migrateToImagePathsArray()
  .catch((err) => {
    console.error("Migration failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
