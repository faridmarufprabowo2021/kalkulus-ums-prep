import React from 'react';
import { BookOpen, GraduationCap, Award, BookMarked, Github, Calculator } from 'lucide-react';

interface HeaderProps {
  onOpenFormulas: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenFormulas }) => {
  return (
    <header className="bg-campus-navy text-white border-b border-slate-800 shadow-lg">
      {/* Top Notification Bar */}
      <div className="bg-blue-950/80 border-b border-blue-900/60 py-2 px-4 text-xs font-mono text-blue-200">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>UNIVERSITAS MUHAMMADIYAH SURAKARTA • FAKULTAS KOMUNIKASI DAN INFORMATIKA</span>
          </div>
          <div className="text-slate-400">
            Dosen Penguji: Diah Priyawati, S.T., M.Eng & Helmi Imaduddin, S.Kom., M.Eng
          </div>
        </div>
      </div>

      {/* Main Hero Header */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-medium">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Program Studi Informatika • Semester 1</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Portal Latihan & Pembahasan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300">
                UTS Kalkulus Semester 1 UMS
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Panduan belajar komprehensif membedah <strong>15 Soal Latihan Terstruktur</strong> (Bilangan, Trigonometri, Invers, Modulo, Limit & Kontinuitas) dan <strong>Bank Soal Asli UTS UMS 2025/2026</strong> lengkap dengan notasi formal $\LaTeX$, tips & trik cepat dosen, serta analisis jebakan ujian.
            </p>
          </div>

          {/* Quick Action Button Box */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
            <button
              onClick={onOpenFormulas}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all border border-blue-400/30"
            >
              <BookMarked className="w-4 h-4" />
              <span>Lembar Rumus UMS</span>
            </button>

            <a
              href="https://github.com/faridmarufprabowo2021/kalkulus-ums-prep"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-all border border-slate-700"
            >
              <Github className="w-4 h-4 text-slate-400" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Highlight Stats Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-800/80 text-xs">
          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/60">
            <span className="text-slate-400 block font-mono">TOTAL SOAL LATIHAN</span>
            <div className="text-lg font-bold text-white flex items-center gap-1.5 mt-0.5">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>15 Soal + Varian</span>
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/60">
            <span className="text-slate-400 block font-mono">ARSIP UTS RESMI</span>
            <div className="text-lg font-bold text-rose-400 flex items-center gap-1.5 mt-0.5">
              <Award className="w-4 h-4 text-rose-400" />
              <span>4 Set Esai UTS</span>
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/60">
            <span className="text-slate-400 block font-mono">BOBOT LATIHAN</span>
            <div className="text-lg font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>250 Poin Penuh</span>
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/60">
            <span className="text-slate-400 block font-mono">STANDAR PENILAIAN</span>
            <div className="text-lg font-bold text-amber-400 flex items-center gap-1.5 mt-0.5">
              <span>CPMK 1 & CPMK 2</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
