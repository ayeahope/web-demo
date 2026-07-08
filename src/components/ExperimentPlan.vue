<script setup lang="ts">
import type { Candidate } from '../types';

defineProps<{
  candidate: Candidate;
  isVisible: boolean;
}>();

const weighingRows = [
  { material: 'NaNO3', weight: '约 260 g', ratio: '52%' },
  { material: 'KNO3', weight: '约 170 g', ratio: '34%' },
  { material: 'Ca(NO3)2', weight: '约 70 g', ratio: '14%' },
];

const planItems = [
  '原料预干燥建议：硝酸盐原料分批置于干燥箱，记录干燥温度、时间与质量变化。',
  '熔融混合步骤：按称量表投料，低速升温至完全熔融后保温搅拌，避免局部过热。',
  'DSC 测试方案：取代表性样品进行升降温循环，记录熔融峰、凝固峰与过冷行为。',
  'TG 热稳定性测试方案：在目标温区上限附近开展热失重测试，评估稳定性裕量。',
  '腐蚀实验建议：选取工程候选金属试片，在目标温区进行静态浸泡和表面形貌观察。',
  '数据记录建议：统一记录批次、含水率、升温曲线、质量变化、相变温度与试片质量损失。',
];
</script>

<template>
  <section class="glass-panel content-panel" :class="{ 'content-panel--muted': !isVisible }">
    <div class="section-heading section-heading--row">
      <div>
        <p>Experiment Plan</p>
        <h2>实验方案区</h2>
      </div>
      <span>{{ candidate.name }}</span>
    </div>
    <div class="weighing-table">
      <div class="weighing-table__head">
        <strong>配方称量表</strong>
        <span>总质量 500 g</span>
      </div>
      <div v-for="row in weighingRows" :key="row.material" class="weighing-row">
        <span>{{ row.material }}</span>
        <strong>{{ row.weight }}</strong>
        <em>{{ row.ratio }}</em>
      </div>
    </div>
    <ul class="plan-list">
      <li v-for="item in planItems" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>
