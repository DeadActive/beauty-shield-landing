import DictApi from "@api/dict";

export default {
    namespaced: true,
    name: "dict",
    state: {
        services: [],
    },
    getters: {
        services: (state) => state.services,
    },
    mutations: {
        SET_SERVICES: (state, value) => (state.services = value),
    },
    actions: {
        async loadServices({ commit }) {
            const { data } = await DictApi.getServices();

            commit("SET_SERVICES", data);
        },
    },
};
