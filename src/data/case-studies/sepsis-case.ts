import type { CaseStudy } from '../../types/case-study.js';

export const sepsisCase: CaseStudy = {
  id: 'sepsis-elderly-uti',
  title: 'A Cascade of Complications',
  subtitle: 'Sepsis in an Elderly Patient',
  description:
    'An 68-year-old male presents to the medical-surgical floor transferred from the emergency department with fever, confusion, and suspected urinary tract infection. You are the admitting nurse. Your assessment and interventions in the next few hours are critical.',
  difficulty: 'intermediate',
  specialty: 'Medical-Surgical / Critical Care',
  tags: ['sepsis', 'elderly', 'UTI', 'SBAR', 'sepsis bundle', 'critical thinking'],
  estimatedTime: 30,
  maxScore: 300,
  learningObjectives: [
    { id: 'lo1', description: 'Identify the early clinical manifestations of sepsis using qSOFA criteria' },
    { id: 'lo2', description: 'Prioritize nursing interventions according to the Surviving Sepsis Campaign Hour-1 Bundle' },
    { id: 'lo3', description: 'Demonstrate effective SBAR communication when escalating patient status to a provider' },
    { id: 'lo4', description: 'Recognize signs of clinical deterioration and initiate appropriate rapid response' },
    { id: 'lo5', description: 'Safely administer prescribed medications and monitor for therapeutic response and adverse effects' },
  ],
  patient: {
    name: 'Harold Simmons',
    age: 68,
    gender: 'male',
    weight: 82,
    height: 178,
    allergies: ['Penicillin (rash)'],
    currentMedications: [
      'Metformin 1000 mg PO BID',
      'Lisinopril 10 mg PO daily',
      'Atorvastatin 40 mg PO nightly',
    ],
    medicalHistory: ['Type 2 Diabetes Mellitus', 'Hypertension', 'BPH (benign prostatic hyperplasia)'],
    chiefComplaint: 'Confusion, fever, and decreased urine output × 2 days',
    vitals: {
      temperature: 103.1,
      heartRate: 114,
      respiratoryRate: 22,
      bloodPressure: '96/58',
      oxygenSaturation: 94,
      painLevel: 3,
      bloodGlucose: 214,
    },
    appearance: 'Elderly male appearing older than stated age. Diaphoretic and flushed. Opens eyes to voice but is confused and disoriented to place and time. Wife at bedside and reports he has been "not himself" for two days.',
    labs: [
      { name: 'WBC', value: '18.4', unit: 'K/µL', referenceRange: '4.5–11.0', abnormal: true, critical: false },
      { name: 'Hemoglobin', value: '12.8', unit: 'g/dL', referenceRange: '13.5–17.5', abnormal: true, critical: false },
      { name: 'Platelets', value: '142', unit: 'K/µL', referenceRange: '150–400', abnormal: true, critical: false },
      { name: 'Creatinine', value: '2.1', unit: 'mg/dL', referenceRange: '0.7–1.3', abnormal: true, critical: false },
      { name: 'BUN', value: '38', unit: 'mg/dL', referenceRange: '7–25', abnormal: true, critical: false },
      { name: 'Sodium', value: '134', unit: 'mEq/L', referenceRange: '136–145', abnormal: true, critical: false },
      { name: 'Glucose', value: '214', unit: 'mg/dL', referenceRange: '70–100', abnormal: true, critical: false },
      { name: 'Lactate', value: '3.8', unit: 'mmol/L', referenceRange: '0.5–2.2', abnormal: true, critical: true },
      { name: 'Urinalysis', value: 'Positive nitrites, large leukocyte esterase, > 50 WBC/hpf', unit: '', referenceRange: 'Negative', abnormal: true, critical: false },
    ],
  },
  startSceneId: 'scene-1-arrival',
  scenes: [
    {
      id: 'scene-1-arrival',
      type: 'narrative',
      title: 'Patient Arrival',
      timeElapsed: 0,
      narrative:
        'You are the charge nurse on the day shift of a 32-bed medical-surgical unit. It is 0900 and you receive a report from the ED nurse on Harold Simmons, a 68-year-old male being admitted for a suspected urinary tract infection. During report, the ED nurse mentions his vitals have been "a little concerning" but he has received 1 liter of IV normal saline.\n\nAs you enter Mr. Simmons\' room, his wife greets you anxiously. "He\'s been so confused and burning up with fever for two days. I\'ve never seen him like this." Mr. Simmons looks at you but cannot tell you where he is or what year it is. He is diaphoretic with flushed skin.',
      clinicalNote:
        '🩺 Nursing Pearl: Upon receiving any new patient, perform a complete head-to-toe assessment immediately. Do not rely solely on the transferring nurse\'s report—the patient\'s condition may have changed during transport.',
      nextSceneId: 'scene-2-assessment',
    },
    {
      id: 'scene-2-assessment',
      type: 'narrative',
      title: 'Initial Assessment Findings',
      timeElapsed: 5,
      narrative:
        'You complete your initial assessment. Mr. Simmons opens his eyes to voice (E3), gives confused verbal responses (V4), and localizes to pain (M5) — GCS 12. He is warm and diaphoretic.\n\nYou review his ED vitals and labs. His current vital signs are:\n• Temp: 103.1°F | HR: 114 bpm | RR: 22/min | BP: 96/58 mmHg | SpO₂: 94% on room air\n\nHis lactate came back at 3.8 mmol/L (critical high). Creatinine is 2.1 mg/dL (baseline per records was 1.0 mg/dL).',
      clinicalNote:
        '⚠️ ALERT: Calculate Mr. Simmons\' qSOFA score:\n• RR ≥ 22/min ✓ (1 point)\n• Altered mental status ✓ (1 point)\n• SBP ≤ 100 mmHg ✓ (1 point)\nTotal qSOFA = 3/3 → High risk for sepsis-related organ dysfunction.',
      nextSceneId: 'scene-3-priority-decision',
    },
    {
      id: 'scene-3-priority-decision',
      type: 'decision',
      title: 'Identifying Your Priority Action',
      timeElapsed: 8,
      narrative:
        'Based on your assessment, Mr. Simmons meets criteria for septic shock (infection + organ dysfunction + hypotension despite fluids). The Surviving Sepsis Campaign Hour-1 Bundle must be initiated immediately. You have many tasks to do. What is your FIRST priority action?',
      choices: [
        {
          id: 'choice-1a',
          text: 'Call the rapid response team (RRT) and notify the attending physician immediately via SBAR',
          nextSceneId: 'scene-4-notify-correct',
          points: 60,
          isCorrect: true,
          feedback: '✅ Excellent clinical judgment! Septic shock is a medical emergency requiring immediate physician notification and potentially RRT activation. Time is critical—delays in treatment worsen outcomes.',
          rationale: 'Mr. Simmons meets criteria for septic shock. Physician notification is essential to obtain orders for the sepsis bundle interventions. The RRT can provide additional support and expertise. This action initiates the entire treatment cascade.',
        },
        {
          id: 'choice-1b',
          text: 'Start 2L of normal saline IV immediately (he looks very dry)',
          nextSceneId: 'scene-4-fluids-alone',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Fluids are important in septic shock, but administering them without a physician order (unless your unit has standing protocols) and before notifying the provider delays the full sepsis bundle. Antibiotics and source identification are equally critical.',
          rationale: 'While fluid resuscitation is a key part of the sepsis bundle, you must notify the physician first to get orders and initiate the complete bundle. Also, check your facility\'s protocols—some units have RN-initiated sepsis protocols.',
        },
        {
          id: 'choice-1c',
          text: 'Draw additional blood work and obtain a urine culture first to identify the source',
          nextSceneId: 'scene-4-cultures-first',
          points: 15,
          isCorrect: false,
          feedback: '⚠️ Blood cultures should be drawn, but this should not be your first action. Physician notification and RRT activation take priority. Antibiotics should not be delayed beyond 1 hour, and blood cultures should ideally be drawn before antibiotic administration.',
          rationale: 'Culture collection is important but is part of the bundle, not the top priority. In septic shock, every minute without appropriate intervention increases mortality. Provider notification enables the entire bundle to be ordered and executed simultaneously by the team.',
        },
        {
          id: 'choice-1d',
          text: 'Apply supplemental oxygen and recheck vitals in 15 minutes',
          nextSceneId: 'scene-4-wait-and-see',
          points: 5,
          isCorrect: false,
          feedback: '❌ This is a dangerous response for a patient in septic shock. While supplemental oxygen may be appropriate, a 15-minute wait is completely unacceptable. This patient requires immediate escalation and intervention.',
          rationale: 'Waiting and watching in septic shock dramatically worsens outcomes. Every hour without appropriate antibiotics increases mortality by approximately 7%. This patient required immediate action at scene recognition.',
        },
      ],
    },
    {
      id: 'scene-4-notify-correct',
      type: 'narrative',
      title: 'Rapid Response Activated',
      timeElapsed: 10,
      narrative:
        'You activate the Rapid Response Team and call Dr. Hernandez (the attending). Using SBAR:\n\n"Dr. Hernandez, this is Nurse [Your Name] on 4 West. SITUATION: Mr. Harold Simmons, 68-year-old male admitted for UTI, is in septic shock. BACKGROUND: He has DM2, hypertension, BPH. Current meds include metformin and lisinopril. ASSESSMENT: Temp 103.1°F, HR 114, RR 22, BP 96/58, SpO₂ 94%, GCS 12, lactate 3.8, creatinine 2.1. qSOFA score 3/3. RECOMMENDATION: Requesting orders for sepsis bundle—blood cultures, antibiotics, IV fluids, and consideration of vasopressors."\n\nDr. Hernandez responds: "Agreed—septic shock. Let\'s start the sepsis bundle. Order entered. Hold for antibiotic selection—he has penicillin allergy—use piperacillin-tazobactam; actually wait, check cross-reactivity...use vancomycin plus pip-tazo actually. Blood cultures times two before antibiotics if you can do it within 15 minutes. 30 mL/kg NS bolus, repeat lactate in 2 hours. I\'m coming in."',
      clinicalNote:
        '📋 Key Point: Mr. Simmons has a documented penicillin allergy (rash). Piperacillin-tazobactam is a penicillin-type beta-lactam. Cross-reactivity with penicillin allergy is low (< 1–2%), and is generally considered safe with a minor penicillin allergy (rash only, not anaphylaxis). The physician made the decision to proceed—document this conversation.',
      scoreBonus: 10,
      nextSceneId: 'scene-5-bundle-tasks',
    },
    {
      id: 'scene-4-fluids-alone',
      type: 'narrative',
      title: 'Fluids Without Full Bundle',
      timeElapsed: 12,
      narrative:
        'You start IV fluids, but 20 minutes pass without physician notification. Mr. Simmons\' blood pressure drops further to 88/52 mmHg. The patient is deteriorating. The RRT is automatically called by the bedside monitor alarm. The RRT nurse asks, "Has the physician been notified? Have antibiotics been ordered?"\n\nThose steps are still pending. The RRT nurse says, "We need to notify the MD now and get antibiotics ordered immediately. Every minute counts in septic shock."',
      clinicalNote:
        '⏱️ Time Impact: The delay in antibiotic administration has worsened outcomes. In septic shock, mortality increases approximately 7% per hour without appropriate antibiotics. Always notify the physician first to initiate the full bundle simultaneously.',
      nextSceneId: 'scene-5-bundle-tasks',
    },
    {
      id: 'scene-4-cultures-first',
      type: 'narrative',
      title: 'Cultures Drawn — But Delays Mount',
      timeElapsed: 15,
      narrative:
        'You draw blood cultures and obtain a catheter urine specimen. This takes 15 minutes. When you finally call Dr. Hernandez, he is concerned about the delay. "Why wasn\'t I called immediately? The patient is in septic shock. Antibiotics should have been started by now. Let\'s get the full bundle going NOW."\n\nThe physician activates the sepsis protocol and orders are entered. The RRT arrives to help.',
      clinicalNote:
        '⚠️ Important Learning: Blood cultures should ideally be drawn before antibiotics, but only if this can be done within 45 minutes of sepsis recognition without causing antibiotic delay. Physician notification and the complete bundle must not be delayed.',
      nextSceneId: 'scene-5-bundle-tasks',
    },
    {
      id: 'scene-4-wait-and-see',
      type: 'narrative',
      title: 'Dangerous Delay',
      timeElapsed: 25,
      narrative:
        'During your 15-minute wait, Mr. Simmons\' blood pressure drops to 82/48 mmHg and he becomes increasingly unresponsive. The monitor alarm triggers an automatic RRT activation. The RRT team arrives urgently. The intensivist on the RRT team states: "This patient is in decompensated septic shock. We\'ve lost critical time. We need emergency resuscitation NOW."\n\nMr. Simmons is transferred to the ICU emergently.',
      clinicalNote:
        '❌ Critical Learning: A "wait and see" approach to septic shock is never appropriate. Sepsis screening should be systematic for every patient with infection. When criteria are met, the response must be immediate. This scenario demonstrates how delay leads to organ failure progression.',
      nextSceneId: 'scene-5-bundle-tasks',
    },
    {
      id: 'scene-5-bundle-tasks',
      type: 'decision',
      title: 'Executing the Sepsis Bundle',
      timeElapsed: 15,
      narrative:
        'Dr. Hernandez has ordered the full sepsis bundle. You have multiple tasks to complete. You have a nursing student with you who can help with one task. Which task do you assign to the student while you handle the most critical nursing intervention?',
      choices: [
        {
          id: 'choice-5a',
          text: 'You verify and administer the antibiotics (vancomycin + pip-tazo); student sets up the fluid bolus',
          nextSceneId: 'scene-6-antibiotics-correct',
          points: 50,
          isCorrect: true,
          feedback: '✅ Correct prioritization! Antibiotic administration is the most time-sensitive, pharmacologically complex task and requires RN verification of the order, allergy check, dose calculation, and administration. The fluid bolus setup is appropriate for supervision under your direction.',
          rationale: 'Medication administration—especially antibiotics with allergy considerations—must be performed by the RN with full verification. The student can safely assist with the mechanical task of setting up the fluid infusion under supervision.',
        },
        {
          id: 'choice-5b',
          text: 'You manage the fluid bolus; student goes to obtain the antibiotics from pharmacy',
          nextSceneId: 'scene-6-student-pharmacy',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Sending a student to pharmacy without verification introduces medication safety risks. Antibiotic retrieval from automated dispensing cabinets and verification requires RN-level competency. Reconsider task delegation.',
          rationale: 'Medication retrieval and verification are within the RN scope, not appropriate for unsupervised student delegation. The student\'s role should be assistive tasks that do not require independent clinical judgment.',
        },
        {
          id: 'choice-5c',
          text: 'You draw the repeat blood cultures; student monitors vitals',
          nextSceneId: 'scene-6-cultures-delay',
          points: 25,
          isCorrect: false,
          feedback: '⚠️ Blood cultures should have already been drawn before antibiotics. If already drawn, the priority shifts to getting antibiotics infusing immediately. Antibiotic administration should be your highest priority at this point.',
          rationale: 'The sepsis bundle sequence matters: cultures should be drawn first (already done or should be), then antibiotics. If cultures were delayed, that delay has already occurred—the most urgent remaining task is antibiotic administration.',
        },
      ],
    },
    {
      id: 'scene-6-antibiotics-correct',
      type: 'narrative',
      title: 'Antibiotic Administration',
      timeElapsed: 20,
      vitalsUpdate: {
        heartRate: 108,
        bloodPressure: '100/62',
        oxygenSaturation: 97,
      },
      narrative:
        'You pull vancomycin and piperacillin-tazobactam from the automated dispensing cabinet. Before administration, you perform the 5 Rights + 2:\n✓ Right Patient (scan armband)\n✓ Right Drug\n✓ Right Dose (vancomycin 15 mg/kg = 1,230 mg; pip-tazo 4.5 g)\n✓ Right Route (IV)\n✓ Right Time\n✓ Right Reason\n✓ Right Documentation\n\nYou note Mr. Simmons has a documented penicillin allergy (rash). You proceed with pip-tazo per physician order, documenting the allergy discussion in the chart. Vancomycin is infused over 90 minutes to prevent red-man syndrome. The 2,460 mL NS bolus (30 mL/kg × 82 kg) is infusing via pressure bag.\n\nThirty minutes later: BP improves to 100/62 mmHg. HR 108. SpO₂ 97% on 2L NC.',
      clinicalNote:
        '💊 Vancomycin Note: Vancomycin must be infused at a rate ≤ 10–15 mg/min (or over ≥ 60 minutes) to prevent red-man syndrome (flushing, erythema, hypotension). For this patient\'s dose of 1,230 mg, a 90-minute infusion is appropriate.',
      scoreBonus: 20,
      nextSceneId: 'scene-7-reassessment',
    },
    {
      id: 'scene-6-student-pharmacy',
      type: 'narrative',
      title: 'Medication Retrieval Issues',
      timeElapsed: 22,
      narrative:
        'The student is uncertain how to access the automated dispensing cabinet and needs your badge to override. This delays antibiotic retrieval by 10 minutes. When you catch up, you administer antibiotics, but the delay has cost valuable time.',
      clinicalNote:
        '⚠️ Delegation Principle: The "right person" is one of the five rights of delegation. Students and unlicensed personnel should not independently access medication dispensing systems. Always maintain control of medication-related tasks.',
      nextSceneId: 'scene-7-reassessment',
    },
    {
      id: 'scene-6-cultures-delay',
      type: 'narrative',
      title: 'Antibiotic Delay',
      timeElapsed: 25,
      narrative:
        'While obtaining repeat cultures, antibiotic administration is delayed by another 20 minutes. Dr. Hernandez calls for an update and is concerned about the antibiotic delay. "We need those antibiotics running—source control is critical." You quickly get the medications infusing.',
      clinicalNote:
        '⚠️ Bundle Sequencing: The Hour-1 Bundle should be executed in parallel by the team, not sequentially by one nurse. Antibiotics and fluid resuscitation should begin as soon as possible after blood culture collection.',
      nextSceneId: 'scene-7-reassessment',
    },
    {
      id: 'scene-7-reassessment',
      type: 'assessment',
      title: 'Two-Hour Reassessment',
      timeElapsed: 120,
      vitalsUpdate: {
        temperature: 101.8,
        heartRate: 102,
        respiratoryRate: 20,
        bloodPressure: '104/66',
        oxygenSaturation: 97,
        bloodGlucose: 188,
      },
      newLabs: [
        { name: 'Repeat Lactate', value: '2.4', unit: 'mmol/L', referenceRange: '0.5–2.2', abnormal: true, critical: false },
      ],
      narrative:
        'Two hours have passed. Mr. Simmons has received his full fluid bolus and first dose of antibiotics. His wife reports he seems "a little more like himself." You reassess:\n\n• Temp: 101.8°F (↓) | HR: 102 bpm (↓) | RR: 20/min | BP: 104/66 mmHg (↑) | SpO₂: 97%\n• Repeat lactate: 2.4 mmol/L (↓ from 3.8 — trending down but still elevated)\n• Mr. Simmons knows his name and that he\'s "in the hospital" but remains confused about date\n• Urine output over past 2 hours: 65 mL total (0.4 mL/kg/h — below target of 0.5 mL/kg/h)\n\nDr. Hernandez calls for an update.',
      clinicalNote:
        '📊 Monitoring Goals in Sepsis:\n• Lactate clearance: ≥ 10% decrease every 2 hours\n• Urine output: ≥ 0.5 mL/kg/h (target = 41 mL/h for 82 kg)\n• MAP: ≥ 65 mmHg\n• Mental status: improvement\n\nMr. Simmons shows improvement but urine output remains subtherapeutic.',
      nextSceneId: 'scene-8-urine-decision',
    },
    {
      id: 'scene-8-urine-decision',
      type: 'decision',
      title: 'Addressing Oliguria',
      timeElapsed: 125,
      narrative:
        'When you report to Dr. Hernandez, he asks: "Urine output is only 0.4 mL/kg/h. What do you think is going on and what do you recommend?" What do you tell the physician?',
      choices: [
        {
          id: 'choice-8a',
          text: 'Recommend a fluid challenge and assess response; concern for ongoing third-spacing and pre-renal AKI',
          nextSceneId: 'scene-9-good-outcome',
          points: 50,
          isCorrect: true,
          feedback: '✅ Excellent! Mr. Simmons has elevated creatinine suggesting AKI, likely pre-renal from sepsis-related hypoperfusion. A fluid challenge with careful monitoring is appropriate before considering other interventions. Your clinical reasoning demonstrates integration of assessment data.',
          rationale: 'Low urine output in sepsis can be from pre-renal causes (hypoperfusion) or intrinsic renal injury. Given the trending improvement in other parameters, a fluid challenge is appropriate. Careful assessment of fluid responsiveness guides further resuscitation.',
        },
        {
          id: 'choice-8b',
          text: 'Recommend starting furosemide (Lasix) to increase urine output',
          nextSceneId: 'scene-9-lasix-error',
          points: 0,
          isCorrect: false,
          feedback: '❌ This is dangerous in this context. Furosemide (a diuretic) would worsen intravascular volume depletion in a patient who is still likely hypovolemic from sepsis. This could precipitate worsening hypotension and AKI.',
          rationale: 'Diuretics are contraindicated in oliguria secondary to sepsis and hypovolemia. They would reduce intravascular volume further, worsening organ perfusion. Furosemide has a role in volume overload—not pre-renal AKI from septic shock.',
        },
        {
          id: 'choice-8c',
          text: 'Recommend inserting a Foley catheter to get an accurate urine output measurement',
          nextSceneId: 'scene-9-foley-partial',
          points: 25,
          isCorrect: false,
          feedback: '⚠️ A Foley catheter for accurate monitoring may be appropriate, but this alone does not address the underlying cause of oliguria. It is a monitoring intervention, not a treatment. You should also address the cause.',
          rationale: 'Accurate urine output measurement is important and a Foley catheter may be indicated, but the clinical question is about why output is low and what to do about it. The answer should include both monitoring and treatment recommendations.',
        },
      ],
    },
    {
      id: 'scene-9-good-outcome',
      type: 'end',
      title: 'Case Complete — Excellent Outcome',
      timeElapsed: 240,
      endType: 'success',
      narrative:
        'Dr. Hernandez orders a 500 mL NS bolus challenge. Over the next two hours, Mr. Simmons\' urine output improves to 0.6 mL/kg/h and his BP stabilizes at 110/70 mmHg. Mental status continues to clear — he is now alert and oriented to person, place, and time.\n\nBy the following morning, his repeat lactate is 1.2 mmol/L (normal). Blood culture results are pending at 24 hours. Urine culture grows E. coli (gram-negative rods). Antibiotics are appropriately narrowed per sensitivity results (antibiotic stewardship).\n\nMr. Simmons thanks you: "The nurse was very attentive. She kept me informed and I feel like she really watched over me." His wife adds, "Thank you for taking this so seriously right away."\n\nCase outcome: Excellent — patient stabilized and transferred from step-down to medical floor on day 3.',
      clinicalNote:
        '🏆 Key Successes in This Case:\n• Early recognition using qSOFA criteria\n• Prompt physician notification with structured SBAR\n• Timely initiation of Hour-1 Sepsis Bundle\n• Safe medication administration with allergy awareness\n• Ongoing reassessment and appropriate escalation\n• Clear communication with patient and family',
      feedback:
        'Excellent work! You demonstrated expert-level nursing practice in sepsis recognition, communication, and evidence-based bundle implementation. Your quick escalation and systematic approach directly improved patient outcomes.',
    },
    {
      id: 'scene-9-lasix-error',
      type: 'end',
      title: 'Case Complete — Adverse Event',
      timeElapsed: 240,
      endType: 'failure',
      narrative:
        'Dr. Hernandez pauses: "Are you sure? This patient is likely still intravascularly depleted." Your recommendation for furosemide is reconsidered. However, the concern about your clinical reasoning prompts a more thorough teaching discussion.\n\nIf furosemide had been administered without this catch, Mr. Simmons\' blood pressure would have dropped critically (84/50 mmHg), requiring vasopressors and ICU transfer. An adverse event report would have been filed.\n\nThis case highlights the danger of reflexively treating numbers (low urine output) without understanding the underlying pathophysiology. In sepsis-related oliguria, the cause is hypoperfusion, not fluid overload.',
      clinicalNote:
        '🔴 Critical Safety Lesson: Never administer a diuretic to a patient with sepsis-related oliguria without ruling out hypovolemia. Always trace the cause of the clinical finding before treating it in isolation. "Treat the patient, not the number."',
      feedback:
        'Review sepsis pathophysiology and the approach to acute kidney injury in sepsis. Oliguria in septic shock requires volume assessment before any diuretic consideration.',
    },
    {
      id: 'scene-9-foley-partial',
      type: 'end',
      title: 'Case Complete — Partial Outcome',
      timeElapsed: 240,
      endType: 'partial',
      narrative:
        'A Foley catheter is placed and confirms the urine output of 0.4 mL/kg/h. Dr. Hernandez orders a fluid challenge (which you could have recommended). Over the next two hours Mr. Simmons improves, but the delay in addressing the underlying issue extended his oliguria.\n\nThe case resolves positively, but an opportunity was missed to demonstrate comprehensive clinical reasoning and advocacy. A complete recommendation would have included both monitoring AND addressing the likely pre-renal cause.',
      feedback:
        'Good thinking about monitoring accuracy, but remember to always address the underlying cause. A complete SBAR recommendation includes both what you are observing AND what you believe is causing it, plus what intervention you recommend.',
    },
  ],
};
