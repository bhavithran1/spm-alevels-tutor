import { useMemo } from 'react';
import BookCover from './BookCover';
import { filterPapers } from '../data/papers';

export default function YearGrid({ board, subject, activeYear, onSelectYear }) {
  const grouped = useMemo(() => {
    const filtered = filterPapers({ board, subject });
    const map = new Map();
    for (const p of filtered) {
      const key = `${p.year}__${p.session}`;
      if (!map.has(key)) map.set(key, { year: p.year, session: p.session, count: 0 });
      map.get(key).count++;
    }
    return [...map.values()].sort((a, b) => b.year - a.year || a.session.localeCompare(b.session));
  }, [board, subject]);

  if (grouped.length === 0) {
    return <p className="text-sm text-gray-400 py-6">No papers found for this selection.</p>;
  }

  return (
    <div className="flex flex-wrap gap-6">
      {grouped.map(({ year, session, count }) => (
        <BookCover
          key={`${year}-${session}`}
          board={board}
          subject={subject}
          year={year}
          session={session}
          paperCount={count}
          isActive={activeYear?.year === year && activeYear?.session === session}
          onClick={() => onSelectYear(
            activeYear?.year === year && activeYear?.session === session
              ? null
              : { year, session }
          )}
        />
      ))}
    </div>
  );
}
