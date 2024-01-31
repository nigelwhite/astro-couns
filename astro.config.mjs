import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), astroImageTools],
});
