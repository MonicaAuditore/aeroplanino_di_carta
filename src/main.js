import "./styles/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Font Awesome core
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Icone specifiche
import {
  faUser,
  faArrowUp,
  faArrowUpLong,
} from "@fortawesome/free-solid-svg-icons";

// Aggiungi le icone alla libreria
library.add(faUser, faArrowUp, faArrowUpLong);

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// ✅ REGISTRA IL COMPONENTE FONT AWESOME
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
