import { Problem } from '../types/problem';

export const PROBLEMS_UTS_UMS: Problem[] = [
  {
    id: 'uts-soal-1',
    number: 16,
    source: 'uts-resmi',
    module: 'uts-resmi',
    subtopic: 'Himpunan Penyelesaian Pertidaksamaan',
    points: 25,
    title: 'Arsip UTS UMS: Pertidaksamaan Linier & Kuadrat (Soal 1)',
    questionLatex:
      '\\text{Tentukan himpunan penyelesaian dari pertidaksamaan berikut:}\n\\\\\n\\text{a) } -5 \\le 2x + 6 < 4\n\\\\\n\\text{b) } x^2 - x - 6 < 0\n\\\\\n\\text{c) } 3x^2 - x - 2 > 0',
    contextNote: 'Naskah UTS Asli UMS Gasal 2025/2026 - Soal Tipe A Nomor 1 (CPMK-1, Bobot 25 Poin).',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Penyelesaian Bagian (a): Pertidaksamaan Linier Ganda',
        explanation: 'Kurangkan 6 pada ketiga ruas, lalu bagi dengan 2:',
        mathLatex:
          '-5 - 6 \\le 2x < 4 - 6 \\implies -11 \\le 2x < -2 \\implies -\\frac{11}{2} \\le x < -1\n\\text{HP}_a = \\left[ -\\frac{11}{2}, -1 \\right) = \\{x \\in \\mathbb{R} \\mid -5.5 \\le x < -1\\}',
      },
      {
        stepNumber: 2,
        title: 'Penyelesaian Bagian (b): Pertidaksamaan Kuadrat Menghasilkan Nilai Negatif',
        explanation: 'Faktorkan persamaan kuadrat dan tentukan pembuat nol:',
        mathLatex:
          'x^2 - x - 6 < 0 \\implies (x - 3)(x + 2) < 0\n\\text{Pembuat Nol: } x = 3, \\quad x = -2\n\\text{Uji Garis Bilangan: } (x=-2 \\text{ sampai } x=3 \\text{ bernilai negatif})\n\\text{HP}_b = (-2, 3) = \\{x \\in \\mathbb{R} \\mid -2 < x < 3\\}',
      },
      {
        stepNumber: 3,
        title: 'Penyelesaian Bagian (c): Pertidaksamaan Kuadrat Menghasilkan Nilai Positif',
        explanation: 'Faktorkan $3x^2 - x - 2$ menggunakan pemfaktoran bentuk $ax^2+bx+c$:',
        mathLatex:
          '3x^2 - x - 2 > 0 \\implies (3x + 2)(x - 1) > 0\n\\text{Pembuat Nol: } x = -\\frac{2}{3}, \\quad x = 1\n\\text{Karena tanda } >, \\text{ ambil daerah luar:}\n\\text{HP}_c = \\left(-\\infty, -\\frac{2}{3}\\right) \\cup (1, \\infty) = \\{x \\in \\mathbb{R} \\mid x < -\\frac{2}{3} \\text{ atau } x > 1\\}',
      },
    ],
    finalAnswerLatex:
      '\\text{a) } \\left[ -\\frac{11}{2}, -1 \\right) \\quad \\text{b) } (-2, 3) \\quad \\text{c) } \\left(-\\infty, -\\frac{2}{3}\\right) \\cup (1, \\infty)',
    finalAnswerText: 'HP a: [-11/2, -1), HP b: (-2, 3), HP c: (-∞, -2/3) U (1, ∞).',
    fastTips: [
      '💡 Trik Tanda Pertidaksamaan Kuadrat (a > 0):\n• Jika f(x) < 0: Himpunan penyelesaian "di antara pembuat nol" (x1 < x < x2).\n• Jika f(x) > 0: Himpunan penyelesaian "di luar pembuat nol" (x < x1 atau x > x2).',
    ],
    commonPitfalls: [
      '⚠️ Perhatikan kurung siku [ vs kurung biasa (. Pada bagian (a), tanda ≤ menggunakan kurung siku [ dan tanda < menggunakan kurung biasa ).',
    ],
  },
  {
    id: 'uts-soal-2',
    number: 17,
    source: 'uts-resmi',
    module: 'uts-resmi',
    subtopic: 'Domain, Kodomain, Range & Grafik Fungsi',
    points: 25,
    title: 'Arsip UTS UMS: Domain, Range & Sketsa Parabola (Soal 2)',
    questionLatex:
      '\\text{Tentukan Domain, Kodomain, Range, dan gambarkan grafik dari fungsi berikut:}\n\\\\\n\\text{a) } y = x^2 + 5x + 6\n\\\\\n\\text{b) } y = 2x^2 - 5x - 3',
    visualType: 'parabola',
    contextNote: 'Naskah UTS Asli UMS Gasal 2025/2026 - Soal Tipe A Nomor 2 (Bobot 25 Poin).',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Analisis Fungsi (a): $y = x^2 + 5x + 6$',
        explanation: 'Fungsi kuadrat dengan $a = 1, b = 5, c = 6$. Karena parabola terbuka ke atas ($a > 0$):',
        mathLatex:
          '\\text{Domain } (D_f) = \\mathbb{R} = (-\\infty, \\infty)\n\\text{Kodomain } (K_f) = \\mathbb{R}\n\\text{Titik Puncak: } x_p = -\\frac{b}{2a} = -\\frac{5}{2} = -2.5\ny_p = f(-2.5) = (-2.5)^2 + 5(-2.5) + 6 = 6.25 - 12.5 + 6 = -0.25 = -\\frac{1}{4}\n\\text{Titik Balik Minimum: } \\left(-\\frac{5}{2}, -\\frac{1}{4}\\right)\n\\text{Range } (R_f) = [y_p, \\infty) = \\left[-\\frac{1}{4}, \\infty\\right)',
      },
      {
        stepNumber: 2,
        title: 'Titik Potong Sumbu untuk Fungsi (a)',
        explanation: 'Titik potong sumbu-x ($y = 0$) dan sumbu-y ($x = 0$):',
        mathLatex:
          'x^2 + 5x + 6 = 0 \\implies (x + 2)(x + 3) = 0 \\implies (-2, 0) \\text{ dan } (-3, 0)\n\\text{Titik potong sumbu-y: } (0, 6)',
      },
      {
        stepNumber: 3,
        title: 'Analisis Fungsi (b): $y = 2x^2 - 5x - 3$',
        explanation: 'Fungsi kuadrat dengan $a = 2, b = -5, c = -3$:',
        mathLatex:
          'D_f = \\mathbb{R}, \\quad K_f = \\mathbb{R}\nx_p = -\\frac{-5}{2(2)} = \\frac{5}{4} = 1.25\ny_p = 2(1.25)^2 - 5(1.25) - 3 = 2(1.5625) - 6.25 - 3 = -6.125 = -\\frac{49}{8}\n\\text{Range } (R_f) = \\left[-\\frac{49}{8}, \\infty\\right)\n\\text{Titik Potong sumbu-x: } (2x + 1)(x - 3) = 0 \\implies \\left(-\\frac{1}{2}, 0\\right) \\text{ dan } (3, 0)',
      },
    ],
    finalAnswerLatex:
      '\\text{a) } D_f = \\mathbb{R}, \\, R_f = \\left[-\\frac{1}{4}, \\infty\\right), \\, P\\left(-\\frac{5}{2}, -\\frac{1}{4}\\right) \\quad \\text{b) } D_f = \\mathbb{R}, \\, R_f = \\left[-\\frac{49}{8}, \\infty\\right), \\, P\\left(\\frac{5}{4}, -\\frac{49}{8}\\right)',
    finalAnswerText: 'Fungsi a: Domain R, Range [-1/4, ∞), Titik minimum (-2.5, -0.25). Fungsi b: Domain R, Range [-49/8, ∞), Titik minimum (1.25, -6.125).',
    fastTips: [
      '💡 Rumus Ordinat Puncak (yp): yp = -D / (4a) = -(b² - 4ac)/(4a). Untuk fungsi a: -(25 - 24)/4 = -1/4! Jadi Range langsung [-1/4, ∞).',
    ],
    commonPitfalls: [
      '⚠️ Jangan lupa menggambar sketsa parabola dengan mencantumkan minimal 3 titik utama: 2 titik potong sumbu-x dan 1 titik puncak!',
    ],
  },
  {
    id: 'uts-soal-3',
    number: 18,
    source: 'uts-resmi',
    module: 'uts-resmi',
    subtopic: 'Limit Aljabar Suku Tinggi',
    points: 25,
    title: 'Arsip UTS UMS: Limit Aljabar Suku Tinggi & Variabel Simbolik (Soal 3)',
    questionLatex:
      '\\text{Temukan nilai limit berikut ini:}\n\\\\\n\\text{a) } \\lim_{x \\to 2} \\left( \\frac{7x^5 - 10x^4 - 13x + 6}{3x^2 - 6x - 8} \\right)\n\\\\\n\\text{b) } \\lim_{t \\to -1} \\frac{t^2 + t}{t^2 + 1}\n\\\\\n\\text{c) } \\lim_{x \\to 3} \\frac{x^2 - 2x - 3}{x - 3}\n\\\\\n\\text{d) } \\lim_{x \\to \\pi} \\frac{2x^2 - 6x\\pi + 4\\pi^2}{x^2 - \\pi^2}',
    contextNote: 'Naskah UTS Asli UMS Gasal 2025/2026 - Soal Tipe A Nomor 3 (Bobot 25 Poin).',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Penyelesaian Bagian (a): Evaluasi Substitusi Polinomial',
        explanation: 'Cek penyebut saat $x = 2$: $3(2)^2 - 6(2) - 8 = 12 - 12 - 8 = -8 \\neq 0$. Karena penyebut tidak nol, cukup substitusi langsung:',
        mathLatex:
          '\\text{Pembilang: } 7(2)^5 - 10(2)^4 - 13(2) + 6 = 7(32) - 10(16) - 26 + 6 = 224 - 160 - 26 + 6 = 44\n\\text{Penyebut: } 3(4) - 12 - 8 = -8\n\\lim_{x \\to 2} = \\frac{44}{-8} = -\\frac{11}{2} = -5.5',
      },
      {
        stepNumber: 2,
        title: 'Penyelesaian Bagian (b): Limit Terdefinisi dengan Nilai Nol',
        explanation: 'Substitusi $t = -1$:',
        mathLatex:
          '\\lim_{t \\to -1} \\frac{(-1)^2 + (-1)}{(-1)^2 + 1} = \\frac{1 - 1}{1 + 1} = \\frac{0}{2} = 0',
      },
      {
        stepNumber: 3,
        title: 'Penyelesaian Bagian (c): Bentuk Tak Tentu 0/0',
        explanation: 'Substitusi $x = 3$ menghasilkan $\\frac{0}{0}$. Faktorkan pembilang:',
        mathLatex:
          '\\lim_{x \\to 3} \\frac{(x - 3)(x + 1)}{x - 3} = \\lim_{x \\to 3} (x + 1) = 3 + 1 = 4',
      },
      {
        stepNumber: 4,
        title: 'Penyelesaian Bagian (d): Variabel Simbolik $\\pi$',
        explanation: 'Substitusi $x = \\pi$ menghasilkan $\\frac{0}{0}$. Faktorkan kedua suku:',
        mathLatex:
          '2x^2 - 6x\\pi + 4\\pi^2 = 2(x^2 - 3x\\pi + 2\\pi^2) = 2(x - \\pi)(x - 2\\pi)\nx^2 - \\pi^2 = (x - \\pi)(x + \\pi)\n\\lim_{x \\to \\pi} \\frac{2(x - \\pi)(x - 2\\pi)}{(x - \\pi)(x + \\pi)} = \\frac{2(\\pi - 2\\pi)}{\\pi + \\pi} = \\frac{2(-\\pi)}{2\\pi} = \\frac{-2\\pi}{2\\pi} = -1',
      },
    ],
    finalAnswerLatex:
      '\\text{a) } -\\frac{11}{2} \\quad \\text{b) } 0 \\quad \\text{c) } 4 \\quad \\text{d) } -1',
    finalAnswerText: 'a: -11/2 (-5.5), b: 0, c: 4, d: -1.',
    fastTips: [
      '💡 Trik Soal (a): Banyak mahasiswa panik mengira suku derajat 5 harus difaktorkan Horner! Padahal penyebutnya TIDAK bernilai 0, sehingga langsung substitusi biasa.',
      '💡 Trik Soal (d): Anggap π seperti konstanta angka biasa (seperti konstanta c). Maka 2x² - 6cx + 4c² = 2(x - c)(x - 2c).',
    ],
    commonPitfalls: [
      '⚠️ Pada soal (b), 0/2 adalah 0 (terdefinisi!), bukan bentuk tak tentu. Bentuk tak tentu hanya 0/0.',
    ],
  },
  {
    id: 'uts-soal-4',
    number: 19,
    source: 'uts-resmi',
    module: 'uts-resmi',
    subtopic: 'Limit Trigonometri Lanjutan',
    points: 25,
    title: 'Arsip UTS UMS: Limit Trigonometri Manipulasi Aljabar (Soal 4)',
    questionLatex:
      '\\text{Temukan limit trigonometri berikut ini:}\n\\\\\n\\text{a) } \\lim_{t \\to 0} \\frac{\\cos^2 t}{1 + \\sin t}\n\\\\\n\\text{b) } \\lim_{\\theta \\to 0} \\frac{\\tan 5\\theta}{\\sin 3\\theta}\n\\\\\n\\text{c) } \\lim_{\\theta \\to \\pi/2} \\theta \\cos \\theta\n\\\\\n\\text{d) } \\lim_{t \\to 0} \\frac{\\sin 3t + 4t}{t \\sec t}',
    contextNote: 'Naskah UTS Asli UMS Gasal 2025/2026 - Soal Tipe A Nomor 4 (Bobot 25 Poin).',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Penyelesaian Bagian (a): Evaluasi Substitusi Langsung',
        explanation: 'Substitusi $t = 0$:',
        mathLatex:
          '\\lim_{t \\to 0} \\frac{\\cos^2(0)}{1 + \\sin(0)} = \\frac{1^2}{1 + 0} = \\frac{1}{1} = 1',
      },
      {
        stepNumber: 2,
        title: 'Penyelesaian Bagian (b): Rasio Tangen dan Sinus',
        explanation: 'Gunakan teorema limit trigonometri $\\lim_{u \\to 0} \\frac{\\tan au}{\\sin bu} = \\frac{a}{b}$:',
        mathLatex:
          '\\lim_{\\theta \\to 0} \\frac{\\tan 5\\theta}{\\sin 3\\theta} = \\lim_{\\theta \\to 0} \\left( \\frac{\\tan 5\\theta}{5\\theta} \\cdot \\frac{3\\theta}{\\sin 3\\theta} \\cdot \\frac{5}{3} \\right) = (1) \\cdot (1) \\cdot \\frac{5}{3} = \\frac{5}{3}',
      },
      {
        stepNumber: 3,
        title: 'Penyelesaian Bagian (c): Substitusi Sudut Kuadran $\\pi/2$',
        explanation: 'Substitusi $\\theta = \\frac{\\pi}{2}$:',
        mathLatex:
          '\\lim_{\\theta \\to \\pi/2} \\theta \\cos \\theta = \\frac{\\pi}{2} \\cos\\left(\\frac{\\pi}{2}\\right) = \\frac{\\pi}{2} \\cdot (0) = 0',
      },
      {
        stepNumber: 4,
        title: 'Penyelesaian Bagian (d): Manipulasi $\\sec t = 1/\\cos t$',
        explanation: 'Ubah penyebut $t \\sec t = \\frac{t}{\\cos t}$ sehingga $\\cos t$ naik ke pembilang:',
        mathLatex:
          '\\lim_{t \\to 0} \\frac{\\sin 3t + 4t}{t \\sec t} = \\lim_{t \\to 0} \\left( \\frac{\\sin 3t + 4t}{t} \\cdot \\cos t \\right) = \\lim_{t \\to 0} \\left( \\frac{\\sin 3t}{t} + \\frac{4t}{t} \\right) \\cos t\n= (3 + 4) \\cdot \\cos(0) = 7 \\cdot 1 = 7',
      },
    ],
    finalAnswerLatex:
      '\\text{a) } 1 \\quad \\text{b) } \\frac{5}{3} \\quad \\text{c) } 0 \\quad \\text{d) } 7',
    finalAnswerText: 'a: 1, b: 5/3, c: 0, d: 7.',
    fastTips: [
      '💡 Trik Soal (d): Pecah pembilangnya per t! sin(3t)/t -> 3, dan 4t/t -> 4. Jumlahkan = 3 + 4 = 7. Karena sec(0) = 1, hasilnya langsung 7/1 = 7.',
    ],
    commonPitfalls: [
      '⚠️ Pada soal (a), jangan terburu-buru mengubah cos²t menjadi 1 - sin²t lalu mencoret (1+sin t). Walaupun hasilnya sama 1 - sin(0) = 1, substitusi langsung jauh lebih cepat dan tidak membuang waktu.',
    ],
  },
];
