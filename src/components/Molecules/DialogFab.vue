<template>
    <div>
        <v-btn fab @click="dialog = true" v-on="$listeners" v-bind="$attrs">
            <v-icon> mdi-plus </v-icon>
        </v-btn>
        <slot
            v-bind="{
                attrs: { value: dialog },
                on: { input: () => (dialog = false) },
            }"
        ></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
        };
    },
};
</script>

<style></style>
