import { useLanguageStore } from "../stores/language";
import { useSound } from "./useSound";

export interface SpeechOptions {
  gender?: "male" | "female";
  pitch?: number;
  rate?: number;
  onEnd?: () => void;
  cancelCurrent?: boolean;
}

// Module-level reference to prevent Chromium/WebKit Garbage Collection
// from prematurely stopping utterances mid-speech
let globalActiveUtterance: SpeechSynthesisUtterance | null = null;
let resumeInterval: any = null;

function keepSpeechAlive() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  if (resumeInterval) clearInterval(resumeInterval);
  resumeInterval = setInterval(() => {
    if (!window.speechSynthesis.speaking) {
      clearInterval(resumeInterval);
      resumeInterval = null;
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  }, 5000);
}

export function useSpeech() {
  const langStore = useLanguageStore();
  const { isSoundEnabled } = useSound();

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
      window.speechSynthesis.cancel();
      if (resumeInterval) {
        clearInterval(resumeInterval);
        resumeInterval = null;
      }
    }

    const utterance = new SpeechSynthesisUtterance(text);
    // Retain global reference so V8/Chromium doesn't GC the utterance before completion
    globalActiveUtterance = utterance;

    utterance.lang = targetLangCode;
    utterance.rate = options.rate ?? 0.88;

    // Pitch: distinguish male vs female clearly
    if (options.pitch !== undefined) {
      utterance.pitch = options.pitch;
    } else if (options.gender === "male") {
      utterance.pitch = 0.65; // Significantly deeper pitch for male characters
      if (options.rate === undefined) {
        utterance.rate = 0.85; // Slightly calmer tempo for deeper natural resonance
      }
    } else if (options.gender === "female") {
      utterance.pitch = 1.22; // Brighter pitch for female characters
    } else {
      utterance.pitch = 1.0;
    }

    // Try to find a native voice matching the language and requested gender
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

    let timer: any = null;
    let completed = false;

    const finish = () => {
      if (completed) return;
      completed = true;
      if (timer) clearTimeout(timer);
      if (globalActiveUtterance === utterance) {
        globalActiveUtterance = null;
      }
      if (options.onEnd) {
        options.onEnd();
      }
    };

    utterance.onend = finish;
    utterance.onerror = (e) => {
      // Don't treat cancel as an unexpected crash callback if it was already handled
      finish();
    };

    // Very generous fallback timeout (25 seconds minimum, 1.5s per word)
    // to strictly prevent cutting off speech mid-sentence in auto-dialogues.
    // The primary completion driver is always utterance.onend.
    const wordCount = text.split(/\s+/).length;
    const safetyTimeoutMs = Math.max(15000, wordCount * 1500);
    timer = setTimeout(finish, safetyTimeoutMs);

    keepSpeechAlive();
    window.speechSynthesis.speak(utterance);
  }

  return { speak };
}
