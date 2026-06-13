import { useState } from 'react';
import { BOARDS, SUBJECTS, years, filterPapers } from '../data/papers';
import { getUser } from '../utils/auth';
import { downloadPapersAsZip } from '../utils/download';
import AuthModal from './AuthModal';

const PRESETS = [
  { label: 'All papers for a year', desc: 'Select a year to download all QPs + MSs', type: 'year' },
  { label: 'All papers for a board', desc: 'Download every paper from one exam board', type: 'board' },
  { label: 'Mark schemes only', desc: 'Bulk download just the mark schemes', type: 'ms' },
  { label: 'Full archive', desc: 'Everything — all boards, all years', type: 'all' },
];

export default function QuickDownload({ onAuthChange }) {
  const [preset, setPreset] = useState(null);
  const [yearVal, setYearVal] = useState(String(years[0]));
  const [boardVal, setBoardVal] = useState(BOARDS[0]);
  const [subjectVal, setSubjectVal] = useState('');
  const [progress, setProgress] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const user = getUser();

  async function download() {
    if (!user) { setShowAuth(true); return; }
    let papers = [];
    let zipName = 'ALevelPapers';
    let includeQP = true;
    let includeMS = true;

    if (preset === 'year') {
      papers = filterPapers({ year: yearVal, subject: subjectVal });
      zipName = `ALevelPapers-${yearVal}${subjectVal ? `-${subjectVal.replace(' ', '')}` : ''}`;
    } else if (preset === 'board') {
      papers = filterPapers({ board: boardVal, subject: subjectVal });
      zipName = `ALevelPapers-${boardVal.replace(/[^a-z0-9]/gi, '')}`;
    } else if (preset === 'ms') {
      papers = filterPapers({ subject: subjectVal });
      includeQP = false;
      zipName = 'ALevelMarkSchemes';
    } else if (preset === 'all') {
      papers = filterPapers({});
      zipName = 'ALevelPapers-FullArchive';
    }

    if (papers.length === 0) return;
    setProgress(0);
    try {
      await downloadPapersAsZip(papers, { includeQP, includeMS, zipName }, pct => setProgress(pct));
    } finally {
      setProgress(null);
      setPreset(null);
    }
  }

  return (
    <>
      <section id="bulk" className="border-t border-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-gray-900">Bulk download</h2>
            <p className="text-sm text-gray-400 mt-1">Download organised ZIP archives in one click. Requires a free account.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PRESETS.map(p => (
              <button
                key={p.type}
                onClick={() => setPreset(p.type)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  preset === p.type
                    ? 'border-blue-300 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <p className="font-medium text-sm text-gray-900">{p.label}</p>
                <p className="text-xs text-gray-400 mt-1">{p.desc}</p>
              </button>
            ))}
          </div>

          {preset && (
            <div className="mt-5 p-5 bg-gray-50 rounded-xl border border-gray-200 flex flex-wrap items-end gap-4">
              {preset === 'year' && (
                <>
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">Year</label>
                    <select value={yearVal} onChange={e => setYearVal(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white outline-none focus:border-blue-400">
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                  <SubjectPicker value={subjectVal} onChange={setSubjectVal} />
                </>
              )}
              {preset === 'board' && (
                <>
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">Board</label>
                    <select value={boardVal} onChange={e => setBoardVal(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white outline-none focus:border-blue-400">
                      {BOARDS.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <SubjectPicker value={subjectVal} onChange={setSubjectVal} />
                </>
              )}
              {preset === 'ms' && <SubjectPicker value={subjectVal} onChange={setSubjectVal} />}
              {preset === 'all' && (
                <p className="text-sm text-gray-500">Downloads all papers for all boards.</p>
              )}
              <button
                onClick={download}
                disabled={progress !== null}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                {progress !== null ? `Downloading... ${progress}%` : 'Download ZIP'}
              </button>
            </div>
          )}
        </div>
      </section>

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onSuccess={() => { setShowAuth(false); onAuthChange?.(); download(); }}
        />
      )}
    </>
  );
}

function SubjectPicker({ value, onChange }) {
  return (
    <div>
      <label className="text-xs text-gray-500 block mb-1">Subject (optional)</label>
      <select value={value} onChange={e => onChange(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white outline-none focus:border-blue-400">
        <option value="">All</option>
        {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
    </div>
  );
}
