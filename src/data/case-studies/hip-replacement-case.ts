import type { CaseStudy } from '../../types/case-study.js';

export const hipReplacementCase: CaseStudy = {
  id: 'postop-hip-replacement',
  title: 'Back on Their Feet',
  subtitle: 'Post-Operative Care After Total Hip Arthroplasty',
  description:
    'A 71-year-old female returns from the PACU after a successful right total hip arthroplasty (THA). As the orthopedic floor nurse, you are responsible for her post-operative assessment, pain management, DVT prophylaxis, and early mobility. Preventing complications after joint replacement is as important as the surgery itself.',
  difficulty: 'beginner',
  specialty: 'Orthopedics / Surgical',
  tags: ['total hip replacement', 'arthroplasty', 'post-operative', 'DVT prophylaxis', 'pain management', 'hip precautions', 'early mobility', 'fall prevention'],
  estimatedTime: 25,
  maxScore: 200,
  learningObjectives: [
    { id: 'lo1', description: 'Perform a systematic post-operative assessment after total hip arthroplasty' },
    { id: 'lo2', description: 'Implement hip precautions to prevent prosthetic dislocation' },
    { id: 'lo3', description: 'Manage post-operative pain using multimodal analgesia principles' },
    { id: 'lo4', description: 'Apply evidence-based DVT prophylaxis measures after orthopedic surgery' },
    { id: 'lo5', description: 'Recognize and respond to signs of post-operative complications (dislocation, DVT, wound infection)' },
  ],
  patient: {
    name: 'Eleanor Fitzgerald',
    age: 71,
    gender: 'female',
    weight: 68,
    height: 160,
    allergies: ['Codeine (nausea/vomiting)', 'Latex (hives)'],
    currentMedications: [
      'Celecoxib 200 mg PO BID (post-op multimodal analgesia)',
      'Oxycodone/acetaminophen 5/325 mg PO q4–6h PRN pain',
      'Enoxaparin (Lovenox) 40 mg subcutaneous daily (DVT prophylaxis)',
      'Omeprazole 20 mg PO daily',
      'Metoprolol succinate 50 mg PO daily',
      'Atorvastatin 20 mg PO nightly',
    ],
    medicalHistory: [
      'Severe right hip osteoarthritis (indications for THA)',
      'Hypertension (well controlled)',
      'Hyperlipidemia',
      'Osteoporosis',
      'Former smoker (quit 10 years ago)',
    ],
    chiefComplaint: 'Post-operative day 0 after right total hip arthroplasty; right hip pain 7/10',
    vitals: {
      temperature: 98.8,
      heartRate: 84,
      respiratoryRate: 16,
      bloodPressure: '138/82',
      oxygenSaturation: 96,
      painLevel: 7,
    },
    appearance:
      'Elderly female alert and oriented ×3 in the recovery bed. Right leg in abduction pillow. Surgical dressing to right hip: dry and intact. Hemovac drain in place with 35 mL serosanguinous output. Complains of right hip and groin pain. PACU nurse reports she received morphine 4 mg IV ×2 intraoperatively and fentanyl 50 mcg IV in PACU.',
    labs: [
      { name: 'Hemoglobin (pre-op)', value: '12.4', unit: 'g/dL', referenceRange: '12.0–16.0', abnormal: false, critical: false },
      { name: 'Hemoglobin (4h post-op)', value: '10.2', unit: 'g/dL', referenceRange: '12.0–16.0', abnormal: true, critical: false },
      { name: 'INR', value: '1.1', unit: '', referenceRange: '0.8–1.2', abnormal: false, critical: false },
      { name: 'Creatinine', value: '0.9', unit: 'mg/dL', referenceRange: '0.5–1.1', abnormal: false, critical: false },
      { name: 'Glucose', value: '118', unit: 'mg/dL', referenceRange: '70–100', abnormal: true, critical: false },
    ],
  },
  startSceneId: 'hip-scene-1-arrival',
  scenes: [
    {
      id: 'hip-scene-1-arrival',
      type: 'narrative',
      title: 'Transfer from PACU',
      timeElapsed: 0,
      narrative:
        'It is 14:30. Eleanor Fitzgerald arrives from the PACU on a hospital bed, accompanied by the PACU nurse who gives report: "71-year-old female, right total hip arthroplasty, performed under spinal anesthesia. Surgery lasted 1 hour 45 minutes without complications. Intraoperative blood loss 350 mL. She had good pain control in PACU — pain 4/10 when she left. She received celecoxib preoperatively. Her hemoglobin dropped to 10.2 from 12.4 baseline. No transfusion was needed. Hemovac drain in place — 35 mL out so far. Foley catheter in place. She has an allergy to latex — latex precautions are in place."\n\nEleanor looks tired but is alert. She immediately says: "Can I get something for the pain? It\'s getting worse — maybe 7 out of 10."',
      clinicalNote:
        '🦴 Total Hip Arthroplasty (THA) Nursing Priorities:\n1. Neurovascular assessment of the operative limb\n2. Hip precautions to prevent dislocation\n3. Multimodal pain management\n4. DVT prophylaxis initiation\n5. Early mobility (physical therapy begins day of or day after surgery)\n6. Wound and drain assessment\n7. Fall prevention',
      nextSceneId: 'hip-scene-2-assessment-decision',
    },
    {
      id: 'hip-scene-2-assessment-decision',
      type: 'decision',
      title: 'Priority Post-Operative Assessment',
      timeElapsed: 5,
      narrative:
        'Eleanor has just arrived from PACU with pain 7/10. She is asking for pain medication. She is allergic to latex — this is confirmed in the chart and the latex precautions sign is on the door.\n\nWhat should be your FIRST action?',
      choices: [
        {
          id: 'hip-c2a',
          text: 'Perform a systematic post-operative assessment including neurovascular checks of the right lower extremity before administering any pain medication',
          nextSceneId: 'hip-scene-3-assessment',
          points: 50,
          isCorrect: true,
          feedback: '✅ Correct! A complete post-operative assessment — especially neurovascular checks of the operative limb — must be performed before medication administration. This establishes your baseline, ensures the limb is viable, and identifies any emergent complications before they are masked by pain medication.',
          rationale: 'Post-operative neurovascular assessment (the "5 Ps": Pain, Pallor, Pulselessness, Paresthesia, Paralysis) must occur at regular intervals. Assessment comes before medication — you need to know the neurovascular status, check the incision and drain, confirm vital signs, and verify allergy precautions are in place.',
        },
        {
          id: 'hip-c2b',
          text: 'Administer oxycodone 5/325 mg PO for pain immediately — she has been through major surgery and is in significant pain',
          nextSceneId: 'hip-scene-3-medsfirst',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ Patient comfort matters, but assessment must come first. You haven\'t yet confirmed her vital signs, neurovascular status, or current hemoglobin. Oxycodone contains acetaminophen — you need to verify she has not received other acetaminophen sources. Her spinal anesthesia effects must also be assessed.',
          rationale: 'Assessment before intervention is a fundamental nursing principle, especially in the immediate post-operative period. Administering analgesics before assessing neurovascular status can mask deterioration (e.g., compartment syndrome, vascular compromise). Always assess first.',
        },
        {
          id: 'hip-c2c',
          text: 'Check that latex precautions are maintained and all equipment in the room is latex-free before anything else',
          nextSceneId: 'hip-scene-3-latexfirst',
          points: 30,
          isCorrect: false,
          feedback: '⚠️ Latex precautions are extremely important and should have been verified on room setup — but the immediate priority on transfer is a systematic post-operative assessment. Verify latex precautions are in place as part of your room setup, then proceed with assessment.',
          rationale: 'Latex precautions should be in place before the patient arrives (during room preparation). On transfer, the immediate clinical priority is the systematic post-operative assessment to establish a baseline and detect acute complications. Both latex safety and assessment are important — but the clinical assessment takes immediate priority.',
        },
      ],
    },
    {
      id: 'hip-scene-3-assessment',
      type: 'narrative',
      title: 'Post-Operative Assessment Complete',
      timeElapsed: 15,
      narrative:
        'You complete your systematic assessment:\n\n• Vital signs: BP 138/82, HR 84, RR 16, SpO₂ 96%, Temp 98.8°F — stable\n• Neurovascular check (right leg): Capillary refill 2 seconds, pedal pulses 2+, sensation intact, motor function intact (can wiggle toes and dorsiflex), skin warm and pink. No signs of compartment syndrome ✅\n• Hip dressing: Dry and intact. Hemovac drain: 42 mL total serosanguinous output (appropriate) ✅\n• Abduction pillow: In place between legs ✅\n• Foley catheter: Draining clear yellow urine ✅\n• Spinal anesthesia: Some numbness in left leg still present; she cannot bear weight yet\n• Pain: 7/10 in right hip and groin\n\nWith your assessment complete, you now prepare pain management.',
      clinicalNote:
        '🩺 Neurovascular Assessment "5 Ps" after Orthopedic Surgery:\n1. Pain — unrelenting, severe, or unresponsive to opioids may indicate compartment syndrome\n2. Pallor — pale, mottled, or dusky skin\n3. Pulselessness — compare with contralateral limb\n4. Paresthesia — numbness, tingling (nerve compression or ischemia)\n5. Paralysis — inability to move digits\nCheck every 1–2 hours in the first 24 hours post-op.',
      nextSceneId: 'hip-scene-4-pain-decision',
    },
    {
      id: 'hip-scene-3-medsfirst',
      type: 'narrative',
      title: 'Pain Medication Administered Without Assessment',
      timeElapsed: 15,
      narrative:
        'You administer oxycodone. Thirty minutes later, Eleanor\'s pain is improved to 4/10. When you finally perform the neurovascular check, you note that her right foot is slightly mottled and she cannot feel the plantar surface of her foot. You are unsure if this is from the spinal anesthesia or a new finding.\n\nBecause you didn\'t have a baseline from immediately post-transfer, you cannot determine if this is new or pre-existing. The orthopedic surgeon is notified and a vascular consult is called.',
      clinicalNote:
        '⚠️ Assessment Before Intervention: Without a documented baseline neurovascular assessment on arrival, any subsequent findings are difficult to interpret. Was the decreased sensation there on arrival or did it develop over time? Always document a baseline immediately on transfer.',
      nextSceneId: 'hip-scene-4-pain-decision',
    },
    {
      id: 'hip-scene-3-latexfirst',
      type: 'narrative',
      title: 'Latex Precautions Confirmed',
      timeElapsed: 15,
      narrative:
        'You verify the room is latex-free: no latex gloves, no latex tubing, allergy wristband in place, sign on the door. Good — these precautions were properly set up before the patient arrived.\n\nNow you proceed with the systematic post-operative assessment, which should have been your first action. Assessment findings are stable with intact neurovascular status.',
      clinicalNote:
        '📌 Latex Allergy Precautions: Latex sensitivity ranges from contact dermatitis to anaphylaxis. Room preparation for latex-allergic patients requires: latex-free gloves for all staff, latex-free IV tubing and equipment, allergy wristband, and posting of latex allergy sign. This should be completed BEFORE patient arrival.',
      nextSceneId: 'hip-scene-4-pain-decision',
    },
    {
      id: 'hip-scene-4-pain-decision',
      type: 'decision',
      title: 'Multimodal Pain Management',
      timeElapsed: 20,
      narrative:
        'Eleanor\'s pain is 7/10. She is asking for pain relief. Her current orders include:\n• Celecoxib 200 mg PO BID (already given preoperatively)\n• Oxycodone/acetaminophen 5/325 mg PO q4–6h PRN\n• Ice packs to right hip PRN\n• Positioning PRN\n\nShe received her last dose of celecoxib 6 hours ago. She has not received any opioids in the past 2 hours.\n\nWhat is the best multimodal pain approach?',
      choices: [
        {
          id: 'hip-c4a',
          text: 'Administer oxycodone/acetaminophen 5/325 mg PO, apply ice to the right hip, and position her with the abduction pillow for comfort',
          nextSceneId: 'hip-scene-5-mobility',
          points: 50,
          isCorrect: true,
          feedback: '✅ Correct! Multimodal analgesia combines opioid and non-opioid approaches to maximize pain control while minimizing opioid side effects. Celecoxib + oxycodone/acetaminophen + ice + positioning = multimodal approach. Oxycodone is appropriate as she has no recent dose in 2 hours.',
          rationale: 'Multimodal analgesia is the standard of care for post-operative orthopedic pain. It combines NSAIDs (celecoxib), acetaminophen-containing opioids (oxycodone/APAP), and non-pharmacologic measures (ice, positioning) to reduce opioid consumption, improve pain control, and minimize opioid side effects.',
        },
        {
          id: 'hip-c4b',
          text: 'Request IV morphine — she is in significant pain and oral opioids won\'t work fast enough',
          nextSceneId: 'hip-scene-5-morphine',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ IV morphine is not part of her current orders and is not the standard approach for immediate post-op pain in a stable orthopedic patient. Oral multimodal analgesia with non-pharmacologic measures should be the first step. IV opioids increase the risk of respiratory depression, nausea, and oversedation.',
          rationale: 'Oral opioids combined with scheduled NSAIDs and non-pharmacologic measures are appropriate for stable post-operative pain. IV opioids should be reserved for severe refractory pain or when the oral route is unavailable. Multimodal approaches reduce overall opioid consumption.',
        },
        {
          id: 'hip-c4c',
          text: 'Withhold opioids given her age — older adults are very sensitive to opioids and may develop confusion or respiratory depression',
          nextSceneId: 'hip-scene-5-pain-uncontrolled',
          points: 0,
          isCorrect: false,
          feedback: '❌ While caution with opioids in elderly patients is appropriate, withholding all opioids for moderate-severe post-operative pain is not appropriate. Uncontrolled pain impairs mobility, deep breathing, and recovery. Use opioids at appropriate doses with monitoring rather than avoiding them entirely.',
          rationale: 'Undertreated post-operative pain in elderly patients leads to complications: inability to deep breathe (atelectasis, pneumonia), immobility (DVT, delirium), and psychological distress. Dose-appropriate opioids with close monitoring are safer than uncontrolled pain. Avoid high-risk opioids like meperidine in elderly patients.',
        },
      ],
    },
    {
      id: 'hip-scene-5-mobility',
      type: 'narrative',
      title: 'Hip Precautions and Early Mobility',
      timeElapsed: 30,
      narrative:
        'Pain is now 4/10 with multimodal analgesia. Physical therapy arrives to work with Eleanor on her first post-operative mobility session.\n\nThe PT instructs Eleanor on hip precautions (posterior approach):\n✓ Do not bend hip > 90°\n✓ Do not cross legs (no leg crossover)\n✓ Do not rotate foot inward (no internal rotation)\n\nShe asks: "Can I get up to the bathroom?" The PT approves supervised transfer with a walker. Before transferring, the PT asks you about her current status.',
      clinicalNote:
        '🦴 Hip Precautions (Posterior Approach THA) — The "Three Nos":\n1. No hip flexion > 90° (do not lean forward when sitting)\n2. No adduction past midline (no crossing legs)\n3. No internal rotation of the operative leg\n\nViolating precautions risks prosthetic dislocation. Dislocation signs: sudden severe hip pain, leg appears shortened and externally rotated, inability to move the leg. This is an orthopedic emergency.',
      nextSceneId: 'hip-scene-6-dvt-decision',
    },
    {
      id: 'hip-scene-5-morphine',
      type: 'narrative',
      title: 'IV Morphine Administered',
      timeElapsed: 30,
      narrative:
        'A physician is contacted and IV morphine 2 mg is ordered and administered. Eleanor\'s pain improves to 2/10. However, 20 minutes later she becomes excessively drowsy and her RR drops to 10. SpO₂ drops to 91%.\n\nYou administer supplemental oxygen and stimulate her to breathe. The physician is notified. "Opioid sensitivity in elderly patients is common — let\'s use oral multimodal analgesia going forward and avoid IV opioids unless absolutely necessary."',
      clinicalNote:
        '⚠️ Opioid Sensitivity in Elderly Patients: Elderly patients have reduced hepatic metabolism, decreased renal clearance, and increased CNS sensitivity to opioids. Start at 25–50% of the adult dose and titrate carefully. Monitor RR, sedation level (RASS or Pasero scale), and SpO₂. Keep naloxone available.',
      nextSceneId: 'hip-scene-6-dvt-decision',
    },
    {
      id: 'hip-scene-5-pain-uncontrolled',
      type: 'narrative',
      title: 'Uncontrolled Pain — Complications',
      timeElapsed: 30,
      narrative:
        'Eleanor\'s pain remains 7–8/10. She refuses to do her deep breathing exercises ("it hurts too much to move") and will not cooperate with the PT. By evening, she has developed a low-grade fever and her SpO₂ has dropped to 93% — early signs of atelectasis.\n\nThe physician is notified and pain management is reassessed. "Inadequate pain control after surgery leads to immobility, atelectasis, and DVT risk. We need to address this with multimodal analgesia."',
      clinicalNote:
        '⚠️ Consequences of Undertreated Post-Operative Pain:\n• Splinting → shallow breathing → atelectasis → pneumonia\n• Immobility → DVT and PE risk\n• Poor participation in physical therapy → delayed recovery\n• Delirium in elderly patients\n• Chronic pain development\n\nMultimodal analgesia balances adequate pain control with opioid side effect minimization.',
      nextSceneId: 'hip-scene-6-dvt-decision',
    },
    {
      id: 'hip-scene-6-dvt-decision',
      type: 'decision',
      title: 'DVT Prophylaxis',
      timeElapsed: 60,
      narrative:
        'It is now evening, post-operative day 0. Eleanor\'s enoxaparin (Lovenox) 40 mg subcutaneous is ordered for 2100. She asks: "Why do I need a shot? I already had surgery today."\n\nHow do you respond, and what other DVT prevention measures do you implement?',
      choices: [
        {
          id: 'hip-c6a',
          text: 'Explain DVT risk and administer enoxaparin; also apply sequential compression devices (SCDs) to the non-operative leg and encourage ankle pumps',
          nextSceneId: 'hip-scene-7-end',
          points: 50,
          isCorrect: true,
          feedback: '✅ Excellent! Orthopedic surgery (especially hip and knee arthroplasty) carries the highest DVT/PE risk of all surgical specialties. A multimodal prophylaxis approach — pharmacologic (LMWH) + mechanical (SCDs) + early mobility — is the gold standard.',
          rationale: 'Total hip arthroplasty is a highest-risk VTE procedure. ACCP guidelines recommend LMWH (enoxaparin) for 35 days post-op. SCDs improve venous return and activate fibrinolysis. Early ambulation is equally critical. Patient education about DVT risk is essential for adherence to prophylaxis.',
        },
        {
          id: 'hip-c6b',
          text: 'Hold the enoxaparin — the hemovac drain output was 42 mL and giving blood thinners so soon increases bleeding risk',
          nextSceneId: 'hip-scene-7-end',
          points: 0,
          isCorrect: false,
          feedback: '❌ Do not hold enoxaparin based on the drain output without a physician order. LMWH prophylaxis is a physician decision. The current drain output (42 mL) is within acceptable post-THA limits. Withholding anticoagulation substantially increases VTE risk in this highest-risk surgical patient.',
          rationale: 'DVT/PE is the leading cause of preventable death after orthopedic surgery. Enoxaparin 40 mg SQ daily is evidence-based prophylaxis and should be initiated per orders. If you have concerns about bleeding, discuss with the physician — do not independently withhold prophylaxis.',
        },
        {
          id: 'hip-c6c',
          text: 'Apply sequential compression devices (SCDs) only and defer the enoxaparin until tomorrow',
          nextSceneId: 'hip-scene-7-end',
          points: 20,
          isCorrect: false,
          feedback: '⚠️ SCDs alone are insufficient for THA patients. The combination of pharmacologic (LMWH) and mechanical (SCD) prophylaxis is superior to either alone. Unless contraindicated, enoxaparin should be given per the physician\'s order on post-operative day 0.',
          rationale: 'The ACCP recommends combination pharmacologic (LMWH, fondaparinux, or warfarin) and mechanical prophylaxis for THA, not mechanical alone. The LMWH order is a physician decision and should be implemented unless you have a specific clinical concern to discuss with the team.',
        },
      ],
    },
    {
      id: 'hip-scene-7-end',
      type: 'end',
      title: 'Case Complete — Post-Operative Hip Replacement Care',
      timeElapsed: 120,
      narrative:
        'Eleanor progresses well through her post-operative recovery. Physical therapy works with her twice daily on hip precautions, gait training, and home exercise planning. She is discharged home on post-operative day 3 with 35 days of oral rivaroxaban, home PT, and a clear written understanding of hip precautions.\n\nKey Learning Points:\n• Systematic post-operative assessment before medications establishes a critical baseline\n• Neurovascular checks "5 Ps" every 1–2 hours detect limb complications early\n• Hip precautions prevent prosthetic dislocation: no flexion >90°, no adduction, no internal rotation\n• Multimodal analgesia (NSAID + opioid/acetaminophen + non-pharmacologic) is the standard\n• DVT prophylaxis after THA includes pharmacologic + mechanical + early mobility\n• Latex allergy requires room preparation before patient arrival',
      endType: 'success',
    },
  ],
};
