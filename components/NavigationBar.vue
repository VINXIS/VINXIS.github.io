<template>
    <div>
        <div
            class="hamburger"
            @click="toggleNavbar"
        >
            &#9776;
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
                    <ul
                        id="corsace-links"
                        class="sub-list"
                    >
                        <li><a href="https://corsace.io/">Website</a></li>
                        <li><a href="https://discord.gg/Z6vEMsr">Discord</a></li>
                    </ul>
                </li>
                <li>
                    <div
                        class="nav-item"
                        @click="toggleExternalLinks"
                    >
                        External Links
                    </div>
                    <ul
                        id="external-links"
                        class="sub-list"
                    >
                        <li>
                            <a
                                href="https://vinxis.cohost.org/"
                                target="_blank"
                            >Cohost</a>
                        </li>
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
                                href="https://osu.ppy.sh/beatmaps/artists/22"
                                target="_blank"
                            >osu!</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isNavbarVisible = ref(false);
const isCorsaceLinksVisible = ref(false);
const isExternalLinksVisible = ref(false);

onMounted(() => {
    setDynamicHeight("corsace-links", isCorsaceLinksVisible.value);
    setDynamicHeight("external-links", isExternalLinksVisible.value);
});

function toggleNavbar () {
    isNavbarVisible.value = !isNavbarVisible.value;
}

function setDynamicHeight (id: string, visible: boolean) {
    const element = document.getElementById(id);
    if (!element)
        return;
    
    element.style.height = visible ? `${element.scrollHeight}px` : "0";
    element.style.marginTop = visible ? "0.5rem" : "0";
}

function toggleCorsaceLinks () {
    isCorsaceLinksVisible.value = !isCorsaceLinksVisible.value;
    setDynamicHeight("corsace-links", isCorsaceLinksVisible.value);
}

function toggleExternalLinks () {
    isExternalLinksVisible.value = !isExternalLinksVisible.value;
    setDynamicHeight("external-links", isExternalLinksVisible.value);
}

function navigate (path: string) {
    isNavbarVisible.value = false;
    isCorsaceLinksVisible.value = false;
    isExternalLinksVisible.value = false;
    setDynamicHeight("corsace-links", isCorsaceLinksVisible.value);
    setDynamicHeight("external-links", isExternalLinksVisible.value);
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
}

.navbar ul {
    list-style-type: none;
    padding: 0;
    max-height: 75%;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--secondary) rgba(0, 0, 0, 0);
}

.navbar ul * {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.navbar ul *::-webkit-scrollbar {
    display: none;
}

.navbar ul li:nth-child(even) {
    color: #ffffff;
}

.navbar ul li {
    cursor: pointer;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    position: relative;
}

.navbar ul li:hover {
    cursor: pointer;
}

.nav-item {
    cursor: pointer;
    position: relative;
    overflow: visible;
}

.nav-item::after, .navbar ul li::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: var(--secondary);
}

.nav-item:hover::after, .navbar ul li:hover::after {
    width: 100%;
}

.nav-item:hover, .navbar ul li:hover {
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
    overflow: hidden;
}

.sub-list li {
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

.sub-list li:last-child {
    margin-bottom: 0;
}

.sub-list li a {
    display: block;
    color: inherit;
    text-decoration: none;
}

.sub-list li a:hover {
    color: var(--secondary);
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