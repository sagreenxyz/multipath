import type { CaseStudy } from '../../types/case-study.js';

export const ckdCase: CaseStudy = {
  id: 'ckd-progressive-management',
  title: 'The Long Road',
  subtitle: 'Managing Progressive Chronic Kidney Disease',
  description:
    'A 58-year-old woman with Type 2 Diabetes and hypertension is admitted to the medical unit with worsening fatigue, leg swelling, and decreased urine output. Her CKD has been progressing for years. Tonight, her labs tell a dangerous story. You are the admitting nurse — every decision matters.',
  difficulty: 'advanced',
  specialty: 'Medical-Surgical / Nephrology',
  tags: ['CKD', 'chronic kidney disease', 'hyperkalemia', 'fluid overload', 'dialysis', 'renal diet', 'diabetes', 'patient education'],
  estimatedTime: 45,
  maxScore: 500,
  learningObjectives: [
    { id: 'lo1', description: 'Recognize clinical and laboratory indicators of CKD progression and acute decompensation' },
    { id: 'lo2', description: 'Identify and safely manage life-threatening hyperkalemia in the CKD patient' },
    { id: 'lo3', description: 'Assess and manage fluid overload including appropriate fluid restriction and diuretic therapy' },
    { id: 'lo4', description: 'Apply principles of nephrotoxin avoidance and renal dose adjustments for medications' },
    { id: 'lo5', description: 'Deliver effective patient education regarding renal diet, fluid limits, and CKD self-management' },
    { id: 'lo6', description: 'Communicate using SBAR to escalate urgent changes in a CKD patient\'s clinical status' },
    { id: 'lo7', description: 'Describe the indications, access options, and nursing care for renal replacement therapy' },
  ],
  patient: {
    name: 'Margaret Chen',
    age: 58,
    gender: 'female',
    weight: 74,
    height: 162,
    allergies: ['Sulfa drugs (rash)', 'NSAIDs (worsening kidney function)'],
    currentMedications: [
      'Metformin 500 mg PO BID (recent dose reduction)',
      'Lisinopril 10 mg PO daily',
      'Amlodipine 5 mg PO daily',
      'Furosemide 40 mg PO daily',
      'Sevelamer carbonate 800 mg PO TID with meals (phosphate binder)',
      'Erythropoietin alfa 4,000 units subcutaneous weekly (renal anemia)',
      'Ferrous sulfate 325 mg PO daily',
      'Calcitriol 0.25 mcg PO daily',
    ],
    medicalHistory: [
      'Chronic Kidney Disease Stage 4 (GFR 22 mL/min/1.73m² — 6 months ago)',
      'Type 2 Diabetes Mellitus (diagnosed 15 years ago)',
      'Hypertension (diagnosed 18 years ago)',
      'Anemia of chronic kidney disease',
      'Secondary hyperparathyroidism',
      'Peripheral neuropathy',
    ],
    chiefComplaint: 'Progressive fatigue, bilateral leg swelling × 5 days, decreased urine output × 2 days, and nausea',
    vitals: {
      temperature: 98.2,
      heartRate: 94,
      respiratoryRate: 20,
      bloodPressure: '168/96',
      oxygenSaturation: 95,
      painLevel: 2,
      weight: 74,
      bloodGlucose: 188,
    },
    appearance:
      'Middle-aged woman appearing tired and slightly pale. Alert and oriented ×3 but visibly fatigued. Bilateral 3+ pitting edema to the knees. Skin is sallow with slight uremic frost on forearms. Lungs with fine crackles bilaterally at bases. JVD present at 45°. Husband present at bedside.',
    labs: [
      { name: 'BUN', value: '78', unit: 'mg/dL', referenceRange: '7–25', abnormal: true, critical: false },
      { name: 'Creatinine', value: '5.8', unit: 'mg/dL', referenceRange: '0.6–1.1', abnormal: true, critical: false },
      { name: 'eGFR', value: '9', unit: 'mL/min/1.73m²', referenceRange: '≥60', abnormal: true, critical: true },
      { name: 'Potassium', value: '6.4', unit: 'mEq/L', referenceRange: '3.5–5.0', abnormal: true, critical: true },
      { name: 'Sodium', value: '132', unit: 'mEq/L', referenceRange: '136–145', abnormal: true, critical: false },
      { name: 'Bicarbonate', value: '14', unit: 'mEq/L', referenceRange: '22–29', abnormal: true, critical: false },
      { name: 'Phosphorus', value: '6.8', unit: 'mg/dL', referenceRange: '2.5–4.5', abnormal: true, critical: false },
      { name: 'Calcium', value: '7.9', unit: 'mg/dL', referenceRange: '8.5–10.5', abnormal: true, critical: false },
      { name: 'Hemoglobin', value: '8.2', unit: 'g/dL', referenceRange: '12.0–16.0', abnormal: true, critical: false },
      { name: 'WBC', value: '8.1', unit: 'K/µL', referenceRange: '4.5–11.0', abnormal: false, critical: false },
      { name: 'BNP', value: '1,420', unit: 'pg/mL', referenceRange: '<100', abnormal: true, critical: true },
      { name: 'HbA1c', value: '8.9', unit: '%', referenceRange: '<7.0 (diabetic target)', abnormal: true, critical: false },
    ],
  },
  startSceneId: 'scene-1-admission',
  scenes: [
    // ─── STAGE 1: ADMISSION & INITIAL ASSESSMENT ───────────────────────────
    {
      id: 'scene-1-admission',
      type: 'narrative',
      title: 'Stage 1 — Admission: A Familiar Face with a Concerning New Story',
      timeElapsed: 0,
      narrative:
        'It is 1930 on a Thursday evening. You are the admitting nurse on the nephrology/medical unit when Margaret Chen, a 58-year-old woman with a long history of CKD, arrives from the emergency department.\n\nMrs. Chen is well-known to your unit — she has been seen in the outpatient nephrology clinic every 3 months for the past two years as her kidney function has steadily declined. But tonight is different. Her husband, David, helps her into the room. She shuffles slowly, her legs swollen and heavy. "I just can\'t do anything anymore," she tells you quietly. "I\'m exhausted all the time, and my legs are so swollen I can barely get my shoes on."\n\nHer ED nurse calls with a quick verbal report: "Potassium 6.4, creatinine 5.8, BNP over 1,400. She\'s been on furosemide but says she hasn\'t been able to take it much because it makes her \'run to the bathroom.\'\n\nYou review her chart and note her last eGFR six months ago was 22 mL/min/1.73m². Tonight\'s result is 9.',
      clinicalNote:
        '🩺 Clinical Context: CKD Stage 5 is defined as eGFR < 15 mL/min/1.73m². Mrs. Chen has progressed from Stage 4 to Stage 5 since her last visit. This rapid decline combined with fluid overload, hyperkalemia, and metabolic acidosis represents acute decompensation of end-stage renal disease (ESRD) — a nephrology emergency.',
      nextSceneId: 'scene-2-assessment-priorities',
    },
    {
      id: 'scene-2-assessment-priorities',
      type: 'decision',
      title: 'Prioritizing Your Initial Assessment',
      timeElapsed: 5,
      narrative:
        'Mrs. Chen is now in her room. You review her critical lab values:\n• K⁺ 6.4 mEq/L (critical high) — risk of life-threatening arrhythmia\n• eGFR 9 mL/min/1.73m² — CKD Stage 5 (kidney failure)\n• BNP 1,420 pg/mL — significant fluid overload\n• Bicarbonate 14 mEq/L — severe metabolic acidosis\n• Creatinine 5.8 mg/dL — acute-on-chronic kidney injury\n\nShe is alert and talking with you, but she looks pale and tired. Her lungs have bibasilar crackles. Her legs have 3+ pitting edema. Her BP is 168/96.\n\nWhat is your highest priority assessment at this moment?',
      choices: [
        {
          id: 'c2a',
          text: 'Place her on continuous cardiac monitoring immediately and obtain a 12-lead ECG',
          nextSceneId: 'scene-3-ecg-correct',
          points: 80,
          isCorrect: true,
          feedback: '✅ Excellent priority-setting! With a potassium of 6.4 mEq/L, Mrs. Chen is at significant risk for fatal cardiac arrhythmias including ventricular fibrillation. Continuous monitoring and ECG are your first priority — you need to detect hyperkalemia-induced cardiac changes immediately.',
          rationale: 'Severe hyperkalemia (K⁺ ≥ 6.0 mEq/L) can cause peaked T-waves, prolonged PR interval, widened QRS, sine wave pattern, and ultimately ventricular fibrillation. Cardiac monitoring must be the first action before anything else can distract your attention.',
        },
        {
          id: 'c2b',
          text: 'Perform a complete head-to-toe assessment and document all findings systematically',
          nextSceneId: 'scene-3-assessment-delay',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Systematic assessment is important, but with a critically high potassium, your first action must be cardiac monitoring. The risk of lethal arrhythmia cannot wait for a complete head-to-toe assessment.',
          rationale: 'While a systematic assessment is always important, life-threatening problems demand immediate intervention. K⁺ of 6.4 mEq/L can cause cardiac arrest within minutes. Cardiac monitoring and ECG must come first.',
        },
        {
          id: 'c2c',
          text: 'Call the nephrologist immediately to report the lab values and get orders',
          nextSceneId: 'scene-3-call-without-monitor',
          points: 30,
          isCorrect: false,
          feedback: '⚠️ Notifying the physician is essential, but you should place her on the cardiac monitor first — that takes 60 seconds and could save her life while you\'re on the phone. Don\'t leave a patient with K⁺ 6.4 unmonitored.',
          rationale: 'Independent nursing actions like placing a patient on the cardiac monitor should be done simultaneously with or even before physician notification when there is an immediate life threat. You can call the physician while the monitor is being placed.',
        },
        {
          id: 'c2d',
          text: 'Obtain IV access and start a maintenance IV fluid to correct her dehydration',
          nextSceneId: 'scene-3-fluid-error',
          points: -20,
          isCorrect: false,
          feedback: '❌ Do not start IV fluids without physician orders in this patient. Her BNP of 1,420 pg/mL and bibasilar crackles indicate significant fluid overload — adding more IV fluid could worsen pulmonary edema and heart failure. CKD patients do not always need IV fluids and may in fact need fluid removal.',
          rationale: 'Clinicians sometimes reflexively order IV fluids for patients with kidney disease thinking they are "dehydrated," but Mrs. Chen\'s presentation (edema, crackles, elevated BNP) shows she is fluid-overloaded. IV fluids without clear indication could be life-threatening in this context.',
        },
      ],
    },
    // ─── STAGE 2: HYPERKALEMIA ─────────────────────────────────────────────
    {
      id: 'scene-3-ecg-correct',
      type: 'narrative',
      title: 'Stage 2 — Hyperkalemia: The ECG Tells a Story',
      timeElapsed: 10,
      vitalsUpdate: { heartRate: 90, bloodPressure: '170/98' },
      narrative:
        'You place Mrs. Chen on a continuous cardiac monitor and obtain a 12-lead ECG. The rhythm shows sinus rhythm at 90 bpm with notably peaked, "tent-shaped" T-waves in V2–V5, consistent with hyperkalemia. The QRS duration is 114 ms — slightly prolonged but not yet critically wide.\n\nThe bedside monitor alarms for a brief 5-second run of wide-complex beats before returning to sinus rhythm. You note the change immediately.\n\nYou call Dr. Patel, the on-call nephrologist. Using SBAR:\n\n"Dr. Patel, this is the nurse calling about Margaret Chen in room 412. She was just admitted. Her situation is that her potassium is 6.4 mEq/L and her ECG shows peaked T-waves with a brief run of wide-complex beats. I assess this as dangerous hyperkalemia with cardiac involvement. I recommend we treat emergently. Do I have your agreement?"\n\nDr. Patel agrees and says he\'ll be there in 15 minutes. He asks you what orders you\'ll need.',
      clinicalNote:
        '⚡ ECG Changes in Hyperkalemia (in order of progression):\n1. Peaked T-waves (K⁺ 5.5–6.5)\n2. Prolonged PR interval (K⁺ 6.0–7.0)\n3. Widened QRS (K⁺ 7.0–8.0)\n4. Sine wave pattern (K⁺ >8.0)\n5. Ventricular fibrillation / asystole\n\nMrs. Chen is at steps 1–2. Immediate treatment is required.',
      nextSceneId: 'scene-4-hyperkalemia-treatment',
    },
    {
      id: 'scene-3-assessment-delay',
      type: 'narrative',
      title: 'Stage 2 — Hyperkalemia: Catching Up',
      timeElapsed: 15,
      narrative:
        'During your head-to-toe assessment, the bedside tech calls you into the room urgently — while attempting to place the cardiac monitor, Mrs. Chen\'s telemetry shows a 10-second run of wide-complex ventricular beats. She is conscious and pale but felt "her heart flutter."\n\nYou place her on the monitor immediately. The ECG shows peaked T-waves and a QRS of 118 ms. You call Dr. Patel emergently.',
      clinicalNote:
        '⚠️ Lesson Learned: When potassium is critically elevated, cardiac monitoring is always the first step. The delay in this case led to a near-miss arrhythmia event. In future cases, prioritize life threats over systematic assessment.',
      nextSceneId: 'scene-4-hyperkalemia-treatment',
    },
    {
      id: 'scene-3-call-without-monitor',
      type: 'narrative',
      title: 'Stage 2 — Hyperkalemia: A Concurrent Emergency',
      timeElapsed: 12,
      narrative:
        'While you are on the phone with Dr. Patel, the patient call light activates. Mrs. Chen\'s husband shouts from the room. You rush in to find Mrs. Chen with palpitations and feeling dizzy. Her monitor (now placed by the tech) shows wide-complex beats.\n\nYou ask the tech to stay at the bedside and manage the call with Dr. Patel simultaneously. Dr. Patel orders emergent hyperkalemia treatment. The cardiac monitor resolves back to sinus rhythm after a tense 30 seconds.',
      clinicalNote:
        '⚠️ Lesson Learned: Placing the cardiac monitor before making the call would have given you real-time cardiac data to report to the physician and kept you at the bedside. Multi-tasking is possible — but the monitor should always go on first.',
      nextSceneId: 'scene-4-hyperkalemia-treatment',
    },
    {
      id: 'scene-3-fluid-error',
      type: 'narrative',
      title: 'Stage 2 — An Important Correction',
      timeElapsed: 8,
      vitalsUpdate: { oxygenSaturation: 93, respiratoryRate: 22 },
      narrative:
        'As you reach for the IV tubing, your charge nurse enters the room. She reviews the chart and immediately stops you. "Margaret is fluid-overloaded — look at her BNP and her lungs. We absolutely cannot start fluids without orders. And we need her on the cardiac monitor right now with that potassium."\n\nYou defer and place the cardiac monitor immediately. The ECG shows peaked T-waves — consistent with hyperkalemia. You call Dr. Patel and report the situation. He thanks you for the timely call and confirms: no IV fluids. He will be there in 15 minutes.',
      clinicalNote:
        '❌→✅ Corrected: In CKD/ESRD patients with fluid overload, unsolicited IV fluids are contraindicated. Always assess for fluid status (BNP, edema, JVD, lung sounds, daily weights) before infusing any fluids. The cardiac monitor should have been placed first.',
      nextSceneId: 'scene-4-hyperkalemia-treatment',
    },
    {
      id: 'scene-4-hyperkalemia-treatment',
      type: 'decision',
      title: 'Hyperkalemia Management: Anticipating Orders',
      timeElapsed: 18,
      narrative:
        'Dr. Patel arrives and reviews the ECG and labs. "Margaret, we need to protect your heart and bring that potassium down." He turns to you: "I\'ll write the orders, but I want you to know what I\'m ordering and why — because you\'ll be monitoring her response."\n\nDr. Patel orders:\n1. Calcium gluconate 1 g IV over 10 minutes (STAT)\n2. Regular insulin 10 units IV + Dextrose 50% (D50) 50 mL IV\n3. Sodium bicarbonate 50 mEq IV over 5 minutes\n4. Sodium polystyrene sulfonate (Kayexalate) 30 g PO\n5. Hold furosemide — nephrology to re-assess diuretic strategy\n\nAs you prepare to administer these medications, Mrs. Chen\'s husband asks: "Are all these medicines safe? She\'s allergic to sulfa — is any of this related?"',
      choices: [
        {
          id: 'c4a',
          text: 'Reassure him that none of these medications are sulfa-based, then explain the purpose of each medication before administration',
          nextSceneId: 'scene-5-treatment-given',
          points: 70,
          isCorrect: true,
          feedback: '✅ Excellent! You correctly confirm the medications are safe regarding her allergy, AND you provide therapeutic education simultaneously. Involving family in medication education improves adherence and reduces anxiety.',
          rationale: 'Calcium gluconate, insulin/dextrose, sodium bicarbonate, and Kayexalate are not sulfa-based. Explaining each: (1) calcium stabilizes cardiac membrane, (2) insulin shifts K⁺ into cells, (3) bicarb alkalizes serum driving K⁺ intracellularly, (4) Kayexalate removes K⁺ from the GI tract. This is therapeutic communication combined with allergy verification.',
        },
        {
          id: 'c4b',
          text: 'Administer all medications first (speed is critical), then explain to the family afterward',
          nextSceneId: 'scene-5-treatment-given',
          points: 30,
          isCorrect: false,
          feedback: '⚠️ While urgency is real, you have time to give a 30-second explanation. Rushing past a family member asking a reasonable allergy question can undermine trust and may cause the patient to refuse treatment. A brief explanation takes seconds.',
          rationale: 'Patient and family education is a core nursing standard. In an emergency, you can give brief, clear explanations ("These are safe — none are sulfa drugs. I\'ll explain more once they\'re running.") while preparing the medications.',
        },
        {
          id: 'c4c',
          text: 'Call the pharmacist to verify the allergy interaction before giving any medications',
          nextSceneId: 'scene-5-treatment-given',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ In a hyperkalemia emergency with cardiac changes, delays are dangerous. A pharmacist call is appropriate for complex drug-drug interactions, but a basic allergy check against non-sulfa medications is a nursing competency. You know these drugs are not sulfa-based.',
          rationale: 'Cardiac membrane stabilization with calcium gluconate must happen urgently when ECG changes are present. Delaying to call pharmacy would be inappropriate here. Know your emergency medications.',
        },
      ],
    },
    {
      id: 'scene-5-treatment-given',
      type: 'narrative',
      title: 'Treatment in Progress: Monitoring the Response',
      timeElapsed: 30,
      vitalsUpdate: { heartRate: 86, bloodPressure: '162/92', oxygenSaturation: 95 },
      newLabs: [
        { name: 'Potassium (repeat)', value: '5.6', unit: 'mEq/L', referenceRange: '3.5–5.0', abnormal: true, critical: false },
        { name: 'Blood Glucose (repeat)', value: '124', unit: 'mg/dL', referenceRange: '70–100', abnormal: true, critical: false },
      ],
      narrative:
        'Forty minutes have passed. You administered all medications as ordered and monitored Mrs. Chen closely. The cardiac monitor now shows sinus rhythm at 86 bpm with improved (though still mildly peaked) T-waves. The wide-complex beats have resolved.\n\nRepeat labs are back: potassium is now 5.6 mEq/L — still elevated, but significantly improved. Blood glucose dropped to 124 mg/dL after insulin administration.\n\nDr. Patel reviews the repeat labs and nods. "Good response. The insulin and bicarb shifted potassium into the cells — this is temporary. We still need to remove potassium from the body. And we need to address her fluid status. She\'s clearly in Stage 5 CKD now — we need to have the dialysis conversation."\n\nHe asks you to monitor her glucose every 30 minutes for the next 2 hours.',
      clinicalNote:
        '🔬 Mechanism Review — Hyperkalemia Treatment:\n• Calcium gluconate: Stabilizes cardiac cell membrane (does NOT lower K⁺) — acts in 1–3 minutes, lasts 30–60 min\n• Insulin + D50: Shifts K⁺ into cells — lowers K⁺ by ~0.5–1.5 mEq/L within 30 min\n• Sodium bicarbonate: Shifts K⁺ intracellularly — less reliable in ESRD\n• Kayexalate: Exchanges Na⁺ for K⁺ in GI tract — REMOVES K⁺ from body — onset 1–2 hours\n\n⚠️ Insulin causes hypoglycemia risk: Monitor glucose q30 min × 2 hours post-insulin.',
      nextSceneId: 'scene-6-fluid-overload',
    },
    // ─── STAGE 3: FLUID OVERLOAD ───────────────────────────────────────────
    {
      id: 'scene-6-fluid-overload',
      type: 'decision',
      title: 'Stage 3 — Fluid Overload: The Weight of It All',
      timeElapsed: 45,
      narrative:
        'Dr. Patel reviews Mrs. Chen\'s fluid status. "Her BNP is 1,420 — that\'s heart strain from fluid. Her lungs are wet, she has 3+ edema, JVD is present. Her kidney can\'t remove fluid effectively anymore. We need to make a decision about diuresis."\n\nHe writes: "Furosemide 80 mg IV push — monitor urine output. If < 200 mL in 2 hours, call me."\n\nMrs. Chen looks at you and whispers, "I stopped taking my water pill because I was running to the bathroom every hour at work. I didn\'t think it was such a big deal." She looks embarrassed.\n\nHow do you respond?',
      choices: [
        {
          id: 'c6a',
          text: 'Acknowledge her concerns without judgment, explain why the diuretic is essential in CKD, and collaboratively problem-solve barriers to adherence',
          nextSceneId: 'scene-7-medication-education',
          points: 70,
          isCorrect: true,
          feedback: '✅ This is the gold standard therapeutic response. Non-adherence is almost always driven by real barriers — side effects, inconvenience, work, cost. Shaming does not improve adherence; problem-solving does. You built trust, which is essential for the difficult conversations ahead.',
          rationale: 'Furosemide-related urinary urgency/frequency is a real barrier to adherence, especially for working adults. Non-judgmental communication, education about the consequences of untreated fluid retention, and practical solutions (timing the dose, using the bathroom before leaving home) dramatically improve outcomes.',
        },
        {
          id: 'c6b',
          text: 'Explain that skipping diuretics was very dangerous and she must take them exactly as prescribed going forward',
          nextSceneId: 'scene-7-medication-education',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ While accurate, this approach is judgmental and unlikely to change behavior. The patient already looks embarrassed. A lecture-style response increases shame and actually worsens non-adherence. Explore barriers first.',
          rationale: 'Research consistently shows that shame-based communication reduces patient engagement. Motivational interviewing techniques (open-ended questions, reflective listening, collaborative goal-setting) are far more effective at improving medication adherence.',
        },
        {
          id: 'c6c',
          text: 'Document the non-adherence in the chart and administer the furosemide IV as ordered',
          nextSceneId: 'scene-7-medication-education',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Documentation and medication administration are necessary, but missing the therapeutic opportunity here is a significant gap. Without addressing her reason for stopping the diuretic, the same pattern will repeat after discharge.',
          rationale: 'The nurse\'s role extends beyond task completion. Education and therapeutic communication during hospitalization directly affect post-discharge outcomes, readmission rates, and disease progression.',
        },
      ],
    },
    // ─── STAGE 4: MEDICATION SAFETY ───────────────────────────────────────
    {
      id: 'scene-7-medication-education',
      type: 'narrative',
      title: 'Stage 4 — Medication Safety: A Dangerous Discovery',
      timeElapsed: 60,
      vitalsUpdate: { bloodPressure: '156/90', oxygenSaturation: 96 },
      narrative:
        'Two hours later, Mrs. Chen\'s urine output has improved to 320 mL. The furosemide IV is working. Her breathing is slightly easier.\n\nDuring your medication reconciliation review, you notice something alarming in the medication history she brought from home. In her bag, she has:\n• Ibuprofen 400 mg — she mentions she\'s been taking it regularly for knee pain ("about 3-4 times a day for a month")\n• Naproxen sodium (OTC) — "for headaches when ibuprofen doesn\'t work"\n• Oral vitamin C 2,000 mg daily — her friend recommended it\n• A herbal supplement: "Kidney Cleanse" — taken twice daily\n\nYou note in her allergy list: "NSAIDs — worsening kidney function."',
      clinicalNote:
        '🚨 Critical Safety Issue: NSAIDs (ibuprofen, naproxen) are nephrotoxic — they reduce prostaglandin-mediated afferent arteriole dilation, reducing glomerular filtration. In CKD, they are the #1 OTC cause of acute-on-chronic kidney injury. They can accelerate CKD progression by months to years. Her NSAID use likely directly contributed to this acute decompensation.',
      nextSceneId: 'scene-8-nephrotoxin-decision',
    },
    {
      id: 'scene-8-nephrotoxin-decision',
      type: 'decision',
      title: 'Addressing Nephrotoxin Exposure',
      timeElapsed: 65,
      narrative:
        'Mrs. Chen explains: "I didn\'t think ibuprofen was a medicine — it\'s just OTC. And no one told me I couldn\'t take it." She is apologetic. Her husband nods: "The pharmacist at the drugstore just told her to take it for her knee."\n\nYou need to address all four substances in her bag. In what order and how do you approach this?',
      choices: [
        {
          id: 'c8a',
          text: 'Address the NSAIDs first as the most dangerous, explain the kidney-specific mechanism clearly, then review the vitamin C and herbal supplement with the same non-judgmental educational approach',
          nextSceneId: 'scene-9-renal-diet',
          points: 80,
          isCorrect: true,
          feedback: '✅ Excellent clinical reasoning and therapeutic communication. Prioritizing the most dangerous substance (NSAIDs) is correct, and providing a clear mechanistic explanation ("NSAIDs tighten blood vessels in the kidney") is more effective than vague warnings. Your non-judgmental approach keeps her engaged.',
          rationale: 'Patient education must be prioritized by clinical significance. NSAIDs in CKD can cause acute kidney failure — this is the most urgent teaching point. High-dose vitamin C can increase oxalate (kidney stone risk). Herbal "kidney cleanse" supplements are unregulated and can contain nephrotoxic compounds. All must be addressed, but NSAIDs first.',
        },
        {
          id: 'c8b',
          text: 'Call the physician immediately and document all substances — this is a safety incident requiring a formal report',
          nextSceneId: 'scene-9-renal-diet',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Notifying the physician is appropriate, but nursing education and safe removal of the nephrotoxic substances from the patient\'s possession must happen simultaneously. Don\'t wait for a physician call to begin safety education.',
          rationale: 'Nurses have an independent duty to provide safety education and to remove known nephrotoxic substances the patient is about to self-administer. Physician notification is important but should not delay direct nursing action.',
        },
        {
          id: 'c8c',
          text: 'Remove all four substances from her bedside bag and document it, explaining that the pharmacy team will review everything',
          nextSceneId: 'scene-9-renal-diet',
          points: 30,
          isCorrect: false,
          feedback: '⚠️ While removing the substances is correct, doing so without explanation or education is paternalistic and ineffective. Mrs. Chen will go home and continue buying ibuprofen if she doesn\'t understand why it\'s dangerous for her kidneys specifically.',
          rationale: 'Safe patient handling of medications includes both removal of harmful substances AND thorough education about why they are harmful and what safe alternatives exist. Without education, the behavior will recur.',
        },
      ],
    },
    // ─── STAGE 5: RENAL DIET & PATIENT EDUCATION ─────────────────────────
    {
      id: 'scene-9-renal-diet',
      type: 'narrative',
      title: 'Stage 5 — Patient Education: Living with ESRD',
      timeElapsed: 90,
      vitalsUpdate: { bloodPressure: '148/88', heartRate: 82, oxygenSaturation: 97 },
      newLabs: [
        { name: 'Potassium (morning)', value: '5.1', unit: 'mEq/L', referenceRange: '3.5–5.0', abnormal: true, critical: false },
        { name: 'Creatinine (morning)', value: '5.4', unit: 'mg/dL', referenceRange: '0.6–1.1', abnormal: true, critical: false },
        { name: 'Urine output (6-hr total)', value: '480', unit: 'mL', referenceRange: '≥30 mL/hr', abnormal: false, critical: false },
      ],
      narrative:
        'It is now morning. Mrs. Chen had a stable night. Her potassium has trended down to 5.1 mEq/L, and her urine output improved with IV furosemide. Her breathing is easier. Her husband has gone home to shower and will return.\n\nThe dietitian leaves a note: "Patient needs renal diet education — high potassium, phosphorus, fluid restriction. Please reinforce at bedside."\n\nMrs. Chen asks you: "Can I eat anything I want now that my potassium is better? And can I drink normally? I\'m so thirsty." She is eating breakfast — you notice her tray includes: orange juice, a banana, and canned tomato soup.\n\nHer fluid restriction order reads: 1,000 mL/day (approximately 33 oz).',
      clinicalNote:
        '🥗 Renal Diet Key Restrictions:\n• Potassium: < 2,000–2,500 mg/day (avoid bananas, oranges, tomatoes, potatoes, dairy)\n• Phosphorus: < 800–1,000 mg/day (avoid dairy, nuts, beans, dark colas)\n• Sodium: < 2,000 mg/day (avoid processed foods, canned goods)\n• Fluid: Individualized restriction (commonly 500–1,000 mL/day in ESRD)\n• Protein: Moderate restriction (0.6–0.8 g/kg/day in non-dialysis CKD)',
      nextSceneId: 'scene-10-diet-decision',
    },
    {
      id: 'scene-10-diet-decision',
      type: 'decision',
      title: 'Renal Diet Education: The Breakfast Challenge',
      timeElapsed: 95,
      narrative:
        'Mrs. Chen\'s breakfast tray contains:\n• Orange juice (8 oz) — ~500 mg potassium, ~240 mL fluid\n• Banana — ~422 mg potassium\n• Canned tomato soup (1 cup) — ~900 mg sodium, ~530 mg potassium, ~240 mL fluid\n• Toast with butter — acceptable\n• Coffee (8 oz) — ~240 mL fluid\n\nTotal fluids on this tray alone: ~720 mL (72% of her daily 1,000 mL limit).\nTotal potassium from OJ + banana + soup: ~1,450 mg (more than half her daily limit in one meal).\n\nHow do you handle this?',
      choices: [
        {
          id: 'c10a',
          text: 'Gently remove the high-potassium items, explain specifically why each is restricted, provide renal-diet-safe alternatives, and connect the restrictions to how she felt when her potassium was high',
          nextSceneId: 'scene-11-dialysis-conversation',
          points: 80,
          isCorrect: true,
          feedback: '✅ Outstanding patient education approach! You connected the dietary restriction to a concrete, recent experience (the cardiac monitoring, the scary feeling) — this is far more motivating than abstract numbers. You provided alternatives rather than just restrictions, which improves compliance.',
          rationale: 'Motivational, experience-connected education is significantly more effective than rule-based teaching. Saying "remember when your heart was doing that flutter last night? The potassium in that OJ and banana could trigger that again" creates a visceral, memorable link. Always pair restrictions with renal-safe alternatives.',
        },
        {
          id: 'c10b',
          text: 'Let her eat breakfast since she\'s hungry, and schedule a formal dietary education session for this afternoon',
          nextSceneId: 'scene-11-dialysis-conversation',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ Delaying education allows her to consume over 1,450 mg of potassium in one meal when her daily limit is 2,000–2,500 mg. Additionally, missed teachable moments during hospitalization are difficult to recover. The bedside nurse has a responsibility to address safety issues in real time.',
          rationale: 'Teachable moments are most effective when they coincide with a relevant experience. Allowing unsafe food choices while planning a "later" session misses both an educational and a safety opportunity.',
        },
        {
          id: 'c10c',
          text: 'Remove the entire tray and call dietary to send a correct renal diet tray',
          nextSceneId: 'scene-11-dialysis-conversation',
          points: 30,
          isCorrect: false,
          feedback: '⚠️ Calling dietary for a renal tray is appropriate, but removing the tray without explanation is alarming and paternalistic. Without education, Mrs. Chen will not understand why or be equipped to make these choices at home.',
          rationale: 'Patient education is as important as the action itself. Removing food without explanation causes anxiety and does not build the understanding needed for self-management after discharge.',
        },
      ],
    },
    // ─── STAGE 6: DIALYSIS CONVERSATION ───────────────────────────────────
    {
      id: 'scene-11-dialysis-conversation',
      type: 'narrative',
      title: 'Stage 6 — The Dialysis Conversation',
      timeElapsed: 120,
      narrative:
        'That afternoon, Dr. Patel returns with the renal social worker, Maria Santos, RN, MSW. He sits down with Mrs. Chen and her husband David, who has returned.\n\n"Margaret, I need to be very direct with you. Your kidneys are working at about 9% of normal capacity. We call this Stage 5 chronic kidney disease — kidney failure. At this point, your kidneys can no longer keep up with what your body produces each day. We need to talk about what comes next."\n\nMrs. Chen grips her husband\'s hand tightly. "Is this... are we talking about dialysis?"\n\n"Yes. We need to talk about your options. There are two main types: hemodialysis, which is done at a center 3 times per week for about 4 hours each session, and peritoneal dialysis, which you can do yourself at home — usually at night while you sleep. There\'s also kidney transplant evaluation, which we should discuss."\n\nAfter the physician speaks with the family, he turns to you privately: "I want you to reinforce the information and assess their understanding while I put in the orders. Can you do that?"',
      clinicalNote:
        '💬 Renal Replacement Therapy Options:\n• Hemodialysis (HD): Filter blood through machine 3×/week, 3–4 hours/session; requires AV fistula or catheter; done at dialysis center or home\n• Peritoneal Dialysis (PD): Dialysate infused into peritoneal cavity via catheter; done at home daily or nightly (CAPD or CCPD); more lifestyle-flexible\n• Kidney Transplant: Best long-term outcome; requires donor matching, surgery, lifelong immunosuppression; waitlist can be 3–7+ years\n• Conservative (palliative) management: No dialysis; focus on comfort and quality of life; appropriate for some elderly/comorbid patients',
      nextSceneId: 'scene-12-dialysis-decision',
    },
    {
      id: 'scene-12-dialysis-decision',
      type: 'decision',
      title: 'Supporting the Family Through a Life-Changing Decision',
      timeElapsed: 125,
      narrative:
        'You sit with Mrs. Chen and David. Mrs. Chen is quiet, her eyes filling with tears. David looks overwhelmed. "I\'ve heard dialysis is brutal. Three times a week — how does anyone work?" David asks. "And what about Margaret\'s quality of life?"\n\nMrs. Chen looks at you: "You\'re the nurse. What would you do?"\n\nHow do you respond?',
      choices: [
        {
          id: 'c12a',
          text: 'Acknowledge the weight of this decision, avoid telling her what to do, and ask what her priorities are for quality of life — then tailor your education to what matters most to her',
          nextSceneId: 'scene-13-fistula-access',
          points: 80,
          isCorrect: true,
          feedback: '✅ This is excellent therapeutic communication and patient-centered care. You correctly avoid directing her to a specific treatment (which would be inappropriately paternalistic) while actively exploring her values. Understanding what she prioritizes (work? sleep? independence? convenience?) guides the educational discussion about which modality best fits her life.',
          rationale: 'Dialysis modality selection is a values-laden decision. HD at a center provides close monitoring but requires travel and rigid scheduling. PD offers more independence but requires patient training and daily home procedure. What matters to the patient determines which option is "better" for her.',
        },
        {
          id: 'c12b',
          text: 'Tell her honestly that peritoneal dialysis is probably better for someone who values independence and flexibility',
          nextSceneId: 'scene-13-fistula-access',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ While PD may align well with some of her expressed values, offering a recommendation before exploring her specific priorities, home situation, support systems, and other factors is premature. This is a physician-level shared decision conversation — your role is to support information processing and ask clarifying questions.',
          rationale: 'Peritoneal dialysis requires a clean home environment, dexterity for catheter management, cognitive ability to learn the procedure, and a support system. Not knowing these factors makes any recommendation premature. Explore values first.',
        },
        {
          id: 'c12c',
          text: 'Tell her this is ultimately a medical decision and she should follow Dr. Patel\'s recommendation',
          nextSceneId: 'scene-13-fistula-access',
          points: -10,
          isCorrect: false,
          feedback: '❌ This response abdicates the nurse\'s educational and advocacy role and disempowers the patient at a critical decision point. Dialysis modality choice is a patient-centered decision — not a physician directive. Your role is to educate, support, and advocate for the patient\'s autonomy.',
          rationale: 'Nurses are patient advocates. Deferring entirely to the physician for a values-based decision undermines the therapeutic relationship and is inconsistent with the nursing scope of practice. The nurse plays a key role in shared decision-making by providing information and ensuring patient voices are heard.',
        },
      ],
    },
    // ─── STAGE 7: VASCULAR ACCESS ─────────────────────────────────────────
    {
      id: 'scene-13-fistula-access',
      type: 'narrative',
      title: 'Stage 7 — Vascular Access: Planning Ahead',
      timeElapsed: 150,
      newImaging: [
        {
          type: 'Vascular Ultrasound — Left Forearm',
          description: 'Preoperative vessel mapping for AV fistula planning',
          findings: 'Cephalic vein diameter 3.2 mm (adequate). Radial artery diameter 2.4 mm (adequate). No significant stenosis. Suitable for radiocephalic AVF creation.',
        },
      ],
      narrative:
        'After your conversation, Mrs. Chen and David are calmer but still processing. They ask if they can think about it overnight. Dr. Patel agrees.\n\nHowever, he immediately orders a vascular surgery consult for AV fistula evaluation — "even if she chooses PD, she may need HD as a bridge. And if she does choose HD, she needs the fistula created as soon as possible — it takes 3–6 months to mature." He also orders peritoneal dialysis catheter consultation from general surgery.\n\nThe vascular surgeon evaluates Mrs. Chen and reports: "Good vessels for a left radiocephalic fistula. I recommend we schedule the procedure as soon as possible — optimally before discharge."\n\nMrs. Chen is confused: "But I haven\'t even decided yet — why are they talking about surgery?" She is becoming anxious.',
      clinicalNote:
        '🩸 AV Fistula Pearls for Nurses:\n• An AV fistula (connection of artery to vein) is the preferred HD access — "fistula first" is the national standard\n• Must mature 3–6 months before use — planning must begin early\n• After creation: No BP in fistula arm, no venipuncture in fistula arm, no tight clothing/watches on fistula arm\n• Assess patency daily: Palpate thrill, auscultate bruit\n• Complications: Thrombosis, stenosis, steal syndrome, infection',
      nextSceneId: 'scene-14-access-education',
    },
    {
      id: 'scene-14-access-education',
      type: 'decision',
      title: 'Explaining Vascular Access Planning to an Anxious Patient',
      timeElapsed: 155,
      narrative:
        'Mrs. Chen says firmly: "Nobody asked me about surgery. I don\'t want anyone cutting on me until I\'ve decided what I want to do."\n\nHer husband adds: "We need time to think. Can\'t this wait?"\n\nYou understand Mrs. Chen\'s position, but you also know that delaying vascular access planning can seriously limit her options. How do you respond?',
      choices: [
        {
          id: 'c14a',
          text: 'Validate her autonomy and feelings, then explain the time-sensitive nature of fistula maturation — that the consult does not commit her to any decision, it simply preserves her options',
          nextSceneId: 'scene-15-discharge-planning',
          points: 80,
          isCorrect: true,
          feedback: '✅ Perfect balance of advocacy and education. You honored her autonomy while giving her accurate information to make an informed decision. The key insight — that a consult preserves options without forcing a decision — reduces her perceived loss of control. This is excellent patient-centered communication.',
          rationale: 'The window for fistula creation is time-sensitive. If Mrs. Chen later chooses HD and has no access, she will need a temporary central catheter — which has significantly higher infection and mortality rates. Explaining the "options preservation" framing rather than "you must do this" respects autonomy while advocating for her health.',
        },
        {
          id: 'c14b',
          text: 'Tell her the surgeon and physician have already decided this is the best plan and ask for her cooperation',
          nextSceneId: 'scene-15-discharge-planning',
          points: -20,
          isCorrect: false,
          feedback: '❌ This response removes patient autonomy completely. Medical providers do not "decide" what happens to a patient — informed consent requires patient understanding and agreement. This approach damages trust and may cause Mrs. Chen to disengage from her care entirely.',
          rationale: 'Patients have the legal and ethical right to refuse any procedure or consultation. Nursing advocacy includes ensuring patients understand they have a right to decline while also ensuring they have accurate information to make that decision.',
        },
        {
          id: 'c14c',
          text: 'Agree with her and document that she declined the vascular surgery consult',
          nextSceneId: 'scene-15-discharge-planning',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ While respecting refusal is appropriate, this response does not fulfill your educational role. If Mrs. Chen refuses without understanding the time-sensitive consequences of her decision, she is not making a truly informed refusal. Education must precede documentation of decline.',
          rationale: 'Documented refusal without documented education (including risks of refusal, alternatives, and opportunity to ask questions) is incomplete nursing practice and may not constitute legal informed refusal.',
        },
      ],
    },
    // ─── STAGE 8: DISCHARGE PLANNING ─────────────────────────────────────
    {
      id: 'scene-15-discharge-planning',
      type: 'narrative',
      title: 'Stage 8 — Discharge Planning: Setting Her Up to Succeed',
      timeElapsed: 240,
      vitalsUpdate: {
        bloodPressure: '142/84',
        heartRate: 78,
        oxygenSaturation: 97,
        weight: 72,
      },
      newLabs: [
        { name: 'Potassium (discharge)', value: '4.9', unit: 'mEq/L', referenceRange: '3.5–5.0', abnormal: false, critical: false },
        { name: 'Creatinine (discharge)', value: '5.2', unit: 'mg/dL', referenceRange: '0.6–1.1', abnormal: true, critical: false },
        { name: 'eGFR (discharge)', value: '10', unit: 'mL/min/1.73m²', referenceRange: '≥60', abnormal: true, critical: true },
        { name: 'BNP (discharge)', value: '680', unit: 'pg/mL', referenceRange: '<100', abnormal: true, critical: false },
      ],
      narrative:
        'Day 3. Mrs. Chen has stabilized significantly. Her weight is down 2 kg with diuresis (now 72 kg). Her lungs are clear. Edema has improved from 3+ to 1+. Potassium is 4.9 mEq/L. Her BNP, while still elevated, has decreased from 1,420 to 680 pg/mL.\n\nAfter lengthy conversations with the team, Mrs. Chen and David have made decisions:\n✅ She has agreed to the AV fistula consult (surgery scheduled in 10 days)\n✅ She will attend a peritoneal dialysis education program at the kidney center next week\n✅ She has agreed to a renal diet consult follow-up as an outpatient\n\nDr. Patel has written discharge orders. You are completing discharge teaching. Mrs. Chen says: "I want to write down everything. Last time I came home from the hospital, I forgot half of what they told me."',
      clinicalNote:
        '📋 Discharge teaching for CKD/ESRD:\n• Medication changes (furosemide now 80 mg PO daily, metformin HELD — contraindicated in eGFR < 30)\n• Fluid restriction: 1,000 mL/day — teach how to measure\n• Daily weights — call if gain > 2 lbs in 1 day or 5 lbs in 1 week\n• Renal diet: Low K⁺, low phosphorus, low sodium\n• Absolute avoidance: NSAIDs, contrast dye, nephrotoxins\n• Follow-up: Nephrology in 1 week, PCP in 3 days, dialysis center tour',
      nextSceneId: 'scene-16-teach-back',
    },
    {
      id: 'scene-16-teach-back',
      type: 'decision',
      title: 'Discharge Education: Ensuring Understanding',
      timeElapsed: 245,
      narrative:
        'You sit with Mrs. Chen and David for discharge teaching. You have covered:\n• New medication list and the reason metformin was stopped\n• Daily weight monitoring protocol\n• Fluid restriction of 1,000 mL/day\n• Foods to avoid\n• When to call 911 and when to call the clinic\n• NSAIDs and OTC medication avoidance\n• Fistula surgery prep and restrictions\n\nAt the end, David says: "That was a lot to take in. I think we got most of it." Mrs. Chen nods.\n\nWhat is your final step before completing discharge teaching?',
      choices: [
        {
          id: 'c16a',
          text: 'Use the teach-back method: Ask Mrs. Chen and David to explain back the 3 most critical points in their own words, and correct any misunderstandings gently',
          nextSceneId: 'scene-17-end-success',
          points: 80,
          isCorrect: true,
          feedback: '✅ Teach-back is the gold standard for discharge education validation. Research shows that up to 80% of medical information is forgotten immediately after a clinical encounter. Having the patient demonstrate understanding (not just nod) identifies gaps before the patient goes home.',
          rationale: 'The teach-back method (also called the "ask-me-3" or "show me" method) is an evidence-based strategy endorsed by the Agency for Healthcare Research and Quality (AHRQ). It shifts the burden from "Did I explain it?" to "Did they understand it?" — a critical distinction.',
        },
        {
          id: 'c16b',
          text: 'Provide a written packet of all the information and tell them to call if they have any questions',
          nextSceneId: 'scene-17-end-partial',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Written materials supplement but do not replace verbal teaching and comprehension assessment. Research shows that 36–58% of CKD patients have low health literacy. Written materials alone are insufficient — teach-back is essential to verify understanding.',
          rationale: 'Written discharge materials have a reading level often exceeding 8th grade. Patients with CKD frequently have associated cognitive changes, fatigue, and health literacy challenges. Always verify comprehension with teach-back before discharge.',
        },
        {
          id: 'c16c',
          text: 'Ask Mrs. Chen if she has any questions, and if she says no, complete the discharge',
          nextSceneId: 'scene-17-end-partial',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ "Do you have any questions?" is consistently the least effective method of assessing patient understanding. Patients often say "no" out of embarrassment, exhaustion, or because they don\'t know what they don\'t know. Teach-back reveals gaps that passive questioning cannot.',
          rationale: 'Studies show that patients respond "no" to "do you have questions?" even when they don\'t understand the information because it is socially awkward to admit confusion. Teach-back removes this barrier by making the nurse responsible for clarity of explanation.',
        },
      ],
    },
    // ─── END SCENES ───────────────────────────────────────────────────────
    {
      id: 'scene-17-end-success',
      type: 'end',
      title: 'Case Complete — Outstanding Clinical Performance',
      timeElapsed: 260,
      endType: 'success',
      scoreBonus: 50,
      narrative:
        'Mrs. Chen successfully recalls the three most critical points during teach-back: "I need to weigh myself every morning and call if I gain 2 pounds. I cannot take ibuprofen or any anti-inflammatory — never again. And I need to drink less than 1,000 mL of fluid a day — that\'s about 4 glasses."\n\nShe looks at you: "You know, you\'re the first nurse who ever explained my kidney disease to me like it was real — like my choices actually matter. I\'m going to do better this time."\n\nMrs. Chen is discharged safely. She attends her nephrology follow-up 5 days later. She is enrolled in the peritoneal dialysis education program. Her AV fistula is created 10 days later. She does not require emergency dialysis for 4 more months, during which time her fistula matures and she transitions to a planned start of peritoneal dialysis.\n\n🏅 Excellent work. You demonstrated comprehensive, safe, and compassionate care for a complex ESRD patient.',
      feedback:
        'You navigated all 8 stages of this complex CKD case with clinical excellence. You prioritized life threats, managed hyperkalemia safely, addressed medication hazards, communicated therapeutically, supported a difficult dialysis decision, and validated discharge understanding with teach-back.',
    },
    {
      id: 'scene-17-end-partial',
      type: 'end',
      title: 'Case Complete — Good Performance with Room to Grow',
      timeElapsed: 260,
      endType: 'partial',
      scoreBonus: 20,
      narrative:
        'Mrs. Chen is discharged with her written materials. She returns to the ED 11 days later with potassium of 5.9 mEq/L and 4 kg weight gain. On review, she had misunderstood her fluid restriction ("I thought 1,000 mL meant I had to drink 1,000 mL — I was trying to hit the number!") and had restarted ibuprofen for knee pain.\n\nShe is re-admitted and re-educated. This time, teach-back reveals the misunderstandings before discharge.\n\n🔄 Reflection: Teach-back at discharge would have caught these misunderstandings and likely prevented a readmission.',
      feedback:
        'You provided good care throughout this case. The area with the most impact for improvement is discharge education validation. Using the teach-back method consistently is one of the highest-yield nursing interventions for reducing CKD-related readmissions.',
    },
  ],
};
