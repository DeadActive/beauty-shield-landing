<template>
    <v-layout column style="margin-bottom: 80px">
        <RecordList :items="records" :loading="records.length < 1" />
        <dialog-fab color="primary" class="fixed-fab">
            <template #default="{ attrs, on }">
                <record-create v-bind="attrs" v-on="on"></record-create>
            </template>
        </dialog-fab>
    </v-layout>
</template>

<script>
import RecordList from "@cmps/Molecules/RecordList.vue";
import RecordCreate from "@cmps/Organisms/RecordCreate.vue";
import DialogFab from "@cmps/Molecules/DialogFab.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        RecordList,
        RecordCreate,
        DialogFab,
    },
    created() {
        this.loadRecords();
    },
    computed: {
        ...mapGetters("record", ["records"]),
    },
    methods: {
        ...mapActions("record", ["loadRecords"]),
    },
};
</script>

<style></style>
