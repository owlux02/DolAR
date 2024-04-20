import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"],
        maximumFileSizeToCacheInBytes: 3000000,
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
      manifest: {
        theme_color: "#13171F",
        background_color: "#13171F",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "DólAR",
        description: "Revisa los precios del dolar u otras monedas de una forma más sencilla",
        name: "DólAR",
        icons: [
          {
            src: "/logos/favicon192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logos/favicon256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/logos/favicon384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/logos/favicon512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
