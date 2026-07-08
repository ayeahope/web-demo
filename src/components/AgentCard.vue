<script setup lang="ts">
import type { Agent, RunStatus } from '../types';

defineProps<{
  agent: Agent;
  status: RunStatus;
}>();

const statusLabel: Record<RunStatus, string> = {
  idle: '待机',
  running: '运行中',
  done: '已完成',
};
</script>

<template>
  <article class="agent-card" :class="`agent-card--${status}`">
    <div class="agent-card__top">
      <span class="agent-icon">{{ agent.icon }}</span>
      <span class="agent-status">{{ statusLabel[status] }}</span>
    </div>
    <h3>{{ agent.name }}</h3>
    <p>{{ agent.description }}</p>
    <div class="agent-output">
      <span>当前输出</span>
      <strong>{{ status === 'idle' ? '等待任务流触发' : agent.summary }}</strong>
    </div>
  </article>
</template>
