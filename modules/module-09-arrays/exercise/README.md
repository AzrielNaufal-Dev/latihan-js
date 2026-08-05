# 🚀 Exercise Hari 9: Array & Array Multidimensi dalam JavaScript

Selamat datang di latihan hari ke-10! Hari ini kamu akan melatih pemahaman mengenai **Array** di JavaScript, mencakup:

1. **Metode Dasar Manipulasi Array:** `push()`, `pop()`, `shift()`, `unshift()`, dan properti `.length`.
2. **Metode Lanjutan & Pencarian:** `concat()`, `slice()`, `splice()`, `indexOf()`, dan `includes()`.
3. **Array Multidimensi (2D Array):** Pengaksesan baris & kolom `matrix[row][col]`.

Latihan ini dirancang khusus sebanyak **10 Soal (Soal 1-5 Konsep Dasar, Soal 6-10 Study Case)** dengan tingkat kesulitan berjenjang (**Easy, Medium, Hard**) untuk melatih _critical thinking_ dan _problem solving_-mu!

---

## 🎯 Tingkat Kesulitan Soal

- **🟢 Easy (Soal 1 - 7):** Pemanasan konsep & manipulasi dasar array.
- **🟡 Medium (Soal 8 - 9):** Studi kasus menengah dengan logika penggabungan & pencarian berlapis.
- **🔴 Hard (Soal 10):** Studi kasus kompleks berbasis Array 2D (Matriks / Papan Catur / Grid) untuk menguji _problem solving_.

---

## 💻 Persiapan

Buka VS Code, buat file baru (misal: `exercise-array.js`), lalu jalankan di terminal:

```bash
node exercise-array.js
```

---

## 📝 Soal-Soal Latihan (Total 10 Soal)

### 🔹 Bagian 1: Konsep Dasar Manipulasi & Pencarian (Soal 1 - 5)

#### 1️⃣ Soal 1: Operasi Tumpukan Kartu (`push`, `pop`, `shift`, `unshift`) — 🟢 [EASY]

Diberikan array `let hewan = ["kucing", "anjing", "kelinci"];`.
**Tugas:**

1. Tambahkan `"hamster"` ke bagian akhir array.
2. Tambahkan `"burung"` ke bagian awal array.
3. Hapus elemen paling akhir dari array.
4. Hapus elemen paling awal dari array.
5. Cetak array akhir dan jumlah total elemennya (`.length`).

---

#### 2️⃣ Soal 2: Memotong & Menggabungkan Array (`slice` & `concat`) — 🟢 [EASY]

Diberikan dua kelompok daftar buah:

```javascript
const buahA = ["apel", "pisang", "mangga"];
const buahB = ["jeruk", "durian", "anggur"];
```

**Tugas:**

1. Potong `buahA` menggunakan `.slice()` untuk mengambil hanya `"pisang"` dan `"mangga"`.
2. Gabungkan hasil potongan tersebut dengan seluruh isi `buahB` menggunakan `.concat()` menjadi satu array baru bernama `semuaBuah`.
3. Cetak variabel `semuaBuah` ke console.

---

#### 3️⃣ Soal 3: Modifikasi Elemen Spesifik (`splice`) — 🟢 [EASY]

Diberikan array angka `let angka = [10, 20, 30, 40, 50];`.
**Tugas:**

1. Menggunakan `.splice()`, hapus angka `30` di indeks `2`.
2. Di posisi indeks yang sama (indeks `2`), sisipkan dua angka baru yaitu `25` dan `35`.
3. Cetak array `angka` yang sudah berubah.

---

#### 4️⃣ Soal 4: Pelacakan Indeks & Keberadaan (`indexOf` & `includes`) — 🟢 [EASY]

Diberikan daftar anggota tim:

```javascript
const tim = ["Azriel", "Bryan", "Erika", "Gwen"];
```

**Tugas:**

1. Cari posisi indeks dari `"Erika"` menggunakan `.indexOf()`.
2. Cek apakah `"Budi"` ada di dalam tim menggunakan `.includes()`.
3. Tampilkan pesan ke console: `"Indeks Erika: [index], Apakah Budi ada?: [boolean]"`.

---

#### 5️⃣ Soal 5: Navigasi Array 2D (Array Multidimensi) — 🟢 [EASY]

Diberikan matriks angka 3x3 berikut:

```javascript
const matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];
```

**Tugas:**

1. Ambil nilai `50` (baris 1, kolom 1) dan simpan di variabel `tengah`.
2. Ambil nilai `90` (baris 2, kolom 2) dan simpan di variabel `pojokBawah`.
3. Hitung penjumlahan dari `tengah + pojokBawah` dan cetak hasilnya.

---

