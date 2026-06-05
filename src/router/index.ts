import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { useLanguageStore } from "../stores/language";
import { i18n } from "../i18n";

const HomeView = () => import("../views/HomeView.vue");
const LessonView = () => import("../views/LessonView.vue");
const GrammarView = () => import("../views/GrammarView.vue");
const DictionaryView = () => import("../views/DictionaryView.vue");
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

router.beforeEach((to, _from, next) => {
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

  const defaultTitle = "Belajar Bahasa";
  const routeName = to.name as string;
  const titleMap: Record<string, string> = {
    Home: "Belajar Bahasa",
    Lessons: "Pelajaran",
    Lesson: "Pelajaran",
    Grammar: "Tata Bahasa",
    Dictionary: "Kamus",
    Exercises: "Latihan",
    Progress: "Kemajuan",
  };
  document.title = titleMap[routeName]
    ? `${titleMap[routeName]} - Belajar Bahasa`
    : defaultTitle;
  next();
});

export default router;
