import { SUBJECTS, LEVELS } from '../data/curriculum';

export default function SubjectSelector({ level, onSelectSubject, selectedSubject }) {
  const subjects = SUBJECTS[level] || [];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {subjects.map(sub => (
        <button
          key={sub.id}
          onClick={() => onSelectSubject(sub)}
          className={"p-4 rounded-xl border-2 text-left transition-all " + (
            selectedSubject?.id === sub.id
              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
              : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600'
          )}
        >
          <div className="text-2xl mb-2">{sub.icon}</div>
          <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">{sub.name}</p>
          <p className="text-xs text-gray-400 mt-0.5">{sub.topics.length} topics</p>
        </button>
      ))}
    </div>
  );
}
