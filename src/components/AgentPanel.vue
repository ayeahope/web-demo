<script setup lang="ts">
import type { Agent, RunStatus } from '../types';
import AgentCard from './AgentCard.vue';

defineProps<{
  agents: Agent[];
  statuses: Record<string, RunStatus>;
}>();
</script>

<template>
  <section class="agent-panel glass-panel">
    <div class="section-heading">
      <p>Multi-Agent Mesh</p>
      <h2>核心 Agent 面板</h2>
    </div>
    <div class="agent-grid">
      <AgentCard
        v-for="agent in agents"
        :key="agent.id"
        :agent="agent"
        :status="statuses[agent.id] ?? 'idle'"
      />
    </div>
  </section>
</template>
