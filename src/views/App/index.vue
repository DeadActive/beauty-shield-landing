<template>
    <v-container>
        <page-header></page-header>
        <v-slide-x-transition mode="out-in">
            <router-view />
        </v-slide-x-transition>
        <AppNavigation />
    </v-container>
</template>

<script>
import { mapActions } from "vuex";

import AppNavigation from "@cmps/Molecules/AppNavigation.vue";

export default {
    name: "HomeView",
    components: {
        AppNavigation,
    },
    mounted() {
        this.$router.push("/home");
    },
    methods: {
        ...mapActions("auth", ["logout"]),
    },
};
</script>
