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
        <div class="stat-item">
          <span class="stat-value">{{ Math.round(stats.wordProgress) }}%</span>
          <span class="stat-label">{{ $t('footer.stats.words') }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ Math.round(stats.lessonProgress) }}%</span>
          <span class="stat-label">{{ $t('footer.stats.lessons') }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ stats.exerciseProgress }}</span>
          <span class="stat-label">{{ $t('footer.stats.exercises') }}</span>
        </div>
        <div class="stat-item">
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
  padding: 1.5rem 0;
  margin-top: auto;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--stat-color);
}

.stat-label {
  font-size: 0.8rem;
}

.footer-info {
  text-align: right;
}

.footer-method {
  margin: 0;
  font-size: 0.85rem;
}

.footer-copyright {
  margin: 0.25rem 0 0;
  font-size: 0.75rem;
  color: var(--muted);
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }

  .footer-stats {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-info {
    text-align: center;
  }
}
</style>
