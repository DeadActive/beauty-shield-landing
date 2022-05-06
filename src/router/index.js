import Vue from "vue";
import VueRouter from "vue-router";
import listener from "./listeners";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "app",
        component: () => import("../views/App/index.vue"),
        meta: {
            requiresAuth: false,
        },
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("../views/App/Home.vue"),
                meta: {
                    title: "Записи",
                },
            },
            {
                path: "/search",
                name: "search",
                component: () => import("../views/App/Search.vue"),
                meta: {
                    title: "Поиск",
                },
            },
            {
                path: "/records",
                name: "records",
                component: () => import("../views/App/Records.vue"),
                meta: {
                    title: "Мои записи",
                },
            },
            {
                path: "/account",
                name: "account",
                component: () => import("../views/App/Account.vue"),
                meta: {
                    title: "Аккаунт",
                },
            },
            {
                path: "/record/:id",
                name: "record",
                component: () => import("../views/App/RecordDetail.vue"),
                meta: {
                    title: "Запись",
                },
            },
        ],
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/Register.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default listener(router);
