import type { CaseStudy } from '../../types/case-study.js';

export const dkaCase: CaseStudy = {
  id: 'dka-type1-diabetes',
  title: 'Sugar Crisis',
  subtitle: 'Diabetic Ketoacidosis in a Young Adult',
  description:
    'A 22-year-old female with Type 1 Diabetes is brought to the emergency department by her roommate after being found confused and vomiting. Her blood glucose reads "HIGH" on the glucometer. You are the ED nurse — rapid recognition and coordinated management of DKA can prevent a life-threatening outcome.',
  difficulty: 'intermediate',
  specialty: 'Emergency / Endocrinology',
  tags: ['DKA', 'diabetic ketoacidosis', 'Type 1 Diabetes', 'insulin', 'fluid replacement', 'electrolytes', 'acidosis'],
  estimatedTime: 30,
  maxScore: 300,
  learningObjectives: [
    { id: 'lo1', description: 'Identify the diagnostic criteria and clinical presentation of diabetic ketoacidosis (DKA)' },
    { id: 'lo2', description: 'Initiate appropriate IV fluid resuscitation for DKA management' },
    { id: 'lo3', description: 'Safely manage insulin infusion therapy and monitor for complications' },
    { id: 'lo4', description: 'Monitor and replace electrolytes, particularly potassium, during DKA treatment' },
    { id: 'lo5', description: 'Recognize criteria for DKA resolution and transition to subcutaneous insulin' },
  ],
  patient: {
    name: 'Kayla Reyes',
    age: 22,
    gender: 'female',
    weight: 58,
    height: 165,
    allergies: ['No known drug allergies'],
    currentMedications: [
      'Insulin glargine (Lantus) 18 units subcutaneous nightly',
      'Insulin lispro (Humalog) sliding scale before meals',
    ],
    medicalHistory: ['Type 1 Diabetes Mellitus (diagnosed age 10)', 'Anxiety disorder'],
    chiefComplaint: 'Nausea, vomiting, confusion, and abdominal pain × 12 hours; blood glucose unreadable on home glucometer',
    vitals: {
      temperature: 99.8,
      heartRate: 124,
      respiratoryRate: 28,
      bloodPressure: '98/60',
      oxygenSaturation: 98,
      painLevel: 6,
      bloodGlucose: 620,
    },
    appearance:
      'Young female appearing acutely ill. Lethargic but responsive to voice. Skin is dry and flushed with decreased skin turgor. Deep, rapid breathing (Kussmaul respirations). Fruity odor on breath. Abdomen diffusely tender. Roommate reports patient has had a cold for 3 days and may have missed insulin doses.',
    labs: [
      { name: 'Glucose', value: '620', unit: 'mg/dL', referenceRange: '70–100', abnormal: true, critical: true },
      { name: 'pH (venous)', value: '7.18', unit: '', referenceRange: '7.35–7.45', abnormal: true, critical: true },
      { name: 'Bicarbonate', value: '8', unit: 'mEq/L', referenceRange: '22–29', abnormal: true, critical: true },
      { name: 'Anion Gap', value: '28', unit: 'mEq/L', referenceRange: '8–12', abnormal: true, critical: true },
      { name: 'Potassium', value: '5.8', unit: 'mEq/L', referenceRange: '3.5–5.0', abnormal: true, critical: true },
      { name: 'Sodium', value: '128', unit: 'mEq/L', referenceRange: '136–145', abnormal: true, critical: false },
      { name: 'Creatinine', value: '1.4', unit: 'mg/dL', referenceRange: '0.5–1.1', abnormal: true, critical: false },
      { name: 'BUN', value: '24', unit: 'mg/dL', referenceRange: '7–25', abnormal: false, critical: false },
      { name: 'Beta-hydroxybutyrate', value: '6.2', unit: 'mmol/L', referenceRange: '< 0.6', abnormal: true, critical: true },
      { name: 'WBC', value: '14.2', unit: 'K/µL', referenceRange: '4.5–11.0', abnormal: true, critical: false },
    ],
  },
  startSceneId: 'dka-scene-1-arrival',
  scenes: [
    {
      id: 'dka-scene-1-arrival',
      type: 'narrative',
      title: 'Emergency Department Arrival',
      timeElapsed: 0,
      narrative:
        'It is 14:30. A young woman is wheeled in by her roommate who is visibly anxious. "She\'s been sick since this morning — vomiting and getting more and more confused. I checked her blood sugar and the meter just said HIGH."\n\nKayla Reyes, 22, opens her eyes when you call her name but immediately closes them again. Her breathing is deep and rapid — almost forced. You notice a faintly sweet, fruity smell as you lean in to assess her. Her skin is dry and flushed, and when you gently pinch it, the tent persists for several seconds.\n\nThe roommate adds: "She had a bad cold this week. I think she skipped some of her insulin shots because she wasn\'t eating much."',
      clinicalNote:
        '🩺 Nursing Pearl: The classic triad of DKA is hyperglycemia, metabolic acidosis, and ketonemia/ketonuria. Kussmaul respirations (deep, labored breathing) are the body\'s attempt to compensate for metabolic acidosis by blowing off CO₂. Fruity breath reflects the presence of acetone, a ketone byproduct.',
      nextSceneId: 'dka-scene-2-priority',
    },
    {
      id: 'dka-scene-2-priority',
      type: 'decision',
      title: 'Initial Priority Action',
      timeElapsed: 5,
      narrative:
        'Kayla\'s point-of-care glucose reads 620 mg/dL. Her lab results confirm pH 7.18, bicarbonate 8 mEq/L, anion gap 28, and potassium 5.8 mEq/L. She is in DKA. Her BP is 98/60, HR is 124, and RR is 28. She has IV access in her right antecubital.\n\nWhat is your FIRST priority action?',
      choices: [
        {
          id: 'dka-c2a',
          text: 'Initiate IV fluid resuscitation with 0.9% normal saline 1 L bolus immediately',
          nextSceneId: 'dka-scene-3-fluids-correct',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! IV fluid replacement is the cornerstone first step in DKA treatment. Patients are typically 3–6 L fluid deficit. Restoring intravascular volume improves perfusion and begins to lower glucose through dilution.',
          rationale: 'Fluid replacement takes priority even before insulin in DKA. Hypovolemia from osmotic diuresis reduces renal perfusion and perpetuates acidosis. Normal saline is the initial fluid of choice for DKA resuscitation.',
        },
        {
          id: 'dka-c2b',
          text: 'Start a regular insulin IV infusion at 0.1 units/kg/hr immediately',
          nextSceneId: 'dka-scene-3-insulin-first',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Not the first step. Insulin is essential in DKA, but it must not be started before fluids. Her potassium is already 5.8 mEq/L but will drop rapidly once insulin is given. Starting insulin before adequate hydration also worsens hypotension.',
          rationale: 'Insulin drives potassium into cells, potentially causing life-threatening hypokalemia. Fluids must be initiated first, and potassium checked. If K⁺ < 3.5, insulin should be withheld until potassium is replaced.',
        },
        {
          id: 'dka-c2c',
          text: 'Administer sodium bicarbonate IV to correct the severe acidosis',
          nextSceneId: 'dka-scene-3-bicarb',
          points: 0,
          isCorrect: false,
          feedback: '❌ Sodium bicarbonate is NOT recommended for routine DKA management, even with severe acidosis. It does not improve outcomes and may paradoxically worsen cerebral and intracellular acidosis. It is only considered if pH < 6.9.',
          rationale: 'The acidosis in DKA resolves with fluid replacement and insulin therapy. Bicarbonate can cause a paradoxical worsening of CNS acidosis, hypokalemia, and may delay ketone clearance.',
        },
      ],
    },
    {
      id: 'dka-scene-3-fluids-correct',
      type: 'narrative',
      title: 'Fluid Resuscitation Initiated',
      timeElapsed: 10,
      narrative:
        'You hang the first liter of 0.9% NS and set it to run wide open. The physician enters and reviews the labs. She orders the full DKA protocol: IV fluids, insulin infusion, electrolyte monitoring, and hourly glucose checks.\n\nYou note that Kayla\'s potassium is 5.8 mEq/L. The physician states: "Hold the insulin for now — let\'s get more fluids in first and recheck lytes in 30 minutes. If K⁺ drops below 5.0, we\'ll start the insulin drip."\n\nKayla\'s repeat glucose after 30 min of fluids: 540 mg/dL. Repeat K⁺: 4.9 mEq/L. pH: 7.21. The physician is now ready to start the insulin infusion.',
      clinicalNote:
        '⚠️ Potassium Management in DKA: Insulin causes a shift of potassium into cells. Before starting insulin:\n• K⁺ < 3.5 mEq/L → Replace K⁺, do NOT start insulin\n• K⁺ 3.5–5.0 mEq/L → Start insulin, replace K⁺ in fluids\n• K⁺ > 5.0 mEq/L → Start insulin, hold K⁺ replacement, monitor closely',
      nextSceneId: 'dka-scene-4-insulin-decision',
    },
    {
      id: 'dka-scene-3-insulin-first',
      type: 'narrative',
      title: 'Insulin Started — A Complication',
      timeElapsed: 10,
      narrative:
        'You begin the insulin infusion. However, 20 minutes later, Kayla\'s repeat potassium returns at 3.1 mEq/L — a dangerous drop. The monitor alarms with QT prolongation and peaked T-waves. Her BP drops to 88/54 as the insulin continued to drive K⁺ into cells before adequate volume was restored.\n\nThe physician is called emergently and orders IV potassium replacement and temporary halt of the insulin infusion. Fluids are increased.',
      clinicalNote:
        '⚠️ Insulin drives K⁺ into cells, causing hypokalemia rapidly in DKA. Always ensure adequate fluid resuscitation and check potassium before starting insulin. If K⁺ < 3.5 mEq/L, insulin must be withheld and potassium replaced first.',
      nextSceneId: 'dka-scene-4-insulin-decision',
    },
    {
      id: 'dka-scene-3-bicarb',
      type: 'narrative',
      title: 'Bicarbonate — Reconsidered',
      timeElapsed: 10,
      narrative:
        'The physician reviews your suggestion of bicarbonate. "Actually, let\'s hold on that — current guidelines don\'t recommend bicarb unless pH is below 6.9, which hers isn\'t quite. Let\'s focus on fluids and insulin. That\'s what will clear her ketones and fix the acidosis."\n\nYou initiate IV fluids with 0.9% NS and the team proceeds with the DKA protocol.',
      clinicalNote:
        '📚 Evidence Update: Routine sodium bicarbonate use in DKA is not recommended by the American Diabetes Association except when pH < 6.9. It may cause paradoxical CNS acidosis, hypokalemia, and overshoot alkalosis. Treat the underlying cause — insulin and fluids.',
      nextSceneId: 'dka-scene-4-insulin-decision',
    },
    {
      id: 'dka-scene-4-insulin-decision',
      type: 'decision',
      title: 'Insulin Infusion — Rate Monitoring',
      timeElapsed: 45,
      narrative:
        'Kayla has received 2L of IV fluids. Her potassium is now 4.2 mEq/L. The physician starts a regular insulin infusion at 0.1 units/kg/hr (5.8 units/hr). You are now monitoring her hourly glucose checks.\n\nAt the 1-hour mark, her glucose is 480 mg/dL (drop of ~140 mg/dL). At the 2-hour mark, her glucose is 310 mg/dL. The physician orders a change in IV fluids to D5W with 0.45% NS once glucose reaches 250 mg/dL.\n\nHer glucose now reads 248 mg/dL. What should you do?',
      choices: [
        {
          id: 'dka-c4a',
          text: 'Change IV fluids to D5W/0.45% NS as ordered and continue insulin infusion at the same rate',
          nextSceneId: 'dka-scene-5-resolution',
          points: 60,
          isCorrect: true,
          feedback: '✅ Excellent! When glucose reaches 250 mg/dL in DKA, dextrose is added to the IV fluids to prevent hypoglycemia while insulin continues to clear ketones. The insulin infusion must continue until ketoacidosis resolves — not just until glucose normalizes.',
          rationale: 'DKA is resolved when: glucose < 200, pH ≥ 7.3, bicarbonate ≥ 15, and anion gap ≤ 12. Stopping insulin early (just because glucose normalizes) allows ketones to persist and the acidosis to worsen. D5W prevents hypoglycemia.',
        },
        {
          id: 'dka-c4b',
          text: 'Stop the insulin infusion since glucose is nearly normal at 248 mg/dL',
          nextSceneId: 'dka-scene-5-insulin-stopped',
          points: 0,
          isCorrect: false,
          feedback: '❌ Do not stop insulin based on glucose alone. DKA is not resolved until pH ≥ 7.3, bicarbonate ≥ 15, and anion gap is closed. Stopping insulin now allows ketones to persist, which perpetuates acidosis even as the glucose appears controlled.',
          rationale: 'The glucose falls faster than ketones clear. Premature cessation of insulin is one of the most common errors in DKA management and leads to prolonged acidosis. Add dextrose to the fluids to prevent hypoglycemia and continue insulin until biochemical resolution.',
        },
        {
          id: 'dka-c4c',
          text: 'Increase the insulin infusion rate to clear ketones faster',
          nextSceneId: 'dka-scene-5-insulin-increased',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ Increasing the insulin rate is not indicated. The goal glucose drop in DKA is 50–75 mg/dL per hour. Adding dextrose to prevent hypoglycemia is the correct intervention here, not increasing the insulin rate.',
          rationale: 'Excessive insulin infusion risks severe hypoglycemia and rapid shifts in potassium. Adding dextrose to IV fluids when glucose reaches 200–250 mg/dL is the evidence-based approach to maintain safe glucose levels while continuing ketone clearance.',
        },
      ],
    },
    {
      id: 'dka-scene-5-resolution',
      type: 'narrative',
      title: 'DKA Resolution',
      timeElapsed: 90,
      narrative:
        'Six hours after admission, Kayla\'s repeat labs show:\n• Glucose: 188 mg/dL\n• pH: 7.34\n• Bicarbonate: 17 mEq/L\n• Anion gap: 11 mEq/L\n• Potassium: 3.8 mEq/L\n• Beta-hydroxybutyrate: 0.8 mmol/L\n\nShe is now awake, oriented, and asking for water. "What happened to me?" she asks. "I thought I could just skip my insulin since I wasn\'t eating much."\n\nThis is an important teaching moment. The endocrinologist plans to transition her to subcutaneous insulin and conduct diabetes education before discharge.',
      clinicalNote:
        '🎓 Sick Day Rules for Type 1 Diabetes:\n• NEVER stop insulin during illness — basal insulin is always required\n• Monitor glucose every 2–4 hours\n• Check urine/blood ketones if glucose > 240\n• Maintain hydration with sugar-free fluids\n• Contact provider if vomiting, unable to eat, or ketones are moderate/large',
      nextSceneId: 'dka-scene-6-end',
    },
    {
      id: 'dka-scene-5-insulin-stopped',
      type: 'narrative',
      title: 'Insulin Stopped Early — Recurrence',
      timeElapsed: 90,
      narrative:
        'Two hours after stopping the insulin infusion, Kayla\'s glucose rebounds to 390 mg/dL and her repeat pH drops to 7.25. Her bicarbonate is 12. She is becoming drowsy again.\n\nThe physician is called. "She\'s had a recurrence of ketoacidosis," the physician notes. "We need to restart the protocol. This is a common error — glucose normalizes before the ketones clear. We need to add dextrose and continue the insulin."',
      clinicalNote:
        '⚠️ Key Rule: In DKA, insulin must continue until biochemical resolution (pH ≥ 7.3, HCO₃⁻ ≥ 15, anion gap ≤ 12) — NOT just until glucose normalizes. Glucose falls faster than ketones clear. Adding dextrose to IVF prevents hypoglycemia while insulin continues.',
      nextSceneId: 'dka-scene-6-end',
    },
    {
      id: 'dka-scene-5-insulin-increased',
      type: 'narrative',
      title: 'Insulin Rate Increased — Hypoglycemia',
      timeElapsed: 90,
      narrative:
        'Thirty minutes after increasing the insulin rate, Kayla\'s glucose drops to 62 mg/dL. She becomes diaphoretic and tremulous. The monitor alarms. You recognize symptomatic hypoglycemia.\n\nYou stop the insulin infusion, switch to D50W IV push per protocol, and notify the physician. Kayla recovers but the DKA protocol must be restarted carefully with appropriate dextrose-containing fluids.',
      clinicalNote:
        '⚠️ Hypoglycemia in DKA: The safe glucose drop in DKA is 50–75 mg/dL/hour. When glucose approaches 250 mg/dL, add dextrose to IV fluids rather than increasing the insulin rate. Hypoglycemia complicates DKA management and prolongs recovery.',
      nextSceneId: 'dka-scene-6-end',
    },
    {
      id: 'dka-scene-6-end',
      type: 'end',
      title: 'Case Complete — DKA Management',
      timeElapsed: 120,
      narrative:
        'Kayla is stabilized and transferred to the medical floor for continued monitoring and diabetes education. This case highlighted the critical importance of the DKA treatment sequence: fluids first, careful potassium management, insulin titration, and maintaining insulin until true biochemical resolution.\n\nKey Learning Points:\n• Fluid resuscitation precedes insulin in DKA\n• Potassium must be ≥ 3.5 mEq/L before insulin is started\n• Add dextrose to IVF when glucose reaches 200–250 mg/dL\n• Continue insulin until pH ≥ 7.3, HCO₃⁻ ≥ 15, and anion gap is closed\n• Sick day rules are a critical diabetes education priority',
      endType: 'success',
    },
  ],
};
