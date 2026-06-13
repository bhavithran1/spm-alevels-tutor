// Paper database — all URLs verified 200 OK as of June 2026
// Sources: physicsandmathstutor.com CDN (PMT) · ocr.org.uk

const PMT = 'https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers';
const OCR = 'https://www.ocr.org.uk/Images';

export const BOARDS = ['Edexcel', 'AQA', 'OCR A', 'OCR B (MEI)', 'Cambridge (CIE)'];
export const SUBJECTS = ['Mathematics', 'Further Mathematics'];
export const SESSIONS = ['May/June', 'Oct/Nov', 'Sample/Specimen'];

export const papers = [
  // ─── EDEXCEL A-LEVEL MATHEMATICS ─────────────────────────────────────────
  // Paper 1 — Pure Mathematics 1
  { board:'Edexcel', subject:'Mathematics', year:2024, session:'May/June', paper:'Pure Mathematics 1', code:'9MA0/01', qp:`${PMT}/Edexcel/Paper-1/QP/June%202024%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-1/MS/June%202024%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2023, session:'May/June', paper:'Pure Mathematics 1', code:'9MA0/01', qp:`${PMT}/Edexcel/Paper-1/QP/June%202023%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-1/MS/June%202023%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2022, session:'May/June', paper:'Pure Mathematics 1', code:'9MA0/01', qp:`${PMT}/Edexcel/Paper-1/QP/June%202022%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-1/MS/June%202022%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2021, session:'Oct/Nov', paper:'Pure Mathematics 1', code:'9MA0/01', qp:`${PMT}/Edexcel/Paper-1/QP/October%202021%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-1/MS/October%202021%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2020, session:'Oct/Nov', paper:'Pure Mathematics 1', code:'9MA0/01', qp:`${PMT}/Edexcel/Paper-1/QP/October%202020%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-1/MS/October%202020%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2019, session:'May/June', paper:'Pure Mathematics 1', code:'9MA0/01', qp:`${PMT}/Edexcel/Paper-1/QP/June%202019%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-1/MS/June%202019%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2018, session:'May/June', paper:'Pure Mathematics 1', code:'9MA0/01', qp:`${PMT}/Edexcel/Paper-1/QP/June%202018%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-1/MS/June%202018%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2017, session:'Sample/Specimen', paper:'Pure Mathematics 1', code:'9MA0/01', qp:`${PMT}/Edexcel/Paper-1/QP/Sample%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-1/MS/Sample%20MS.pdf` },

  // Paper 2 — Pure Mathematics 2
  { board:'Edexcel', subject:'Mathematics', year:2024, session:'May/June', paper:'Pure Mathematics 2', code:'9MA0/02', qp:`${PMT}/Edexcel/Paper-2/QP/June%202024%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-2/MS/June%202024%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2023, session:'May/June', paper:'Pure Mathematics 2', code:'9MA0/02', qp:`${PMT}/Edexcel/Paper-2/QP/June%202023%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-2/MS/June%202023%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2022, session:'May/June', paper:'Pure Mathematics 2', code:'9MA0/02', qp:`${PMT}/Edexcel/Paper-2/QP/June%202022%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-2/MS/June%202022%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2021, session:'Oct/Nov', paper:'Pure Mathematics 2', code:'9MA0/02', qp:`${PMT}/Edexcel/Paper-2/QP/October%202021%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-2/MS/October%202021%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2020, session:'Oct/Nov', paper:'Pure Mathematics 2', code:'9MA0/02', qp:`${PMT}/Edexcel/Paper-2/QP/October%202020%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-2/MS/October%202020%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2019, session:'May/June', paper:'Pure Mathematics 2', code:'9MA0/02', qp:`${PMT}/Edexcel/Paper-2/QP/June%202019%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-2/MS/June%202019%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2018, session:'May/June', paper:'Pure Mathematics 2', code:'9MA0/02', qp:`${PMT}/Edexcel/Paper-2/QP/June%202018%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-2/MS/June%202018%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2017, session:'Sample/Specimen', paper:'Pure Mathematics 2', code:'9MA0/02', qp:`${PMT}/Edexcel/Paper-2/QP/Sample%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-2/MS/Sample%20MS.pdf` },

  // Paper 3 — Statistics & Mechanics (2018 is combined; 2019+ split into Stats+Mech)
  { board:'Edexcel', subject:'Mathematics', year:2024, session:'May/June', paper:'Statistics & Mechanics (Stats)', code:'9MA0/3B', qp:`${PMT}/Edexcel/Paper-3/QP/June%202024%20QP%20(Stats).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/June%202024%20MS%20(Stats).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2024, session:'May/June', paper:'Statistics & Mechanics (Mech)', code:'9MA0/3A', qp:`${PMT}/Edexcel/Paper-3/QP/June%202024%20QP%20(Mech).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/June%202024%20MS%20(Mech).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2023, session:'May/June', paper:'Statistics & Mechanics (Stats)', code:'9MA0/3B', qp:`${PMT}/Edexcel/Paper-3/QP/June%202023%20QP%20(Stats).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/June%202023%20MS%20(Stats).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2023, session:'May/June', paper:'Statistics & Mechanics (Mech)', code:'9MA0/3A', qp:`${PMT}/Edexcel/Paper-3/QP/June%202023%20QP%20(Mech).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/June%202023%20MS%20(Mech).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2022, session:'May/June', paper:'Statistics & Mechanics (Stats)', code:'9MA0/3B', qp:`${PMT}/Edexcel/Paper-3/QP/June%202022%20QP%20(Stats).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/June%202022%20MS%20(Stats).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2022, session:'May/June', paper:'Statistics & Mechanics (Mech)', code:'9MA0/3A', qp:`${PMT}/Edexcel/Paper-3/QP/June%202022%20QP%20(Mech).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/June%202022%20MS%20(Mech).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2021, session:'Oct/Nov', paper:'Statistics & Mechanics (Stats)', code:'9MA0/3B', qp:`${PMT}/Edexcel/Paper-3/QP/October%202021%20QP%20(Stats).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/October%202021%20MS%20(Stats).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2021, session:'Oct/Nov', paper:'Statistics & Mechanics (Mech)', code:'9MA0/3A', qp:`${PMT}/Edexcel/Paper-3/QP/October%202021%20QP%20(Mech).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/October%202021%20MS%20(Mech).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2020, session:'Oct/Nov', paper:'Statistics & Mechanics (Stats)', code:'9MA0/3B', qp:`${PMT}/Edexcel/Paper-3/QP/October%202020%20QP%20(Stats).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/October%202020%20MS%20(Stats).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2020, session:'Oct/Nov', paper:'Statistics & Mechanics (Mech)', code:'9MA0/3A', qp:`${PMT}/Edexcel/Paper-3/QP/October%202020%20QP%20(Mech).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/October%202020%20MS%20(Mech).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2019, session:'May/June', paper:'Statistics & Mechanics (Stats)', code:'9MA0/3B', qp:`${PMT}/Edexcel/Paper-3/QP/June%202019%20QP%20(Stats).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/June%202019%20MS%20(Stats).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2019, session:'May/June', paper:'Statistics & Mechanics (Mech)', code:'9MA0/3A', qp:`${PMT}/Edexcel/Paper-3/QP/June%202019%20QP%20(Mech).pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/June%202019%20MS%20(Mech).pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2018, session:'May/June', paper:'Statistics & Mechanics', code:'9MA0/03', qp:`${PMT}/Edexcel/Paper-3/QP/June%202018%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/June%202018%20MS.pdf` },
  { board:'Edexcel', subject:'Mathematics', year:2017, session:'Sample/Specimen', paper:'Statistics & Mechanics', code:'9MA0/03', qp:`${PMT}/Edexcel/Paper-3/QP/Sample%20QP.pdf`, ms:`${PMT}/Edexcel/Paper-3/MS/Sample%20MS.pdf` },

  // ─── EDEXCEL A-LEVEL FURTHER MATHEMATICS ─────────────────────────────────
  { board:'Edexcel', subject:'Further Mathematics', year:2024, session:'May/June', paper:'Core Pure Mathematics 1', code:'9FM0/01', qp:`${PMT}/Edexcel-Further/Core-Pure-1/QP/June%202024%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Core-Pure-1/MS/June%202024%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2023, session:'May/June', paper:'Core Pure Mathematics 1', code:'9FM0/01', qp:`${PMT}/Edexcel-Further/Core-Pure-1/QP/June%202023%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Core-Pure-1/MS/June%202023%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2022, session:'May/June', paper:'Core Pure Mathematics 1', code:'9FM0/01', qp:`${PMT}/Edexcel-Further/Core-Pure-1/QP/June%202022%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Core-Pure-1/MS/June%202022%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2019, session:'May/June', paper:'Core Pure Mathematics 1', code:'9FM0/01', qp:`${PMT}/Edexcel-Further/Core-Pure-1/QP/June%202019%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Core-Pure-1/MS/June%202019%20MS.pdf` },

  { board:'Edexcel', subject:'Further Mathematics', year:2024, session:'May/June', paper:'Core Pure Mathematics 2', code:'9FM0/02', qp:`${PMT}/Edexcel-Further/Core-Pure-2/QP/June%202024%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Core-Pure-2/MS/June%202024%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2023, session:'May/June', paper:'Core Pure Mathematics 2', code:'9FM0/02', qp:`${PMT}/Edexcel-Further/Core-Pure-2/QP/June%202023%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Core-Pure-2/MS/June%202023%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2022, session:'May/June', paper:'Core Pure Mathematics 2', code:'9FM0/02', qp:`${PMT}/Edexcel-Further/Core-Pure-2/QP/June%202022%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Core-Pure-2/MS/June%202022%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2019, session:'May/June', paper:'Core Pure Mathematics 2', code:'9FM0/02', qp:`${PMT}/Edexcel-Further/Core-Pure-2/QP/June%202019%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Core-Pure-2/MS/June%202019%20MS.pdf` },

  { board:'Edexcel', subject:'Further Mathematics', year:2024, session:'May/June', paper:'Further Pure Mathematics 1', code:'9FM0/3A', qp:`${PMT}/Edexcel-Further/Further-Pure-1/QP/June%202024%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Further-Pure-1/MS/June%202024%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2023, session:'May/June', paper:'Further Pure Mathematics 1', code:'9FM0/3A', qp:`${PMT}/Edexcel-Further/Further-Pure-1/QP/June%202023%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Further-Pure-1/MS/June%202023%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2022, session:'May/June', paper:'Further Pure Mathematics 1', code:'9FM0/3A', qp:`${PMT}/Edexcel-Further/Further-Pure-1/QP/June%202022%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Further-Pure-1/MS/June%202022%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2019, session:'May/June', paper:'Further Pure Mathematics 1', code:'9FM0/3A', qp:`${PMT}/Edexcel-Further/Further-Pure-1/QP/June%202019%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Further-Pure-1/MS/June%202019%20MS.pdf` },

  { board:'Edexcel', subject:'Further Mathematics', year:2024, session:'May/June', paper:'Decision Mathematics 1', code:'9FM0/3D', qp:`${PMT}/Edexcel-Further/Decision-1/QP/June%202024%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Decision-1/MS/June%202024%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2023, session:'May/June', paper:'Decision Mathematics 1', code:'9FM0/3D', qp:`${PMT}/Edexcel-Further/Decision-1/QP/June%202023%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Decision-1/MS/June%202023%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2022, session:'May/June', paper:'Decision Mathematics 1', code:'9FM0/3D', qp:`${PMT}/Edexcel-Further/Decision-1/QP/June%202022%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Decision-1/MS/June%202022%20MS.pdf` },
  { board:'Edexcel', subject:'Further Mathematics', year:2019, session:'May/June', paper:'Decision Mathematics 1', code:'9FM0/3D', qp:`${PMT}/Edexcel-Further/Decision-1/QP/June%202019%20QP.pdf`, ms:`${PMT}/Edexcel-Further/Decision-1/MS/June%202019%20MS.pdf` },

  // ─── AQA A-LEVEL MATHEMATICS ─────────────────────────────────────────────
  { board:'AQA', subject:'Mathematics', year:2024, session:'May/June', paper:'Paper 1 (Pure)', code:'7357/1', qp:`${PMT}/AQA/Paper-1/QP/June%202024%20QP.pdf`, ms:`${PMT}/AQA/Paper-1/MS/June%202024%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2023, session:'May/June', paper:'Paper 1 (Pure)', code:'7357/1', qp:`${PMT}/AQA/Paper-1/QP/June%202023%20QP.pdf`, ms:`${PMT}/AQA/Paper-1/MS/June%202023%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2022, session:'May/June', paper:'Paper 1 (Pure)', code:'7357/1', qp:`${PMT}/AQA/Paper-1/QP/June%202022%20QP.pdf`, ms:`${PMT}/AQA/Paper-1/MS/June%202022%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2021, session:'May/June', paper:'Paper 1 (Pure)', code:'7357/1', qp:`${PMT}/AQA/Paper-1/QP/June%202021%20QP.pdf`, ms:`${PMT}/AQA/Paper-1/MS/June%202021%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2020, session:'May/June', paper:'Paper 1 (Pure)', code:'7357/1', qp:`${PMT}/AQA/Paper-1/QP/June%202020%20QP.pdf`, ms:`${PMT}/AQA/Paper-1/MS/June%202020%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2019, session:'May/June', paper:'Paper 1 (Pure)', code:'7357/1', qp:`${PMT}/AQA/Paper-1/QP/June%202019%20QP.pdf`, ms:`${PMT}/AQA/Paper-1/MS/June%202019%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2018, session:'May/June', paper:'Paper 1 (Pure)', code:'7357/1', qp:`${PMT}/AQA/Paper-1/QP/June%202018%20QP.pdf`, ms:`${PMT}/AQA/Paper-1/MS/June%202018%20MS.pdf` },

  { board:'AQA', subject:'Mathematics', year:2024, session:'May/June', paper:'Paper 2 (Pure & Stats)', code:'7357/2', qp:`${PMT}/AQA/Paper-2/QP/June%202024%20QP.pdf`, ms:`${PMT}/AQA/Paper-2/MS/June%202024%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2023, session:'May/June', paper:'Paper 2 (Pure & Stats)', code:'7357/2', qp:`${PMT}/AQA/Paper-2/QP/June%202023%20QP.pdf`, ms:`${PMT}/AQA/Paper-2/MS/June%202023%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2022, session:'May/June', paper:'Paper 2 (Pure & Stats)', code:'7357/2', qp:`${PMT}/AQA/Paper-2/QP/June%202022%20QP.pdf`, ms:`${PMT}/AQA/Paper-2/MS/June%202022%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2021, session:'May/June', paper:'Paper 2 (Pure & Stats)', code:'7357/2', qp:`${PMT}/AQA/Paper-2/QP/June%202021%20QP.pdf`, ms:`${PMT}/AQA/Paper-2/MS/June%202021%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2020, session:'May/June', paper:'Paper 2 (Pure & Stats)', code:'7357/2', qp:`${PMT}/AQA/Paper-2/QP/June%202020%20QP.pdf`, ms:`${PMT}/AQA/Paper-2/MS/June%202020%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2019, session:'May/June', paper:'Paper 2 (Pure & Stats)', code:'7357/2', qp:`${PMT}/AQA/Paper-2/QP/June%202019%20QP.pdf`, ms:`${PMT}/AQA/Paper-2/MS/June%202019%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2018, session:'May/June', paper:'Paper 2 (Pure & Stats)', code:'7357/2', qp:`${PMT}/AQA/Paper-2/QP/June%202018%20QP.pdf`, ms:`${PMT}/AQA/Paper-2/MS/June%202018%20MS.pdf` },

  { board:'AQA', subject:'Mathematics', year:2024, session:'May/June', paper:'Paper 3 (Pure & Mechanics)', code:'7357/3', qp:`${PMT}/AQA/Paper-3/QP/June%202024%20QP.pdf`, ms:`${PMT}/AQA/Paper-3/MS/June%202024%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2023, session:'May/June', paper:'Paper 3 (Pure & Mechanics)', code:'7357/3', qp:`${PMT}/AQA/Paper-3/QP/June%202023%20QP.pdf`, ms:`${PMT}/AQA/Paper-3/MS/June%202023%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2022, session:'May/June', paper:'Paper 3 (Pure & Mechanics)', code:'7357/3', qp:`${PMT}/AQA/Paper-3/QP/June%202022%20QP.pdf`, ms:`${PMT}/AQA/Paper-3/MS/June%202022%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2021, session:'May/June', paper:'Paper 3 (Pure & Mechanics)', code:'7357/3', qp:`${PMT}/AQA/Paper-3/QP/June%202021%20QP.pdf`, ms:`${PMT}/AQA/Paper-3/MS/June%202021%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2020, session:'May/June', paper:'Paper 3 (Pure & Mechanics)', code:'7357/3', qp:`${PMT}/AQA/Paper-3/QP/June%202020%20QP.pdf`, ms:`${PMT}/AQA/Paper-3/MS/June%202020%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2019, session:'May/June', paper:'Paper 3 (Pure & Mechanics)', code:'7357/3', qp:`${PMT}/AQA/Paper-3/QP/June%202019%20QP.pdf`, ms:`${PMT}/AQA/Paper-3/MS/June%202019%20MS.pdf` },
  { board:'AQA', subject:'Mathematics', year:2018, session:'May/June', paper:'Paper 3 (Pure & Mechanics)', code:'7357/3', qp:`${PMT}/AQA/Paper-3/QP/June%202018%20QP.pdf`, ms:`${PMT}/AQA/Paper-3/MS/June%202018%20MS.pdf` },

  // ─── AQA A-LEVEL FURTHER MATHEMATICS ─────────────────────────────────────
  { board:'AQA', subject:'Further Mathematics', year:2024, session:'May/June', paper:'Paper 1', code:'7367/1', qp:`${PMT}/AQA-Further/Paper-1/QP/June%202024%20QP.pdf`, ms:`${PMT}/AQA-Further/Paper-1/MS/June%202024%20MS.pdf` },
  { board:'AQA', subject:'Further Mathematics', year:2023, session:'May/June', paper:'Paper 1', code:'7367/1', qp:`${PMT}/AQA-Further/Paper-1/QP/June%202023%20QP.pdf`, ms:`${PMT}/AQA-Further/Paper-1/MS/June%202023%20MS.pdf` },
  { board:'AQA', subject:'Further Mathematics', year:2019, session:'May/June', paper:'Paper 1', code:'7367/1', qp:`${PMT}/AQA-Further/Paper-1/QP/June%202019%20QP.pdf`, ms:`${PMT}/AQA-Further/Paper-1/MS/June%202019%20MS.pdf` },

  { board:'AQA', subject:'Further Mathematics', year:2024, session:'May/June', paper:'Paper 2', code:'7367/2', qp:`${PMT}/AQA-Further/Paper-2/QP/June%202024%20QP.pdf`, ms:`${PMT}/AQA-Further/Paper-2/MS/June%202024%20MS.pdf` },
  { board:'AQA', subject:'Further Mathematics', year:2023, session:'May/June', paper:'Paper 2', code:'7367/2', qp:`${PMT}/AQA-Further/Paper-2/QP/June%202023%20QP.pdf`, ms:`${PMT}/AQA-Further/Paper-2/MS/June%202023%20MS.pdf` },
  { board:'AQA', subject:'Further Mathematics', year:2019, session:'May/June', paper:'Paper 2', code:'7367/2', qp:`${PMT}/AQA-Further/Paper-2/QP/June%202019%20QP.pdf`, ms:`${PMT}/AQA-Further/Paper-2/MS/June%202019%20MS.pdf` },

  // ─── OCR A A-LEVEL MATHEMATICS (H240) ── official ocr.org.uk URLs ─────────
  // Component 1 — Pure Mathematics
  { board:'OCR A', subject:'Mathematics', year:2023, session:'May/June', paper:'Pure Mathematics', code:'H240/01', qp:`${OCR}/703866-question-paper-pure-mathematics.pdf`, ms:`${OCR}/704008-mark-scheme-pure-mathematics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2022, session:'May/June', paper:'Pure Mathematics', code:'H240/01', qp:`${OCR}/676845-question-paper-pure-mathematics.pdf`, ms:`${OCR}/677005-mark-scheme-pure-mathematics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2021, session:'Oct/Nov', paper:'Pure Mathematics', code:'H240/01', qp:`${OCR}/667253-question-paper-pure-mathematics.pdf`, ms:`${OCR}/667259-mark-scheme-pure-mathematics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2020, session:'Oct/Nov', paper:'Pure Mathematics', code:'H240/01', qp:`${OCR}/643526-question-paper-pure-mathematics.pdf`, ms:`${OCR}/643532-mark-scheme-pure-mathematics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2019, session:'May/June', paper:'Pure Mathematics', code:'H240/01', qp:`${OCR}/621197-question-paper-pure-mathematics.pdf`, ms:`${OCR}/621389-mark-scheme-pure-mathematics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2018, session:'May/June', paper:'Pure Mathematics', code:'H240/01', qp:`${OCR}/535607-question-paper-pure-mathematics.pdf`, ms:`${OCR}/535621-mark-scheme-pure-mathematics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2017, session:'Sample/Specimen', paper:'Pure Mathematics', code:'H240/01', qp:`${OCR}/308724-unit-h240-01-pure-mathematics-sample-assessment-material.pdf`, ms:null },

  // Component 2 — Pure Mathematics & Statistics
  { board:'OCR A', subject:'Mathematics', year:2023, session:'May/June', paper:'Pure Mathematics & Statistics', code:'H240/02', qp:`${OCR}/703868-question-paper-pure-mathematics-and-statistics.pdf`, ms:`${OCR}/704009-mark-scheme-pure-mathematics-and-statistics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2022, session:'May/June', paper:'Pure Mathematics & Statistics', code:'H240/02', qp:`${OCR}/676847-question-paper-pure-mathematics-and-statistics.pdf`, ms:`${OCR}/677006-mark-scheme-pure-mathematics-and-statistics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2021, session:'Oct/Nov', paper:'Pure Mathematics & Statistics', code:'H240/02', qp:`${OCR}/667255-question-paper-pure-mathematics-and-statistics.pdf`, ms:`${OCR}/667260-mark-scheme-pure-mathematics-and-statistics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2020, session:'Oct/Nov', paper:'Pure Mathematics & Statistics', code:'H240/02', qp:`${OCR}/643528-question-paper-pure-mathematics-and-statistics.pdf`, ms:`${OCR}/643533-mark-scheme-pure-mathematics-and-statistics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2019, session:'May/June', paper:'Pure Mathematics & Statistics', code:'H240/02', qp:`${OCR}/621199-question-paper-pure-mathematics-and-statistics.pdf`, ms:`${OCR}/621390-mark-scheme-pure-mathematics-and-statistics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2018, session:'May/June', paper:'Pure Mathematics & Statistics', code:'H240/02', qp:`${OCR}/535611-question-paper-pure-mathematics-and-statistics.pdf`, ms:`${OCR}/535622-mark-scheme-pure-mathematics-and-statistics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2017, session:'Sample/Specimen', paper:'Pure Mathematics & Statistics', code:'H240/02', qp:`${OCR}/308725-unit-h240-02-pure-mathematics-and-statistics-sample-assessment-material.pdf`, ms:null },

  // Component 3 — Pure Mathematics & Mechanics
  { board:'OCR A', subject:'Mathematics', year:2023, session:'May/June', paper:'Pure Mathematics & Mechanics', code:'H240/03', qp:`${OCR}/703870-question-paper-pure-mathematics-and-mechanics.pdf`, ms:`${OCR}/704010-mark-scheme-pure-mathematics-and-mechanics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2022, session:'May/June', paper:'Pure Mathematics & Mechanics', code:'H240/03', qp:`${OCR}/676849-question-paper-pure-mathematics-and-mechanics.pdf`, ms:`${OCR}/677007-mark-scheme-pure-mathematics-and-mechanics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2021, session:'Oct/Nov', paper:'Pure Mathematics & Mechanics', code:'H240/03', qp:`${OCR}/667257-question-paper-pure-mathematics-and-mechanics.pdf`, ms:`${OCR}/667261-mark-scheme-pure-mathematics-and-mechanics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2020, session:'Oct/Nov', paper:'Pure Mathematics & Mechanics', code:'H240/03', qp:`${OCR}/643530-question-paper-pure-mathematics-and-mechanics.pdf`, ms:`${OCR}/643534-mark-scheme-pure-mathematics-and-mechanics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2019, session:'May/June', paper:'Pure Mathematics & Mechanics', code:'H240/03', qp:`${OCR}/621201-question-paper-pure-mathematics-and-mechanics.pdf`, ms:`${OCR}/621391-mark-scheme-pure-mathematics-and-mechanics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2018, session:'May/June', paper:'Pure Mathematics & Mechanics', code:'H240/03', qp:`${OCR}/535617-question-paper-pure-mathematics-and-mechanics.pdf`, ms:`${OCR}/535623-mark-scheme-pure-mathematics-and-mechanics.pdf` },
  { board:'OCR A', subject:'Mathematics', year:2017, session:'Sample/Specimen', paper:'Pure Mathematics & Mechanics', code:'H240/03', qp:`${OCR}/308726-unit-h240-03-pure-mathematics-and-mechanics-sample-assessment-material.pdf`, ms:null },

  // ─── OCR B (MEI) A-LEVEL MATHEMATICS (H640) ──────────────────────────────
  { board:'OCR B (MEI)', subject:'Mathematics', year:2024, session:'May/June', paper:'Pure Mathematics & Mechanics', code:'H640/01', qp:`${PMT}/OCR-MEI/Paper-1/QP/June%202024%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-1/MS/June%202024%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2023, session:'May/June', paper:'Pure Mathematics & Mechanics', code:'H640/01', qp:`${PMT}/OCR-MEI/Paper-1/QP/June%202023%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-1/MS/June%202023%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2022, session:'May/June', paper:'Pure Mathematics & Mechanics', code:'H640/01', qp:`${PMT}/OCR-MEI/Paper-1/QP/June%202022%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-1/MS/June%202022%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2021, session:'Oct/Nov', paper:'Pure Mathematics & Mechanics', code:'H640/01', qp:`${PMT}/OCR-MEI/Paper-1/QP/Nov%202021%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-1/MS/Nov%202021%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2020, session:'Oct/Nov', paper:'Pure Mathematics & Mechanics', code:'H640/01', qp:`${PMT}/OCR-MEI/Paper-1/QP/Nov%202020%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-1/MS/Nov%202020%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2019, session:'May/June', paper:'Pure Mathematics & Mechanics', code:'H640/01', qp:`${PMT}/OCR-MEI/Paper-1/QP/June%202019%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-1/MS/June%202019%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2018, session:'May/June', paper:'Pure Mathematics & Mechanics', code:'H640/01', qp:`${PMT}/OCR-MEI/Paper-1/QP/June%202018%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-1/MS/June%202018%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2017, session:'Sample/Specimen', paper:'Pure Mathematics & Mechanics', code:'H640/01', qp:`${PMT}/OCR-MEI/Paper-1/QP/Sample%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-1/MS/Sample%20MS.pdf` },

  { board:'OCR B (MEI)', subject:'Mathematics', year:2024, session:'May/June', paper:'Pure Mathematics & Statistics', code:'H640/02', qp:`${PMT}/OCR-MEI/Paper-2/QP/June%202024%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-2/MS/June%202024%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2023, session:'May/June', paper:'Pure Mathematics & Statistics', code:'H640/02', qp:`${PMT}/OCR-MEI/Paper-2/QP/June%202023%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-2/MS/June%202023%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2022, session:'May/June', paper:'Pure Mathematics & Statistics', code:'H640/02', qp:`${PMT}/OCR-MEI/Paper-2/QP/June%202022%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-2/MS/June%202022%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2021, session:'Oct/Nov', paper:'Pure Mathematics & Statistics', code:'H640/02', qp:`${PMT}/OCR-MEI/Paper-2/QP/Nov%202021%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-2/MS/Nov%202021%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2020, session:'Oct/Nov', paper:'Pure Mathematics & Statistics', code:'H640/02', qp:`${PMT}/OCR-MEI/Paper-2/QP/Nov%202020%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-2/MS/Nov%202020%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2019, session:'May/June', paper:'Pure Mathematics & Statistics', code:'H640/02', qp:`${PMT}/OCR-MEI/Paper-2/QP/June%202019%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-2/MS/June%202019%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2018, session:'May/June', paper:'Pure Mathematics & Statistics', code:'H640/02', qp:`${PMT}/OCR-MEI/Paper-2/QP/June%202018%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-2/MS/June%202018%20MS.pdf` },

  { board:'OCR B (MEI)', subject:'Mathematics', year:2024, session:'May/June', paper:'Pure Mathematics & Comprehension', code:'H640/03', qp:`${PMT}/OCR-MEI/Paper-3/QP/June%202024%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-3/MS/June%202024%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2023, session:'May/June', paper:'Pure Mathematics & Comprehension', code:'H640/03', qp:`${PMT}/OCR-MEI/Paper-3/QP/June%202023%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-3/MS/June%202023%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2022, session:'May/June', paper:'Pure Mathematics & Comprehension', code:'H640/03', qp:`${PMT}/OCR-MEI/Paper-3/QP/June%202022%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-3/MS/June%202022%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2021, session:'Oct/Nov', paper:'Pure Mathematics & Comprehension', code:'H640/03', qp:`${PMT}/OCR-MEI/Paper-3/QP/Nov%202021%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-3/MS/Nov%202021%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2020, session:'Oct/Nov', paper:'Pure Mathematics & Comprehension', code:'H640/03', qp:`${PMT}/OCR-MEI/Paper-3/QP/Nov%202020%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-3/MS/Nov%202020%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2019, session:'May/June', paper:'Pure Mathematics & Comprehension', code:'H640/03', qp:`${PMT}/OCR-MEI/Paper-3/QP/June%202019%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-3/MS/June%202019%20MS.pdf` },
  { board:'OCR B (MEI)', subject:'Mathematics', year:2018, session:'May/June', paper:'Pure Mathematics & Comprehension', code:'H640/03', qp:`${PMT}/OCR-MEI/Paper-3/QP/June%202018%20QP.pdf`, ms:`${PMT}/OCR-MEI/Paper-3/MS/June%202018%20MS.pdf` },

  // ─── CAMBRIDGE (CIE) A-LEVEL MATHEMATICS (9709) ──────────────────────────
  // NOTE: Direct CDN PDFs not available for CIE on PMT. Links go to PMT's CIE paper listing pages.
  { board:'Cambridge (CIE)', subject:'Mathematics', year:2023, session:'May/June', paper:'Pure Mathematics 1 (P1)', code:'9709/12', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-1/' },
  { board:'Cambridge (CIE)', subject:'Mathematics', year:2023, session:'May/June', paper:'Pure Mathematics 3 (P3)', code:'9709/32', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-3/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-3/' },
  { board:'Cambridge (CIE)', subject:'Mathematics', year:2023, session:'May/June', paper:'Probability & Statistics 1 (S1)', code:'9709/52', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-statistics-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-statistics-1/' },
  { board:'Cambridge (CIE)', subject:'Mathematics', year:2023, session:'May/June', paper:'Mechanics (M1)', code:'9709/42', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-mechanics-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-mechanics-1/' },
  { board:'Cambridge (CIE)', subject:'Mathematics', year:2022, session:'May/June', paper:'Pure Mathematics 1 (P1)', code:'9709/12', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-1/' },
  { board:'Cambridge (CIE)', subject:'Mathematics', year:2022, session:'May/June', paper:'Pure Mathematics 3 (P3)', code:'9709/32', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-3/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-3/' },
  { board:'Cambridge (CIE)', subject:'Mathematics', year:2021, session:'May/June', paper:'Pure Mathematics 1 (P1)', code:'9709/12', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-1/' },
  { board:'Cambridge (CIE)', subject:'Mathematics', year:2021, session:'May/June', paper:'Pure Mathematics 3 (P3)', code:'9709/32', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-3/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-3/' },
  { board:'Cambridge (CIE)', subject:'Mathematics', year:2020, session:'Oct/Nov', paper:'Pure Mathematics 1 (P1)', code:'9709/11', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-1/' },
  { board:'Cambridge (CIE)', subject:'Mathematics', year:2019, session:'May/June', paper:'Pure Mathematics 1 (P1)', code:'9709/12', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-1/' },
  { board:'Cambridge (CIE)', subject:'Mathematics', year:2019, session:'May/June', paper:'Pure Mathematics 3 (P3)', code:'9709/32', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-3/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-paper-3/' },

  // ─── CAMBRIDGE (CIE) FURTHER MATHEMATICS (9231) ───────────────────────────
  { board:'Cambridge (CIE)', subject:'Further Mathematics', year:2023, session:'May/June', paper:'Further Pure Mathematics 1', code:'9231/01', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-further-pure-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-further-pure-1/' },
  { board:'Cambridge (CIE)', subject:'Further Mathematics', year:2022, session:'May/June', paper:'Further Pure Mathematics 1', code:'9231/01', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-further-pure-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-further-pure-1/' },
  { board:'Cambridge (CIE)', subject:'Further Mathematics', year:2021, session:'May/June', paper:'Further Pure Mathematics 1', code:'9231/01', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-further-pure-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-further-pure-1/' },
  { board:'Cambridge (CIE)', subject:'Further Mathematics', year:2020, session:'Oct/Nov', paper:'Further Pure Mathematics 1', code:'9231/01', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-further-pure-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-further-pure-1/' },
  { board:'Cambridge (CIE)', subject:'Further Mathematics', year:2019, session:'May/June', paper:'Further Pure Mathematics 1', code:'9231/01', qp:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-further-pure-1/', ms:'https://www.physicsandmathstutor.com/a-level-maths-papers/cie-further-pure-1/' },
];

papers.forEach((p, i) => { p.id = i; });

export function filterPapers({ board, subject, year, session } = {}) {
  return papers.filter(p =>
    (!board || p.board === board) &&
    (!subject || p.subject === subject) &&
    (!year || p.year === Number(year)) &&
    (!session || p.session === session)
  );
}

export const years = [...new Set(papers.map(p => p.year))].sort((a, b) => b - a);
