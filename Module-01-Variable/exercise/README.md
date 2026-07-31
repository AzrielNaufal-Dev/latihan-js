# 🚀 Exercise Hari 1: Variabel dalam JavaScript (`let`, `const`, & `var`)

Selamat datang di hari pertama belajar JavaScript! Dalam latihan ini, kamu akan mempelajari dan mempraktikkan cara membuat serta mengelola variabel menggunakan **`const`**, **`let`**, dan **`var`**.

---

## 🎯 Tujuan Pembelajaran
- Memahami cara membuat variabel di JavaScript.
- Memahami kapan harus menggunakan `const` dan `let`.
- Memahami mengapa `var` sebaiknya dihindari dalam kode modern.
- Menggunakan `console.log()` untuk menampilkan data ke layar/terminal.

---

## 💻 Persiapan (Prerequisites)
Kamu bisa menjalankan kode JavaScript dengan dua cara:
1. **Browser Console:** Buka browser (Chrome/Firefox/Edge), tekan `F12` atau `Ctrl + Shift + I` (Windows) / `Cmd + Option + I` (Mac), lalu pilih tab **Console**.
2. **Node.js / VS Code:** Buat file bernama `index.js`, ketik kodenya, lalu jalankan di terminal menggunakan perintah:
   ```bash
   node index.js
   ```

---

## 📝 Soal-Soal Latihan

### 🔹 Level 1: Dasarnya Dulu (Membuat & Menampilkan Variabel)
**Tugas:**
1. Buat variabel menggunakan `const` bernama `namaDepan` dan isi dengan nama depanmu.
2. Buat variabel menggunakan `const` bernama `tahunLahir` dan isi dengan tahun lahirmu (angka).
3. Buat variabel menggunakan `let` bernama `umur` dan isi dengan umurmu saat ini.
4. Tampilkan semua variabel tersebut ke console menggunakan `console.log()`.

<details>
<summary>💡 Clue / Contoh Output</summary>

```text
Nama: Budi
Tahun Lahir: 2005
Umur: 19
```
</details>

---

### 🔹 Level 2: Perubahan Nilai (`let` vs `const`)
**Tugas:**
1. Buat variabel `let kotaTinggal` dengan nilai awal nama kotamu sekarang (misal: `"Jakarta"`).
2. Cetak nilai `kotaTinggal` ke console.
3. Ubah (*re-assign*) nilai `kotaTinggal` menjadi nama kota impianmu (misal: `"Tokyo"`).
4. Cetak kembali nilai `kotaTinggal` ke console.
5. Coba buat variabel `const negara = "Indonesia"`, lalu coba ubah nilainya di baris berikutnya menjadi `negara = "Jepang"`. Amati pesan error yang muncul di console!

<details>
<summary>💡 Apa yang harus diperhatikan?</summary>
Mengubah nilai pada variabel `const` akan menghasilkan error `TypeError: Assignment to constant variable`. Ini menunjukkan bahwa `const` bersifat permanen/konstan!
</details>

---

### 🔹 Level 3: Menghitung Umur Otomatis
**Tugas:**
1. Buat variabel `const tahunSekarang` dengan nilai `2026`.
2. Buat variabel `const tahunLahir` dengan nilai tahun lahirmu.
3. Buat variabel `let umurSaya` yang nilainya adalah hasil pengurangan dari `tahunSekarang - tahunLahir`.
4. Cetak kalimat: `"Umur saya di tahun 2026 adalah: [isi umurSaya] tahun"`.

---

### 🔹 Level 4: Eksperimen Scope (`var` vs `let`)
**Tugas:**
Jalankan dua blok kode berikut di console, amati perbedaannya, dan jawab pertanyaannya:

**Kode A (`var`):**
```javascript
if (true) {
  var rahasiaVar = "Saya bisa diakses di luar!";
}
console.log(rahasiaVar);
```

**Kode B (`let`):**
```javascript
if (true) {
  let rahasiaLet = "Saya tersembunyi!";
}
console.log(rahasiaLet);
```

**Pertanyaan:**
- Mengapa Kode A berhasil mencetak teks, sedangkan Kode B menghasilkan `ReferenceError`?
- Variabel mana (`var` atau `let`) yang lebih aman digunakan agar data tidak bocor keluar blok kode?

---

## ✅ Kunci Jawaban / Referensi Solusi

Jika kamu sudah selesai mengerjakan, kamu bisa mencocokkan kodenya di bawah ini:

```javascript
// --- LEVEL 1 ---
const namaDepan = "Budi";
const tahunLahir = 2005;
let umur = 19;

console.log("Nama:", namaDepan);
console.log("Tahun Lahir:", tahunLahir);
console.log("Umur:", umur);

// --- LEVEL 2 ---
let kotaTinggal = "Jakarta";
console.log("Kota Asal:", kotaTinggal);

kotaTinggal = "Tokyo";
console.log("Kota Impian:", kotaTinggal);

const negara = "Indonesia";
// negara = "Jepang"; // ❌ Akan error: Assignment to constant variable

// --- LEVEL 3 ---
const tahunSekarang = 2026;
const tahunLahirSaya = 2005;
let umurSaya = tahunSekarang - tahunLahirSaya;

console.log("Umur saya di tahun " + tahunSekarang + " adalah: " + umurSaya + " tahun");

// --- LEVEL 4 ---
// 'var' bersifat Function Scope sehingga bisa bocor keluar dari blok 'if'.
// 'let' bersifat Block Scope sehingga hanya aktif di dalam kurung kurawal {}.
// Oleh karena itu, 'let' jauh lebih aman digunakan!
```

---

🎉 **Selamat! Kamu telah menyelesaikan latihan dasar variabel JavaScript Hari 1!**
