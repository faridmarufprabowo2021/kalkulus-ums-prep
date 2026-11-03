import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800 mt-16 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-sm">
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span>Kalkulus Informatika UMS • Persiapan UTS Semester 1</span>
          </div>
          <p className="max-w-md text-slate-400 leading-relaxed">
            Portal belajar mandiri komprehensif bagi mahasiswa Fakultas Komunikasi dan Informatika (FKI) Universitas Muhammadiyah Surakarta untuk menghadapi Ujian Tengah Semester Kalkulus.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <div className="flex items-center gap-1 text-slate-300">
            <span>Dibuat dengan dedikasi akademik &</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>untuk mahasiswa UMS</span>
          </div>
          <p className="text-slate-500 font-mono">
            Repositori GitHub: faridmarufprabowo2021/kalkulus-ums-prep
          </p>
          <p className="text-slate-500">
            &copy; 2026 UMS Informatika Community. Selamat Menempuh UTS!
          </p>
        </div>
      </div>
    </footer>
  );
};
