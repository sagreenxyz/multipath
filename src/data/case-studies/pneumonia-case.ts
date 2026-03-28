import type { CaseStudy } from '../../types/case-study.js';

export const pneumoniaCase: CaseStudy = {
  id: 'cap-respiratory-failure',
  title: 'Struggling to Breathe',
  subtitle: 'Community-Acquired Pneumonia with Respiratory Failure',
  description:
    'A 74-year-old male with COPD is admitted from a long-term care facility with worsening cough, fever, and increasing oxygen requirements. As the admitting nurse, you must rapidly assess his deteriorating respiratory status, initiate appropriate interventions, and recognize when escalation to the ICU is necessary.',
  difficulty: 'intermediate',
  specialty: 'Medical-Surgical / Pulmonary',
  tags: ['pneumonia', 'COPD', 'respiratory failure', 'oxygen therapy', 'chest X-ray', 'antibiotics', 'hypoxia', 'BiPAP'],
  estimatedTime: 30,
  maxScore: 300,
  learningObjectives: [
    { id: 'lo1', description: 'Assess and classify respiratory distress severity using clinical indicators' },
    { id: 'lo2', description: 'Select appropriate oxygen delivery devices based on patient needs and COPD status' },
    { id: 'lo3', description: 'Recognize the clinical features of pneumonia and initiate timely antibiotic therapy' },
    { id: 'lo4', description: 'Identify criteria for ICU transfer and non-invasive positive pressure ventilation (BiPAP)' },
    { id: 'lo5', description: 'Monitor for deterioration and respond to worsening respiratory failure' },
  ],
  patient: {
    name: 'Frank Okafor',
    age: 74,
    gender: 'male',
    weight: 76,
    height: 172,
    allergies: ['Azithromycin (GI intolerance)'],
    currentMedications: [
      'Tiotropium bromide (Spiriva) 18 mcg inhaled daily',
      'Fluticasone/salmeterol (Advair) 250/50 mcg 1 puff BID',
      'Albuterol MDI 2 puffs q4–6h PRN',
      'Aspirin 81 mg PO daily',
      'Metoprolol succinate 25 mg PO daily',
    ],
    medicalHistory: [
      'COPD (GOLD Stage III — severe, FEV1 35% predicted)',
      'Hypertension',
      'Former smoker (60 pack-year history, quit 4 years ago)',
      'Mild cognitive impairment',
      'Remote right hip replacement',
    ],
    chiefComplaint: 'Productive cough with greenish sputum × 4 days, fever, and increasing oxygen needs; nursing home staff report he uses home oxygen 2 L/NC at baseline',
    vitals: {
      temperature: 102.6,
      heartRate: 106,
      respiratoryRate: 30,
      bloodPressure: '148/86',
      oxygenSaturation: 84,
      painLevel: 3,
    },
    appearance:
      'Elderly male in obvious respiratory distress. Using accessory muscles (sternocleidomastoid, intercostal retractions visible). Speaks in 3–4 word sentences. Lips slightly cyanotic. Cough is productive with thick greenish-yellow sputum. Breath sounds: decreased at right base with dullness to percussion; diffuse expiratory wheezing bilaterally. Alert but fatigued.',
    labs: [
      { name: 'WBC', value: '18.6', unit: 'K/µL', referenceRange: '4.5–11.0', abnormal: true, critical: false },
      { name: 'Hemoglobin', value: '11.8', unit: 'g/dL', referenceRange: '13.5–17.5', abnormal: true, critical: false },
      { name: 'CRP', value: '224', unit: 'mg/L', referenceRange: '< 10', abnormal: true, critical: false },
      { name: 'Procalcitonin', value: '2.8', unit: 'ng/mL', referenceRange: '< 0.25', abnormal: true, critical: false },
      { name: 'Creatinine', value: '1.1', unit: 'mg/dL', referenceRange: '0.7–1.3', abnormal: false, critical: false },
      { name: 'Sodium', value: '131', unit: 'mEq/L', referenceRange: '136–145', abnormal: true, critical: false },
      { name: 'Glucose', value: '148', unit: 'mg/dL', referenceRange: '70–100', abnormal: true, critical: false },
      { name: 'PaO₂ (ABG)', value: '52', unit: 'mmHg', referenceRange: '80–100', abnormal: true, critical: true },
      { name: 'PaCO₂ (ABG)', value: '58', unit: 'mmHg', referenceRange: '35–45', abnormal: true, critical: true },
      { name: 'pH (ABG)', value: '7.30', unit: '', referenceRange: '7.35–7.45', abnormal: true, critical: true },
      { name: 'HCO₃ (ABG)', value: '28', unit: 'mEq/L', referenceRange: '22–26', abnormal: true, critical: false },
    ],
    imaging: [
      {
        type: 'Chest X-Ray (PA/Lateral)',
        description: 'Obtained on admission',
        findings: 'Right lower lobe consolidation with air bronchograms consistent with lobar pneumonia. Hyperinflation and flattened diaphragms consistent with underlying COPD. No pleural effusion. No pneumothorax.',
      },
    ],
  },
  startSceneId: 'pna-scene-1-admission',
  scenes: [
    {
      id: 'pna-scene-1-admission',
      type: 'narrative',
      title: 'Admission from Long-Term Care',
      timeElapsed: 0,
      narrative:
        'It is 16:00. EMS brings Frank Okafor, a 74-year-old male from Rolling Meadows Care Center, to the medical unit. The paramedic report: "Nursing home called 911. Staff said he\'s been coughing for 4 days, getting worse, spiking temps. His usual home O₂ is 2L NC — they had him on 4L NC and his sat was only 82% when we arrived. We\'ve got him on 6L NC right now — sat is 84%."\n\nYou assess him immediately. Frank looks at you with tired, frightened eyes and manages: "Can\'t... breathe... well." His chest heaves with each breath, using muscles in his neck and between his ribs. You auscultate and hear decreased breath sounds in the right base with dullness, and diffuse wheezing.',
      clinicalNote:
        '🫁 COPD + Pneumonia: Patients with COPD are at high risk for respiratory failure from community-acquired pneumonia (CAP). Their already-compromised respiratory reserve means even a moderate pneumonia can precipitate acute hypercapnic respiratory failure. They are also at risk for CO₂ retention with high-flow oxygen — targeting SpO₂ 88–92% in COPD patients prevents hypercapnic drive suppression.',
      nextSceneId: 'pna-scene-2-oxygen-decision',
    },
    {
      id: 'pna-scene-2-oxygen-decision',
      type: 'decision',
      title: 'Oxygen Therapy Selection',
      timeElapsed: 5,
      narrative:
        'Frank\'s SpO₂ is 84% on 6L nasal cannula. His ABG shows PaO₂ 52, PaCO₂ 58, pH 7.30 — he has acute-on-chronic hypercapnic respiratory failure with mild acidosis. He has COPD with known CO₂ retention risk.\n\nWhat is the most appropriate oxygen therapy approach for Frank right now?',
      choices: [
        {
          id: 'pna-c2a',
          text: 'Apply a Venturi mask at 28% FiO₂ to target SpO₂ 88–92%, and reassess in 30 minutes',
          nextSceneId: 'pna-scene-3-venturi',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! The Venturi mask delivers a precise, controlled FiO₂, which is essential in COPD patients to prevent over-oxygenation and worsening CO₂ retention. Targeting SpO₂ 88–92% is the evidence-based goal for COPD patients with known hypercapnic risk.',
          rationale: 'COPD patients with chronic CO₂ retention may depend partly on hypoxic drive. High-flow uncontrolled oxygen can suppress this drive, worsen hypercapnia, and precipitate respiratory failure. The Venturi mask provides precise oxygen delivery. Target SpO₂ 88–92% per GOLD guidelines.',
        },
        {
          id: 'pna-c2b',
          text: 'Apply a non-rebreather mask at 15L O₂ to maximize oxygenation — he is critically hypoxic',
          nextSceneId: 'pna-scene-3-nrb',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ A non-rebreather mask delivers approximately 60–90% FiO₂ — far too high for a COPD patient with CO₂ retention. While the SpO₂ of 84% needs treatment, this is not the safest approach for Frank. High FiO₂ can suppress hypoxic drive and worsen CO₂ retention.',
          rationale: 'Non-rebreather masks are appropriate for non-COPD patients with acute severe hypoxia. In COPD with hypercapnia, controlled low-flow oxygen (Venturi mask) targeting SpO₂ 88–92% is safer. Worsening hypercapnia from over-oxygenation can be as dangerous as the hypoxia.',
        },
        {
          id: 'pna-c2c',
          text: 'Keep him on nasal cannula at 6L — he is already on supplemental oxygen so monitor him',
          nextSceneId: 'pna-scene-3-nc-only',
          points: 0,
          isCorrect: false,
          feedback: '❌ SpO₂ of 84% is dangerously low and not acceptable even in COPD patients. Target is 88–92%. Nasal cannula at 6L is not a controlled delivery device and does not meet his current oxygen needs. Escalation of oxygen delivery is required.',
          rationale: 'While COPD patients should not be over-oxygenated, SpO₂ of 84% is below the acceptable minimum of 88%. A Venturi mask providing controlled FiO₂ is needed. Acceptable SpO₂ range for COPD: 88–92% (not higher, not lower).',
        },
      ],
    },
    {
      id: 'pna-scene-3-venturi',
      type: 'narrative',
      title: 'Venturi Mask Applied — Reassessment',
      timeElapsed: 15,
      narrative:
        'You apply a 28% Venturi mask. Over 30 minutes, Frank\'s SpO₂ rises to 91%. He still looks fatigued but is slightly less distressed. The hospitalist reviews the ABG and CXR.\n\n"This is a lobar right lower lobe pneumonia on top of his COPD. We need antibiotics now — within the hour — per sepsis bundle timing. Let\'s get blood cultures first, then start empiric antibiotics."\n\nBlood cultures are drawn. The physician orders: Ceftriaxone 1g IV q24h + Doxycycline 100 mg PO BID (given his azithromycin intolerance). She also orders a respiratory therapy consult for bronchodilator nebulization.\n\nTwo hours later, Frank\'s SpO₂ drops to 86% despite the Venturi mask. His RR is now 34, and he is using severe accessory muscles. He appears exhausted.',
      clinicalNote:
        '⏰ Antibiotic Timing in Pneumonia: The first antibiotic dose should ideally be given within 4 hours of diagnosis (within 1 hour if sepsis criteria met). Empiric CAP coverage targets Streptococcus pneumoniae and atypicals. Given azithromycin intolerance, doxycycline is an alternative atypical agent.',
      nextSceneId: 'pna-scene-4-deterioration-decision',
    },
    {
      id: 'pna-scene-3-nrb',
      type: 'narrative',
      title: 'Non-Rebreather Mask Applied — Complication',
      timeElapsed: 15,
      narrative:
        'You apply a non-rebreather mask at 15L. His SpO₂ rises to 97% and you feel reassured. However, one hour later, Frank is less responsive. His repeat ABG: PaCO₂ 72 mmHg, pH 7.22. His CO₂ has climbed significantly.\n\nThe physician reviews the case. "His CO₂ retention is worsening — the high FiO₂ suppressed his hypoxic drive. We need to drop to a Venturi mask and likely start BiPAP. This could have been avoided with controlled oxygen therapy."',
      clinicalNote:
        '⚠️ Oxygen-Induced Hypercapnia in COPD: High-flow oxygen in COPD patients can worsen CO₂ retention through multiple mechanisms: suppression of hypoxic drive, the Haldane effect (CO₂ released from hemoglobin), and V/Q mismatch. Target SpO₂ 88–92% with controlled delivery devices.',
      nextSceneId: 'pna-scene-4-deterioration-decision',
    },
    {
      id: 'pna-scene-3-nc-only',
      type: 'narrative',
      title: 'Continued Hypoxia — Deterioration',
      timeElapsed: 15,
      narrative:
        'Frank remains on 6L nasal cannula with SpO₂ oscillating between 82–85%. Over the next 20 minutes, he becomes increasingly agitated and confused — signs of worsening hypoxia affecting his cerebral oxygenation.\n\nThe physician is notified urgently. "He needs more oxygen — his brain is starving. We need to escalate his oxygen delivery to a controlled-FiO₂ device and consider BiPAP immediately."',
      clinicalNote:
        '🚨 Hypoxia Red Flags: SpO₂ < 88% is dangerous in COPD. Signs of cerebral hypoxia include agitation, confusion, and restlessness. These may be misattributed to behavior or dementia in elderly patients. Always check SpO₂ first when a COPD patient becomes acutely confused.',
      nextSceneId: 'pna-scene-4-deterioration-decision',
    },
    {
      id: 'pna-scene-4-deterioration-decision',
      type: 'decision',
      title: 'Respiratory Deterioration — Escalation',
      timeElapsed: 90,
      narrative:
        'Frank is now fatigued with an RR of 34, SpO₂ 86% on Venturi mask 28%, and pH 7.28 on repeat ABG. PaCO₂ has climbed to 64 mmHg. He can barely speak. He is exhausted from the work of breathing.\n\nThe physician asks: "What should we consider at this point for respiratory support?"',
      choices: [
        {
          id: 'pna-c4a',
          text: 'Initiate BiPAP (non-invasive positive pressure ventilation) immediately with IPAP 12 / EPAP 4',
          nextSceneId: 'pna-scene-5-bipap',
          points: 60,
          isCorrect: true,
          feedback: '✅ Excellent! BiPAP is the gold standard for acute hypercapnic respiratory failure in COPD and pneumonia. It reduces work of breathing, improves ventilation, and has been shown to reduce the need for intubation and mortality. It should be initiated promptly in patients who are tiring.',
          rationale: 'Non-invasive positive pressure ventilation (BiPAP) is first-line therapy for acute hypercapnic respiratory failure (pH < 7.35, PaCO₂ > 45). It reduces respiratory muscle fatigue, improves gas exchange, and decreases intubation rates in COPD exacerbations with pneumonia.',
        },
        {
          id: 'pna-c4b',
          text: 'Increase the Venturi mask FiO₂ to 40% and reassess in one hour',
          nextSceneId: 'pna-scene-5-delay',
          points: 0,
          isCorrect: false,
          feedback: '❌ Simply increasing FiO₂ will not address the underlying problem of hypoventilation and CO₂ retention. Frank is exhausted and his respiratory muscles are failing — increasing oxygen without ventilatory support will worsen hypercapnia. BiPAP is urgently needed.',
          rationale: 'The primary problem is ventilatory failure (high CO₂, acidosis), not just oxygenation failure. Increasing FiO₂ addresses oxygenation but ignores the failing ventilatory mechanics. BiPAP provides both oxygenation and ventilation support through positive pressure.',
        },
        {
          id: 'pna-c4c',
          text: 'Prepare for emergent endotracheal intubation immediately',
          nextSceneId: 'pna-scene-5-intubation',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Intubation is the last resort. BiPAP should always be tried first in COPD patients with hypercapnic respiratory failure unless there are absolute contraindications (apnea, inability to protect airway, hemodynamic instability). Intubation in COPD is associated with prolonged ventilator dependence.',
          rationale: 'Invasive mechanical ventilation in COPD carries significant risks: prolonged weaning, ventilator-associated pneumonia, and ICU complications. BiPAP has demonstrated non-inferiority or superiority to intubation in COPD exacerbations with pneumonia in multiple RCTs. Always try NIV first.',
        },
      ],
    },
    {
      id: 'pna-scene-5-bipap',
      type: 'narrative',
      title: 'BiPAP Initiated — Transfer to ICU',
      timeElapsed: 100,
      narrative:
        'BiPAP is initiated at IPAP 12 / EPAP 4. You work with Frank to ensure a good mask seal and provide reassurance. "This mask will help you breathe — try to relax and let the machine support you. It might feel strange at first."\n\nWithin 30 minutes, his RR decreases to 24, SpO₂ improves to 91%, and he appears less distressed. Repeat ABG at 1 hour: pH 7.34, PaCO₂ 52, PaO₂ 68 — improving.\n\nThe hospitalist arranges ICU transfer for continued BiPAP monitoring, given the severity of his illness.',
      clinicalNote:
        '🩺 Nursing Care on BiPAP:\n• Check mask fit — leaks reduce effectiveness and cause skin breakdown\n• Monitor for tolerance — anxiety is common; reassurance and sedation avoidance are key\n• Keep head of bed > 30°\n• Provide mouth care q2h (mouth breathing occurs around mask)\n• Have suction available\n• Absolute contraindications to BiPAP: apnea, inability to protect airway, vomiting risk',
      nextSceneId: 'pna-scene-6-end',
    },
    {
      id: 'pna-scene-5-delay',
      type: 'narrative',
      title: 'Delayed Escalation — Crisis',
      timeElapsed: 100,
      narrative:
        'One hour later, Frank\'s SpO₂ is 82% and his pH drops to 7.22. He is barely responsive, unable to maintain his airway. The physician is called emergently.\n\n"We needed BiPAP an hour ago. Now we\'re likely looking at intubation. This could have been avoided with earlier escalation."',
      clinicalNote:
        '⚠️ Recognizing the Pre-Intubation Window: Early initiation of BiPAP in patients with hypercapnic respiratory failure prevents intubation. Key signs of impending respiratory arrest: exhaustion, inability to speak, diaphoresis, desaturation despite oxygen, and deteriorating ABG. Act before the patient deteriorates further.',
      nextSceneId: 'pna-scene-6-end',
    },
    {
      id: 'pna-scene-5-intubation',
      type: 'narrative',
      title: 'Intubation — High-Risk Procedure in COPD',
      timeElapsed: 100,
      narrative:
        'The team proceeds with intubation. Given Frank\'s severe COPD, the anesthesiologist warns: "This is going to be very difficult to wean. Air trapping, auto-PEEP, and prolonged ventilator dependence are high risks in severe COPD. We should have tried BiPAP first."\n\nFrank is intubated and transferred to the ICU. The attending documents that BiPAP should have been trialed prior to invasive ventilation per evidence-based guidelines.',
      clinicalNote:
        '📚 NIV vs. Intubation in COPD: Multiple RCTs demonstrate that BiPAP reduces mortality, intubation rate, and ICU length of stay in COPD exacerbations with moderate-severe hypercapnic respiratory failure. Intubation should be reserved for BiPAP failure, apnea, hemodynamic collapse, or inability to protect the airway.',
      nextSceneId: 'pna-scene-6-end',
    },
    {
      id: 'pna-scene-6-end',
      type: 'end',
      title: 'Case Complete — Pneumonia with Respiratory Failure',
      timeElapsed: 150,
      narrative:
        'Frank is admitted to the ICU for continued management of his pneumonia with hypercapnic respiratory failure. This case highlighted the complexities of managing respiratory failure in a patient with underlying COPD.\n\nKey Learning Points:\n• Target SpO₂ 88–92% in COPD — use controlled FiO₂ devices (Venturi mask)\n• High FiO₂ can worsen CO₂ retention in COPD via hypoxic drive suppression and Haldane effect\n• Early BiPAP in hypercapnic respiratory failure reduces intubation and mortality\n• Antibiotics should be initiated within 1 hour if sepsis criteria met\n• Monitor for early signs of ventilatory fatigue: rising RR, declining SpO₂, worsening ABG, exhaustion',
      endType: 'success',
    },
  ],
};
