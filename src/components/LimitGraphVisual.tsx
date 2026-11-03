import React from 'react';
import { MathRenderer } from './MathRenderer';

export const LimitGraphVisual: React.FC = () => {
  // SVG Canvas dimensions: 400 x 240
  // Origin (0,0) mapped to (120, 120)
  // Scale: 1 unit = 25px
  // Asymptote x = 4 mapped to x = 120 + 4 * 25 = 220
  const originX = 100;
  const originY = 120;
  const scaleX = 22;
  const scaleY = 18;

  // Asymptote at x = 4
  const asympX = originX + 4 * scaleX; // 100 + 88 = 188

  // Generate path data for left branch: x in [-2, 3.7]
  const leftPoints: string[] = [];
  for (let x = -2; x <= 3.75; x += 0.1) {
    const y = 3 / (x - 4);
    const svgX = originX + x * scaleX;
    const svgY = originY - y * scaleY;
    if (svgY >= -20 && svgY <= 260) {
      leftPoints.push(`${leftPoints.length === 0 ? 'M' : 'L'} ${svgX.toFixed(1)} ${svgY.toFixed(1)}`);
    }
  }

  // Generate path data for right branch: x in [4.25, 10]
  const rightPoints: string[] = [];
  for (let x = 4.25; x <= 11; x += 0.1) {
    const y = 3 / (x - 4);
    const svgX = originX + x * scaleX;
    const svgY = originY - y * scaleY;
    if (svgY >= -20 && svgY <= 260) {
      rightPoints.push(`${rightPoints.length === 0 ? 'M' : 'L'} ${svgX.toFixed(1)} ${svgY.toFixed(1)}`);
    }
  }

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl p-5 my-4 border border-slate-700/80 shadow-md">
      <div className="border-b border-slate-800 pb-3 mb-4">
        <span className="text-xs uppercase font-mono tracking-wider text-rose-400 font-semibold">
          Visualisasi Asimtot & Limit Sepihak
        </span>
        <h4 className="text-sm font-semibold text-white">
          Grafik Fungsi <MathRenderer math="f(x) = \frac{3}{x - 4}" className="text-rose-300 font-bold" /> Menuju <MathRenderer math="x = 4" className="text-white" />
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* SVG Graph Canvas */}
        <div className="md:col-span-7 flex justify-center">
          <svg viewBox="0 0 380 240" className="w-full max-w-[360px] aspect-[19/12] overflow-visible">
            {/* Grid Pattern */}
            <defs>
              <pattern id="graphGrid" width="22" height="18" patternUnits="userSpaceOnUse">
                <path d="M 22 0 L 0 0 0 18" fill="none" stroke="#1e293b" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="380" height="240" fill="url(#graphGrid)" rx="10" />

            {/* Axes */}
            <line x1="20" y1={originY} x2="360" y2={originY} stroke="#475569" strokeWidth="1.5" />
            <line x1={originX} y1="15" x2={originX} y2="225" stroke="#475569" strokeWidth="1.5" />
            <text x="365" y={originY + 4} fill="#94a3b8" fontSize="11" fontFamily="monospace">x</text>
            <text x={originX - 4} y="12" fill="#94a3b8" fontSize="11" fontFamily="monospace">y</text>

            {/* Origin label */}
            <text x={originX - 12} y={originY + 14} fill="#64748b" fontSize="10">0</text>

            {/* Tick at x = 4 */}
            <line x1={asympX} y1={originY - 4} x2={asympX} y2={originY + 4} stroke="#ef4444" strokeWidth="2" />
            <text x={asympX - 3} y={originY + 16} fill="#ef4444" fontSize="11" fontWeight="bold">4</text>

            {/* Vertical Asymptote Line x = 4 */}
            <line x1={asympX} y1="15" x2={asympX} y2="225" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="5 4" opacity="0.85" />
            <text x={asympX + 5} y="30" fill="#f87171" fontSize="10" fontFamily="monospace" fontWeight="bold">
              Asimtot: x = 4
            </text>

            {/* Left Branch Curve */}
            <path d={leftPoints.join(' ')} fill="none" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Right Branch Curve */}
            <path d={rightPoints.join(' ')} fill="none" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Left Limit Arrow (Approaching from left diving to -infinity) */}
            <path d={`M ${asympX - 30} ${originY + 40} L ${asympX - 10} ${originY + 80}`} fill="none" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x={asympX - 85} y={originY + 70} fill="#f43f5e" fontSize="10" fontWeight="bold" fontFamily="monospace">
              x → 4⁻ : f(x) → -∞
            </text>

            {/* Right Limit Arrow (Approaching from right climbing to +infinity) */}
            <path d={`M ${asympX + 30} ${originY - 40} L ${asympX + 10} ${originY - 80}`} fill="none" stroke="#10b981" strokeWidth="2" />
            <text x={asympX + 15} y={originY - 70} fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace">
              x → 4⁺ : f(x) → +∞
            </text>
          </svg>
        </div>

        {/* Analytical Explanation */}
        <div className="md:col-span-5 space-y-2.5 text-xs">
          <div className="p-2.5 bg-rose-950/40 border border-rose-800/60 rounded-lg">
            <span className="text-rose-300 font-bold block mb-1 font-mono">LIMIT KIRI (x → 4⁻):</span>
            <p className="text-slate-300 leading-relaxed">
              Saat <MathRenderer math="x < 4" className="text-sky-300" /> (misal <MathRenderer math="x = 3.99" className="text-sky-300" />), penyebut <MathRenderer math="(x - 4) \to 0^-" className="text-rose-400 font-bold" /> bertanda negatif, sehingga nilai <MathRenderer math="f(x) \to -\infty" className="text-rose-400 font-bold" />.
            </p>
          </div>

          <div className="p-2.5 bg-emerald-950/40 border border-emerald-800/60 rounded-lg">
            <span className="text-emerald-300 font-bold block mb-1 font-mono">LIMIT KANAN (x → 4⁺):</span>
            <p className="text-slate-300 leading-relaxed">
              Saat <MathRenderer math="x > 4" className="text-amber-300" /> (misal <MathRenderer math="x = 4.01" className="text-amber-300" />), penyebut <MathRenderer math="(x - 4) \to 0^+" className="text-emerald-400 font-bold" /> bertanda positif, sehingga nilai <MathRenderer math="f(x) \to +\infty" className="text-emerald-400 font-bold" />.
            </p>
          </div>

          <div className="p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-amber-200">
            <span className="font-bold block mb-0.5">Kesimpulan Dua Arah:</span>
            Karena <MathRenderer math="\lim_{x \to 4^-} \neq \lim_{x \to 4^+}" className="font-mono text-amber-300" />, maka limit dua arah <span className="font-bold text-white uppercase">TIDAK ADA</span> (Does Not Exist / DNE).
          </div>
        </div>
      </div>
    </div>
  );
};
