export interface AssessmentTool {
  name: string;
  acronym?: string;
  category: string;
  purpose: string;
  components: { label: string; description: string }[];
  scoring?: string;
  interpretation?: string;
  clinicalUse: string;
}

export const assessmentTools: AssessmentTool[] = [
  {
    name: 'SBAR Communication Tool',
    acronym: 'SBAR',
    category: 'Communication',
    purpose: 'Structured communication framework for reporting patient status to providers',
    components: [
      { label: 'S – Situation', description: 'What is happening with the patient right now? State your name, unit, patient name, and the immediate concern.' },
      { label: 'B – Background', description: 'What is the clinical context? Include diagnosis, medical history, current medications, and relevant recent events.' },
      { label: 'A – Assessment', description: 'What do you think the problem is? Provide your clinical assessment, vital signs, and key findings.' },
      { label: 'R – Recommendation', description: 'What do you need? State what you are requesting (orders, evaluation, transfer, etc.).' },
    ],
    clinicalUse: 'Use SBAR when calling a provider about a change in patient condition, during hand-off reporting, or when escalating a concern.',
  },
  {
    name: 'Glasgow Coma Scale',
    acronym: 'GCS',
    category: 'Neurological Assessment',
    purpose: 'Standardized assessment of level of consciousness',
    components: [
      { label: 'Eye Opening (E)', description: '4 = Spontaneous | 3 = To voice | 2 = To pain | 1 = None' },
      { label: 'Verbal Response (V)', description: '5 = Oriented | 4 = Confused | 3 = Inappropriate words | 2 = Incomprehensible sounds | 1 = None' },
      { label: 'Motor Response (M)', description: '6 = Obeys commands | 5 = Localizes pain | 4 = Withdraws | 3 = Abnormal flexion | 2 = Extension | 1 = None' },
    ],
    scoring: 'Total = E + V + M (Range: 3–15)',
    interpretation: '13–15: Mild dysfunction | 9–12: Moderate dysfunction | 3–8: Severe dysfunction (intubation threshold ≤ 8)',
    clinicalUse: 'Use GCS for initial and ongoing neurological assessment in patients with altered mental status, head injury, or decreased consciousness.',
  },
  {
    name: 'Sepsis-3 Criteria (qSOFA)',
    acronym: 'qSOFA',
    category: 'Sepsis Screening',
    purpose: 'Quick bedside screening tool for identifying patients at high risk for poor outcomes due to sepsis outside the ICU',
    components: [
      { label: 'Altered mentation', description: 'GCS < 15 or new acute alteration in mental status' },
      { label: 'Respiratory rate ≥ 22/min', description: 'Tachypnea suggesting respiratory compromise' },
      { label: 'Systolic BP ≤ 100 mmHg', description: 'Hypotension suggesting hemodynamic compromise' },
    ],
    scoring: '1 point per criterion (Range: 0–3)',
    interpretation: '≥ 2: High risk for sepsis-related organ dysfunction and increased mortality. Warrants further evaluation and escalation.',
    clinicalUse: 'Use at bedside for rapid initial screening. Does not replace SOFA score for ICU-level assessment. Positive screen → draw blood cultures, check lactate, initiate sepsis bundle.',
  },
  {
    name: 'Sepsis Bundle (Hour-1 Bundle)',
    acronym: 'SEP-1',
    category: 'Sepsis Management',
    purpose: 'Evidence-based bundle of interventions to improve outcomes in sepsis and septic shock',
    components: [
      { label: 'Blood cultures', description: 'Obtain ≥ 2 sets of blood cultures (ideally before antibiotics if ≤ 45 min delay)' },
      { label: 'Lactate level', description: 'Measure serum lactate; re-measure if initial level > 2 mmol/L' },
      { label: 'Broad-spectrum antibiotics', description: 'Administer within 1 hour of sepsis recognition; tailor based on suspected source' },
      { label: 'IV Fluid resuscitation', description: '30 mL/kg IV crystalloid for hypotension or lactate ≥ 4 mmol/L within 3 hours' },
      { label: 'Vasopressors', description: 'If refractory to fluids: norepinephrine first-line to maintain MAP ≥ 65 mmHg' },
    ],
    clinicalUse: 'Initiate immediately upon sepsis recognition. Time-sensitive—each hour of delay in antibiotics increases mortality by ~7%. Document time of first recognition.',
  },
  {
    name: '12-Lead ECG Interpretation: STEMI Recognition',
    category: 'Cardiac Assessment',
    purpose: 'Identify ST-elevation myocardial infarction requiring emergent reperfusion',
    components: [
      { label: 'Rate & Rhythm', description: 'Normal sinus rhythm: 60–100 bpm; Identify arrhythmias (V-fib, V-tach, LBBB)' },
      { label: 'ST Elevation Criteria', description: '≥ 1 mm in ≥ 2 contiguous limb leads OR ≥ 2 mm in precordial leads V1–V4' },
      { label: 'New LBBB', description: 'New or presumed-new LBBB is a STEMI-equivalent; treat as STEMI' },
      { label: 'Territory Identification', description: 'Anterior (V1–V4), Inferior (II, III, aVF), Lateral (I, aVL, V5–V6), Posterior (ST depression V1–V3 + tall R waves)' },
      { label: 'Reciprocal Changes', description: 'ST depression in leads opposite to infarct area confirms STEMI; increases specificity' },
    ],
    clinicalUse: 'Obtain within 10 min of symptom onset. Alert cardiology/cath lab immediately for STEMI identified. Door-to-balloon time goal < 90 minutes.',
  },
  {
    name: 'OLDCART Pain Assessment',
    acronym: 'OLDCART',
    category: 'Pain Assessment',
    purpose: 'Comprehensive systematic approach to pain history-taking',
    components: [
      { label: 'O – Onset', description: 'When did the pain start? Was the onset sudden or gradual?' },
      { label: 'L – Location', description: 'Where is the pain? Does it radiate anywhere?' },
      { label: 'D – Duration', description: 'How long does the pain last? Is it constant or intermittent?' },
      { label: 'C – Characteristics', description: 'Describe the pain: sharp, dull, burning, crushing, pressure, stabbing, aching' },
      { label: 'A – Aggravating Factors', description: 'What makes the pain worse? (movement, breathing, eating, position)' },
      { label: 'R – Relieving Factors', description: 'What makes the pain better? (rest, medications, position, ice/heat)' },
      { label: 'T – Treatment / Timing', description: 'What treatments have been tried? How often does the pain occur?' },
    ],
    clinicalUse: 'Use OLDCART during initial assessment and whenever a patient reports pain. Document all components and use numeric pain scale (0–10) to rate severity.',
  },
  {
    name: 'AVPU Scale',
    acronym: 'AVPU',
    category: 'Neurological Assessment',
    purpose: 'Rapid assessment of level of consciousness—faster than full GCS for initial surveys',
    components: [
      { label: 'A – Alert', description: 'Patient is awake, aware, and oriented to person, place, and time' },
      { label: 'V – Verbal', description: 'Patient responds to verbal stimuli but is not fully alert' },
      { label: 'P – Pain', description: 'Patient responds only to painful stimuli; no response to voice' },
      { label: 'U – Unresponsive', description: 'Patient does not respond to any stimuli' },
    ],
    interpretation: 'Alert = Normal | V = Roughly GCS ~13 | P = Roughly GCS 8 | U = GCS 3. P or U → urgent intervention required.',
    clinicalUse: 'Use during rapid assessment (primary survey), triage, or frequent neuro checks. Transition to GCS for ongoing detailed assessment.',
  },
  {
    name: 'Fall Risk Assessment (Morse Fall Scale)',
    category: 'Safety Assessment',
    purpose: 'Identify patients at high risk for falls to target prevention interventions',
    components: [
      { label: 'History of Falling', description: 'No = 0 | Yes = 25' },
      { label: 'Secondary Diagnosis', description: 'No = 0 | Yes = 15' },
      { label: 'Ambulatory Aid', description: 'None/bed rest/nurse assist = 0 | Crutches/cane/walker = 15 | Furniture = 30' },
      { label: 'IV/Heparin Lock', description: 'No = 0 | Yes = 20' },
      { label: 'Gait/Transferring', description: 'Normal/bed rest/wheelchair = 0 | Weak = 10 | Impaired = 20' },
      { label: 'Mental Status', description: 'Oriented to ability = 0 | Forgets limitations = 15' },
    ],
    scoring: 'Total score 0–125',
    interpretation: '0–24: Low risk | 25–44: Moderate risk | ≥ 45: High risk',
    clinicalUse: 'Assess on admission, after falls, with change in condition, and during transitions of care. Implement fall prevention protocols based on risk level.',
  },
];

