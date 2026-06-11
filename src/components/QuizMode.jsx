import { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, XCircle, RotateCcw, Trophy, Clock } from 'lucide-react';
import { QUESTION_BANK } from '../data/curriculum';
import { computeGrade, getDifficultyColor, saveQuizResult } from '../utils/quiz';

export default function QuizMode({ subjectId, topic, onExit }) {
  const allQuestions = QUESTION_BANK[subjectId] || [];
  const pool = topic ? allQuestions.filter(q => q.topic === topic) : allQuestions;
  const [questions] = useState(() => [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(10, pool.length)));
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);
  const [result, setResult] = useState(null);
  const [startTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (finished) return;
    const timer = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(timer);
  }, [finished]);

  if (questions.length === 0) {
    return (
      <div className="text-center py-16 space-y-3">
        <p className="text-gray-500">No questions available for this topic yet.</p>
        <button onClick={onExit} className="text-indigo-600 hover:underline text-sm">← Back</button>
      </div>
    );
  }

  const q = questions[idx];
  const userAnswer = answers[idx] || '';

  function handleAnswer(val) {
    setAnswers(prev => ({ ...prev, [idx]: val }));
  }

  function handleReveal() {
    setShowAnswer(true);
  }

  function handleNext() {
    setShowAnswer(false);
    if (idx + 1 >= questions.length) {
      const r = computeResult();
      setResult(r);
      setFinished(true);
      saveQuizResult({ subjectId, topic, ...r, timeSecs: elapsed });
    } else {
      setIdx(idx + 1);
    }
  }

  function computeResult() {
    let correct = 0, earnedMarks = 0, totalMarks = 0;
    const details = questions.map((q2, i) => {
      const ua = (answers[i] || '').toLowerCase().trim();
      const correct_ans = q2.answer.toLowerCase().trim();
      const isCorrect = q2.type === 'mcq' ? ua === correct_ans : ua.includes(correct_ans.split(' ')[0]);
      totalMarks += q2.marks;
      if (isCorrect) { correct++; earnedMarks += q2.marks; }
      return { ...q2, userAnswer: answers[i] || '', isCorrect };
    });
    return { correct, total: questions.length, earnedMarks, totalMarks, percentage: Math.round((earnedMarks / totalMarks) * 100), grade: computeGrade(earnedMarks, totalMarks), details };
  }

  function handleRestart() {
    setIdx(0);
    setAnswers({});
    setShowAnswer(false);
    setFinished(false);
    setResult(null);
  }

  const formatTime = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;

  if (finished && result) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
          <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Quiz Complete!</h2>
          <div className={"inline-flex items-center justify-center w-20 h-20 rounded-full text-3xl font-bold mt-3 " + result.grade.bg + " " + result.grade.color}>
            {result.grade.grade}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { label: 'Score', value: result.percentage + '%' },
              { label: 'Correct', value: result.correct + '/' + result.total },
              { label: 'Time', value: formatTime(elapsed) },
            ].map(s => (
              <div key={s.label} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 text-center">
                <p className="text-xs text-gray-400">{s.label}</p>
                <p className="font-bold text-gray-900 dark:text-gray-100 mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-6 justify-center">
            <button onClick={handleRestart}
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-colors">
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
            <button onClick={onExit}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium transition-colors">
              Back to Topics
            </button>
          </div>
        </div>

        {/* Review */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Review Answers</h3>
          {result.details.map((q2, i) => (
            <div key={i} className={"rounded-xl border p-4 " + (q2.isCorrect ? 'border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800/30' : 'border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-800/30')}>
              <div className="flex items-start gap-2">
                {q2.isCorrect ? <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> : <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />}
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{q2.question}</p>
                  {!q2.isCorrect && q2.userAnswer && (
                    <p className="text-xs text-red-600 dark:text-red-400 mt-1">Your answer: {q2.userAnswer}</p>
                  )}
                  <p className="text-xs text-green-700 dark:text-green-400 mt-1">✓ {q2.answer}</p>
                  <p className="text-xs text-gray-500 mt-1 italic">{q2.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={onExit} className="text-xs text-gray-400 hover:text-indigo-500">← Exit</button>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Clock className="w-3 h-3" /> {formatTime(elapsed)}
          </span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{idx + 1} / {questions.length}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-6">
        <div className="h-1.5 rounded-full bg-indigo-500 transition-all" style={{ width: ((idx) / questions.length * 100) + '%' }} />
      </div>

      {/* Question card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-5">
        <div className="flex items-start gap-3">
          <div>
            <div className="flex gap-2 mb-3">
              <span className="text-xs px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full">{q.topic}</span>
              <span className={"text-xs px-2 py-0.5 rounded-full " + getDifficultyColor(q.difficulty)}>{q.difficulty}</span>
              <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">{q.marks} mark{q.marks !== 1 ? 's' : ''}</span>
            </div>
            <p className="text-gray-900 dark:text-gray-100 font-medium leading-relaxed">{q.question}</p>
          </div>
        </div>

        {q.type === 'mcq' ? (
          <div className="space-y-2">
            {q.options.map(opt => (
              <button
                key={opt}
                onClick={() => !showAnswer && handleAnswer(opt)}
                disabled={showAnswer}
                className={"w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-colors " + (
                  showAnswer && opt === q.answer
                    ? 'border-green-400 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-medium'
                    : showAnswer && opt === userAnswer && opt !== q.answer
                    ? 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                    : userAnswer === opt && !showAnswer
                    ? 'border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400'
                    : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-300 hover:bg-indigo-50/50'
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <textarea
              value={userAnswer}
              onChange={e => !showAnswer && handleAnswer(e.target.value)}
              disabled={showAnswer}
              rows={3}
              placeholder="Type your answer here…"
              className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none disabled:opacity-70"
            />
          </div>
        )}

        {showAnswer && (
          <div className="rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/30 p-4 space-y-2">
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">Answer: {q.answer}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{q.explanation}</p>
          </div>
        )}

        <div className="flex justify-end gap-3">
          {!showAnswer && (
            <button onClick={handleReveal}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium transition-colors">
              Show Answer
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!showAnswer && !userAnswer && q.type !== 'short-answer'}
            className="flex items-center gap-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-sm font-medium transition-colors"
          >
            {idx + 1 === questions.length ? 'Finish' : 'Next'} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
