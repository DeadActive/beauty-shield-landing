import client from ".";

export default {
    login(username, password) {
        return client.post("login/", { username, password });
    },
    getUser() {
        return client.get("auth/me/");
    },
    register(body) {
        return client.post("user/register", body);
    },
};
