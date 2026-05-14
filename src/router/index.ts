import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

// Ленивая загрузка view компонентов
const HomeView = () => import("../views/HomeView.vue");
const LessonView = () => import("../views/LessonView.vue");
const GrammarView = () => import("../views/GrammarView.vue");
const DictionaryView = () => import("../views/DictionaryView.vue");
const ExerciseView = () => import("../views/ExerciseView.vue");
const ProgressView = () => import("../views/ProgressView.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Индонезийский язык за 16 уроков",
      description:
        "Интерактивный учебник индонезийского языка по методу Дмитрия Петрова",
    },
  },
  {
    path: "/lessons",
    name: "Lessons",
    component: HomeView,
    meta: {
      title: "Уроки",
      description: "16 уроков индонезийского языка",
    },
  },
  {
    path: "/lesson/:id",
    name: "Lesson",
    component: LessonView,
    props: true,
    meta: {
      title: "Урок",
      description: "Изучение индонезийского языка",
    },
  },
  {
    path: "/grammar",
    name: "Grammar",
    component: GrammarView,
    meta: {
      title: "Грамматика",
      description: "Таблицы грамматики и времен индонезийского языка",
    },
  },
  {
    path: "/grammar/:tableId",
    name: "GrammarTable",
    component: GrammarView,
    props: true,
    meta: {
      title: "Грамматическая таблица",
      description: "Таблица индонезийской грамматики",
    },
  },
  {
    path: "/dictionary",
    name: "Dictionary",
    component: DictionaryView,
    meta: {
      title: "Словарь",
      description:
        "Частотный словарь индонезийского языка - 500 самых важных слов",
    },
  },
  {
    path: "/dictionary/:wordId",
    name: "WordDetails",
    component: DictionaryView,
    props: true,
    meta: {
      title: "Слово",
      description: "Детали слова индонезийского языка",
    },
  },
  {
    path: "/exercises",
    name: "Exercises",
    component: ExerciseView,
    meta: {
      title: "Упражнения",
      description: "Упражнения для практики индонезийского языка",
    },
  },
  {
    path: "/exercises/lesson/:lessonId",
    name: "LessonExercises",
    component: ExerciseView,
    props: true,
    meta: {
      title: "Упражнения урока",
      description: "Упражнения для конкретного урока",
    },
  },
  {
    path: "/progress",
    name: "Progress",
    component: ProgressView,
    meta: {
      title: "Прогресс",
      description: "Ваш прогресс в изучении индонезийского языка",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
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

// Обновление заголовка страницы при навигации
router.beforeEach((to, _from, next) => {
  const defaultTitle = "Индонезийский язык за 16 уроков";
  document.title = to.meta.title
    ? `${to.meta.title} - Индонезийский учебник`
    : defaultTitle;
  next();
});

export default router;
