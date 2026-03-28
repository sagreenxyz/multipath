import type { CaseStudy } from '../../types/case-study.js';

export const postpartumHemorrhageCase: CaseStudy = {
  id: 'postpartum-hemorrhage',
  title: 'After the Birth',
  subtitle: 'Postpartum Hemorrhage — The Fourth Trimester Emergency',
  description:
    'A 28-year-old G2P2 female delivered vaginally one hour ago. The postpartum nurse discovers her pad is saturated and the patient reports feeling lightheaded. She is bleeding significantly more than expected. You must rapidly assess, quantify blood loss, identify the cause, and initiate life-saving interventions to prevent hemorrhagic shock.',
  difficulty: 'advanced',
  specialty: 'Obstetrics / Women\'s Health',
  tags: ['postpartum hemorrhage', 'PPH', 'uterine atony', 'oxytocin', 'fundal massage', 'obstetrics', 'hemorrhagic shock', '4Ts'],
  estimatedTime: 30,
  maxScore: 300,
  learningObjectives: [
    { id: 'lo1', description: 'Recognize the clinical signs of postpartum hemorrhage (PPH) and quantify blood loss accurately' },
    { id: 'lo2', description: 'Apply the "4 Ts" framework to identify the etiology of PPH' },
    { id: 'lo3', description: 'Initiate evidence-based first-line treatment for uterine atony' },
    { id: 'lo4', description: 'Recognize the stages of hemorrhagic shock and escalate care appropriately' },
    { id: 'lo5', description: 'Implement massive transfusion protocol (MTP) and hemorrhage bundle interventions' },
  ],
  patient: {
    name: 'Anita Patel',
    age: 28,
    gender: 'female',
    weight: 72,
    height: 163,
    allergies: ['No known drug allergies'],
    currentMedications: [
      'Oxytocin (Pitocin) infusion — discontinued after delivery (Pitocin drip)',
      'Prenatal vitamins (daily)',
      'Iron supplementation 325 mg PO daily (for mild anemia)',
    ],
    medicalHistory: [
      'G2P2 — delivered this morning via spontaneous vaginal delivery',
      'Prior vaginal delivery (G1P1 — 3 years ago)',
      'Large for gestational age (LGA) infant — birth weight 4.2 kg (9 lbs 4 oz)',
      'Prolonged active labor phase (16 hours)',
      'Chorioamnionitis treated with IV ampicillin/gentamicin during labor',
      'Mild iron-deficiency anemia (Hgb 9.8 g/dL antepartum)',
    ],
    chiefComplaint: 'Heavy vaginal bleeding 1 hour postpartum; lightheadedness and palpitations; saturated 3 pads in 30 minutes',
    vitals: {
      temperature: 100.6,
      heartRate: 118,
      respiratoryRate: 22,
      bloodPressure: '98/62',
      oxygenSaturation: 97,
      painLevel: 5,
    },
    appearance:
      'Young female lying in postpartum bed, anxious and pale. Alert and oriented but states she feels "dizzy and my heart is racing." Perineal pad heavily saturated with bright red blood. Abdomen soft — uterine fundus is boggy and palpated 2 cm above the umbilicus (elevated for 1 hour postpartum). Clots visible on pad and on bed linens. Husband at bedside extremely concerned.',
    labs: [
      { name: 'Hemoglobin (antepartum)', value: '9.8', unit: 'g/dL', referenceRange: '12.0–16.0', abnormal: true, critical: false },
      { name: 'Hemoglobin (post-delivery)', value: '8.2', unit: 'g/dL', referenceRange: '12.0–16.0', abnormal: true, critical: true },
      { name: 'Platelets', value: '186', unit: 'K/µL', referenceRange: '150–400', abnormal: false, critical: false },
      { name: 'INR', value: '1.2', unit: '', referenceRange: '0.8–1.2', abnormal: false, critical: false },
      { name: 'Fibrinogen', value: '310', unit: 'mg/dL', referenceRange: '200–400', abnormal: false, critical: false },
    ],
  },
  startSceneId: 'pph-scene-1-discovery',
  scenes: [
    {
      id: 'pph-scene-1-discovery',
      type: 'narrative',
      title: 'Discovery — Heavy Bleeding One Hour Postpartum',
      timeElapsed: 0,
      narrative:
        'It is 08:45. Anita Patel delivered a healthy baby boy one hour ago after a prolonged labor. Her delivery nurse has just ended her shift and you have received the postpartum handoff report. You enter the room to do your first postpartum assessment.\n\nAnita is pale and anxious. "I feel dizzy and my heart is racing. The pads keep getting soaked." Her husband stands at the bedside, visibly alarmed. You lower the sheets and discover the pad, bed linen, and sheets are saturated with bright red blood. You estimate approximately 500+ mL visible.\n\nYou palpate the fundus — it is soft and boggy, 2 cm above the umbilicus. The uterus is not contracted. Blood continues to well up with gentle fundal palpation.',
      clinicalNote:
        '🩸 Postpartum Hemorrhage (PPH) Definition:\n• Primary PPH: ≥ 500 mL blood loss after vaginal delivery OR ≥ 1000 mL after cesarean (traditional definition)\n• Updated Definition (ACOG 2017): Cumulative blood loss ≥ 1000 mL OR blood loss associated with signs/symptoms of hypovolemia within 24 hours of delivery\n\nRisk Factors for Anita:\n• Uterine overdistension (LGA infant — 4.2 kg)\n• Prolonged labor (uterine fatigue)\n• Chorioamnionitis (inflammation reduces uterine contractility)\n• Pre-existing anemia (less reserve)',
      nextSceneId: 'pph-scene-2-priority',
    },
    {
      id: 'pph-scene-2-priority',
      type: 'decision',
      title: 'Immediate Priority Action',
      timeElapsed: 2,
      narrative:
        'Anita has a boggy fundus, heavy bright red bleeding, HR 118, BP 98/62, and feels dizzy. You have identified postpartum hemorrhage. The 4 Ts of PPH etiology are: Tone (uterine atony), Trauma, Tissue (retained placenta/membranes), Thrombin (coagulopathy).\n\nBased on the boggy fundus and clinical context, uterine atony is the most likely cause. What is your FIRST action?',
      choices: [
        {
          id: 'pph-c2a',
          text: 'Activate the PPH/hemorrhage response (call for help), perform firm bimanual uterine massage, and request oxytocin 10–40 units in 1L NS IV — simultaneously',
          nextSceneId: 'pph-scene-3-atony-management',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! In uterine atony PPH, the three simultaneous priorities are: (1) Call for help/activate hemorrhage response, (2) Bimanual uterine massage to stimulate contraction, (3) Uterotonic administration (oxytocin first-line). All should happen within the same 60 seconds.',
          rationale: 'Uterine atony is responsible for 80% of PPH cases. The boggy uterus must be stimulated to contract via massage AND pharmacologic support (oxytocin). Calling for help is essential — PPH management requires the team: OB physician, anesthesia, additional nurses, blood bank. Early activation prevents delays.',
        },
        {
          id: 'pph-c2b',
          text: 'Check the placenta documentation to confirm whether it was delivered completely before doing anything else',
          nextSceneId: 'pph-scene-3-delay',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ While retained placenta/tissue must be considered (and is one of the 4 Ts), the immediate priority with a boggy fundus is uterine massage and uterotonic therapy to address the most likely cause — atony. Chart review should be a parallel action, not your first priority when the patient is actively bleeding.',
          rationale: 'The 4 Ts assessment is important but should not delay immediate treatment for the most probable cause. With a boggy fundus and active hemorrhage, initiate uterine massage and oxytocin immediately while simultaneously reviewing the delivery record for retained tissue.',
        },
        {
          id: 'pph-c2c',
          text: 'Apply a clean pad and obtain vital signs every 5 minutes while calling the physician to come assess the patient',
          nextSceneId: 'pph-scene-3-passive',
          points: 0,
          isCorrect: false,
          feedback: '❌ This is insufficient — applying a pad is passive and does nothing to stop the hemorrhage. Waiting for the physician to assess before taking action allows significant blood loss to continue. Nurses must initiate uterine massage and request uterotonic medications immediately under standing orders or protocols.',
          rationale: 'In PPH, every minute of untreated hemorrhage increases the risk of severe morbidity and mortality. Bimanual uterine massage and IV oxytocin can be initiated by nursing under standing orders or protocol before the physician arrives. Call for help AND act simultaneously — do not only wait.',
        },
      ],
    },
    {
      id: 'pph-scene-3-atony-management',
      type: 'narrative',
      title: 'PPH Bundle — First-Line Management',
      timeElapsed: 5,
      narrative:
        'You activate the PPH response. Two additional nurses and the charge nurse arrive within 2 minutes. The OB physician is paged STAT.\n\nYou perform firm fundal massage — the uterus begins to firm slightly. Oxytocin 40 units in 1L NS is infused rapidly. Blood continues but is somewhat reduced.\n\nThe physician arrives at 5 minutes and reviews the situation. She orders additional uterotonics:\n• Methylergonovine (Methergine) 0.2 mg IM (to augment uterine contraction)\n• Misoprostol 800–1000 mcg rectally\n\nTwo large-bore IVs are placed. Blood bank is called to type and cross for 2 units pRBC. A Foley catheter is placed — a full bladder can impede uterine contraction.\n\nEstimated blood loss so far: ~900–1000 mL. BP: 90/58. HR: 132.',
      clinicalNote:
        '💊 PPH Uterotonic Medications:\n1. Oxytocin (Pitocin): 10–40 units in 1L NS IV — FIRST-LINE\n2. Methylergonovine (Methergine) 0.2 mg IM — ⚠️ Contraindicated in hypertension\n3. Carboprost (Hemabate) 250 mcg IM q15 min — ⚠️ Avoid in asthma\n4. Misoprostol (Cytotec) 800 mcg rectally — available when IV not possible\n5. Tranexamic acid (TXA): 1g IV within 3 hours of PPH — reduces mortality\n\nBimanual Compression: Place one hand suprapubically (push down and forward), other hand in vagina — compress uterus between both hands.',
      nextSceneId: 'pph-scene-4-shock-decision',
    },
    {
      id: 'pph-scene-3-delay',
      type: 'narrative',
      title: 'Delayed Action — Ongoing Hemorrhage',
      timeElapsed: 8,
      narrative:
        'While you are reviewing the delivery chart (placenta documented as intact), Anita\'s BP drops to 86/54 and HR climbs to 138. She has lost an additional 400 mL during the delay. The physician arrives and initiates uterine massage and oxytocin urgently.\n\n"We needed to start massage and oxytocin at the same time we were reviewing the chart. She\'s now in compensated shock. Let\'s activate the hemorrhage response now."',
      clinicalNote:
        '⚠️ Parallel Processing in PPH: In postpartum hemorrhage, multiple actions must happen simultaneously, not sequentially. While reviewing the chart for retained tissue, another nurse should be performing fundal massage and oxytocin should be infusing. Create teams, delegate tasks, and treat in parallel.',
      nextSceneId: 'pph-scene-4-shock-decision',
    },
    {
      id: 'pph-scene-3-passive',
      type: 'narrative',
      title: 'Passive Response — Significant Blood Loss',
      timeElapsed: 8,
      narrative:
        'While waiting for the physician, Anita loses an additional 600 mL of blood. Her BP drops to 78/48 and she becomes confused and pale. The physician arrives to find her in hemorrhagic shock.\n\n"Why wasn\'t uterine massage or oxytocin started? Nurses are trained and authorized to initiate PPH protocols. We\'ve lost critical minutes." The physician immediately initiates the PPH bundle.',
      clinicalNote:
        '🚨 Nursing Autonomy in PPH: Postpartum hemorrhage protocols in most institutions authorize nurses to independently initiate: uterine massage, IV oxytocin bolus/infusion, positioning changes, IV fluid bolus, and vital sign escalation without waiting for a physician order. Know your institution\'s standing orders.',
      nextSceneId: 'pph-scene-4-shock-decision',
    },
    {
      id: 'pph-scene-4-shock-decision',
      type: 'decision',
      title: 'Hemorrhagic Shock — Escalation',
      timeElapsed: 20,
      narrative:
        'Anita has received 1L of IV NS, oxytocin infusion is running, methylergonovine and misoprostol have been given. Estimated total blood loss: ~1,400 mL.\n\nCurrent vitals: BP 84/52, HR 140, RR 24, SpO₂ 96%, skin pale and cool.\n\nShe is becoming confused. The physician requests blood transfusion and additional interventions. What is the MOST appropriate blood product strategy now?',
      choices: [
        {
          id: 'pph-c4a',
          text: 'Activate Massive Transfusion Protocol (MTP) and transfuse packed RBCs, fresh frozen plasma (FFP), and platelets in a 1:1:1 ratio',
          nextSceneId: 'pph-scene-5-mtp',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! Massive Transfusion Protocol (MTP) provides a balanced resuscitation strategy with pRBC:FFP:platelets in approximately 1:1:1 ratio, replacing not just volume but also coagulation factors and platelets. This prevents dilutional coagulopathy and the "bloody vicious cycle" of coagulopathy worsening hemorrhage.',
          rationale: 'Obstetric hemorrhage with hemodynamic instability and EBL approaching 1500 mL is a clear MTP indication. MTP provides balanced blood product replacement, preventing the "lethal triad": hypothermia, acidosis, and coagulopathy. Crystalloid alone dilutes clotting factors and worsens bleeding. Tranexamic acid 1g IV should also be given.',
        },
        {
          id: 'pph-c4b',
          text: 'Transfuse 2 units of packed red blood cells (pRBCs) only — she just needs volume replacement',
          nextSceneId: 'pph-scene-5-prbc-only',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ pRBCs alone are insufficient in massive hemorrhage. Large-volume pRBC transfusion without FFP and platelets causes dilutional coagulopathy — the clotting factors are diluted as more blood is replaced, worsening the bleeding. Balanced resuscitation with 1:1:1 pRBC:FFP:platelets is needed.',
          rationale: 'Transfusing only pRBCs in massive hemorrhage leads to dilutional coagulopathy — as red cells are replaced without clotting factors or platelets, the remaining coagulation system is overwhelmed. This perpetuates bleeding in a cycle. MTP with balanced ratios prevents this complication.',
        },
        {
          id: 'pph-c4c',
          text: 'Infuse 3 more liters of normal saline rapidly to restore blood pressure before transfusing',
          nextSceneId: 'pph-scene-5-crystalloid',
          points: 0,
          isCorrect: false,
          feedback: '❌ Large-volume crystalloid resuscitation in hemorrhage is now known to be harmful. It causes dilutional coagulopathy, hypothermia, worsens acidosis, and increases abdominal compartment pressure. The current standard is damage control resuscitation: limit crystalloid, give balanced blood products via MTP.',
          rationale: 'Large-volume crystalloid resuscitation was previously standard but is now known to worsen outcomes in hemorrhagic shock. Crystalloid dilutes clotting factors, does not carry oxygen, and causes hypothermia. Blood products (MTP) are the preferred resuscitation fluid in massive hemorrhage.',
        },
      ],
    },
    {
      id: 'pph-scene-5-mtp',
      type: 'narrative',
      title: 'MTP Activated — Hemorrhage Control',
      timeElapsed: 35,
      narrative:
        'MTP is activated. Blood bank delivers coolers with pRBCs, FFP, and platelets in 1:1:1 ratio. You transfuse rapidly. Tranexamic acid 1g IV is given over 10 minutes.\n\nThe OB physician performs bimanual compression. The uterus remains poorly contracted despite uterotonics. She decides to proceed with uterine balloon tamponade (Bakri balloon) in the OR if massage continues to fail. Interventional radiology is on standby for uterine artery embolization.\n\nAt 45 minutes:\n• BP: 100/68 (improved with transfusion)\n• HR: 116 (improved)\n• Total EBL: ~1,800 mL\n• Uterus firming with ongoing bimanual compression\n\nAnita remains conscious. She asks: "Am I going to be okay? What\'s happening to me?"',
      clinicalNote:
        '🏥 PPH Escalation Ladder:\n1. Uterine massage + oxytocin\n2. Second-line uterotonics: Methergine, Hemabate, misoprostol\n3. Tranexamic acid 1g IV\n4. Bimanual compression\n5. Uterine balloon tamponade (Bakri balloon)\n6. Uterine compression sutures (B-Lynch)\n7. Uterine artery ligation\n8. Interventional radiology — uterine artery embolization\n9. Hysterectomy (definitive, life-saving)',
      nextSceneId: 'pph-scene-6-end',
    },
    {
      id: 'pph-scene-5-prbc-only',
      type: 'narrative',
      title: 'pRBCs Only — Dilutional Coagulopathy',
      timeElapsed: 35,
      narrative:
        'Two units of pRBCs are transfused. Anita\'s hemoglobin improves slightly but her bleeding is worsening. Repeat labs show fibrinogen 180 mg/dL (dropping), INR 1.8 (rising). She has developed dilutional coagulopathy from large-volume crystalloid and pRBC transfusion without clotting factor replacement.\n\nThe hematologist is called: "We needed balanced transfusion from the start. Now we need FFP, cryoprecipitate, and platelets urgently. This is the exact cycle MTP prevents."',
      clinicalNote:
        '⚠️ Dilutional Coagulopathy in Massive Hemorrhage: As blood is replaced with crystalloid and pRBCs alone, clotting factors and platelets are diluted. This worsens bleeding, which requires more transfusions, which further dilutes clotting factors — a vicious cycle. MTP with 1:1:1 ratio prevents this.',
      nextSceneId: 'pph-scene-6-end',
    },
    {
      id: 'pph-scene-5-crystalloid',
      type: 'narrative',
      title: 'Crystalloid Resuscitation — Worsening Coagulopathy',
      timeElapsed: 35,
      narrative:
        'Three liters of NS are infused rapidly. Anita\'s BP temporarily improves to 90/60 but her bleeding dramatically worsens. Repeat INR: 2.1. Fibrinogen: 145 mg/dL. Platelets: 98K. She has developed the "lethal triad": acidosis (lactic acid rising), hypothermia (crystalloid is cold), and coagulopathy.\n\n"Crystalloid resuscitation in massive hemorrhage is now known to worsen outcomes," the anesthesiologist states. "We need to activate MTP immediately. Damage control resuscitation with blood products is the standard."',
      clinicalNote:
        '⚠️ Harm of Large-Volume Crystalloid in Hemorrhage: Causes dilutional coagulopathy, hypothermia, acidosis, and fluid overload. Modern "damage control resuscitation" limits crystalloid to < 1L and emphasizes early balanced blood product transfusion (1:1:1 pRBC:FFP:platelets) and permissive hypotension until hemorrhage is controlled.',
      nextSceneId: 'pph-scene-6-end',
    },
    {
      id: 'pph-scene-6-end',
      type: 'end',
      title: 'Case Complete — Postpartum Hemorrhage',
      timeElapsed: 120,
      narrative:
        'Anita undergoes successful uterine balloon tamponade in the OR. Hemorrhage is controlled. She is transferred to the ICU for 12 hours of monitoring. Total blood loss: approximately 2,200 mL. She receives 4 units pRBCs, 4 units FFP, 1 unit platelets, and 1g tranexamic acid.\n\nShe is transferred to postpartum the next day, recovering well. Her baby is healthy.\n\nKey Learning Points:\n• PPH is the leading cause of maternal mortality worldwide\n• 80% of PPH is due to uterine atony (the boggy uterus)\n• The 4 Ts: Tone (atony), Trauma, Tissue (retained), Thrombin (coagulopathy)\n• First-line: uterine massage + oxytocin + call for help — simultaneously\n• Activate MTP early — balanced 1:1:1 pRBC:FFP:platelets prevents dilutional coagulopathy\n• Tranexamic acid 1g IV within 3 hours of PPH reduces mortality\n• PPH escalation ladder: uterotonics → tamponade → surgical → hysterectomy',
      endType: 'success',
    },
  ],
};
