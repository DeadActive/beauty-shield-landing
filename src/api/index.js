import axios from "axios";
import store from "@store";
import router from "@/router";

const client = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    // withCredentials: true,
});

client.interceptors.response.use(null, (error) => {
    if (
        error.response?.config & (error.response?.status === 401) ||
        error.response?.status === 403
    ) {
        store.dispatch("auth/logout");
        router.push("/login");
        return error.response;
    }

    return Promise.reject(error);
});

client.interceptors.request.use(
    (config) => {
        if (store.state.auth.isLoggedIn) {
            config.headers["Authorization"] = `Token ${localStorage.getItem(
                "token"
            )}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default client;
