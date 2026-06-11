import { useState } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight, CheckCircle, XCircle, Minus } from 'lucide-react';
import { QUESTION_BANK } from '../data/curriculum';

export default function FlashcardMode({ subjectId, topic, onExit }) {
  const pool = (QUESTION_BANK[subjectId] || []).filter(q => !topic || q.topic === topic);
  const [cards] = useState(() => [...pool].sort(() => Math.random() - 0.5));
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [ratings, setRatings] = useState({}); // idx -> 'easy' | 'hard' | 'skip'

  if (cards.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400 text-sm mb-3">No cards for this topic yet.</p>
        <button onClick={onExit} className="text-indigo-600 hover:underline text-sm">← Back</button>
      </div>
    );
  }

  const card = cards[idx];
  const done = Object.keys(ratings).length;
  const easy = Object.values(ratings).filter(r => r === 'easy').length;
  const hard = Object.values(ratings).filter(r => r === 'hard').length;

  function rate(r) {
    setRatings(prev => ({ ...prev, [idx]: r }));
    next();
  }

  function next() {
    setFlipped(false);
    setIdx(i => Math.min(i + 1, cards.length - 1));
  }

  function prev() {
    setFlipped(false);
    setIdx(i => Math.max(i - 1, 0));
  }

  const isLast = idx === cards.length - 1;
  const allRated = done === cards.length;

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={onExit} className="text-xs text-gray-400 hover:text-indigo-500">← Exit</button>
        <span className="text-xs text-gray-500">{idx + 1} / {cards.length}</span>
        <div className="flex gap-2 text-xs">
          <span className="text-green-600">✓ {easy}</span>
          <span className="text-red-500">✗ {hard}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
        <div className="h-1.5 bg-indigo-500 rounded-full transition-all" style={{ width: ((idx) / cards.length * 100) + '%' }} />
      </div>

      {/* Card */}
      <div
        onClick={() => setFlipped(f => !f)}
        className={"min-h-[220px] rounded-2xl border-2 p-6 cursor-pointer flex flex-col items-center justify-center text-center transition-all " + (
          flipped
            ? 'border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300'
        )}
      >
        <p className="text-xs text-gray-400 mb-3">{flipped ? 'ANSWER' : 'QUESTION'} — {card.topic}</p>
        <p className={"text-sm font-medium leading-relaxed " + (flipped ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-900 dark:text-gray-100')}>
          {flipped ? card.answer : card.question}
        </p>
        {flipped && card.explanation && (
          <p className="text-xs text-gray-500 mt-3 italic">{card.explanation}</p>
        )}
        {!flipped && (
          <p className="text-xs text-gray-400 mt-4">Tap to reveal answer</p>
        )}
      </div>

      {/* Rate buttons (only when flipped) */}
      {flipped && !allRated && (
        <div className="flex gap-2 justify-center">
          <button onClick={() => rate('hard')} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium hover:bg-red-100 transition-colors">
            <XCircle className="w-4 h-4" /> Hard
          </button>
          <button onClick={() => rate('skip')} className="flex items-center justify-center gap-1 py-2.5 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-500 rounded-xl text-sm hover:bg-gray-100 transition-colors">
            <Minus className="w-4 h-4" />
          </button>
          <button onClick={() => rate('easy')} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 rounded-xl text-sm font-medium hover:bg-green-100 transition-colors">
            <CheckCircle className="w-4 h-4" /> Got it
          </button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-2 justify-between">
        <button onClick={prev} disabled={idx === 0}
          className="flex items-center gap-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-xl text-sm disabled:opacity-40 hover:bg-gray-200 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        {allRated ? (
          <div className="flex-1 mx-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center justify-center gap-2 text-sm text-green-700 dark:text-green-400">
            <CheckCircle className="w-4 h-4" /> Done! {easy}/{cards.length} got it
          </div>
        ) : (
          <button onClick={next} disabled={isLast}
            className="flex items-center gap-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-xl text-sm disabled:opacity-40 hover:bg-gray-200 transition-colors ml-auto">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
