export type ModuleId =
  | 'bilangan'
  | 'trigonometri'
  | 'fungsi'
  | 'limit'
  | 'kontinuitas'
  | 'uts-resmi';

export interface ModuleCategory {
  id: ModuleId;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  totalPoints: number;
  questionCount: number;
}

export interface SolutionStep {
  stepNumber: number;
  title: string;
  explanation: string;
  mathLatex?: string;
}

export interface Problem {
  id: string;
  number: number;
  source: 'latihan-ppt' | 'uts-resmi';
  module: ModuleId;
  subtopic: string;
  points: number;
  title: string;
  questionLatex: string;
  contextNote?: string;
  formalSteps: SolutionStep[];
  finalAnswerLatex: string;
  finalAnswerText: string;
  fastTips: string[];
  commonPitfalls: string[];
  visualType?: 'unit-circle' | 'limit-asymptote' | 'parabola' | 'none';
  variants?: {
    label: string;
    questionLatex: string;
    answerLatex: string;
  }[];
}

export interface FormulaItem {
  category: string;
  name: string;
  formulaLatex: string;
  note?: string;
}
