import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async () => {
  // Conditionally load Cartographer plugin (only on Replit)
  const cartographerPlugin =
    process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [(await import("@replit/vite-plugin-cartographer")).cartographer()]
      : [];

  // Define root and output directories
  const rootDir = path.resolve(__dirname, "client");
  const outDir = path.resolve(__dirname, "dist", "public");

  return defineConfig({
    plugins: [react(), ...cartographerPlugin],
    resolve: {
      alias: {
        "@": path.resolve(rootDir, "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: rootDir,
    build: {
      outDir: outDir,
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  });
};
