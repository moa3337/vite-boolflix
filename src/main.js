import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";

const BaseUri = "https://api.themoviedb.org/3";
const ApiKey = "c1610722c2c90e0f63ab759963e2c84c";

const app = createApp(App);

app.mount("#app");
