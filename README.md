# Portal Belajar & Latihan Soal Kalkulus UTS Semester 1 UMS

> **Fakultas Komunikasi dan Informatika (FKI) • Program Studi Informatika**  
> **Universitas Muhammadiyah Surakarta (UMS)**  
> **Mata Uji:** Kalkulus (Semester 1) • **Acuan Dosen Penguji:** Diah Priyawati, S.T., M.Eng & Helmi Imaduddin, S.Kom., M.Eng.

---

## 📚 Gambaran Umum Proyek

Website ini dibangun khusus sebagai portal pembelajaran mandiri berstandar akademik tinggi (mengikuti prinsip *Anti-AI-Slop*) untuk membantu mahasiswa Informatika UMS dalam mempersiapkan Ujian Tengah Semester (UTS / PTS) Kalkulus.

Portal ini menyajikan **15 Nomor Soal Latihan Terstruktur** dan **Bank Soal Arsip Asli UTS UMS 2025/2026**, lengkap dengan:
- Notasi matematis tajam menggunakan **$\LaTeX$ & KaTeX**.
- Pembahasan formal langkah demi langkah standar penilaian dosen UMS.
- **💡 Tips & Trik Cepat / Cara Dosen**: Rumus kilat (invers rasional, L'Hopital, derajat limit tak hingga, pembagian modulo Euclidean).
- **⚠️ Common Pitfalls (Jebakan Umum Mahasiswa)**: Analisis titik kritis di mana mahasiswa sering kehilangan poin.
- **Visualisasi Interaktif**: Diagram Lingkaran Satuan (Unit Circle $\theta = 5\pi/6$) dan Asimtot Limit Sepihak ($f(x) = \frac{3}{x-4}$).
- **Lembar Rumus UMS (Formula Cheat Sheet)**: Modal contekan cepat identitas trigonometri dan teorema limit resmi.

---

## 🗂️ Cakupan Materi (6 Modul Utama)

1. **Modul 1: Sistem Bilangan Riil & Rasionalitas**
   - Soal 1: Penyederhanaan radikal $\frac{\sqrt{72}-\sqrt{18}}{\sqrt{2}} + (\sqrt{5}+\sqrt{3})(\sqrt{5}-\sqrt{3})$
   - Soal 2: Pembuktian irasionalitas $p = \sqrt{12} + \sqrt{27} = 5\sqrt{3}$
2. **Modul 2: Trigonometri Sudut Istimewa & Lingkaran Satuan**
   - Soal 3: Evaluasi $\sin 60^\circ + \cos 45^\circ \tan 30^\circ$
   - Soal 4: Konversi $\frac{7\pi}{6} \text{ radian} \to 210^\circ$
   - Soal 5: Koordinat titik unit circle $\theta = \frac{5\pi}{6} \to \left(-\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$ (dengan SVG visualizer)
   - Soal 6: Pembuktian identitas $\frac{\sec^2 x - 1}{\sec^2 x} = \sin^2 x$
3. **Modul 3: Aljabar Fungsi, Invers & Aritmatika Modulo**
   - Soal 7: Komposisi $(f \circ g)(2)$
   - Soal 8: Invers rasional $f(x) = \frac{3x-2}{x+1} \implies f^{-1}(x) = \frac{-x-2}{x-3}$
   - Soal 9: Modulo negatif $(-38) \bmod 7 = 4$ dengan pembagian Euclidean $a = mq + r$ ($q = -6, r = 4$)
4. **Modul 4: Teorema Limit Lengkap**
   - Soal 10: Limit substitusi $\lim_{x \to 2} (3x^2 - 5x + 4) = 6$
   - Soal 11: Limit faktorisasi $\lim_{x \to 3} \frac{x^2-9}{x^2-5x+6} = 6$
   - Soal 12: Limit trigonometri $\lim_{x \to 0} \frac{\sin 4x}{2x} = 2$
   - Soal 13: Limit tak hingga $\lim_{x \to +\infty} \frac{5x^2-3x+2}{2x^2+7x-1} = \frac{5}{2}$
   - Soal 14: Limit sepihak $f(x) = \frac{3}{x-4}$ (kiri $-\infty$, kanan $+\infty$, dua arah TIDAK ADA)
5. **Modul 5: Kontinuitas Fungsi Sepotong (Piecewise)**
   - Soal 15: Analisis kontinuitas di $x = 3 \implies 3a + b = 7$, jika $a = 2 \implies b = 1$
6. **Modul 6: Arsip Soal Asli UTS UMS 2025/2026**
   - Soal 1: Pertidaksamaan $-5 \le 2x+6 < 4$, $x^2-x-6 < 0$, $3x^2-x-2 > 0$
   - Soal 2: Domain, Range, Titik Puncak & Sketsa Parabola $y=x^2+5x+6$ dan $y=2x^2-5x-3$
   - Soal 3: Limit aljabar suku tinggi & variabel simbolik $\pi$
   - Soal 4: Limit trigonometri lanjutan $\lim_{t \to 0} \frac{\sin 3t + 4t}{t \sec t} = 7$

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom Academic Palette)
- **Math Rendering**: [KaTeX](https://katex.org/) (Client-side instant LaTeX parsing)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Cara Menjalankan Secara Lokal

```bash
# Clone repository
git clone https://github.com/faridmarufprabowo2021/kalkulus-ums-prep.git

# Masuk ke direktori
cd kalkulus-ums-prep

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka `http://localhost:3000` di peramban kamu.

---

## 👨‍💻 Kontributor & Lisensi
Dikembangkan untuk komunitas mahasiswa Informatika Universitas Muhammadiyah Surakarta. Lisensi MIT.
