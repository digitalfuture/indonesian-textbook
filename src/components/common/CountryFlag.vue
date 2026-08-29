<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    lang: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    rounded?: boolean;
  }>(),
  {
    size: "md",
    rounded: true,
  },
);

const isId = computed(() => props.lang?.toLowerCase() === "id");
const isRu = computed(() => props.lang?.toLowerCase() === "ru");
</script>

<template>
  <span
    class="country-flag"
    :class="[`flag-${size}`, { 'flag-rounded': rounded }]"
    :title="isId ? 'Bahasa Indonesia' : 'Русский язык'"
    aria-hidden="true"
  >
    <!-- Indonesian Flag (Merah Putih) -->
    <svg
      v-if="isId"
      viewBox="0 0 3 2"
      xmlns="http://www.w3.org/2000/svg"
      class="flag-svg"
    >
      <rect width="3" height="1" fill="#E11D48" />
      <rect y="1" width="3" height="1" fill="#FFFFFF" />
    </svg>

    <!-- Russian Flag (Белый, Синий, Красный) -->
    <svg
      v-else-if="isRu"
      viewBox="0 0 3 2"
      xmlns="http://www.w3.org/2000/svg"
      class="flag-svg"
    >
      <rect width="3" height="0.666" fill="#FFFFFF" />
      <rect y="0.666" width="3" height="0.667" fill="#2563EB" />
      <rect y="1.333" width="3" height="0.667" fill="#E11D48" />
    </svg>

    <!-- Fallback -->
    <span v-else class="flag-fallback">{{ lang.toUpperCase() }}</span>
  </span>
</template>

<style scoped>
.country-flag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  flex-shrink: 0;
  box-sizing: border-box;
}

:global(.dark) .country-flag {
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.flag-svg {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.flag-rounded {
  border-radius: 4px;
}

/* Sizes */
.flag-xs {
  width: 18px;
  height: 12px;
}

.flag-sm {
  width: 24px;
  height: 16px;
}

.flag-md {
  width: 32px;
  height: 21px;
}

.flag-lg {
  width: 48px;
  height: 32px;
  border-radius: 6px;
}

.flag-xl {
  width: 140px;
  height: 94px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
  border-width: 2px;
}

:global(.dark) .flag-xl {
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
}

.flag-fallback {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0 0.25rem;
}
</style>
