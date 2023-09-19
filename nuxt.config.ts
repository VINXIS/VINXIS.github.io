// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",     
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { name: "robots", content: "all" },
                { hid: "theme-color", name: "theme-color", content: "#ff6200" },
            ],
        },
        pageTransition: { 
            name: "page", 
            mode: "out-in",
            onBeforeEnter: () => {
                document.body.classList.add("no-scrollbar");
            },
            onAfterEnter: () => {
                document.body.classList.remove("no-scrollbar");
            },
            onBeforeLeave: () => {
                document.body.classList.add("no-scrollbar");
            },
            onAfterLeave: () => {
                document.body.classList.remove("no-scrollbar");
            },
        },
    },
    css: [
        "~/assets/styles/main.css",
    ],
    plugins: [
        {
            src: "~/plugins/vercel.ts", mode: "client",
        },
    ],
    modules: [
        "@nuxt/image",
    ],
    components: true,
});
