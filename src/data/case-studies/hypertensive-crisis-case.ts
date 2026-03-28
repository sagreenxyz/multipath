import type { CaseStudy } from '../../types/case-study.js';

export const hypertensiveCrisisCase: CaseStudy = {
  id: 'hypertensive-crisis',
  title: 'The Silent Killer Strikes',
  subtitle: 'Hypertensive Emergency with End-Organ Damage',
  description:
    'A 52-year-old male arrives in the emergency department with a blood pressure of 218/130 mmHg, severe headache, and blurred vision. As the ED nurse, you must distinguish a hypertensive emergency from urgency, assess for end-organ damage, and initiate safe, controlled blood pressure reduction.',
  difficulty: 'beginner',
  specialty: 'Emergency / Cardiology',
  tags: ['hypertensive crisis', 'hypertensive emergency', 'blood pressure', 'end-organ damage', 'nicardipine', 'fundoscopy'],
  estimatedTime: 20,
  maxScore: 200,
  learningObjectives: [
    { id: 'lo1', description: 'Distinguish hypertensive emergency from hypertensive urgency based on end-organ involvement' },
    { id: 'lo2', description: 'Identify signs and symptoms of hypertensive end-organ damage' },
    { id: 'lo3', description: 'Understand the principles of safe, controlled blood pressure reduction' },
    { id: 'lo4', description: 'Recognize complications of overly rapid blood pressure lowering' },
  ],
  patient: {
    name: 'Darnell Washington',
    age: 52,
    gender: 'male',
    weight: 96,
    height: 180,
    allergies: ['No known drug allergies'],
    currentMedications: [
      'Amlodipine 10 mg PO daily (prescribed but patient admits poor adherence)',
      'Hydrochlorothiazide 25 mg PO daily (prescribed but patient admits poor adherence)',
    ],
    medicalHistory: ['Hypertension (diagnosed 8 years ago, poorly controlled)', 'Obesity', 'Type 2 Diabetes (on diet control only)'],
    chiefComplaint: 'Severe occipital headache 9/10 × 2 hours, blurred vision, and dizziness',
    vitals: {
      temperature: 98.6,
      heartRate: 102,
      respiratoryRate: 18,
      bloodPressure: '218/130',
      oxygenSaturation: 97,
      painLevel: 9,
    },
    appearance:
      'Obese male appearing distressed and holding his head. Alert and oriented ×3. Complains of occipital headache and states "everything looks blurry." Pupils equal and reactive. No facial asymmetry. Mild confusion noted. Wife reports he ran out of his blood pressure medications 3 weeks ago and "has been stressed at work."',
    labs: [
      { name: 'Creatinine', value: '2.1', unit: 'mg/dL', referenceRange: '0.7–1.3', abnormal: true, critical: false },
      { name: 'BUN', value: '32', unit: 'mg/dL', referenceRange: '7–25', abnormal: true, critical: false },
      { name: 'Troponin I', value: '0.06', unit: 'ng/mL', referenceRange: '< 0.04', abnormal: true, critical: false },
      { name: 'Sodium', value: '138', unit: 'mEq/L', referenceRange: '136–145', abnormal: false, critical: false },
      { name: 'Potassium', value: '3.6', unit: 'mEq/L', referenceRange: '3.5–5.0', abnormal: false, critical: false },
      { name: 'Glucose', value: '178', unit: 'mg/dL', referenceRange: '70–100', abnormal: true, critical: false },
      { name: 'Urinalysis', value: '2+ protein, 5–10 RBCs/hpf', unit: '', referenceRange: 'Negative', abnormal: true, critical: false },
    ],
    imaging: [
      {
        type: 'CT Head (Non-contrast)',
        description: 'Obtained on presentation',
        findings: 'No acute hemorrhage, infarction, or mass effect. No midline shift. Mild white matter changes consistent with chronic hypertensive vasculopathy.',
      },
      {
        type: '12-Lead ECG',
        description: 'Obtained on presentation',
        findings: 'Sinus tachycardia at 102 bpm. Left ventricular hypertrophy (LVH) by voltage criteria (Sokolow-Lyon > 35 mm). No acute ST changes or ischemia.',
      },
    ],
  },
  startSceneId: 'htn-scene-1-arrival',
  scenes: [
    {
      id: 'htn-scene-1-arrival',
      type: 'narrative',
      title: 'Emergency Department Arrival',
      timeElapsed: 0,
      narrative:
        'It is 14:15. Darnell Washington, a large 52-year-old man, walks into triage supported by his wife. He is holding the back of his head with both hands. "This headache is the worst of my life — it came out of nowhere about 2 hours ago. And everything looks blurry."\n\nYou triage him immediately. His blood pressure reads 218/130 mmHg on first check. You recheck the other arm: 214/128 mmHg. His wife states: "He ran out of his blood pressure pills about 3 weeks ago. He\'s been really stressed at work and hasn\'t gone to pick up his refills."\n\nYou note he is diaphoretic, visibly distressed, and having difficulty concentrating on your questions.',
      clinicalNote:
        '🩺 Hypertensive Crisis Classification:\n• Hypertensive URGENCY: Severely elevated BP (typically SBP > 180 or DBP > 120) WITHOUT acute end-organ damage. Can be managed with oral medications; outpatient follow-up acceptable.\n• Hypertensive EMERGENCY: Severely elevated BP WITH acute end-organ damage (brain, heart, kidneys, eyes, aorta). Requires IV therapy and ICU admission.\n\nEnd-organ targets: brain (encephalopathy, hemorrhage, stroke), heart (ACS, pulmonary edema), kidneys (AKI, hematuria, proteinuria), eyes (papilledema, retinal hemorrhage), aorta (dissection).',
      nextSceneId: 'htn-scene-2-classification-decision',
    },
    {
      id: 'htn-scene-2-classification-decision',
      type: 'decision',
      title: 'Classify the Hypertensive Crisis',
      timeElapsed: 10,
      narrative:
        'Darnell\'s BP is 218/130 mmHg. His labs show Creatinine 2.1 (up from 1.0 on file 6 months ago), 2+ proteinuria with RBCs on UA, and a troponin of 0.06 (mildly elevated). CT head shows no hemorrhage. He has a severe headache and blurred vision.\n\nHow would you classify his presentation and what does this imply about management?',
      choices: [
        {
          id: 'htn-c2a',
          text: 'Hypertensive EMERGENCY — he has evidence of acute end-organ damage (kidney, possibly cardiac); requires IV antihypertensive therapy and ICU admission',
          nextSceneId: 'htn-scene-3-treatment',
          points: 50,
          isCorrect: true,
          feedback: '✅ Correct! The rising creatinine, proteinuria, hematuria (hypertensive nephropathy), and mildly elevated troponin indicate acute end-organ damage. This is a hypertensive emergency requiring IV antihypertensive therapy with careful titration.',
          rationale: 'Hypertensive emergency is defined by acute end-organ damage, not just BP level. His acutely elevated creatinine, proteinuria, and troponin confirm end-organ involvement. IV therapy (nicardipine, labetalol, or nitroprusside) allows precise titration to safely lower BP by 15–25% in the first hour.',
        },
        {
          id: 'htn-c2b',
          text: 'Hypertensive URGENCY — the CT head is negative so there is no end-organ damage; restart oral medications and arrange outpatient follow-up',
          nextSceneId: 'htn-scene-3-urgency-incorrect',
          points: 0,
          isCorrect: false,
          feedback: '❌ The CT head is negative, but end-organ damage is not limited to the brain. His acutely elevated creatinine, proteinuria, hematuria, and troponin all indicate hypertensive nephropathy and possible cardiac injury — this is a hypertensive EMERGENCY, not urgency.',
          rationale: 'End-organ damage in hypertensive emergency includes renal (AKI, proteinuria, hematuria), cardiac (elevated troponin, pulmonary edema, ACS), neurological (encephalopathy, hemorrhage, stroke), ophthalmologic (papilledema), and aortic (dissection). A negative CT head alone does not exclude emergency status.',
        },
        {
          id: 'htn-c2c',
          text: 'Hypertensive URGENCY — rapidly lower his BP with IV labetalol to get it below 140/90 within the next 2 hours',
          nextSceneId: 'htn-scene-3-too-fast',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ Two errors here: (1) This is a hypertensive emergency, not urgency. (2) Even in emergencies, BP should NOT be lowered to 140/90 rapidly. The target is a 15–25% reduction in the first hour, then gradual normalization over 24–48 hours. Rapid BP lowering causes ischemia.',
          rationale: 'Rapid BP normalization in chronic hypertension causes organ ischemia because the cerebrovascular and coronary autoregulation curves are shifted rightward. Even in emergency, the goal is a 15–25% reduction in the first hour. Aiming for normal BP too quickly causes strokes, MI, and acute tubular necrosis.',
        },
      ],
    },
    {
      id: 'htn-scene-3-treatment',
      type: 'narrative',
      title: 'IV Antihypertensive Therapy Initiated',
      timeElapsed: 20,
      narrative:
        'The physician orders nicardipine (a titratable calcium channel blocker) IV infusion, starting at 5 mg/hr, titrating by 2.5 mg/hr every 5 minutes to target a 20% reduction in MAP in the first hour.\n\nYou establish a dedicated IV line for the nicardipine infusion and begin hourly vital sign monitoring. You explain to Darnell: "We\'re going to give you medicine through your IV to slowly bring your blood pressure down. We need to do this carefully — lowering it too fast can be just as dangerous as leaving it too high."\n\nAt 1 hour: BP 186/112 — approximately 15% reduction in MAP. ✅\nAt 2 hours: BP 174/106 — continued gradual improvement.\nAt 4 hours: BP 162/98 — stable improvement on nicardipine.\n\nDarnell\'s headache improves to 4/10 and his vision clears somewhat.',
      clinicalNote:
        '🎯 BP Reduction Goals in Hypertensive Emergency:\n• First 1 hour: Reduce MAP by 15–25% (or MAP to ~110–115 mmHg)\n• Next 2–6 hours: BP ~160/100 mmHg\n• Next 24–48 hours: Gradual normalization\n\nNever lower to "normal" rapidly in chronic hypertension — autoregulation is reset at higher pressures. Excessive rapid lowering causes watershed infarcts, AKI, and myocardial ischemia.',
      nextSceneId: 'htn-scene-4-end',
    },
    {
      id: 'htn-scene-3-urgency-incorrect',
      type: 'narrative',
      title: 'Urgency Misclassification — Consequences',
      timeElapsed: 20,
      narrative:
        'Oral medications are restarted and outpatient follow-up is arranged. However, 90 minutes later, Darnell\'s creatinine has risen to 2.8 and he develops worsening confusion. The physician is called urgently.\n\n"He has hypertensive nephropathy and possible encephalopathy — this was an emergency, not urgency. We should have had him on IV antihypertensives from the start. He needs the ICU."',
      clinicalNote:
        '⚠️ Classification Matters: The distinction between urgency and emergency determines setting and urgency of treatment. Missing end-organ damage leads to under-treatment. Always check: creatinine (vs. baseline), UA (proteinuria, hematuria), troponin, BNP, chest X-ray, and fundoscopy.',
      nextSceneId: 'htn-scene-4-end',
    },
    {
      id: 'htn-scene-3-too-fast',
      type: 'narrative',
      title: 'Rapid BP Lowering — Ischemic Complication',
      timeElapsed: 20,
      narrative:
        'Darnell\'s BP is rapidly lowered to 136/88 within 45 minutes. He immediately begins to complain of worsening vision, severe dizziness, and left arm tingling. An urgent CT head is obtained showing a new watershed infarct in the right cerebral cortex.\n\n"His cerebrovascular autoregulation was set for much higher pressures," the neurologist explains. "Dropping him to normal so fast caused a stroke. We need to raise his BP back to about 160-170 and treat this more gradually."',
      clinicalNote:
        '⚠️ Autoregulation Shift: In chronic hypertension, the cerebrovascular autoregulation curve shifts rightward. The brain requires higher perfusion pressures to maintain adequate blood flow. Rapidly normalizing BP can drop cerebral perfusion below the autoregulatory threshold, causing ischemia in watershed zones.',
      nextSceneId: 'htn-scene-4-end',
    },
    {
      id: 'htn-scene-4-end',
      type: 'end',
      title: 'Case Complete — Hypertensive Crisis',
      timeElapsed: 60,
      narrative:
        'Darnell is admitted to the ICU for continued nicardipine titration and end-organ monitoring. Nephrology is consulted for the hypertensive nephropathy. After 48 hours, he is transitioned to oral amlodipine and lisinopril with close outpatient follow-up arranged.\n\nKey Learning Points:\n• Hypertensive emergency = severe BP elevation + end-organ damage → IV therapy required\n• Hypertensive urgency = severe BP elevation without end-organ damage → oral therapy acceptable\n• End-organ damage includes renal (AKI, proteinuria), cardiac (troponin, ACS), neurological, and ophthalmologic findings\n• Reduce MAP 15–25% in first hour — NEVER rapidly normalize BP\n• Medication nonadherence is a leading cause of hypertensive crises — address barriers to adherence',
      endType: 'success',
    },
  ],
};
