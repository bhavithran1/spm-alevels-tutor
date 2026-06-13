import { useState } from 'react';
import { getUser } from '../utils/auth';
import { downloadPapersAsZip } from '../utils/download';
import AuthModal from './AuthModal';

export default function BulkDownloadBar({ selectedPapers, allPapers, onClear, onAuthChange }) {
  const [showAuth, setShowAuth] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [progress, setProgress] = useState(null);
  const [includeQP, setIncludeQP] = useState(true);
  const [includeMS, setIncludeMS] = useState(true);
  const user = getUser();

  if (selectedPapers.length === 0) return null;

  function openDownload() {
    if (!user) { setShowAuth(true); return; }
    setShowOptions(true);
  }

  async function startDownload() {
    setShowOptions(false);
    setProgress(0);
    try {
      await downloadPapersAsZip(
        selectedPapers,
        { includeQP, includeMS, zipName: `ALevelPapers-${selectedPapers.length}papers` },
        pct => setProgress(pct)
      );
    } finally {
      setProgress(null);
    }
  }

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-gray-900 text-white rounded-2xl shadow-2xl px-5 py-3.5 flex items-center gap-4 min-w-[320px]">
          {progress !== null ? (
            <div className="flex-1">
              <div className="text-sm font-medium mb-1.5">Preparing ZIP... {progress}%</div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div
                  className="bg-blue-400 h-1.5 rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1">
                <span className="font-semibold text-sm">{selectedPapers.length} paper{selectedPapers.length !== 1 ? 's' : ''} selected</span>
                <button onClick={onClear} className="ml-2 text-xs text-gray-400 hover:text-gray-200 transition-colors">Clear</button>
              </div>
              <button
                onClick={openDownload}
                className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors whitespace-nowrap"
              >
                Download ZIP
              </button>
            </>
          )}
        </div>
      </div>

      {showOptions && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 mb-4 sm:mb-0 p-6">
            <h3 className="font-semibold text-gray-900 mb-1">Download options</h3>
            <p className="text-sm text-gray-400 mb-5">
              {selectedPapers.length} papers selected — choose what to include:
            </p>
            <div className="space-y-3 mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={includeQP} onChange={e => setIncludeQP(e.target.checked)} className="rounded text-blue-600" />
                <span className="text-sm text-gray-700">Question Papers (QP)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={includeMS} onChange={e => setIncludeMS(e.target.checked)} className="rounded text-blue-600" />
                <span className="text-sm text-gray-700">Mark Schemes (MS)</span>
              </label>
            </div>
            <p className="text-xs text-gray-400 mb-5">
              Files will be organised as: <span className="font-mono bg-gray-50 px-1 rounded">PaperType / Year / filename.pdf</span>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowOptions(false)}
                className="flex-1 border border-gray-200 text-gray-600 text-sm py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={startDownload}
                disabled={!includeQP && !includeMS}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-sm font-medium py-2.5 rounded-xl transition-colors"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onSuccess={() => { setShowAuth(false); onAuthChange?.(); setShowOptions(true); }}
        />
      )}
    </>
  );
}
