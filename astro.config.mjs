// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always", // 'never' o 'ignore' son las otras opciones
  integrations: [tailwind()],
});
