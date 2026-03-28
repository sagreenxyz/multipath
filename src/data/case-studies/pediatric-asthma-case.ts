import type { CaseStudy } from '../../types/case-study.js';

export const pediatricAsthmaCase: CaseStudy = {
  id: 'pediatric-asthma-exacerbation',
  title: 'Little Lungs, Big Emergency',
  subtitle: 'Pediatric Asthma Exacerbation',
  description:
    'An 8-year-old male is brought to the pediatric emergency department by his mother with acute worsening asthma. He has been wheezing for 4 hours and his rescue inhaler is not working. As the pediatric ED nurse, you must rapidly assess severity, initiate bronchodilator therapy, and recognize when the child is at risk of respiratory failure.',
  difficulty: 'intermediate',
  specialty: 'Pediatrics / Emergency',
  tags: ['asthma', 'pediatric', 'bronchospasm', 'albuterol', 'respiratory distress', 'peak flow', 'corticosteroids', 'PICU'],
  estimatedTime: 25,
  maxScore: 250,
  learningObjectives: [
    { id: 'lo1', description: 'Classify the severity of a pediatric asthma exacerbation using the Pediatric Respiratory Assessment Measure (PRAM) or clinical indicators' },
    { id: 'lo2', description: 'Administer and evaluate the response to first-line bronchodilator therapy (albuterol, ipratropium)' },
    { id: 'lo3', description: 'Recognize signs of severe and impending respiratory failure in a child with asthma' },
    { id: 'lo4', description: 'Implement appropriate escalation of care including IV magnesium sulfate and PICU criteria' },
    { id: 'lo5', description: 'Provide developmentally appropriate care and family education in pediatric asthma management' },
  ],
  patient: {
    name: 'Marcus Webb',
    age: 8,
    gender: 'male',
    weight: 28,
    height: 128,
    allergies: ['Aspirin (exacerbates asthma)', 'Cat dander (asthma trigger)'],
    currentMedications: [
      'Albuterol MDI 2 puffs q4–6h PRN (rescue inhaler)',
      'Fluticasone 44 mcg MDI 2 puffs BID (controller — mother reports inconsistent use)',
      'Montelukast 5 mg PO nightly',
    ],
    medicalHistory: [
      'Moderate persistent asthma (diagnosed age 4)',
      'Prior hospitalization for asthma (1 × 2 years ago)',
      'No prior ICU admissions or intubations',
      'Allergic rhinitis',
      'Eczema (mild)',
    ],
    chiefComplaint: 'Severe wheezing and shortness of breath × 4 hours; 6 albuterol puffs at home without improvement; visited grandma\'s house yesterday (cat present)',
    vitals: {
      temperature: 99.2,
      heartRate: 132,
      respiratoryRate: 36,
      bloodPressure: '102/64',
      oxygenSaturation: 90,
      painLevel: 4,
    },
    appearance:
      'Alert 8-year-old boy in obvious respiratory distress. Sitting forward, visibly using accessory muscles (neck and intercostal). Audible expiratory wheeze without a stethoscope. Subcostal and intercostal retractions. Speaking in 3–4 word phrases. Skin is slightly pale. Mother at bedside, anxious. She reports: "He used his inhaler 6 times since this morning and it\'s not helping at all."',
    labs: [
      { name: 'SpO₂ (room air)', value: '90', unit: '%', referenceRange: '≥ 95', abnormal: true, critical: true },
      { name: 'Peak Expiratory Flow', value: '42', unit: '% predicted', referenceRange: '> 70% = mild; 40-70% = moderate; < 40% = severe', abnormal: true, critical: false },
    ],
  },
  startSceneId: 'asthma-scene-1-triage',
  scenes: [
    {
      id: 'asthma-scene-1-triage',
      type: 'narrative',
      title: 'Triage — A Struggling Child',
      timeElapsed: 0,
      narrative:
        'It is 15:20. Marcus Webb is carried into the pediatric ED triage area by his mother. Even before you assess him with instruments, you can hear his expiratory wheeze from across the room. He is sitting hunched forward on the gurney. With each breath, you can see his neck muscles strain and his ribs show as he works to breathe.\n\nHis mother speaks rapidly: "He woke up wheezing this morning — we were at his grandma\'s yesterday, she has cats. He used his blue inhaler 6 times but nothing\'s helping. I\'ve never seen him this bad."\n\nMarcus looks at you with wide eyes and manages: "...can\'t breathe...okay." His SpO₂ reads 90% on room air.',
      clinicalNote:
        '🫁 Pediatric Asthma Severity Classification (Clinical Signs):\n\nMILD: Speaks in full sentences, minimal retractions, SpO₂ ≥ 95%, PEFR > 70%\nMODERATE: Speaks in short phrases, moderate retractions, SpO₂ 91–95%, PEFR 40–70%\nSEVERE: Speaks in words only, severe retractions, SpO₂ < 91%, PEFR < 40%\nIMPENDING FAILURE: Altered LOC, "quiet" chest (no wheeze = no airflow), cyanosis, exhaustion',
      nextSceneId: 'asthma-scene-2-triage-decision',
    },
    {
      id: 'asthma-scene-2-triage-decision',
      type: 'decision',
      title: 'Triage Priority and Initial Action',
      timeElapsed: 2,
      narrative:
        'Marcus is speaking in 3–4 word phrases, has severe retractions, SpO₂ 90% on room air, and peak flow 42% of predicted. His HR is 132.\n\nHow do you classify his severity and what is your IMMEDIATE action?',
      choices: [
        {
          id: 'asthma-c2a',
          text: 'Classify as SEVERE asthma exacerbation; take him immediately to a treatment room and apply oxygen and start continuous albuterol nebulization',
          nextSceneId: 'asthma-scene-3-treatment',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! SpO₂ < 91%, speaking in words only, severe retractions, and PEFR < 40% all indicate a SEVERE exacerbation. Immediate priority-1 triage, supplemental oxygen, and continuous albuterol nebulization are the appropriate first responses. Do not allow him to wait in the triage queue.',
          rationale: 'Severe asthma exacerbation criteria: SpO₂ < 91%, PEFR < 40%, 3–5 word phrases, marked retractions, HR > 120, RR > 30. This requires immediate treatment room placement, oxygen, and continuous bronchodilator therapy. Do not triage to the waiting room — this child could deteriorate rapidly.',
        },
        {
          id: 'asthma-c2b',
          text: 'Classify as MODERATE; give him 2 puffs of albuterol via MDI in triage and reassess in 20 minutes',
          nextSceneId: 'asthma-scene-3-undertreated',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ This is a SEVERE, not moderate, exacerbation. Two puffs of albuterol are grossly insufficient — continuous nebulization is needed. He also cannot wait 20 minutes in triage with SpO₂ of 90% and severe retractions. He needs immediate treatment room placement.',
          rationale: 'Moderate severity criteria: PEFR 40–70%, SpO₂ 91–95%, speaking in short phrases. Marcus meets SEVERE criteria. Two puffs of MDI albuterol are inadequate for this severity level. Continuous or back-to-back nebulized albuterol treatments are the appropriate initial therapy.',
        },
        {
          id: 'asthma-c2c',
          text: 'Prepare for immediate intubation — a SpO₂ of 90% in a child indicates respiratory failure requiring mechanical ventilation',
          nextSceneId: 'asthma-scene-3-intubation-premature',
          points: 0,
          isCorrect: false,
          feedback: '❌ Intubation is a last resort in pediatric asthma. SpO₂ of 90% with ongoing alertness and respiratory effort indicates severe exacerbation, not respiratory failure requiring intubation. Bronchodilator therapy should be initiated immediately. Intubation in asthma is associated with significant risks including barotrauma.',
          rationale: 'Intubation in pediatric asthma is reserved for: apnea, loss of consciousness, extreme exhaustion with impending respiratory arrest, or failure of maximal medical therapy. Initiating bronchodilators, oxygen, and steroids is the appropriate first response. Most severe exacerbations respond to aggressive medical management.',
        },
      ],
    },
    {
      id: 'asthma-scene-3-treatment',
      type: 'narrative',
      title: 'Immediate Treatment Initiated',
      timeElapsed: 10,
      narrative:
        'Marcus is placed in a treatment room on high priority. You apply oxygen via nasal cannula at 4L (SpO₂ improves to 94%). Continuous albuterol nebulization is started (2.5 mg in 3 mL NS, continuous at 5 mg/hr via mask). Ipratropium bromide 0.5 mg is added to the first three treatments.\n\nYou administer oral prednisolone 1 mg/kg (28 mg rounded to 30 mg) as ordered by the pediatric ED physician.\n\nMarcus is frightened. His mother asks you: "Is he going to be okay?" You explain what you\'re doing in age-appropriate language to both Marcus and his mother.\n\nAt 20 minutes:\n• SpO₂: 95% on 4L NC\n• RR: 28 (improved from 36)\n• Retractions: Moderate (improved from severe)\n• Speaking: short sentences\n• Wheeze: Still audible but improved',
      clinicalNote:
        '💨 First-Line Pediatric Asthma Treatment (Severe):\n1. Supplemental oxygen: target SpO₂ ≥ 94%\n2. Albuterol: 0.15 mg/kg (minimum 2.5 mg) nebulized, given continuously for severe cases\n3. Ipratropium: 0.5 mg nebulized, add to first 3 albuterol treatments (improves response in severe exacerbations)\n4. Corticosteroids: Prednisolone 1–2 mg/kg PO (max 60 mg) — improves outcomes, reduces admission\n5. Heliox: Consider for refractory cases (reduces airway resistance)\n6. IV magnesium sulfate: if failing initial bronchodilator therapy',
      nextSceneId: 'asthma-scene-4-reassessment-decision',
    },
    {
      id: 'asthma-scene-3-undertreated',
      type: 'narrative',
      title: 'Under-Treatment — Deterioration',
      timeElapsed: 10,
      narrative:
        'After 2 puffs of albuterol MDI in triage, Marcus remains in the triage area. Over the next 15 minutes, his SpO₂ drops to 86% and he can no longer complete sentences. He is becoming exhausted.\n\nThe charge nurse recognizes the deterioration and immediately transfers him to a treatment room, starting continuous albuterol nebulization and calling the pediatric physician STAT.\n\n"This child should have been in a treatment room 20 minutes ago," the physician notes.',
      clinicalNote:
        '⚠️ Pediatric Asthma Can Deteriorate Rapidly: Children have small airways and limited respiratory reserve. A child who appears stable can deteriorate into respiratory failure within minutes. Early aggressive treatment in a monitored setting prevents intubation in most cases.',
      nextSceneId: 'asthma-scene-4-reassessment-decision',
    },
    {
      id: 'asthma-scene-3-intubation-premature',
      type: 'narrative',
      title: 'Premature Intubation — Complications',
      timeElapsed: 10,
      narrative:
        'Intubation is attempted. Marcus fights the procedure and becomes more hypoxic during the attempt. The pediatric intensivist is called: "We should have tried bronchodilators first. Intubation in asthma carries significant risks — barotrauma, dynamic hyperinflation. Let\'s try aggressive nebulization and magnesium sulfate before going down this road."\n\nMedical management is initiated post-intubation in the PICU, but the risks of ventilator-associated lung injury in asthma are now present.',
      clinicalNote:
        '⚠️ Intubation in Asthma: Ventilating an asthmatic patient is extremely challenging. Air trapping and auto-PEEP can cause hemodynamic collapse. Permissive hypercapnia may be necessary. Intubation should be an absolute last resort — exhaust bronchodilators, steroids, magnesium sulfate, and heliox first.',
      nextSceneId: 'asthma-scene-4-reassessment-decision',
    },
    {
      id: 'asthma-scene-4-reassessment-decision',
      type: 'decision',
      title: 'One Hour Reassessment — Inadequate Response',
      timeElapsed: 60,
      narrative:
        'Marcus has received three back-to-back albuterol/ipratropium treatments and oral prednisolone. At 60 minutes:\n• SpO₂: 93% on 4L NC\n• RR: 30 (still elevated)\n• Retractions: Still moderate\n• PEFR: 48% predicted\n• He is visibly tiring\n\nHe is not meeting criteria for discharge (PEFR > 70%, SpO₂ > 95%, minimal symptoms). He also shows only partial response to initial therapy.\n\nWhat is the most appropriate next step?',
      choices: [
        {
          id: 'asthma-c4a',
          text: 'Administer IV magnesium sulfate 25–75 mg/kg (max 2g) over 20 minutes and prepare for possible PICU admission',
          nextSceneId: 'asthma-scene-5-magnesium',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! IV magnesium sulfate is indicated for severe asthma with incomplete response to first-line bronchodilators. It is a smooth muscle relaxant that causes bronchodilation. Evidence supports its use in pediatric severe asthma exacerbations. PICU planning is appropriate given his trajectory.',
          rationale: 'Magnesium sulfate (25–75 mg/kg IV, max 2g) has proven bronchodilatory effects in severe pediatric asthma not responding adequately to first-line therapy. Multiple RCTs show it reduces PICU admission rates. Tiring pattern, persistent SpO₂ < 95%, PEFR < 50%, and tachycardia despite treatment are indications.',
        },
        {
          id: 'asthma-c4b',
          text: 'Discharge him — PEFR improved from 42% to 48% and SpO₂ is 93%, which shows he is getting better',
          nextSceneId: 'asthma-scene-5-premature-discharge',
          points: 0,
          isCorrect: false,
          feedback: '❌ This patient does not meet discharge criteria and should NOT be discharged. Discharge criteria require SpO₂ ≥ 95% on room air, PEFR > 70%, minimal to no retractions, and adequate response to treatment. He is still hypoxic, still retracting, and showing only partial improvement.',
          rationale: 'Pediatric asthma discharge criteria: SpO₂ ≥ 95% on room air (off supplemental O₂), PEFR > 70% predicted, mild or no retractions, good air entry, able to tolerate oral medications, family education completed. None of these criteria are met.',
        },
        {
          id: 'asthma-c4c',
          text: 'Repeat albuterol every 4 hours as ordered and observe for 2 more hours before re-evaluating',
          nextSceneId: 'asthma-scene-5-delayed-escalation',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ Albuterol every 4 hours is maintenance dosing — not appropriate for a child in active moderate-severe distress who is tiring. In acute severe asthma with incomplete response at 1 hour, continuous nebulization should continue and escalation (magnesium, heliox, PICU consideration) should occur proactively.',
          rationale: 'A child showing partial response at 60 minutes with signs of fatigue needs escalation, not a step down to q4h dosing. In pediatric severe asthma, continuous albuterol nebulization should continue until PEFR > 70%, and escalation to IV magnesium should occur for incomplete responders.',
        },
      ],
    },
    {
      id: 'asthma-scene-5-magnesium',
      type: 'narrative',
      title: 'Magnesium Sulfate Administered — Improving',
      timeElapsed: 80,
      narrative:
        'IV magnesium sulfate 1.5g (53 mg/kg) is administered over 20 minutes. Continuous albuterol nebulization is continued. You monitor for adverse effects (hypotension, bradycardia, flushing — all mild and expected).\n\nAt 90 minutes:\n• SpO₂: 97% on 2L NC\n• RR: 22\n• Retractions: Minimal\n• PEFR: 64% predicted\n• Marcus is speaking in full sentences and asks: "Can I play video games while I wait?"\n\nThe team decides to admit him to the pediatric floor (not PICU) for overnight observation and continued nebulizers.',
      clinicalNote:
        '✅ Family Education Before Discharge (after admission):\n• Identify asthma triggers: allergens (cats), respiratory infections, exercise, cold air, smoke\n• Controller medication adherence: fluticasone must be used DAILY, not just when sick\n• Rescue inhaler: albuterol q4–6h PRN, not daily use (daily use = inadequate control)\n• Written Asthma Action Plan: Green/Yellow/Red zones\n• When to seek emergency care: ≥ 6 albuterol puffs in 24h without improvement\n• Spacer device use for MDI in children\n• Annual flu vaccine and pneumococcal vaccine',
      nextSceneId: 'asthma-scene-6-end',
    },
    {
      id: 'asthma-scene-5-premature-discharge',
      type: 'narrative',
      title: 'Premature Discharge — Return to ED',
      timeElapsed: 80,
      narrative:
        'Marcus is discharged with a prescription for prednisone and instructions to continue his inhaler. Three hours later, his mother calls 911 — he is unresponsive. He returns by ambulance in respiratory failure, requiring intubation in the ED.\n\nInvestigation reveals he was discharged while still hypoxic and fatigued. Post-discharge bronchospasm progressed to respiratory failure at home.',
      clinicalNote:
        '🚨 Post-Discharge Asthma Relapse: Up to 15% of children discharged from the ED after an asthma exacerbation will return within 72 hours. Ensure discharge criteria are met, prescribe a short course of oral steroids, ensure follow-up within 1–3 days, and provide a written asthma action plan.',
      nextSceneId: 'asthma-scene-6-end',
    },
    {
      id: 'asthma-scene-5-delayed-escalation',
      type: 'narrative',
      title: 'Delayed Escalation — PICU Transfer',
      timeElapsed: 80,
      narrative:
        'Two hours later, Marcus is exhausted. His SpO₂ drops to 87% and he can barely keep his eyes open. The pediatric emergency physician calls a PICU consult.\n\n"He should have had IV magnesium at the 60-minute mark. Now he\'s too tired to breathe effectively. We\'re looking at potential intubation." He is transferred to the PICU.',
      clinicalNote:
        '⚠️ Recognizing Pediatric Respiratory Fatigue: Children have smaller respiratory reserves than adults and can decompensate rapidly. Warning signs of impending respiratory failure: paradoxical breathing, decreasing RR (may indicate exhaustion, not improvement), altered mental status, silent chest, cyanosis. Act before these signs appear.',
      nextSceneId: 'asthma-scene-6-end',
    },
    {
      id: 'asthma-scene-6-end',
      type: 'end',
      title: 'Case Complete — Pediatric Asthma Exacerbation',
      timeElapsed: 180,
      narrative:
        'Marcus is admitted to the pediatric floor, improves overnight, and is discharged the following morning with comprehensive asthma education, a written action plan, and follow-up in 48 hours with his pediatrician.\n\nKey Learning Points:\n• Severe pediatric asthma: SpO₂ < 91%, PEFR < 40%, words only, severe retractions → immediate treatment room\n• First-line: supplemental O₂, continuous albuterol nebulization, ipratropium (first 3 treatments), oral corticosteroids\n• IV magnesium sulfate for incomplete responders at 60 minutes\n• Discharge criteria: SpO₂ ≥ 95% on room air, PEFR > 70%, minimal retractions\n• Developmentally appropriate communication with child and parent is essential\n• Discharge education: written action plan, controller adherence, trigger avoidance',
      endType: 'success',
    },
  ],
};
