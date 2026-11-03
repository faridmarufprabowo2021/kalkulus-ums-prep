import React from 'react';
import { ModuleId } from '../types/problem';
import { MODULES } from '../data/modules';
import { Search, SlidersHorizontal, Eye, EyeOff } from 'lucide-react';

interface ModuleFilterProps {
  selectedModule: ModuleId | 'all';
  onSelectModule: (id: ModuleId | 'all') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalFiltered: number;
  totalAll: number;
  allExpanded: boolean;
  onToggleAllExpanded: () => void;
}

export const ModuleFilter: React.FC<ModuleFilterProps> = ({
  selectedModule,
  onSelectModule,
  searchQuery,
  onSearchChange,
  totalFiltered,
  totalAll,
  allExpanded,
  onToggleAllExpanded,
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-4 md:p-5 shadow-xs mb-6">
      {/* Search & Actions Row */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mb-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari soal (contoh: modulo, invers, limit sepihak, sec²x, kontinu)..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-campus-accent focus:border-transparent bg-slate-50/50"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Global Expand Toggle */}
        <button
          onClick={onToggleAllExpanded}
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shrink-0"
        >
          {allExpanded ? (
            <>
              <EyeOff className="w-4 h-4 text-slate-500" />
              <span>Tutup Semua Jawaban</span>
            </>
          ) : (
            <>
              <Eye className="w-4 h-4 text-campus-accent" />
              <span>Buka Semua Jawaban</span>
            </>
          )}
        </button>
      </div>

      {/* Module Filter Pills */}
      <div>
        <div className="flex items-center gap-2 mb-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>FILTER MODUL MATERI:</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onSelectModule('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedModule === 'all'
                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Semua Modul ({totalAll})
          </button>

          {MODULES.map((mod) => (
            <button
              key={mod.id}
              onClick={() => onSelectModule(mod.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                selectedModule === mod.id
                  ? 'bg-campus-accent text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{mod.shortTitle}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded ${
                  selectedModule === mod.id ? 'bg-blue-800 text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {mod.questionCount}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Counter Bar */}
      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>
          Menampilkan <strong className="text-slate-900">{totalFiltered}</strong> dari {totalAll} soal
        </span>
        {searchQuery && (
          <span className="italic text-slate-400">
            Hasil pencarian untuk "{searchQuery}"
          </span>
        )}
      </div>
    </div>
  );
};
