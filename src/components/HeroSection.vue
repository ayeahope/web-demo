<script setup lang="ts">
import RequirementInput from './RequirementInput.vue';

defineProps<{
  modelValue: string;
  isRunning: boolean;
}>();

defineEmits<{
  'update:modelValue': [value: string];
  start: [];
}>();
</script>

<template>
  <section class="hero-section">
    <div class="hero-orbit hero-orbit--one"></div>
    <div class="hero-orbit hero-orbit--two"></div>
    <div class="hero-content">
      <p class="eyebrow">Molten Salt Engineering AI Workbench</p>
      <h1>熔盐工程智能协同工作台</h1>
      <p class="hero-subtitle">面向储热、传热、火电调峰与熔盐储能的多智能体协同平台</p>
      <RequirementInput
        :model-value="modelValue"
        :is-running="isRunning"
        @update:model-value="$emit('update:modelValue', $event)"
        @start="$emit('start')"
      />
    </div>
    <div class="hero-metrics">
      <div>
        <strong>7</strong>
        <span>核心 Agent</span>
      </div>
      <div>
        <strong>8</strong>
        <span>工程 Skill</span>
      </div>
      <div>
        <strong>3</strong>
        <span>候选体系</span>
      </div>
    </div>
  </section>
</template>
