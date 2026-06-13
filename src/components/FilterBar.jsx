import { BOARDS, SUBJECTS, SESSIONS, years } from '../data/papers';

export default function FilterBar({ filters, onChange }) {
  function set(key, value) {
    onChange({ ...filters, [key]: filters[key] === value ? '' : value });
  }

  return (
    <div className="space-y-5">
      <FilterGroup label="Subject" items={SUBJECTS} active={filters.subject} onSelect={v => set('subject', v)} />
      <FilterGroup label="Exam Board" items={BOARDS} active={filters.board} onSelect={v => set('board', v)} />
      <FilterGroup label="Session" items={SESSIONS} active={filters.session} onSelect={v => set('session', v)} />
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">Year</p>
        <select
          value={filters.year}
          onChange={e => onChange({ ...filters, year: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400 bg-white"
        >
          <option value="">All years</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>
      <button
        onClick={() => onChange({ board: '', subject: '', year: '', session: '' })}
        className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
      >
        Clear all filters
      </button>
    </div>
  );
}

function FilterGroup({ label, items, active, onSelect }) {
  return (
    <div>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map(item => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
              active === item
                ? 'bg-blue-600 text-white border-blue-600'
                : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
