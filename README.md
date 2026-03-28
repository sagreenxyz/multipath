# Multipath — Multi-Path Clinical Training Platform

An interactive Astro.build website for nursing student training through complex, multi-path unfolding case studies. Students take on the role of the nurse in realistic clinical scenarios and make decisions that shape patient outcomes.

## Features

- **Role-based learning**: You are the nurse — every decision matters
- **Branching pathways**: Multiple clinical paths mirror real patient care complexity
- **Instant references**: Drug references, assessment tools, lab values, and clinical guidelines available in-context
- **Evidence-based feedback**: Detailed rationale on every decision
- **Progress tracking**: Scores saved to localStorage; retry any case
- **Professional medical UI**: Clean blues/teals, mobile-responsive design

## Case Studies

1. **The Long Road** (Advanced) — Managing progressive chronic kidney disease (hyperkalemia, fluid overload, dialysis decision, patient education)
2. **A Cascade of Complications** (Intermediate) — Sepsis in an elderly patient with UTI
3. **When Every Minute Counts** (Advanced) — Acute coronary syndrome / STEMI

## Tech Stack

- [Astro.build](https://astro.build) with TypeScript (strict mode)
- [Tailwind CSS](https://tailwindcss.com) for styling
- Vanilla JavaScript for the case study engine (no framework required)
- Case studies defined as TypeScript data files
- LocalStorage for progress tracking (`multipath-progress`)
- Fully static — no backend required

## Getting Started

```bash
npm install
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview production build
```

## Project Structure

```
src/
├── types/case-study.ts          # TypeScript type definitions
├── data/
│   ├── case-studies/            # Case study data files
│   └── references/              # Drug & assessment tool data
├── layouts/Layout.astro         # Main page layout
├── components/
│   ├── CaseStudyCard.astro      # Card for case listing
│   ├── CaseStudyEngine.astro    # Interactive case study player
│   └── PatientVitals.astro      # Vitals display component
└── pages/
    ├── index.astro              # Home page
    ├── case-studies/            # Case list + player pages
    └── references/              # Clinical reference library
```

## Educational Design

- **Constructivist learning**: Students build knowledge through active decision-making
- **Clinical reasoning development**: Unfolding scenarios develop diagnostic thinking patterns
- **Safe failure environment**: Mistakes are learning opportunities; retry and explore all paths
- **Evidence-based content**: Aligned with CKD clinical practice guidelines, Surviving Sepsis Campaign, AHA/ACC guidelines

---

*For educational purposes only. Not a substitute for clinical judgment.*
