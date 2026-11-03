import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { ModuleFilter } from './components/ModuleFilter';
import { ProblemCard } from './components/ProblemCard';
import { FormulaModal } from './components/FormulaModal';
import { Footer } from './components/Footer';
import { PROBLEMS_LATIHAN } from './data/problemsLatihan';
import { PROBLEMS_UTS_UMS } from './data/problemsUtsUms';
import { ModuleId, Problem } from './types/problem';
import { Sparkles, BookOpen } from 'lucide-react';

export default function App() {
  const [selectedModule, setSelectedModule] = useState<ModuleId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [allExpanded, setAllExpanded] = useState<boolean>(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState<boolean>(false);

  // Combine all problems: 15 Latihan + 4 Arsip UTS UMS
  const allProblems: Problem[] = useMemo(() => {
    return [...PROBLEMS_LATIHAN, ...PROBLEMS_UTS_UMS];
  }, []);

  // Filtered problems based on module & search
  const filteredProblems = useMemo(() => {
    return allProblems.filter((p) => {
      // Module filter
      if (selectedModule !== 'all' && p.module !== selectedModule) {
        return false;
      }

      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(query);
        const matchSubtopic = p.subtopic.toLowerCase().includes(query);
        const matchNumber = p.number.toString().includes(query);
        const matchQuestion = p.questionLatex.toLowerCase().includes(query);
        const matchTips = p.fastTips.some((t) => t.toLowerCase().includes(query));
        const matchPitfalls = p.commonPitfalls.some((cp) => cp.toLowerCase().includes(query));

        if (!matchTitle && !matchSubtopic && !matchNumber && !matchQuestion && !matchTips && !matchPitfalls) {
          return false;
        }
      }

      return true;
    });
  }, [allProblems, selectedModule, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <Header onOpenFormulas={() => setIsFormulaModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        {/* Module Filter & Search */}
        <ModuleFilter
          selectedModule={selectedModule}
          onSelectModule={setSelectedModule}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalFiltered={filteredProblems.length}
          totalAll={allProblems.length}
          allExpanded={allExpanded}
          onToggleAllExpanded={() => setAllExpanded(!allExpanded)}
        />

        {/* Problems Grid / Stack */}
        {filteredProblems.length > 0 ? (
          <div className="space-y-6">
            {filteredProblems.map((problem) => (
              <ProblemCard
                key={`${problem.id}-${allExpanded}`}
                problem={problem}
                initiallyExpanded={allExpanded}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700 mb-1">
              Tidak Ada Soal yang Ditemukan
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
              Coba gunakan kata kunci pencarian lain atau pilih tab "Semua Modul" untuk melihat daftar lengkap soal.
            </p>
            <button
              onClick={() => {
                setSelectedModule('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Reset Filter Pencarian
            </button>
          </div>
        )}
      </main>

      {/* Formula Cheat Sheet Modal */}
      <FormulaModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
