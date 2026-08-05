# 🚀 Exercise Hari 5: String & Method Manipulasi String dalam JavaScript

Selamat datang di latihan hari kelima! Hari ini kamu akan menguji dan memantapkan pemahamanmu mengenai **String** di JavaScript. 

Latihan ini dirancang khusus dalam **5 soal komprehensif** yang mencakup seluruh properti dan method dasar string yang telah kamu pelajari:
1. Akses karakter via index & Properti `.length`
2. `.toUpperCase()`, `.toLowerCase()`, dan `.trim()`
3. `.slice()`, `.substring()`, dan Template Literals (Backticks)
4. `.replace()` dan `.split()`
5. `.indexOf()`, `.lastIndexOf()`, dan `.includes()`

---

## 🎯 Tujuan Pembelajaran
- Mengakses karakter tertentu dan menghitung panjang string.
- Mengubah format huruf (kapital/kecil) serta membersihkan spasi tak terpakai.
- Memotong string (*slicing*) dan menggabungkan variabel menggunakan *Template Literals*.
- Mengganti kata (*replace*) serta memecah string menjadi Array (*split*).
- Mencari posisi kata (*indexOf* / *lastIndexOf*) dan mengecek keberadaan teks (*includes*).

---

## 💻 Persiapan
Buka VS Code, buat file baru (misal: `exercise-string.js`), lalu jalankan di terminal:
```bash
node exercise-string.js
```

---

## 📝 Soal-Soal Latihan (Total 5 Soal)

### 1️⃣ Soal 1: Pengukuran Panjang & Pembersihan Input (Length & Trim)
Seorang user tanpa sengaja menginputkan namanya dengan banyak spasi tambahan di awal dan akhir: 
```javascript
const inputUser = "    Azriel Naufal    ";
```
**Tugas:**
1. Bersihkan spasi di awal dan akhir string tersebut menggunakan method `.trim()` dan simpan ke variabel `namaBersih`.
2. Hitung jumlah karakter dari `namaBersih` menggunakan properti `.length`.
3. Cetak karakter **pertama** dan karakter **terakhir** dari `namaBersih` memanfaatkan index (`[ ]`).

---

### 2️⃣ Soal 2: Format & Penggabungan Teks (Upper/Lower Case & Template Literals)
Diberikan dua variabel nama depan dan belakang:
```javascript
const firstName = "azriel";
const lastName = "naufal";
```
**Tugas:**
1. Ubah `firstName` menjadi **HURUF KAPITAL SEMUA** (`AZRIEL`).
2. Ubah `lastName` menjadi **huruf kecil semua** (`naufal`).
3. Gabungkan kedua variabel tersebut menggunakan **Template Literals** (Backticks `` ` ``) menjadi satu kalimat: `"Halo, nama saya AZRIEL naufal!"`.
4. Cetak hasil akhirnya ke console!

---

### 3️⃣ Soal 3: Memotong Teks (*Slicing* & *Substring*)
Diberikan teks berikut:
```javascript
const text = "JavaScript";
```
**Tugas:**
1. Potong teks tersebut menggunakan `.slice()` untuk mengambil kata **`Java`**.
2. Potong teks tersebut menggunakan `.substring()` untuk mengambil kata **`Script`**.
3. Cetak kedua hasil potongan tersebut ke console!

---

### 4️⃣ Soal 4: Refaktor Kata & Konversi ke Array (Replace & Split)
Diberikan string daftar nama yang dipisahkan oleh tanda hubung (`-`):
```javascript
const daftarSiswa = "Azriel-Bryan-Erika-Gwen";
```
**Tugas:**
1. Ganti kata `"Erika"` di dalam string tersebut menjadi `"Dika"` menggunakan `.replace()`.
2. Ubah string baru tersebut menjadi **Array** berdasarkan pemisah `-` menggunakan `.split()`.
3. Cetak hasil akhir Array tersebut ke console!

---

### 5️⃣ Soal 5: Pencarian & Deteksi Kata (IndexOf, LastIndexOf, Includes)
Diberikan sebuah kalimat panjang berikut:
```javascript
const sentence = "buah-buahan baik bagi tubuh. matahari hari pagi sangat baik bagi tubuh manusia. manusia adalah makhluk sosial";
```
**Tugas:**
1. Cari index kemunculan **pertama** dari kata `"buah"` menggunakan `.indexOf()`.
2. Cari index kemunculan **terakhir** dari kata `"manusia"` menggunakan `.lastIndexOf()`.
3. Cek apakah di dalam kalimat tersebut terdapat kata `"matahari"` menggunakan `.includes()` (mengembalikan nilai boolean `true` atau `false`).
4. Cetak ketiga hasilnya ke console!

---

## ✅ Kunci Jawaban / Referensi Solusi

Jika kamu sudah selesai mencoba mengerjakan kesepuluh soal di atas, silakan cocokkan kodenya di bawah ini:

```javascript
// ==========================================
// --- SOAL 1 ---
// ==========================================
const inputUser = "    Azriel Naufal    ";
const namaBersih = inputUser.trim();
console.log(`- ${namaBersih}`);

const panjangNama = namaBersih.length;
console.log(`- Panjang nama: ${panjangNama}`);

const karakterPertama = namaBersih[0];
const karakterTerakhir = namaBersih[panjangNama - 1];
console.log(
  `- Karakter pertama: ${karakterPertama}, karakter terakhir: ${karakterTerakhir}`,
);


// ==========================================
// --- SOAL 2 ---
// ==========================================
const firstName = "azriel";
const lastName = "naufal";

const firstNameCapital = firstName.toUpperCase();
const lastNameLow = lastName.toLowerCase();

console.log(`- Halo, nama saya ${firstName} ${lastNameLow}!`);


// ==========================================
// --- SOAL 3 ---
// ==========================================
const text = "JavaScript";

const textSlice = text.slice(0, 4);
const textSubstring = text.substring(4);
console.log(`- Slice Result: ${textSlice}
- Substring Result: ${textSubstring}`);


// ==========================================
// --- SOAL 4 ---
// ==========================================
const daftarSiswa = "Azriel-Bryan-Erika-Gwen";

const siswaReplace = daftarSiswa.replace("Erika", "Dika");
console.log(`- ${siswaReplace}`);

const siswaArr = siswaReplace.split("-");
console.log(siswaArr);


// ==========================================
// --- SOAL 5 ---
// ==========================================
const sentence = "buah-buahan baik bagi tubuh. matahari hari pagi sangat baik bagi tubuh manusia. manusia adalah makhluk sosial";

const firstBuahIndex = sentence.indexOf("buah")
const lastManusiaIndex = sentence.lastIndexOf("manusia")
const isMatahari = sentence.includes("matahari")

console.log(`- First Buah Index: ${firstBuahIndex}
- Last Buah Index: ${lastManusiaIndex}
- Is Matahari: ${isMatahari}`);
```

---

🎉 **Selamat Mengerjakan! Kuasai Method String untuk Memudahkan Manipulasi Teks di JavaScript!**