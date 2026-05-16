import { computed } from "vue";
import { useLanguageStore } from "../stores/language";
import { vocabulary } from "../data/vocabulary";
import { vocabularyRu } from "../data/vocabularyRu";

export function useVocabulary() {
  const langStore = useLanguageStore();

  const currentVocabulary = computed(() =>
    langStore.targetLang === "id" ? vocabulary : vocabularyRu
  );

  function getWordById(id: number) {
    return currentVocabulary.value.find((w) => w.id === id) || null;
  }

  function getRelatedWords(word: { id: number; relatedWords?: number[] }) {
    if (!word.relatedWords) return [];
    return word.relatedWords
      .map((id) => getWordById(id))
      .filter(Boolean) as typeof currentVocabulary.value;
  }

  return {
    vocabulary: currentVocabulary,
    getWordById,
    getRelatedWords,
  };
}
