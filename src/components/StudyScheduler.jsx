import { useState } from 'react';
import { Calendar, Clock, Download, BookOpen, AlertCircle } from 'lucide-react';
import { SUBJECTS } from '../data/curriculum';

function daysUntil(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  return Math.max(0, Math.round((target - today) / (1000 * 60 * 60 * 24)));
}

function generateSchedule(level, examDate, hoursPerDay, selectedSubjectIds) {
  const days = daysUntil(examDate);
  if (days === 0) return [];

  const subjects = SUBJECTS[level].filter(s => selectedSubjectIds.includes(s.id));
  if (subjects.length === 0) return [];

  // Allocate time: equal weight per subject, more topics = more sessions
  const totalTopics = subjects.reduce((s, sub) => s + (sub.topics?.length || 1), 0);

  const schedule = [];
  let dayOffset = 0;

  // Revision phases: topic study → topic revision → mock practice
  const studyDays = Math.floor(days * 0.5);
  const revisionDays = Math.floor(days * 0.3);
  // final 20% = mock practice (not per-subject, just general)

  // Per-subject study blocks
  for (const sub of subjects) {
    const subWeight = (sub.topics?.length || 1) / totalTopics;
    const subDays = Math.max(1, Math.round(studyDays * subWeight));
    const topics = sub.topics || ['Full subject'];
    const daysPerTopic = Math.max(1, Math.floor(subDays / topics.length));

    for (const topic of topics) {
      schedule.push({
        dayStart: dayOffset + 1,
        dayEnd: dayOffset + daysPerTopic,
        phase: 'study',
        subject: sub.name,
        subjectIcon: sub.icon,
        topic,
        hours: Math.min(hoursPerDay, 2),
        activities: ['Read notes', 'Summarise key points', 'Attempt practice questions'],
      });
      dayOffset += daysPerTopic;
    }
  }

  // Revision blocks
  for (const sub of subjects) {
    const subWeight = (sub.topics?.length || 1) / totalTopics;
    const subDays = Math.max(1, Math.round(revisionDays * subWeight));
    schedule.push({
      dayStart: dayOffset + 1,
      dayEnd: dayOffset + subDays,
      phase: 'revision',
      subject: sub.name,
      subjectIcon: sub.icon,
      topic: 'Full revision',
      hours: Math.min(hoursPerDay, 2),
      activities: ['Review weak areas', 'Past paper questions', 'Timed practice'],
    });
    dayOffset += subDays;
  }

  // Final mock phase
  const remaining = days - dayOffset;
  if (remaining > 0) {
    schedule.push({
      dayStart: dayOffset + 1,
      dayEnd: days,
      phase: 'mock',
      subject: 'All subjects',
      subjectIcon: '📝',
      topic: 'Full mock exams',
      hours: hoursPerDay,
      activities: ['Full timed past papers', 'Mark against scheme', 'Review errors', 'Rest & wellness'],
    });
  }

  return schedule;
}

const phaseColors = {
  study: 'border-blue-200 bg-blue-50 dark:bg-blue-900/10 dark:border-blue-800/30 text-blue-700 dark:text-blue-400',
  revision: 'border-amber-200 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-800/30 text-amber-700 dark:text-amber-400',
  mock: 'border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800/30 text-green-700 dark:text-green-400',
};
const phaseLabels = { study: 'Study', revision: 'Revision', mock: 'Mock Practice' };

export default function StudyScheduler({ level }) {
  const [examDate, setExamDate] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState(3);
  const [selected, setSelected] = useState([]);
  const [schedule, setSchedule] = useState(null);

  const subjects = SUBJECTS[level] || [];

  function toggleSubject(id) {
    setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  }

  function generate() {
    if (!examDate || selected.length === 0) return;
    setSchedule(generateSchedule(level, examDate, hoursPerDay, selected));
  }

  function exportSchedule() {
    if (!schedule) return;
    const lines = ['Day Range,Phase,Subject,Topic,Hours/Day,Activities'];
    schedule.forEach(b => {
      lines.push([
        `${b.dayStart}-${b.dayEnd}`,
        phaseLabels[b.phase],
        b.subject,
        b.topic,
        b.hours,
        b.activities.join('; '),
      ].join(','));
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'study_schedule.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  const days = examDate ? daysUntil(examDate) : null;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-500" /> Exam Study Schedule Generator
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Exam Date</label>
            <input
              type="date"
              value={examDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={e => setExamDate(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
              Study hours/day: <strong>{hoursPerDay}h</strong>
            </label>
            <input
              type="range" min="1" max="8" value={hoursPerDay}
              onChange={e => setHoursPerDay(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-0.5">
              <span>1h</span><span>4h</span><span>8h</span>
            </div>
          </div>
        </div>

        {days !== null && days < 14 && (
          <div className="flex items-center gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-xs text-amber-700 dark:text-amber-400 mb-4">
            <AlertCircle className="w-4 h-4 shrink-0" />
            Only {days} days until your exam — focus on revision and past papers rather than new content.
          </div>
        )}

        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Subjects to include:</label>
          <div className="grid grid-cols-2 gap-2">
            {subjects.map(s => (
              <button
                key={s.id}
                onClick={() => toggleSubject(s.id)}
                className={"flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors " + (
                  selected.includes(s.id)
                    ? 'bg-indigo-50 border-indigo-300 text-indigo-700 dark:bg-indigo-900/20 dark:border-indigo-700 dark:text-indigo-400'
                    : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-indigo-200'
                )}
              >
                <span>{s.icon}</span>
                <span className="truncate text-xs">{s.name}</span>
              </button>
            ))}
          </div>
        </div>

        {days !== null && (
          <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
            <Clock className="w-3 h-3" /> {days} days until exam · {Math.round(days * hoursPerDay)} total study hours
          </p>
        )}

        <button
          onClick={generate}
          disabled={!examDate || selected.length === 0}
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl font-medium text-sm transition-colors"
        >
          Generate Schedule
        </button>
      </div>

      {schedule && schedule.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-500" /> Your Study Plan ({schedule.length} blocks)
            </h4>
            <button
              onClick={exportSchedule}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              <Download className="w-3 h-3" /> Export CSV
            </button>
          </div>
          <div className="space-y-3">
            {schedule.map((block, i) => (
              <div key={i} className={"rounded-xl border p-4 " + phaseColors[block.phase]}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{block.subjectIcon}</span>
                    <div>
                      <p className="font-medium text-sm">{block.subject}</p>
                      <p className="text-xs opacity-75">{block.topic}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/50 dark:bg-black/20">
                      {phaseLabels[block.phase]}
                    </span>
                    <p className="text-xs opacity-75 mt-1">Days {block.dayStart}–{block.dayEnd}</p>
                    <p className="text-xs opacity-75">{block.hours}h/day</p>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {block.activities.map(act => (
                    <span key={act} className="text-xs px-2 py-0.5 rounded-md bg-white/40 dark:bg-black/20">
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
