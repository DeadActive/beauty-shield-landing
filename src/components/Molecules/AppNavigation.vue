<template>
    <v-bottom-navigation
        fixed
        color="primary"
        height="80"
        class="pb-4"
        active-class="asd"
        v-model="nav"
    >
        <v-btn to="/home" height="56" color="white" :ripple="false">
            <span>Записи</span>
            <lottie-icon
                src="/icons/home.json"
                :color="nav === 0 ? '#8a33e1' : '#000'"
                :play="nav === 0"
            ></lottie-icon>
        </v-btn>

        <v-btn to="/search" height="56" color="white" :ripple="false">
            <span>Поиск</span>
            <lottie-icon
                src="/icons/search.json"
                :color="nav === 1 ? '#8a33e1' : '#000'"
                :play="nav === 1"
            ></lottie-icon>
        </v-btn>

        <v-btn to="/records" height="56" color="white" :ripple="false">
            <span>Мои записи</span>
            <lottie-icon
                src="/icons/view.json"
                :color="nav === 2 ? '#8a33e1' : '#000'"
                :play="nav === 2"
            ></lottie-icon>
        </v-btn>

        <v-btn to="/account" height="56" color="white" :ripple="false">
            <span>Аккаунт</span>
            <lottie-icon
                src="/icons/account.json"
                :color="nav === 3 ? '#8a33e1' : '#000'"
                :play="nav === 3"
            ></lottie-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    data() {
        return {
            nav: 0,
        };
    },
};
</script>

<style lang="scss">
.v-bottom-navigation {
    border-top-left-radius: 32px !important;
    border-top-right-radius: 32px !important;
}

.v-btn--active::before {
    display: none !important;
}
</style>
