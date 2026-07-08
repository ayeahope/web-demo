import type { Tender } from '../types';

export const mockTenders: Tender[] = [
  {
    id: 'heat-storage',
    projectName: '熔盐储热系统采购项目',
    scenario: '工业园区中温储热',
    keywords: ['储热', '换热器', '硝酸盐'],
    match: 92,
    focus: '关注系统运行温区、储罐材质与采购周期。',
  },
  {
    id: 'thermal-flex',
    projectName: '火电灵活性改造储热项目',
    scenario: '火电调峰与深度调节',
    keywords: ['火电调峰', '熔盐储能', '电加热'],
    match: 88,
    focus: '关注启停频率、低温防凝与工程成熟度。',
  },
  {
    id: 'demo-storage',
    projectName: '电加热熔盐储能示范项目',
    scenario: '新能源消纳与储能示范',
    keywords: ['电加热', '示范工程', '储能'],
    match: 84,
    focus: '关注低成本原盐、可获得性与小试验证依据。',
  },
];
