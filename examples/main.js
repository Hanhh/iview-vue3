import App from "./app.vue"
import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router";
import iView from '../src/index';
import locale from '../src/locale/lang/zh-CN';

const app = createApp(App);
const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/split",
            component: () => import("./routers/split"),
        },
        // {
        //     path: "/alert",
        //     component: (resolve) => require(["./routers/alert"], resolve),
        // }
    ],
});
app.use(iView, {
    locale
})
app.use(router);
app.mount("#app");