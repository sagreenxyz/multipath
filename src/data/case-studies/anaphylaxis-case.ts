import type { CaseStudy } from '../../types/case-study.js';

export const anaphylaxisCase: CaseStudy = {
  id: 'anaphylaxis-penicillin',
  title: 'Every Second Counts',
  subtitle: 'Anaphylaxis Following Antibiotic Administration',
  description:
    'A 34-year-old male develops acute anaphylaxis minutes after receiving IV amoxicillin-clavulanate on the medical floor. You are the nurse who administered the medication. Rapid recognition, epinephrine administration, and systematic management are life-saving interventions you must execute without hesitation.',
  difficulty: 'intermediate',
  specialty: 'Medical-Surgical / Emergency',
  tags: ['anaphylaxis', 'allergic reaction', 'epinephrine', 'anaphylactic shock', 'penicillin allergy', 'medication safety', 'emergency response'],
  estimatedTime: 20,
  maxScore: 200,
  learningObjectives: [
    { id: 'lo1', description: 'Recognize the clinical signs of anaphylaxis and distinguish from milder allergic reactions' },
    { id: 'lo2', description: 'Administer epinephrine (intramuscular) as the first-line treatment for anaphylaxis' },
    { id: 'lo3', description: 'Implement the systematic emergency management of anaphylaxis' },
    { id: 'lo4', description: 'Recognize the risk of biphasic anaphylaxis and the importance of extended observation' },
    { id: 'lo5', description: 'Apply principles of medication safety to prevent drug-allergy errors' },
  ],
  patient: {
    name: 'Travis Coleman',
    age: 34,
    gender: 'male',
    weight: 82,
    height: 183,
    allergies: ['Penicillin — reported "rash" in childhood (allergy documentation incomplete)'],
    currentMedications: [
      'Amoxicillin-clavulanate (Augmentin) 1.2g IV q8h — JUST administered (day 1 of cellulitis treatment)',
      'Ibuprofen 400 mg PO q8h PRN pain',
    ],
    medicalHistory: ['Right leg cellulitis (current admission)', 'Asthma (mild intermittent, on albuterol PRN)', 'No prior hospitalizations'],
    chiefComplaint: 'Acute onset throat tightening, hives, and shortness of breath 5 minutes after IV antibiotic administration',
    vitals: {
      temperature: 98.8,
      heartRate: 130,
      respiratoryRate: 28,
      bloodPressure: '80/50',
      oxygenSaturation: 90,
      painLevel: 6,
    },
    appearance:
      'Young male in acute distress. Diffuse urticaria (hives) covering face, neck, and trunk. Tongue and lips visibly swollen (angioedema). Inspiratory stridor audible. Speaks in very short phrases: "I... can\'t... breathe." Extremely anxious. Skin is flushed and warm.',
  },
  startSceneId: 'ana-scene-1-recognition',
  scenes: [
    {
      id: 'ana-scene-1-recognition',
      type: 'narrative',
      title: 'Acute Reaction During Antibiotic Infusion',
      timeElapsed: 0,
      narrative:
        'It is 09:15. You administered amoxicillin-clavulanate IV to Travis Coleman, a 34-year-old admitted for right leg cellulitis. His chart documents a penicillin allergy as "rash — childhood," but the physician reviewed this and ordered the antibiotic, noting the documented allergy was mild.\n\nFive minutes after starting the infusion, Travis activates his call light. You enter the room to find him sitting bolt upright, visibly distressed. His face is flushed and covered in hives. His lips and tongue appear swollen. "I... can\'t... swallow... my throat..." He points to his neck with wide, frightened eyes.\n\nYou hear audible stridor when he breathes in. The infusion is still running.',
      clinicalNote:
        '🚨 Anaphylaxis Recognition: Anaphylaxis is likely when ANY TWO of the following occur rapidly after exposure to a likely allergen:\n1. Skin/mucosal tissue involvement (urticaria, angioedema, flushing)\n2. Respiratory compromise (dyspnea, stridor, bronchospasm, hypoxia)\n3. Cardiovascular compromise (BP drop, syncope, tachycardia)\n4. GI symptoms (severe nausea, vomiting, abdominal pain)\n\nOR: Acute hypotension alone after exposure to a KNOWN allergen.',
      nextSceneId: 'ana-scene-2-immediate-action',
    },
    {
      id: 'ana-scene-2-immediate-action',
      type: 'decision',
      title: 'Immediate Life-Saving Action',
      timeElapsed: 1,
      narrative:
        'Travis has urticaria, angioedema, stridor, and is hypotensive (BP 80/50). The IV amoxicillin-clavulanate is still infusing. This is anaphylaxis.\n\nWhat is the MOST critical immediate action?',
      choices: [
        {
          id: 'ana-c2a',
          text: 'Stop the antibiotic infusion AND administer epinephrine 0.5 mg (1:1000) intramuscularly to the outer mid-thigh immediately',
          nextSceneId: 'ana-scene-3-epinephrine',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! Stopping the causative agent AND administering IM epinephrine are the two simultaneous critical actions. Epinephrine is the ONLY first-line drug for anaphylaxis. IM injection in the outer thigh provides the fastest absorption. Delay in epinephrine is the primary cause of anaphylaxis death.',
          rationale: 'Epinephrine (adrenaline) reverses all features of anaphylaxis: it causes vasoconstriction (raises BP), bronchodilation (opens airways), and stabilizes mast cells (stops mediator release). IM route in the anterolateral thigh provides optimal bioavailability. The dose for adults is 0.3–0.5 mg of 1:1000 concentration.',
        },
        {
          id: 'ana-c2b',
          text: 'Call the rapid response team and stop the antibiotic infusion while waiting for the team to arrive',
          nextSceneId: 'ana-scene-3-delayed-epi',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Calling for help is important — but epinephrine must NOT wait for the RRT. You should stop the infusion AND administer epinephrine immediately, then activate the RRT. A nurse can administer epinephrine autonomously in anaphylaxis under standing orders or emergency protocols.',
          rationale: 'Deaths from anaphylaxis are largely due to delayed or absent epinephrine. Every hospital should have a standing protocol for anaphylaxis allowing nurses to give epinephrine without waiting for a physician. Stop the allergen + IM epi + call for help — all simultaneously.',
        },
        {
          id: 'ana-c2c',
          text: 'Administer diphenhydramine (Benadryl) 50 mg IV immediately to treat the allergic reaction',
          nextSceneId: 'ana-scene-3-benadryl-only',
          points: 0,
          isCorrect: false,
          feedback: '❌ Diphenhydramine is NOT the first-line treatment for anaphylaxis. While antihistamines treat mild allergic reactions (hives, itching), they do NOT reverse anaphylaxis. Travis is in anaphylactic SHOCK with airway compromise — only epinephrine can prevent death. Antihistamines are a secondary adjunct only.',
          rationale: 'The single most common error in anaphylaxis is giving antihistamines instead of or before epinephrine. Antihistamines take 15–20 minutes to work and have no effect on bronchospasm, hypotension, or laryngeal edema. Epinephrine works in seconds. This is a life-or-death distinction.',
        },
      ],
    },
    {
      id: 'ana-scene-3-epinephrine',
      type: 'narrative',
      title: 'Epinephrine Administered — Systematic Management',
      timeElapsed: 3,
      narrative:
        'You stop the antibiotic infusion and draw up epinephrine 0.5 mg (1:1000) and inject it IM into Travis\'s outer right thigh. You simultaneously activate the emergency response system.\n\nWithin 90 seconds:\n• Stridor begins to improve\n• Hives slightly reduced\n• BP: 90/60 (improving)\n• HR: 126 (still tachycardic)\n\nThe rapid response team arrives. The physician reviews the situation and orders the following anaphylaxis protocol:\n• Oxygen 10L via NRB mask\n• IV fluid bolus NS 1L wide open\n• Diphenhydramine 50 mg IV\n• Methylprednisolone 125 mg IV\n• Albuterol nebulizer (for bronchospasm)\n• Repeat epinephrine q5–15 min PRN if not improving',
      clinicalNote:
        '💉 Anaphylaxis Treatment Bundle:\n1. EPINEPHRINE IM 0.3–0.5 mg (1:1000) anterolateral thigh — FIRST AND ONLY first-line drug\n2. Stop allergen exposure\n3. Oxygen high-flow\n4. IV access + large fluid bolus for hypotension\n5. Diphenhydramine 50 mg IV (adjunct — histamine blockade)\n6. Corticosteroids IV (adjunct — reduce biphasic risk)\n7. Albuterol nebulizer (if bronchospasm present)\n8. Repeat epinephrine q5–15 min if inadequate response\n9. Consider epinephrine infusion for refractory shock',
      nextSceneId: 'ana-scene-4-monitoring',
    },
    {
      id: 'ana-scene-3-delayed-epi',
      type: 'narrative',
      title: 'Delayed Epinephrine — Airway Crisis',
      timeElapsed: 5,
      narrative:
        'While waiting 4 minutes for the RRT, Travis\'s stridor worsens. By the time the team arrives, he is no longer able to vocalize and his SpO₂ has dropped to 84%. Emergency intubation is required — but his airway edema is making visualization extremely difficult.\n\nThe physician administers epinephrine. "We needed this 4 minutes ago. Every minute of delay in epinephrine allows the angioedema to progress. He was this close to a complete airway obstruction."',
      clinicalNote:
        '⏱️ Epinephrine Delay Is the Leading Cause of Anaphylaxis Death: Studies show that fatal anaphylaxis is primarily due to epinephrine not being given at all, or being given too late. Nurses must be empowered to give epinephrine immediately under standing orders — without waiting for physician orders.',
      nextSceneId: 'ana-scene-4-monitoring',
    },
    {
      id: 'ana-scene-3-benadryl-only',
      type: 'narrative',
      title: 'Antihistamine Only — Anaphylaxis Worsens',
      timeElapsed: 5,
      narrative:
        'You administer diphenhydramine IV. It will take 15–20 minutes to show any effect, and it does NOTHING for the laryngeal edema, hypotension, or bronchospasm. Over the next 3 minutes, Travis loses consciousness. His BP drops to 60/palpation. His SpO₂ alarms at 82%.\n\nThe physician arrives and administers epinephrine immediately. "Antihistamines do not treat anaphylaxis. Only epinephrine reverses anaphylactic shock. This patient almost died because of a delay in the only drug that works."',
      clinicalNote:
        '🚨 Critical Teaching: "Benadryl" (diphenhydramine) is an antihistamine that reduces histamine-mediated symptoms (itching, hives). It does NOT reverse bronchospasm, angioedema, or cardiovascular collapse. In anaphylaxis, it is a SECONDARY adjunct. EPINEPHRINE is always, always the first drug.',
      nextSceneId: 'ana-scene-4-monitoring',
    },
    {
      id: 'ana-scene-4-monitoring',
      type: 'decision',
      title: 'Post-Epinephrine Monitoring — Biphasic Risk',
      timeElapsed: 30,
      narrative:
        'Travis is improving significantly after epinephrine and the anaphylaxis bundle. His vitals at 30 minutes:\n• BP: 112/72\n• HR: 98\n• SpO₂: 98% on 10L NRB\n• Hives: significantly reduced\n• Stridor: resolved\n• Tongue/lip swelling: improved\n\nTravis says: "I feel so much better! Can I go home? I have work this afternoon."\n\nHow do you respond to his request to be discharged?',
      choices: [
        {
          id: 'ana-c4a',
          text: 'Explain biphasic anaphylaxis risk and maintain him for observation for a minimum of 4–6 hours even though he feels well',
          nextSceneId: 'ana-scene-5-end',
          points: 50,
          isCorrect: true,
          feedback: '✅ Correct! Biphasic anaphylaxis occurs in 5–23% of cases, where symptoms recur 1–72 hours after the initial reaction (typically 8–12 hours later), without re-exposure to the allergen. Extended observation (minimum 4–6 hours) is required. Discharge with an epinephrine auto-injector prescription is mandatory.',
          rationale: 'Biphasic anaphylaxis is a recurrence of anaphylactic symptoms hours after apparent resolution, without additional allergen exposure. Risk factors include: severe initial reaction, delayed epinephrine, protracted anaphylaxis, and prior biphasic reactions. Observation for 4–6 hours minimum is standard; 24 hours for severe cases.',
        },
        {
          id: 'ana-c4b',
          text: 'He appears completely recovered — discharge him with a prescription for diphenhydramine and instructions to return if symptoms recur',
          nextSceneId: 'ana-scene-5-early-discharge',
          points: 0,
          isCorrect: false,
          feedback: '❌ Early discharge after anaphylaxis is dangerous. Biphasic anaphylaxis can occur hours later — he needs extended observation. Additionally, all anaphylaxis survivors must be discharged with an epinephrine auto-injector (EpiPen), not just antihistamines. Diphenhydramine will not save his life if biphasic anaphylaxis occurs.',
          rationale: 'Discharge after anaphylaxis requires: (1) minimum 4–6 hours observation, (2) epinephrine auto-injector prescription, (3) allergy referral, (4) written action plan, and (5) documentation of allergen in the medical record with a formal allergy flag.',
        },
        {
          id: 'ana-c4c',
          text: 'Transfer him to the ICU for 24-hour monitoring given the severity of his reaction',
          nextSceneId: 'ana-scene-5-end',
          points: 30,
          isCorrect: false,
          feedback: '⚠️ ICU transfer may be appropriate for severe or refractory anaphylaxis, but Travis has responded well to treatment. Standard care for resolved anaphylaxis that responded to a single dose of epinephrine is 4–6 hours of observation on the medical unit or ED, not necessarily ICU. Reserve ICU for refractory or recurrent cases.',
          rationale: 'ICU criteria after anaphylaxis: refractory hypotension, multiple epinephrine doses required, intubation performed, or high risk for biphasic reaction. Travis responded well to treatment, making floor-level extended observation appropriate with clear escalation criteria.',
        },
      ],
    },
    {
      id: 'ana-scene-5-end',
      type: 'end',
      title: 'Case Complete — Anaphylaxis Management',
      timeElapsed: 60,
      narrative:
        'Travis is observed for 6 hours without recurrence of symptoms. He is discharged with:\n• Epinephrine auto-injector (EpiPen) 0.3 mg — two prescribed\n• Instructions on how and when to use EpiPen\n• Formal penicillin allergy flagged in his medical record\n• Referral to allergist for penicillin allergy testing and skin prick testing\n• Written anaphylaxis action plan\n• Instruction to wear medical alert bracelet\n\nKey Learning Points:\n• Anaphylaxis requires epinephrine IM as the FIRST and ONLY first-line treatment\n• Antihistamines are adjuncts only — they do not reverse anaphylaxis\n• Stop the causative agent immediately\n• Biphasic anaphylaxis occurs in up to 23% of cases — always observe for 4–6 hours minimum\n• Discharge with EpiPen, allergy documentation, and referral is mandatory\n• This case also highlights a medication safety error — a documented penicillin allergy was minimized',
      endType: 'success',
    },
    {
      id: 'ana-scene-5-early-discharge',
      type: 'end',
      title: 'Early Discharge — Biphasic Anaphylaxis Occurs',
      timeElapsed: 60,
      narrative:
        'Travis is discharged. Eight hours later, he calls 911 from his home with recurrent severe hives, throat tightening, and difficulty breathing — biphasic anaphylaxis. He does not have an epinephrine auto-injector at home. He arrives at the ED in anaphylactic shock and requires intubation.\n\nBiphasic anaphylaxis could have been managed safely if he had remained for observation and been discharged with an epinephrine auto-injector.\n\nKey Learning Points:\n• NEVER discharge anaphylaxis patients < 4–6 hours after initial reaction\n• ALWAYS prescribe and educate on epinephrine auto-injector use\n• Biphasic anaphylaxis: symptoms recur 1–72 hours later without re-exposure\n• Document the allergy formally in the medical record',
      endType: 'failure',
    },
  ],
};
