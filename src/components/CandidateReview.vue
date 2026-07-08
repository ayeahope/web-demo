<script setup lang="ts">
import { mockCandidates } from '../data/mockCandidates';
import CandidateCard from './CandidateCard.vue';

defineProps<{
  selectedCandidateId: string;
  isVisible: boolean;
}>();

defineEmits<{
  'update:selectedCandidateId': [value: string];
}>();
</script>

<template>
  <section class="glass-panel content-panel" :class="{ 'content-panel--muted': !isVisible }">
    <div class="section-heading section-heading--row">
      <div>
        <p>Formula Review</p>
        <h2>候选配方评审</h2>
      </div>
      <span>{{ isVisible ? '已生成 3 个候选体系' : '等待任务流完成' }}</span>
    </div>
    <div class="candidate-grid">
      <CandidateCard
        v-for="candidate in mockCandidates"
        :key="candidate.id"
        :candidate="candidate"
        :is-selected="candidate.id === selectedCandidateId"
        @select="$emit('update:selectedCandidateId', candidate.id)"
      />
    </div>
  </section>
</template>
