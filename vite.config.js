import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ProjectPythia/",
  plugins: [react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      // include: [/linked-dep/, /node_modules/],
    },
  },
});
