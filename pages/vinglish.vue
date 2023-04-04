<template>
    <div class="page">
        <h1 class="title">
            Vinglish Translator
        </h1>
        <div class="vinglish-page">
            <div class="knobs">
                <div
                    v-for="(knob, index) in knobs"
                    :key="index"
                    class="knob"
                >
                    <input
                        v-model="knob.value"
                        type="range"
                        min="0"
                        max="0.99"
                        step="0.01"
                    >
                    <label>{{ knob.label }}: {{ knob.value }}</label>
                </div>
            </div>
            <div class="text-boxes">
                <textarea
                    v-model="inputText"
                    placeholder="Enter input text"
                />
                <textarea
                    v-model="outputText"
                    readonly
                    placeholder="Output will appear here"
                />
            </div>
            <div
                class="button"
                @click="generate"
            >
                Generate
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputText = ref("");
const outputText = ref("");

const knobs = ref([
    { label: "Swap Strength", value: 0.05 },
    { label: "Noise Strength", value: 0.13 },
    { label: "Insertion Strength", value: 0.08 },
]);

var chars = "`1234567890)(*&^%$#@!~qwertyuiop[]`\\';lkjhgfdsazxcvbnm,./";

function generate () {
    var arr = inputText.value.split("");
    for (var i = 0; i < arr.length - 1; i++) {
        if (knobs.value[0].value > Math.random()) {
            var swapVal = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = swapVal;
        }
        if (knobs.value[1].value > Math.random()) {
            if (knobs.value[2].value > Math.random()) {
                arr.splice(i, 0, chars[chars.indexOf(arr[i]) + Math.floor(Math.random() * Math.floor(2))]);
            } else {
                arr.splice(i, 1);
            }
        }
    }
    outputText.value = arr.join("");
}

useSeoMeta({
    title: "Vinglish",
    ogTitle: "Vinglish",
    description: "Vinglish is a tool that converts English text to Vinglish.",
    ogDescription: "Vinglish is a tool that converts English text to Vinglish.",
    ogType: "website",
    ogUrl: "https://vinxis.moe/vinglish",
    ogSiteName: "Vinxis",
    ogLocale: "en_US",
    ogImage: "https://vinxis.moe/vinxisOrange.png",
    twitterCard: "summary_large_image",
    twitterSite: "@vinxis1",
    twitterTitle: "Vinglish",
    twitterDescription: "Vinglish is a tool that converts English text to Vinglish.",
    twitterCreator: "@vinxis1",
    twitterImage: "https://vinxis.moe/vinxisOrange.png",
});
</script>