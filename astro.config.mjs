import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';

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
