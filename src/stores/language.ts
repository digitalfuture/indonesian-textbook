import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

export const useLanguageStore = defineStore("language", () => {
  const interfaceLang = ref("ru");
  const targetLang = ref("id");

  const router = useRouter();

  function init(pathInterface: string, pathTarget: string) {
    const valid = ["ru", "id"];
    interfaceLang.value = valid.includes(pathInterface) ? pathInterface : "ru";
    targetLang.value = valid.includes(pathTarget) ? pathTarget : "id";
  }

  function setInterface(lang: "ru" | "id") {
    interfaceLang.value = lang;
    navigate();
  }

  function setTarget(lang: "ru" | "id") {
    targetLang.value = lang;
    navigate();
  }

  function navigate() {
    const currentPath = router.currentRoute.value.path;
    const segments = currentPath.split("/").filter(Boolean);
    // Replace first two segments with new langs, keep rest
    const rest = segments.slice(2).join("/");
    const path = `/${interfaceLang.value}/${targetLang.value}${rest ? "/" + rest : ""}`;
    router.push(path);
  }

  return {
    interfaceLang,
    targetLang,
    init,
    setInterface,
    setTarget,
  };
});