### 🔹 Bagian 2: Study Case / Studi Kasus (Soal 6 - 10)

#### 6️⃣ Study Case 1: Antrean Rumah Sakit — 🟢 [EASY]

Sebuah rumah sakit menggunakan array untuk mengelola antrean pasien: `let antrean = ["Budi", "Siti", "Andi"];`.
**Kasus:**

1. Datang pasien baru bernama `"Dewi"` yang langsung masuk antrean paling belakang.
2. Pasien prioritas bernama `"Pak Eko"` datang dan dimasukkan ke antrean paling depan.
3. Dokter memanggil pasien paling depan untuk masuk ruang periksa (hapus dari antrean).
4. Tampilkan daftar pasien yang masih tersisa di antrean!

---

#### 7️⃣ Study Case 2: Sistem Kasir & Keranjang Belanja — 🟢 [EASY]

Seorang pembeli mengisi keranjang belanjaan: `let keranjang = ["Susu", "Roti", "Keju", "Minyak"];`.
**Kasus:**

1. Pembeli batal membeli `"Keju"`. Gunakan `.indexOf()` untuk menemukan posisi `"Keju"`, lalu gunakan `.splice()` untuk menghapusnya dari keranjang.
2. Cek menggunakan `.includes()` apakah `"Susu"` masih ada di keranjang. Jika ada, cetak `"Susu siap dibayar"`.

---

#### 8️⃣ Study Case 3: Manajemen Inventaris Gudang — 🟡 [MEDIUM]

Gudang toko elektronik memiliki 2 kategori stok barang:

```javascript
let stokLama = ["Laptop Dell", "Mouse Logitech", "Keyboard Keychron"];
let stokBaru = ["Monitor LG", "Webcam Anker"];
```

**Kasus:**

1. Gabungkan kedua stok menjadi `stokTotal`.
2. Toko kehabisan `"Mouse Logitech"`. Cari lokasinya, lalu ganti item `"Mouse Logitech"` tersebut secara langsung dengan `"Mouse Razer"` menggunakan `.splice()`.
3. Buat array baru `stokDisplay` yang hanya berisi 3 barang pertama dari `stokTotal` menggunakan `.slice()`.
4. Cetak `stokTotal` dan `stokDisplay`.

---

#### 9️⃣ Study Case 4: Riwayat Transaksi e-Wallet — 🟡 [MEDIUM]

Aplikasi e-Wallet mencatat 5 transaksi terakhir seorang user (angka positif = topup, angka negatif = belanja):

```javascript
let riwayat = [100000, -25000, -50000, 200000, -75000];
```

**Kasus:**

1. User ingin membatalkan transaksi paling terakhir. Hapus transaksi terakhir tersebut dan simpan nilai yang dihapus ke variabel `transaksiBatal`.
2. Tunjukkan berapa nominal yang dibatalkan tersebut.
3. Karena sistem merevisi batas riwayat, ambil 2 transaksi pertama saja menggunakan `.slice()` tanpa mengubah array `riwayat`.
4. Tampilkan isi `riwayat` terkini dan 2 transaksi teratas tersebut.

---

#### 🔟 Study Case 5: Papan Permainan Tic-Tac-Toe & Validasi Pemenang — 🔴 [HARD]

Diberikan papan Tic-Tac-Toe 3x3 yang direpresentasikan dalam Array 2D:

```javascript
let board = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", " ", "O"],
];
```

**Kasus (Critical Thinking):**

1. Pemain `"X"` melakukan langkah terakhir dengan mengisi baris indeks `2`, kolom indeks `1` (yang tadinya berisi string kosong `" "`) menjadi `"X"`. Ubah nilai tersebut di dalam array `board`!
2. Buatlah logika pengecekan **Diagonal Utama** (dari pojok kiri-atas ke pojok kanan-bawah, yaitu index `[0][0]`, `[1][1]`, dan `[2][2]`).
3. Periksa apakah ketiga elemen diagonal utama tersebut sama nilainya (misal sama-sama `"X"`).
4. Jika ketiga diagonal utama bernilai sama, cetak `"Pemain X Menang Secara Diagonal!"`. Jika tidak, cetak `"Belum ada pemenang diagonal"`.

---

## ✅ Kunci Jawaban / Referensi Solusi

Jika kamu sudah selesai mencoba mengerjakan kesepuluh soal di atas, silakan cocokkan kodenya di bawah ini:

