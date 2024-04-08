<template>
    <div class="fade-in">
        <SpeedInsights />
        <Particles />
        <NavigationBar />
        <NuxtPage />
    </div>
</template>

<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<style>
.fade-in {
    animation: fadeIn ease 1s;
    -webkit-animation: fadeIn ease 1s;
    -moz-animation: fadeIn ease 1s;
    -o-animation: fadeIn ease 1s;
    -ms-animation: fadeIn ease 1s;
}
</style>