<script setup lang="ts">
import type { Candidate } from '../types';

defineProps<{
  candidate: Candidate;
  isSelected: boolean;
}>();

defineEmits<{
  select: [];
}>();
</script>

<template>
  <article class="candidate-card" :class="{ 'candidate-card--selected': isSelected }" @click="$emit('select')">
    <div class="candidate-card__header">
      <div>
        <h3>{{ candidate.name }}</h3>
        <span>{{ candidate.scenario }}</span>
      </div>
      <strong>{{ candidate.grade }}</strong>
    </div>
    <dl class="review-list">
      <div>
        <dt>熔点表现</dt>
        <dd>{{ candidate.melting }}</dd>
      </div>
      <div>
        <dt>市场可得性</dt>
        <dd>{{ candidate.availability }}</dd>
      </div>
      <div>
        <dt>成本风险</dt>
        <dd>{{ candidate.costRisk }}</dd>
      </div>
      <div>
        <dt>腐蚀风险</dt>
        <dd>{{ candidate.corrosionRisk }}</dd>
      </div>
      <div>
        <dt>工程成熟度</dt>
        <dd>{{ candidate.maturity }}</dd>
      </div>
    </dl>
    <p class="candidate-advice">建议：{{ candidate.advice }}</p>
  </article>
</template>
