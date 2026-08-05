# 🚀 Exercise Hari 10: Object dalam JavaScript

Selamat datang di latihan hari ke-11! Hari ini kamu akan melatih pemahaman mengenai **Object** di JavaScript, mencakup:
1. **Cara Membuat Object & Mengakses Properti:** Dot Notation (`obj.prop`) & Bracket Notation (`obj["prop"]`).
2. **Manipulasi Properti:** Menambah, mengubah, dan menghapus (`delete`) properti.
3. **Destructuring Object:** Mengambil properti langsung ke dalam variabel.
4. **Nested Object (Object Bersarang):** Mengakses data terstruktur bertingkat.
5. **Alternatif Logika:** Penggunaan **Ternary Operator** (`kondisi ? true : false`) untuk seleksi kondisi tanpa klausa `if/else`.

> ⚠️ **Catatan Penting:**
> - **TIDAK ADA** soal yang menggunakan **Function** (`function` / `arrow function`).
> - **TIDAK ADA** soal yang menggunakan **If / Else**.
> - Jika dibutuhkan logika pilihan (seperti pada study case), kamu bisa menggunakan **Ternary Operator** atau pengaksesan properti secara langsung.

Latihan ini dirancang sebanyak **10 Soal (Soal 1-5 Konsep Dasar, Soal 6-10 Study Case)** dengan tingkat kesulitan berjenjang (**Easy, Medium, Hard**) untuk melatih *critical thinking* dan *problem solving*-mu!

---

## 🎯 Tingkat Kesulitan Soal
- **🟢 Easy (Soal 1 - 7):** Pengenalan sintaks dasar, manipulasi properti, destructuring, dan nested object.
- **🟡 Medium (Soal 8 - 9):** Studi kasus terstruktur menggunakan array of objects dan ternary operator.
- **🔴 Hard (Soal 10):** Studi kasus kompleks berupa pencatatan data game/karakter bersarang tingkat lanjut tanpa pengulangan/fungsi.

---

## 💻 Persiapan
Buka VS Code, buat file baru (misal: `exercise-object.js`), lalu jalankan di terminal:
```bash
node exercise-object.js
```

---

## 📝 Soal-Soal Latihan (Total 10 Soal)

### 🔹 Bagian 1: Konsep Dasar Object (Soal 1 - 5)

#### 1️⃣ Soal 1: Membuat & Mengakses Object Sederhana — 🟢 [EASY]
Buat sebuah object bernama `laptop` dengan properti:
- `brand`: `"Asus"`
- `tipe`: `"ROG"`
- `ram`: `16`
- `isSSD`: `true`

**Tugas:**
1. Akses properti `brand` menggunakan **Dot Notation**.
2. Akses properti `ram` menggunakan **Bracket Notation**.
3. Cetak ke console dengan format: `"Laptop [brand] memiliki RAM sebesar [ram] GB"`.

---

#### 2️⃣ Soal 2: Menambah, Mengubah, & Menghapus Properti — 🟢 [EASY]
Diberikan object berikut:
```javascript
let smartphone = {
  merk: "Samsung",
  harga: 5000000,
  warna: "Hitam"
};
```
**Tugas:**
1. Ubah nilai `harga` menjadi `4500000`.
2. Tambahkan properti baru `garansi` dengan nilai `"1 Tahun"`.
3. Hapus properti `warna` menggunakan operator `delete`.
4. Cetak object `smartphone` akhir ke console.

---

#### 3️⃣ Soal 3: Destructuring Object — 🟢 [EASY]
Diberikan object profil pengguna:
```javascript
const user = {
  username: "coder_pro",
  email: "coder@gmail.com",
  role: "Admin"
};
```
**Tugas:**
1. Gunakan teknik **Destructuring Object** untuk mengekstrak `username` dan `role` ke dalam variabel terpisah.
2. Cetak pesan ke console: `"User [username] memiliki peran sebagai [role]"`.

---

#### 4️⃣ Soal 4: Nested Object (Object Bersarang) — 🟢 [EASY]
Diberikan data organisasi berikut:
```javascript
const perusahaan = {
  nama: "PT Tech Utama",
  lokasi: "Jakarta",
  departemen: {
    namaDept: "IT Developer",
    manager: {
      namaManager: "Budi Santoso",
      pengalaman: "5 Tahun"
    }
  }
};
```
**Tugas:**
1. Akses nama departemen (`namaDept`) dan simpan ke variabel `dept`.
2. Akses nama manager (`namaManager`) dan simpan ke variabel `manager`.
3. Cetak ke console: `"Departemen [dept] dipimpin oleh [manager]"`.

