import { ref, watch } from "vue";

const SOUND_STORAGE_KEY = "indonesian-textbook-sound";

function getSavedSound(): boolean {
  if (typeof window === "undefined") return true;
  const saved = localStorage.getItem(SOUND_STORAGE_KEY);
  if (saved === null) return true;
  return saved === "true";
}

function applySoundState(enabled: boolean) {
  if (typeof document !== "undefined") {
    if (!enabled) {
      document.documentElement.classList.add("sound-muted");
    } else {
      document.documentElement.classList.remove("sound-muted");
    }
  }
}

const isSoundEnabled = ref<boolean>(getSavedSound());

if (typeof window !== "undefined") {
  applySoundState(isSoundEnabled.value);
  watch(isSoundEnabled, (val) => {
    localStorage.setItem(SOUND_STORAGE_KEY, String(val));
    applySoundState(val);
    if (!val && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  });
}

export function useSound() {
  const toggleSound = () => {
    isSoundEnabled.value = !isSoundEnabled.value;
  };

  const setSound = (val: boolean) => {
    isSoundEnabled.value = val;
  };

  return {
    isSoundEnabled,
    toggleSound,
    setSound,
  };
}
