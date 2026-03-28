import type { CaseStudy } from '../../types/case-study.js';

export const strokeCase: CaseStudy = {
  id: 'acute-ischemic-stroke',
  title: 'Time Is Brain',
  subtitle: 'Acute Ischemic Stroke — Code Stroke Response',
  description:
    'A 67-year-old male suddenly develops left-sided weakness and slurred speech in the hospital waiting room. You are the nurse who first responds. Stroke is a time-critical emergency — every minute of delay costs 1.9 million neurons. Your rapid assessment and activation of the stroke team can mean the difference between disability and recovery.',
  difficulty: 'intermediate',
  specialty: 'Neurology / Emergency',
  tags: ['stroke', 'CVA', 'tPA', 'NIHSS', 'code stroke', 'thrombolysis', 'neurology', 'time-sensitive'],
  estimatedTime: 25,
  maxScore: 250,
  learningObjectives: [
    { id: 'lo1', description: 'Recognize the signs and symptoms of acute ischemic stroke using the BE-FAST mnemonic' },
    { id: 'lo2', description: 'Activate the stroke response system rapidly and appropriately' },
    { id: 'lo3', description: 'Perform an NIHSS assessment and identify neurological deficits' },
    { id: 'lo4', description: 'Understand inclusion/exclusion criteria for IV tPA (alteplase) administration' },
    { id: 'lo5', description: 'Monitor for complications post-tPA including symptomatic intracranial hemorrhage' },
  ],
  patient: {
    name: 'George Abramowitz',
    age: 67,
    gender: 'male',
    weight: 88,
    height: 175,
    allergies: ['No known drug allergies'],
    currentMedications: [
      'Aspirin 81 mg PO daily',
      'Metoprolol tartrate 25 mg PO BID',
      'Lisinopril 20 mg PO daily',
      'Atorvastatin 40 mg PO nightly',
    ],
    medicalHistory: ['Hypertension', 'Atrial fibrillation (on aspirin, not anticoagulated)', 'Hyperlipidemia', 'Former smoker (quit 5 years ago)'],
    chiefComplaint: 'Sudden left-sided weakness of face, arm, and leg; slurred speech; onset approximately 45 minutes ago',
    vitals: {
      temperature: 98.4,
      heartRate: 88,
      respiratoryRate: 18,
      bloodPressure: '184/102',
      oxygenSaturation: 96,
      painLevel: 2,
    },
    appearance:
      'Alert male with obvious left facial droop. Left arm and leg are weak — he cannot raise his left arm against gravity. Speech is dysarthric (slurred). He appears frightened. Wife at bedside states symptoms began abruptly at home while eating breakfast approximately 45 minutes ago.',
    labs: [
      { name: 'Glucose (POC)', value: '108', unit: 'mg/dL', referenceRange: '70–100', abnormal: false, critical: false },
      { name: 'INR', value: '1.1', unit: '', referenceRange: '0.8–1.2', abnormal: false, critical: false },
      { name: 'aPTT', value: '28', unit: 'sec', referenceRange: '25–35', abnormal: false, critical: false },
      { name: 'Platelets', value: '198', unit: 'K/µL', referenceRange: '150–400', abnormal: false, critical: false },
      { name: 'Creatinine', value: '1.0', unit: 'mg/dL', referenceRange: '0.7–1.3', abnormal: false, critical: false },
      { name: 'Troponin I', value: '< 0.01', unit: 'ng/mL', referenceRange: '< 0.04', abnormal: false, critical: false },
    ],
    imaging: [
      {
        type: 'CT Head (Non-contrast)',
        description: 'Obtained at 09:42 — approximately 52 minutes after symptom onset',
        findings: 'No acute hemorrhage identified. No midline shift. Subtle loss of gray-white differentiation in the right middle cerebral artery (MCA) territory. No hyperdense MCA sign. ASPECTS score: 9/10.',
      },
    ],
  },
  startSceneId: 'stroke-scene-1-discovery',
  scenes: [
    {
      id: 'stroke-scene-1-discovery',
      type: 'narrative',
      title: 'Discovery in the Waiting Room',
      timeElapsed: 0,
      narrative:
        'It is 09:02 AM. You are a medical unit nurse walking through the main lobby when a woman grabs your arm. "Please help! My husband was fine and then he just — he can\'t move his arm and he\'s talking weird."\n\nYou approach George Abramowitz, 67, who is seated in a waiting room chair. He looks at you with frightened eyes. His left face is drooping. When you ask him to smile, only the right side moves. When you ask him to raise both arms, the left arm drifts immediately downward. His speech is slurred but he is able to follow commands.\n\n"I was just sitting here and then... it happened. Everything on my left side went strange."\n\nHis wife tells you symptoms started about 45 minutes ago at home.',
      clinicalNote:
        '🧠 BE-FAST Stroke Recognition:\n• Balance — sudden loss of balance or coordination\n• Eyes — sudden vision changes\n• Face — facial drooping (asymmetric smile)\n• Arms — arm weakness/drift (one arm drifts down)\n• Speech — slurred or strange speech\n• Time — time to call for help NOW\n\nEvery minute without treatment = 1.9 million neurons lost.',
      nextSceneId: 'stroke-scene-2-activation',
    },
    {
      id: 'stroke-scene-2-activation',
      type: 'decision',
      title: 'Immediate Response Action',
      timeElapsed: 2,
      narrative:
        'George has a classic stroke presentation: sudden onset of unilateral facial droop, arm weakness, and dysarthria with a clear last-known-well time of 45 minutes ago. He is in the hospital lobby.\n\nWhat is your IMMEDIATE priority action?',
      choices: [
        {
          id: 'stroke-c2a',
          text: 'Activate the Code Stroke / stroke team immediately and transport him to the CT scanner',
          nextSceneId: 'stroke-scene-3-code-stroke',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! Immediate Code Stroke activation is the standard of care. The stroke team must be assembled and CT imaging obtained urgently. The tPA window is 4.5 hours from last-known-well time — with 45 minutes already elapsed, rapid action is essential.',
          rationale: 'Code Stroke protocols are designed to compress door-to-needle time to < 60 minutes. Immediate activation initiates the parallel workflow: CT imaging, labs, IV access, physician notification, and pharmacy preparation — all simultaneously.',
        },
        {
          id: 'stroke-c2b',
          text: 'Perform a full head-to-toe assessment before calling for help to confirm it is a stroke',
          nextSceneId: 'stroke-scene-3-delayed',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ Do not delay Code Stroke activation for a thorough assessment. BE-FAST criteria are met — act now. A full assessment can occur in parallel with the stroke team. Every minute of delay narrows the treatment window.',
          rationale: 'In stroke emergencies, the principle of "time is brain" overrides the usual sequential assessment approach. The Code Stroke protocol exists precisely to allow parallel workflows. Activate first, assess simultaneously.',
        },
        {
          id: 'stroke-c2c',
          text: 'Check his blood glucose with a fingerstick and administer orange juice if low',
          nextSceneId: 'stroke-scene-3-glucose',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Checking glucose is important (hypoglycemia can mimic stroke) but it should not delay Code Stroke activation. Activate the team first — a glucose check can happen in seconds as part of the parallel stroke workup.',
          rationale: 'While hypoglycemia is a reversible stroke mimic, Code Stroke should be activated concurrently with glucose testing, not after. The stroke team will immediately check a point-of-care glucose as part of the protocol.',
        },
      ],
    },
    {
      id: 'stroke-scene-3-code-stroke',
      type: 'narrative',
      title: 'Code Stroke Activated',
      timeElapsed: 5,
      narrative:
        'You call overhead "Code Stroke, main lobby" and within 3 minutes the stroke team arrives: a neurologist, stroke nurse, CT tech, and pharmacist. George is placed on a stretcher and moved to the CT scanner. You establish IV access (two large-bore IVs) en route.\n\nCT head shows no hemorrhage. ASPECTS score is 9. The neurologist begins the NIHSS assessment:\n• Level of consciousness: 0\n• Gaze: 0\n• Visual fields: 0\n• Facial palsy: 2 (partial lower facial paresis)\n• Left arm motor: 2 (drifts to bed by count of 5)\n• Left leg motor: 1 (drifts but does not hit bed)\n• Limb ataxia: 0\n• Sensory: 1 (mild-moderate loss)\n• Best language: 0\n• Dysarthria: 1 (mild slurring)\n• Extinction/inattention: 0\nNIHSS Total: 7 (moderate stroke)\n\nTime since symptom onset: 52 minutes. The neurologist asks about tPA eligibility.',
      clinicalNote:
        '🩺 tPA (Alteplase) Key Inclusion Criteria:\n• Ischemic stroke with measurable deficit\n• Onset (or last-known-well) within 4.5 hours\n• Age ≥ 18\n• CT head: no hemorrhage\n• Glucose 50–400 mg/dL\n\nKey Exclusion Criteria:\n• Prior stroke + diabetes together (relative)\n• Recent surgery/trauma (14 days)\n• Active bleeding or coagulopathy (INR > 1.7, platelets < 100)\n• SBP > 185 or DBP > 110 at time of treatment',
      nextSceneId: 'stroke-scene-4-tpa-decision',
    },
    {
      id: 'stroke-scene-3-delayed',
      type: 'narrative',
      title: 'Valuable Time Lost',
      timeElapsed: 10,
      narrative:
        'You spend 8 minutes performing a detailed assessment before activating the Code Stroke. When the team arrives, the neurologist reviews the situation. "Why wasn\'t Code Stroke called immediately? We\'ve lost 8 minutes of the treatment window."\n\nGeorge is rushed to CT. Fortunately, no hemorrhage is found and tPA eligibility assessment begins. However, the delay has narrowed the window and increased the urgency of all subsequent decisions.',
      clinicalNote:
        '⏱️ Door-to-Needle Time: The national benchmark is ≤ 60 minutes. Every minute of delay reduces the likelihood of a good outcome. Code Stroke should be activated the moment BE-FAST criteria are met — assessment happens in parallel, not sequentially.',
      nextSceneId: 'stroke-scene-4-tpa-decision',
    },
    {
      id: 'stroke-scene-3-glucose',
      type: 'narrative',
      title: 'Glucose Checked — Code Stroke Activated',
      timeElapsed: 5,
      narrative:
        'His glucose is 108 mg/dL — normal. Hypoglycemia ruled out. You activate Code Stroke immediately. The team arrives and the workup proceeds rapidly. Some time has been lost, but you were correct to check glucose as a stroke mimic.\n\nCT head shows no hemorrhage. The neurologist is assessing tPA eligibility.',
      clinicalNote:
        '📌 Stroke Mimics: Hypoglycemia is the most important reversible stroke mimic to rule out. Other mimics include: Todd\'s paralysis (post-seizure), complex migraine, conversion disorder, and MS relapse. However, Code Stroke should be activated concurrently with glucose testing, not after.',
      nextSceneId: 'stroke-scene-4-tpa-decision',
    },
    {
      id: 'stroke-scene-4-tpa-decision',
      type: 'decision',
      title: 'tPA Administration Decision',
      timeElapsed: 55,
      narrative:
        'Door-to-CT-result time: 22 minutes. The neurologist has completed the NIHSS (score: 7). George\'s current BP is 184/102. His INR is 1.1, platelets 198K, glucose 108, creatinine 1.0. Symptom onset: 52 minutes ago.\n\nThe neurologist turns to you: "He\'s a tPA candidate. His BP is 184/102 — what do we need to do about that before giving tPA?"\n\nWhat is the correct answer?',
      choices: [
        {
          id: 'stroke-c4a',
          text: 'Lower the BP to < 185/110 with a titratable IV antihypertensive (e.g., labetalol IV) before administering tPA',
          nextSceneId: 'stroke-scene-5-tpa',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! Blood pressure must be < 185/110 mmHg before tPA can be safely administered to reduce the risk of hemorrhagic transformation. IV labetalol or nicardipine are first-line agents for rapid, titratable BP control in acute stroke.',
          rationale: 'tPA cannot be given when SBP > 185 or DBP > 110 — the risk of symptomatic intracranial hemorrhage is significantly higher. After tPA, BP must be maintained below 180/105 for 24 hours. IV titratable agents allow precise control.',
        },
        {
          id: 'stroke-c4b',
          text: 'Give tPA now — the BP is acceptable for tPA (< 220/120)',
          nextSceneId: 'stroke-scene-5-tpa-incorrect-bp',
          points: 0,
          isCorrect: false,
          feedback: '❌ The threshold of 185/110 mmHg is the tPA cutoff — not 220/120. His BP of 184/102 is at the border and requires treatment to ensure it is safely below 185/110 before tPA administration.',
          rationale: 'The absolute contraindication for tPA is SBP > 185 or DBP > 110 at time of treatment. The 220/120 threshold applies to the general recommendation not to treat BP in ischemic stroke unless above that level — but for tPA candidates, the limit is stricter.',
        },
        {
          id: 'stroke-c4c',
          text: 'Withhold tPA — the atrial fibrillation history is a contraindication',
          nextSceneId: 'stroke-scene-5-tpa-withheld',
          points: 0,
          isCorrect: false,
          feedback: '❌ Atrial fibrillation is NOT a contraindication to tPA. In fact, AF is a major risk factor for cardioembolic stroke. His INR is 1.1 (not anticoagulated), so coagulopathy is not a concern. He is eligible for tPA.',
          rationale: 'tPA contraindications include: INR > 1.7, heparin use with elevated aPTT, direct oral anticoagulant use within 48 hours, recent intracranial surgery, or SBP > 185/DBP > 110. AF itself is not a contraindication.',
        },
      ],
    },
    {
      id: 'stroke-scene-5-tpa',
      type: 'narrative',
      title: 'tPA Administered — Monitoring Phase',
      timeElapsed: 65,
      narrative:
        'Labetalol 10 mg IV is given. Repeat BP: 174/98. tPA (alteplase 0.9 mg/kg, max 90 mg) is administered: 10% as an IV bolus over 1 minute, remainder as an infusion over 60 minutes.\n\nDoor-to-needle time: 58 minutes — meeting the < 60 minute benchmark. ✅\n\nYou are now at the bedside for continuous monitoring. At 30 minutes into the infusion, George becomes increasingly restless and complains of a sudden headache. His BP rises to 196/108. You observe he seems less responsive.',
      clinicalNote:
        '🚨 Post-tPA Monitoring — Red Flags for Symptomatic Intracranial Hemorrhage (sICH):\n• Sudden severe headache ("worst of my life")\n• Acute neurological deterioration\n• BP spike\n• Nausea/vomiting\n• Decreased level of consciousness\n\nIf sICH suspected: STOP tPA infusion immediately, call physician STAT, order emergent CT head.',
      nextSceneId: 'stroke-scene-6-hemorrhage-decision',
    },
    {
      id: 'stroke-scene-5-tpa-incorrect-bp',
      type: 'narrative',
      title: 'tPA Given — BP Complication',
      timeElapsed: 65,
      narrative:
        'tPA is administered with BP at 184/102. During the infusion, George develops worsening neurological deficits and the team notes blood on repeat CT head — a small hemorrhagic transformation. The neurologist reviews the pre-treatment BP: "It was too high. We should have lowered it to below 185/110 first."\n\nThe tPA infusion is stopped. Neurosurgery is consulted. This is a recognized complication of giving tPA when BP exceeds the threshold.',
      clinicalNote:
        '⚠️ Hemorrhagic Transformation: The most feared complication of tPA is symptomatic intracranial hemorrhage (sICH), occurring in approximately 6% of patients. Risk is higher when BP is not controlled below 185/110 before treatment. Strict BP management is essential.',
      nextSceneId: 'stroke-scene-6-hemorrhage-decision',
    },
    {
      id: 'stroke-scene-5-tpa-withheld',
      type: 'narrative',
      title: 'tPA Withheld — Missed Opportunity',
      timeElapsed: 65,
      narrative:
        'tPA is withheld. Forty-five minutes later, George\'s left-sided weakness worsens significantly. The neurologist reviews the case. "He was eligible. His INR was fine, his onset was within the window, and AF is not a contraindication. We missed an opportunity to treat him."\n\nGeorge is admitted to the stroke unit for monitoring and anticoagulation planning, but he will require weeks of rehabilitation.',
      clinicalNote:
        '📚 Key Teaching: Atrial fibrillation is a leading cause of cardioembolic stroke, but AF itself does not contraindicate tPA. The relevant factors are: no anticoagulant use (or INR ≤ 1.7 if on warfarin), no recent intracranial surgery, and BP within target. Always verify eligibility carefully.',
      nextSceneId: 'stroke-scene-6-hemorrhage-decision',
    },
    {
      id: 'stroke-scene-6-hemorrhage-decision',
      type: 'decision',
      title: 'Suspected Intracranial Hemorrhage During tPA',
      timeElapsed: 90,
      narrative:
        'George is now 30 minutes into his tPA infusion. He suddenly develops a severe headache ("worst of my life — 10/10") and his GCS drops from 15 to 11. His BP rises to 196/108. He has clear neurological deterioration from baseline.\n\nWhat is your immediate action?',
      choices: [
        {
          id: 'stroke-c6a',
          text: 'Stop the tPA infusion immediately, notify the physician STAT, and prepare for emergent CT head',
          nextSceneId: 'stroke-scene-7-end',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! When symptomatic intracranial hemorrhage (sICH) is suspected during tPA infusion, the infusion must be stopped immediately. Emergent CT head and neurosurgical consultation are required. Every second matters.',
          rationale: 'sICH is the most feared complication of tPA, occurring in ~6% of treated patients. The classic presentation is sudden severe headache and neurological deterioration during or shortly after infusion. Immediate cessation minimizes the volume of blood product delivered.',
        },
        {
          id: 'stroke-c6b',
          text: 'Complete the infusion — stopping tPA mid-infusion is more dangerous than finishing',
          nextSceneId: 'stroke-scene-7-end',
          points: 0,
          isCorrect: false,
          feedback: '❌ This is incorrect. The tPA infusion MUST be stopped immediately if sICH is suspected. There is no evidence that completing the infusion is safer — in fact, continuing to deliver the thrombolytic will worsen an active intracranial bleed.',
          rationale: 'Continuing tPA infusion in the setting of suspected sICH is dangerous and not supported by any evidence. Stop the infusion, obtain emergent neuroimaging, and consider reversal strategies (cryoprecipitate, fresh frozen plasma) if hemorrhage is confirmed.',
        },
        {
          id: 'stroke-c6c',
          text: 'Administer IV labetalol to lower the BP and observe for improvement before making any other changes',
          nextSceneId: 'stroke-scene-7-end',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ While BP management is important, this clinical picture — sudden severe headache and neurological deterioration during tPA — demands immediate cessation of the infusion and emergent imaging. BP management alone is insufficient and delays the definitive response.',
          rationale: 'Post-tPA neurological deterioration with sudden headache is sICH until proven otherwise. The priority is stopping the infusion and getting a CT scan, not managing BP in isolation. These actions should occur simultaneously but stopping tPA comes first.',
        },
      ],
    },
    {
      id: 'stroke-scene-7-end',
      type: 'end',
      title: 'Case Complete — Acute Stroke Management',
      timeElapsed: 120,
      narrative:
        'George is stabilized and admitted to the Neurocritical Care Unit. This case illustrated the critical time-sensitive nature of acute stroke management — from recognition using BE-FAST, to rapid Code Stroke activation, tPA eligibility assessment, BP management, and vigilant post-tPA monitoring.\n\nKey Learning Points:\n• BE-FAST enables rapid stroke recognition at the bedside\n• Code Stroke must be activated immediately — assessment happens in parallel\n• tPA requires BP < 185/110 before administration\n• AF is NOT a contraindication to tPA\n• Sudden headache + neurological deterioration during tPA = stop infusion immediately',
      endType: 'success',
    },
  ],
};
