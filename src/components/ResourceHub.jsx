import { ExternalLink, BookOpen, Video, FileText, Globe } from 'lucide-react';
import { RESOURCES } from '../data/curriculum';

const TYPE_ICONS = {
  official: Globe,
  notes: BookOpen,
  papers: FileText,
  video: Video,
  platform: Globe,
  reference: FileText,
};

const TYPE_COLORS = {
  official: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  notes: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  papers: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  video: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  platform: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  reference: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400',
};

export default function ResourceHub({ level, subjectId }) {
  const filtered = RESOURCES.filter(r =>
    r.level === level && (r.subject === 'all' || r.subject === subjectId)
  );

  const byType = filtered.reduce((acc, r) => {
    if (!acc[r.type]) acc[r.type] = [];
    acc[r.type].push(r);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-500 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-xl p-3">
        All resources listed are free or have substantial free tiers. No affiliation or endorsement.
      </div>
      {Object.entries(byType).map(([type, resources]) => {
        const Icon = TYPE_ICONS[type] || Globe;
        return (
          <div key={type}>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1.5 capitalize">
              <Icon className="w-3.5 h-3.5" /> {type}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resources.map((r, i) => (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-sm transition-all group"
                >
                  <span className="text-xl shrink-0">{r.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {r.title}
                      </span>
                      <span className={"text-xs px-1.5 py-0.5 rounded capitalize " + (TYPE_COLORS[type] || TYPE_COLORS.reference)}>
                        {type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{r.desc}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-500 shrink-0 mt-0.5 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
