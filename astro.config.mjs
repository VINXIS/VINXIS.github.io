// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    output: "static",
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    site: "https://vinxis.moe",
    integrations: [
        sitemap(),
    ],
});