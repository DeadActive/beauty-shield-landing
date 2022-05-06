<template>
    <v-app class="background">
        <v-slide-y-transition mode="out-in">
            <router-view />
        </v-slide-y-transition>
    </v-app>
</template>

<script>
export default {
    title: "Beauty Shield",
};
</script>

<style lang="scss">
.v-btn {
    text-transform: none !important;
}

.v-application--wrap {
    background: #fbfbfb;
}

.bg-abstract {
    // background: linear-gradient(
    //         189.07deg,
    //         rgba(0, 255, 240, 0.2) -13.96%,
    //         rgba(0, 0, 0, 0) 107.89%
    //     ),
    //     linear-gradient(163.32deg, #8d4fd5 -4.26%, #c071cd 98.11%);
    background-color: #eeeeee !important;
}

.soft-shadow {
    box-shadow: 0px 8px 16px rgba(31, 36, 56, 0.1) !important;
}
</style>
