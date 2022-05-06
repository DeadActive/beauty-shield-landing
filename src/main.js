import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

import Titled from "@cmps/Atoms/Titled.vue";
import "./registerServiceWorker";

import titleMixin from "@/mixins/pageTitle";
import { VueMaskDirective } from "v-mask";
import moment from "moment";
import LottieIcon from "@cmps/Atoms/LottieIcon";
import PageHeader from "@cmps/Molecules/PageHeader.vue";

Vue.mixin(titleMixin);
Vue.component("v-titled", Titled);
Vue.component("lottie-icon", LottieIcon);
Vue.component("page-header", PageHeader);
Vue.directive("mask", VueMaskDirective);

moment.locale("ru");
Vue.prototype["$moment"] = moment;
Vue.moment = moment;

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