```javascript
// ==========================================
// --- SOAL 1 (Easy) ---
// ==========================================
let hewan = ["kucing", "anjing", "kelinci"];

hewan.push("hamster"); // ["kucing", "anjing", "kelinci, hamster"]
hewan.unshift("burung"); // ["burung, kucing", "anjing", "kelinci, hamster"]
hewan.pop(); // ["burung, kucing", "anjing", "kelinci"]
hewan.shift(); // [kucing", "anjing", "kelinci"]

console.log(hewan);
console.log(`- Jumlah: ${hewan.length}`);

// ==========================================
// --- SOAL 2 (Easy) ---
// ==========================================
const buahA = ["apel", "pisang", "mangga"];
const buahB = ["jeruk", "durian", "anggur"];

const slicedBuahA = buahA.slice(1, 3); // ["pisang", "mangga"]
const semuaBuah = buahB.concat(slicedBuahA);

console.log(semuaBuah); // [ 'jeruk', 'durian', 'anggur', 'pisang', 'mangga' ]

// ==========================================
// --- SOAL 3 (Easy) ---
// ==========================================
let angka = [10, 20, 30, 40, 50];

angka.splice(2, 1, 25, 35); // [10, 20, 25, 35, 40, 50]

console.log(angka); // [10, 20, 25, 35, 40, 50]

// ==========================================
// --- SOAL 4 (Easy) ---
// ==========================================
const tim = ["Azriel", "Bryan", "Erika", "Gwen"];

const erikaIndeks = tim.indexOf("Erika");
const isBudi = tim.includes("Budi");

console.log(`- Indeks Erika ${erikaIndeks}, Apakah Budi ada?: ${isBudi}`);

// ==========================================
// --- SOAL 5 (Easy) ---
// ==========================================
const matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

const tengah = matrix[1][1]; // 50
const pojokBawah = matrix[2][2]; // 90

console.log(`- Hasil ${tengah} + ${pojokBawah} = ${tengah + pojokBawah}`); // 140

// ==========================================
// --- SOAL 6 (Study Case 1 - Easy) ---
// ==========================================
let antrean = ["Budi", "Siti", "Andi"];

antrean.push("Dewi"); // ["Budi", "Siti", "Andi", "Dewi"]
const pasienDipanggil = antrean.unshift("Pak Eko"); // ["Pak Eko", "Budi", "Siti", "Andi", "Dewi"]
antrean.shift(); // ["Budi", "Siti", "Andi", "Dewi"]

console.log(`- Pasien Dipanggil: ${pasienDipanggil}`);
console.log("- Sisa Antrean", antrean); // ["Budi", "Siti", "Andi", "Dewi"]

// ==========================================
// --- SOAL 7 (Study Case 2 - Easy) ---
// ==========================================
let keranjang = ["Susu", "Roti", "Keju", "Minyak"];

const kejuIndeks = keranjang.indexOf("Keju"); // 2

keranjang.includes(keranjang[kejuIndeks])
  ? keranjang.splice(kejuIndeks, 1) // Menghapus Keju
  : keranjang;

keranjang.includes("Susu") ? console.log("- Susu siap dibayar") : keranjang;

console.log("- Keranjang akhir: ", keranjang);

// ==========================================
// --- SOAL 8 (Study Case 3 - Medium) ---
// ==========================================
let stokLama = ["Laptop Dell", "Mouse Logitech", "Keyboard Keychron"];
let stokBaru = ["Monitor LG", "Webcam Anker"];

const stokTotal = stokLama.concat(stokBaru);
const MouseLogIndeks = stokTotal.indexOf("Mouse Logitech");

stokTotal.includes(stokTotal[MouseLogIndeks])
  ? stokTotal.splice(MouseLogIndeks, 1, "Mouse Razer") // Mouse Logitech -> Mouse Razer
  : stokTotal;

const stokDisplay = stokTotal.slice(0, 3);

console.log("- Stock Total: ", stokTotal);
console.log("- Stock Display: ", stokDisplay);


// ==========================================
// --- SOAL 9 (Study Case 4 - Medium) ---
// ==========================================
let riwayat = [100000, -25000, -50000, 200000, -75000];

const transaksiBatal = riwayat.pop();
console.log("Soal 9 Transaksi Batal:", transaksiBatal);

const duaTeratas = riwayat.slice(0, 2);
console.log("2 Transaksi Teratas:", duaTeratas);
console.log("Sisa Riwayat:", riwayat);

// ==========================================
// --- SOAL 10 (Study Case 5 - Hard) ---
// ==========================================
let board = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", " ", "X"],
];

board[2][1] = "X"; // " " -> "X"

const d1 = board[0][0]; // X
const d2 = board[1][1]; // X
const d3 = board[2][2]; // O

d1 === d2 && d2 === d3
  ? console.log("PemainX menang secara diagona!")
  : console.log("Belum ada pemenang diagonal");

```

---

🎉 **Selamat Mengerjakan Hari ke-10! Kuasai Array & Logika Multidimensi untuk Menghadapi Algoritma Kompleks!**
README.md
Menampilkan README.md.
