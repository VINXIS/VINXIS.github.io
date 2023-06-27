<template>
    <div class="main-page">
        <div class="logo-container">
            <nuxt-img
                src="/vinxisWhite.png"
                alt="VINXIS Logo"
                width="200"
                height="200"
                loading="lazy"
            />
            <h1 class="name">
                VINXIS
            </h1>
            <p>I make music and other stuff</p>
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

.name {
    font-size: 3rem;
    margin: 0;
}
</style>