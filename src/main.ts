import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import App from "./App.vue";
import router from "./router";

import "./style/tailwind.css";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
