import type { CaseStudy } from '../../types/case-study.js';

export const alcoholWithdrawalCase: CaseStudy = {
  id: 'alcohol-withdrawal-delirium',
  title: 'The Storm Within',
  subtitle: 'Alcohol Withdrawal Syndrome and Delirium Tremens',
  description:
    'A 44-year-old male admitted for pneumonia begins showing signs of alcohol withdrawal 24 hours after admission. He had denied significant alcohol use on intake. As the medical-surgical nurse, you must recognize the escalating signs of alcohol withdrawal syndrome, administer appropriate benzodiazepines, and prevent life-threatening delirium tremens.',
  difficulty: 'advanced',
  specialty: 'Medical-Surgical / Addiction Medicine',
  tags: ['alcohol withdrawal', 'delirium tremens', 'CIWA-Ar', 'benzodiazepines', 'seizure', 'Wernicke', 'thiamine', 'substance use'],
  estimatedTime: 35,
  maxScore: 350,
  learningObjectives: [
    { id: 'lo1', description: 'Recognize the progression and timeline of alcohol withdrawal syndrome (AWS)' },
    { id: 'lo2', description: 'Perform and score the Clinical Institute Withdrawal Assessment for Alcohol (CIWA-Ar)' },
    { id: 'lo3', description: 'Administer symptom-triggered benzodiazepine therapy based on CIWA-Ar score' },
    { id: 'lo4', description: 'Recognize and respond to alcohol withdrawal seizures and delirium tremens' },
    { id: 'lo5', description: 'Implement Wernicke encephalopathy prevention with thiamine replacement' },
  ],
  patient: {
    name: 'Daniel Morrow',
    age: 44,
    gender: 'male',
    weight: 78,
    height: 178,
    allergies: ['No known drug allergies'],
    currentMedications: [
      'Azithromycin 500 mg IV daily (for pneumonia)',
      'Ceftriaxone 1g IV q24h (for pneumonia)',
      'Thiamine 100 mg IV daily (started on admission — hospital protocol)',
      'Lorazepam (Ativan) PRN CIWA-Ar ≥ 8 (ordered but not yet given)',
    ],
    medicalHistory: [
      'Community-acquired pneumonia (current admission)',
      'Heavy alcohol use (denied on intake — wife later reports 1 pint of vodka daily × 10+ years)',
      'Hypertension (previously managed, not on medications)',
      'Gastritis',
      'Tobacco use (1 ppd)',
    ],
    chiefComplaint: '44-year-old male, 24 hours post-admission for CAP, now with tremors, diaphoresis, agitation, and visual hallucinations',
    vitals: {
      temperature: 100.8,
      heartRate: 118,
      respiratoryRate: 22,
      bloodPressure: '158/96',
      oxygenSaturation: 96,
      painLevel: 3,
    },
    appearance:
      'Middle-aged male, visibly tremulous with bilateral hand tremors. Diaphoretic and flushed. Agitated — frequently attempting to get out of bed stating "there are spiders on the wall." Alert but disoriented to place ("I\'m at my brother\'s house"). Easily startled by the door opening (hyperreflexia). His wife called the unit to report she is concerned because "he drinks a lot more than he told the doctors."',
    labs: [
      { name: 'BAL (blood alcohol level)', value: '0.00', unit: '%', referenceRange: '0.00', abnormal: false, critical: false },
      { name: 'Magnesium', value: '1.3', unit: 'mg/dL', referenceRange: '1.7–2.2', abnormal: true, critical: false },
      { name: 'Potassium', value: '3.1', unit: 'mEq/L', referenceRange: '3.5–5.0', abnormal: true, critical: false },
      { name: 'Phosphorus', value: '2.0', unit: 'mg/dL', referenceRange: '2.5–4.5', abnormal: true, critical: false },
      { name: 'Sodium', value: '134', unit: 'mEq/L', referenceRange: '136–145', abnormal: true, critical: false },
      { name: 'ALT', value: '68', unit: 'U/L', referenceRange: '7–56', abnormal: true, critical: false },
      { name: 'GGT', value: '312', unit: 'U/L', referenceRange: '< 60', abnormal: true, critical: false },
      { name: 'WBC', value: '14.8', unit: 'K/µL', referenceRange: '4.5–11.0', abnormal: true, critical: false },
      { name: 'MCV', value: '104', unit: 'fL', referenceRange: '80–100', abnormal: true, critical: false },
    ],
  },
  startSceneId: 'aws-scene-1-recognition',
  scenes: [
    {
      id: 'aws-scene-1-recognition',
      type: 'narrative',
      title: 'Recognizing Alcohol Withdrawal',
      timeElapsed: 0,
      narrative:
        'It is 14:00 on hospital day 2. Daniel Morrow, admitted yesterday for community-acquired pneumonia, has been recovering well until now. During your afternoon rounds, you find him sitting up in bed, visibly trembling. Sweat soaks his gown. He grabs your arm when you enter: "There are bugs — do you see them? On the wall!"\n\nHis wife has called: "I have to tell you — Danny hasn\'t told the truth about his drinking. He drinks at least a pint of vodka every day, sometimes more. He hasn\'t had a drink since yesterday morning when he came in."\n\nYou recall that on admission 24 hours ago, he reported "a few drinks on the weekends." His BAL on admission was 0.00.',
      clinicalNote:
        '⏰ Alcohol Withdrawal Timeline:\n• 6–24 hours: Tremors, anxiety, nausea, diaphoresis, tachycardia, hypertension\n• 12–48 hours: SEIZURES (grand mal) — peak risk\n• 24–72 hours: Alcoholic hallucinosis (visual > auditory > tactile)\n• 48–96 hours: DELIRIUM TREMENS (DTs) — peak risk — autonomic storm, life-threatening\n\nDTs occur in ~5% of AWS patients but carry 5–25% mortality if untreated.',
      nextSceneId: 'aws-scene-2-ciwa-decision',
    },
    {
      id: 'aws-scene-2-ciwa-decision',
      type: 'decision',
      title: 'CIWA-Ar Assessment and Initial Response',
      timeElapsed: 5,
      narrative:
        'Daniel has tremors, diaphoresis, visual hallucinations ("bugs on the wall"), and agitation. His HR is 118, BP 158/96. He was admitted only 24 hours ago and has been without alcohol for approximately 26 hours (his last drink was the morning before admission).\n\nWhat is your FIRST action?',
      choices: [
        {
          id: 'aws-c2a',
          text: 'Perform a CIWA-Ar assessment to quantify his withdrawal severity, notify the physician, and prepare to administer benzodiazepines per the standing CIWA protocol',
          nextSceneId: 'aws-scene-3-ciwa',
          points: 70,
          isCorrect: true,
          feedback: '✅ Correct! The CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol) is the validated tool to score AWS severity and guide benzodiazepine dosing. With visible tremors, hallucinations, and autonomic instability, his score will likely be ≥ 10 — requiring immediate benzodiazepine therapy.',
          rationale: 'CIWA-Ar guides symptom-triggered therapy (STT), which has been shown to use fewer benzodiazepines and shorter treatment than fixed-dose schedules. The 10 items (tremor, perspiration, anxiety, agitation, perceptual disturbances, headache, nausea, seizures, orientation, hallucinations) are scored 0–7 each (total 0–67).',
        },
        {
          id: 'aws-c2b',
          text: 'Restrain him to the bed for safety and call security — he is confused and a fall risk',
          nextSceneId: 'aws-scene-3-restraint',
          points: 0,
          isCorrect: false,
          feedback: '❌ Physical restraints worsen agitation in alcohol withdrawal and can precipitate delirium tremens. The appropriate intervention is pharmacologic management with benzodiazepines, not physical restraints. Restraining a withdrawing patient without benzodiazepines is both harmful and unethical.',
          rationale: 'Physical restraints are contraindicated as a primary intervention in alcohol withdrawal agitation. They increase physiologic stress, worsen autonomic instability, and can precipitate delirium tremens. Benzodiazepines are the appropriate treatment — they reduce CNS hyperexcitability safely.',
        },
        {
          id: 'aws-c2c',
          text: 'Reassure him that the bugs are not real and encourage him to go to sleep — he is probably just confused from his pneumonia',
          nextSceneId: 'aws-scene-3-missed',
          points: 0,
          isCorrect: false,
          feedback: '❌ Attributing alcohol withdrawal to his pneumonia is a dangerous missed diagnosis. The timeline (24–48 hours without alcohol), wife\'s report of heavy daily drinking, visual hallucinations, tremors, and autonomic instability are classic AWS. Untreated, this can progress to seizures and fatal delirium tremens.',
          rationale: 'Alcohol withdrawal is commonly missed in hospitalized patients who conceal their use. Key indicators: patient admitted 24–48 hours ago, developing tremors, autonomic instability, and hallucinations. Ask directly about alcohol use, contact family for collateral history, and check labs (elevated GGT, elevated MCV, liver enzymes).',
        },
      ],
    },
    {
      id: 'aws-scene-3-ciwa',
      type: 'narrative',
      title: 'CIWA-Ar Score and Treatment Initiated',
      timeElapsed: 10,
      narrative:
        'You perform the CIWA-Ar assessment:\n• Nausea/vomiting: 2\n• Tremor: 4 (severe visible tremor, even with arms extended)\n• Diaphoresis: 4 (beads of sweat on forehead)\n• Anxiety: 4 (moderately anxious, almost panicky)\n• Agitation: 3 (moderate restlessness)\n• Tactile disturbances: 3 (intermittent itching sensation, "pins and needles")\n• Auditory disturbances: 2 (harsh sounds, startles easily)\n• Visual disturbances: 5 (sees bugs on wall — genuine hallucinations)\n• Headache: 2\n• Orientation: 2 (cannot do serial additions; knows name but not date/place)\n\nCIWA-Ar TOTAL: 31 — SEVERE withdrawal\n\nYou notify the physician immediately. Per protocol, lorazepam (Ativan) 2 mg IV is ordered STAT for CIWA ≥ 10. You administer it, ensure padded side rails are up, and move him to a room near the nursing station.',
      clinicalNote:
        '📊 CIWA-Ar Score Interpretation:\n• Score 0–9: Mild — supportive care, monitoring\n• Score 10–15: Moderate — begin PRN benzodiazepines (lorazepam 1–2 mg IV/PO)\n• Score ≥ 16: Severe — aggressive benzodiazepine therapy, consider ICU\n• Score ≥ 20 with DTs: ICU transfer, possible benzodiazepine drip\n\nGoal: Prevent seizures and DTs by maintaining CIWA-Ar < 8–10. Reassess every 1–2 hours.',
      nextSceneId: 'aws-scene-4-seizure-decision',
    },
    {
      id: 'aws-scene-3-restraint',
      type: 'narrative',
      title: 'Restraints Applied — Deterioration',
      timeElapsed: 10,
      narrative:
        'Security is called and physical restraints are applied. Daniel becomes increasingly agitated and combative against the restraints. His HR climbs to 142, BP rises to 174/108. The restraints are triggering an autonomic crisis.\n\nThe physician arrives and immediately orders the restraints removed and lorazepam 2 mg IV administered. "Physical restraints in alcohol withdrawal worsen outcomes. The physiologic stress can trigger seizures. He needed benzodiazepines, not restraints."',
      clinicalNote:
        '⚠️ Physical Restraints in Alcohol Withdrawal: Physical restraints cause physiologic stress that worsens autonomic instability and can precipitate withdrawal seizures or accelerate progression to delirium tremens. Pharmacologic management (benzodiazepines) is the safe and effective approach.',
      nextSceneId: 'aws-scene-4-seizure-decision',
    },
    {
      id: 'aws-scene-3-missed',
      type: 'narrative',
      title: 'Missed Diagnosis — Seizure Occurs',
      timeElapsed: 10,
      narrative:
        'You attribute his confusion to pneumonia and document "mild confusion, likely from infection." Forty minutes later, the patient call light is triggered by his roommate — Daniel is on the floor having a generalized tonic-clonic seizure. His roommate shouts: "He\'s having a fit!"\n\nYou rush in. The seizure lasts 90 seconds and he is post-ictal. This was an alcohol withdrawal seizure that could have been prevented with timely CIWA-Ar assessment and benzodiazepine therapy.',
      clinicalNote:
        '⚠️ Alcohol Withdrawal Seizures: Occur in 10–30% of untreated AWS, typically 12–48 hours after the last drink. They are generalized tonic-clonic, usually brief (< 3 minutes), and may be singular or in clusters. Risk factors: prior withdrawal seizures, high CIWA score, severe withdrawal. Benzodiazepines are first-line prevention AND treatment.',
      nextSceneId: 'aws-scene-4-seizure-decision',
    },
    {
      id: 'aws-scene-4-seizure-decision',
      type: 'decision',
      title: 'Alcohol Withdrawal Seizure — Response',
      timeElapsed: 60,
      narrative:
        'Despite initial benzodiazepine treatment, Daniel has a sudden generalized tonic-clonic seizure at the 60-minute mark (CIWA was 24 at last assessment). The seizure has been ongoing for 2 minutes. You are at the bedside.\n\nWhat is your priority response?',
      choices: [
        {
          id: 'aws-c4a',
          text: 'Time the seizure, protect him from injury (side rails padded, turn to side), call for help, and prepare IV lorazepam for administration if seizure exceeds 5 minutes or recurs',
          nextSceneId: 'aws-scene-5-seizure-managed',
          points: 70,
          isCorrect: true,
          feedback: '✅ Correct! During an active seizure: time it, protect the patient (turn to side to prevent aspiration, pad rails, do not restrain or force anything in the mouth), call for help, and have IV benzodiazepines ready. Alcohol withdrawal seizures are usually self-limiting (< 3 minutes). Benzodiazepines for status epilepticus (> 5 minutes) or clusters.',
          rationale: 'Seizure first aid: (1) Time it, (2) Side position to prevent aspiration, (3) Protect from injury, (4) Do NOT insert anything in the mouth, (5) Call for help, (6) IV lorazepam 2–4 mg for status epilepticus. Most alcohol withdrawal seizures are brief. Prevention with benzodiazepines is far better than treating a seizure.',
        },
        {
          id: 'aws-c4b',
          text: 'Insert an oral airway immediately to prevent aspiration and hold him still to prevent injury',
          nextSceneId: 'aws-scene-5-injury',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ Do NOT attempt to insert anything in a seizing patient\'s mouth — teeth can break and dental fragments can cause aspiration. Do NOT try to hold a seizing person still — this can cause musculoskeletal injury to both patient and nurse. Position on side, protect, time, and call for help.',
          rationale: 'Common seizure first aid errors: (1) Inserting objects in the mouth — never do this, can cause injury and aspiration. (2) Restraining movements — can cause joint dislocations or injuries. (3) Giving oral medications — aspiration risk. The correct approach: side position, protect, time, call for help, IV benzodiazepine if > 5 min.',
        },
        {
          id: 'aws-c4c',
          text: 'Administer IV phenytoin (Dilantin) immediately — this is the standard first-line anticonvulsant for seizures',
          nextSceneId: 'aws-scene-5-phenytoin',
          points: 0,
          isCorrect: false,
          feedback: '❌ Phenytoin is NOT effective for alcohol withdrawal seizures. The mechanism of AWS seizures is GABA-A receptor downregulation (not sodium channel dysfunction, which phenytoin targets). Benzodiazepines (lorazepam, diazepam) are the only evidence-based treatment for AWS seizures.',
          rationale: 'Alcohol withdrawal seizures are caused by CNS hyperexcitability from relative GABA deficiency and glutamate excess, following alcohol\'s chronic GABA-potentiating effect. Phenytoin acts on sodium channels and has no efficacy in this mechanism. Benzodiazepines enhance GABA activity — directly targeting the pathophysiology.',
        },
      ],
    },
    {
      id: 'aws-scene-5-seizure-managed',
      type: 'narrative',
      title: 'Seizure Resolves — DTs Risk Assessment',
      timeElapsed: 65,
      narrative:
        'The seizure stops at 2 minutes 40 seconds. Daniel is post-ictal — breathing, with Spo₂ 95%. You have positioned him on his side. The physician arrives and administers lorazepam 2 mg IV after the seizure resolves (to prevent recurrence).\n\nThe physician is concerned about delirium tremens. "His CIWA was 31, he had a breakthrough seizure despite lorazepam — he needs ICU monitoring. DTs can be fatal."\n\nYou prepare for ICU transfer. Before transfer, the physician specifically asks: "Has he received thiamine today?"',
      clinicalNote:
        '🧠 Wernicke Encephalopathy Prevention:\nAll patients with alcohol use disorder or at risk for AWS must receive THIAMINE before any glucose-containing fluids. Glucose metabolism depletes thiamine (Vitamin B1), precipitating Wernicke encephalopathy (triad: encephalopathy, ataxia, ophthalmoplegia).\n\nTreatment: Thiamine 100–500 mg IV BEFORE glucose or dextrose-containing fluids.',
      nextSceneId: 'aws-scene-6-dts-decision',
    },
    {
      id: 'aws-scene-5-injury',
      type: 'narrative',
      title: 'Mouth Injury During Seizure',
      timeElapsed: 65,
      narrative:
        'Your attempt to insert an oral airway during the seizure results in Daniel biting down on your finger and breaking his right lateral incisor. A dental fragment falls to the back of his throat — you suction it out before aspiration occurs.\n\nThe physician reviews the incident: "Objects must never be placed in the mouth during a seizure. Position on the side to protect the airway naturally. Aspiration prevention is achieved with side positioning, not oral airways in a seizing patient."',
      clinicalNote:
        '⚠️ Seizure Management Errors:\n• Never put objects in the mouth (fingers, oral airways, padded sticks — all contraindicated)\n• Never restrain movements\n• Do put patient on side (recovery position) to protect airway\n• Do cushion the head\n• Do time the seizure\n• Do call for help\n• Do prepare IV benzodiazepines for status (> 5 min)',
      nextSceneId: 'aws-scene-6-dts-decision',
    },
    {
      id: 'aws-scene-5-phenytoin',
      type: 'narrative',
      title: 'Phenytoin — Ineffective for AWS Seizures',
      timeElapsed: 65,
      narrative:
        'Phenytoin 20 mg/kg is given. The seizure stops after 3 minutes (naturally, not due to phenytoin). However, 20 minutes later, Daniel has a second seizure. Phenytoin is not preventing recurrence.\n\nThe physician is called: "Phenytoin doesn\'t work for alcohol withdrawal seizures. The mechanism is completely different. He needs lorazepam IV, not phenytoin. Get neurology and ICU involved."',
      clinicalNote:
        '📚 Mechanism-Based Treatment: Alcohol withdrawal seizures result from GABA-A receptor downregulation. Only GABA-agonists (benzodiazepines, phenobarbital) are effective. Phenytoin, which blocks sodium channels, has no role in AWS seizure prophylaxis or treatment — multiple studies confirm no benefit.',
      nextSceneId: 'aws-scene-6-dts-decision',
    },
    {
      id: 'aws-scene-6-dts-decision',
      type: 'decision',
      title: 'Delirium Tremens — ICU Management',
      timeElapsed: 80,
      narrative:
        'Daniel is transferred to the ICU. His CIWA-Ar is now 38. He is wildly agitated, diaphoretic, febrile (101.6°F), tachycardic (HR 148), and hypertensive (BP 182/112). He has florid visual hallucinations and is fighting the staff.\n\nThe ICU physician asks: "What is our goal for benzodiazepine dosing in delirium tremens?"',
      choices: [
        {
          id: 'aws-c6a',
          text: 'Administer benzodiazepines to achieve light sedation (calm but arousable), titrating to CIWA-Ar < 8–10 — use IV lorazepam or diazepam as needed; consider a continuous infusion if boluses are insufficient',
          nextSceneId: 'aws-scene-7-end',
          points: 70,
          isCorrect: true,
          feedback: '✅ Correct! In severe DTs, the goal is symptom control to CIWA-Ar < 8–10 (mild withdrawal), not deep sedation. Escalating IV benzodiazepines — bolus dosing first, then infusion if needed — is the standard. Adequate dosing requires close monitoring and willingness to give large cumulative doses.',
          rationale: 'Delirium tremens requires aggressive benzodiazepine therapy. Some patients require hundreds of milligrams of lorazepam equivalent. The clinical endpoint is mild sedation and CIWA-Ar < 8–10. Phenobarbital is an alternative for refractory DTs. Propofol infusion may be needed in mechanically ventilated patients.',
        },
        {
          id: 'aws-c6b',
          text: 'Use minimal benzodiazepines to avoid respiratory depression — give oral diazepam 10 mg q6h as a fixed schedule',
          nextSceneId: 'aws-scene-7-under-sedated',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ Fixed low-dose oral benzodiazepines are grossly insufficient for severe DTs with CIWA 38. This patient requires IV, titrated, high-dose benzodiazepines. The risk of respiratory depression from adequate benzodiazepine dosing is far lower than the risk of death from untreated DTs.',
          rationale: 'Untreated DTs carry 5–25% mortality. Adequate benzodiazepine dosing, even if high doses are required, is lifesaving. In the ICU with respiratory monitoring and intubation available as backup, the goal is symptom control. Undertreating out of fear of respiratory depression is a dangerous error.',
        },
        {
          id: 'aws-c6c',
          text: 'Administer haloperidol (Haldol) to manage the hallucinations and agitation',
          nextSceneId: 'aws-scene-7-haldol',
          points: 0,
          isCorrect: false,
          feedback: '❌ Haloperidol (an antipsychotic) is NOT the treatment for alcohol withdrawal delirium. It does not address the underlying GABA deficiency, does not prevent seizures, lowers the seizure threshold, and can worsen cardiac arrhythmias (QT prolongation). Benzodiazepines are the ONLY evidence-based treatment.',
          rationale: 'Antipsychotics (haloperidol, quetiapine) may be used as adjuncts for refractory hallucinations but NEVER replace benzodiazepines in DTs. Haloperidol reduces the seizure threshold — dangerous in patients already at seizure risk. Benzodiazepines must be the primary treatment.',
        },
      ],
    },
    {
      id: 'aws-scene-7-end',
      type: 'end',
      title: 'Case Complete — Alcohol Withdrawal',
      timeElapsed: 180,
      narrative:
        'Daniel receives aggressive IV lorazepam titration in the ICU. Over 48 hours, his CIWA-Ar gradually decreases. He is transitioned to oral diazepam taper. His electrolytes (magnesium, potassium, phosphorus) are repleted. He has received thiamine 500 mg IV daily.\n\nOn day 5, he is transferred back to the medical unit where he is connected with the addiction medicine consultation team and social work. He agrees to discuss alcohol treatment options.\n\nKey Learning Points:\n• AWS timeline: tremors (6h), hallucinations (24h), seizures (12–48h), DTs (48–96h)\n• CIWA-Ar is the validated scoring tool — reassess q1–2h in active withdrawal\n• Benzodiazepines (lorazepam, diazepam) are the ONLY first-line treatment for AWS\n• Physical restraints worsen AWS — use pharmacologic management\n• Thiamine MUST be given before any dextrose-containing fluids\n• Phenytoin does NOT work for alcohol withdrawal seizures\n• Haloperidol is NOT a substitute for benzodiazepines in DTs\n• Addiction medicine consultation is essential for long-term recovery planning',
      endType: 'success',
    },
    {
      id: 'aws-scene-7-under-sedated',
      type: 'end',
      title: 'Under-Sedation — DTs Progression',
      timeElapsed: 180,
      narrative:
        'With inadequate benzodiazepine dosing, Daniel\'s DTs progress. He develops hyperthermia (104°F), severe hypertension (210/130), and ventricular tachycardia. He arrests and requires resuscitation.\n\nDelirium tremens with a mortality rate of 5–25% requires aggressive, adequate benzodiazepine therapy. The fear of respiratory depression should not prevent life-saving doses in a monitored ICU setting.',
      endType: 'failure',
    },
    {
      id: 'aws-scene-7-haldol',
      type: 'end',
      title: 'Haloperidol — Seizure Complication',
      timeElapsed: 180,
      narrative:
        'Haloperidol is administered. Within 30 minutes, Daniel has a prolonged tonic-clonic seizure (status epilepticus) — haloperidol lowered his seizure threshold on top of his withdrawal-related hyperexcitability. Emergency lorazepam is required to break the seizure.\n\n"Haloperidol is contraindicated as primary treatment in alcohol withdrawal," the neurologist states. "It reduces the seizure threshold — exactly what we don\'t want in a patient already at seizure risk. Benzodiazepines must be the primary intervention."',
      endType: 'failure',
    },
  ],
};
