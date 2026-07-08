<script setup lang="ts">
const props = defineProps<{
  isComplete: boolean;
  currentStep: number;
  steps: string[];
}>();
</script>

<template>
  <section class="summary-banner glass-panel">
    <div>
      <span class="status-chip" :class="{ 'status-chip--complete': props.isComplete }">
        {{ props.isComplete ? '分析完成' : props.currentStep >= 0 ? '任务流运行中' : '等待需求输入' }}
      </span>
      <h2>{{ props.isComplete ? '已生成工程推荐方案' : '多智能体任务编排待启动' }}</h2>
    </div>
    <p>
      {{
        props.isComplete
          ? '系统已完成需求解析、数据检索、候选配方评审、市场与招标洞察、实验方案和报告预览。'
          : props.currentStep >= 0
            ? `当前正在推进：${props.steps[props.currentStep]}`
            : '输入工程需求后，Agent 将自动调用 Skill 工具库完成协同分析。'
      }}
    </p>
  </section>
</template>
