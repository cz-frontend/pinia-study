import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
const store = createPinia();

app.use(ElementPlus, {
  size: "mini",
});
app.use(store);
app.use(router);

app.mount("#app");
