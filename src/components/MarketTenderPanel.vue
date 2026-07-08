<script setup lang="ts">
import { marketQuotes } from '../data/mockMarket';
import { mockTenders } from '../data/mockTender';

defineProps<{
  isVisible: boolean;
}>();
</script>

<template>
  <section class="glass-panel content-panel" :class="{ 'content-panel--muted': !isVisible }">
    <div class="section-heading">
      <p>Market & Tender</p>
      <h2>市场与招标洞察</h2>
    </div>
    <div class="subsection-title">市场报价</div>
    <div class="quote-grid">
      <div v-for="quote in marketQuotes" :key="quote.material" class="quote-card">
        <strong>{{ quote.material }}</strong>
        <span>{{ quote.trend }}</span>
        <p>{{ quote.note }}</p>
      </div>
    </div>
    <div class="subsection-title">招标洞察</div>
    <div class="tender-list">
      <article v-for="tender in mockTenders" :key="tender.id" class="tender-card">
        <div>
          <h3>{{ tender.projectName }}</h3>
          <p>{{ tender.scenario }}</p>
        </div>
        <div class="tag-row">
          <span v-for="keyword in tender.keywords" :key="keyword">{{ keyword }}</span>
        </div>
        <div class="match-bar">
          <i :style="{ width: `${tender.match}%` }"></i>
        </div>
        <strong>匹配度 {{ tender.match }}%</strong>
        <p>建议关注点：{{ tender.focus }}</p>
      </article>
    </div>
  </section>
</template>
