import React, { useState } from 'react';
import { FORMULA_LIST } from '../data/formulas';
import { MathRenderer } from './MathRenderer';
import { X, BookMarked, Search } from 'lucide-react';

interface FormulaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormulaModal: React.FC<FormulaModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const categories = Array.from(new Set(FORMULA_LIST.map((f) => f.category)));

  const filteredFormulas = FORMULA_LIST.filter(
    (f) =>
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.formulaLatex.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-300 shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg">Lembar Rumus Resmi UTS Kalkulus UMS</h3>
              <p className="text-xs text-slate-400">
                Identitas Trigonometri & Teorema Limit sesuai lampiran ujian FKI UMS
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari rumus (contoh: pythagoras, sin(x+y), modulo, invers, tan)..."
            className="w-full text-sm bg-transparent border-none focus:outline-none text-slate-800 placeholder-slate-400"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Modal Body / Formula Cards */}
        <div className="p-5 overflow-y-auto space-y-6">
          {categories.map((cat) => {
            const items = filteredFormulas.filter((f) => f.category === cat);
            if (items.length === 0) return null;

            return (
              <div key={cat} className="space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-campus-accent border-b border-slate-200 pb-1">
                  {cat}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/90 hover:border-blue-300 transition-colors"
                    >
                      <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                        {item.name}
                      </span>
                      <div className="overflow-x-auto py-1 text-slate-900">
                        <MathRenderer math={item.formulaLatex} block={true} />
                      </div>
                      {item.note && (
                        <p className="text-[11px] text-slate-500 mt-1.5 italic bg-white p-1.5 rounded border border-slate-100">
                          📌 {item.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredFormulas.length === 0 && (
            <div className="text-center py-10 text-slate-400">
              Tidak ada rumus yang cocok dengan pencarian "{searchTerm}".
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Total {FORMULA_LIST.length} rumus acuan ujian kalkulus</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
