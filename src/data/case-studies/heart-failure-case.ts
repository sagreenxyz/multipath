import type { CaseStudy } from '../../types/case-study.js';

export const heartFailureCase: CaseStudy = {
  id: 'acute-decompensated-heart-failure',
  title: 'Drowning from Within',
  subtitle: 'Acute Decompensated Heart Failure',
  description:
    'A 66-year-old male with a history of systolic heart failure presents to the medical unit with progressive dyspnea, orthopnea, and bilateral leg swelling over 5 days. As the admitting nurse, you must rapidly assess his fluid status, initiate treatment to relieve congestion, and monitor closely for deterioration.',
  difficulty: 'intermediate',
  specialty: 'Cardiology / Medical-Surgical',
  tags: ['heart failure', 'ADHF', 'pulmonary edema', 'diuresis', 'BNP', 'fluid overload', 'ACE inhibitor', 'ejection fraction'],
  estimatedTime: 30,
  maxScore: 300,
  learningObjectives: [
    { id: 'lo1', description: 'Identify clinical signs and symptoms of acute decompensated heart failure (ADHF)' },
    { id: 'lo2', description: 'Assess and document fluid status using physical examination and laboratory findings' },
    { id: 'lo3', description: 'Safely administer IV diuretics and monitor therapeutic response and adverse effects' },
    { id: 'lo4', description: 'Recognize triggers for heart failure decompensation and implement patient education' },
    { id: 'lo5', description: 'Monitor for acute complications: acute kidney injury, electrolyte disturbances, and hypotension' },
  ],
  patient: {
    name: 'Robert Jankowski',
    age: 66,
    gender: 'male',
    weight: 88,
    height: 176,
    allergies: ['ACE Inhibitors (dry cough — switched to ARB)', 'No other known drug allergies'],
    currentMedications: [
      'Carvedilol 25 mg PO BID',
      'Losartan 100 mg PO daily',
      'Furosemide 80 mg PO daily (reports taking irregularly)',
      'Spironolactone 25 mg PO daily',
      'Atorvastatin 40 mg PO nightly',
      'Aspirin 81 mg PO daily',
    ],
    medicalHistory: [
      'Systolic Heart Failure (HFrEF — EF 30–35% on echocardiogram 6 months ago)',
      'Coronary Artery Disease (s/p MI 5 years ago, 2 stents placed)',
      'Type 2 Diabetes Mellitus',
      'Hypertension',
      'Obstructive Sleep Apnea (non-compliant with CPAP)',
    ],
    chiefComplaint: 'Progressive shortness of breath × 5 days, unable to lie flat, bilateral leg swelling, 10 lb weight gain in 1 week',
    vitals: {
      temperature: 98.4,
      heartRate: 100,
      respiratoryRate: 24,
      bloodPressure: '148/92',
      oxygenSaturation: 90,
      painLevel: 2,
      weight: 88,
    },
    appearance:
      'Overweight male who appears uncomfortable and dyspneic. Sitting upright at 90° and states he cannot breathe lying flat (orthopnea). Speaks in short sentences. JVD present at 45° (approximately 12 cm H₂O). Bilateral crackles at both bases extending to mid-lung fields. S3 gallop on auscultation. Bilateral 3+ pitting edema to the thighs. His wife confirms he gained about 10 pounds over the past week and has been sleeping upright in a recliner.',
    labs: [
      { name: 'BNP', value: '2,840', unit: 'pg/mL', referenceRange: '< 100', abnormal: true, critical: true },
      { name: 'Creatinine', value: '1.6', unit: 'mg/dL', referenceRange: '0.7–1.3', abnormal: true, critical: false },
      { name: 'BUN', value: '42', unit: 'mg/dL', referenceRange: '7–25', abnormal: true, critical: false },
      { name: 'Sodium', value: '133', unit: 'mEq/L', referenceRange: '136–145', abnormal: true, critical: false },
      { name: 'Potassium', value: '4.1', unit: 'mEq/L', referenceRange: '3.5–5.0', abnormal: false, critical: false },
      { name: 'Magnesium', value: '1.8', unit: 'mg/dL', referenceRange: '1.7–2.2', abnormal: false, critical: false },
      { name: 'Hemoglobin', value: '11.4', unit: 'g/dL', referenceRange: '13.5–17.5', abnormal: true, critical: false },
      { name: 'Troponin I', value: '< 0.01', unit: 'ng/mL', referenceRange: '< 0.04', abnormal: false, critical: false },
      { name: 'TSH', value: '1.8', unit: 'mIU/L', referenceRange: '0.4–4.0', abnormal: false, critical: false },
      { name: 'HbA1c', value: '8.2', unit: '%', referenceRange: '< 7.0 (diabetic target)', abnormal: true, critical: false },
    ],
    imaging: [
      {
        type: 'Chest X-Ray',
        description: 'Portable AP on admission',
        findings: 'Cardiomegaly. Bilateral interstitial and alveolar edema with perihilar "bat-wing" pattern. Bilateral small pleural effusions (right > left). Kerley B lines visible. No pneumothorax.',
      },
    ],
  },
  startSceneId: 'hf-scene-1-admission',
  scenes: [
    {
      id: 'hf-scene-1-admission',
      type: 'narrative',
      title: 'Admission — A Known Patient Returns',
      timeElapsed: 0,
      narrative:
        'It is 18:00 on a Tuesday evening. Robert Jankowski, a 66-year-old man with a known history of systolic heart failure, arrives to your medical unit from the ED. His wife wheels him in and he is leaning forward in the wheelchair, elbows on knees, in the classic "tripod position."\n\n"He couldn\'t breathe lying down at all last night," his wife tells you. "He slept in the recliner. He\'s been gaining weight all week and his legs are terrible." She hands you a log — he has gained 9.8 lbs over 7 days. "And he ran out of his Lasix last week and didn\'t refill it."\n\nRobert manages: "I just... can\'t get air... when I lie down." His SpO₂ reads 90% on room air.',
      clinicalNote:
        '🫀 ADHF Key Assessment Points:\n• Weight gain: >2 lbs/day or >5 lbs/week → fluid accumulation alarm\n• Orthopnea: inability to lie flat (ask: "how many pillows do you sleep on?")\n• PND (paroxysmal nocturnal dyspnea): awakening breathless at night\n• JVD: elevated > 8 cm H₂O suggests elevated right heart pressures\n• S3 gallop: pathognomonic for volume overload in HF\n• BNP > 400 pg/mL strongly supports HF decompensation',
      nextSceneId: 'hf-scene-2-oxygen-positioning',
    },
    {
      id: 'hf-scene-2-oxygen-positioning',
      type: 'decision',
      title: 'Immediate Comfort and Oxygenation',
      timeElapsed: 5,
      narrative:
        'Robert is in obvious respiratory distress with SpO₂ 90%. He cannot tolerate lying flat. He is seated upright.\n\nWhat is your immediate priority action to help him?',
      choices: [
        {
          id: 'hf-c2a',
          text: 'Maintain high Fowler\'s position (90°) and apply supplemental oxygen via nasal cannula at 4L; reassess SpO₂ in 5 minutes',
          nextSceneId: 'hf-scene-3-diuresis-decision',
          points: 50,
          isCorrect: true,
          feedback: '✅ Correct! High Fowler\'s position (sitting upright at 90°) reduces venous return to the heart and shifts fluid away from the lungs, immediately improving respiratory mechanics. Supplemental oxygen treats hypoxemia. These simple positioning and oxygenation measures provide rapid symptom relief.',
          rationale: 'In acute pulmonary edema, positioning is an immediate therapeutic intervention. Upright positioning reduces preload (venous return), decreases pulmonary capillary wedge pressure, and improves diaphragm mechanics. Supplemental oxygen targets SpO₂ ≥ 94% in HF (unlike COPD, where 88–92% is targeted).',
        },
        {
          id: 'hf-c2b',
          text: 'Lay him supine to do a complete assessment — you can\'t do a proper physical exam with him sitting',
          nextSceneId: 'hf-scene-3-supine',
          points: 0,
          isCorrect: false,
          feedback: '❌ Do NOT lay a dyspneic heart failure patient supine. Orthopnea means lying flat worsens symptoms by increasing venous return and pulmonary congestion. A head-to-toe assessment can be performed with the patient sitting upright. Patient comfort and oxygenation take priority over positioning for assessment convenience.',
          rationale: 'Lying supine in acute decompensated heart failure can precipitate acute pulmonary edema by significantly increasing venous return to the already-overloaded right ventricle. Orthopnea is both a symptom and a clinical sign. Maintain upright positioning throughout the initial assessment.',
        },
        {
          id: 'hf-c2c',
          text: 'Apply a non-rebreather mask at 15L O₂ immediately — SpO₂ of 90% is critically low',
          nextSceneId: 'hf-scene-3-diuresis-decision',
          points: 25,
          isCorrect: false,
          feedback: '⚠️ SpO₂ of 90% needs treatment but a non-rebreather mask at 15L is excessive first-line therapy for a conscious, breathing patient. Starting at 4L nasal cannula is appropriate. Escalate to a higher FiO₂ device if SpO₂ does not respond. Non-rebreather masks also make it difficult to speak and eat.',
          rationale: 'Oxygen therapy should be titrated to response. Starting at 4L NC, reassessing, and escalating (to simple face mask, 35% Venturi, high-flow) is the titratable approach. A non-rebreather at 15L is typically reserved for impending respiratory failure or SpO₂ below ~85% with signs of severe distress.',
        },
      ],
    },
    {
      id: 'hf-scene-3-supine',
      type: 'narrative',
      title: 'Supine Positioning — Acute Pulmonary Edema',
      timeElapsed: 8,
      narrative:
        'You lower Robert to supine position for assessment. Within 90 seconds, his SpO₂ drops to 84%, his RR increases to 36, and he becomes increasingly agitated and diaphoretic. He manages: "Sit me up... please..."\n\nYou immediately return him to high Fowler\'s position. It takes several minutes for him to stabilize. The physician is concerned: "Why was he placed supine? These patients should never be forced flat. Let\'s get him upright and start diuresis."',
      clinicalNote:
        '⚠️ Orthopnea and Acute Pulmonary Edema: In heart failure, lying supine redistributes blood from the extremities to the pulmonary circulation, increasing pulmonary capillary wedge pressure and precipitating flash pulmonary edema. ALWAYS maintain at least 30–45° head elevation; 90° (high Fowler\'s) is preferred in acute decompensation.',
      nextSceneId: 'hf-scene-3-diuresis-decision',
    },
    {
      id: 'hf-scene-3-diuresis-decision',
      type: 'decision',
      title: 'Diuresis — Initiating Treatment',
      timeElapsed: 20,
      narrative:
        'Robert is stabilized at 94% SpO₂ on 4L NC in high Fowler\'s. The physician reviews his labs and orders IV furosemide (Lasix). He normally takes 80 mg PO daily but has been non-compliant for the past week. He has 10 lbs of excess fluid.\n\nThe physician asks: "What IV dose of furosemide should we start with, and how will you know it\'s working?"',
      choices: [
        {
          id: 'hf-c3a',
          text: 'Furosemide IV at 1–2× his oral dose (80–160 mg IV); monitor urine output > 200 mL/hr, weight, electrolytes, creatinine, and symptoms',
          nextSceneId: 'hf-scene-4-monitoring',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! IV furosemide bioavailability is roughly twice that of oral, so the IV dose should be at least equal to his oral dose (80 mg). In acute decompensation, starting at 1–2× the oral dose is evidence-based (DOSE trial). Monitoring response via urine output, daily weights, and electrolytes is essential.',
          rationale: 'The DOSE trial showed that high-dose furosemide (2.5× oral dose) produced better decongestion without worsening renal function compared to low-dose. IV furosemide has better bioavailability in fluid-overloaded states. Target urine output of 100–200 mL/hr in the first 6 hours. Monitor K⁺, Mg²⁺, creatinine.',
        },
        {
          id: 'hf-c3b',
          text: 'Start furosemide 20 mg IV — use a conservative dose to protect his kidneys since creatinine is already elevated',
          nextSceneId: 'hf-scene-4-under-diuresis',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ Under-dosing diuretics in ADHF is a common error. 20 mg IV is insufficient for a patient on chronic 80 mg oral furosemide — he likely has significant diuretic resistance. The congestion itself (venous hypertension, reduced renal perfusion) is worsening his creatinine. Decongesting the kidneys improves renal function in most ADHF patients.',
          rationale: 'In chronic diuretic users with ADHF, the IV dose should be at least equal to their oral dose, often 1.5–2.5× to overcome diuretic tolerance and fluid overload. The cardiorenal syndrome in ADHF is primarily driven by venous congestion — effective diuresis typically improves, not worsens, renal function.',
        },
        {
          id: 'hf-c3c',
          text: 'Hold furosemide — his creatinine is 1.6 and diuretics will worsen renal function; consult nephrology first',
          nextSceneId: 'hf-scene-4-no-diuresis',
          points: 0,
          isCorrect: false,
          feedback: '❌ Withholding diuretics in symptomatic ADHF is inappropriate. His mild creatinine elevation (1.6) is likely due to reduced renal perfusion from low cardiac output and venous congestion. IV diuresis relieves the congestion and often improves renal function. Continuing congestion is more harmful than the mild AKI risk from diuresis.',
          rationale: 'Refusing diuretics due to mild renal impairment in ADHF leads to worsening congestion, pulmonary edema, and ultimately more severe AKI. The current renal impairment in ADHF is cardiorenal syndrome — primarily venous congestion-driven, not volume depletion. Treat the congestion to improve the kidneys.',
        },
      ],
    },
    {
      id: 'hf-scene-4-monitoring',
      type: 'narrative',
      title: 'Diuresis Response and Monitoring',
      timeElapsed: 60,
      narrative:
        'Furosemide 160 mg IV is administered. Two hours later:\n• Urine output: 890 mL — excellent diuretic response ✅\n• SpO₂: 96% on 4L NC (improved from 90%) ✅\n• RR: 18 (improved from 24) ✅\n• BP: 134/86 ✅\n• Weight: 87.0 kg (1 kg = ~1L fluid removed) ✅\n• Repeat K⁺: 3.3 mEq/L — mildly hypokalemic ⚠️\n\nThe physician orders: Potassium chloride 40 mEq IV over 4 hours.\n\nRobert says: "I\'ve been urinating so much... is this normal?" He appears much more comfortable and is able to lower his head of bed to 45°.',
      clinicalNote:
        '📊 Monitoring During Diuresis in ADHF:\n• Urine output: target 100–200 mL/hr initially\n• Daily weight: goal 0.5–1 kg/day weight loss until at dry weight\n• Electrolytes (K⁺, Mg²⁺): hypokalemia is common, causes arrhythmias\n• Creatinine: modest rise (<0.3 mg/dL) is acceptable with effective decongestion\n• BP: watch for hypotension, especially with added vasodilators\n• Symptoms: dyspnea, orthopnea, JVD, edema should improve',
      nextSceneId: 'hf-scene-5-education-decision',
    },
    {
      id: 'hf-scene-4-under-diuresis',
      type: 'narrative',
      title: 'Insufficient Diuresis — Ongoing Congestion',
      timeElapsed: 60,
      narrative:
        'Furosemide 20 mg IV is given. Two hours later, urine output is only 80 mL. His SpO₂ remains 90–91%, RR is still 22. He is not responding.\n\nThe physician reviews: "His oral dose was 80 mg/day. At 20 mg IV, we\'re giving him a quarter of his usual dose. He needs at least 80–160 mg IV to overcome his tolerance. We\'re wasting time while he\'s still congested."',
      clinicalNote:
        '⚠️ Diuretic Resistance in Heart Failure: Patients on chronic loop diuretics develop tolerance. Contributing factors: post-diuretic sodium retention ("braking phenomenon"), intestinal edema reducing oral absorption, and reduced renal blood flow. IV administration and higher doses (1–2.5× oral dose) overcome resistance.',
      nextSceneId: 'hf-scene-5-education-decision',
    },
    {
      id: 'hf-scene-4-no-diuresis',
      type: 'narrative',
      title: 'Withholding Diuretics — Worsening Congestion',
      timeElapsed: 60,
      narrative:
        'Diuretics are held pending nephrology consult. Over the next 3 hours, Robert\'s SpO₂ drops to 87% and his RR climbs to 28. He is becoming increasingly distressed.\n\nThe nephrologist calls back: "He needs diuresis now. The elevated creatinine is from venous congestion and poor cardiac output — it\'s cardiorenal syndrome. Diuresis will help, not hurt, his kidneys. Give furosemide IV immediately."',
      clinicalNote:
        '📚 Cardiorenal Syndrome in ADHF: Elevated creatinine in ADHF is usually due to reduced cardiac output and elevated venous pressure reducing renal perfusion (pre-renal AKI + congestion-mediated injury). Effective decongestion with IV diuretics improves renal function in most cases. Withholding diuretics perpetuates the cycle.',
      nextSceneId: 'hf-scene-5-education-decision',
    },
    {
      id: 'hf-scene-5-education-decision',
      type: 'decision',
      title: 'Discharge Education — Preventing Readmission',
      timeElapsed: 120,
      narrative:
        'Robert has responded well to treatment over 3 days. He has lost 4.8 kg (10.5 lbs) of fluid. His symptoms have resolved. The team is planning for discharge.\n\nHis wife tells you: "This is his second admission in 3 months. He ran out of his Lasix and didn\'t refill it. What can we do to stop this from happening again?"\n\nWhat is the MOST important discharge education priority for Robert and his wife?',
      choices: [
        {
          id: 'hf-c5a',
          text: 'Daily weight monitoring with action plan: call physician if > 2 lbs gain in one day or > 5 lbs in one week; medication adherence (especially furosemide); fluid restriction; and sodium restriction',
          nextSceneId: 'hf-scene-6-end',
          points: 60,
          isCorrect: true,
          feedback: '✅ Excellent! The "HF Daily Weight Diary with Action Plan" is the single most evidence-based intervention to prevent HF readmission. Daily weights detect fluid retention before symptoms develop. Medication adherence (especially diuretics) is crucial. Sodium and fluid restriction reduce congestion between visits.',
          rationale: 'HF readmission prevention requires a comprehensive approach: daily weights (≤ 2 lbs/day, ≤ 5 lbs/week thresholds), medication adherence (diuretics, beta-blockers, RAAS agents), sodium restriction (< 2g/day), fluid restriction (< 1.5–2L/day in advanced HF), and regular outpatient follow-up within 7 days of discharge.',
        },
        {
          id: 'hf-c5b',
          text: 'Explain that he needs to restrict fluids to 1 liter per day and avoid all sodium',
          nextSceneId: 'hf-scene-6-end',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Fluid restriction targets are typically 1.5–2L/day (not 1 liter, which is excessively restrictive). Sodium restriction is important but blanket "avoid all sodium" is vague and hard to follow — specific guidance (< 2g/day or < 2000 mg/day) with practical examples is more effective. Missing the critical daily weight monitoring piece is a significant gap.',
          rationale: 'While fluid and sodium restriction are important, the most evidence-based intervention for HF readmission prevention is the daily weight monitoring with a clear action plan. Without weight monitoring, patients don\'t recognize early decompensation until symptoms are severe. The weight threshold triggers early intervention.',
        },
        {
          id: 'hf-c5c',
          text: 'Explain the importance of taking his medications every day and schedule a follow-up appointment in 2 weeks',
          nextSceneId: 'hf-scene-6-end',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Medication adherence is essential, but follow-up at 2 weeks is too late for high-risk HF patients. Guidelines recommend follow-up within 7 days of discharge. Medication adherence alone, without daily weight monitoring and a clear action plan, misses the most critical prevention strategy.',
          rationale: 'Post-HF discharge follow-up within 7 days (not 2 weeks) significantly reduces 30-day readmission rates. Medication adherence is necessary but not sufficient — daily weight monitoring, sodium/fluid restriction, and a clear escalation plan are equally important components of the HF self-management program.',
        },
      ],
    },
    {
      id: 'hf-scene-6-end',
      type: 'end',
      title: 'Case Complete — Acute Decompensated Heart Failure',
      timeElapsed: 180,
      narrative:
        'Robert is discharged on day 4 with comprehensive HF education, a daily weight diary with action thresholds, a confirmed medication supply, and follow-up scheduled in 5 days with his cardiologist.\n\nKey Learning Points:\n• Position HF patients in high Fowler\'s — never force them supine\n• IV furosemide dose should be 1–2× the oral dose to overcome tolerance\n• Monitor urine output, weight, electrolytes, and creatinine closely during diuresis\n• Cardiorenal syndrome in ADHF is usually from congestion — treat with diuresis\n• Hypokalemia is common with loop diuretics — replace K⁺ and Mg²⁺\n• Daily weight monitoring with action plan is the most evidence-based readmission prevention strategy\n• Medication nonadherence (especially diuretics) is a leading trigger for decompensation',
      endType: 'success',
    },
  ],
};
