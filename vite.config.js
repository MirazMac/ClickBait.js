// noinspection NodeCoreCodingAssistance

import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [],
  build: {
    minify: "terser",
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/ClickBait.js"),
      name: "ClickBait",
      formats: ["umd"],
      fileName: () => `ClickBait.min.js`,
    },
    rollupOptions: {
      output: {
        globals: {},
      },
    },
  },
});
