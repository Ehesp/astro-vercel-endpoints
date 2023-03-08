import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://zapp.run",
  output: "server",
  adapter: process.env.VERCEL
    ? vercel()
    : node({
        mode: "standalone",
      }),
  vite: {
    optimizeDeps: {
      extensions: ["jsx"],
    },
  },
});
