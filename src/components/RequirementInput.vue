<script setup lang="ts">
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
  <div class="requirement-input glass-panel">
    <textarea
      :value="modelValue"
      aria-label="自然语言需求输入"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <button class="primary-button" :disabled="isRunning" @click="$emit('start')">
      <span class="button-dot"></span>
      {{ isRunning ? '智能分析中' : '开始智能分析' }}
    </button>
  </div>
</template>
