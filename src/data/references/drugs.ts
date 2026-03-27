export interface DrugReference {
  name: string;
  genericName: string;
  class: string;
  indication: string;
  commonDoses: string[];
  route: string[];
  contraindications: string[];
  sideEffects: string[];
  nursingConsiderations: string[];
  monitoring: string[];
}

export const drugReferences: DrugReference[] = [
  {
    name: 'Aspirin (ASA)',
    genericName: 'Acetylsalicylic acid',
    class: 'Antiplatelet / NSAID',
    indication: 'ACS, thromboembolism prevention, pain, fever, inflammation',
    commonDoses: ['81 mg PO daily (prophylaxis)', '325 mg PO STAT (ACS)'],
    route: ['PO'],
    contraindications: ['Active GI bleeding', 'Aspirin allergy', 'Children with viral illness (Reye syndrome risk)', 'Severe hepatic impairment'],
    sideEffects: ['GI upset', 'Bleeding', 'Tinnitus (toxicity)', 'Bronchospasm'],
    nursingConsiderations: ['Give with food to reduce GI irritation', 'Chew tablet for rapid absorption in ACS', 'Assess for salicylate allergy before administration'],
    monitoring: ['Signs of bleeding', 'Tinnitus', 'GI symptoms', 'Renal function with long-term use'],
  },
  {
    name: 'Nitroglycerin (NTG)',
    genericName: 'Glyceryl trinitrate',
    class: 'Nitrate / Vasodilator',
    indication: 'Angina pectoris, ACS, hypertensive emergency, heart failure',
    commonDoses: ['0.4 mg SL q5min × 3 (angina)', '5–200 mcg/min IV infusion (ACS/HF)'],
    route: ['Sublingual', 'IV', 'Topical', 'Transdermal'],
    contraindications: ['Hypotension (SBP < 90 mmHg)', 'PDE-5 inhibitor use within 24–48 h', 'Right ventricular infarction', 'Severe aortic stenosis'],
    sideEffects: ['Headache', 'Hypotension', 'Reflex tachycardia', 'Flushing', 'Dizziness'],
    nursingConsiderations: ['Check BP before each dose; hold if SBP < 90 mmHg', 'Instruct patient to sit or lie down', 'Protect from light; store in dark glass bottle', 'Use gloves when applying topical forms'],
    monitoring: ['Blood pressure before/after each dose', 'Heart rate', 'Pain level (0–10)', 'Signs of hypotension'],
  },
  {
    name: 'Morphine Sulfate',
    genericName: 'Morphine',
    class: 'Opioid Analgesic',
    indication: 'Severe pain, ACS (adjunct), pulmonary edema',
    commonDoses: ['2–4 mg IV q4–6h PRN (pain)', '2–8 mg IV (ACS, use with caution)'],
    route: ['IV', 'IM', 'SC', 'PO', 'Epidural'],
    contraindications: ['Respiratory depression', 'Paralytic ileus', 'Head injury with elevated ICP', 'MAOI use within 14 days'],
    sideEffects: ['Respiratory depression', 'Sedation', 'Nausea/vomiting', 'Constipation', 'Hypotension', 'Urinary retention'],
    nursingConsiderations: ['Assess respiratory rate and depth before administration', 'Have naloxone (Narcan) available', 'Monitor for sedation using sedation scale', 'Administer IVP slowly over 4–5 minutes'],
    monitoring: ['Respiratory rate (hold if < 12/min)', 'O₂ saturation', 'Level of consciousness', 'Pain score', 'Blood pressure'],
  },
  {
    name: 'Vancomycin',
    genericName: 'Vancomycin hydrochloride',
    class: 'Glycopeptide Antibiotic',
    indication: 'MRSA infections, sepsis, C. diff (PO), endocarditis',
    commonDoses: ['15–20 mg/kg IV q8–12h (sepsis/serious infection)', 'Dose individualized by AUC/MIC target'],
    route: ['IV', 'PO (for C. diff only)'],
    contraindications: ['Known vancomycin hypersensitivity'],
    sideEffects: ['Nephrotoxicity', 'Ototoxicity', 'Red-man syndrome (infusion reaction)', 'Thrombophlebitis'],
    nursingConsiderations: ['Infuse over at least 60 min to prevent red-man syndrome', 'Monitor trough levels (or AUC) before 4th dose', 'Ensure adequate hydration', 'Assess IV site for phlebitis'],
    monitoring: ['Renal function (BUN, creatinine)', 'Vancomycin levels (AUC-guided dosing)', 'CBC', 'Signs of ototoxicity (tinnitus, dizziness)'],
  },
  {
    name: 'Piperacillin-Tazobactam (Pip-Tazo)',
    genericName: 'Piperacillin / Tazobactam',
    class: 'Beta-lactam / Beta-lactamase Inhibitor Combination',
    indication: 'Broad-spectrum gram-negative and anaerobic infections, sepsis',
    commonDoses: ['3.375 g IV q6h', '4.5 g IV q6h (extended infusion 4h for severe sepsis)'],
    route: ['IV'],
    contraindications: ['Penicillin or cephalosporin allergy (use caution)'],
    sideEffects: ['Diarrhea', 'Nausea', 'Rash', 'Hypokalemia', 'Hepatotoxicity (prolonged use)'],
    nursingConsiderations: ['Ask about penicillin/beta-lactam allergy before administration', 'Assess for signs of C. diff colitis', 'Monitor electrolytes, especially potassium', 'Reconstitute per pharmacy instructions'],
    monitoring: ['Signs of allergic reaction', 'Renal function', 'Potassium levels', 'LFTs (prolonged use)'],
  },
  {
    name: 'Normal Saline (0.9% NaCl)',
    genericName: 'Sodium chloride 0.9%',
    class: 'Isotonic Crystalloid IV Fluid',
    indication: 'Volume resuscitation, fluid replacement, medication diluent',
    commonDoses: ['1–2 L IV bolus (sepsis resuscitation per Sepsis-3 bundle)', '30 mL/kg within 3 h (sepsis)'],
    route: ['IV'],
    contraindications: ['Hypernatremia', 'Fluid overload', 'Hyperchloremic metabolic acidosis'],
    sideEffects: ['Fluid overload/edema', 'Hyperchloremic acidosis (large volumes)', 'Hyponatremia (paradoxically with overuse)', 'Dilutional coagulopathy'],
    nursingConsiderations: ['Reassess respiratory status frequently during rapid infusion', 'Monitor for signs of fluid overload (crackles, edema, JVD)', 'Document I&O accurately', 'Warm if giving large volumes rapidly'],
    monitoring: ['Vital signs', 'Lung sounds', 'Urine output (goal ≥ 0.5 mL/kg/h)', 'Serum electrolytes', 'Signs of fluid overload'],
  },
  {
    name: 'Metoprolol Tartrate',
    genericName: 'Metoprolol',
    class: 'Beta-1 Selective Adrenergic Blocker',
    indication: 'ACS, hypertension, stable angina, heart failure, arrhythmias',
    commonDoses: ['5 mg IV q5min × 3 (ACS, rate control)', '25–100 mg PO BID (chronic)'],
    route: ['IV', 'PO'],
    contraindications: ['Heart rate < 60 bpm', 'SBP < 100 mmHg', 'Decompensated HF', '2nd/3rd degree AV block', 'Severe reactive airway disease'],
    sideEffects: ['Bradycardia', 'Hypotension', 'Fatigue', 'Bronchospasm', 'Masking hypoglycemia symptoms'],
    nursingConsiderations: ['Check HR and BP before each dose (hold if HR < 60 or SBP < 100)', 'Do not crush extended-release tablets', 'Do not abruptly discontinue—taper', 'Caution in diabetic patients—may mask hypoglycemia'],
    monitoring: ['Heart rate and rhythm', 'Blood pressure', 'Signs of heart failure', 'Blood glucose (diabetics)', 'Respiratory status'],
  },
  {
    name: 'Heparin (Unfractionated)',
    genericName: 'Heparin sodium',
    class: 'Anticoagulant',
    indication: 'VTE treatment/prophylaxis, ACS, PE, DVT, maintaining line patency',
    commonDoses: ['60–80 units/kg IV bolus (ACS/PE), then 12–18 units/kg/h infusion', '5,000 units SC q8–12h (prophylaxis)'],
    route: ['IV', 'SC'],
    contraindications: ['Active major bleeding', 'HIT (heparin-induced thrombocytopenia)', 'Severe thrombocytopenia', 'Uncontrolled hypertension (hemorrhagic stroke risk)'],
    sideEffects: ['Bleeding', 'HIT', 'Thrombocytopenia', 'Osteoporosis (long-term)', 'Hyperkalemia'],
    nursingConsiderations: ['Use weight-based dosing protocol', 'Use only preservative-free heparin for neonates/infants', 'Never give IM (hematoma risk)', 'Protamine sulfate is the reversal agent'],
    monitoring: ['aPTT (goal 60–100 seconds)', 'Platelet count (HIT risk)', 'Signs of bleeding', 'Hgb/Hct', 'Neurological status (spinal procedures)'],
  },
];
