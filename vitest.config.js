import path from "node:path";
import url from "node:url";
import { defineConfig } from "vitest/config";

const __dirname = url.fileURLToPath(path.dirname(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
