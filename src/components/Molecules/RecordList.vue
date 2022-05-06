<template>
    <v-layout column>
        <template v-if="!loading">
            <RecordCard
                v-for="record in items"
                :key="record.id"
                :record="record"
                class="my-2"
            />
        </template>
        <template v-else>
            <v-skeleton-loader
                v-for="i in 5"
                :key="i"
                type="list-item-avatar, list-item-three-line"
                class="my-2 soft-shadow rounded-xl"
            ></v-skeleton-loader>
        </template>
    </v-layout>
</template>

<script>
import RecordCard from "./RecordCard.vue";

export default {
    props: {
        items: Array,
        loading: Boolean,
    },
    components: {
        RecordCard,
    },
};
</script>

<style></style>
