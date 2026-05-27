import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/db/src/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql", // 🔥 GANTI INI
  dbCredentials: {
    url: process.env.DATABASE_URL!, // 🔥 GANTI INI JUGA
  },
});