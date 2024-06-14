import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://learn-astro-is-fun.netlify.app",
  integrations: [preact()]
});