import type { CaseStudy } from '../../types/case-study.js';

export const pulmonaryEmbolismCase: CaseStudy = {
  id: 'pulmonary-embolism',
  title: 'Sudden Breathlessness',
  subtitle: 'Acute Pulmonary Embolism',
  description:
    'A 48-year-old female, 5 days post-total knee replacement, suddenly develops severe dyspnea and pleuritic chest pain. As the orthopedic floor nurse, you must rapidly recognize the signs of acute pulmonary embolism, initiate assessment, and escalate care to prevent death from massive PE.',
  difficulty: 'intermediate',
  specialty: 'Orthopedics / Pulmonary / Emergency',
  tags: ['pulmonary embolism', 'PE', 'DVT', 'anticoagulation', 'Wells score', 'CT-PA', 'VTE', 'heparin', 'thrombolysis'],
  estimatedTime: 25,
  maxScore: 250,
  learningObjectives: [
    { id: 'lo1', description: 'Recognize the clinical presentation of acute pulmonary embolism' },
    { id: 'lo2', description: 'Apply the Wells PE score to estimate pre-test probability' },
    { id: 'lo3', description: 'Initiate appropriate diagnostic workup and anticoagulation therapy for suspected PE' },
    { id: 'lo4', description: 'Differentiate massive, submassive, and low-risk PE and understand management differences' },
    { id: 'lo5', description: 'Recognize indications for systemic thrombolysis in massive PE' },
  ],
  patient: {
    name: 'Linda Ostrowski',
    age: 48,
    gender: 'female',
    weight: 72,
    height: 165,
    allergies: ['Sulfa drugs (rash)'],
    currentMedications: [
      'Aspirin 81 mg PO BID (VTE prophylaxis — per orthopedic protocol)',
      'Celecoxib 200 mg PO BID (pain)',
      'Oxycodone/acetaminophen 5/325 mg q6h PRN pain',
      'Enoxaparin 40 mg SQ daily (VTE prophylaxis — last dose was this morning)',
    ],
    medicalHistory: [
      'Right total knee arthroplasty (post-operative day 5)',
      'Hypertension (controlled)',
      'Obesity (BMI 32)',
      'Oral contraceptive use (discontinued 2 months ago)',
      'Non-smoker',
    ],
    chiefComplaint: 'Sudden onset severe shortness of breath, pleuritic chest pain (right-sided, sharp, worse with inspiration), and feeling of impending doom — post-op day 5 after right TKA',
    vitals: {
      temperature: 99.2,
      heartRate: 124,
      respiratoryRate: 30,
      bloodPressure: '102/68',
      oxygenSaturation: 87,
      painLevel: 8,
    },
    appearance:
      'Middle-aged woman sitting bolt upright, visibly dyspneic, and extremely anxious. "Something is very wrong. I can\'t breathe and my chest hurts with every breath." Pale and diaphoretic. Tachypneic with obvious labored breathing. Right leg (operative leg) appears more swollen than left. No previous symptoms of dyspnea this admission. She was doing well in PT this morning.',
    labs: [
      { name: 'D-dimer', value: '4,800', unit: 'ng/mL', referenceRange: '< 500', abnormal: true, critical: true },
      { name: 'Troponin I', value: '0.22', unit: 'ng/mL', referenceRange: '< 0.04', abnormal: true, critical: true },
      { name: 'BNP', value: '420', unit: 'pg/mL', referenceRange: '< 100', abnormal: true, critical: true },
      { name: 'ABG — PaO₂', value: '52', unit: 'mmHg', referenceRange: '80–100', abnormal: true, critical: true },
      { name: 'ABG — PaCO₂', value: '28', unit: 'mmHg', referenceRange: '35–45', abnormal: true, critical: false },
      { name: 'ABG — pH', value: '7.48', unit: '', referenceRange: '7.35–7.45', abnormal: true, critical: false },
      { name: 'Creatinine', value: '0.9', unit: 'mg/dL', referenceRange: '0.5–1.1', abnormal: false, critical: false },
      { name: 'Hemoglobin', value: '11.8', unit: 'g/dL', referenceRange: '12.0–16.0', abnormal: true, critical: false },
    ],
    imaging: [
      {
        type: '12-Lead ECG',
        description: 'Obtained immediately on symptom onset',
        findings: 'Sinus tachycardia at 124 bpm. S1Q3T3 pattern (S wave in lead I, Q wave and T-wave inversion in lead III). Right bundle branch block (new). Right heart strain pattern. No ST elevation.',
      },
    ],
  },
  startSceneId: 'pe-scene-1-onset',
  scenes: [
    {
      id: 'pe-scene-1-onset',
      type: 'narrative',
      title: 'Sudden Deterioration on Post-Op Day 5',
      timeElapsed: 0,
      narrative:
        'It is 14:20 on post-operative day 5. Linda Ostrowski had a successful physical therapy session this morning and was planning to go home tomorrow. You are updating her chart when her call light activates.\n\nYou enter the room to find her sitting straight up in bed, clutching her chest. "I can\'t breathe — something happened all of a sudden. My chest hurts so bad when I breathe in, and I feel like I\'m going to die."\n\nHer SpO₂ reads 87% on room air. Her HR is 124. She was 96% on room air just 2 hours ago at her last nursing assessment. You notice her right leg (surgical leg) looks more swollen than it did earlier this morning.',
      clinicalNote:
        '🫁 Classic PE Presentation:\n• Sudden onset dyspnea (most common symptom)\n• Pleuritic chest pain (sharp, worse with inspiration)\n• Tachycardia and tachypnea\n• Hypoxia (often out of proportion to other findings)\n• Sense of impending doom or anxiety\n• Signs of DVT (asymmetric leg swelling, calf tenderness)\n\nHigh-Risk Features in Linda:\n• Post-orthopedic surgery (highest VTE risk group)\n• Post-op day 5 (peak PE risk: days 3–7 post-op)\n• Recent immobility\n• Obesity\n• Prior OCP use (discontinued 2 months ago)',
      nextSceneId: 'pe-scene-2-priority-decision',
    },
    {
      id: 'pe-scene-2-priority-decision',
      type: 'decision',
      title: 'Immediate Priority Response',
      timeElapsed: 2,
      narrative:
        'Linda has sudden dyspnea, pleuritic chest pain, SpO₂ 87%, HR 124, and asymmetric leg swelling on post-op day 5 after TKA. She states she feels like she is dying.\n\nWhat is your IMMEDIATE priority action?',
      choices: [
        {
          id: 'pe-c2a',
          text: 'Apply supplemental oxygen, keep her in bed (high Fowler\'s), call the physician immediately with SBAR communication, and prepare for urgent CT pulmonary angiography',
          nextSceneId: 'pe-scene-3-workup',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! Oxygen to treat hypoxia, positioning for respiratory comfort, immediate physician notification with SBAR, and urgent CT-PA for definitive diagnosis are all appropriate simultaneous actions. Suspected massive or submassive PE is a medical emergency.',
          rationale: 'Pulmonary embolism with SpO₂ of 87% and hemodynamic compromise requires immediate oxygen, physician notification, and urgent diagnostic imaging. CT pulmonary angiography (CT-PA) is the gold-standard diagnostic test. Do not delay by doing a low-yield test first (e.g., plain chest X-ray alone).',
        },
        {
          id: 'pe-c2b',
          text: 'Help her to the bathroom as requested — she may be anxious and a short walk will help her calm down',
          nextSceneId: 'pe-scene-3-ambulation',
          points: 0,
          isCorrect: false,
          feedback: '❌ A patient with suspected PE must NOT be ambulated. Physical exertion can dislodge a thrombus and cause hemodynamic collapse. Anxiety is a presenting symptom of PE, not the cause of her symptoms. Her SpO₂ of 87% and sudden-onset symptoms demand immediate medical evaluation — not ambulation.',
          rationale: 'Activity restriction is essential in suspected PE. The increased cardiac output from ambulation in a patient with a large clot burden can cause acute right heart failure and cardiovascular collapse. Keep the patient in bed, in high Fowler\'s position, and call for help immediately.',
        },
        {
          id: 'pe-c2c',
          text: 'Obtain a stat chest X-ray to rule out pneumothorax before calling the physician',
          nextSceneId: 'pe-scene-3-cxr-delay',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ While ruling out pneumothorax is reasonable in the differential, the chest X-ray should NOT delay calling the physician or beginning oxygen. Call for help simultaneously with obtaining diagnostics. Chest X-ray in PE is often normal or shows non-specific findings — CT-PA is the definitive test.',
          rationale: 'Pleuritic chest pain and dyspnea have a differential diagnosis (PE, pneumothorax, pneumonia, pleuritis). But the most important action is calling for help and starting oxygen immediately — not obtaining a chest X-ray first. Physician notification and definitive diagnostic testing (CT-PA) should happen in parallel with initial stabilization.',
        },
      ],
    },
    {
      id: 'pe-scene-3-workup',
      type: 'narrative',
      title: 'Urgent Diagnostic Workup',
      timeElapsed: 10,
      narrative:
        'You apply oxygen at 6L NC — SpO₂ improves to 93%. You call the physician with SBAR: "This is the nurse on 4-West. I am calling about Linda Ostrowski, 48, post-op day 5 after TKA. She has sudden onset dyspnea, pleuritic chest pain, SpO₂ 87% on room air (now 93% on 6L), HR 124, BP 102/68. Right leg more swollen than earlier. I am concerned this is a pulmonary embolism."\n\nThe physician arrives within 3 minutes. Wells PE score is calculated:\n• Signs/symptoms of DVT: +3\n• Heart rate > 100: +1.5\n• Immobilization > 3 days / surgery in past 4 weeks: +1.5\n• Alternative diagnosis less likely than PE: +3\nWells PE Score: 9 — HIGH probability (≥ 7 = high)\n\nOrders: CT-PA STAT, ECG, D-dimer, troponin, BNP, ABG, CBC, BMP. Anticoagulation on hold pending imaging.',
      clinicalNote:
        '📊 Wells PE Score:\n• DVT signs/symptoms: +3\n• HR > 100: +1.5\n• Immobilized ≥ 3 days or surgery ≤ 4 weeks: +1.5\n• Prior DVT/PE: +1.5\n• Hemoptysis: +1\n• Cancer: +1\n• Alternative diagnosis less likely: +3\n\nInterpretation (3-tier):\n• 0–1: Low probability\n• 2–6: Moderate probability\n• ≥ 7: High probability',
      nextSceneId: 'pe-scene-4-results-decision',
    },
    {
      id: 'pe-scene-3-ambulation',
      type: 'narrative',
      title: 'Ambulation Attempt — Collapse',
      timeElapsed: 8,
      narrative:
        'You help Linda swing her legs to the side of the bed to get up. As she stands, she immediately collapses — BP drops to 72/40, she loses consciousness. The monitor alarms with rapid AF at 148 bpm.\n\nA code is called. ACLS is initiated. CT-PA during resuscitation shows bilateral massive pulmonary emboli.\n\n"Activity in suspected PE with hemodynamic compromise can precipitate circulatory collapse," the cardiologist states during the debrief. "This patient should never have been ambulated."',
      clinicalNote:
        '🚨 Activity Restriction in Suspected PE: DO NOT ambulate patients with suspected or confirmed PE, especially with hemodynamic compromise. Increased venous return from exercise can acutely overload the right ventricle in massive PE and cause cardiac arrest. Keep flat or in high Fowler\'s position, oxygen, IV access, call for help.',
      nextSceneId: 'pe-scene-4-results-decision',
    },
    {
      id: 'pe-scene-3-cxr-delay',
      type: 'narrative',
      title: 'CXR Obtained — Delayed Response',
      timeElapsed: 10,
      narrative:
        'The chest X-ray is obtained. It shows no pneumothorax, possible mild right lower lobe atelectasis — non-diagnostic. During the 15-minute delay, Linda\'s BP drops to 88/54 and she becomes more distressed.\n\nYou call the physician with the non-diagnostic CXR. "Why wasn\'t I called immediately when you saw SpO₂ 87%? We needed to be at the bedside 15 minutes ago. We should have called a CT-PA directly." The physician arrives and immediately orders CT-PA and anticoagulation workup.',
      clinicalNote:
        '📌 Chest X-Ray in PE: CXR is normal in 20–40% of PE cases. Classic findings (Hampton\'s hump, Westermark sign) are rare. CXR is useful primarily to rule out alternative diagnoses (pneumothorax, large pleural effusion). It should NOT delay physician notification or CT-PA in suspected PE.',
      nextSceneId: 'pe-scene-4-results-decision',
    },
    {
      id: 'pe-scene-4-results-decision',
      type: 'decision',
      title: 'CT-PA Results — Management Decision',
      timeElapsed: 45,
      narrative:
        'CT-PA Report: Bilateral pulmonary emboli — large central bilateral PE with right ventricular (RV) dilation on CT (RV:LV ratio > 1). No evidence of hemodynamic collapse at this moment. BP is now 92/60 on supplemental oxygen. HR 126. Troponin 0.22, BNP 420 — elevated.\n\nThis is a SUBMASSIVE PE (large central PE + RV strain, but no hemodynamic collapse at this time).\n\nThe physician asks: "What anticoagulation should we start immediately?"',
      choices: [
        {
          id: 'pe-c4a',
          text: 'Start IV unfractionated heparin (UFH) infusion per weight-based protocol immediately — preferred in submassive PE for ease of reversal if thrombolysis becomes necessary',
          nextSceneId: 'pe-scene-5-heparin',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! IV UFH is preferred for submassive/massive PE over LMWH because it can be rapidly reversed (with protamine) if systemic thrombolysis or surgical intervention becomes necessary. It also has predictable pharmacokinetics in the ICU. Begin heparin bolus and infusion per weight-based protocol.',
          rationale: 'IV UFH is preferred in massive and submassive PE because: (1) reversible with protamine if thrombolysis becomes necessary, (2) titrated with aPTT monitoring, (3) immediately active. LMWH is preferred in stable low-risk PE but less ideal when the patient may need rapid reversal for lytic therapy.',
        },
        {
          id: 'pe-c4b',
          text: 'Withhold anticoagulation since she just had surgery 5 days ago — bleeding risk is too high',
          nextSceneId: 'pe-scene-5-no-anticoag',
          points: 0,
          isCorrect: false,
          feedback: '❌ Confirmed PE is a life-threatening emergency. While post-surgical bleeding risk exists, the mortality from untreated bilateral submassive PE far exceeds the bleeding risk. Anticoagulation should not be withheld. The surgical team should be notified of the anticoagulation decision.',
          rationale: 'Untreated PE in the setting of submassive to massive disease carries 50–65% mortality without treatment. Post-surgical period is a relative, not absolute, contraindication to anticoagulation. The risk-benefit clearly favors anticoagulation. The orthopedic surgeon should be in the loop.',
        },
        {
          id: 'pe-c4c',
          text: 'Administer systemic tPA (alteplase) 100 mg IV now — bilateral PE requires thrombolysis',
          nextSceneId: 'pe-scene-5-tpa-too-early',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Systemic thrombolysis is indicated for MASSIVE PE (hemodynamic collapse — BP < 90 or cardiac arrest), not submassive PE. Linda currently has borderline BP but is not in hemodynamic collapse. Thrombolysis in the post-surgical setting carries very high bleeding risk including intracranial hemorrhage. Start heparin first; reserve tPA for if she decompensates.',
          rationale: 'Systemic thrombolysis (tPA) absolute contraindications include recent surgery (< 3 months). Even in submassive PE without hemodynamic collapse, the bleeding risk from thrombolysis 5 days post-TKA is prohibitive. Start heparin, monitor closely, and consider catheter-directed therapy if she deteriorates.',
        },
      ],
    },
    {
      id: 'pe-scene-5-heparin',
      type: 'narrative',
      title: 'Heparin Initiated — ICU Transfer',
      timeElapsed: 60,
      narrative:
        'IV UFH is started: 80 units/kg bolus (5,760 units) followed by 18 units/kg/hr infusion (1,296 units/hr). The pulmonologist and cardiologist are consulted. The team discusses catheter-directed thrombolysis (CDT) as an option if she deteriorates — it delivers thrombolytic directly to the clot at much lower systemic doses.\n\nLinda is transferred to the ICU for continuous monitoring. She is anxious. "Am I going to die? I was supposed to go home tomorrow."\n\nYou explain: "You have a blood clot in your lungs — a pulmonary embolism. We\'ve started a blood thinner and are watching you closely. The ICU team is going to take excellent care of you."',
      clinicalNote:
        '📊 PE Classification and Management:\n• LOW-RISK PE: Hemodynamically stable, no RV dysfunction → LMWH or DOAC outpatient/short admission\n• SUBMASSIVE PE: Stable BP but RV dysfunction (elevated troponin/BNP, RV dilation on imaging) → IV UFH, ICU monitoring, consider CDT\n• MASSIVE PE: Hemodynamic collapse (SBP < 90 or cardiac arrest) → IV UFH + systemic tPA (if no absolute contraindications)',
      nextSceneId: 'pe-scene-6-end',
    },
    {
      id: 'pe-scene-5-no-anticoag',
      type: 'narrative',
      title: 'Anticoagulation Withheld — Cardiac Arrest',
      timeElapsed: 60,
      narrative:
        'With no anticoagulation, the clot burden continues to obstruct pulmonary flow. Over the next 2 hours, Linda\'s BP progressively drops. She develops acute right heart failure and arrests.\n\nDuring resuscitation, the team administers thrombolytics. "We should have started heparin immediately. The bleeding risk from recent surgery was manageable — the risk from untreated bilateral central PE was not."',
      clinicalNote:
        '⚠️ PE Anticoagulation Is Not Optional: In confirmed PE, anticoagulation must be started unless there is an absolute contraindication. Post-surgical status is a relative contraindication. The thrombus will propagate without anticoagulation, worsening RV failure and risk of death. Notify the surgical team but begin anticoagulation.',
      nextSceneId: 'pe-scene-6-end',
    },
    {
      id: 'pe-scene-5-tpa-too-early',
      type: 'narrative',
      title: 'Systemic tPA — Post-Surgical Hemorrhage',
      timeElapsed: 60,
      narrative:
        'Alteplase 100 mg IV is administered. Within 2 hours, the right knee surgical wound is bleeding heavily and a large knee hematoma forms. Bleeding complications require stopping the tPA infusion early. The orthopedic surgeon calls, alarmed: "She\'s 5 days post-op! This could compromise the implant site!"\n\nThe intensivist reviews: "Systemic tPA within 14 days of surgery is a relative contraindication and within 3 months is near-absolute for elective procedures. We should have started heparin and considered catheter-directed therapy if she deteriorated. The risk-benefit was against systemic lytics here."',
      clinicalNote:
        '⚠️ Thrombolysis Contraindications for PE: Absolute — recent intracranial surgery/trauma, active CNS bleeding, ischemic stroke < 3 months. Major relative — recent major surgery (< 3 months), post-surgical hemorrhage risk. Reserved for MASSIVE PE (cardiac arrest or refractory shock). Submassive PE: heparin first; CDT if deteriorating.',
      nextSceneId: 'pe-scene-6-end',
    },
    {
      id: 'pe-scene-6-end',
      type: 'end',
      title: 'Case Complete — Acute Pulmonary Embolism',
      timeElapsed: 120,
      narrative:
        'Linda is stabilized in the ICU on IV heparin. She is transitioned to oral rivaroxaban after 5 days and discharged on post-hospitalization day 8. She is referred to a thrombosis clinic for ongoing management.\n\nKey Learning Points:\n• Classic PE: sudden dyspnea, pleuritic chest pain, hypoxia, tachycardia — especially in post-surgical patients\n• Wells Score stratifies pre-test probability — high score (≥ 7) means high probability\n• CT-PA is the gold standard diagnostic test\n• Activity restriction is mandatory in suspected PE — no ambulation\n• IV UFH is preferred in submassive/massive PE for reversibility if thrombolysis is needed\n• Systemic tPA: reserved for MASSIVE PE (hemodynamic collapse) only\n• Recent surgery (< 14 days) is a major contraindication to systemic thrombolysis\n• Submassive PE with RV strain: IV heparin, ICU monitoring, consider CDT if deteriorating',
      endType: 'success',
    },
  ],
};
