<template>
    <canvas
        ref="canvas"
        class="particles"
    />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const colour = "#FFFFFF";
const cursorColour = "#009aff";

const minSpawn = 0.25;
const maxSpawn = 5.5;

const minSize = 0.025;
const sizeRate = 0.025;

const minXSpeed = 0.25;
const minYSpeed = -1.0;
const maxXSpeed = 1.0;
const maxYSpeed = 1.0;

onMounted(() => {
    class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        colour: string;

        constructor (x: number, y: number, colour: string, isClick?: boolean) {
            const minXS = (isClick ? -1 : minXSpeed);
            this.x = x;
            this.y = y;
            this.size = Math.random() * (maxSpawn - minSpawn) + minSpawn;
            this.speedX = Math.random() * (maxXSpeed - minXS) + minXS;
            this.speedY = Math.random() * (maxYSpeed - minYSpeed) + minYSpeed;
            this.colour = colour;
        }

        update () {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.size > minSize)
                this.size -= sizeRate;
        }

        draw () {
            if (!ctx.value) return;
            ctx.value.fillStyle = this.colour;
            ctx.value.strokeStyle = this.colour;
            ctx.value.lineWidth = 2;
            ctx.value.beginPath();
            ctx.value.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.value.closePath();
            ctx.value.fill();
        }
    }

    const canvas = ref<HTMLCanvasElement | null>(null);
    const ctx = ref<CanvasRenderingContext2D | null>(null);

    if (!canvas.value) {
        canvas.value = document.getElementsByClassName("particles")[0] as HTMLCanvasElement;
    }

    ctx.value = canvas.value.getContext("2d");

    const particles = ref<Particle[]>([]);

    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;

    function spawnParticles (x?: number, y?: number, cursor?: boolean, isClick?: boolean) {
        if (!canvas.value) return;

        const posX = x ?? Math.random() * canvas.value.width;
        const posY = y ?? Math.random() * canvas.value.height;

        particles.value.push(new Particle(posX, posY, cursor ? cursorColour : colour, isClick));
    }

    function animateParticles () {
        if (!ctx.value || !canvas.value) return;

        if (canvas.value.width !== window.innerWidth || canvas.value.height !== window.innerHeight) {
            canvas.value.width = window.innerWidth;
            canvas.value.height = window.innerHeight;
        }

        ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);

        for (let i = 0; i < particles.value.length; i++) {
            particles.value[i].update();
            particles.value[i].draw();

            if (particles.value[i].size <= minSize) {
                particles.value.splice(i, 1);
                i--;
            }
        }
        spawnParticles();
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener("mousemove", (event) => {
        const posX = event.clientX;
        const posY = event.clientY;
        spawnParticles(posX, posY, true);
    });
    window.addEventListener("mousedown", (event) => {
        const posX = event.clientX;
        const posY = event.clientY;
        for (let i = 0; i < 50; i++)
            spawnParticles(posX, posY, true, true);
    });

    animateParticles();
});
</script>

<style>
.particles {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: -1;
}

.particles-top {
    z-index: 100;
}
</style>