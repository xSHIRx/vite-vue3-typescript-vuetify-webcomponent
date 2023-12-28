import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  base: "", // so that the build paths are relative
  plugins: [vue({ customElement: true, template: { transformAssetUrls } }), vuetify()],
  build: {
    rollupOptions: {
      output: {
        dir: "dist/",
        entryFileNames: "index.js",
        // assetFileNames: "index.css",
        // chunkFileNames: "chunk.js",
        // manualChunks: undefined,
      },
    },
  },
});
