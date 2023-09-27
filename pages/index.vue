<template>
    <div class="main-page">
        <div class="logo-container">
            <nuxt-img
                class="logo"
                src="/vinxisWhite.png"
                alt="VINXIS Logo"
                width="400"
                height="400"
            />
            <h1 class="name">
                VINXIS
            </h1>
            <p>Music, Software Dev, Materials Engineering</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from "#imports";
useSeoMeta({
    title: "VINXIS",
    ogTitle: "VINXIS",
    description: "I make music and other stuff",
    ogDescription: "I make music and other stuff",
    ogType: "website",
    ogUrl: "https://vinxis.moe",
    ogSiteName: "Vinxis",
    ogLocale: "en_US",
    ogImage: "https://vinxis.moe/vinxisOrange.png",
    twitterCard: "summary_large_image",
    twitterSite: "@vinxis1",
    twitterTitle: "VINXIS",
    twitterDescription: "I make music and other stuff",
    twitterCreator: "@vinxis1",
    twitterImage: "https://vinxis.moe/vinxisOrange.png",
});
</script>

<style>
.main-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo {
    width: 1vw;
    height: 1vw;
    min-height: 50px;
    min-width: 50px;
    max-height: 400px;
    max-width: 400px;
}

.name {
    font-size: 3rem;
    margin: 0;
}
</style>