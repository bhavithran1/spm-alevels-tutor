// Paper database for A-Level Maths & Further Maths
// Sources: AQA filestore, Pearson, OCR, Cambridge, PMT
// qp = Question Paper PDF, ms = Mark Scheme PDF

const PMT = 'https://pmt.physicsandmathstutor.com/download/Maths/A-level/Past-Papers';
const AQA_FS = 'https://filestore.aqa.org.uk/resources/mathematics';

export const BOARDS = ['Edexcel', 'AQA', 'OCR A', 'OCR B (MEI)', 'Cambridge (CIE)'];
export const SUBJECTS = ['Mathematics', 'Further Mathematics'];
export const SESSIONS = ['May/June', 'Oct/Nov', 'Jan', 'Sample'];

export const papers = [
  // ─── EDEXCEL A-LEVEL MATHEMATICS (9MA0) ─────────────────────────────────
  // 2023 May/June
  { board: 'Edexcel', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Pure Mathematics 1', code: '9MA0/01', qp: `${PMT}/Edexcel/9MA0-01-QP-Jun2023.pdf`, ms: `${PMT}/Edexcel/9MA0-01-MS-Jun2023.pdf` },
  { board: 'Edexcel', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Pure Mathematics 2', code: '9MA0/02', qp: `${PMT}/Edexcel/9MA0-02-QP-Jun2023.pdf`, ms: `${PMT}/Edexcel/9MA0-02-MS-Jun2023.pdf` },
  { board: 'Edexcel', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Statistics & Mechanics', code: '9MA0/03', qp: `${PMT}/Edexcel/9MA0-03-QP-Jun2023.pdf`, ms: `${PMT}/Edexcel/9MA0-03-MS-Jun2023.pdf` },
  // 2022 May/June
  { board: 'Edexcel', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Pure Mathematics 1', code: '9MA0/01', qp: `${PMT}/Edexcel/9MA0-01-QP-Jun2022.pdf`, ms: `${PMT}/Edexcel/9MA0-01-MS-Jun2022.pdf` },
  { board: 'Edexcel', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Pure Mathematics 2', code: '9MA0/02', qp: `${PMT}/Edexcel/9MA0-02-QP-Jun2022.pdf`, ms: `${PMT}/Edexcel/9MA0-02-MS-Jun2022.pdf` },
  { board: 'Edexcel', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Statistics & Mechanics', code: '9MA0/03', qp: `${PMT}/Edexcel/9MA0-03-QP-Jun2022.pdf`, ms: `${PMT}/Edexcel/9MA0-03-MS-Jun2022.pdf` },
  // 2019 May/June
  { board: 'Edexcel', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Pure Mathematics 1', code: '9MA0/01', qp: `${PMT}/Edexcel/9MA0-01-QP-Jun2019.pdf`, ms: `${PMT}/Edexcel/9MA0-01-MS-Jun2019.pdf` },
  { board: 'Edexcel', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Pure Mathematics 2', code: '9MA0/02', qp: `${PMT}/Edexcel/9MA0-02-QP-Jun2019.pdf`, ms: `${PMT}/Edexcel/9MA0-02-MS-Jun2019.pdf` },
  { board: 'Edexcel', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Statistics & Mechanics', code: '9MA0/03', qp: `${PMT}/Edexcel/9MA0-03-QP-Jun2019.pdf`, ms: `${PMT}/Edexcel/9MA0-03-MS-Jun2019.pdf` },
  // 2018 May/June
  { board: 'Edexcel', subject: 'Mathematics', year: 2018, session: 'May/June', paper: 'Pure Mathematics 1', code: '9MA0/01', qp: `${PMT}/Edexcel/9MA0-01-QP-Jun2018.pdf`, ms: `${PMT}/Edexcel/9MA0-01-MS-Jun2018.pdf` },
  { board: 'Edexcel', subject: 'Mathematics', year: 2018, session: 'May/June', paper: 'Pure Mathematics 2', code: '9MA0/02', qp: `${PMT}/Edexcel/9MA0-02-QP-Jun2018.pdf`, ms: `${PMT}/Edexcel/9MA0-02-MS-Jun2018.pdf` },
  { board: 'Edexcel', subject: 'Mathematics', year: 2018, session: 'May/June', paper: 'Statistics & Mechanics', code: '9MA0/03', qp: `${PMT}/Edexcel/9MA0-03-QP-Jun2018.pdf`, ms: `${PMT}/Edexcel/9MA0-03-MS-Jun2018.pdf` },
  // Sample Assessment Materials
  { board: 'Edexcel', subject: 'Mathematics', year: 2017, session: 'Sample', paper: 'Pure Mathematics 1', code: '9MA0/01', qp: `${PMT}/Edexcel/9MA0-01-QP-SAM.pdf`, ms: `${PMT}/Edexcel/9MA0-01-MS-SAM.pdf` },
  { board: 'Edexcel', subject: 'Mathematics', year: 2017, session: 'Sample', paper: 'Pure Mathematics 2', code: '9MA0/02', qp: `${PMT}/Edexcel/9MA0-02-QP-SAM.pdf`, ms: `${PMT}/Edexcel/9MA0-02-MS-SAM.pdf` },
  { board: 'Edexcel', subject: 'Mathematics', year: 2017, session: 'Sample', paper: 'Statistics & Mechanics', code: '9MA0/03', qp: `${PMT}/Edexcel/9MA0-03-QP-SAM.pdf`, ms: `${PMT}/Edexcel/9MA0-03-MS-SAM.pdf` },

  // ─── EDEXCEL A-LEVEL FURTHER MATHEMATICS (9FM0) ──────────────────────────
  { board: 'Edexcel', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Core Pure Mathematics 1', code: '9FM0/01', qp: `${PMT}/Edexcel/9FM0-01-QP-Jun2023.pdf`, ms: `${PMT}/Edexcel/9FM0-01-MS-Jun2023.pdf` },
  { board: 'Edexcel', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Core Pure Mathematics 2', code: '9FM0/02', qp: `${PMT}/Edexcel/9FM0-02-QP-Jun2023.pdf`, ms: `${PMT}/Edexcel/9FM0-02-MS-Jun2023.pdf` },
  { board: 'Edexcel', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Further Pure Mathematics 1', code: '9FM0/3A', qp: `${PMT}/Edexcel/9FM0-3A-QP-Jun2023.pdf`, ms: `${PMT}/Edexcel/9FM0-3A-MS-Jun2023.pdf` },
  { board: 'Edexcel', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Further Statistics 1', code: '9FM0/3D', qp: `${PMT}/Edexcel/9FM0-3D-QP-Jun2023.pdf`, ms: `${PMT}/Edexcel/9FM0-3D-MS-Jun2023.pdf` },
  { board: 'Edexcel', subject: 'Further Mathematics', year: 2022, session: 'May/June', paper: 'Core Pure Mathematics 1', code: '9FM0/01', qp: `${PMT}/Edexcel/9FM0-01-QP-Jun2022.pdf`, ms: `${PMT}/Edexcel/9FM0-01-MS-Jun2022.pdf` },
  { board: 'Edexcel', subject: 'Further Mathematics', year: 2022, session: 'May/June', paper: 'Core Pure Mathematics 2', code: '9FM0/02', qp: `${PMT}/Edexcel/9FM0-02-QP-Jun2022.pdf`, ms: `${PMT}/Edexcel/9FM0-02-MS-Jun2022.pdf` },
  { board: 'Edexcel', subject: 'Further Mathematics', year: 2022, session: 'May/June', paper: 'Further Pure Mathematics 1', code: '9FM0/3A', qp: `${PMT}/Edexcel/9FM0-3A-QP-Jun2022.pdf`, ms: `${PMT}/Edexcel/9FM0-3A-MS-Jun2022.pdf` },
  { board: 'Edexcel', subject: 'Further Mathematics', year: 2019, session: 'May/June', paper: 'Core Pure Mathematics 1', code: '9FM0/01', qp: `${PMT}/Edexcel/9FM0-01-QP-Jun2019.pdf`, ms: `${PMT}/Edexcel/9FM0-01-MS-Jun2019.pdf` },
  { board: 'Edexcel', subject: 'Further Mathematics', year: 2019, session: 'May/June', paper: 'Core Pure Mathematics 2', code: '9FM0/02', qp: `${PMT}/Edexcel/9FM0-02-QP-Jun2019.pdf`, ms: `${PMT}/Edexcel/9FM0-02-MS-Jun2019.pdf` },
  { board: 'Edexcel', subject: 'Further Mathematics', year: 2018, session: 'May/June', paper: 'Core Pure Mathematics 1', code: '9FM0/01', qp: `${PMT}/Edexcel/9FM0-01-QP-Jun2018.pdf`, ms: `${PMT}/Edexcel/9FM0-01-MS-Jun2018.pdf` },
  { board: 'Edexcel', subject: 'Further Mathematics', year: 2018, session: 'May/June', paper: 'Core Pure Mathematics 2', code: '9FM0/02', qp: `${PMT}/Edexcel/9FM0-02-QP-Jun2018.pdf`, ms: `${PMT}/Edexcel/9FM0-02-MS-Jun2018.pdf` },

  // ─── AQA A-LEVEL MATHEMATICS (7357) ──────────────────────────────────────
  { board: 'AQA', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Paper 1 (Pure)', code: '7357/1', qp: `${AQA_FS}/AQA-73571-QP-JUN23.PDF`, ms: `${AQA_FS}/AQA-73571-W-MS-JUN23.PDF` },
  { board: 'AQA', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Paper 2 (Pure & Stats)', code: '7357/2', qp: `${AQA_FS}/AQA-73572-QP-JUN23.PDF`, ms: `${AQA_FS}/AQA-73572-W-MS-JUN23.PDF` },
  { board: 'AQA', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Paper 3 (Pure & Mechanics)', code: '7357/3', qp: `${AQA_FS}/AQA-73573-QP-JUN23.PDF`, ms: `${AQA_FS}/AQA-73573-W-MS-JUN23.PDF` },
  { board: 'AQA', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Paper 1 (Pure)', code: '7357/1', qp: `${AQA_FS}/AQA-73571-QP-JUN22.PDF`, ms: `${AQA_FS}/AQA-73571-W-MS-JUN22.PDF` },
  { board: 'AQA', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Paper 2 (Pure & Stats)', code: '7357/2', qp: `${AQA_FS}/AQA-73572-QP-JUN22.PDF`, ms: `${AQA_FS}/AQA-73572-W-MS-JUN22.PDF` },
  { board: 'AQA', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Paper 3 (Pure & Mechanics)', code: '7357/3', qp: `${AQA_FS}/AQA-73573-QP-JUN22.PDF`, ms: `${AQA_FS}/AQA-73573-W-MS-JUN22.PDF` },
  { board: 'AQA', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Paper 1 (Pure)', code: '7357/1', qp: `${AQA_FS}/AQA-73571-QP-JUN19.PDF`, ms: `${AQA_FS}/AQA-73571-W-MS-JUN19.PDF` },
  { board: 'AQA', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Paper 2 (Pure & Stats)', code: '7357/2', qp: `${AQA_FS}/AQA-73572-QP-JUN19.PDF`, ms: `${AQA_FS}/AQA-73572-W-MS-JUN19.PDF` },
  { board: 'AQA', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Paper 3 (Pure & Mechanics)', code: '7357/3', qp: `${AQA_FS}/AQA-73573-QP-JUN19.PDF`, ms: `${AQA_FS}/AQA-73573-W-MS-JUN19.PDF` },
  { board: 'AQA', subject: 'Mathematics', year: 2018, session: 'May/June', paper: 'Paper 1 (Pure)', code: '7357/1', qp: `${AQA_FS}/AQA-73571-QP-JUN18.PDF`, ms: `${AQA_FS}/AQA-73571-W-MS-JUN18.PDF` },
  { board: 'AQA', subject: 'Mathematics', year: 2018, session: 'May/June', paper: 'Paper 2 (Pure & Stats)', code: '7357/2', qp: `${AQA_FS}/AQA-73572-QP-JUN18.PDF`, ms: `${AQA_FS}/AQA-73572-W-MS-JUN18.PDF` },
  { board: 'AQA', subject: 'Mathematics', year: 2018, session: 'May/June', paper: 'Paper 3 (Pure & Mechanics)', code: '7357/3', qp: `${AQA_FS}/AQA-73573-QP-JUN18.PDF`, ms: `${AQA_FS}/AQA-73573-W-MS-JUN18.PDF` },

  // ─── AQA A-LEVEL FURTHER MATHEMATICS (7367) ───────────────────────────────
  { board: 'AQA', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Paper 1', code: '7367/1', qp: `${AQA_FS}/AQA-73671-QP-JUN23.PDF`, ms: `${AQA_FS}/AQA-73671-W-MS-JUN23.PDF` },
  { board: 'AQA', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Paper 2', code: '7367/2', qp: `${AQA_FS}/AQA-73672-QP-JUN23.PDF`, ms: `${AQA_FS}/AQA-73672-W-MS-JUN23.PDF` },
  { board: 'AQA', subject: 'Further Mathematics', year: 2022, session: 'May/June', paper: 'Paper 1', code: '7367/1', qp: `${AQA_FS}/AQA-73671-QP-JUN22.PDF`, ms: `${AQA_FS}/AQA-73671-W-MS-JUN22.PDF` },
  { board: 'AQA', subject: 'Further Mathematics', year: 2022, session: 'May/June', paper: 'Paper 2', code: '7367/2', qp: `${AQA_FS}/AQA-73672-QP-JUN22.PDF`, ms: `${AQA_FS}/AQA-73672-W-MS-JUN22.PDF` },
  { board: 'AQA', subject: 'Further Mathematics', year: 2019, session: 'May/June', paper: 'Paper 1', code: '7367/1', qp: `${AQA_FS}/AQA-73671-QP-JUN19.PDF`, ms: `${AQA_FS}/AQA-73671-W-MS-JUN19.PDF` },
  { board: 'AQA', subject: 'Further Mathematics', year: 2019, session: 'May/June', paper: 'Paper 2', code: '7367/2', qp: `${AQA_FS}/AQA-73672-QP-JUN19.PDF`, ms: `${AQA_FS}/AQA-73672-W-MS-JUN19.PDF` },
  { board: 'AQA', subject: 'Further Mathematics', year: 2018, session: 'May/June', paper: 'Paper 1', code: '7367/1', qp: `${AQA_FS}/AQA-73671-QP-JUN18.PDF`, ms: `${AQA_FS}/AQA-73671-W-MS-JUN18.PDF` },
  { board: 'AQA', subject: 'Further Mathematics', year: 2018, session: 'May/June', paper: 'Paper 2', code: '7367/2', qp: `${AQA_FS}/AQA-73672-QP-JUN18.PDF`, ms: `${AQA_FS}/AQA-73672-W-MS-JUN18.PDF` },

  // ─── OCR A A-LEVEL MATHEMATICS (H240) ────────────────────────────────────
  { board: 'OCR A', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Pure Mathematics', code: 'H240/01', qp: 'https://www.ocr.org.uk/Images/660699-question-paper-pure-mathematics.pdf', ms: 'https://www.ocr.org.uk/Images/660700-mark-scheme-pure-mathematics.pdf' },
  { board: 'OCR A', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Pure Mathematics & Statistics', code: 'H240/02', qp: 'https://www.ocr.org.uk/Images/660701-question-paper-pure-mathematics-and-statistics.pdf', ms: 'https://www.ocr.org.uk/Images/660702-mark-scheme-pure-mathematics-and-statistics.pdf' },
  { board: 'OCR A', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Pure Mathematics & Mechanics', code: 'H240/03', qp: 'https://www.ocr.org.uk/Images/660703-question-paper-pure-mathematics-and-mechanics.pdf', ms: 'https://www.ocr.org.uk/Images/660704-mark-scheme-pure-mathematics-and-mechanics.pdf' },
  { board: 'OCR A', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Pure Mathematics', code: 'H240/01', qp: `${PMT}/OCR-A/H240-01-QP-Jun2022.pdf`, ms: `${PMT}/OCR-A/H240-01-MS-Jun2022.pdf` },
  { board: 'OCR A', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Pure Mathematics & Statistics', code: 'H240/02', qp: `${PMT}/OCR-A/H240-02-QP-Jun2022.pdf`, ms: `${PMT}/OCR-A/H240-02-MS-Jun2022.pdf` },
  { board: 'OCR A', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Pure Mathematics & Mechanics', code: 'H240/03', qp: `${PMT}/OCR-A/H240-03-QP-Jun2022.pdf`, ms: `${PMT}/OCR-A/H240-03-MS-Jun2022.pdf` },
  { board: 'OCR A', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Pure Mathematics', code: 'H240/01', qp: `${PMT}/OCR-A/H240-01-QP-Jun2019.pdf`, ms: `${PMT}/OCR-A/H240-01-MS-Jun2019.pdf` },
  { board: 'OCR A', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Pure Mathematics & Statistics', code: 'H240/02', qp: `${PMT}/OCR-A/H240-02-QP-Jun2019.pdf`, ms: `${PMT}/OCR-A/H240-02-MS-Jun2019.pdf` },
  { board: 'OCR A', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Pure Mathematics & Mechanics', code: 'H240/03', qp: `${PMT}/OCR-A/H240-03-QP-Jun2019.pdf`, ms: `${PMT}/OCR-A/H240-03-MS-Jun2019.pdf` },
  { board: 'OCR A', subject: 'Mathematics', year: 2018, session: 'May/June', paper: 'Pure Mathematics', code: 'H240/01', qp: `${PMT}/OCR-A/H240-01-QP-Jun2018.pdf`, ms: `${PMT}/OCR-A/H240-01-MS-Jun2018.pdf` },
  { board: 'OCR A', subject: 'Mathematics', year: 2018, session: 'May/June', paper: 'Pure Mathematics & Statistics', code: 'H240/02', qp: `${PMT}/OCR-A/H240-02-QP-Jun2018.pdf`, ms: `${PMT}/OCR-A/H240-02-MS-Jun2018.pdf` },
  { board: 'OCR A', subject: 'Mathematics', year: 2018, session: 'May/June', paper: 'Pure Mathematics & Mechanics', code: 'H240/03', qp: `${PMT}/OCR-A/H240-03-QP-Jun2018.pdf`, ms: `${PMT}/OCR-A/H240-03-MS-Jun2018.pdf` },

  // ─── OCR A FURTHER MATHEMATICS (H245) ────────────────────────────────────
  { board: 'OCR A', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Core Pure', code: 'H245/01', qp: `${PMT}/OCR-A/H245-01-QP-Jun2023.pdf`, ms: `${PMT}/OCR-A/H245-01-MS-Jun2023.pdf` },
  { board: 'OCR A', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Pure & Stats', code: 'H245/02', qp: `${PMT}/OCR-A/H245-02-QP-Jun2023.pdf`, ms: `${PMT}/OCR-A/H245-02-MS-Jun2023.pdf` },
  { board: 'OCR A', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Pure & Mechanics', code: 'H245/03', qp: `${PMT}/OCR-A/H245-03-QP-Jun2023.pdf`, ms: `${PMT}/OCR-A/H245-03-MS-Jun2023.pdf` },
  { board: 'OCR A', subject: 'Further Mathematics', year: 2022, session: 'May/June', paper: 'Core Pure', code: 'H245/01', qp: `${PMT}/OCR-A/H245-01-QP-Jun2022.pdf`, ms: `${PMT}/OCR-A/H245-01-MS-Jun2022.pdf` },
  { board: 'OCR A', subject: 'Further Mathematics', year: 2022, session: 'May/June', paper: 'Pure & Stats', code: 'H245/02', qp: `${PMT}/OCR-A/H245-02-QP-Jun2022.pdf`, ms: `${PMT}/OCR-A/H245-02-MS-Jun2022.pdf` },
  { board: 'OCR A', subject: 'Further Mathematics', year: 2019, session: 'May/June', paper: 'Core Pure', code: 'H245/01', qp: `${PMT}/OCR-A/H245-01-QP-Jun2019.pdf`, ms: `${PMT}/OCR-A/H245-01-MS-Jun2019.pdf` },
  { board: 'OCR A', subject: 'Further Mathematics', year: 2019, session: 'May/June', paper: 'Pure & Stats', code: 'H245/02', qp: `${PMT}/OCR-A/H245-02-QP-Jun2019.pdf`, ms: `${PMT}/OCR-A/H245-02-MS-Jun2019.pdf` },

  // ─── OCR B (MEI) A-LEVEL MATHEMATICS (H640) ──────────────────────────────
  { board: 'OCR B (MEI)', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Pure Mathematics & Mechanics', code: 'H640/01', qp: `${PMT}/OCR-B-MEI/H640-01-QP-Jun2023.pdf`, ms: `${PMT}/OCR-B-MEI/H640-01-MS-Jun2023.pdf` },
  { board: 'OCR B (MEI)', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Pure Mathematics & Statistics', code: 'H640/02', qp: `${PMT}/OCR-B-MEI/H640-02-QP-Jun2023.pdf`, ms: `${PMT}/OCR-B-MEI/H640-02-MS-Jun2023.pdf` },
  { board: 'OCR B (MEI)', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Pure Mathematics & Comprehension', code: 'H640/03', qp: `${PMT}/OCR-B-MEI/H640-03-QP-Jun2023.pdf`, ms: `${PMT}/OCR-B-MEI/H640-03-MS-Jun2023.pdf` },
  { board: 'OCR B (MEI)', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Pure Mathematics & Mechanics', code: 'H640/01', qp: `${PMT}/OCR-B-MEI/H640-01-QP-Jun2022.pdf`, ms: `${PMT}/OCR-B-MEI/H640-01-MS-Jun2022.pdf` },
  { board: 'OCR B (MEI)', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Pure Mathematics & Statistics', code: 'H640/02', qp: `${PMT}/OCR-B-MEI/H640-02-QP-Jun2022.pdf`, ms: `${PMT}/OCR-B-MEI/H640-02-MS-Jun2022.pdf` },
  { board: 'OCR B (MEI)', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Pure Mathematics & Mechanics', code: 'H640/01', qp: `${PMT}/OCR-B-MEI/H640-01-QP-Jun2019.pdf`, ms: `${PMT}/OCR-B-MEI/H640-01-MS-Jun2019.pdf` },
  { board: 'OCR B (MEI)', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Pure Mathematics & Statistics', code: 'H640/02', qp: `${PMT}/OCR-B-MEI/H640-02-QP-Jun2019.pdf`, ms: `${PMT}/OCR-B-MEI/H640-02-MS-Jun2019.pdf` },
  { board: 'OCR B (MEI)', subject: 'Mathematics', year: 2018, session: 'May/June', paper: 'Pure Mathematics & Mechanics', code: 'H640/01', qp: `${PMT}/OCR-B-MEI/H640-01-QP-Jun2018.pdf`, ms: `${PMT}/OCR-B-MEI/H640-01-MS-Jun2018.pdf` },
  { board: 'OCR B (MEI)', subject: 'Mathematics', year: 2018, session: 'May/June', paper: 'Pure Mathematics & Statistics', code: 'H640/02', qp: `${PMT}/OCR-B-MEI/H640-02-QP-Jun2018.pdf`, ms: `${PMT}/OCR-B-MEI/H640-02-MS-Jun2018.pdf` },

  // ─── OCR B (MEI) FURTHER MATHEMATICS (H645) ──────────────────────────────
  { board: 'OCR B (MEI)', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Core Pure A', code: 'H645/01', qp: `${PMT}/OCR-B-MEI/H645-01-QP-Jun2023.pdf`, ms: `${PMT}/OCR-B-MEI/H645-01-MS-Jun2023.pdf` },
  { board: 'OCR B (MEI)', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Core Pure B', code: 'H645/02', qp: `${PMT}/OCR-B-MEI/H645-02-QP-Jun2023.pdf`, ms: `${PMT}/OCR-B-MEI/H645-02-MS-Jun2023.pdf` },
  { board: 'OCR B (MEI)', subject: 'Further Mathematics', year: 2022, session: 'May/June', paper: 'Core Pure A', code: 'H645/01', qp: `${PMT}/OCR-B-MEI/H645-01-QP-Jun2022.pdf`, ms: `${PMT}/OCR-B-MEI/H645-01-MS-Jun2022.pdf` },
  { board: 'OCR B (MEI)', subject: 'Further Mathematics', year: 2019, session: 'May/June', paper: 'Core Pure A', code: 'H645/01', qp: `${PMT}/OCR-B-MEI/H645-01-QP-Jun2019.pdf`, ms: `${PMT}/OCR-B-MEI/H645-01-MS-Jun2019.pdf` },

  // ─── CAMBRIDGE (CIE) A-LEVEL MATHEMATICS (9709) ──────────────────────────
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Pure Mathematics 1 (P1)', code: '9709/12', qp: `${PMT}/CIE/9709-12-QP-Jun2023.pdf`, ms: `${PMT}/CIE/9709-12-MS-Jun2023.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Pure Mathematics 3 (P3)', code: '9709/32', qp: `${PMT}/CIE/9709-32-QP-Jun2023.pdf`, ms: `${PMT}/CIE/9709-32-MS-Jun2023.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Mechanics (M1)', code: '9709/42', qp: `${PMT}/CIE/9709-42-QP-Jun2023.pdf`, ms: `${PMT}/CIE/9709-42-MS-Jun2023.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2023, session: 'May/June', paper: 'Probability & Statistics 1 (S1)', code: '9709/52', qp: `${PMT}/CIE/9709-52-QP-Jun2023.pdf`, ms: `${PMT}/CIE/9709-52-MS-Jun2023.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2023, session: 'Oct/Nov', paper: 'Pure Mathematics 1 (P1)', code: '9709/11', qp: `${PMT}/CIE/9709-11-QP-Nov2023.pdf`, ms: `${PMT}/CIE/9709-11-MS-Nov2023.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2023, session: 'Oct/Nov', paper: 'Pure Mathematics 3 (P3)', code: '9709/31', qp: `${PMT}/CIE/9709-31-QP-Nov2023.pdf`, ms: `${PMT}/CIE/9709-31-MS-Nov2023.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Pure Mathematics 1 (P1)', code: '9709/12', qp: `${PMT}/CIE/9709-12-QP-Jun2022.pdf`, ms: `${PMT}/CIE/9709-12-MS-Jun2022.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Pure Mathematics 3 (P3)', code: '9709/32', qp: `${PMT}/CIE/9709-32-QP-Jun2022.pdf`, ms: `${PMT}/CIE/9709-32-MS-Jun2022.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Mechanics (M1)', code: '9709/42', qp: `${PMT}/CIE/9709-42-QP-Jun2022.pdf`, ms: `${PMT}/CIE/9709-42-MS-Jun2022.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2022, session: 'May/June', paper: 'Probability & Statistics 1 (S1)', code: '9709/52', qp: `${PMT}/CIE/9709-52-QP-Jun2022.pdf`, ms: `${PMT}/CIE/9709-52-MS-Jun2022.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2021, session: 'May/June', paper: 'Pure Mathematics 1 (P1)', code: '9709/12', qp: `${PMT}/CIE/9709-12-QP-Jun2021.pdf`, ms: `${PMT}/CIE/9709-12-MS-Jun2021.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2021, session: 'May/June', paper: 'Pure Mathematics 3 (P3)', code: '9709/32', qp: `${PMT}/CIE/9709-32-QP-Jun2021.pdf`, ms: `${PMT}/CIE/9709-32-MS-Jun2021.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2020, session: 'Oct/Nov', paper: 'Pure Mathematics 1 (P1)', code: '9709/11', qp: `${PMT}/CIE/9709-11-QP-Nov2020.pdf`, ms: `${PMT}/CIE/9709-11-MS-Nov2020.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2020, session: 'Oct/Nov', paper: 'Pure Mathematics 3 (P3)', code: '9709/31', qp: `${PMT}/CIE/9709-31-QP-Nov2020.pdf`, ms: `${PMT}/CIE/9709-31-MS-Nov2020.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Pure Mathematics 1 (P1)', code: '9709/12', qp: `${PMT}/CIE/9709-12-QP-Jun2019.pdf`, ms: `${PMT}/CIE/9709-12-MS-Jun2019.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2019, session: 'May/June', paper: 'Pure Mathematics 3 (P3)', code: '9709/32', qp: `${PMT}/CIE/9709-32-QP-Jun2019.pdf`, ms: `${PMT}/CIE/9709-32-MS-Jun2019.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2019, session: 'Oct/Nov', paper: 'Pure Mathematics 1 (P1)', code: '9709/11', qp: `${PMT}/CIE/9709-11-QP-Nov2019.pdf`, ms: `${PMT}/CIE/9709-11-MS-Nov2019.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Mathematics', year: 2019, session: 'Oct/Nov', paper: 'Pure Mathematics 3 (P3)', code: '9709/31', qp: `${PMT}/CIE/9709-31-QP-Nov2019.pdf`, ms: `${PMT}/CIE/9709-31-MS-Nov2019.pdf` },

  // ─── CAMBRIDGE (CIE) FURTHER MATHEMATICS (9231) ───────────────────────────
  { board: 'Cambridge (CIE)', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Further Pure Mathematics 1', code: '9231/01', qp: `${PMT}/CIE/9231-01-QP-Jun2023.pdf`, ms: `${PMT}/CIE/9231-01-MS-Jun2023.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Further Mathematics', year: 2023, session: 'May/June', paper: 'Further Pure Mathematics 2', code: '9231/02', qp: `${PMT}/CIE/9231-02-QP-Jun2023.pdf`, ms: `${PMT}/CIE/9231-02-MS-Jun2023.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Further Mathematics', year: 2022, session: 'May/June', paper: 'Further Pure Mathematics 1', code: '9231/01', qp: `${PMT}/CIE/9231-01-QP-Jun2022.pdf`, ms: `${PMT}/CIE/9231-01-MS-Jun2022.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Further Mathematics', year: 2022, session: 'May/June', paper: 'Further Pure Mathematics 2', code: '9231/02', qp: `${PMT}/CIE/9231-02-QP-Jun2022.pdf`, ms: `${PMT}/CIE/9231-02-MS-Jun2022.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Further Mathematics', year: 2019, session: 'May/June', paper: 'Further Pure Mathematics 1', code: '9231/01', qp: `${PMT}/CIE/9231-01-QP-Jun2019.pdf`, ms: `${PMT}/CIE/9231-01-MS-Jun2019.pdf` },
  { board: 'Cambridge (CIE)', subject: 'Further Mathematics', year: 2019, session: 'Oct/Nov', paper: 'Further Pure Mathematics 1', code: '9231/01', qp: `${PMT}/CIE/9231-01-QP-Nov2019.pdf`, ms: `${PMT}/CIE/9231-01-MS-Nov2019.pdf` },
];

// Attach a unique id to each paper
papers.forEach((p, i) => { p.id = i; });

export function filterPapers({ board, subject, year, session }) {
  return papers.filter(p =>
    (!board || p.board === board) &&
    (!subject || p.subject === subject) &&
    (!year || p.year === Number(year)) &&
    (!session || p.session === session)
  );
}

export const years = [...new Set(papers.map(p => p.year))].sort((a, b) => b - a);
