<template>
    <div class="usage-page">
        <div class="usage-guidelines">
            <h1 class="title">
                Music Usage
            </h1>
            <p>Use my music for any purpose not explicitly listed below.</p>
            <p>Credit with a link to me and my name where possible.</p>
        </div>
        <div class="usage-restrictions">
            <h2>Restrictions</h2>
            <ul>
                <li><strong>Hateful Content:</strong> Do not use my music in content promoting any form of hateful rhetoric.</li>
                <li><strong>Direct Re-uploads:</strong> Do not directly re-upload my music without any added content.<br>If someone wants my music as is, they can visit my channel or accounts.</li>
            </ul>
        </div>
        <div class="usage-notes">
            <h2>Notes</h2>
            <ul>
                <li><strong>Downloads:</strong> You can make my music downloadable/available for free wherever I don't have them currently uploaded, as long as you aren't making a profit from it, and credit as expected above.</li>
                <li><strong>Claim Alert:</strong> Using "Sidetracked Day" in a YouTube video may result in an automatic claim by TuneCore. Unfortunately, they don't allow me to whitelist videos or anything. All other songs should be fine as they were distributed via DistroKid.</li>
                <li><strong>Contractual Songs:</strong> While none exist currently, in the future, there may be songs contractually created with certain organizations that may limit their use. As they come, I will list them here, and denote them in the <a @click="$router.push('/discography')">Discography</a> page.</li>
            </ul>
        </div>
        <div>
            If you wish to give money, do so via <a href="https://vinxis.bandcamp.com/">Bandcamp</a> or <a href="https://paypal.me/VINXIS">PayPal</a>.
        </div>
        <div>
            Any music usage inquires not covered can be sent by asking via methods listed in the <a @click="$router.push('/contact')">Contact</a> page.
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from "#imports";
useSeoMeta({
    title: "VINXIS - Music Usage",
    ogTitle: "VINXIS - Music Usage",
    description: "Information on using my music",
    ogDescription: "Information on using my music",
    ogType: "website",
    ogUrl: "https://vinxis.moe",
    ogSiteName: "Vinxis",
    ogLocale: "en_US",
    ogImage: "https://vinxis.moe/vinxisOrange.png",
    twitterCard: "summary_large_image",
    twitterSite: "@vinxis1",
    twitterTitle: "VINXIS - Music Usage",
    twitterDescription: "Information on using my music",
    twitterCreator: "@vinxis1",
    twitterImage: "https://vinxis.moe/vinxisOrange.png",
});
</script>

<style>
.usage-page {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.usage-page div {
    width: 33%;
}

.usage-page h2 {
    margin-bottom: 0.5rem;
}

.usage-page a {
    cursor: pointer;
    color: black;
    text-decoration: none;
}

.usage-page li {
    margin: 0.5rem;
}
</style>