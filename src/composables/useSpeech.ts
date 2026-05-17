import { useLanguageStore } from "../stores/language";

export function useSpeech() {
  const langStore = useLanguageStore();

  function speak(text: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    const langMap: Record<string, string> = {
      id: "id-ID",
      ru: "ru-RU",
    };

    const lang = langMap[langStore.targetLang] || "id-ID";

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85;
    utterance.pitch = 1;

    // Try to find a native voice
    const voices = window.speechSynthesis.getVoices();
    const nativeVoice = voices.find((v) => v.lang.startsWith(lang));
    if (nativeVoice) {
      utterance.voice = nativeVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  return { speak };
}
