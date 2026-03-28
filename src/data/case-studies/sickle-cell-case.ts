import type { CaseStudy } from '../../types/case-study.js';

export const sickleCellCase: CaseStudy = {
  id: 'sickle-cell-vaso-occlusive',
  title: 'A Life of Pain',
  subtitle: 'Sickle Cell Vaso-Occlusive Crisis',
  description:
    'A 26-year-old male with sickle cell disease (HbSS) presents to the medical unit with severe diffuse pain, his third hospitalization this year. As the admitting nurse, you must rapidly assess his pain, initiate analgesic therapy, monitor for acute chest syndrome, and provide compassionate care for a patient who has been undertreated for pain throughout his medical history.',
  difficulty: 'intermediate',
  specialty: 'Hematology / Medical-Surgical',
  tags: ['sickle cell disease', 'vaso-occlusive crisis', 'acute chest syndrome', 'pain management', 'opioids', 'hydroxyurea', 'implicit bias', 'hematology'],
  estimatedTime: 30,
  maxScore: 300,
  learningObjectives: [
    { id: 'lo1', description: 'Identify the clinical features and precipitating factors of sickle cell vaso-occlusive crisis (VOC)' },
    { id: 'lo2', description: 'Implement evidence-based, timely pain management for sickle cell VOC' },
    { id: 'lo3', description: 'Recognize and prevent acute chest syndrome — the leading cause of death in sickle cell disease' },
    { id: 'lo4', description: 'Understand the role of implicit bias and undertreated pain in sickle cell disease outcomes' },
    { id: 'lo5', description: 'Provide patient-centered care that respects the patient\'s expertise in managing their own disease' },
  ],
  patient: {
    name: 'Marcus Thomas',
    age: 26,
    gender: 'male',
    weight: 65,
    height: 174,
    allergies: ['Ibuprofen and NSAIDs — causes renal dysfunction in patient'],
    currentMedications: [
      'Hydroxyurea 1,500 mg PO daily',
      'Folic acid 1 mg PO daily',
      'Morphine IV PCA (ordered per hematology protocol — to be set up on admission)',
      'Ketorolac 15 mg IV q6h (ordered for adjunct analgesia — use with caution, patient has NSAID sensitivity)',
    ],
    medicalHistory: [
      'Sickle Cell Disease (HbSS — homozygous — diagnosed at birth)',
      'Chronic pain syndrome (sickle cell related)',
      '2 prior hospitalizations for VOC this year',
      'Avascular necrosis of the right femoral head (consequence of sickle cell)',
      'Mild pulmonary hypertension (sickle cell complication)',
      'Cholecystectomy (age 19 — sickle cell related cholelithiasis)',
    ],
    chiefComplaint: 'Severe diffuse bone pain 10/10 in bilateral legs, lower back, and chest — worst in right hip; pain began during a cold rain storm, consistent with prior VOC',
    vitals: {
      temperature: 100.2,
      heartRate: 108,
      respiratoryRate: 20,
      bloodPressure: '128/78',
      oxygenSaturation: 95,
      painLevel: 10,
    },
    appearance:
      'Young male in obvious severe pain. Lying rigid in bed, avoiding any movement. Grimacing constantly. Speaks only when necessary due to pain. "I know what this is — it\'s a crisis. I need IV pain meds now. This is 10 out of 10. I have been in the waiting room for 3 hours." Appears malnourished (thin build typical of SCD). No jaundice currently. Chest pain noted — reports right-sided pleuritic component worsening.',
    labs: [
      { name: 'Hemoglobin', value: '7.4', unit: 'g/dL', referenceRange: '13.5–17.5', abnormal: true, critical: false },
      { name: 'Reticulocytes', value: '14', unit: '%', referenceRange: '0.5–2.5', abnormal: true, critical: false },
      { name: 'WBC', value: '16.2', unit: 'K/µL', referenceRange: '4.5–11.0', abnormal: true, critical: false },
      { name: 'Platelets', value: '420', unit: 'K/µL', referenceRange: '150–400', abnormal: true, critical: false },
      { name: 'Total Bilirubin', value: '3.4', unit: 'mg/dL', referenceRange: '0.2–1.2', abnormal: true, critical: false },
      { name: 'LDH', value: '820', unit: 'U/L', referenceRange: '140–280', abnormal: true, critical: false },
      { name: 'Creatinine', value: '1.1', unit: 'mg/dL', referenceRange: '0.7–1.3', abnormal: false, critical: false },
      { name: 'Oxygen Saturation (baseline)', value: '97', unit: '%', referenceRange: '≥ 95', abnormal: false, critical: false },
    ],
    imaging: [
      {
        type: 'Chest X-Ray',
        description: 'Obtained on admission',
        findings: 'Mild cardiomegaly. No acute infiltrate, consolidation, or pulmonary edema on initial film. Mild right lower lobe atelectasis.',
      },
    ],
  },
  startSceneId: 'scd-scene-1-admission',
  scenes: [
    {
      id: 'scd-scene-1-admission',
      type: 'narrative',
      title: 'Admission — Severe Pain After a 3-Hour Wait',
      timeElapsed: 0,
      narrative:
        'It is 16:30. Marcus Thomas, a 26-year-old with sickle cell disease (HbSS), arrives to the medical unit by wheelchair from the emergency department. He has been in the ED waiting room for 3 hours. His face is rigid with pain.\n\n"I told them I was in crisis from the moment I walked in. They know me here. I\'ve had hundreds of these. This is 10 out of 10. I need my IV morphine." He shows you his hematology crisis card listing his home protocol.\n\nYou note the ED nurse\'s intake note reads: "Patient appears comfortable and in no acute distress." Yet Marcus is visibly rigid, minimally speaking, and grimacing constantly.\n\nHe adds: "I\'ve been waiting 3 hours in that waiting room. Every minute without treatment makes it worse and puts me at risk for acute chest syndrome. I know my disease."',
      clinicalNote:
        '⚠️ Implicit Bias and Sickle Cell Disease: Research consistently shows Black patients with SCD receive delayed and inadequate pain management compared to white patients with equivalent pain. Patients with SCD are frequent targets of "drug-seeking" accusations despite having a documented painful disease. The ED description of a patient in severe VOC as "in no acute distress" reflects this bias.\n\nNursing responsibility: Trust the patient\'s self-report, initiate timely analgesia per protocol, and advocate for patients who are not believed.',
      nextSceneId: 'scd-scene-2-pain-decision',
    },
    {
      id: 'scd-scene-2-pain-decision',
      type: 'decision',
      title: 'Pain Management — First Priority',
      timeElapsed: 5,
      narrative:
        'Marcus rates his pain 10/10. He has documented HbSS sickle cell disease and a hematology protocol card specifying: "In VOC, initiate IV morphine 4–6 mg IV q15–30 min until pain ≤ 6/10, then transition to PCA."\n\nHe has IV access. His BP is 128/78, SpO₂ 95%, RR 20. He has known analgesia orders from hematology. His last oral hydroxyurea was this morning.\n\nWhat is your FIRST action?',
      choices: [
        {
          id: 'scd-c2a',
          text: 'Administer IV morphine per the hematology protocol immediately and set up the PCA as ordered — his pain has been undertreated for 3 hours already',
          nextSceneId: 'scd-scene-3-pain-managed',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! The hematology protocol is a pre-existing order. Administering it immediately is not only appropriate but essential. Pain in VOC is real, severe, and undertreated. Delay worsens pain, increases splinting (which predisposes to acute chest syndrome), and represents a failure of patient advocacy.',
          rationale: 'Evidence-based guidelines (ASH, NHLBI) recommend: initiate opioid analgesia within 30 minutes of triage for SCD VOC. This patient has waited 3 hours. Every hour of delayed opioid analgesia increases the risk of acute chest syndrome due to pulmonary splinting from uncontrolled pain. Existing hematology orders should be implemented immediately.',
        },
        {
          id: 'scd-c2b',
          text: 'Obtain a pain assessment and review all his prior admissions before giving morphine — he may have opioid tolerance issues or be seeking medications inappropriately',
          nextSceneId: 'scd-scene-3-delayed',
          points: 0,
          isCorrect: false,
          feedback: '❌ This reflects implicit bias. Marcus has documented HbSS sickle cell disease, is in confirmed VOC, has existing hematology orders, and has already waited 3 hours. Reviewing prior admissions before treating his 10/10 pain perpetuates the systemic under-treatment of SCD patients. Treat now, document thoroughly.',
          rationale: 'Pain in sickle cell VOC is as real as pain from MI or fracture — it is caused by ischemia from vascular occlusion. SCD patients are NOT at higher risk for opioid misuse than other chronic pain populations. The "drug-seeking" framing is a manifestation of racial bias in healthcare that leads to serious harm. Trust the patient, honor the protocol.',
        },
        {
          id: 'scd-c2c',
          text: 'Offer oral acetaminophen 1000 mg as a first step — he can have IV medications if the oral approach is ineffective',
          nextSceneId: 'scd-scene-3-undertreated',
          points: 0,
          isCorrect: false,
          feedback: '❌ Oral acetaminophen alone is completely inadequate for a 10/10 VOC in a patient with documented HbSS. This is equivalent to offering Tylenol for a traumatic fracture. He has existing IV opioid orders. Escalating from oral acetaminophen to IV opioids (when IV orders already exist) causes unnecessary suffering.',
          rationale: 'Sickle cell VOC pain at 10/10 requires IV opioids. Oral analgesics are appropriate for mild-moderate pain or maintenance, not for severe acute VOC. This approach delays adequate treatment, prolongs suffering, and increases acute chest syndrome risk. Existing IV opioid orders should be initiated immediately.',
        },
      ],
    },
    {
      id: 'scd-scene-3-pain-managed',
      type: 'narrative',
      title: 'Pain Management Initiated — Monitoring for ACS',
      timeElapsed: 15,
      narrative:
        'You administer morphine 4 mg IV per protocol. At 15 minutes, Marcus\'s pain decreases to 8/10 — partial response. You administer a second dose of 4 mg IV. Pain improves to 6/10 at 30 minutes. The PCA is set up per hematology protocol (morphine 1.5 mg demand, 10-minute lockout).\n\nMarcus says, with visible relief: "Thank you. Thank you for actually treating me. You have no idea how many times I\'ve been left to suffer."\n\nYou complete your assessment. During auscultation, you note decreased breath sounds at the right base. You remember his admission CXR showed right lower lobe atelectasis. His SpO₂ has dropped from 95% to 91% in the past 30 minutes. He now mentions the right chest pain is worsening.',
      clinicalNote:
        '🫁 Acute Chest Syndrome (ACS) — The #1 Cause of Death in SCD:\n• Definition: New pulmonary infiltrate + respiratory symptoms in SCD\n• Presentation: Fever, chest pain, dyspnea, oxygen desaturation, new infiltrate on CXR\n• Mechanism: Vaso-occlusion in pulmonary vasculature, fat embolism, infection\n• Risk factors: Pain crisis (especially rib/chest), inadequate pain control (splinting), opioids without incentive spirometry\n• Treatment: Incentive spirometry (prevents splinting-induced atelectasis), supplemental O₂, exchange transfusion if severe, broad-spectrum antibiotics',
      nextSceneId: 'scd-scene-4-acs-decision',
    },
    {
      id: 'scd-scene-3-delayed',
      type: 'narrative',
      title: 'Delayed Analgesia — ACS Develops',
      timeElapsed: 25,
      narrative:
        'After 20 additional minutes of reviewing the chart (total wait now approaching 4 hours without treatment), Marcus\'s SpO₂ drops to 89%. He has developed a fever of 101.4°F. His chest pain is worse. He is now splinting — shallow breathing to avoid the pain.\n\nRepeat CXR shows a new right lower lobe infiltrate — acute chest syndrome has developed.\n\n"Uncontrolled pain causes splinting. Splinting causes atelectasis. Atelectasis in SCD becomes acute chest syndrome. We failed this patient," the hematologist states.',
      clinicalNote:
        '⚠️ Pain → Splinting → Acute Chest Syndrome: The cycle of undertreated VOC pain is: severe pain → shallow breathing (splinting) → atelectasis → sickling in pulmonary vasculature → acute chest syndrome (ACS). ACS is life-threatening and directly preventable with adequate pain control and incentive spirometry.',
      nextSceneId: 'scd-scene-4-acs-decision',
    },
    {
      id: 'scd-scene-3-undertreated',
      type: 'narrative',
      title: 'Undertreated Pain — Complications',
      timeElapsed: 25,
      narrative:
        'Marcus accepts the acetaminophen reluctantly. His pain remains 9–10/10. He is barely breathing to avoid the agony — his RR drops to 12 (splinting, not sedation). His SpO₂ falls to 90% and a new fever of 101.2°F develops. His chest pain worsens significantly.\n\nThe hematologist is called. "He needs IV opioids immediately — he has been in a crisis for hours without adequate treatment. Look at his SpO₂ — he is developing acute chest syndrome from splinting."',
      clinicalNote:
        '⚠️ Under-Treatment of SCD Pain Has Direct Consequences: Inadequate analgesia leads to shallow breathing, splinting, and atelectasis — the direct pathway to acute chest syndrome. Evidence shows Black patients with SCD receive significantly less opioid analgesia than recommended, largely due to implicit bias. This is a patient safety and equity issue.',
      nextSceneId: 'scd-scene-4-acs-decision',
    },
    {
      id: 'scd-scene-4-acs-decision',
      type: 'decision',
      title: 'Developing Acute Chest Syndrome',
      timeElapsed: 60,
      narrative:
        'Marcus\'s SpO₂ has dropped to 91% (from baseline 95%), temperature is 100.2°F, and new right-sided pleuritic chest pain is worsening. The hematologist reviews the case and is concerned about acute chest syndrome.\n\nWhat nursing interventions should you initiate immediately to prevent ACS progression?',
      choices: [
        {
          id: 'scd-c4a',
          text: 'Apply supplemental oxygen, coach Marcus on incentive spirometry every 1–2 hours, continue PCA for pain control, notify hematology, and obtain a repeat CXR',
          nextSceneId: 'scd-scene-5-acs-prevention',
          points: 60,
          isCorrect: true,
          feedback: '✅ Correct! Incentive spirometry is the most important nursing intervention for ACS prevention — it prevents atelectasis from pulmonary splinting. Supplemental oxygen corrects hypoxia. Continued analgesia prevents further splinting. Hematology notification ensures timely escalation.',
          rationale: 'ACS prevention bundle: (1) Incentive spirometry q1–2h — most critical nursing intervention to prevent atelectasis-driven ACS. (2) Supplemental oxygen to maintain SpO₂ ≥ 95% (SCD patients\' baseline). (3) Adequate analgesia to reduce splinting. (4) Early hematology notification for possible exchange transfusion and antibiotics.',
        },
        {
          id: 'scd-c4b',
          text: 'Reduce the morphine PCA rate — opioids can suppress respirations and may be worsening his oxygen saturation',
          nextSceneId: 'scd-scene-5-reduce-opioids',
          points: 0,
          isCorrect: false,
          feedback: '❌ Reducing opioids will worsen pain, increase splinting, and directly worsen his ACS risk. The declining SpO₂ is from vaso-occlusion and atelectasis — not from opioid respiratory depression (his RR is 20, not suppressed). Adequate analgesia is essential for ACS prevention. Do not reduce pain control.',
          rationale: 'Opioid respiratory depression in SCD patients on appropriate PCA dosing is not the cause of declining SpO₂ in ACS. The declining SpO₂ reflects vascular occlusion and atelectasis. Reducing opioids worsens splinting and directly causes ACS progression. Monitor RR and sedation carefully but maintain adequate analgesia.',
        },
        {
          id: 'scd-c4c',
          text: 'Prepare for intubation — his declining SpO₂ indicates imminent respiratory failure',
          nextSceneId: 'scd-scene-5-intubation-premature',
          points: 10,
          isCorrect: false,
          feedback: '⚠️ SpO₂ of 91% (dropping from baseline 95%) in a sickle cell patient warrants concern and escalation, but does not indicate imminent respiratory failure requiring immediate intubation. Non-invasive interventions (oxygen, incentive spirometry, analgesia, exchange transfusion) should be tried first. Escalate to hematology for exchange transfusion if ACS progresses.',
          rationale: 'SCD ACS management escalation: oxygen → incentive spirometry → analgesia → simple transfusion (for moderate ACS) → exchange transfusion (for severe ACS with significant hypoxia or respiratory failure) → mechanical ventilation (last resort). Intubation in SCD carries significant risks and should be avoided if possible.',
        },
      ],
    },
    {
      id: 'scd-scene-5-acs-prevention',
      type: 'narrative',
      title: 'ACS Prevention Bundle Implemented',
      timeElapsed: 70,
      narrative:
        'You apply 4L NC oxygen — SpO₂ improves to 95%. You coach Marcus through incentive spirometry. He is reluctant ("it hurts to breathe deep") but understands the importance. "If I get ACS, I might need a blood transfusion or even be on a ventilator. I need to do this even though it hurts."\n\nWith his pain now better controlled at 5–6/10, he is able to perform IS 10 times per hour. Hematology is at the bedside.\n\nRepeat CXR (3 hours): No new infiltrate. The right lower lobe atelectasis has improved with incentive spirometry and positioning.\n\nThe hematologist: "This is exactly what we needed to do. Your nursing care tonight prevented ACS. He stays in regular monitoring — no need for exchange transfusion tonight."',
      clinicalNote:
        '✅ Incentive Spirometry in SCD VOC: The most important nursing intervention to prevent ACS. Teach patients to perform IS 10 breaths per hour while awake. Adequate pain control makes this possible. The combination of pain management + IS dramatically reduces ACS incidence during VOC hospitalization.',
      nextSceneId: 'scd-scene-6-end',
    },
    {
      id: 'scd-scene-5-reduce-opioids',
      type: 'narrative',
      title: 'Reduced Opioids — ACS Progression',
      timeElapsed: 70,
      narrative:
        'With reduced PCA, Marcus\'s pain climbs back to 9/10. He barely breathes to avoid pain. SpO₂ drops to 88%. New infiltrate appears on CXR — ACS has developed. The hematologist arrives urgently.\n\n"Reducing opioids in a vaso-occlusive crisis causes pain-mediated splinting. Splinting causes atelectasis, which triggers ACS. Adequate pain control IS ACS prevention. We need to restore his full PCA dose, add incentive spirometry, and start antibiotics for empiric coverage."',
      clinicalNote:
        '⚠️ Opioids and ACS: Undermedicated pain in SCD directly causes ACS through pulmonary splinting. Reducing opioids due to low-level SpO₂ concerns (without evidence of respiratory depression) worsens outcomes. Monitor RR and sedation level — not SpO₂ alone — to assess for opioid-related respiratory compromise.',
      nextSceneId: 'scd-scene-6-end',
    },
    {
      id: 'scd-scene-5-intubation-premature',
      type: 'narrative',
      title: 'Premature Escalation — ICU Transfer',
      timeElapsed: 70,
      narrative:
        'The ICU team is called. The intensivist reviews the case. "SpO₂ of 91% does not warrant intubation in a sickle cell patient who is awake, speaking, and has a baseline SpO₂ of 97%. We need to try: supplemental oxygen, incentive spirometry, adequate analgesia, and hematology-guided transfusion first. Let\'s step this back."',
      clinicalNote:
        '📌 Escalation in SCD ACS: Non-invasive interventions should precede invasive ones. Simple supplemental oxygen + incentive spirometry + analgesia treats most early ACS. Exchange transfusion is indicated for rapidly worsening ACS (SpO₂ < 90%, RR > 30, bilateral infiltrates, hemodynamic instability). Intubation is a last resort.',
      nextSceneId: 'scd-scene-6-end',
    },
    {
      id: 'scd-scene-6-end',
      type: 'end',
      title: 'Case Complete — Sickle Cell Vaso-Occlusive Crisis',
      timeElapsed: 180,
      narrative:
        'Marcus is discharged on day 4 with pain improved to 3/10. His hydroxyurea adherence is reviewed and confirmed. He is connected with the sickle cell program nurse navigator for ongoing support.\n\nThis case highlighted not only the clinical management of SCD VOC but also the critical issue of implicit bias in pain management for Black patients with sickle cell disease.\n\nKey Learning Points:\n• SCD VOC pain is real — caused by ischemia. Trust the patient\'s self-report\n• Initiate IV opioids within 30 minutes of triage (NHLBI guideline)\n• ACS pathway: inadequate analgesia → splinting → atelectasis → ACS\n• Incentive spirometry q1–2h is the most critical nursing intervention for ACS prevention\n• Adequate analgesia enables IS — pain control and respiratory care are linked\n• Implicit bias causes undertreated pain and preventable complications in SCD patients\n• Exchange transfusion is the treatment for severe or refractory ACS\n• SCD patients are experts in their own disease — listen to them',
      endType: 'success',
    },
  ],
};
