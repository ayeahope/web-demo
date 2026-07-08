<script setup lang="ts">
import { computed, ref } from 'vue';
import AgentPanel from './components/AgentPanel.vue';
import CandidateReview from './components/CandidateReview.vue';
import ExperimentPlan from './components/ExperimentPlan.vue';
import HeroSection from './components/HeroSection.vue';
import MarketTenderPanel from './components/MarketTenderPanel.vue';
import ReportPreview from './components/ReportPreview.vue';
import SkillGrid from './components/SkillGrid.vue';
import SummaryBanner from './components/SummaryBanner.vue';
import TaskTimeline from './components/TaskTimeline.vue';
import { mockAgents } from './data/mockAgents';
import { mockCandidates } from './data/mockCandidates';
import type { RunStatus } from './types';

const DEFAULT_REQUIREMENT = '帮我找一个适合 450–550℃ 储热的低成本熔盐体系，最好有采购和工程应用依据。';

const requirement = ref(DEFAULT_REQUIREMENT);
const currentStep = ref(-1);
const isRunning = ref(false);
const hasCompleted = ref(false);
const selectedCandidateId = ref(mockCandidates[0].id);

const steps = ['需求解析', '数据检索', '配方筛选', '市场报价', '招标洞察', '工程校核', '实验方案', '报告生成'];
const agentStepIndex = [0, 2, 3, 4, 5, 6, 7];

let timer: number | undefined;

const startAnalysis = () => {
  if (timer) window.clearInterval(timer);
  currentStep.value = -1;
  isRunning.value = true;
  hasCompleted.value = false;

  timer = window.setInterval(() => {
    if (currentStep.value >= steps.length - 1) {
      window.clearInterval(timer);
      timer = undefined;
      isRunning.value = false;
      hasCompleted.value = true;
      return;
    }

    currentStep.value += 1;
  }, 600);
};

const agentStatuses = computed<Record<string, RunStatus>>(() => {
  return mockAgents.reduce<Record<string, RunStatus>>((statusMap, agent, index) => {
    const stepForAgent = agentStepIndex[index];
    let status: RunStatus = 'idle';

    if (hasCompleted.value || currentStep.value > stepForAgent) {
      status = 'done';
    } else if (currentStep.value === stepForAgent && isRunning.value) {
      status = 'running';
    }

    statusMap[agent.id] = status;
    return statusMap;
  }, {});
});

const selectedCandidate = computed(() => {
  return mockCandidates.find((candidate) => candidate.id === selectedCandidateId.value) ?? mockCandidates[0];
});
</script>

<template>
  <main class="app-shell">
    <HeroSection
      v-model="requirement"
      :is-running="isRunning"
      @start="startAnalysis"
    />

    <SummaryBanner :is-complete="hasCompleted" :current-step="currentStep" :steps="steps" />

    <section class="dashboard-grid dashboard-grid--top">
      <TaskTimeline :steps="steps" :current-step="currentStep" :is-complete="hasCompleted" />
      <AgentPanel :agents="mockAgents" :statuses="agentStatuses" />
    </section>

    <SkillGrid />

    <section class="dashboard-grid">
      <CandidateReview
        v-model:selected-candidate-id="selectedCandidateId"
        :is-visible="hasCompleted"
      />
      <MarketTenderPanel :is-visible="hasCompleted" />
    </section>

    <section class="dashboard-grid">
      <ExperimentPlan :candidate="selectedCandidate" :is-visible="hasCompleted" />
      <ReportPreview :candidate="selectedCandidate" :is-visible="hasCompleted" />
    </section>
  </main>
</template>
