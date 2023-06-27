<template>
    <div class="page discography-page">
        <h1 class="title">
            Discography
        </h1>
        <div class="grid-container">
            <div
                v-for="(song, index) in songs"
                :key="index"
                class="grid-item"
            >
                <div class="grid-item-content">
                    <h3>{{ song.title }}</h3>
                    <div class="grid-item-content-row ">
                        <p>{{ song.genre }}</p>
                        <p>{{ song.year }}</p>
                    </div>
                    <p>{{ song.length }}</p>
                    <div class="external-links">
                        <a
                            v-for="(link, idx) in song.links"
                            :key="idx"
                            :href="link.url"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                :src="link.icon"
                                :alt="link.name"
                            >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFetch, useSeoMeta } from "#imports";

const { data: songs } = await useFetch("/api/songs");

useSeoMeta({
    title: "Discography",
    ogTitle: "Discography",
    description: "VINXIS's discography",
    ogDescription: "VINXIS's discography",
    ogType: "website",
    ogUrl: "https://vinxis.moe",
    ogSiteName: "Vinxis",
    ogLocale: "en_US",
    ogImage: "https://vinxis.moe/vinxisOrange.png",
    twitterCard: "summary_large_image",
    twitterSite: "@vinxis1",
    twitterTitle: "Discography",
    twitterDescription: "VINXIS's discography",
    twitterCreator: "@vinxis1",
    twitterImage: "https://vinxis.moe/vinxisOrange.png",
});
</script>

<style>
.discography-page {
    position: relative;
    overflow: hidden;
    z-index: 0;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    position: relative;
}

.grid-item {
    padding: 20px;
    border-radius: 10px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.grid-item::before {
    content: "";
    background-image: linear-gradient(
            rgba(255, 98, 0, 0.2),
            rgba(255, 98, 0, 0.2)
        ),
        url("/discography/background.png");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.grid-item-content {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.grid-item-content-row {
    display: flex;
    justify-content: space-between;
}

.external-links img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    filter: brightness(0) invert(1);
}
</style>