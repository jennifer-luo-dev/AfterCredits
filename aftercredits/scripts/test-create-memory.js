// Quick test script to attempt creating a Memory via Prisma
// Loads .env.local using dotenv so DATABASE_URL is available
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Attempting to create a test Memory...");
    const memory = await prisma.memory.create({
      data: {
        title: "Prisma test - memory",
        date: new Date(),
        description: "Test created by scripts/test-create-memory.js",
      },
    });
    console.log("Created memory:", memory);
  } catch (err) {
    console.error("Prisma create error:");
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
