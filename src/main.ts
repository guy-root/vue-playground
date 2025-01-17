import "vuetify/styles";
import "./style.scss";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { aliases as aliasesMD, md } from "vuetify/iconsets/md";
import { aliases as aliasesMDI, mdi } from "vuetify/iconsets/mdi";

const pinia = createPinia();

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliasesMD,
      ...aliasesMDI,
    },
    sets: {
      md,
      mdi,
    },
  },
});

import App from "./App.vue";

const app = createApp(App);
app.use(vuetify);
app.use(pinia);
app.mount("#app");
