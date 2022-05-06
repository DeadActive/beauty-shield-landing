<template>
    <div
        ref="container"
        :style="style"
        :class="{ active: play, completed }"
    ></div>
</template>

<script>
import lottie from "lottie-web";

export default {
    props: {
        src: Object | String,
        width: {
            type: String,
            default: "24px",
        },
        height: {
            type: String,
            default: "24px",
        },
        color: {
            type: String,
            default: "#000000",
        },
        play: Boolean,
    },
    data() {
        return {
            anim: null,
            completed: false,
        };
    },
    computed: {
        style() {
            return {
                overflow: "hidden",
                width: this.width,
                height: this.height,
                "--fill-color": this.color,
                "--stroke-color": this.color,
            };
        },
    },
    mounted() {
        this.anim = lottie.loadAnimation({
            container: this.$refs.container,
            renderer: "svg",
            path: this.src,
            loop: false,
            autoplay: false,
            rendererSettings: {
                className: "icon-color",
            },
        });

        if (this.play) this.playAnim();

        this.anim.addEventListener("complete", () => {
            this.completed = true;
        });
    },
    watch: {
        play(val) {
            if (val) {
                this.completed = false;
                this.playAnim();
            } else {
                this.anim.goToAndStop(0);
            }
        },
    },
    methods: {
        playAnim() {
            this.anim.setDirection(1);
            this.anim.play();
        },
        playAnimReverse() {
            this.anim.setDirection(-1);
            this.anim.play();
        },
        stopAnim() {
            this.anim.stop();
        },
    },
};
</script>

<style>
.active:not(.completed) .icon-color g path {
    fill: var(--fill-color) !important;
    stroke: var(--stroke-color) !important;
}

.completed .icon-color g path {
    fill: var(--fill-color) !important;
}

*[stroke],
*[stroke-width]:not([stroke-width="0"]):not([stroke-width=""]) {
    stroke: var(--stroke-color);
}
</style>
