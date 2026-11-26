import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { useLanguageStore } from "../stores/language";
import { i18n } from "../i18n";

const HomeView = () => import("../views/HomeView.vue");
const LessonView = () => import("../views/LessonView.vue");
const GrammarView = () => import("../views/GrammarView.vue");
const DictionaryView = () => import("../views/DictionaryView.vue");
const PhrasebookView = () => import("../views/PhrasebookView.vue");
const ExerciseView = () => import("../views/ExerciseView.vue");
const ProgressView = () => import("../views/ProgressView.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/:interfaceLang(ru|id)/:targetLang(ru|id)",
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "lessons",
        name: "Lessons",
        component: HomeView,
        meta: { hideHero: true, hideQuickLinks: true },
      },
      {
        path: "lesson/:id",
        name: "Lesson",
        component: LessonView,
        props: true,
      },
      {
        path: "grammar",
        name: "Grammar",
        component: GrammarView,
      },
      {
        path: "grammar/:tableId",
        name: "GrammarTable",
        component: GrammarView,
        props: true,
      },
      {
        path: "dictionary",
        name: "Dictionary",
        component: DictionaryView,
      },
      {
        path: "dictionary/:wordId",
        name: "WordDetails",
        component: DictionaryView,
        props: true,
      },
      {
        path: "phrasebook",
        name: "Phrasebook",
        component: PhrasebookView,
      },
      {
        path: "exercises",
        name: "Exercises",
        component: ExerciseView,
      },
      {
        path: "exercises/lesson/:lessonId",
        name: "LessonExercises",
        component: ExerciseView,
        props: true,
      },
      {
        path: "progress",
        name: "Progress",
        component: ProgressView,
      },
      {
        path: "ai-chat",
        name: "AIChat",
        component: () => import("../views/AIChatView.vue"),
      },
    ],
  },
  {
    path: "/",
    redirect: "/ru/id",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/ru/id",
  },
];

const router = createRouter({
  history: createWebHistory("/indonesian-textbook/"),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

import { useLoadingBar } from "../composables/useLoadingBar";
import { stopSpeech } from "../composables/useSpeech";

router.beforeEach((to, _from, next) => {
  stopSpeech();
  const { start } = useLoadingBar();
  start();

  const langStore = useLanguageStore();
  const il = to.params.interfaceLang as string;
  const tl = to.params.targetLang as string;
  const langs: Record<string, "ru" | "id"> = { ru: "ru", id: "id" };

  if (il && tl) {
    const i = langs[il] || "ru";
    const t = langs[tl] || "id";
    langStore.init(i, t);
    i18n.global.locale.value = i;
  }

  const isRu = langStore.interfaceLang === "ru";
  const brandTitle =
    langStore.targetLang === "id"
      ? isRu
        ? "Индонезийский за 16 уроков"
        : "Bahasa Indonesia dalam 16 Pelajaran"
      : isRu
        ? "Русский за 16 уроков"
        : "Bahasa Rusia dalam 16 Pelajaran";

  const routeName = to.name as string;
  const titleMapRu: Record<string, string> = {
    Home: "",
    Lessons: "Уроки",
    Lesson: "Урок",
    Grammar: "Грамматика",
    GrammarTable: "Грамматика",
    Dictionary: "Словарь",
    WordDetails: "Словарь",
    Phrasebook: "Разговорник",
    Exercises: "Практика",
    LessonExercises: "Практика",
    Progress: "Прогресс",
    AIChat: "Диалог с ИИ",
  };
  const titleMapId: Record<string, string> = {
    Home: "",
    Lessons: "Pelajaran",
    Lesson: "Pelajaran",
    Grammar: "Tata Bahasa",
    GrammarTable: "Tata Bahasa",
    Dictionary: "Kamus",
    WordDetails: "Kamus",
    Phrasebook: "Buku Frasa",
    Exercises: "Latihan",
    LessonExercises: "Latihan",
    Progress: "Kemajuan",
    AIChat: "Dialog AI",
  };
  const sectionTitle = (isRu ? titleMapRu : titleMapId)[routeName];
  document.title = sectionTitle ? `${sectionTitle} — ${brandTitle}` : brandTitle;
  next();
});

router.afterEach(() => {
  const { finish } = useLoadingBar();
  finish();
});

router.onError(() => {
  const { finish } = useLoadingBar();
  finish();
});

// Idle prefetch for lazy chunks so menu clicks are immediate
if (typeof window !== "undefined") {
  const prefetchViews = () => {
    // Preload views in background when network / CPU is idle
    const views = [DictionaryView, PhrasebookView, GrammarView, ExerciseView, LessonView, ProgressView];
    for (const view of views) {
      try {
        view();
      } catch (_e) {
        // ignore prefetch errors
      }
    }
  };

  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(prefetchViews, { timeout: 3000 });
  } else {
    setTimeout(prefetchViews, 1200);
  }
}

export default router;
