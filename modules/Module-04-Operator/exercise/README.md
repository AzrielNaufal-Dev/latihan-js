# 🚀 Exercise Hari 4: Operator dalam JavaScript

Selamat datang di latihan hari keempat! Hari ini kamu akan menguji pemahamanmu mengenai **Operator** di JavaScript, meliputi:
1. **Operator Aritmatika** (`+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`)
2. **Operator Assignment** (`+=`, `-=`, `*=`, `/=`, `%=`)
3. **Operator Comparison** (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`)
4. **Operator Logika** (`&&`, `||`, `!`)
5. **Operator Ternary** (`condition ? true : false`)

Latihan ini terdiri dari **10 soal total**, di mana **5 soal terakhir berbentuk Study Case (Studi Kasus)** dunia nyata!

---

## 🎯 Tujuan Pembelajaran
- Memahami urutan eksekusi dan perbedaan operator aritmatika & assignment.
- Menguasai perbedaan ketat perbandingan nilai & tipe data (`==` vs `===` dan `!=` vs `!==`).
- Mampu mengombinasikan logika kompleks dengan operator `&&`, `||`, dan `!`.
- Menggunakan Operator Ternary untuk menyederhanakan penulisan kondisi `if-else`.
- Memecahkan masalah nyata (diskon, sistem kasir, tiket bioskop, validasi login) menggunakan operator.

---

## 💻 Persiapan
Buka VS Code, buat file baru (misal: `exercise-operators.js`), lalu jalankan di terminal:
```bash
node exercise-operators.js
```

---

## 📝 Soal-Soal Latihan (Total 10 Soal)

### 🔹 Bagian 1: Konsep Dasar Operator (Soal 1 - 5)

#### 1️⃣ Soal 1: Modulus & Eksponen (Aritmatika)
Buatlah kode untuk menghitung sisa hasil bagi (*modulus*) dari `27` dibagi `5`, lalu hasilnya dipangkatkan (*eksponen*) `3`. Tampilkan hasil akhirnya ke console!

#### 2️⃣ Soal 2: Shorthand Assignment
Terdapat variabel `let tabungan = 100000;`.
- Tambahkan tabungan sebesar `50000` menggunakan operator assignment `+=`.
- Kurangi tabungan sebesar `20000` menggunakan operator assignment `-=`.
- Kalikan sisa tabungan dengan `2` menggunakan operator assignment `*=`.
Berapa nilai akhir variabel `tabungan`?

#### 3️⃣ Soal 3: Strict vs Loose Comparison
Tentukan hasil output `true` / `false` dari 4 ekspresi berikut di console dan berikan alasannya:
```javascript
console.log(10 == "10");
console.log(10 === "10");
console.log(5 !== "5");
console.log(5 != "5");
```

#### 4️⃣ Soal 4: Gabungan Logika (AND, OR, NOT)
Tentukan hasil boolean dari variabel `hasil` di bawah ini tanpa menjalankan kodenya terlebih dahulu, lalu buktikan dengan `console.log()`:
```javascript
const x = 15;
const y = 20;
const hasil = (x < y && y % 2 === 0) || !(x === 15);
```

#### 5️⃣ Soal 5: Ternary Operator Dasar
Buatlah pengecekan status umur menggunakan **Operator Ternary**. 
- Jika `umur >= 17`, tampilkan `"Bisa membuat SIM"`.
- Jika `umur < 17`, tampilkan `"Belum bisa membuat SIM"`.
Gunakan variabel `const umur = 16;`.

---

### 🔹 Bagian 2: Study Case / Studi Kasus Dunia Nyata (Soal 6 - 10)

#### 6️⃣ Study Case 1: Program Kasir Warung (Aritmatika & Assignment)
Budi membeli 3 bungkus mie instan seharga `Rp 3.500` per bungkus dan 2 botol minuman seharga `Rp 5.000` per botol. 
- Hitung total belanjaan Budi.
- Karena Budi membayar dengan uang `Rp 50.000`, hitung kembalian yang harus diterima Budi menggunakan operator aritmatika!

#### 7️⃣ Study Case 2: Sistem Diskon Belanja (Comparison & Ternary)
Sebuah minimarket memberikan diskon `10%` jika total belanjaan pelanggan **lebih dari atau sama dengan Rp 100.000**.
- Buat variabel `const totalBelanja = 120000;`.
- Gunakan **Operator Ternary** untuk menghitung harga akhir:
  - Jika dapat diskon: `totalBelanja - (totalBelanja * 0.1)`
  - Jika tidak: `totalBelanja`
- Cetak harga akhir yang harus dibayar pelanggan!

#### 8️⃣ Study Case 3: Kualifikasi Tiket Bioskop (Logic Operator `&&` & `||`)
Bioskop memiliki aturan penonton untuk film kategori **Dewasa**:
- Penonton boleh masuk jika **Umur minimal 18 tahun** **DAN** memiliki **Tiket**.
- **ATAU** penonton boleh masuk jika didampingi oleh **Orang Tua** (meskipun umurnya di bawah 18 tahun, asal punya tiket).

Diberikan data penonton:
```javascript
const umurPenonton = 15;
const punyaTiket = true;
const didampingiOrangTua = true;
```
Buatlah satu baris ekspresi logika (`&&` dan `||`) untuk menentukan variabel `bisaMasukBioskop` (bernilai `true`/`false`), lalu cetak hasilnya!

#### 9️⃣ Study Case 4: Sistem Validasi Form Login (Logic & Strict Comparison)
Dalam sebuah aplikasi, user berhasil login jika **Username DAN Password bernilai benar (exact match)**.
```javascript
const inputUsername = "Azriel";
const inputPassword = "password123";

const dbUsername = "Azriel";
const dbPassword = "password123";
```
1. Buatlah variabel `isLoginSuccess` yang membandingkan input pengguna dengan database menggunakan `===` dan operator `&&`.
2. Gunakan **Operator Ternary** berdasarkan variabel `isLoginSuccess` untuk menampilkan pesan:
   - Jika berhasil: `"Selamat datang, Azriel!"`
   - Jika gagal: `"Username atau password salah!"`

#### 🔟 Study Case 5: Penentu Kelulusan & Nilai Plus (Complex Operators)
Seorang siswa dinyatakan **LULUS** jika:
- Nilai Ujian minimal `75` **DAN** Kehadiran minimal `80%`.
- ATAU memiliki Status Siswa Berprestasi (`isPrestasi = true`) meskipun nilai/kehadirannya kurang (asal punya tiket prestasi).

Diberikan data siswa:
```javascript
const nilaiUjian = 72;
const nilaiKehadiran = 85;
const isPrestasi = true;
```
1. Buat variabel `isLulus` menggunakan kombinasi operator logika (`&&`, `||`, `>=`).
2. Buat variabel `pesanKelulusan` menggunakan **Ternary Operator** yang menghasilkan pesan:
   - Jika lulus: `"Selamat, Anda Dinyatakan LULUS!"`
   - Jika tidak lulus: `"Mohon maaf, Anda Harus Mengulang."`
3. Cetak hasil `pesanKelulusan` ke console!

---

## ✅ Kunci Jawaban / Referensi Solusi

Jika kamu sudah selesai mencoba mengerjakan kesepuluh soal di atas, silakan cocokkan kodenya di bawah ini:

```javascript
// ==========================================
// --- SOAL 1 ---
// ==========================================
let a = 27;
let b = 5;
let result = a % b; // 2
console.log(`- Soal 1: ${result ** 3}`); // Output: 8

// ==========================================
// --- SOAL 2 ---
// ==========================================
let tabungan = 100000;
tabungan += 50000;
tabungan -= 20000;
tabungan *= 2;
console.log("- Soal 2: Rp " + tabungan); // Output: 260000

// ==========================================
// --- SOAL 3 ---
// ==========================================
console.log(10 == "10"); // Output: true
// Penjelasan: Operator `==` mengecek apakah kedua value sama. namun tidak spesifik mengecek apakah tipe datanya sama.
console.log(10 === " 10"); // Output: false
// Penjelasan: Operator `===` mengecek apakah kedua value DAN tipe datanya sama.
console.log(5 !== "5"); // Output: true
// Penjelasan: Operator `!==` mengecek apakah kedua value DAN tipe datanya tidak sama.
console.log(5 != "5"); // Output: false
// Penjelasan: Operator `!=` mengecek apakah kedua value tidak sama. namun tidak secara spesifik mengecek apakah tipe datanya tidak sama.


// ==========================================
// --- SOAL 4 ---
// ==========================================
const x = 15;
const y = 20;
const hasil = (x < y && y % 2 === 0) || !(x === 15);

/*
Penjelasan:
(x < y && y % 2 === 0) || !(x === 15) kita bedah menjadi bagian-bagian kecil terlebih dahulu.
(x < y && y % 2 === 0) -> kita bedah ini:
- (15 < 20) = true 
- (20 % 2) = 0 === 0 = true
maka: true && true = true => untuk sisi kiri

!(x === 15) -> kita bedah ini:
- (15 === 15) =  true 
namun karna ada operator `!` maka hasilnya = false => untuk sisi kanan

Kesimpuan:
- (true) || (false) = true
*/

console.log(`Soal 4: ${hasil}`); 

// ==========================================
// --- SOAL 5 ---
// ==========================================
const umur = 16;
const statusSIM = umur >= 17 ? "Bisa membuat SIM" : "Belum bisa membuat SIM";
console.log("Soal 5:", statusSIM);

// ==========================================
// --- SOAL 6 (Study Case 1) ---
// ==========================================
const mieInstant = 3500;
const botolMinuman = 5000;
const totalBayar = mieInstant * 3 + botolMinuman * 2;
const uangBudi = 50000;
const kembalian = uangBudi - totalBayar;

console.log(
  `Case 1:
- Total harga: Rp ${totalBayar}
- Budi membayar: Rp ${uangBudi}
- total kembalian = Rp ${kembalian}`,
);

// ==========================================
// --- SOAL 7 (Study Case 2) ---
// ==========================================
const totalBelanjaan = 120000;

const isGetDiscount =
  totalBelanjaan >= 100000
    ? totalBelanjaan - totalBelanjaan * 0.1
    : totalBelanjaan;

console.log(`- Case 2 Total Bayar: Rp ${isGetDiscount}`);

// ==========================================
// --- SOAL 8 (Study Case 3) ---
// ==========================================
const umurPenonton = 15;
const punyaTiket = true;
const didampingiOrangTua = true;

const bisaMasukBioskop = (umur >= 18 && punyaTiket) || didampingiOrangTua;
console.log(`- Case 3 Bisa Masuk Bioskop: ${bisaMasukBioskop}`);

// ==========================================
// --- SOAL 9 (Study Case 4) ---
// ==========================================
const inputPassword = "password123";

const dbUsername = "Azriel";
const dbPassword = "password123";

const isLoginSuccess =
  inputUsername === dbUsername && inputPassword === dbPassword
    ? `Selamat datang ${dbUsername}`
    : "Username atau password anda salah!";

console.log(`- Case 4 Login Status: ${isLoginSuccess}`);

// ==========================================
// --- SOAL 10 (Study Case 5) ---
// ==========================================
const nilaiUjian = 72;
const nilaiKehadiran = 85;
const isPrestasi = true;
const isLulus = (nilaiUjian > 75 && nilaiKehadiran >= 80) || isPrestasi;

const pesanKelulusan = isLulus
  ? "Selamat, Anda Dinyatakan LULUS!"
  : "Mohon maaf, Anda Harus Mengulang";

console.log(`- Case 5 Kelulusan: ${pesanKelulusan}`);
```

---

🎉 **Selamat Mengerjakan! Kuasai Operator untuk Mempermudah Logika Pemrogramanmu!**
