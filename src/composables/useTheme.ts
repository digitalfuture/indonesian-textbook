import { ref, watch } from "vue";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "indonesian-textbook-theme";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getSavedTheme(): Theme | null {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  return saved === "light" || saved === "dark" ? saved : null;
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
}

export function useTheme() {
  const theme = ref<Theme>(getSavedTheme() || getSystemTheme());

  // Apply theme on mount
  applyTheme(theme.value);

  // Watch for system theme changes (only if no saved preference)
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", (e) => {
    if (!getSavedTheme()) {
      theme.value = e.matches ? "dark" : "light";
      applyTheme(theme.value);
    }
  });

  // Watch for manual theme changes
  watch(theme, (newTheme) => {
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  });

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  return {
    theme,
    toggleTheme,
    isDark: () => theme.value === "dark",
  };
}
