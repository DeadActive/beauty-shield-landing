<template>
    <v-layout align-center justify-center class="pb-4">
        <v-btn
            icon
            x-large
            color="black"
            style="position: absolute; left: 12px"
            @click="goBack"
            v-if="hasPrev"
        >
            <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <div class="d-flex justify-center">
            <h2>{{ title }}</h2>
        </div>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            hasPrev: false,
        };
    },
    methods: {
        getTitle() {
            this.title = this.$route.meta.title;
        },
        goBack() {
            this.$router.go(-1);
        },
    },
    mounted() {
        this.getTitle();
    },
    watch: {
        $route() {
            this.getTitle();
            this.hasPrev = true;
        },
    },
};
</script>
