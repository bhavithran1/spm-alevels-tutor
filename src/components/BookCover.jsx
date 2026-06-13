const BOARD_THEMES = {
  'Edexcel':        { spine: '#4338ca', cover: '#eef2ff', accent: '#6366f1', text: '#312e81' },
  'AQA':            { spine: '#b45309', cover: '#fffbeb', accent: '#f59e0b', text: '#78350f' },
  'OCR A':          { spine: '#0369a1', cover: '#f0f9ff', accent: '#0ea5e9', text: '#0c4a6e' },
  'OCR B (MEI)':    { spine: '#0e7490', cover: '#ecfeff', accent: '#06b6d4', text: '#164e63' },
  'Cambridge (CIE)':{ spine: '#be123c', cover: '#fff1f2', accent: '#f43f5e', text: '#881337' },
};

const DEFAULT_THEME = { spine: '#374151', cover: '#f9fafb', accent: '#6b7280', text: '#111827' };

export default function BookCover({ board, subject, year, session, paperCount, onClick, isActive }) {
  const theme = BOARD_THEMES[board] || DEFAULT_THEME;
  const isFurther = subject === 'Further Mathematics';

  return (
    <button
      onClick={onClick}
      className="group relative text-left transition-all duration-200 focus:outline-none"
      style={{ width: 140 }}
    >
      {/* Book shadow */}
      <div
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-sm opacity-20"
        style={{ backgroundColor: theme.spine }}
      />

      {/* Book body */}
      <div
        className={`relative rounded-sm overflow-hidden transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-xl ${isActive ? '-translate-y-1 shadow-xl ring-2' : 'shadow-md'}`}
        style={{
          height: 196,
          backgroundColor: theme.cover,
          ringColor: theme.spine,
        }}
      >
        {/* Spine stripe on left */}
        <div className="absolute left-0 top-0 bottom-0 w-3" style={{ backgroundColor: theme.spine }} />

        {/* Top band */}
        <div className="absolute top-0 left-3 right-0 h-10" style={{ backgroundColor: theme.accent, opacity: 0.15 }} />

        {/* Board label */}
        <div className="absolute top-0 left-3 right-0 px-3 pt-2.5">
          <p className="text-[9px] font-bold uppercase tracking-widest truncate" style={{ color: theme.accent }}>
            {board}
          </p>
        </div>

        {/* Decorative circles */}
        <div
          className="absolute right-2 top-6 w-10 h-10 rounded-full opacity-10"
          style={{ backgroundColor: theme.spine }}
        />
        <div
          className="absolute right-5 top-9 w-16 h-16 rounded-full opacity-5"
          style={{ backgroundColor: theme.spine }}
        />

        {/* Year — main content */}
        <div className="absolute inset-0 left-3 flex flex-col justify-center px-3 pt-2">
          <p
            className="text-4xl font-black leading-none tabular-nums"
            style={{ color: theme.text }}
          >
            {year}
          </p>
          {session && session !== 'May/June' && (
            <p className="text-[9px] font-semibold mt-0.5 opacity-60" style={{ color: theme.text }}>
              {session}
            </p>
          )}
        </div>

        {/* Subject */}
        <div className="absolute bottom-8 left-3 right-0 px-3">
          <p className="text-[10px] font-semibold leading-tight" style={{ color: theme.text, opacity: 0.7 }}>
            {isFurther ? 'Further\nMathematics' : 'Mathematics'}
          </p>
        </div>

        {/* Bottom bar */}
        <div
          className="absolute bottom-0 left-3 right-0 h-7 flex items-center px-3"
          style={{ backgroundColor: theme.spine }}
        >
          <p className="text-[9px] font-semibold text-white/80">
            {paperCount} paper{paperCount !== 1 ? 's' : ''}
          </p>
          <svg className="ml-auto w-3 h-3 text-white/60" viewBox="0 0 12 12" fill="none">
            <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {isActive && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900" />
      )}
    </button>
  );
}
