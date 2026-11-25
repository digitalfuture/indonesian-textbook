<script setup lang="ts">
import { computed } from "vue";
import { useProgressStore } from "../../stores/progress";
import { useLanguageStore } from "../../stores/language";

const progressStore = useProgressStore();
const langStore = useLanguageStore();

const stats = computed(() => progressStore.getLearningStats());
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-stats">
        <div class="stat-pill">
          <span class="stat-value">{{ Math.round(stats.lessonProgress) }}%</span>
          <span class="stat-label">{{ $t('footer.stats.lessons') }}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-value">{{ Math.round(stats.wordProgress) }}%</span>
          <span class="stat-label">{{ $t('footer.stats.words') }}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-value">{{ stats.exerciseProgress }}</span>
          <span class="stat-label">{{ $t('footer.stats.exercises') }}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-value">{{ stats.totalPoints }}</span>
          <span class="stat-label">{{ $t('footer.stats.points') }}</span>
        </div>
      </div>

      <div class="footer-info">
        <p class="footer-method">{{ $t('footer.method.' + langStore.targetLang) }}</p>
        <p class="footer-copyright">
          © {{ currentYear }} Indonesian Textbook. {{ $t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: var(--footer-bg);
  color: var(--footer-text);
  border-top: 1px solid var(--border);
  padding: 1.4rem 0;
  margin-top: auto;
}

.footer-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.footer-stats {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.stat-pill {
  display: inline-flex;
  align-items: baseline;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
}

.stat-value {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--stat-color);
}

.stat-label {
  font-size: 0.78rem;
  color: var(--muted);
}

.footer-info {
  text-align: right;
}

.footer-method {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text);
}

.footer-copyright {
  margin: 0.2rem 0 0;
  font-size: 0.76rem;
  color: var(--muted);
}

@media (max-width: 768px) {
  .app-footer {
    padding-bottom: 5.5rem;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
  }

  .footer-stats {
    justify-content: center;
  }

  .footer-info {
    text-align: center;
  }
}
</style>
