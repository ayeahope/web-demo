<script setup lang="ts">
import { ref } from 'vue';
import type { Candidate } from '../types';

defineProps<{
  candidate: Candidate;
  isVisible: boolean;
}>();

const notice = ref('');
const reportOutline = [
  '工程需求概述',
  '候选体系筛选结果',
  '性能与风险对比',
  '市场报价分析',
  '招标与工程应用分析',
  '工程可行性评审',
  '实验验证方案',
  '综合推荐结论',
];

const showNotice = (text: string) => {
  notice.value = text;
  window.setTimeout(() => {
    notice.value = '';
  }, 1800);
};

const copySummary = async () => {
  const summary = `推荐候选体系：NaNO3-KNO3-Ca(NO3)2；推荐等级 A-；适合进入小试验证，建议重点验证含水率、熔点表现、热稳定性与腐蚀风险。`;

  try {
    await navigator.clipboard.writeText(summary);
    showNotice('报告摘要已复制');
  } catch {
    showNotice('Demo 提示：当前环境暂不支持剪贴板');
  }
};
</script>

<template>
  <section class="glass-panel content-panel report-panel" :class="{ 'content-panel--muted': !isVisible }">
    <div class="section-heading section-heading--row">
      <div>
        <p>Report Preview</p>
        <h2>报告预览区</h2>
      </div>
      <span>{{ candidate.grade }} 推荐</span>
    </div>
    <ol class="report-outline">
      <li v-for="item in reportOutline" :key="item">{{ item }}</li>
    </ol>
    <div class="report-summary">
      <strong>综合推荐结论</strong>
      <p>
        推荐优先推进 {{ candidate.name }}，用于 450-550℃ 中温储热与传热小试验证；
        该体系兼顾采购可得性、工程成熟度与低腐蚀风险，后续需通过 DSC、TG 与腐蚀实验确认工程裕量。
      </p>
    </div>
    <div class="report-actions">
      <button class="secondary-button" @click="copySummary">复制报告摘要</button>
      <button class="secondary-button" @click="showNotice('Demo 提示：已生成导出任务占位')">导出报告（Demo）</button>
    </div>
    <p v-if="notice" class="toast-message">{{ notice }}</p>
  </section>
</template>
