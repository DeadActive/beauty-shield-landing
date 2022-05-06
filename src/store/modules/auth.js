import AuthApi from "@api/auth";
import router from "@/router";

const defaultState = {
    isLoggedIn: false,
    user: {},
};

export default {
    namespaced: true,
    name: "auth",
    state: {
        isLoggedIn: false,
        user: {},
    },
    mutations: {
        SET_LOGGED_IN: (state, value) => (state.isLoggedIn = value),
        SET_USER: (state, value) => (state.user = value),
        RESET: (state) => {
            Object.assign(state, defaultState);
        },
    },
    actions: {
        async login({ commit }, { username, password }) {
            const { data } = await AuthApi.login(username, password);

            commit("SET_LOGGED_IN", true);
            commit("SET_USER", data.user);

            localStorage.setItem("token", data["access_token"]);

            if (router.currentRoute.query.from) {
                router.replace(router.currentRoute.query.from);
                return;
            }

            router.push("/");
        },
        async loadUser({ commit }) {
            const { data } = await AuthApi.getUser();

            console.log(data);

            commit("SET_USER", data);
        },
        async register(_, body) {
            try {
                await AuthApi.register(body);
            } catch (e) {
                console.error(e);
            }
        },
        logout({ commit }) {
            commit("RESET");

            localStorage.clear();

            router.push("/login");
        },
    },
    getters: {
        getLoggedIn: (state) => state.isLoggedIn,
        getUser: (state) => state.user,
    },
};
