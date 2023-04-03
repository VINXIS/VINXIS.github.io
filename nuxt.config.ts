// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: "static",
    app: {
        baseURL: "/VINXIS.github.io/",
        head: {
            meta: [
                { name: "robots", content: "all" },
            ],
            link: [
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Avenir&display=swap" },
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
    components: true,
});
