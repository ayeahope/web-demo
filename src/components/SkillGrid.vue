<script setup lang="ts">
import { mockSkills } from '../data/mockSkills';
import SkillCard from './SkillCard.vue';
</script>

<template>
  <section class="glass-panel skill-panel">
    <div class="section-heading section-heading--row">
      <div>
        <p>Skill Library</p>
        <h2>工程 Skill 工具库</h2>
      </div>
      <span>Agent 调用 Skill 完成具体工程任务</span>
    </div>
    <div class="skill-grid">
      <SkillCard v-for="skill in mockSkills" :key="skill.id" :skill="skill" />
    </div>
  </section>
</template>