export interface ClinicalGuideline {
  name: string;
  category: string;
  summary: string;
  keyPoints: string[];
  source: string;
}

export const clinicalGuidelines: ClinicalGuideline[] = [
  {
    name: 'Surviving Sepsis Campaign Guidelines (2021)',
    category: 'Sepsis',
    summary: 'International evidence-based guidelines for management of sepsis and septic shock.',
    keyPoints: [
      'Screen all acutely ill patients for sepsis using validated screening tools',
      'Obtain blood cultures before antibiotics if possible, but do not delay antibiotics more than 45 min',
      'Initiate IV crystalloid resuscitation: 30 mL/kg within 3 hours',
      'Start broad-spectrum antibiotics within 1 hour of recognition',
      'Reassess fluid responsiveness before additional fluid boluses',
      'Norepinephrine is first-line vasopressor for MAP < 65 mmHg',
      'Measure serum lactate; target normalization',
      'Source control: identify and control infectious source within 6–12 hours',
    ],
    source: 'Surviving Sepsis Campaign 2021',
  },
  {
    name: 'AHA/ACC STEMI Guidelines (2022)',
    category: 'Cardiac',
    summary: 'Guidelines for management of ST-elevation myocardial infarction.',
    keyPoints: [
      '12-lead ECG within 10 minutes of symptom onset or ED arrival',
      'Dual antiplatelet therapy (aspirin + P2Y12 inhibitor) as early as possible',
      'Primary PCI is preferred reperfusion strategy (door-to-balloon < 90 min)',
      'Fibrinolytic therapy if PCI-capable hospital not available within 120 min',
      'Anticoagulation with unfractionated heparin or LMWH during PCI',
      'Avoid nitroglycerin if SBP < 90 mmHg, HR < 50, or suspected RV infarction',
      'Routine supplemental O₂ only if SpO₂ < 90%',
      'Door-to-needle time for fibrinolytics < 30 minutes',
    ],
    source: 'AHA/ACC 2022 Guideline for the Management of Patients with STEMI',
  },
];
