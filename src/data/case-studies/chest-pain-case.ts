import type { CaseStudy } from '../../types/case-study.js';

export const chestPainCase: CaseStudy = {
  id: 'stemi-chest-pain',
  title: 'When Every Minute Counts',
  subtitle: 'Acute Coronary Syndrome / STEMI',
  description:
    'A 55-year-old female presents to the emergency department with crushing chest pain, diaphoresis, and nausea. As the triage nurse, you must rapidly assess, recognize, and initiate the STEMI protocol. Time-to-treatment directly impacts myocardial salvage.',
  difficulty: 'advanced',
  specialty: 'Emergency / Cardiac',
  tags: ['STEMI', 'ACS', 'cardiac', 'ECG', 'thrombolytics', 'cath lab', 'emergency', 'time-sensitive'],
  estimatedTime: 25,
  maxScore: 250,
  learningObjectives: [
    { id: 'lo1', description: 'Recognize the clinical presentation of ST-elevation myocardial infarction (STEMI)' },
    { id: 'lo2', description: 'Prioritize triage and initiate the STEMI protocol within established time benchmarks' },
    { id: 'lo3', description: 'Interpret 12-lead ECG findings indicating acute anterior STEMI' },
    { id: 'lo4', description: 'Safely administer cardiac medications (aspirin, nitroglycerin, heparin)' },
    { id: 'lo5', description: 'Communicate effectively with the cardiac catheterization team and patient/family' },
  ],
  patient: {
    name: 'Patricia Nguyen',
    age: 55,
    gender: 'female',
    weight: 68,
    height: 162,
    allergies: ['Sulfa drugs (anaphylaxis)'],
    currentMedications: [
      'Metoprolol succinate 50 mg PO daily',
      'Amlodipine 5 mg PO daily',
      'Atorvastatin 20 mg PO nightly',
      'Sildenafil (Viagra) — taken yesterday evening',
    ],
    medicalHistory: ['Hypertension', 'Hyperlipidemia', 'Active smoker (1 ppd × 20 years)', 'Menopause (3 years ago)'],
    chiefComplaint: 'Crushing substernal chest pain 8/10, radiating to left jaw and arm × 45 minutes, with diaphoresis and nausea',
    vitals: {
      temperature: 98.6,
      heartRate: 96,
      respiratoryRate: 20,
      bloodPressure: '158/94',
      oxygenSaturation: 95,
      painLevel: 8,
    },
    appearance: 'Alert and oriented but anxious and pale. Diaphoretic with clutched chest. Speaks in short sentences due to pain. States "I thought it was heartburn but it\'s getting worse, not better."',
    labs: [
      { name: 'Troponin I (initial)', value: '0.18', unit: 'ng/mL', referenceRange: '< 0.04', abnormal: true, critical: true },
      { name: 'CK-MB', value: '28', unit: 'U/L', referenceRange: '< 5', abnormal: true, critical: false },
      { name: 'BNP', value: '145', unit: 'pg/mL', referenceRange: '< 100', abnormal: true, critical: false },
      { name: 'Potassium', value: '3.9', unit: 'mEq/L', referenceRange: '3.5–5.0', abnormal: false, critical: false },
      { name: 'Creatinine', value: '0.9', unit: 'mg/dL', referenceRange: '0.5–1.1', abnormal: false, critical: false },
      { name: 'INR', value: '1.0', unit: '', referenceRange: '0.8–1.2', abnormal: false, critical: false },
      { name: 'Hemoglobin', value: '13.4', unit: 'g/dL', referenceRange: '12.0–16.0', abnormal: false, critical: false },
    ],
    imaging: [
      {
        type: '12-Lead ECG',
        description: 'Obtained at 10:07 — 5 minutes after arrival',
        findings: 'ST elevation 2–3 mm in leads V1–V4 (anterior). Reciprocal ST depression in leads II, III, and aVF. Sinus rhythm at 96 bpm. No LBBB. Q waves forming in V1–V2.',
      },
    ],
  },
  startSceneId: 'cp-scene-1-triage',
  scenes: [
    {
      id: 'cp-scene-1-triage',
      type: 'narrative',
      title: 'Emergency Department Triage',
      timeElapsed: 0,
      narrative:
        'It is 10:02 AM. You are the triage nurse at a Chest Pain Center-accredited emergency department. Patricia Nguyen, a 55-year-old woman, walks to the triage desk clutching her chest. She states: "I\'ve had this crushing pressure in my chest for almost an hour. It goes up into my jaw and down my left arm. I feel sick to my stomach and I\'m sweating."\n\nYou note she is pale, visibly diaphoretic, and speaking in short sentences.',
      clinicalNote:
        '🚨 ACS Recognition: Classic STEMI presentation includes: crushing/pressure-type chest pain, radiation to jaw/left arm, diaphoresis, nausea, and dyspnea. Women may present atypically with fatigue, back pain, or GI symptoms. A 55-year-old postmenopausal female is a high-risk demographic.',
      nextSceneId: 'cp-scene-2-triage-decision',
    },
    {
      id: 'cp-scene-2-triage-decision',
      type: 'decision',
      title: 'Triage Priority Decision',
      timeElapsed: 2,
      narrative:
        'You have completed a brief triage assessment. Vitals: BP 158/94, HR 96, RR 20, SpO₂ 95%, pain 8/10. She describes classic anginal symptoms with radiation. She is diaphoretic and anxious. What is your immediate triage action?',
      choices: [
        {
          id: 'cp-choice-2a',
          text: 'Assign ESI level 1, bring directly to a cardiac room, and announce "Possible STEMI" to activate the team — obtain 12-lead ECG within 10 minutes',
          nextSceneId: 'cp-scene-3-ecg-correct',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! This patient has classic STEMI symptoms and is hemodynamically stable but at extremely high risk. ESI 1 activation with immediate placement and 12-lead ECG is the standard of care. AHA/ACC guidelines mandate ECG within 10 minutes of symptom presentation.',
          rationale: 'Time is myocardium. Every minute of coronary occlusion causes irreversible cardiomyocyte death. The "door-to-balloon" (D2B) goal is < 90 minutes. The clock starts now. Activating the team early and getting the ECG immediately initiates this cascade.',
        },
        {
          id: 'cp-choice-2b',
          text: 'Have her sit in the waiting area, assign ESI level 2, and call her when a room is available',
          nextSceneId: 'cp-scene-3-wait-danger',
          points: 5,
          isCorrect: false,
          feedback: '❌ This is a critical error. A patient with classic STEMI presentation must never wait. Delaying room placement and ECG by even minutes adds directly to irreversible myocardial damage and mortality. This patient is ESI 1.',
          rationale: 'STEMI is a Level 1 emergency. The combination of classic chest pain, radiation, diaphoresis, nausea, and hemodynamic changes in a high-risk demographic patient demands immediate action, not a waiting room seat.',
        },
        {
          id: 'cp-choice-2c',
          text: 'Give her aspirin 325 mg to chew and reassess in 5 minutes to see if pain improves',
          nextSceneId: 'cp-scene-3-aspirin-delay',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Aspirin is appropriate and will be needed, but giving it in triage without room placement and ECG delays definitive diagnosis and delays the cath lab activation. Aspirin alone does not address the urgency of this situation.',
          rationale: 'While aspirin is a critical early intervention in ACS, it should be given in the context of a full ACS workup (ECG, IV access, monitoring), not as a triage measure that delays room placement. Get the ECG first to confirm STEMI and activate the cath lab.',
        },
      ],
    },
    {
      id: 'cp-scene-3-ecg-correct',
      type: 'narrative',
      title: 'Room Placement and 12-Lead ECG',
      timeElapsed: 7,
      narrative:
        'You bring Ms. Nguyen directly to Cardiac Bay 3 at 10:04 AM. You apply the cardiac monitor, obtain 12-lead ECG leads, and acquire the ECG at 10:07 AM — 5 minutes from arrival.\n\nThe ECG shows:\n• ST elevation 2–3 mm in V1–V4 (anterior leads)\n• Reciprocal ST depression in II, III, aVF\n• Forming Q waves in V1–V2\n• Sinus rhythm, rate 96 bpm\n\nYou immediately recognize: ANTERIOR STEMI.',
      clinicalNote:
        '📊 ECG Interpretation:\n• ST elevation ≥ 2 mm in V1–V4 = Anterior STEMI\n• V1–V4 territory = Left Anterior Descending (LAD) coronary artery occlusion\n• "The Widow Maker" — LAD occlusion carries high mortality\n• Reciprocal changes in inferior leads (II, III, aVF) confirm STEMI\n• Forming Q waves = irreversible necrosis beginning',
      scoreBonus: 10,
      nextSceneId: 'cp-scene-4-stemi-activation',
    },
    {
      id: 'cp-scene-3-wait-danger',
      type: 'narrative',
      title: 'Dangerous Waiting Room Delay',
      timeElapsed: 25,
      narrative:
        'Twenty-three minutes after arrival, Ms. Nguyen calls out from the waiting room: "I can\'t breathe!" She is diaphoretic and pale. Her husband runs to the desk in a panic. You rush her to a room immediately. The ECG now shows ST elevation with V-fib threatening on the monitor.\n\nThe charge physician states: "We should have had her on the monitor 20 minutes ago. This is a STEMI. Call the cath lab NOW. Clock started from her arrival — we\'re already behind."',
      clinicalNote:
        '❌ Critical Outcome: The 23-minute delay in room placement has worsened the situation significantly. The D2B clock started at arrival, so the team is now severely behind the 90-minute benchmark. This represents a sentinel event risk.',
      nextSceneId: 'cp-scene-4-stemi-activation',
    },
    {
      id: 'cp-scene-3-aspirin-delay',
      type: 'narrative',
      title: 'Aspirin Given — ECG Delayed',
      timeElapsed: 14,
      narrative:
        'You give aspirin in triage, which she chews. However, room placement takes an additional 7 minutes. The ECG is obtained at 10:14 AM — 12 minutes after arrival (2 minutes past the 10-minute benchmark). The ECG shows anterior STEMI.\n\nThe attending physician notes: "ECG took 12 minutes — we\'re past benchmark. Let\'s move fast. Cath lab needs to be called now."',
      clinicalNote:
        '⚠️ Quality Metric: Door-to-ECG time of > 10 minutes is a reportable quality metric in ACS. Starting aspirin is important but should not delay room placement and ECG. In time-sensitive emergencies, sequence of actions matters.',
      nextSceneId: 'cp-scene-4-stemi-activation',
    },
    {
      id: 'cp-scene-4-stemi-activation',
      type: 'decision',
      title: 'STEMI Protocol Activation',
      timeElapsed: 10,
      narrative:
        'Current time: 10:12 AM. ECG confirmed: Anterior STEMI. The attending physician activates the STEMI alert. You are at the bedside with multiple simultaneous tasks. Ms. Nguyen asks: "What\'s happening? Am I having a heart attack? I\'m scared." What do you do NEXT?',
      choices: [
        {
          id: 'cp-choice-4a',
          text: 'Briefly but honestly reassure Ms. Nguyen while simultaneously establishing IV access and preparing medications — involve her in the plan',
          nextSceneId: 'cp-scene-5-medications',
          points: 50,
          isCorrect: true,
          feedback: '✅ Excellent! Patient communication does not stop during emergencies. A brief, honest statement ("You may be having a heart attack — we are treating it right now and our best specialists are coming") reduces anxiety, maintains trust, and supports the therapeutic relationship while care continues.',
          rationale: 'Anxiety in ACS increases catecholamine release, which increases myocardial oxygen demand and can worsen ischemia. Brief, clear communication reduces anxiety. Patient rights include the right to information about their condition. These tasks can and must happen simultaneously.',
        },
        {
          id: 'cp-choice-4b',
          text: 'Focus entirely on IV access and medications — patient communication can wait until the physician arrives',
          nextSceneId: 'cp-scene-5-no-communication',
          points: 25,
          isCorrect: false,
          feedback: '⚠️ Technically focused but misses the importance of therapeutic communication in emergencies. Ignoring a frightened patient\'s question during a life-threatening event is not compassionate care and can increase anxiety, worsen ischemia, and damage trust.',
          rationale: 'Nurses must balance technical interventions with human-centered communication. A simple brief statement while working is enough to acknowledge the patient\'s fear and maintain the nurse-patient relationship.',
        },
        {
          id: 'cp-choice-4c',
          text: 'Stop all interventions to fully explain the situation to the patient and answer all her questions',
          nextSceneId: 'cp-scene-5-delay-communication',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ Thorough communication is important but not at the expense of critical time-sensitive interventions. A STEMI requires simultaneous action. Brief acknowledgment and continued action is the right balance.',
          rationale: 'In a STEMI, stopping to provide extensive patient education delays life-saving treatment. Compassionate brief communication while working is the standard of care. Detailed education comes after stabilization.',
        },
      ],
    },
    {
      id: 'cp-scene-5-medications',
      type: 'decision',
      title: 'Medication Administration: Critical Safety Check',
      timeElapsed: 15,
      narrative:
        'Orders received for the STEMI protocol:\n• Aspirin 325 mg PO STAT\n• Nitroglycerin 0.4 mg SL × 1\n• Heparin bolus (weight-based protocol)\n• Morphine 2 mg IV PRN (pain 7/10)\n\nBefore administering nitroglycerin, you review Ms. Nguyen\'s medication list. You notice: **Sildenafil (Viagra) — taken yesterday evening**.\n\nWhat do you do?',
      choices: [
        {
          id: 'cp-choice-5a',
          text: 'Hold the nitroglycerin and notify the physician immediately — sildenafil taken within 24 hours is a contraindication',
          nextSceneId: 'cp-scene-6-nitro-hold-correct',
          points: 60,
          isCorrect: true,
          feedback: '✅ Excellent medication safety! Nitroglycerin is absolutely contraindicated within 24 hours of sildenafil (and 48 hours of tadalafil/vardenafil) use. The combination causes severe, refractory hypotension. This is a critical safety check that requires immediate physician notification.',
          rationale: 'PDE-5 inhibitors (sildenafil, tadalafil) potentiate the vasodilatory effects of nitrates, causing severe and potentially fatal hypotension. This is an absolute contraindication. Notifying the physician allows modification of the pain management plan.',
        },
        {
          id: 'cp-choice-5b',
          text: 'Administer the nitroglycerin — it was taken "yesterday" so it should be cleared by now',
          nextSceneId: 'cp-scene-6-nitro-error',
          points: 0,
          isCorrect: false,
          feedback: '❌ CRITICAL SAFETY ERROR. Sildenafil has a half-life of 4 hours, but its effects on PDE-5 last up to 24 hours. "Yesterday evening" + current 10 AM may be within the 24-hour window. This combination can cause severe, irreversible hypotension. Never administer nitroglycerin without checking PDE-5 inhibitor use.',
          rationale: 'The absolute contraindication between nitrates and PDE-5 inhibitors is a life-threatening drug interaction. "Yesterday" is ambiguous — it may be within the 24-hour window. When in doubt, hold the medication and notify the physician.',
        },
        {
          id: 'cp-choice-5c',
          text: 'Give a smaller dose of nitroglycerin (0.2 mg SL) to reduce the interaction risk',
          nextSceneId: 'cp-scene-6-nitro-reduced',
          points: 10,
          isCorrect: false,
          feedback: '❌ Dose reduction does not eliminate the interaction risk. The pharmacodynamic interaction between PDE-5 inhibitors and nitrates is not dose-dependent in a way that makes reduced dosing safe. This is an absolute contraindication—hold the medication entirely and notify the physician.',
          rationale: 'There is no safe dose of nitroglycerin when a PDE-5 inhibitor has been taken within 24 hours. The mechanism involves additive vasodilation that is not mitigated by dose reduction. Always notify the physician for alternative pain management.',
        },
      ],
    },
    {
      id: 'cp-scene-6-nitro-hold-correct',
      type: 'narrative',
      title: 'Safe Medication Practice',
      timeElapsed: 18,
      narrative:
        'You immediately notify Dr. Patel: "Dr. Patel, I need to hold the nitroglycerin. Ms. Nguyen reports taking sildenafil yesterday evening — I believe we\'re within the 24-hour contraindication window."\n\nDr. Patel responds: "Excellent catch. Absolutely hold the nitro. Modify orders: Morphine 4 mg IV for pain management instead. Continue with aspirin and heparin. Cath lab is being activated — ETA 12 minutes."\n\nYou administer:\n✓ Aspirin 325 mg PO — Ms. Nguyen chews it\n✓ Morphine 4 mg IV slow push over 4 minutes (pain → 6/10)\n✓ Heparin bolus per weight-based protocol (60 units/kg = 4,080 units IV bolus)',
      clinicalNote:
        '🔴 Drug Interaction Alert:\nSildenafil (Viagra) + Nitroglycerin = Severe, refractory hypotension (absolute contraindication)\n• Sildenafil half-life: ~4 hours | Clinical effect: up to 24 hours\n• Tadalafil (Cialis): hold nitrates for 48 hours\n• Always ask about PDE-5 inhibitor use during ACS assessment\n• Document your intervention and the clinical rationale',
      scoreBonus: 20,
      nextSceneId: 'cp-scene-7-cath-lab',
    },
    {
      id: 'cp-scene-6-nitro-error',
      type: 'narrative',
      title: 'Adverse Drug Reaction',
      timeElapsed: 20,
      narrative:
        'Within 90 seconds of nitroglycerin administration, Ms. Nguyen\'s blood pressure drops precipitously from 158/94 to 72/40 mmHg. She loses consciousness briefly. The monitor alarm activates — the entire ED team rushes in.\n\nDr. Patel states, "She had sildenafil — who gave the nitro? This is a known interaction." Emergent IV fluid resuscitation is initiated. The cath lab is still being activated, but the team is now managing a complication that could have been prevented.',
      clinicalNote:
        '🔴 Adverse Event: The nitroglycerin-sildenafil interaction has caused hemodynamic collapse. This is a preventable adverse event. Always review the complete medication history before nitroglycerin administration. This interaction is identified on pharmacy drug interaction screening tools.',
      nextSceneId: 'cp-scene-7-cath-lab',
    },
    {
      id: 'cp-scene-6-nitro-reduced',
      type: 'narrative',
      title: 'Drug Interaction Occurs',
      timeElapsed: 20,
      narrative:
        'Despite the reduced dose, Ms. Nguyen\'s BP drops to 88/52 mmHg. She becomes dizzy and diaphoretic (worse). Dr. Patel is called immediately. "She had sildenafil — the interaction is pharmacodynamic, not dose-dependent. We need to stop all nitrates and manage hemodynamics." Fluid resuscitation is initiated.',
      clinicalNote:
        '⚠️ Learning Point: The nitrate + PDE-5 inhibitor interaction is an absolute contraindication. Dose reduction does not make this combination safe. The mechanism is additive vasodilation through different pathways — pharmacodynamic, not pharmacokinetic. Always hold nitrates entirely.',
      nextSceneId: 'cp-scene-7-cath-lab',
    },
    {
      id: 'cp-scene-7-cath-lab',
      type: 'decision',
      title: 'Cath Lab Preparation and Family Communication',
      timeElapsed: 22,
      narrative:
        'Current time: 10:28 AM (26 minutes from arrival). The cath lab is ready. Ms. Nguyen is being transported. Her husband, Robert, stops you in the hallway, visibly shaking: "Is she going to die? Nobody will tell me anything!"\n\nHow do you respond?',
      choices: [
        {
          id: 'cp-choice-7a',
          text: '"Mr. Nguyen, I\'m the nurse caring for Patricia. She is having a heart attack and we\'re taking her to a specialized procedure right now to open the blocked artery. The heart team is ready and we\'re moving very quickly. A physician will speak with you in the family room shortly — please follow me."',
          nextSceneId: 'cp-scene-8-outcome',
          points: 30,
          isCorrect: true,
          feedback: '✅ Excellent family communication! You were honest (heart attack, blocked artery), gave context (specialized team, moving quickly), set expectations (physician will follow up), and guided him to a safe space (family room). This demonstrates therapeutic communication and family-centered care.',
          rationale: 'Families in crisis need honest, brief, actionable information. Avoiding the truth or medical jargon increases anxiety. Directing him to a family room separates him from the treatment area (patient safety) and positions him for physician communication.',
        },
        {
          id: 'cp-choice-7b',
          text: '"I can\'t tell you anything — you need to speak with the doctor. Please wait in the waiting room."',
          nextSceneId: 'cp-scene-8-family-left',
          points: 5,
          isCorrect: false,
          feedback: '⚠️ While physician communication is important, leaving a terrified family member with no information and no support is not compassionate. Nurses can and should provide basic, honest information while directing families to the physician for clinical decisions.',
          rationale: 'Family-centered care is a core nursing value. Saying "I can\'t tell you anything" when you can tell him basic facts about what is happening is not honest or compassionate. Nurses are the most accessible member of the care team and have a responsibility to support families.',
        },
        {
          id: 'cp-choice-7c',
          text: 'Stop and spend 10 minutes fully explaining the anatomy of a STEMI, the cath lab procedure, and all possible outcomes',
          nextSceneId: 'cp-scene-8-procedure-delay',
          points: 15,
          isCorrect: false,
          feedback: '⚠️ The depth of education here is appropriate for later, not during transport. Stopping transport for an extensive anatomy lesson delays the life-saving procedure. A brief, compassionate explanation and handoff to the physician is the right balance.',
          rationale: 'Timing of education matters. During a STEMI transport, seconds count. Provide the most essential information, ensure the family is supported, and commit to physician follow-up. Detailed education comes after stabilization.',
        },
      ],
    },
    {
      id: 'cp-scene-8-outcome',
      type: 'end',
      title: 'Case Complete — Outstanding Performance',
      timeElapsed: 90,
      endType: 'success',
      narrative:
        'Door-to-Balloon time: 82 minutes (under the 90-minute benchmark). Ms. Nguyen undergoes successful primary PCI with placement of one drug-eluting stent in the proximal LAD. Ejection fraction post-procedure: 45% (moderately reduced but preserved function).\n\nMr. Nguyen meets with the cardiologist and thanks the nursing team: "The nurse told us what was happening without scaring us more than we already were. She was calm and kind and clearly knew what she was doing."\n\nMs. Nguyen is transferred to the Cardiac ICU for monitoring. Three days later she is discharged on dual antiplatelet therapy, a beta-blocker, ACE inhibitor, and statin therapy with cardiac rehab scheduled.',
      clinicalNote:
        '🏆 Excellence Demonstrated:\n• Recognized STEMI presentation and triaged correctly\n• Obtained 12-lead ECG within 5 minutes of arrival (benchmark: ≤ 10 min)\n• Caught critical drug interaction (sildenafil + nitroglycerin)\n• Communicated therapeutically with patient and family under pressure\n• D2B time: 82 minutes (benchmark: < 90 min)',
      feedback:
        'Exceptional performance! Your rapid triage, ECG acquisition, critical medication safety catch, and compassionate communication represent expert emergency cardiac nursing. Your actions directly contributed to myocardial salvage and a positive patient outcome.',
    },
    {
      id: 'cp-scene-8-family-left',
      type: 'end',
      title: 'Case Complete — Patient Outcome Good, Family Experience Poor',
      timeElapsed: 90,
      endType: 'partial',
      narrative:
        'Ms. Nguyen undergoes successful PCI with D2B of 87 minutes. However, Mr. Nguyen spent the procedure alone in the waiting room with no information for 68 minutes until a physician found him. He filed a complaint stating: "No one told us anything. We felt completely abandoned. The nurse just told me to wait."\n\nClinically, the outcome was good. From a patient- and family-centered care standpoint, the experience was poor. A complaint letter was sent to the hospital.',
      feedback:
        'The clinical outcome was good, but remember that nursing care includes families. PFCC (Patient- and Family-Centered Care) is a core professional standard. Families deserve compassionate, honest, brief communication even during emergencies.',
    },
    {
      id: 'cp-scene-8-procedure-delay',
      type: 'end',
      title: 'Case Complete — D2B Time Exceeded',
      timeElapsed: 105,
      endType: 'partial',
      narrative:
        'The 10-minute education delay contributed to pushing D2B time to 97 minutes — past the 90-minute benchmark. Ms. Nguyen\'s PCI was successful, but the additional delay contributed to a larger myocardial infarction area than if treatment had been initiated earlier. D2B time is a reportable quality metric.',
      feedback:
        'Patient education is critical but must be timed appropriately. In STEMI, a brief compassionate statement and immediate transport is the standard. Detailed teaching happens post-stabilization. Every minute counts in myocardial infarction — "time is muscle."',
    },
  ],
};
