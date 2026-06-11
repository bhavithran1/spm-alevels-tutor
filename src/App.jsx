import { useDarkMode } from './hooks/useDarkMode';
import DarkToggle from './components/DarkToggle';
import { useState } from 'react';
import { GraduationCap, BookOpen, PlayCircle, Link, BarChart2, ChevronLeft, Layers, Calculator, CalendarDays } from 'lucide-react';
import SubjectSelector from './components/SubjectSelector';
import TopicList from './components/TopicList';
import QuizMode from './components/QuizMode';
import FlashcardMode from './components/FlashcardMode';
import FormulaSheet from './components/FormulaSheet';
import ResourceHub from './components/ResourceHub';
import StudyScheduler from './components/StudyScheduler';
import { LEVELS, SUBJECTS } from './data/curriculum';
import { getQuizHistory } from './utils/quiz';

const TABS = [
  { id: 'topics', label: 'Topics', icon: BookOpen },
  { id: 'quiz', label: 'Practice', icon: PlayCircle },
  { id: 'flashcards', label: 'Flashcards', icon: Layers },
  { id: 'formulas', label: 'Formulas', icon: Calculator },
  { id: 'resources', label: 'Resources', icon: Link },
  { id: 'progress', label: 'Progress', icon: BarChart2 },
  { id: 'schedule', label: 'Schedule', icon: CalendarDays },
];

export default function App() {
  const [dark, toggleDark] = useDarkMode();
  const [level, setLevel] = useState('spm');
  const [subject, setSubject] = useState(null);
  const [tab, setTab] = useState('topics');
  const [quizConfig, setQuizConfig] = useState(null); // { subjectId, topic }

  function startQuiz(subjectId, topic) {
    setQuizConfig({ subjectId, topic });
    setTab('quiz');
  }

  function viewNotes(subjectId, topic) {
    // For now, open PhysicsAndMathsTutor or KhanAcademy
    window.open('https://www.physicsandmathstutor.com', '_blank');
  }

  const history = getQuizHistory();
  const avgScore = history.length ? Math.round(history.reduce((s, r) => s + r.percentage, 0) / history.length) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900 dark:text-gray-100 text-sm leading-none">SPM & A-Level Tutor</h1>
                <p className="text-xs text-gray-400 mt-0.5">Free test prep for Malaysian students</p>
              </div>
            </div>
            {/* Level switcher */}
            <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              {Object.entries(LEVELS).map(([id, lv]) => (
                <button
                  key={id}
                  onClick={() => { setLevel(id); setSubject(null); setTab('topics'); }}
                  className={"px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors " + (
                    level === id
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  )}
                >
                  {lv.label}
                </button>
              ))}
            </div>
          <DarkToggle dark={dark} toggle={toggleDark} />
          </div>
          {subject && (
            <div className="flex gap-1">
              {TABS.map(t => (
                <button
                  key={t.id}
                  onClick={() => { setTab(t.id); if (t.id !== 'quiz') setQuizConfig(null); }}
                  className={"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors " + (
                    tab === t.id
                      ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400'
                      : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
                  )}
                >
                  <t.icon className="w-3.5 h-3.5" /> {t.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Subject selection */}
        {!subject && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {LEVELS[level].label} — {LEVELS[level].description}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Select a subject to start studying or practising</p>
            </div>
            <SubjectSelector level={level} onSelectSubject={setSubject} selectedSubject={subject} />

            {/* Quick-access cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => { setSubject(SUBJECTS[level][0]); setTab('schedule'); }}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-left hover:border-indigo-300 hover:shadow-sm transition-all"
              >
                <CalendarDays className="w-6 h-6 text-indigo-500 mb-2" />
                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Study Schedule</p>
                <p className="text-xs text-gray-400 mt-0.5">Generate a personalised exam timetable</p>
              </button>
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                <BarChart2 className="w-6 h-6 text-indigo-500 mb-2" />
                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Your Progress</p>
                {avgScore !== null ? (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-bold text-indigo-600">{avgScore}%</span>
                    <span className="text-xs text-gray-400">avg · {history.length} quizzes</span>
                  </div>
                ) : (
                  <p className="text-xs text-gray-400 mt-0.5">No quizzes taken yet</p>
                )}
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/30 p-4">
                <span className="text-2xl">🎯</span>
                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 mt-2">Tip of the day</p>
                <p className="text-xs text-gray-500 mt-0.5">Study in 25-min blocks (Pomodoro). Short breaks improve retention by 20%.</p>
              </div>
            </div>
          </div>
        )}

        {/* Subject content */}
        {subject && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => { setSubject(null); setTab('topics'); setQuizConfig(null); }}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                <ChevronLeft className="w-4 h-4" /> All Subjects
              </button>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <span className="text-xl">{subject.icon}</span>
                <h2 className="font-bold text-gray-900 dark:text-gray-100">{subject.name}</h2>
              </div>
            </div>

            {tab === 'topics' && (
              <TopicList
                subject={subject}
                onStartQuiz={startQuiz}
                onViewNotes={viewNotes}
              />
            )}

            {tab === 'quiz' && quizConfig && (
              <QuizMode
                subjectId={quizConfig.subjectId}
                topic={quizConfig.topic}
                onExit={() => { setTab('topics'); setQuizConfig(null); }}
              />
            )}

            {tab === 'quiz' && !quizConfig && (
              <div className="max-w-lg mx-auto text-center py-8 space-y-3">
                <p className="text-gray-500 text-sm">Select a topic to start practising, or start a full subject quiz:</p>
                <button
                  onClick={() => setQuizConfig({ subjectId: subject.id, topic: null })}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium text-sm transition-colors"
                >
                  Start Full {subject.name} Quiz
                </button>
              </div>
            )}

            {tab === 'formulas' && (
              <FormulaSheet subjectId={subject.id} />
            )}

            {tab === 'flashcards' && (
              <FlashcardMode
                subjectId={subject.id}
                topic={null}
                onExit={() => setTab('topics')}
              />
            )}

            {tab === 'resources' && (
              <ResourceHub level={level} subjectId={subject.id} />
            )}

            {tab === 'schedule' && (
              <StudyScheduler level={level} />
            )}

            {tab === 'progress' && (
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Recent Quiz History</h3>
                {history.length === 0 && (
                  <p className="text-gray-400 text-sm text-center py-8">No quizzes taken yet. Start practising!</p>
                )}
                {history.slice(0, 20).map(h => (
                  <div key={h.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{h.subjectId?.replace(/-/g, ' ')}</p>
                      {h.topic && <p className="text-xs text-gray-400">{h.topic}</p>}
                      <p className="text-xs text-gray-400 mt-0.5">{new Date(h.date).toLocaleDateString()}</p>
                    </div>
                    <div className={"text-xl font-bold px-4 py-2 rounded-xl " + (h.grade?.bg || 'bg-gray-100') + " " + (h.grade?.color || 'text-gray-600')}>
                      {h.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
