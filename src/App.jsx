import { useState } from 'react';
import Header from './components/Header';
import YearGrid from './components/YearGrid';
import PaperTable from './components/PaperTable';
import BulkDownloadBar from './components/BulkDownloadBar';
import QuickDownload from './components/QuickDownload';
import { papers, filterPapers, BOARDS, SUBJECTS } from './data/papers';

const SUBJECT_CARDS = [
  {
    id: 'Mathematics',
    label: 'Mathematics',
    desc: 'A-Level Maths — Pure, Statistics, Mechanics',
    color: 'bg-blue-600',
  },
  {
    id: 'Further Mathematics',
    label: 'Further Mathematics',
    desc: 'A-Level Further Maths — Core Pure, Further Pure & Options',
    color: 'bg-indigo-700',
  },
];

export default function App() {
  const [subject, setSubject] = useState(null);
  const [board, setBoard] = useState(null);
  const [activeYear, setActiveYear] = useState(null);
  const [selected, setSelected] = useState(new Set());
  const [authTick, setAuthTick] = useState(0);

  function selectSubject(s) {
    setSubject(s);
    setBoard(null);
    setActiveYear(null);
  }

  function selectBoard(b) {
    setBoard(b === board ? null : b);
    setActiveYear(null);
  }

  function selectYear(yr) {
    setActiveYear(yr);
    if (yr) setTimeout(() => document.getElementById('year-papers')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  const yearPapers = activeYear
    ? filterPapers({ board, subject, year: activeYear.year, session: activeYear.session })
    : [];

  const selectedPapers = papers.filter(p => selected.has(p.id));

  function toggle(id) {
    setSelected(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }

  function toggleAll(visible, allSel) {
    setSelected(prev => {
      const n = new Set(prev);
      if (allSel) visible.forEach(p => n.delete(p.id));
      else visible.forEach(p => n.add(p.id));
      return n;
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAuthChange={() => setAuthTick(t => t + 1)} />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-5 pt-14 pb-10">
        <p className="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-3">Free resource</p>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-3">
          A-Level Past Papers
        </h1>
        <p className="text-gray-400 text-base max-w-lg leading-relaxed">
          Past papers and mark schemes for Maths and Further Maths. Pick a subject, choose your board, then browse by year.
        </p>
      </section>

      {/* Step 1 — Subject */}
      <section className="max-w-4xl mx-auto px-5 pb-10">
        <StepLabel n={1} label="Choose a subject" />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
          {SUBJECT_CARDS.map(s => (
            <button
              key={s.id}
              onClick={() => selectSubject(s.id)}
              className={`text-left p-5 rounded-xl border-2 transition-all ${
                subject === s.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-100 hover:border-gray-200 bg-white'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${s.color} mb-3`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 12L8 3L13 12H3Z" fill="white" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900 text-sm">{s.label}</p>
              <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Step 2 — Board (shown after subject chosen) */}
      {subject && (
        <section className="max-w-4xl mx-auto px-5 pb-10">
          <StepLabel n={2} label="Choose an exam board" />
          <div className="mt-4 flex flex-wrap gap-2">
            {BOARDS.map(b => (
              <button
                key={b}
                onClick={() => selectBoard(b)}
                className={`text-sm px-4 py-2 rounded-full border transition-all font-medium ${
                  board === b
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'border-gray-200 text-gray-600 hover:border-gray-400 bg-white'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Step 3 — Year covers (shown after board chosen) */}
      {subject && board && (
        <section className="max-w-4xl mx-auto px-5 pb-12">
          <StepLabel n={3} label="Select a year" />
          <p className="text-xs text-gray-400 mt-1 mb-6">Click a paper to see its question paper and mark scheme.</p>
          <YearGrid
            board={board}
            subject={subject}
            activeYear={activeYear}
            onSelectYear={selectYear}
          />
        </section>
      )}

      {/* Expanded year papers */}
      {activeYear && yearPapers.length > 0 && (
        <section id="year-papers" className="border-t border-gray-100 py-8">
          <div className="max-w-4xl mx-auto px-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="font-semibold text-gray-900">
                  {board} · {subject} · {activeYear.year}
                  {activeYear.session !== 'May/June' && ` · ${activeYear.session}`}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">{yearPapers.length} papers</p>
              </div>
              <button
                onClick={() => setActiveYear(null)}
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                Close ×
              </button>
            </div>
            <PaperTable
              papers={yearPapers}
              selected={selected}
              onToggle={toggle}
              onToggleAll={toggleAll}
            />
          </div>
        </section>
      )}

      {/* Divider before bulk download */}
      <div className="border-t border-gray-100" />

      {/* Bulk download */}
      <QuickDownload onAuthChange={() => setAuthTick(t => t + 1)} />

      {/* About */}
      <section id="about" className="border-t border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-5 max-w-xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">About</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            A-Level Papers is a free resource for students sitting A-Level Mathematics and Further
            Mathematics. Papers are sourced from official exam board websites and trusted repositories.
          </p>
          <p className="text-sm text-gray-400 mt-3">
            Found a broken link?{' '}
            <a href="mailto:gaminggamermincraft@gmail.com" className="text-blue-600 hover:underline">
              Let us know.
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-5 flex items-center justify-between text-xs text-gray-300">
          <span>A-Level Papers — free educational resource</span>
          <span>Not affiliated with any exam board</span>
        </div>
      </footer>

      <BulkDownloadBar
        selectedPapers={selectedPapers}
        allPapers={papers}
        onClear={() => setSelected(new Set())}
        onAuthChange={() => setAuthTick(t => t + 1)}
      />
    </div>
  );
}

function StepLabel({ n, label }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-5 h-5 rounded-full bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
        {n}
      </span>
      <span className="text-sm font-semibold text-gray-900">{label}</span>
    </div>
  );
}
