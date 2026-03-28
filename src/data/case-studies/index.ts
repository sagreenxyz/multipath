import type { CaseStudy } from '../../types/case-study.js';
import { ckdCase } from './ckd-case.js';
import { sepsisCase } from './sepsis-case.js';
import { chestPainCase } from './chest-pain-case.js';

export const allCaseStudies: CaseStudy[] = [ckdCase, sepsisCase, chestPainCase];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return allCaseStudies.find((cs) => cs.id === id);
}
