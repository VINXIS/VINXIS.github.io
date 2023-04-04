<template>
    <div>
        <div class="hamburger-container">
            <div
                class="hamburger"
                @click="toggleNavbar"
            >
                &#9776;
            </div>
        </div>
        <nav
            class="navbar"
            :class="{ show: isNavbarVisible }"
        >
            <ul>
                <li @click="navigate('/')">
                    Home
                </li>
                <li @click="navigate('/discography')">
                    Discography
                </li>
                <li @click="navigate('/vinglish')">
                    Vinglish
                </li>
                <li @click="navigate('/contact')">
                    Contact
                </li>
                <li>
                    <div
                        class="nav-item"
                        @click="toggleCorsaceLinks"
                    >
                        Corsace
                    </div>
                    <transition name="slideDown">
                        <ul
                            v-show="isCorsaceLinksVisible"
                            class="sub-list"
                        >
                            <li><a href="https://corsace.io/">Website</a></li>
                            <li><a href="https://discord.gg/Z6vEMsr">Discord</a></li>
                        </ul>
                    </transition>
                </li>
                <li>
                    <div
                        class="nav-item"
                        @click="toggleExternalLinks"
                    >
                        External Links
                    </div>
                    <transition name="slideDown">
                        <ul
                            v-show="isExternalLinksVisible"
                            class="sub-list"
                        >
                            <li>
                                <a
                                    href="https://github.com/VINXIS"
                                    target="_blank"
                                >GitHub</a>
                            </li>
                            <li>
                                <a
                                    href="https://vinxis.bandcamp.com"
                                    target="_blank"
                                >Bandcamp</a>
                            </li>
                            <li>
                                <a
                                    href="https://soundcloud.com/vinxis"
                                    target="_blank"
                                >Soundcloud</a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/user/OYKXF"
                                    target="_blank"
                                >Youtube</a>
                            </li>
                            <li>
                                <a
                                    href="https://open.spotify.com/artist/2cNVX1qSKExpOojOx3INu8"
                                    target="_blank"
                                >Spotify</a>
                            </li>
                            <li>
                                <a
                                    href="https://itunes.apple.com/us/artist/vinxis/1342478754"
                                    target="_blank"
                                >Apple Music</a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/vinxis1"
                                    target="_blank"
                                >Twitter</a>
                            </li>
                            <li>
                                <a
                                    href="https://osu.ppy.sh/beatmaps/artists/22"
                                    target="_blank"
                                >osu!</a>
                            </li>
                        </ul>
                    </transition>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isNavbarVisible = ref(false);
const isCorsaceLinksVisible = ref(false);
const isExternalLinksVisible = ref(false);

function toggleNavbar () {
    isNavbarVisible.value = !isNavbarVisible.value;
}

function toggleCorsaceLinks () {
    isCorsaceLinksVisible.value = !isCorsaceLinksVisible.value;
}

function toggleExternalLinks () {
    isExternalLinksVisible.value = !isExternalLinksVisible.value;
}

function navigate (path: string) {
    isNavbarVisible.value = false;
    isCorsaceLinksVisible.value = false;
    isExternalLinksVisible.value = false;
    router.push(path);
}
</script>