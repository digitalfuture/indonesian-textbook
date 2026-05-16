import { createI18n } from "vue-i18n";
import ru from "./locales/ru.json";
import id from "./locales/id.json";

export const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "ru",
  messages: {
    ru,
    id,
  },
});
