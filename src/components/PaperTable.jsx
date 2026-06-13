export default function PaperTable({ papers, selected, onToggle, onToggleAll }) {
  if (papers.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400 text-sm">
        No papers match your filters.
      </div>
    );
  }

  const allSelected = papers.every(p => selected.has(p.id));

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="py-3 pr-4 text-left">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={() => onToggleAll(papers, allSelected)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </th>
            <th className="py-3 pr-6 text-left font-medium text-gray-400 text-xs uppercase tracking-wide whitespace-nowrap">Year</th>
            <th className="py-3 pr-6 text-left font-medium text-gray-400 text-xs uppercase tracking-wide whitespace-nowrap">Session</th>
            <th className="py-3 pr-6 text-left font-medium text-gray-400 text-xs uppercase tracking-wide">Board</th>
            <th className="py-3 pr-6 text-left font-medium text-gray-400 text-xs uppercase tracking-wide">Subject</th>
            <th className="py-3 pr-6 text-left font-medium text-gray-400 text-xs uppercase tracking-wide">Paper</th>
            <th className="py-3 pr-6 text-left font-medium text-gray-400 text-xs uppercase tracking-wide">Code</th>
            <th className="py-3 text-left font-medium text-gray-400 text-xs uppercase tracking-wide">Links</th>
          </tr>
        </thead>
        <tbody>
          {papers.map((p, i) => (
            <tr
              key={p.id}
              className={`border-b border-gray-50 hover:bg-gray-50/60 transition-colors ${selected.has(p.id) ? 'bg-blue-50/40' : ''}`}
            >
              <td className="py-3.5 pr-4">
                <input
                  type="checkbox"
                  checked={selected.has(p.id)}
                  onChange={() => onToggle(p.id)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </td>
              <td className="py-3.5 pr-6 font-medium text-gray-900 tabular-nums">{p.year}</td>
              <td className="py-3.5 pr-6 text-gray-500 whitespace-nowrap">{p.session}</td>
              <td className="py-3.5 pr-6">
                <BoardBadge board={p.board} />
              </td>
              <td className="py-3.5 pr-6 text-gray-600 whitespace-nowrap">{p.subject}</td>
              <td className="py-3.5 pr-6 text-gray-700">{p.paper}</td>
              <td className="py-3.5 pr-6 text-gray-400 text-xs font-mono">{p.code}</td>
              <td className="py-3.5">
                <div className="flex items-center gap-2">
                  <PaperLink href={p.qp} label="QP" color="blue" />
                  <PaperLink href={p.ms} label="MS" color="green" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PaperLink({ href, label, color }) {
  if (!href) return <span className="text-xs text-gray-200">{label}</span>;
  const styles = {
    blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-100',
    green: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-100',
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-xs font-medium px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${styles[color]}`}
    >
      {label}
    </a>
  );
}

const BOARD_COLORS = {
  'Edexcel': 'bg-violet-50 text-violet-700',
  'AQA': 'bg-orange-50 text-orange-700',
  'OCR A': 'bg-sky-50 text-sky-700',
  'OCR B (MEI)': 'bg-cyan-50 text-cyan-700',
  'Cambridge (CIE)': 'bg-rose-50 text-rose-700',
};

function BoardBadge({ board }) {
  const cls = BOARD_COLORS[board] || 'bg-gray-100 text-gray-600';
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-md whitespace-nowrap ${cls}`}>
      {board}
    </span>
  );
}
