import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";

// main font
import "@fontsource/poppins"; // Defaults to weight 400

createApp(App).use(router).mount("#app");
