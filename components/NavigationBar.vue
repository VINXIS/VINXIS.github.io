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
                <li @click="navigate('/usage')">
                    Music Usage
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
                                    href="https://paypal.me/VINXIS"
                                    target="_blank"
                                >PayPal</a>
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
                                    href="https://bsky.app/profile/did:plc:fvkpy7co5eynbt5dwbpnyu75"
                                    target="_blank"
                                >Bluesky (Might remove)</a>
                            </li>
                            <li>
                                <a
                                    href="https://cohost.org/VINXIS"
                                    target="_blank"
                                >Cohost</a>
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

<style>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.8);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 9;
    padding-left: 25px;
}

.navbar.show {
    transform: translateX(0%);
    padding-left: 25px;
}

.navbar ul {
    list-style-type: none;
    padding: 0;
}

.navbar ul li {
    cursor: pointer;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    position: relative;
}

.navbar ul li::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: var(--secondary);
}

.navbar ul li:hover::after {
    width: 100%;
}

.navbar ul li:hover {
    color: var(--secondary);
    cursor: pointer;
}

.nav-item {
    cursor: pointer;
    position: relative;
}

.nav-item::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: var(--secondary);
}

.nav-item:hover::after {
    width: 100%;
}

.nav-item:hover {
    color: var(--secondary);
}

.navbar ul li:has(ul):hover {
    color: #ffffff;
}

.navbar ul li:has(ul)::after {
    display: none;
}

.sub-list {
    list-style-type: none;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    max-height: 350px;
    overflow: hidden;
}

.slideDown-leave-to,
.slideDown-enter-from {
    max-height: 0px;
}

.slideDown-leave-from,
.slideDown-enter-to {
    max-height: 350px;
}

.sub-list li {
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

.sub-list li a {
    color: inherit;
    text-decoration: none;
}

.sub-list li a:hover {
    color: var(--secondary);
}

.hamburger-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 25px;
}

.hamburger {
    position: fixed;
    top: 25px;
    left: 25px;
    font-size: 4rem;
    line-height: 4rem;
    cursor: pointer;
    z-index: 10;
}

.hamburger:hover {
    color: var(--secondary);
    transition: color 0.3s ease;
}
</style>