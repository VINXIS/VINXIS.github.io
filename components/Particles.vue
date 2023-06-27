<template>
    <canvas
        ref="canvas"
        class="particles"
    />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const colour = "#FFFFFF";

onMounted(() => {
    class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        colour: string;

        constructor (x: number, y: number, colour?: string) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5.25 + 0.25;
            this.speedX = Math.random() * 0.75 + 0.25;
            this.speedY = Math.random() * 2 - 1;
            this.colour = colour ?? `hsl(${Math.random() * 360}, 50%, 50%)`;
        }

        update () {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.size > 0.025) this.size -= 0.025;
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

    function spawnParticles () {
        if (!canvas.value) return;

        const posX = Math.random() * canvas.value.width;
        const posY = Math.random() * canvas.value.height;

        particles.value.push(new Particle(posX, posY, colour));
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

            if (particles.value[i].size <= 0.025) {
                particles.value.splice(i, 1);
                i--;
            }
        }
        spawnParticles();
        requestAnimationFrame(animateParticles);
    }

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