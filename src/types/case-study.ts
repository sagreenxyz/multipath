export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type SceneType = 'narrative' | 'decision' | 'assessment' | 'feedback' | 'end';
export type EndType = 'success' | 'partial' | 'failure';

export interface Vitals {
  temperature?: number;       // °F
  heartRate?: number;         // bpm
  respiratoryRate?: number;   // breaths/min
  bloodPressure?: string;     // e.g. "120/80"
  oxygenSaturation?: number;  // %
  painLevel?: number;         // 0-10
  bloodGlucose?: number;      // mg/dL
  weight?: number;            // kg
  height?: number;            // cm
}

export interface Lab {
  name: string;
  value: string;
  unit: string;
  referenceRange: string;
  abnormal: boolean;
  critical?: boolean;
}

export interface ImagingResult {
  type: string;
  description: string;
  findings: string;
}

export interface Patient {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  weight?: number;  // kg
  height?: number;  // cm
  allergies: string[];
  currentMedications: string[];
  medicalHistory: string[];
  chiefComplaint: string;
  vitals: Vitals;
  appearance?: string;
  labs?: Lab[];
  imaging?: ImagingResult[];
}

export interface Choice {
  id: string;
  text: string;
  nextSceneId: string;
  points: number;
  feedback: string;
  isCorrect: boolean;
  rationale?: string;
}

// ── Nursing Care Plan ─────────────────────────────────────────────────

export interface NursingIntervention {
  action: string;
  rationale: string;
  frequency?: string;
}

export type DiagnosisStatus = 'active' | 'resolved' | 'new';

export interface NursingDiagnosis {
  id: string;
  priority: number;
  label: string;            // NANDA nursing diagnosis statement
  relatedTo: string;        // Etiology / related factors (r/t)
  evidencedBy: string[];    // Defining characteristics (AEB)
  shortTermGoals: string[]; // SMART goals — end of shift
  longTermGoals: string[];  // SMART goals — discharge / follow-up
  interventions: NursingIntervention[];
  evaluation?: string;      // Outcome evaluation (populated as case evolves)
  status?: DiagnosisStatus;
}

export interface CarePlan {
  diagnoses: NursingDiagnosis[];
}

export interface CarePlanUpdate {
  addDiagnoses?: NursingDiagnosis[];
  updateDiagnoses?: (Partial<NursingDiagnosis> & { id: string })[];
  resolveDiagnoses?: string[];  // IDs of diagnoses to mark resolved
}

// ─────────────────────────────────────────────────────────────────────

export interface Scene {
  id: string;
  type: SceneType;
  title: string;
  narrative: string;
  clinicalNote?: string;       // Extra nursing tip shown in a callout
  vitalsUpdate?: Partial<Vitals>;
  newLabs?: Lab[];
  newImaging?: ImagingResult[];
  choices?: Choice[];
  feedback?: string;
  nextSceneId?: string;        // For non-decision scenes
  endType?: EndType;
  scoreBonus?: number;         // Bonus points for reaching this scene
  timeElapsed?: number;        // Minutes elapsed in scenario
  carePlanUpdate?: CarePlanUpdate; // Evolves the care plan at this scene
}

export interface LearningObjective {
  id: string;
  description: string;
  met?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  difficulty: Difficulty;
  specialty: string;
  tags: string[];
  estimatedTime: number;  // minutes
  learningObjectives: LearningObjective[];
  patient: Patient;
  scenes: Scene[];
  startSceneId: string;
  maxScore: number;
  carePlan?: CarePlan;    // Initial nursing care plan (evolves through scenes)
}

