import { useState } from 'react';
import { Copy, Check, Calculator } from 'lucide-react';
import { FORMULA_SHEETS } from '../data/formulas';

export default function FormulaSheet({ subjectId }) {
  const sheet = FORMULA_SHEETS[subjectId];
  const [copied, setCopied] = useState(null);

  if (!sheet) {
    return (
      <div className="text-center py-12 text-gray-400">
        <Calculator className="w-10 h-10 mx-auto mb-3 opacity-30" />
        <p className="text-sm">No formula sheet available for this subject yet.</p>
      </div>
    );
  }

  function copyFormula(formula, id) {
    navigator.clipboard.writeText(formula).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Calculator className="w-5 h-5 text-indigo-500" />
        <h3 className="font-bold text-gray-900 dark:text-gray-100">{sheet.name} — Formula Sheet</h3>
      </div>

      {sheet.sections.map(section => (
        <div key={section.title}>
          <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-2 border-b border-indigo-100 dark:border-indigo-900/30 pb-1">
            {section.title}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {section.formulas.map((f, i) => {
              const id = section.title + i;
              return (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3 group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{f.name}</p>
                      <p className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100 break-all">{f.formula}</p>
                      {f.note && <p className="text-xs text-gray-400 mt-1 italic">{f.note}</p>}
                    </div>
                    <button
                      onClick={() => copyFormula(f.formula, id)}
                      className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-all"
                      title="Copy formula"
                    >
                      {copied === id ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
