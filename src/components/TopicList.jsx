import { useState } from 'react';
import { CheckCircle, BookOpen, PlayCircle, ChevronRight } from 'lucide-react';
import { getProgress, markTopicStudied } from '../utils/quiz';
import { QUESTION_BANK } from '../data/curriculum';

export default function TopicList({ subject, onStartQuiz, onViewNotes }) {
  const [progress, setProgress] = useState(getProgress());

  function handleMarkStudied(topic) {
    markTopicStudied(subject.id, topic);
    setProgress(getProgress());
  }

  const subjectProgress = progress[subject.id] || {};
  const studied = Object.keys(subjectProgress).length;
  const pct = Math.round((studied / subject.topics.length) * 100);
  const qBank = QUESTION_BANK[subject.id] || [];

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-500">{studied}/{subject.topics.length} topics studied</span>
          <span className="text-xs font-bold text-indigo-600">{pct}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="h-2 rounded-full bg-indigo-500 transition-all" style={{ width: pct + '%' }} />
        </div>
      </div>

      <div className="space-y-1.5">
        {subject.topics.map(topic => {
          const isStudied = !!subjectProgress[topic];
          const questionsForTopic = qBank.filter(q => q.topic === topic).length;
          return (
            <div
              key={topic}
              className={"flex items-center gap-2 p-2.5 rounded-lg border transition-colors " + (
                isStudied
                  ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800/30'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              )}
            >
              <button onClick={() => handleMarkStudied(topic)} className="shrink-0">
                <CheckCircle className={"w-4 h-4 transition-colors " + (isStudied ? 'text-green-500 fill-green-100' : 'text-gray-300 dark:text-gray-600 hover:text-green-400')} />
              </button>
              <span className={"flex-1 text-sm " + (isStudied ? 'text-green-800 dark:text-green-300' : 'text-gray-700 dark:text-gray-300')}>
                {topic}
              </span>
              {questionsForTopic > 0 && (
                <span className="text-xs text-gray-400">{questionsForTopic}Q</span>
              )}
              <div className="flex gap-1">
                <button
                  onClick={() => onStartQuiz(subject.id, topic)}
                  className="p-1 rounded text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                  title="Practice this topic"
                >
                  <PlayCircle className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onViewNotes(subject.id, topic)}
                  className="p-1 rounded text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  title="Study notes"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
