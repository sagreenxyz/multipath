import type { CaseStudy } from '../../types/case-study.js';
import { ckdCase } from './ckd-case.js';
import { sepsisCase } from './sepsis-case.js';
import { chestPainCase } from './chest-pain-case.js';
import { dkaCase } from './dka-case.js';
import { strokeCase } from './stroke-case.js';
import { pneumoniaCase } from './pneumonia-case.js';
import { hypertensiveCrisisCase } from './hypertensive-crisis-case.js';
import { hipReplacementCase } from './hip-replacement-case.js';
import { anaphylaxisCase } from './anaphylaxis-case.js';
import { heartFailureCase } from './heart-failure-case.js';
import { pediatricAsthmaCase } from './pediatric-asthma-case.js';
import { postpartumHemorrhageCase } from './postpartum-hemorrhage-case.js';
import { alcoholWithdrawalCase } from './alcohol-withdrawal-case.js';
import { pulmonaryEmbolismCase } from './pulmonary-embolism-case.js';
import { sickleCellCase } from './sickle-cell-case.js';

export const allCaseStudies: CaseStudy[] = [
  ckdCase,
  sepsisCase,
  chestPainCase,
  dkaCase,
  strokeCase,
  pneumoniaCase,
  hypertensiveCrisisCase,
  hipReplacementCase,
  anaphylaxisCase,
  heartFailureCase,
  pediatricAsthmaCase,
  postpartumHemorrhageCase,
  alcoholWithdrawalCase,
  pulmonaryEmbolismCase,
  sickleCellCase,
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return allCaseStudies.find((cs) => cs.id === id);
}
