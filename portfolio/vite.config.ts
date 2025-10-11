
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Tailwind v4 works automatically through PostCSS.
// You don’t need to manually add it here.

export default defineConfig({
  plugins: [react()],
});

