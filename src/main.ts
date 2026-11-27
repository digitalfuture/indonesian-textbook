import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const AppThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{indigo.50}",
      100: "{indigo.100}",
      200: "{indigo.200}",
      300: "{indigo.300}",
      400: "{indigo.400}",
      500: "{indigo.500}",
      600: "{indigo.600}",
      700: "{indigo.700}",
      800: "{indigo.800}",
      900: "{indigo.900}",
      950: "{indigo.950}",
    },
  },
});
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Drawer from "primevue/drawer";
import Badge from "primevue/badge";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Select from "primevue/select";
import ProgressBar from "primevue/progressbar";
import Dialog from "primevue/dialog";
import ToggleSwitch from "primevue/toggleswitch";
import SelectButton from "primevue/selectbutton";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";

import "primeicons/primeicons.css";

import App from "./App.vue";
import router from "./router";
import { i18n } from "./i18n";
import "./styles/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(PrimeVue, {
  theme: {
    preset: AppThemePreset,
    options: {
      darkModeSelector: ".app-dark",
    },
  },
});
app.use(ToastService);

// Global register PrimeVue components used across the app
app.component("PToolbar", Toolbar);
app.component("PButton", Button);
app.component("PDrawer", Drawer);
app.component("PBadge", Badge);
app.component("PCard", Card);
app.component("PInputText", InputText);
app.component("PTextarea", Textarea);
app.component("PSelect", Select);
app.component("PProgressBar", ProgressBar);
app.component("PDialog", Dialog);
app.component("PToggleSwitch", ToggleSwitch);
app.component("PSelectButton", SelectButton);
app.component("PToast", Toast);

// PrimeVue directives
app.directive("tooltip", Tooltip);

console.info(
  `%cIndonesian Textbook v${__APP_VERSION__}%c · built ${__BUILD_TIME__}`,
  "color: #4f46e5; font-weight: 700;",
  "color: #64748b;",
);

app.mount("#app");

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/indonesian-textbook/sw.js", { scope: "/indonesian-textbook/" })
      .catch(() => {});
  });
}
