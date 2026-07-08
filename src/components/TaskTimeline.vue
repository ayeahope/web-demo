<script setup lang="ts">
const props = defineProps<{
  steps: string[];
  currentStep: number;
  isComplete: boolean;
}>();

const getStepState = (index: number) => {
  if (props.isComplete || index < props.currentStep) return 'done';
  if (index === props.currentStep) return 'active';
  return 'idle';
};
</script>

<template>
  <section class="glass-panel timeline-panel">
    <div class="section-heading">
      <p>StepTimeline</p>
      <h2>工程任务流</h2>
    </div>
    <div class="timeline">
      <div v-for="(step, index) in props.steps" :key="step" class="timeline-item" :class="`timeline-item--${getStepState(index)}`">
        <div class="timeline-index">{{ getStepState(index) === 'done' ? '✓' : index + 1 }}</div>
        <div class="timeline-copy">
          <strong>{{ step }}</strong>
          <span>{{ getStepState(index) === 'active' ? '运行中' : getStepState(index) === 'done' ? '已完成' : '待执行' }}</span>
        </div>
      </div>
    </div>
    <div class="completion-line" :class="{ 'completion-line--active': props.isComplete }">分析完成</div>
  </section>
</template>
