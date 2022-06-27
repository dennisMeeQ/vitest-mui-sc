import { defineConfig } from "vitest/config";
import { fileURLToPath } from "url";

export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  resolve: {
    alias: {
      // for TypeScript path alias import like : @/x/y/z
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // Map mui style engine to styled-components
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["vitest.setup.ts"],
  },
});
