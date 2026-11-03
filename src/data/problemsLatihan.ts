import { Problem } from '../types/problem';

export const PROBLEMS_LATIHAN: Problem[] = [
  {
    id: 'soal-1',
    number: 1,
    source: 'latihan-ppt',
    module: 'bilangan',
    subtopic: 'Radikal & Sifat Bilangan Riil',
    points: 10,
    title: 'Penyederhanaan Bentuk Akar & Rasionalitas',
    questionLatex:
      '\\text{Sederhanakan bentuk berikut dan tentukan apakah hasil akhirnya merupakan bilangan rasional atau irasional:}\n\\frac{\\sqrt{72} - \\sqrt{18}}{\\sqrt{2}} + (\\sqrt{5} + \\sqrt{3})(\\sqrt{5} - \\sqrt{3})',
    contextNote: 'Materi dasar sistem bilangan riil. Menguji sifat aljabar bentuk akar dan identitas aljabar selisih kuadrat.',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Sederhanakan bagian pecahan radikal',
        explanation: 'Faktorkan bilangan di dalam akar menjadi perkalian kuadrat sempurna dengan faktor 2:',
        mathLatex:
          '\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}, \\quad \\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}\n\\frac{\\sqrt{72} - \\sqrt{18}}{\\sqrt{2}} = \\frac{6\\sqrt{2} - 3\\sqrt{2}}{\\sqrt{2}} = \\frac{3\\sqrt{2}}{\\sqrt{2}} = 3',
      },
      {
        stepNumber: 2,
        title: 'Sederhanakan perkalian sekawan (selisih kuadrat)',
        explanation: 'Gunakan identitas aljabar $(a+b)(a-b) = a^2 - b^2$ pada suku kedua:',
        mathLatex:
          '(\\sqrt{5} + \\sqrt{3})(\\sqrt{5} - \\sqrt{3}) = (\\sqrt{5})^2 - (\\sqrt{3})^2 = 5 - 3 = 2',
      },
      {
        stepNumber: 3,
        title: 'Jumlahkan kedua hasil dan tentukan rasionalitas',
        explanation: 'Gabungkan kedua suku yang telah disederhanakan:',
        mathLatex:
          '\\text{Hasil Akhir} = 3 + 2 = 5',
      },
    ],
    finalAnswerLatex: '5 \\quad (\\text{Bilangan Rasional}, 5 \\in \\mathbb{Q})',
    finalAnswerText: 'Hasil akhir adalah 5, yang merupakan bilangan rasional karena dapat dinyatakan dalam bentuk p/q = 5/1.',
    fastTips: [
      '💡 Trik Cepat Pembagian Akar: Bagi langsung angka di dalam akar dengan penyebut: √(72/2) - √(18/2) = √36 - √9 = 6 - 3 = 3.',
      '💡 Rumus Cepat Sekawan: (√a + √b)(√a - √b) langsung sama dengan a - b = 5 - 3 = 2.',
    ],
    commonPitfalls: [
      '⚠️ Jangan mengalikan suku (√5 + √3)(√5 - √3) secara distributif satu per satu karena rawan salah tanda minus.',
      '⚠️ Pastikan menuliskan kesimpulan "Rasional" atau "Irasional" karena pada ujian UMS ada bobot nilai tersendiri untuk kesimpulan.',
    ],
    variants: [
      {
        label: 'Varian Slide PPT #2',
        questionLatex: '\\frac{\\sqrt{50} - \\sqrt{8}}{\\sqrt{2}} + (\\sqrt{6} + \\sqrt{2})(\\sqrt{6} - \\sqrt{2})',
        answerLatex: '3 + (6 - 2) = 7 \\quad (\\text{Rasional})',
      },
    ],
  },
  {
    id: 'soal-2',
    number: 2,
    source: 'latihan-ppt',
    module: 'bilangan',
    subtopic: 'Pembuktian Bilangan Irasional',
    points: 10,
    title: 'Penjumlahan Radikal & Analisis Irasionalitas',
    questionLatex:
      '\\text{Diketahui } p = \\sqrt{12} + \\sqrt{27}. \\\\\n\\text{Tentukan apakah } p \\text{ merupakan bilangan rasional atau irasional. Jelaskan alasanmu!}',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Faktorkan masing-masing bentuk akar',
        explanation: 'Ubah ke bentuk $k\\sqrt{m}$ dengan mengeluarkan kuadrat sempurna:',
        mathLatex:
          '\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}\n\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}',
      },
      {
        stepNumber: 2,
        title: 'Jumlahkan radikal yang sejenis',
        explanation: 'Karena radikalnya sama-sama $\\sqrt{3}$, jumlahkan koefisiennya:',
        mathLatex:
          'p = 2\\sqrt{3} + 3\\sqrt{3} = (2 + 3)\\sqrt{3} = 5\\sqrt{3}',
      },
      {
        stepNumber: 3,
        title: 'Buktikan sifat irasionalitas',
        explanation: 'Gunakan teorema aljabar bilangan riil: perkalian bilangan rasional bukan nol dengan bilangan irasional selalu menghasilkan bilangan irasional.',
        mathLatex:
          '5 \\in \\mathbb{Q} \\setminus \\{0\\}, \\quad \\sqrt{3} \\notin \\mathbb{Q} \\implies 5\\sqrt{3} \\notin \\mathbb{Q}',
      },
    ],
    finalAnswerLatex: 'p = 5\\sqrt{3} \\quad (\\text{Bilangan Irasional}, p \\notin \\mathbb{Q})',
    finalAnswerText: 'p = 5√3 merupakan bilangan irasional karena √3 tidak dapat dinyatakan sebagai p/q pecahan bilangan bulat.',
    fastTips: [
      '💡 Cari faktor kuadrat terbesar: 12 = 4 × 3 dan 27 = 9 × 3. Keduanya berakar pada √3, sehingga langsung: 2√3 + 3√3 = 5√3.',
    ],
    commonPitfalls: [
      '⚠️ Kesalahan fatal mahasiswa: Menuliskan √(12 + 27) = √39! Ingat bahwa √(a) + √(b) ≠ √(a + b).',
    ],
    variants: [
      {
        label: 'Varian Slide PPT #3',
        questionLatex: 'p = \\sqrt{20} + \\sqrt{45}',
        answerLatex: 'p = 2\\sqrt{5} + 3\\sqrt{5} = 5\\sqrt{5} \\quad (\\text{Irasional})',
      },
    ],
  },
  {
    id: 'soal-3',
    number: 3,
    source: 'latihan-ppt',
    module: 'trigonometri',
    subtopic: 'Sudut Istimewa',
    points: 10,
    title: 'Evaluasi Nilai Eksak Sudut Istimewa',
    questionLatex:
      '\\text{Tentukan nilai dari: } \\sin 60^\\circ + \\cos 45^\\circ \\tan 30^\\circ',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Tuliskan nilai eksak masing-masing perbandingan trigonometri',
        explanation: 'Ambil dari tabel sudut istimewa kuadran I:',
        mathLatex:
          '\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}, \\quad \\cos 45^\\circ = \\frac{\\sqrt{2}}{2}, \\quad \\tan 30^\\circ = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}',
      },
      {
        stepNumber: 2,
        title: 'Hitung perkalian suku kedua',
        explanation: 'Kalikan $\\cos 45^\\circ$ dengan $\\tan 30^\\circ$:',
        mathLatex:
          '\\cos 45^\\circ \\cdot \\tan 30^\\circ = \\frac{\\sqrt{2}}{2} \\times \\frac{\\sqrt{3}}{3} = \\frac{\\sqrt{6}}{6}',
      },
      {
        stepNumber: 3,
        title: 'Samakan penyebut untuk penjumlahan',
        explanation: 'KPK dari 2 dan 6 adalah 6:',
        mathLatex:
          '\\sin 60^\\circ + \\cos 45^\\circ \\tan 30^\\circ = \\frac{3\\sqrt{3}}{6} + \\frac{\\sqrt{6}}{6} = \\frac{3\\sqrt{3} + \\sqrt{6}}{6}',
      },
    ],
    finalAnswerLatex: '\\frac{3\\sqrt{3} + \\sqrt{6}}{6} \\approx 1.2743',
    finalAnswerText: 'Nilai eksak adalah (3√3 + √6)/6.',
    fastTips: [
      '💡 Trik Hafalan Jari Trigonometri: Sinus berjalan 0, 1/2, 1/2√2, 1/2√3, 1 pada sudut 0°, 30°, 45°, 60°, 90°.',
    ],
    commonPitfalls: [
      '⚠️ Jangan pernah menjumlahkan 3√3 + √6 menjadi 3√9 atau √15. Bentuk akar tak sejenis tidak bisa dijumlahkan langsung.',
    ],
    variants: [
      {
        label: 'Varian Slide PPT #4',
        questionLatex: '\\sin 30^\\circ + \\cos 60^\\circ \\times \\tan 45^\\circ',
        answerLatex: '\\frac{1}{2} + \\left(\\frac{1}{2} \\times 1\\right) = \\frac{1}{2} + \\frac{1}{2} = 1',
      },
    ],
  },
  {
    id: 'soal-4',
    number: 4,
    source: 'latihan-ppt',
    module: 'trigonometri',
    subtopic: 'Konversi Satuan Sudut',
    points: 10,
    title: 'Konversi Sudut Radian ke Derajat',
    questionLatex:
      '\\text{Ubahlah sudut } \\frac{7\\pi}{6} \\text{ radian menjadi derajat.}',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Gunakan faktor konversi radian ke derajat',
        explanation: 'Karena $\\pi \\text{ radian} = 180^\\circ$, maka $1 \\text{ rad} = \\frac{180^\\circ}{\\pi}$:',
        mathLatex:
          '\\theta^\\circ = \\theta_{\\text{rad}} \\times \\frac{180^\\circ}{\\pi}',
      },
      {
        stepNumber: 2,
        title: 'Substitusi dan sederhanakan pecahan',
        explanation: 'Coret $\\pi$ pada pembilang dan penyebut:',
        mathLatex:
          '\\theta = \\frac{7\\pi}{6} \\times \\frac{180^\\circ}{\\pi} = 7 \\times \\frac{180^\\circ}{6} = 7 \\times 30^\\circ = 210^\\circ',
      },
    ],
    finalAnswerLatex: '210^\\circ \\quad (\\text{Kuadran III})',
    finalAnswerText: '7π/6 radian sama dengan 210 derajat, terletak di Kuadran III.',
    fastTips: [
      '💡 Trik Kilat: Ganti langsung simbol π dengan angka 180°! Jadi 7(180°)/6 = 7 × 30° = 210° (hanya 3 detik).',
    ],
    commonPitfalls: [
      '⚠️ Jangan terbalik dengan rumus konversi derajat ke radian (yang dikalikan π/180°).',
    ],
  },
  {
    id: 'soal-5',
    number: 5,
    source: 'latihan-ppt',
    module: 'trigonometri',
    subtopic: 'Lingkaran Satuan (Unit Circle)',
    points: 15,
    title: 'Koordinat Titik pada Lingkaran Satuan',
    questionLatex:
      '\\text{Diketahui sudut } \\theta = \\frac{5\\pi}{6}. \\\\\n\\text{Tentukan koordinat titik yang bersesuaian dengan sudut tersebut pada unit circle!}',
    visualType: 'unit-circle',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Definisi koordinat pada unit circle',
        explanation: 'Setiap titik pada lingkaran satuan berpusat di $(0,0)$ dengan jari-jari $r=1$ memenuhi $(x, y) = (\\cos \\theta, \\sin \\theta)$:',
        mathLatex:
          'x = \\cos\\left(\\frac{5\\pi}{6}\\right), \\quad y = \\sin\\left(\\frac{5\\pi}{6}\\right)',
      },
      {
        stepNumber: 2,
        title: 'Tentukan posisi kuadran dan sudut relasi',
        explanation: 'Sudut $\\frac{5\\pi}{6} = 150^\\circ$ terletak di Kuadran II ($90^\\circ < \\theta < 180^\\circ$). Sudut relasi dengan sumbu-x adalah $180^\\circ - 150^\\circ = 30^\\circ$:',
        mathLatex:
          '\\cos(150^\\circ) = -\\cos(30^\\circ) = -\\frac{\\sqrt{3}}{2}\n\\sin(150^\\circ) = +\\sin(30^\\circ) = +\\frac{1}{2}',
      },
      {
        stepNumber: 3,
        title: 'Tuliskan koordinat pasangan terurut',
        explanation: 'Gabungkan nilai absis $x$ dan ordinat $y$:',
        mathLatex:
          '(x, y) = \\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)',
      },
    ],
    finalAnswerLatex: '\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)',
    finalAnswerText: 'Titik koordinat pada unit circle adalah (-√3/2, 1/2).',
    fastTips: [
      '💡 Trik Tanda Kuadran: "Semua Sindikat Tangannya Kosong" (Kuadran I: Semua +, Kuadran II: Sin +, Kuadran III: Tan +, Kuadran IV: Cos +). Di Kuadran II, cos bernilai negatif, sin positif.',
    ],
    commonPitfalls: [
      '⚠️ Lupa tanda minus pada nilai x (kosinus) di Kuadran II. Pastikan absis selalu negatif di sebelah kiri sumbu-y.',
    ],
  },
  {
    id: 'soal-6',
    number: 6,
    source: 'latihan-ppt',
    module: 'trigonometri',
    subtopic: 'Pembuktian Identitas Trigonometri',
    points: 20,
    title: 'Pembuktian Identitas Trigonometri',
    questionLatex:
      '\\text{Buktikan identitas trigonometri berikut menggunakan identitas yang telah dipelajari:}\n\\frac{\\sec^2 x - 1}{\\sec^2 x} = \\sin^2 x',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Metode 1: Pemecahan pecahan tunggal',
        explanation: 'Pecah ruas kiri menjadi dua suku dengan penyebut sama:',
        mathLatex:
          '\\text{Ruas Kiri} = \\frac{\\sec^2 x}{\\sec^2 x} - \\frac{1}{\\sec^2 x} = 1 - \\frac{1}{\\sec^2 x}',
      },
      {
        stepNumber: 2,
        title: 'Gunakan hubungan kebalikan $\\sec x = \\frac{1}{\\cos x}$',
        explanation: 'Maka $\\frac{1}{\\sec^2 x} = \\cos^2 x$:',
        mathLatex:
          '1 - \\frac{1}{\\sec^2 x} = 1 - \\cos^2 x',
      },
      {
        stepNumber: 3,
        title: 'Terapkan Identitas Pythagoras',
        explanation: 'Dari $\\sin^2 x + \\cos^2 x = 1$, diperoleh $1 - \\cos^2 x = \\sin^2 x$:',
        mathLatex:
          '1 - \\cos^2 x = \\sin^2 x = \\text{Ruas Kanan (Terbukti!)}',
      },
    ],
    finalAnswerLatex: '\\text{Terbukti bahwa } \\frac{\\sec^2 x - 1}{\\sec^2 x} = \\sin^2 x',
    finalAnswerText: 'Terbukti valid menggunakan identitas Pythagoras dan sifat kebalikan trigonometri.',
    fastTips: [
      '💡 Trik 2 Baris: sec²x - 1 = tan²x. Maka ruas kiri = tan²x / sec²x = (sin²x/cos²x) / (1/cos²x) = sin²x.',
    ],
    commonPitfalls: [
      '⚠️ Jangan memindahkan suku antar ruas (misal mengalikan silang ke ruas kanan) saat membuktikan identitas. Dosen UMS mewajibkan membuktikan dari satu ruas (Kiri -> Kanan atau Kanan -> Kiri).',
    ],
  },
  {
    id: 'soal-7',
    number: 7,
    source: 'latihan-ppt',
    module: 'fungsi',
    subtopic: 'Komposisi Fungsi',
    points: 10,
    title: 'Evaluasi Nilai Komposisi Fungsi',
    questionLatex:
      '\\text{Diketahui } f(x) = 2x - 3 \\text{ dan } g(x) = x^2 + 1. \\\\\n\\text{Tentukan nilai } (f \\circ g)(2)!',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Definisi komposisi fungsi pada suatu titik',
        explanation: 'Berdasarkan definisi fungsi komposisi $(f \\circ g)(x) = f(g(x))$, evaluasi fungsi bagian dalam $g(2)$ terlebih dahulu:',
        mathLatex:
          'g(2) = (2)^2 + 1 = 4 + 1 = 5',
      },
      {
        stepNumber: 2,
        title: 'Substitusi hasil $g(2)$ ke fungsi luar $f(x)$',
        explanation: 'Masukkan $x = 5$ ke dalam $f(x) = 2x - 3$:',
        mathLatex:
          '(f \\circ g)(2) = f(5) = 2(5) - 3 = 10 - 3 = 7',
      },
    ],
    finalAnswerLatex: '(f \\circ g)(2) = 7',
    finalAnswerText: 'Nilai dari (f o g)(2) adalah 7.',
    fastTips: [
      '💡 Hemat Waktu Ujian: Tidak perlu mencari rumus umum (f o g)(x) = 2(x²+1) - 3 = 2x² - 1 jika yang ditanyakan adalah nilai pada suatu angka!',
    ],
    commonPitfalls: [
      '⚠️ Jangan tertukar urutan komposisi: (f o g)(2) ≠ (g o f)(2). Jika (g o f)(2): f(2) = 2(2)-3 = 1, lalu g(1) = 1² + 1 = 2.',
    ],
  },
  {
    id: 'soal-8',
    number: 8,
    source: 'latihan-ppt',
    module: 'fungsi',
    subtopic: 'Fungsi Invers Rasional',
    points: 15,
    title: 'Pencarian Fungsi Invers Pecahan Linier',
    questionLatex:
      '\\text{Diketahui fungsi: } f(x) = \\frac{3x - 2}{x + 1}, \\quad x \\neq -1. \\\\\n\\text{Tentukan fungsi invers } f^{-1}(x)!',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Ubah ke bentuk persamaan $y = f(x)$',
        explanation: 'Tuliskan dalam variabel $y$:',
        mathLatex:
          'y = \\frac{3x - 2}{x + 1}',
      },
      {
        stepNumber: 2,
        title: 'Eliminasi penyebut dan kumpulkan suku yang memuat $x$',
        explanation: 'Kalikan kedua ruas dengan $(x + 1)$:',
        mathLatex:
          'y(x + 1) = 3x - 2 \\implies yx + y = 3x - 2\nyx - 3x = -y - 2',
      },
      {
        stepNumber: 3,
        title: 'Faktorkan $x$ dan nyatakan $x$ sebagai fungsi dari $y$',
        explanation: 'Faktorkan $x$ di ruas kiri:',
        mathLatex:
          'x(y - 3) = -(y + 2) \\implies x = \\frac{-(y + 2)}{y - 3} = \\frac{y + 2}{3 - y}',
      },
      {
        stepNumber: 4,
        title: 'Ganti variabel $y$ kembali menjadi $x$',
        explanation: 'Tuliskan fungsi invers $f^{-1}(x)$ beserta daerah asalnya:',
        mathLatex:
          'f^{-1}(x) = \\frac{-x - 2}{x - 3} = \\frac{x + 2}{3 - x}, \\quad x \\neq 3',
      },
    ],
    finalAnswerLatex: 'f^{-1}(x) = \\frac{-x - 2}{x - 3} = \\frac{x + 2}{3 - x}, \\quad x \\neq 3',
    finalAnswerText: 'Fungsi invers f^-1(x) = (-x - 2)/(x - 3) dengan domain x ≠ 3.',
    fastTips: [
      '💡 RUMUS CEPAT DOSEN UMS: Untuk f(x) = (ax + b)/(cx + d), maka f^-1(x) = (-dx + b)/(cx - a). Tukar posisi a dan d lalu kalikan -1! Di sini a=3, d=1 -> (-1x - 2)/(x - 3).',
    ],
    commonPitfalls: [
      '⚠️ Selalu cantumkan syarat penyebut tidak sama dengan nol (x ≠ 3). Dosen kalkulus sering memotong 2-3 poin jika domain invers tidak ditulis.',
    ],
  },
  {
    id: 'soal-9',
    number: 9,
    source: 'latihan-ppt',
    module: 'fungsi',
    subtopic: 'Aritmatika Modulo Euclidean',
    points: 20,
    title: 'Definisi Pembagian Modulo Bilangan Negatif',
    questionLatex:
      '\\text{Hitung nilai berikut berdasarkan definisi modulo: } (-38) \\bmod 7. \\\\\n\\text{Gunakan hubungan } a = mq + r, \\text{ dengan syarat } 0 \\le r < m!',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Identifikasi parameter $a$ dan $m$',
        explanation: 'Bilangan yang dibagi adalah $a = -38$ dan pembagi (modulus) $m = 7$. Syarat sisa adalah $0 \\le r < 7$ (sisa $r$ wajib non-negatif).',
        mathLatex:
          'a = -38, \\quad m = 7, \\quad 0 \\le r < 7',
      },
      {
        stepNumber: 2,
        title: 'Tentukan hasil bagi $q$ (quotient bulat)',
        explanation: 'Cari bilangan bulat $q$ terbesar sehingga $7 \\times q \\le -38$:',
        mathLatex:
          '7 \\times (-5) = -35 > -38 \\quad (\\text{Terlalu besar! Menghasilkan } r = -3 < 0)\n7 \\times (-6) = -42 \\le -38 \\quad (\\text{Tepat! Karena } -42 \\text{ lebih kecil dari } -38)',
      },
      {
        stepNumber: 3,
        title: 'Hitung nilai sisa $r$ dari $r = a - mq$',
        explanation: 'Masukkan $q = -6$ ke dalam hubungan pembagian:',
        mathLatex:
          'r = -38 - (7 \\times (-6)) = -38 - (-42) = -38 + 42 = 4\n\\text{Cek Syarat: } 0 \\le 4 < 7 \\quad \\text{(Memenuhi syarat!)}',
      },
    ],
    finalAnswerLatex: '(-38) \\bmod 7 = 4 \\quad (q = -6, \\, r = 4)',
    finalAnswerText: '(-38) mod 7 adalah 4 dengan q = -6 dan r = 4.',
    fastTips: [
      '💡 Trik Modulo Negatif di Pemrograman: Dalam matematika dan Python, (-38) % 7 = 4. Caranya: 38 mod 7 = 3. Maka (-38) mod 7 = 7 - 3 = 4!',
    ],
    commonPitfalls: [
      '⚠️ JEBAKAN PALING SERING DI UMS: Menjawab r = -3! Pada kalkulator smartphone atau bahasa C/C++, (-38)%7 kadang keluar -3, padahal menurut definisi teorema pembagian Euclidean yang diajarkan dosen Kalkulus/Diskrit UMS, nilai r HARUS 0 ≤ r < m.',
    ],
  },
  {
    id: 'soal-10',
    number: 10,
    source: 'latihan-ppt',
    module: 'limit',
    subtopic: 'Limit Substitusi Langsung',
    points: 10,
    title: 'Limit Fungsi Polinomial Kontinu',
    questionLatex:
      '\\text{Tentukan nilai limit berikut menggunakan substitusi langsung:}\n\\lim_{x \\to 2} (3x^2 - 5x + 4)',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Periksa sifat fungsi',
        explanation: 'Fungsi $f(x) = 3x^2 - 5x + 4$ adalah fungsi polinomial derajat 2 yang kontinu di seluruh garis bilangan riil $\\mathbb{R}$. Berdasarkan teorema limit polinomial, nilai limit sama dengan nilai fungsi di titik tersebut:',
        mathLatex:
          '\\lim_{x \\to c} f(x) = f(c)',
      },
      {
        stepNumber: 2,
        title: 'Substitusi langsung nilai $x = 2$',
        explanation: 'Hitung hasil substitusi:',
        mathLatex:
          '\\lim_{x \\to 2} (3x^2 - 5x + 4) = 3(2)^2 - 5(2) + 4 = 3(4) - 10 + 4 = 12 - 10 + 4 = 6',
      },
    ],
    finalAnswerLatex: '\\lim_{x \\to 2} (3x^2 - 5x + 4) = 6',
    finalAnswerText: 'Nilai limit adalah 6.',
    fastTips: [
      '💡 Langkah Pertama Setiap Limit: Selalu coba substitusi langsung dahulu. Jika tidak menghasilkan bentuk tak tentu (0/0 atau ∞/∞), maka hasil substitusi adalah jawaban akhirnya.',
    ],
    commonPitfalls: [
      '⚠️ Hati-hati urutan operasi pemangkatan: 3(2)² adalah 3 × 4 = 12, bukan (3 × 2)² = 36.',
    ],
  },
  {
    id: 'soal-11',
    number: 11,
    source: 'latihan-ppt',
    module: 'limit',
    subtopic: 'Limit Bentuk Tak Tentu 0/0',
    points: 15,
    title: 'Penyelesaian Limit Bentuk Tak Tentu dengan Faktorisasi',
    questionLatex:
      '\\text{Tentukan nilai limit berikut dengan menyederhanakan bentuk aljabarnya terlebih dahulu:}\n\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - 5x + 6}',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Uji substitusi langsung awal',
        explanation: 'Cek nilai saat $x = 3$:',
        mathLatex:
          '\\frac{3^2 - 9}{3^2 - 5(3) + 6} = \\frac{9 - 9}{9 - 15 + 6} = \\frac{0}{0} \\quad (\\text{Bentuk Tak Tentu})',
      },
      {
        stepNumber: 2,
        title: 'Faktorkan pembilang dan penyebut',
        explanation: 'Kedua suku memiliki faktor pembuat nol $(x - 3)$:',
        mathLatex:
          'x^2 - 9 = (x - 3)(x + 3)\nx^2 - 5x + 6 = (x - 3)(x - 2)',
      },
      {
        stepNumber: 3,
        title: 'Eliminasi faktor pembuat nol dan substitusi',
        explanation: 'Coret faktor $(x - 3)$ untuk $x \\neq 3$:',
        mathLatex:
          '\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{(x - 3)(x - 2)} = \\lim_{x \\to 3} \\frac{x + 3}{x - 2} = \\frac{3 + 3}{3 - 2} = \\frac{6}{1} = 6',
      },
    ],
    finalAnswerLatex: '\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - 5x + 6} = 6',
    finalAnswerText: 'Nilai limit adalah 6.',
    fastTips: [
      '💡 Trik Cek Cepat (L\'Hopital): Turunkan atas dan bawah -> d/dx(x² - 9) = 2x, d/dx(x² - 5x + 6) = 2x - 5. Masukkan x = 3: 2(3) / (2(3) - 5) = 6 / 1 = 6!',
    ],
    commonPitfalls: [
      '⚠️ Jangan lupa tetap menuliskan simbol "lim" sampai nilai x benar-benar disubstitusikan ke fungsi yang sudah disederhanakan.',
    ],
  },
  {
    id: 'soal-12',
    number: 12,
    source: 'latihan-ppt',
    module: 'limit',
    subtopic: 'Limit Trigonometri Dasar',
    points: 15,
    title: 'Limit Fungsi Trigonometri Mendekati Nol',
    questionLatex:
      '\\text{Tentukan nilai limit fungsi trigonometri berikut. Sudut dinyatakan dalam radian:}\n\\lim_{x \\to 0} \\frac{\\sin 4x}{2x}',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Gunakan teorema limit trigonometri standar',
        explanation: 'Teorema dasar menyatakan $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$. Manipulasi argumen penyebut agar sama dengan argumen sinus ($4x$):',
        mathLatex:
          '\\lim_{x \\to 0} \\frac{\\sin 4x}{2x} = \\lim_{x \\to 0} \\left( \\frac{\\sin 4x}{4x} \\cdot \\frac{4}{2} \\right)',
      },
      {
        stepNumber: 2,
        title: 'Terapkan sifat kelipatan konstanta limit',
        explanation: 'Keluarkan konstanta $\\frac{4}{2} = 2$ ke depan limit:',
        mathLatex:
          '= 2 \\cdot \\lim_{x \\to 0} \\frac{\\sin 4x}{4x} = 2 \\cdot (1) = 2',
      },
    ],
    finalAnswerLatex: '\\lim_{x \\to 0} \\frac{\\sin 4x}{2x} = 2',
    finalAnswerText: 'Nilai limit trigonometri adalah 2.',
    fastTips: [
      '💡 Rumus Kilat Limit Sinus & Tangen: lim (x->0) sin(ax)/bx = a/b. Di sini a=4, b=2 -> 4/2 = 2 (selesai dalam 1 detik).',
    ],
    commonPitfalls: [
      '⚠️ Rumus kilat a/b HANYA berlaku jika x mendekati 0! Jangan gunakan rumus ini jika x mendekati angka lain seperti π/2 atau tak hingga.',
    ],
  },
  {
    id: 'soal-13',
    number: 13,
    source: 'latihan-ppt',
    module: 'limit',
    subtopic: 'Limit di Tak Hingga',
    points: 20,
    title: 'Limit Fungsi Rasional di Tak Hingga (+∞)',
    questionLatex:
      '\\text{Tentukan nilai limit berikut dengan menunjukkan langkah penyelesaiannya:}\n\\lim_{x \\to +\\infty} \\frac{5x^2 - 3x + 2}{2x^2 + 7x - 1}',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Identifikasi derajat pangkat tertinggi penyebut',
        explanation: 'Pangkat tertinggi penyebut adalah $x^2$. Bagi setiap suku pembilang dan penyebut dengan $x^2$:',
        mathLatex:
          '\\lim_{x \\to +\\infty} \\frac{\\frac{5x^2}{x^2} - \\frac{3x}{x^2} + \\frac{2}{x^2}}{\\frac{2x^2}{x^2} + \\frac{7x}{x^2} - \\frac{1}{x^2}} = \\lim_{x \\to +\\infty} \\frac{5 - \\frac{3}{x} + \\frac{2}{x^2}}{2 + \\frac{7}{x} - \\frac{1}{x^2}}',
      },
      {
        stepNumber: 2,
        title: 'Terapkan teorema limit tak hingga $\\lim_{x \\to \\infty} \\frac{c}{x^n} = 0$',
        explanation: 'Evaluasi masing-masing suku:',
        mathLatex:
          '= \\frac{5 - 0 + 0}{2 + 0 - 0} = \\frac{5}{2}',
      },
    ],
    finalAnswerLatex: '\\lim_{x \\to +\\infty} \\frac{5x^2 - 3x + 2}{2x^2 + 7x - 1} = \\frac{5}{2} = 2.5',
    finalAnswerText: 'Nilai limit adalah 5/2.',
    fastTips: [
      '💡 Trik Derajat Polinomial:\n• Jika derajat atas = derajat bawah: Hasilnya rasio koefisien tertinggi = 5/2.\n• Jika derajat atas < derajat bawah: Hasilnya 0.\n• Jika derajat atas > derajat bawah: Hasilnya ±∞.',
    ],
    commonPitfalls: [
      '⚠️ Pada ujian esai UMS, menuliskan jawaban langsung 5/2 tanpa membagi suku per suku dengan x² dapat mengurangi nilai 5-10 poin. Tuliskan langkah pembagian formal.',
    ],
  },
  {
    id: 'soal-14',
    number: 14,
    source: 'latihan-ppt',
    module: 'limit',
    subtopic: 'Limit Sepihak & Asimtot',
    points: 20,
    title: 'Limit Kiri, Limit Kanan, dan Limit Dua Arah',
    questionLatex:
      '\\text{Diketahui fungsi } f(x) = \\frac{3}{x - 4}. \\\\\n\\text{Tentukan limit kiri dan kanan saat } x \\to 4, \\text{ kemudian tentukan apakah limit dua arahnya ada!}',
    visualType: 'limit-asymptote',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Analisis Limit Kiri ($x \\to 4^-$)',
        explanation: 'Ketika $x$ mendekati $4$ dari arah kiri ($x < 4$, misal $x = 3.999$), maka nilai $(x - 4)$ adalah bilangan negatif yang sangat kecil mendekati $0$ ($0^-$):',
        mathLatex:
          '\\lim_{x \\to 4^-} \\frac{3}{x - 4} = \\frac{3}{0^-} = -\\infty',
      },
      {
        stepNumber: 2,
        title: 'Analisis Limit Kanan ($x \\to 4^+$)',
        explanation: 'Ketika $x$ mendekati $4$ dari arah kanan ($x > 4$, misal $x = 4.001$), maka nilai $(x - 4)$ adalah bilangan positif yang sangat kecil mendekati $0$ ($0^+$):',
        mathLatex:
          '\\lim_{x \\to 4^+} \\frac{3}{x - 4} = \\frac{3}{0^+} = +\\infty',
      },
      {
        stepNumber: 3,
        title: 'Kesimpulan eksistensi limit dua arah',
        explanation: 'Teorema menyatakan bahwa limit dua arah $\\lim_{x \\to c} f(x) = L$ ada jika dan hanya jika limit kiri sama dengan limit kanan (keduanya menuju nilai berhingga yang sama):',
        mathLatex:
          '\\lim_{x \\to 4^-} f(x) = -\\infty \\neq +\\infty = \\lim_{x \\to 4^+} f(x)\n\\implies \\lim_{x \\to 4} \\frac{3}{x - 4} \\quad \\text{TIDAK ADA (Does Not Exist / DNE)}',
      },
    ],
    finalAnswerLatex: '\\lim_{x \\to 4^-} f(x) = -\\infty, \\quad \\lim_{x \\to 4^+} f(x) = +\\infty \\implies \\lim_{x \\to 4} f(x) \\text{ TIDAK ADA (DNE)}',
    finalAnswerText: 'Limit kiri adalah -∞, limit kanan adalah +∞. Karena limit kiri ≠ limit kanan, maka limit dua arahnya TIDAK ADA.',
    fastTips: [
      '💡 Uji Angka Nyata: Untuk limit kiri gunakan x = 3.99 -> 3/(3.99 - 4) = 3/(-0.01) = -300 -> -∞. Untuk limit kanan x = 4.01 -> 3/(0.01) = +300 -> +∞.',
    ],
    commonPitfalls: [
      '⚠️ Menjawab "limitnya tak hingga (∞)". Harus ditegaskan bahwa limit kiri adalah -∞ dan limit kanan adalah +∞ sehingga limit dua arahnya TIDAK ADA.',
    ],
  },
  {
    id: 'soal-15',
    number: 15,
    source: 'latihan-ppt',
    module: 'kontinuitas',
    subtopic: 'Kontinuitas Fungsi Sepotong',
    points: 25,
    title: 'Kontinuitas Fungsi Sepotong & Nilai Parameter',
    questionLatex:
      '\\text{Diberikan fungsi: } f(x) = \\begin{cases} 2x + 1, & x < 3 \\\\ ax + b, & x \\ge 3 \\end{cases}\n\\\\\n\\text{a) Tentukan hubungan antara } a \\text{ dan } b \\text{ agar fungsi kontinu di } x = 3!\n\\\\\n\\text{b) Jika } a = 2, \\text{ tentukan nilai } b \\text{ yang memenuhi!}',
    formalSteps: [
      {
        stepNumber: 1,
        title: 'Tinjau 3 syarat kontinuitas fungsi di titik $x = 3$',
        explanation: 'Fungsi $f(x)$ kontinu di $x = c$ jika:\n1. $f(c)$ terdefinisi\n2. $\\lim_{x \\to c} f(x)$ ada (artinya limit kiri = limit kanan)\n3. $\\lim_{x \\to c} f(x) = f(c)$',
      },
      {
        stepNumber: 2,
        title: 'Hitung nilai fungsi $f(3)$ dan limit kanan',
        explanation: 'Untuk $x \\ge 3$, gunakan formula cabang bawah $f(x) = ax + b$:',
        mathLatex:
          'f(3) = a(3) + b = 3a + b\n\\lim_{x \\to 3^+} f(x) = \\lim_{x \\to 3^+} (ax + b) = 3a + b',
      },
      {
        stepNumber: 3,
        title: 'Hitung limit kiri saat $x \\to 3^-$',
        explanation: 'Untuk $x < 3$, gunakan formula cabang atas $f(x) = 2x + 1$:',
        mathLatex:
          '\\lim_{x \\to 3^-} f(x) = \\lim_{x \\to 3^-} (2x + 1) = 2(3) + 1 = 6 + 1 = 7',
      },
      {
        stepNumber: 4,
        title: 'Samakan limit kiri dan limit kanan (Pertanyaan a)',
        explanation: 'Agar limit ada dan fungsi kontinu, maka limit kiri = limit kanan = f(3):',
        mathLatex:
          '3a + b = 7 \\implies b = 7 - 3a',
      },
      {
        stepNumber: 5,
        title: 'Hitung nilai $b$ jika $a = 2$ (Pertanyaan b)',
        explanation: 'Substitusi nilai $a = 2$ ke dalam hubungan yang didapat:',
        mathLatex:
          '3(2) + b = 7 \\implies 6 + b = 7 \\implies b = 7 - 6 = 1',
      },
    ],
    finalAnswerLatex: '\\text{a) Hubungan: } 3a + b = 7 \\quad \\text{b) Untuk } a = 2 \\implies b = 1',
    finalAnswerText: 'Hubungan agar kontinu adalah 3a + b = 7. Jika a = 2, maka nilai b = 1.',
    fastTips: [
      '💡 Trik Sambungan Kontinu: Nilai cabang kiri di titik batas harus SAMA DENGAN nilai cabang kanan di titik batas: CabangKiri(3) = CabangKanan(3) -> 2(3)+1 = 3a+b -> 7 = 3a+b!',
    ],
    commonPitfalls: [
      '⚠️ Jangan lupa menuliskan 3 syarat formal kontinuitas secara runtut. Dosen UMS selalu melihat apakah mahasiswa paham definisi limit kiri = limit kanan = f(c).',
    ],
  },
];
