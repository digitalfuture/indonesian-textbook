import { ref, watch } from "vue";
import { useLanguageStore } from "../stores/language";
import { useSound } from "./useSound";

export interface SpeechOptions {
  gender?: "male" | "female";
  pitch?: number;
  rate?: number;
  onEnd?: () => void;
  cancelCurrent?: boolean;
}

export type SpeechSpeedPreset = 0.7 | 0.9 | 1.1;

const SPEED_STORAGE_KEY = "indonesian-textbook-speech-rate";

function getSavedSpeed(): SpeechSpeedPreset {
  if (typeof window === "undefined") return 0.9;
  const raw = parseFloat(localStorage.getItem(SPEED_STORAGE_KEY) || "0.9");
  if (raw === 0.7 || raw === 0.9 || raw === 1.1) return raw;
  return 0.9;
}

const speechRate = ref<SpeechSpeedPreset>(getSavedSpeed());

if (typeof window !== "undefined") {
  watch(speechRate, (val) => {
    try {
      localStorage.setItem(SPEED_STORAGE_KEY, String(val));
    } catch {
      // ignore storage errors
    }
  });
}

// Module-level references to prevent Chromium/WebKit GC and allow clean global cancellation
let globalActiveUtterance: SpeechSynthesisUtterance | null = null;
let resumeInterval: ReturnType<typeof setInterval> | null = null;
let activeCancelCleanup: (() => void) | null = null;

export function stopSpeech() {
  if (activeCancelCleanup) {
    activeCancelCleanup();
    activeCancelCleanup = null;
  }
  if (resumeInterval) {
    clearInterval(resumeInterval);
    resumeInterval = null;
  }
  globalActiveUtterance = null;
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function keepSpeechAlive() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  if (resumeInterval) clearInterval(resumeInterval);
  resumeInterval = setInterval(() => {
    if (!window.speechSynthesis.speaking) {
      if (resumeInterval) {
        clearInterval(resumeInterval);
        resumeInterval = null;
      }
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  }, 5000);
}

export function useSpeech() {
  const langStore = useLanguageStore();
  const { isSoundEnabled } = useSound();

  function cycleSpeechRate() {
    const order: SpeechSpeedPreset[] = [0.7, 0.9, 1.1];
    const idx = order.indexOf(speechRate.value);
    speechRate.value = order[(idx + 1) % order.length];
  }

  function speak(text: string, options: SpeechOptions = {}) {
    if (!isSoundEnabled.value) {
      if (options.onEnd) options.onEnd();
      return;
    }
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      if (options.onEnd) options.onEnd();
      return;
    }

    const langMap: Record<string, string> = {
      id: "id-ID",
      ru: "ru-RU",
    };

    const targetLangCode = langMap[langStore.targetLang] || "id-ID";

    if (options.cancelCurrent !== false) {
      stopSpeech();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    globalActiveUtterance = utterance;

    utterance.lang = targetLangCode;
    const baseRate = options.rate ?? speechRate.value;
    utterance.rate = baseRate;

    // Pitch: distinguish male vs female clearly
    if (options.pitch !== undefined) {
      utterance.pitch = options.pitch;
    } else if (options.gender === "male") {
      utterance.pitch = 0.65;
      if (options.rate === undefined) {
        utterance.rate = Math.max(0.6, baseRate - 0.04);
      }
    } else if (options.gender === "female") {
      utterance.pitch = 1.22;
    } else {
      utterance.pitch = 1.0;
    }

    const voices = window.speechSynthesis.getVoices();
    const matchingLangVoices = voices.filter((v) =>
      v.lang.replace(/_/g, "-").toLowerCase().startsWith(targetLangCode.toLowerCase()),
    );

    if (matchingLangVoices.length > 0) {
      if (options.gender === "male") {
        const maleVoice = matchingLangVoices.find((v) =>
          /\bmale|pria|laki|cowo|david|dmitry|pavel|george|stefan|guy\b/i.test(v.name),
        );
        utterance.voice = maleVoice || matchingLangVoices[0];
      } else if (options.gender === "female") {
        const femaleVoice = matchingLangVoices.find((v) =>
          /\bfemale|wanita|perempuan|cewe|zira|siti|elena|tatyana|irina|gadis\b/i.test(v.name),
        );
        utterance.voice = femaleVoice || matchingLangVoices[matchingLangVoices.length > 1 ? 1 : 0];
      } else {
        utterance.voice = matchingLangVoices[0];
      }
    }

    let timer: ReturnType<typeof setTimeout> | null = null;
    let completed = false;
    let cancelled = false;

    const cleanup = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (globalActiveUtterance === utterance) {
        globalActiveUtterance = null;
      }
    };

    activeCancelCleanup = () => {
      cancelled = true;
      completed = true;
      cleanup();
    };

    const finish = () => {
      if (completed || cancelled) return;
      completed = true;
      cleanup();
      if (activeCancelCleanup) activeCancelCleanup = null;
      if (options.onEnd) {
        options.onEnd();
      }
    };

    utterance.onend = finish;
    utterance.onerror = (e) => {
      if (cancelled || e.error === "canceled" || e.error === "interrupted") {
        completed = true;
        cleanup();
        return;
      }
      finish();
    };

    const wordCount = text.split(/\s+/).length;
    const safetyTimeoutMs = Math.max(15000, wordCount * 1800);
    timer = setTimeout(finish, safetyTimeoutMs);

    keepSpeechAlive();
    window.speechSynthesis.speak(utterance);
  }

  function speakSlow(text: string, options: SpeechOptions = {}) {
    speak(text, { ...options, rate: 0.65 });
  }

  return { speak, speakSlow, stop: stopSpeech, speechRate, cycleSpeechRate };
}
