<template>
    <div class="page contact-page">
        <h1 class="title">
            Contact
        </h1>
        <p class="contact-description">
            If you have any questions or would like to get in touch, please reach out through the following channels:
        </p>
        <ul class="contact-list">
            <li class="contact-item">
                Email: <NuxtLink
                    class="contact-link"
                    :to="`mailto:${email}`"
                >
                    {{ email }}
                </NuxtLink>
            </li>
            <li class="contact-item">
                Twitter: <NuxtLink
                    class="contact-link"
                    to="https://twitter.com/vinxis1"
                    target="_blank"
                >
                    @vinxis1
                </NuxtLink>
            </li>
            <li class="contact-item">
                Discord (Copies to clipboard): <span
                    class="contact-link"
                    target="_blank"
                    @click="copyToClipboard('corsace.io')"
                >corsace.io</span>
            </li>
        </ul>
        <ul class="contact-list">
            <li class="contact-item">
                Corsace Email: <NuxtLink
                    class="contact-link"
                    :to="`mailto:${corsaceEmail}`"
                >
                    {{ corsaceEmail }}
                </NuxtLink>
            </li>
            <li class="contact-item">
                Corsace Discord: <NuxtLink
                    class="contact-link"
                    to="https://discord.gg/Z6vEMsr"
                    target="_blank"
                >
                    https://discord.gg/Z6vEMsr
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";

const email = ref("oykxf2@gmail.com");
const corsaceEmail = ref("contact@corsace.io");

function copyToClipboard (text: string) {
    navigator.clipboard.writeText(text);
}

useSeoMeta({
    title: "Contact",
    ogTitle: "Contact",
    description: "Contact VINXIS",
    ogDescription: "Contact VINXIS",
    ogType: "website",
    ogUrl: "https://vinxis.moe",
    ogSiteName: "Vinxis",
    ogLocale: "en_US",
    ogImage: "https://vinxis.moe/vinxisOrange.png",
    twitterCard: "summary_large_image",
    twitterSite: "@vinxis1",
    twitterTitle: "Contact",
    twitterDescription: "Contact VINXIS",
    twitterCreator: "@vinxis1",
    twitterImage: "https://vinxis.moe/vinxisOrange.png",
});
</script>