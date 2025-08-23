import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import image from "@astrojs/image";

import compressor from "astro-compressor";

export default defineConfig({
  site: "https://murchikov.ru",
  integrations: [react(), image({
    service: {
      entry: 'astro/assets/services/sharp'
    }
  }), compressor({
    brotli: true,
    gzip: true,
  })]
});