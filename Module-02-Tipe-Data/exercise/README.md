# 🚀 Exercise Hari 2: Tipe Data JavaScript (Primitive vs Reference)

Selamat datang di latihan hari kedua! Setelah menguasai variabel (`let` & `const`), sekarang kita akan mendalami **Tipe Data** di JavaScript. 

Dalam JavaScript, tipe data terbagi menjadi dua kategori utama:
1. **Primitive Data Types** (Disimpan berdasarkan nilai / *passed by value*).
2. **Reference Data Types** (Disimpan berdasarkan referensi memori / *passed by reference*).

---

## 🎯 Tujuan Pembelajaran
- Mengenal tipe data Primitive: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, dan `BigInt`.
- Mengenal tipe data Reference: `Object`, `Array`, dan `Function`.
- Menggunakan operator `typeof` untuk mengecek tipe data.
- Memahami perbedaan fundamental cara kerja **Value vs Reference** di memori.

---

## 💻 Persiapan
Buka VS Code, buat file baru di dalam proyekmu (misal: `exercise-datatype.js`), lalu jalankan di terminal menggunakan Node.js:
```bash
node exercise-datatype.js
```
Atau jalankan langsung di **Browser Console** (`F12`).

---

## 📝 Soal-Soal Latihan

### 🔹 Level 1: Identifikasi Tipe Data Primitive & `typeof`
**Tugas:**
1. Buat variabel-variabel berikut dengan tipe data yang sesuai:
   - `nama` (String): Nama lengkapmu.
   - `umur` (Number): Umurmu saat ini.
   - `isStudent` (Boolean): Status apakah kamu sedang belajar (`true` / `false`).
   - `sisaSaldo` (Null): Nilai `null` (mengindikasikan nilai kosong yang disengaja).
   - `alamat`: Deklarasikan variabel tanpa memberi nilai awal (*undefined*).
2. Gunakan `console.log()` beserta operator `typeof` untuk menampilkan tipe data dari masing-masing variabel!

<details>
<summary>💡 Clue / Contoh Output</summary>

```text
Tipe data nama: string
Tipe data umur: number
Tipe data isStudent: boolean
Tipe data sisaSaldo: object (catatan: ini adalah keunikan/bug legendaris JavaScript!)
Tipe data alamat: undefined
```
</details>

---

### 🔹 Level 2: Eksperimen *Passed by Value* (Primitive Types)
Variabel bertipe **Primitive** menyimpan nilainya secara independen. Mengubah satu variabel tidak akan mempengaruhi variabel lainnya.

**Tugas:**
1. Buat variabel `let nilaiA = 100;`.
2. Buat variabel `let nilaiB = nilaiA;` (menyalin nilai dari `nilaiA`).
3. Ubah nilai `nilaiB = 80;`.
4. Cetak nilai `nilaiA` dan `nilaiB` ke console.
5. Apakah nilai `nilaiA` ikut berubah menjadi `80`? Mengapa demikian?

---

### 🔹 Level 3: Eksperimen *Passed by Reference* (Reference Types)
Variabel bertipe **Reference** (seperti `Array` atau `Object`) menyimpan **alamat memori**, bukan nilainya langsung. Mengubah isi properti akan berdampak pada semua variabel yang merujuk ke alamat memori yang sama.

**Tugas:**
1. Buat object `hero1`:
   ```javascript
   const hero1 = {
     nama: "Miya",
     role: "Marksman"
   };
   ```
2. Buat variabel `const hero2 = hero1;` (menyalin referensi dari `hero1`).
3. Ubah nama pada `hero2`: `hero2.nama = "Layla";`.
4. Cetak `hero1.nama` dan `hero2.nama` ke console.
5. Amati apa yang terjadi pada `hero1.nama`! Mengapa nilainya ikut berubah?

---

### 🔹 Level 4: Tipe Data Khusus (`Null` vs `Undefined` & `NaN`)
**Tugas:**
Jalankan dan amati hasil dari 3 instruksi berikut di console, lalu jelaskan mengapa alasannya:

1. `console.log(undefined == null);` dan `console.log(undefined === null);`
2. `console.log("Kopi" / 2);` (Amati output `NaN` - *Not a Number*).
3. `console.log(typeof NaN);` (Tipe data apakah `NaN` sebenarnya?).

---

## ✅ Kunci Jawaban / Referensi Solusi

Jika kamu sudah selesai mencoba mengerjakan, silakan cocokkan kodenya di bawah ini:

```javascript
// ==========================================
// --- LEVEL 1: Identifikasi & typeof ---
// ==========================================
const nama = "Azriel";
const umur = 18;
const isStudent = true;
const sisaSaldo = null;
let alamat;

console.log("Tipe data nama:", typeof nama);         // string
console.log("Tipe data umur:", typeof umur);         // number
console.log("Tipe data isStudent:", typeof isStudent); // boolean
console.log("Tipe data sisaSaldo:", typeof sisaSaldo); // object (pembawaan JS)
console.log("Tipe data alamat:", typeof alamat);     // undefined

// ==========================================
// --- LEVEL 2: Passed by Value ---
// ==========================================
let nilaiA = 100;
let nilaiB = nilaiA; // Nilai 100 diduplikasi secara independen
nilaiB = 80;

console.log("nilaiA:", nilaiA); // Output: 100 (TETAP, tidak terpengaruh)
console.log("nilaiB:", nilaiB); // Output: 80

// Penjelasan: Tipe Primitive disalin harganya/nilainya (Value).


// ==========================================
// --- LEVEL 3: Passed by Reference ---
// ==========================================
const hero1 = {
  nama: "Miya",
  role: "Marksman"
};

const hero2 = hero1; // hero2 memegang alamat memori yang sama dengan hero1
hero2.nama = "Layla";

console.log("hero1.nama:", hero1.nama); // Output: "Layla" (IKUT BERUBAH!)
console.log("hero2.nama:", hero2.nama); // Output: "Layla"

// Penjelasan: Tipe Reference menyalin ALAMAT MEMORI-nya. 
// hero1 dan hero2 menunjuk ke objek yang sama di dalam memori.


// ==========================================
// --- LEVEL 4: Data Khusus ---
// ==========================================
console.log(undefined == null);  // true  (karena sama-sama mewakili "tidak ada nilai")
console.log(undefined === null); // false (karena tipe datanya beda: undefined vs object/null)

console.log("Kopi" / 2);         // Output: NaN (Not a Number)
console.log(typeof NaN);         // Output: "number" (NaN dianggap tipe number yang tidak valid)
```

---

🎉 **Selamat! Kamu telah menguasai konsep Tipe Data & Perbedaan Value vs Reference dalam JavaScript!**
