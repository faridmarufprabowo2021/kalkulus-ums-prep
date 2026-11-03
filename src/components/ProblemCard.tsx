import React, { useState } from 'react';
import { Problem } from '../types/problem';
import { MathRenderer } from './MathRenderer';
import { UnitCircleVisual } from './UnitCircleVisual';
import { LimitGraphVisual } from './LimitGraphVisual';
import {
  ChevronDown,
  ChevronUp,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';

interface ProblemCardProps {
  problem: Problem;
  initiallyExpanded?: boolean;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({
  problem,
  initiallyExpanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(initiallyExpanded);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyQuestion = () => {
    navigator.clipboard.writeText(problem.questionLatex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getModuleBadgeColor = (module: string) => {
    switch (module) {
      case 'bilangan':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'trigonometri':
        return 'bg-sky-100 text-sky-800 border-sky-300';
      case 'fungsi':
        return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      case 'limit':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'kontinuitas':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'uts-resmi':
        return 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div
      id={`problem-${problem.id}`}
      className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      {/* Card Header Bar */}
      <div className="p-5 md:p-6 border-b border-slate-100">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-mono font-bold">
              {problem.number}
            </span>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${getModuleBadgeColor(
                problem.module
              )}`}
            >
              {problem.subtopic}
            </span>
            {problem.source === 'uts-resmi' && (
              <span className="text-xs px-2 py-0.5 rounded bg-rose-600 text-white font-semibold tracking-wide uppercase">
                Arsip UTS
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
              {problem.points} Poin
            </span>
            <button
              onClick={handleCopyQuestion}
              title="Salin Rumus LaTeX"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Title & Question */}
        <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
          {problem.title}
        </h3>

        {problem.contextNote && (
          <p className="text-xs text-slate-500 mb-3 italic">
            {problem.contextNote}
          </p>
        )}

        <div className="p-4 bg-slate-50/90 rounded-lg border border-slate-200/70 font-sans my-2">
          <MathRenderer math={problem.questionLatex} block={true} />
        </div>

        {/* Toggle Solution Button */}
        <div className="mt-4 flex items-center justify-between pt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
              isExpanded
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                : 'bg-campus-accent text-white hover:bg-blue-700 shadow-sm'
            }`}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>Tutup Pembahasan</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Buka Pembahasan Lengkap</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </>
            )}
          </button>

          {!isExpanded && (
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" />
              Coba kerjakan di kertas sebelum membuka solusi
            </span>
          )}
        </div>
      </div>

      {/* Collapsible Solution Content */}
      {isExpanded && (
        <div className="p-5 md:p-6 bg-slate-50/50 space-y-6 animate-fadeIn">
          {/* Step-by-Step Formal Breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-campus-accent" />
              LANGKAH PENYELESAIAN FORMAL (STANDAR DOSEN UMS)
            </h4>

            <div className="space-y-3.5">
              {problem.formalSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-white p-4 rounded-lg border border-slate-200/80 shadow-xs"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold font-mono">
                      {step.stepNumber}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {step.title}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 mb-2 leading-relaxed pl-7">
                    {step.explanation}
                  </p>
                  {step.mathLatex && (
                    <div className="pl-7 overflow-x-auto py-1">
                      <div className="inline-block p-2.5 bg-slate-50 rounded border border-slate-200/60 w-full text-slate-900">
                        <MathRenderer math={step.mathLatex} block={true} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Conditional Visualizers */}
          {problem.visualType === 'unit-circle' && <UnitCircleVisual />}
          {problem.visualType === 'limit-asymptote' && <LimitGraphVisual />}

          {/* Final Answer Highlight Box */}
          <div className="bg-blue-50/80 border-2 border-blue-400/80 rounded-xl p-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-900 font-bold block mb-1">
              HASIL AKHIR & KESIMPULAN
            </span>
            <div className="text-base md:text-lg font-bold text-slate-900 mb-1">
              <MathRenderer math={problem.finalAnswerLatex} block={false} />
            </div>
            <p className="text-xs text-slate-600 mt-1">
              {problem.finalAnswerText}
            </p>
          </div>

          {/* Tips & Tricks Box */}
          {problem.fastTips.length > 0 && (
            <div className="bg-emerald-50/80 border border-emerald-300 rounded-xl p-4">
              <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold mb-2 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-emerald-600" />
                TIPS & TRIK CEPAT / CARA DOSEN UMS
              </h5>
              <ul className="space-y-1.5 text-xs md:text-sm text-emerald-950">
                {problem.fastTips.map((tip, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Pitfalls Box */}
          {problem.commonPitfalls.length > 0 && (
            <div className="bg-amber-50/90 border border-amber-300 rounded-xl p-4">
              <h5 className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                JEBAKAN UMUM MAHASISWA (COMMON PITFALLS)
              </h5>
              <ul className="space-y-1.5 text-xs md:text-sm text-amber-950">
                {problem.commonPitfalls.map((pitfall, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {pitfall}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Problem Variants (if available in PPT slides) */}
          {problem.variants && problem.variants.length > 0 && (
            <div className="bg-slate-100/70 border border-slate-300 rounded-xl p-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold block mb-2">
                VARIAN SOAL SERUPA DARI SLIDE PPT
              </span>
              <div className="space-y-2">
                {problem.variants.map((v, i) => (
                  <div key={i} className="text-xs text-slate-800 bg-white p-3 rounded border border-slate-200">
                    <span className="font-semibold text-slate-600 block mb-1">{v.label}:</span>
                    <MathRenderer math={v.questionLatex} block={true} />
                    <div className="mt-1 pt-1 border-t border-slate-100 flex items-center gap-1">
                      <span className="text-slate-500 font-mono">Jawaban:</span>
                      <MathRenderer math={v.answerLatex} block={false} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
