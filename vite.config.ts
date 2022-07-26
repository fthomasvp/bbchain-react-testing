/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.ts",
    outputFile: "TEST-bbchain-react-testing.xml",
    reporters: ["junit"],

    coverage: {
      reporter: ["text", "html", "cobertura"],
      exclude: [
        "src/setupTests.ts",
        "src/mocks",
        "src/**/*.{test,spec}.tsx"
      ],
    },
  },
});
