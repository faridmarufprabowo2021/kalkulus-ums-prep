import React, { useState } from 'react';
import { MathRenderer } from './MathRenderer';

export const UnitCircleVisual: React.FC = () => {
  const [activeHighlight, setActiveHighlight] = useState<'both' | 'cos' | 'sin'>('both');

  // SVG coordinate transformation:
  // Center is (180, 180), Radius is 120px
  const cx = 180;
  const cy = 180;
  const r = 120;

  // Angle: 150 deg (5pi/6)
  const angleDeg = 150;
  const angleRad = (angleDeg * Math.PI) / 180;

  // Point on circle (note: svg y goes downward)
  const px = cx + r * Math.cos(angleRad); // ~ 180 - 120 * 0.866 = 76.08
  const py = cy - r * Math.sin(angleRad); // ~ 180 - 120 * 0.5 = 120

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl p-5 my-4 border border-slate-700/80 shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold">
            Visualisasi Interaktif • Lingkaran Satuan
          </span>
          <h4 className="text-sm font-semibold text-white">
            Titik Koordinat untuk Sudut <MathRenderer math="\theta = \frac{5\pi}{6} = 150^\circ" className="text-emerald-300" />
          </h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <button
            onClick={() => setActiveHighlight('both')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeHighlight === 'both' ? 'bg-emerald-600 text-white font-medium' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setActiveHighlight('cos')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeHighlight === 'cos' ? 'bg-sky-600 text-white font-medium' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            x (Kosinus)
          </button>
          <button
            onClick={() => setActiveHighlight('sin')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeHighlight === 'sin' ? 'bg-amber-600 text-white font-medium' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            y (Sinus)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* SVG Circle Canvas */}
        <div className="md:col-span-7 flex justify-center">
          <svg viewBox="0 0 360 360" className="w-full max-w-[320px] aspect-square overflow-visible">
            {/* Background Grid */}
            <defs>
              <pattern id="circleGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="360" height="360" fill="url(#circleGrid)" rx="12" />

            {/* Axes */}
            <line x1="20" y1={cy} x2="340" y2={cy} stroke="#475569" strokeWidth="1.5" />
            <line x1={cx} y1="20" x2={cx} y2="340" stroke="#475569" strokeWidth="1.5" />
            <text x="345" y={cy + 4} fill="#94a3b8" fontSize="12" fontFamily="monospace">x</text>
            <text x={cx - 4} y="15" fill="#94a3b8" fontSize="12" fontFamily="monospace">y</text>

            {/* Unit Circle (r = 120) */}
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.6" />

            {/* Angle Arc */}
            <path
              d={`M ${cx + 35} ${cy} A 35 35 0 0 0 ${cx + 35 * Math.cos(angleRad)} ${cy - 35 * Math.sin(angleRad)}`}
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
            />
            <text x={cx - 15} y={cy - 18} fill="#34d399" fontSize="11" fontWeight="bold">
              150°
            </text>

            {/* Radius line from origin to point */}
            <line x1={cx} y1={cy} x2={px} y2={py} stroke="#10b981" strokeWidth="2.5" />

            {/* Projection line to x-axis */}
            <line
              x1={px}
              y1={py}
              x2={px}
              y2={cy}
              stroke="#38bdf8"
              strokeWidth={activeHighlight === 'cos' || activeHighlight === 'both' ? '2.5' : '1'}
              strokeDasharray="4 3"
              opacity={activeHighlight === 'sin' ? '0.2' : '1'}
            />

            {/* Projection line to y-axis */}
            <line
              x1={px}
              y1={py}
              x2={cx}
              y2={py}
              stroke="#fbbf24"
              strokeWidth={activeHighlight === 'sin' || activeHighlight === 'both' ? '2.5' : '1'}
              strokeDasharray="4 3"
              opacity={activeHighlight === 'cos' ? '0.2' : '1'}
            />

            {/* Right-angle marker */}
            <rect x={px} y={cy - 12} width="12" height="12" fill="none" stroke="#64748b" strokeWidth="1" />

            {/* Origin Dot */}
            <circle cx={cx} cy={cy} r="3" fill="#cbd5e1" />

            {/* Target Coordinate Point */}
            <circle cx={px} cy={py} r="6" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />

            {/* Point Label */}
            <text x={px - 65} y={py - 12} fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="monospace">
              (-√3/2, 1/2)
            </text>
          </svg>
        </div>

        {/* Analytical Explanation */}
        <div className="md:col-span-5 space-y-3 text-xs leading-relaxed">
          <div className="bg-slate-800/80 rounded-lg p-3 border border-slate-700">
            <span className="text-slate-400 font-mono block mb-1">PROYEKSI SUMBU-X (ABSIS)</span>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">x = cos(150°) =</span>
              <span className="font-bold text-sky-400 font-mono text-sm">-√3 / 2 ≈ -0.866</span>
            </div>
          </div>

          <div className="bg-slate-800/80 rounded-lg p-3 border border-slate-700">
            <span className="text-slate-400 font-mono block mb-1">PROYEKSI SUMBU-Y (ORDINAT)</span>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">y = sin(150°) =</span>
              <span className="font-bold text-amber-400 font-mono text-sm">+1 / 2 = 0.5</span>
            </div>
          </div>

          <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-lg text-emerald-200">
            <span className="font-semibold block mb-0.5">📌 Aturan Kuadran II (90° - 180°):</span>
            Nilai absis <span className="text-sky-300 font-mono">x &lt; 0</span> (ke arah kiri), nilai ordinat <span className="text-amber-300 font-mono">y &gt; 0</span> (ke arah atas).
          </div>
        </div>
      </div>
    </div>
  );
};
