// 🔹 Bagian 1: Konsep Dasar Object (Soal 1 - 5)

console.log("🔹 Bagian 1: Konsep Dasar Object (Soal 1 - 5)\n");

// Soal 1: Membuat & Mengakses Object Sederhana — 🟢 [EASY]
console.log("\nSoal 1: Membuat & Mengakses Object Sederhana — 🟢 [EASY]:\n");

let laptop = {
  brand: "Asus",
  tipe: "ROG",
  ram: 16,
  isSSD: true,
};

console.log(`- Laptop ${laptop.brand} memiliki RAM sebesar ${laptop.ram} GB`);

// Soal 2: Menambah, Mengubah, & Menghapus Properti — 🟢 [EASY]
console.log(
  "\nSoal 2: Menambah, Mengubah, & Menghapus Properti — 🟢 [EASY]:\n",
);

let smartphone = {
  merk: "Samsung",
  harga: 5000000,
  warna: "Hitam",
};

smartphone.harga = 4500000;
smartphone.garansi = "1 Tahun";
delete smartphone.warna;

console.log("- Hasil akhir: ", smartphone);

// Soal 3: Destructuring Object — 🟢 [EASY]
console.log("\nSoal 3: Destructuring Object — 🟢 [EASY]:\n");

const user = {
  username: "coder_pro",
  email: "coder@gmail.com",
  role: "Admin",
};

const { username, role } = user;

console.log(`- User ${username} memiliki persan sebagai ${role}`);

// Soal 4: Nested Object (Object Bersarang) — 🟢 [EASY]
console.log("\nSoal 4: Nested Object (Object Bersarang) — 🟢 [EASY]:\n");

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

// Soal 5: Pengaksesan Properti Dinamis dengan Bracket Notation — 🟢 [EASY]
console.log(
  "\nSoal 5: Pengaksesan Properti Dinamis dengan Bracket Notation — 🟢 [EASY]:\n",
);

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

// 🔹 Bagian 2: Study Case / Studi Kasus (Soal 6 - 10)

console.log("\n🔹 Bagian 2: Study Case / Studi Kasus (Soal 6 - 10)\n");

console.log(
  "\nStudy Case 1: Profil Karakter Game & Status Kesehatan — 🟢 [EASY]:\n",
);

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

// Study Case 2: Sistem Kasir & Diskon Member (Ternary) — 🟢 [EASY]

console.log(
  "\nStudy Case 2: Sistem Kasir & Diskon Member (Ternary) — 🟢 [EASY]:\n",
);

let transaksi = {
  namaPelanggan: "Rina",
  isMember: true,
  totalBelanja: 200000,
};

const persenDiskon = transaksi.isMember ? 0.1 : 0;
const potonganHarga = transaksi.totalBelanja * persenDiskon;
transaksi.totalBayar = transaksi.totalBelanja - potonganHarga;

console.log("- Hasil Akhir", transaksi);

// Study Case 3: Pembaruan Profil Akun Medsos — 🟡 [MEDIUM]

console.log("\nStudy Case 3: Pembaruan Profil Akun Medsos — 🟡 [MEDIUM]:\n");

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

// Study Case 4: Pemesanan Tiket Bioskop & Array of Objects — 🟡 [MEDIUM]

console.log(
  "\nStudy Case 4: Pemesanan Tiket Bioskop & Array of Objects — 🟡 [MEDIUM]:\n",
);

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

// Study Case 5: Simulasi Stat Pertarungan RPG (Complex Object) — 🔴 [HARD]

console.log(
  "\nStudy Case 5: Simulasi Stat Pertarungan RPG (Complex Object) — 🔴 [HARD]:\n",
);

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