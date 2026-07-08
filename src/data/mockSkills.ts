import type { Skill } from '../types';

export const mockSkills: Skill[] = [
  {
    id: 'single-salt',
    name: '单盐属性查询 Skill',
    icon: 'Na',
    description: '查询硝酸盐、氯盐等基础物性与工程注意事项。',
    usedBy: '需求解析 / 配方筛选',
  },
  {
    id: 'melting-point',
    name: '熔点数据检索 Skill',
    icon: '℃',
    description: '检索目标温区相关的熔点、共晶点和热稳定信息。',
    usedBy: '配方筛选',
  },
  {
    id: 'similar-formula',
    name: '相似配方检索 Skill',
    icon: 'SIM',
    description: '根据温区与应用场景召回相近工程配方。',
    usedBy: '配方筛选',
  },
  {
    id: 'fraction-convert',
    name: '摩尔分数/质量分数转换 Skill',
    icon: '%',
    description: '将配方比例转换为实验称量所需的质量分数。',
    usedBy: '实验方案',
  },
  {
    id: 'weighing',
    name: '称量计算 Skill',
    icon: 'g',
    description: '根据目标总量自动生成各原料称量表。',
    usedBy: '实验方案',
  },
  {
    id: 'cost',
    name: '成本估算 Skill',
    icon: '¥',
    description: '基于原料价格和供应风险估算方案成本等级。',
    usedBy: '市场报价 / 工程校核',
  },
  {
    id: 'corrosion',
    name: '腐蚀风险标签 Skill',
    icon: 'RISK',
    description: '按盐种、含水率、氯离子与温区标注腐蚀风险。',
    usedBy: '工程校核',
  },
  {
    id: 'experiment-plan',
    name: '实验方案生成 Skill',
    icon: 'PLAN',
    description: '输出小试验证、热分析与腐蚀试验的结构化步骤。',
    usedBy: '实验方案 / 报告生成',
  },
];
