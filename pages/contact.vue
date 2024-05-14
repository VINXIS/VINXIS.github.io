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
                Cohost: <NuxtLink
                    class="contact-link"
                    to="https://vinxis.cohost.org/"
                    target="_blank"
                >
                    VINXIS
                </NuxtLink>
            </li>
            <li class="contact-item">
                Email: <NuxtLink
                    class="contact-link"
                    :to="`mailto:${email}`"
                >
                    {{ email }}
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
        <ul class="contact-list">
            <li class="contact-item">
                <a
                    class="contact-link"
                    href="/resumes/dev.pdf"
                >
                    Resume (Software Development)
                </a>
            </li>
            <li class="contact-item">
                <a
                    class="contact-link"
                    href="/resumes/mate.pdf"
                >
                    Resume (Materials Engineering)
                </a>
            </li>
        </ul>
    </div>
</template>
  
<script setup lang="ts">
import { useSeoMeta } from "#imports";

const email = "oykxf2@gmail.com";
const corsaceEmail = "contact@corsace.io";

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
    twitterTitle: "Contact",
    twitterDescription: "Contact VINXIS",
    twitterImage: "https://vinxis.moe/vinxisOrange.png",
});
</script>

<style>
.contact-page {
    background-color: var(--dark-neutral);
    height: calc(100vh - 15rem);
    text-align: right;
}

.contact-description {
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 1rem;
}

.contact-list {
    list-style-type: none;
    padding-left: 0;
    padding-bottom: 10px;
}

.contact-item {
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
}

.contact-link {
    color: #009aff;
    text-decoration: none;
    cursor: pointer;
}

.contact-link:hover {
    color: #007acc;
    text-decoration: underline;
}
</style>