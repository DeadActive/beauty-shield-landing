<template>
    <v-layout column>
        <SearchField :query.sync="query" />
        <RecordList :items="searched" :loading="loading" />
    </v-layout>
</template>

<script>
import SearchField from "@cmps/Molecules/SearchField.vue";
import RecordList from "@/components/Molecules/RecordList.vue";
import { mapActions, mapGetters } from "vuex";

import _ from "lodash";

export default {
    components: {
        RecordList,
        SearchField,
    },
    data() {
        return {
            query: "",
            loading: false,
        };
    },
    created() {
        this.query = this.theQuery;
    },
    computed: {
        ...mapGetters("record", { theQuery: "query", searched: "searched" }),
    },
    methods: {
        ...mapActions("record", ["queryRecords", "clearSearched"]),
        doSearch: _.debounce(async function () {
            this.loading = true;

            try {
                await this.queryRecords(this.query);
            } catch (e) {
                console.error(e);
            }

            this.loading = false;
        }, 500),
    },
    watch: {
        query() {
            if (this.query.length > 6) this.doSearch();
            else this.clearSearched();
        },
    },
};
</script>

<style></style>