---

#### 5️⃣ Soal 5: Pengaksesan Properti Dinamis dengan Bracket Notation — 🟢 [EASY]
Diberikan object harga produk dan variabel kunci pilihan:
```javascript
const daftarHarga = {
  kopi: 18000,
  teh: 10000,
  roti: 15000
};

const itemPilihan = "kopi";
```
**Tugas:**
1. Akses harga dari `itemPilihan` pada object `daftarHarga` menggunakan **Bracket Notation** (bukan dot notation).
2. Cetak ke console: `"Harga kopi adalah Rp[harga]"`.

---

### 🔹 Bagian 2: Study Case / Studi Kasus (Soal 6 - 10)

#### 6️⃣ Study Case 1: Profil Karakter Game & Status Kesehatan — 🟢 [EASY]
Sebuah game merepresentasikan pahlawan dalam bentuk object:
```javascript
let hero = {
  nama: "Alucard",
  hp: 100,
  level: 5,
  role: "Fighter"
};
```
**Kasus:**
1. Hero menerima damage sebesar `30`. Kurangi nilai `hp` sebesar `30`.
2. Karena berhasil mengalahkan musuh, naikkan `level` hero sebesar `1`.
3. Tentukan status hero menggunakan **Ternary Operator**: Jika `hp` lebih besar dari `0`, simpan string `"Hidup"` ke variabel `status`, jika tidak simpan `"Mati"`.
4. Cetak nama, HP terbaru, Level terbaru, dan Status hero.

---

#### 7️⃣ Study Case 2: Sistem Kasir & Diskon Member (Ternary) — 🟢 [EASY]
Data keranjang belanja milik seorang pelanggan tersimpan dalam bentuk object:
```javascript
let transaksi = {
  namaPelanggan: "Rina",
  isMember: true,
  totalBelanja: 200000
};
```
**Kasus:**
1. Tentukan besaran persen diskon menggunakan **Ternary Operator**: Jika `isMember` bernilai `true`, diskon adalah `0.1` (10%), jika `false` diskon adalah `0`. Simpan nilai ini ke variabel `persenDiskon`.
2. Hitung `potonganHarga` = `totalBelanja * persenDiskon`.
3. Hitung `totalBayar` = `totalBelanja - potonganHarga`.
4. Tambahkan properti baru `totalBayar` ke dalam object `transaksi`.
5. Cetak object `transaksi` akhir.

---

#### 8️⃣ Study Case 3: Pembaruan Profil Akun Medsos — 🟡 [MEDIUM]
Sistem pengguna media sosial menyimpan data akun sebagai berikut:
```javascript
let akunMedsos = {
  id: 1029,
  username: "dev_siti",
  biodata: {
    bio: "Fullstack Enthusiast",
    website: "https://siti.dev"
  },
  statistik: {
    followers: 1200,
    following: 300
  }
};
```
**Kasus:**
1. Seorang follower baru mengikuti `akunMedsos`. Tambahkan nilai `followers` sebesar `1`.
2. User memperbarui bio-nya menjadi `"Learning JavaScript Day 11"`. Ubah properti `bio` di dalam `biodata`.
3. Tentukan kategori akun menggunakan **Ternary Operator**: Jika `followers` >= 1000, simpan `"Popular"` ke variabel `kategori`, jika tidak simpan `"Reguler"`.
4. Ambil `username` dan `followers` terbaru menggunakan **Destructuring Object**.
5. Cetak pesan: `"Akun [username] memiliki [followers] followers dan berkategori [kategori]"`.

---

