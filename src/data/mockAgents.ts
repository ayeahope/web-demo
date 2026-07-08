import type { Agent } from '../types';

export const mockAgents: Agent[] = [
  {
    id: 'requirement',
    name: '工程需求解析 Agent',
    icon: 'REQ',
    description: '将自然语言需求拆解为温区、成本、应用场景与约束条件。',
    summary: '识别目标温区 450-550℃，优先低成本、可采购、可工程应用。',
  },
  {
    id: 'candidate',
    name: '候选配方筛选 Agent',
    icon: 'MAT',
    description: '调用配方与物性 Skill，形成候选熔盐体系清单。',
    summary: '筛选硝酸盐与氯盐方向，优先推荐中温硝酸盐复配体系。',
  },
  {
    id: 'market',
    name: '市场报价 Agent',
    icon: 'CNY',
    description: '汇总原盐采购可得性、价格风险与供应稳定性。',
    summary: 'NaNO3 价格风险低，KNO3 中等，Ca(NO3)2 需关注含水率。',
  },
  {
    id: 'tender',
    name: '招标洞察 Agent',
    icon: 'BID',
    description: '匹配储热、调峰与熔盐储能项目中的工程应用线索。',
    summary: '发现火电灵活性改造、电加热储能示范等高相关场景。',
  },
  {
    id: 'engineering',
    name: '工程可行性校核 Agent',
    icon: 'ENG',
    description: '对熔点、腐蚀、成熟度和运行温区进行工程侧校核。',
    summary: '硝酸盐复配体系工程成熟度较高，适合进入小试验证。',
  },
  {
    id: 'experiment',
    name: '实验方案生成 Agent',
    icon: 'LAB',
    description: '生成称量、预干燥、熔融混合、DSC/TG 与腐蚀实验方案。',
    summary: '给出 500 g 小试称量表与关键热分析验证路径。',
  },
  {
    id: 'report',
    name: '方案报告生成 Agent',
    icon: 'DOC',
    description: '汇总评审结论，生成可用于项目汇报的工程推荐报告目录。',
    summary: '形成候选体系对比、市场依据、工程评审与实验验证方案。',
  },
];
