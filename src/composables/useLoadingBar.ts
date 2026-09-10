import { ref } from "vue";

const isLoading = ref(false);
let timer: ReturnType<typeof setTimeout> | null = null;

export function useLoadingBar() {
  function start() {
    if (timer) clearTimeout(timer);
    isLoading.value = true;
  }

  function finish() {
    timer = setTimeout(() => {
      isLoading.value = false;
    }, 150);
  }

  return {
    isLoading,
    start,
    finish,
  };
}
