import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
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
import "./styles/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
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

app.mount("#app");
