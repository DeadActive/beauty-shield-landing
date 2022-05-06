import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const persist = createPersistedState({
    paths: ["auth"],
});

export default new Vuex.Store({
    modules,
    plugins: [persist],
});
