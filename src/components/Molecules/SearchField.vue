<template>
    <v-text-field
        block
        outlined
        class="rounded-lg"
        :value="query"
        @input="handleInput"
        dense
        prepend-inner-icon="mdi-magnify"
        type="tel"
        v-mask="'+7 (###) ###-##-##'"
    ></v-text-field>
</template>

<script>
export default {
    props: {
        query: String,
    },
    methods: {
        handleInput(event) {
            this.$emit("update:query", event);
        },
    },
};
</script>

<style></style>
