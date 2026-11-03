import { FormulaItem } from '../types/problem';

export const FORMULA_LIST: FormulaItem[] = [
  // Sifat Dasar Trigonometri
  {
    category: 'Trigonometri Dasar',
    name: 'Definisi Tangen & Kotangen',
    formulaLatex: '\\tan t = \\frac{\\sin t}{\\cos t}, \\quad \\cot t = \\frac{\\cos t}{\\sin t}',
  },
  {
    category: 'Trigonometri Dasar',
    name: 'Definisi Sekan & Kosekan',
    formulaLatex: '\\sec t = \\frac{1}{\\cos t}, \\quad \\csc t = \\frac{1}{\\sin t}',
  },
  {
    category: 'Identitas Pythagoras',
    name: 'Pythagoras Utama',
    formulaLatex: '\\sin^2 x + \\cos^2 x = 1',
  },
  {
    category: 'Identitas Pythagoras',
    name: 'Pythagoras Sekan & Tangen',
    formulaLatex: '1 + \\tan^2 x = \\sec^2 x',
  },
  {
    category: 'Identitas Pythagoras',
    name: 'Pythagoras Kosekan & Kotangen',
    formulaLatex: '1 + \\cot^2 x = \\csc^2 x',
  },
  {
    category: 'Sudut Negatif (Paritas)',
    name: 'Fungsi Ganjil & Genap',
    formulaLatex: '\\sin(-x) = -\\sin x, \\quad \\cos(-x) = \\cos x',
  },
  {
    category: 'Jumlah & Selisih Sudut',
    name: 'Penjumlahan Sinus',
    formulaLatex: '\\sin(x + y) = \\sin x \\cos y + \\cos x \\sin y',
  },
  {
    category: 'Jumlah & Selisih Sudut',
    name: 'Penjumlahan Kosinus',
    formulaLatex: '\\cos(x + y) = \\cos x \\cos y - \\sin x \\sin y',
  },
  {
    category: 'Sudut Ganda & Setengah Sudut',
    name: 'Reduksi Pangkat Kuadrat',
    formulaLatex: '\\sin^2 x = \\frac{1 - \\cos(2x)}{2}, \\quad \\cos^2 x = \\frac{1 + \\cos(2x)}{2}',
  },
  {
    category: 'Konversi Jumlah ke Kali',
    name: 'Jumlah Sinus',
    formulaLatex: '\\sin x + \\sin y = 2 \\sin\\left(\\frac{x+y}{2}\\right) \\cos\\left(\\frac{x-y}{2}\\right)',
  },
  {
    category: 'Konversi Jumlah ke Kali',
    name: 'Jumlah Kosinus',
    formulaLatex: '\\cos x + \\cos y = 2 \\cos\\left(\\frac{x+y}{2}\\right) \\cos\\left(\\frac{x-y}{2}\\right)',
  },
  {
    category: 'Konversi Jumlah ke Kali',
    name: 'Selisih Kosinus',
    formulaLatex: '\\cos x - \\cos y = -2 \\sin\\left(\\frac{x+y}{2}\\right) \\sin\\left(\\frac{x-y}{2}\\right)',
  },

  // Sifat-sifat Teorema Limit
  {
    category: 'Teorema Limit Utama',
    name: 'Limit Konstanta & Identitas',
    formulaLatex: '\\lim_{x \\to c} k = k, \\quad \\lim_{x \\to c} x = c',
  },
  {
    category: 'Teorema Limit Utama',
    name: 'Kelipatan Skalar',
    formulaLatex: '\\lim_{x \\to c} [k \\cdot f(x)] = k \\cdot \\lim_{x \\to c} f(x)',
  },
  {
    category: 'Teorema Limit Utama',
    name: 'Penjumlahan & Pengurangan',
    formulaLatex: '\\lim_{x \\to c} [f(x) \\pm g(x)] = \\lim_{x \\to c} f(x) \\pm \\lim_{x \\to c} g(x)',
  },
  {
    category: 'Teorema Limit Utama',
    name: 'Perkalian & Pembagian',
    formulaLatex: '\\lim_{x \\to c} [f(x) g(x)] = \\lim_{x \\to c} f(x) \\cdot \\lim_{x \\to c} g(x), \\quad \\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{\\lim f(x)}{\\lim g(x)} \\; (\\lim g(x) \\neq 0)',
  },
  {
    category: 'Limit Trigonometri',
    name: 'Limit Trigonometri Standar',
    formulaLatex: '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{x}{\\sin x} = 1',
  },
  {
    category: 'Limit Trigonometri',
    name: 'Limit Tangen Standar',
    formulaLatex: '\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{x}{\\tan x} = 1',
  },
  {
    category: 'Aritmatika Modulo',
    name: 'Teorema Pembagian Euclidean',
    formulaLatex: 'a = m \\cdot q + r \\quad \\text{dengan } 0 \\le r < m',
    note: 'r selalu non-negatif! Contoh: (-38) = 7(-6) + 4 => r = 4.',
  },
  {
    category: 'Fungsi Invers',
    name: 'Rumus Cepat Invers Rasional Linier',
    formulaLatex: 'f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}',
    note: 'Tukar posisi a dan d lalu kalikan dengan -1.',
  },
];
