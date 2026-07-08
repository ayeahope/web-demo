<script setup lang="ts">
import type { Skill } from '../types';

defineProps<{
  skill: Skill;
}>();
</script>

<template>
  <article class="skill-card">
    <span class="skill-icon">{{ skill.icon }}</span>
    <h3>{{ skill.name }}</h3>
    <p>{{ skill.description }}</p>
    <div>调用方：{{ skill.usedBy }}</div>
  </article>
</template>
