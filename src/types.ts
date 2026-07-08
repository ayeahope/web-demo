export type RunStatus = 'idle' | 'running' | 'done';

export interface Agent {
  id: string;
  name: string;
  icon: string;
  description: string;
  summary: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  description: string;
  usedBy: string;
}

export interface Candidate {
  id: string;
  name: string;
  scenario: string;
  grade: string;
  melting: string;
  availability: string;
  costRisk: string;
  corrosionRisk: string;
  maturity: string;
  advice: string;
}

export interface Tender {
  id: string;
  projectName: string;
  scenario: string;
  keywords: string[];
  match: number;
  focus: string;
}
