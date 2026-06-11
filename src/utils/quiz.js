import { QUESTION_BANK } from '../data/curriculum';

export function buildQuiz(subjectId, topicFilter = null, count = 10) {
  const pool = QUESTION_BANK[subjectId] || [];
  const filtered = topicFilter ? pool.filter(q => q.topic === topicFilter) : pool;
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function scoreQuiz(questions, answers) {
  let correct = 0, totalMarks = 0, earnedMarks = 0;
  const details = questions.map((q, i) => {
    const userAnswer = answers[i] || '';
    const isCorrect = userAnswer.toLowerCase().trim() === q.answer.toLowerCase().trim();
    totalMarks += q.marks;
    if (isCorrect) { correct++; earnedMarks += q.marks; }
    return { ...q, userAnswer, isCorrect };
  });
  return {
    correct, total: questions.length, earnedMarks, totalMarks,
    percentage: Math.round((earnedMarks / totalMarks) * 100),
    grade: computeGrade(earnedMarks, totalMarks), details,
  };
}

export function computeGrade(earned, total) {
  const pct = (earned / total) * 100;
  if (pct >= 90) return { grade: 'A+', color: 'text-emerald-600', bg: 'bg-emerald-100' };
  if (pct >= 80) return { grade: 'A', color: 'text-emerald-600', bg: 'bg-emerald-100' };
  if (pct >= 70) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-100' };
  if (pct >= 60) return { grade: 'C', color: 'text-indigo-600', bg: 'bg-indigo-100' };
  if (pct >= 50) return { grade: 'D', color: 'text-amber-600', bg: 'bg-amber-100' };
  return { grade: 'F', color: 'text-red-600', bg: 'bg-red-100' };
}

export function getDifficultyColor(difficulty) {
  return {
    easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  }[difficulty] || 'bg-gray-100 text-gray-600';
}

export function saveQuizResult(result) {
  const KEY = 'tutor_quiz_history';
  const history = JSON.parse(localStorage.getItem(KEY) || '[]');
  history.unshift({ ...result, date: new Date().toISOString(), id: Date.now() });
  localStorage.setItem(KEY, JSON.stringify(history.slice(0, 50)));
}

export function getQuizHistory() {
  return JSON.parse(localStorage.getItem('tutor_quiz_history') || '[]');
}

export function getProgress() {
  return JSON.parse(localStorage.getItem('tutor_progress') || '{}');
}

export function markTopicStudied(subjectId, topic) {
  const progress = getProgress();
  if (!progress[subjectId]) progress[subjectId] = {};
  progress[subjectId][topic] = { studied: true, date: new Date().toISOString() };
  localStorage.setItem('tutor_progress', JSON.stringify(progress));
}