#### 9️⃣ Study Case 4: Pemesanan Tiket Bioskop & Array of Objects — 🟡 [MEDIUM]
Diberikan daftar film yang tersedia dalam bentuk Array of Objects:
```javascript
const daftarFilm = [
  { judul: "Avengers", harga: 50000, studio: "A" },
  { judul: "Interstellar", harga: 60000, studio: "B" }
];

let pesanan = {
  namaPemesan: "Budi",
  filmDipilih: daftarFilm[1], // Memilih Interstellar
  jumlahTiket: 2
};
```
**Kasus:**
1. Akses `harga` film yang dipilih pesanan dari object `pesanan.filmDipilih.harga`.
2. Hitung total biaya tiket = `jumlahTiket * harga`.
3. Tentukan apakah pemesan mendapat bonus pop-corn menggunakan **Ternary Operator**: Jika `jumlahTiket` >= 2, bonusnya `"Gratis Popcorn"`, jika tidak `"Tidak Ada Bonus"`. Simpan di variabel `bonus`.
4. Buat object baru `struk` yang memuat properti:
   - `pemesan`: `pesanan.namaPemesan`
   - `judulFilm`: `pesanan.filmDipilih.judul`
   - `totalBiaya`: total biaya yang dihitung
   - `bonusItem`: `bonus`
5. Cetak object `struk` tersebut.

---

#### 🔟 Study Case 5: Simulasi Stat Pertarungan RPG (Complex Object) — 🔴 [HARD]
Diberikan dua karakter game RPG:
```javascript
let player = {
  nama: "Knight",
  stats: { attack: 40, defense: 15 },
  hp: 100
};

let enemy = {
  nama: "Goblin",
  stats: { attack: 25, defense: 5 },
  hp: 50
};
```
**Kasus (Critical Thinking senza Function/If-Else):**
1. Player menyerang Enemy. Hitung net damage yang diterima Enemy:
   - `netDamageToEnemy` = `player.stats.attack - enemy.stats.defense`.
   - Kurangi `enemy.hp` dengan `netDamageToEnemy`.
2. Enemy membalas menyerang Player. Hitung net damage yang diterima Player:
   - `netDamageToPlayer` = `enemy.stats.attack - player.stats.defense`.
   - Kurangi `player.hp` dengan `netDamageToPlayer`.
3. Tentukan hasil pertarungan Player dan Enemy setelah saling menyerang menggunakan **Ternary Operator**:
   - `statusPlayer` = `player.hp > 0 ? "Survives" : "Defeated"`
   - `statusEnemy`  = `enemy.hp > 0 ? "Survives" : "Defeated"`
4. Tambahkan properti `status` ke masing-masing object `player` dan `enemy`.
5. Destructure `nama`, `hp`, dan `status` dari `player` maupun `enemy`.
6. Cetak ringkasan ringkas ke console:
   `"Player [namaPlayer]: HP [hpPlayer] ([statusPlayer]) | Enemy [namaEnemy]: HP [hpEnemy] ([statusEnemy])"`

---

## ✅ Kunci Jawaban / Referensi Solusi

Jika kamu sudah selesai mencoba mengerjakan kesepuluh soal di atas, silakan cocokkan kodenya di bawah ini:

