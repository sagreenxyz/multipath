import type { CaseStudy } from '../../types/case-study.js';
import { sepsisCase } from './sepsis-case.js';
import { chestPainCase } from './chest-pain-case.js';

export const allCaseStudies: CaseStudy[] = [sepsisCase, chestPainCase];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return allCaseStudies.find((cs) => cs.id === id);
}
