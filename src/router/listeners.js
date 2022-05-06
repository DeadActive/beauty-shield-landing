import store from "@store";

function getTitle(vm) {
    const { title } = vm.$options;

    if (title) {
        return typeof title === "function" ? title.call(vm) : title;
    }
}

function evaluateTitle(to) {
    if (to.matched.some((record) => record.meta.title)) {
        const matches = to.meta.title.match(/\{\w*\}/gm);

        if (matches) {
            matches.forEach(
                (m) =>
                    (to.meta.title = to.meta.title.replace(
                        m,
                        to.params[m.replace("{", "").replace("}", "")]
                    ))
            );
        }

        document.title = to.meta.title;
    }
}

export default function (router) {
    router.beforeEach((to, from, next) => {
        evaluateTitle(to);

        if (to.matched.some((record) => record.meta.requiresAuth)) {
            if (store.state.auth.isLoggedIn) {
                next();
                return;
            }
            const loginPath = window.location.pathname;
            next({ name: "login", query: { from: loginPath } });
        } else {
            next();
        }
    });

    return router;
}
