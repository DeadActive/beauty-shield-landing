import record from "@api/record";
import RecordApi from "@api/record";

export default {
    namespaced: true,
    name: "record",
    state: {
        records: [],
        record: {},
        query: "",
        searched: [],
    },
    getters: {
        records: (state) => state.records,
        query: (state) => state.query,
        searched: (state) => state.searched,
        record: (state) => state.record,
    },
    mutations: {
        SET_RECORDS: (state, value) => (state.records = value),
        SET_QUERY: (state, value) => (state.query = value),
        SET_SEARCHED: (state, value) => (state.searched = value),
        SET_RECORD: (state, value) => (state.record = value),
    },
    actions: {
        async loadRecords({ commit }) {
            const { data } = await RecordApi.getRecords();

            commit("SET_RECORDS", data);
        },
        async queryRecords({ commit }, query) {
            const { data } = await RecordApi.searchRecords(query);

            commit("SET_QUERY", query);
            commit("SET_SEARCHED", data);
        },
        async loadRecord({ commit }, id) {
            const { data } = await RecordApi.getRecord(id);

            commit("SET_RECORD", data);
        },
        clearSearched({ commit }) {
            commit("SET_SEARCHED", []);
        },
    },
};