```javascript
// ==========================================
// --- SOAL 1 (Easy) ---
// ==========================================
let laptop = {
  brand: "Asus",
  tipe: "ROG",
  ram: 16,
  isSSD: true,
};

console.log(`- Laptop ${laptop.brand} memiliki RAM sebesar ${laptop.ram} GB`);


// ==========================================
// --- SOAL 2 (Easy) ---
// ==========================================
let smartphone = {
  merk: "Samsung",
  harga: 5000000,
  warna: "Hitam",
};

smartphone.harga = 4500000;
smartphone.garansi = "1 Tahun";
delete smartphone.warna;

console.log("- Hasil akhir: ", smartphone);


// ==========================================
// --- SOAL 3 (Easy) ---
// ==========================================
const user = {
  username: "coder_pro",
  email: "coder@gmail.com",
  role: "Admin",
};

const { username, role } = user;

console.log(`- User ${username} memiliki persan sebagai ${role}`);


// ==========================================
// --- SOAL 4 (Easy) ---
// ==========================================
const perusahaan = {
  nama: "PT Tech Utama",
  lokasi: "Jakarta",
  departemen: {
    namaDept: "IT Developer",
    manager: {
      namaManager: "Budi Santoso",
      pengalaman: "5 Tahun",
    },
  },
};

const {
  departemen: {
    namaDept: dept,
    manager: { namaManager: manager },
  },
} = perusahaan;

console.log(`- Departemen ${dept} dipimpin oleh ${manager}`);


// ==========================================
// --- SOAL 5 (Easy) ---
// ==========================================
const daftarHarga = {
  kopi: 18000,
  teh: 10000,
  roti: 15000,
};

const itemPilihan = "kopi";
const hargaItem = daftarHarga[itemPilihan];
console.log(
  `- Harga kopi adalah ${hargaItem.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`,
);


// ==========================================
// --- SOAL 6 (Study Case 1 - Easy) ---
// ==========================================
let hero = {
  nama: "Alucard",
  hp: 100,
  level: 5,
  role: "Fighter",
};

hero.hp -= 30;
hero.level += 1;
hero.hp >= 0 ? (hero.status = "Hidup") : (hero.status = "Mati");

console.log(
  `- Nama: ${hero.nama}, Hp: ${hero.hp}, level: ${hero.level}, Role: ${hero.role}`,
);


// ==========================================
// --- SOAL 7 (Study Case 2 - Easy) ---
// ==========================================
let transaksi = {
  namaPelanggan: "Rina",
  isMember: true,
  totalBelanja: 200000,
};

const persenDiskon = transaksi.isMember ? 0.1 : 0;
const potonganHarga = transaksi.totalBelanja * persenDiskon;
transaksi.totalBayar = transaksi.totalBelanja - potonganHarga;

console.log("- Hasil Akhir", transaksi);


// ==========================================
// --- SOAL 8 (Study Case 3 - Medium) ---
// ==========================================
let akunMedsos = {
  id: 1029,
  username: "dev_siti",
  biodata: {
    bio: "Fullstack Enthusiast",
    website: "https://siti.dev",
  },
  statistik: {
    followers: 1200,
    following: 300,
  },
};

let {
  username: usernameMedsos,
  biodata: { bio, website },
  statistik: { followers, following },
} = akunMedsos;

followers += 1;
bio = "Learning JavaScript Day 11";

const kategori = followers >= 1000 ? "Populer" : "Reguler";

console.log(
  `- Akun ${usernameMedsos} memiliki ${followers} dan kategori ${kategori}`,
);


// ==========================================
// --- SOAL 9 (Study Case 4 - Medium) ---
// ==========================================
const daftarFilm = [
  { judul: "Avengers", harga: 50000, studio: "A" },
  { judul: "Interstellar", harga: 60000, studio: "B" },
];

let pesanan = {
  namaPemesan: "Budi",
  filmDipilih: daftarFilm[1], // Memilih Interstellar
  jumlahTiket: 2,
};

let {
  filmDipilih: { judul, harga },
  jumlahTiket,
} = pesanan;

const totalBiayaTiket = jumlahTiket * harga;
const bonus = jumlahTiket >= 2 ? "Gratis Popcorn" : "Tidak Ada Bonus";

const struk = {
  pemesan: pesanan.namaPemesan,
  judulFilm: judul,
  totalBiaya: totalBiayaTiket,
  bonusItem: bonus,
};

console.log("- Hasil Akhir: ", struk);


// ==========================================
// --- SOAL 10 (Study Case 5 - Hard) ---
// ==========================================
let player = {
  nama: "Knight",
  stats: { attack: 40, defense: 15 },
  hp: 100,
};

let enemy = {
  nama: "Goblin",
  stats: { attack: 25, defense: 5 },
  hp: 50,
};

let {
  nama: namaPlayer,
  stats: { attack: attackPlayer, defense: defensePlayer },
  hp: hpPlayer,
} = player;

let {
  nama: namaEnemy,
  stats: { attack: attackEnemy, defense: defenseEnemy },
  hp: hpEnemy,
} = enemy;

// 1. Player serang Enemy
const netDamageToEnemy = attackPlayer - defenseEnemy;
hpEnemy -= netDamageToEnemy;

// 2. Enemy serang Player
const netDamageToPlayer = attackEnemy - defensePlayer;
hpPlayer -= netDamageToPlayer;

// 3. Status dengan Ternary
const statusPlayer = hpPlayer > 0 ? "Survives" : "Defeated";
const statusEnemy = hpEnemy > 0 ? "Survives" : "Defeated";

// 4. Destructuring & Print
player.statusPlayer = statusPlayer
enemy.statusEnemy = statusEnemy

console.log(`Player ${namaPlayer}: HP ${hpPlayer} (${player.statusPlayer}) | Enemy ${namaEnemy}: HP ${hpEnemy} (${enemy.statusEnemy})`);
```

---

🎉 **Selamat Mengerjakan Hari ke-11! Kuasai Manipulasi Object & Ternary Operator Tanpa Perlu Function / If-Else!**