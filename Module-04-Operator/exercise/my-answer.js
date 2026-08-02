//🔹 Bagian 1: Konsep Dasar Operator (Soal 1 - 5)
console.log(`\n🔹 Bagian 1: Konsep Dasar Operator (Soal 1 - 5):\n`);

console.log(`Soal 1: Modulus & Eksponen (Aritmatika).\n`);
let a = 27;
let b = 5;
let result = a % b;
console.log(`- Soal 1: ${result ** 3}`);

console.log(`\nSoal 2: Shorthand Assignment.\n`);
let tabungan = 100000;
tabungan += 50000;
tabungan -= 20000;
tabungan *= 2;
console.log("- Soal 2: Rp " + tabungan);

console.log(`\nSoal 3: Strict vs Loose Comparison/\n`);
console.log(10 == "10"); // Output: true
// Penjelasan: Operator `==` mengecek apakah kedua value sama. namun tidak spesifik mengecek apakah tipe datanya sama.
console.log(10 === " 10"); // Output: false
// Penjelasan: Operator `===` mengecek apakah kedua value DAN tipe datanya sama.
console.log(5 !== "5"); // Output: true
// Penjelasan: Operator `!==` mengecek apakah kedua value DAN tipe datanya tidak sama.
console.log(5 != "5"); // Output: false
// Penjelasan: Operator `!=` mengecek apakah kedua value tidak sama. namun tidak secara spesifik mengecek apakah tipe datanya tidak sama.

console.log(`\nSoal 4: Gabungan Logika (AND, OR, NOT).\n`);

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

console.log(`\nSoal 5: Ternary Operator Dasar.\n`);

const umur = 16;
const statusSim = umur >= 17 ? "Bisa membuat SIM" : "Belum bisa Membuat SIM";
console.log(`Soal 5: ${statusSim}`);

//🔹 Bagian 2: Study Case / Studi Kasus Dunia Nyata (Soal 6 - 10).
console.log(
  "\n🔹 Bagian 2: Study Case / Studi Kasus Dunia Nyata (Soal 6 - 10):\n",
);

console.log("Study Case 1: Program Kasir Warung (Aritmatika & Assignment):\n");

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

console.log("\nStudy Case 2: Sistem Diskon Belanja (Comparison & Ternary):\n");

const totalBelanjaan = 120000;

const isGetDiscount =
  totalBelanjaan >= 100000
    ? totalBelanjaan - totalBelanjaan * 0.1
    : totalBelanjaan;

console.log(`- Case 2 Total Bayar: Rp ${isGetDiscount}`);

console.log(
  "\nStudy Case 3: Kualifikasi Tiket Bioskop (Logic Operator && & ||):\n",
);

const umurPenonton = 15;
const punyaTiket = true;
const didampingiOrangTua = true;

const bisaMasukBioskop = (umur >= 18 && punyaTiket) || didampingiOrangTua;
console.log(`- Case 3 Bisa Masuk Bioskop: ${bisaMasukBioskop}`);

console.log(
  "\nStudy Case 4: Sistem Validasi Form Login (Logic & Strict Comparison):\n",
);

const inputUsername = "Azriel";
const inputPassword = "password123";

const dbUsername = "Azriel";
const dbPassword = "password123";

const isLoginSuccess =
  inputUsername === dbUsername && inputPassword === dbPassword
    ? `Selamat datang ${dbUsername}`
    : "Username atau password anda salah!";

console.log(`- Case 4 Login Status: ${isLoginSuccess}`);

console.log(
  "\nStudy Case 5: Penentu Kelulusan & Nilai Plus (Complex Operators):\n",
);

const nilaiUjian = 72;
const nilaiKehadiran = 85;
const isPrestasi = true;
const isLulus = (nilaiUjian > 75 && nilaiKehadiran >= 80) || isPrestasi;

const pesanKelulusan = isLulus
  ? "Selamat, Anda Dinyatakan LULUS!"
  : "Mohon maaf, Anda Harus Mengulang";

console.log(`- Case 5 Kelulusan: ${pesanKelulusan}`);
