// console.log("\n\n");

// 🔹 Bagian 1: Konsep Dasar Manipulasi & Pencarian (Soal 1 - 5)

console.log(
  "\n🔹 Bagian 1: Konsep Dasar Manipulasi & Pencarian (Soal 1 - 5)\n",
);

console.log(
  "Soal 1: Operasi Tumpukan Kartu (push, pop, shift, unshift) — 🟢 [EASY]:\n",
);

let hewan = ["kucing", "anjing", "kelinci"];

hewan.push("hamster"); // ["kucing", "anjing", "kelinci, hamster"]
hewan.unshift("burung"); // ["burung, kucing", "anjing", "kelinci, hamster"]
hewan.pop(); // ["burung, kucing", "anjing", "kelinci"]
hewan.shift(); // [kucing", "anjing", "kelinci"]

console.log(hewan);
console.log(`- Jumlah: ${hewan.length}`);

console.log(
  "\nSoal 2: Memotong & Menggabungkan Array (slice & concat) — 🟢 [EASY]:\n",
);

const buahA = ["apel", "pisang", "mangga"];
const buahB = ["jeruk", "durian", "anggur"];

const slicedBuahA = buahA.slice(1, 3); // ["pisang", "mangga"]
const semuaBuah = buahB.concat(slicedBuahA);

console.log(semuaBuah); // [ 'jeruk', 'durian', 'anggur', 'pisang', 'mangga' ]

console.log("\nSoal 3: Modifikasi Elemen Spesifik (splice) — 🟢 [EASY]:\n");

let angka = [10, 20, 30, 40, 50];

angka.splice(2, 1, 25, 35); // [10, 20, 25, 35, 40, 50]

console.log(angka); // [10, 20, 25, 35, 40, 50]

console.log(
  "\nSoal 4: Pelacakan Indeks & Keberadaan (indexOf & includes) — 🟢 [EASY]:\n",
);

const tim = ["Azriel", "Bryan", "Erika", "Gwen"];

const erikaIndeks = tim.indexOf("Erika");
const isBudi = tim.includes("Budi");

console.log(`- Indeks Erika ${erikaIndeks}, Apakah Budi ada?: ${isBudi}`);

console.log("\nSoal 5: Navigasi Array 2D (Array Multidimensi) — 🟢 [EASY]:\n");

const matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

const tengah = matrix[1][1]; // 50
const pojokBawah = matrix[2][2]; // 90

console.log(`- Hasil ${tengah} + ${pojokBawah} = ${tengah + pojokBawah}`); // 140

/*
  ===============================================
  🔹 Bagian 2: Study Case / Studi Kasus (Soal 6 - 10)
  ===============================================
*/

console.log("\n🔹 Bagian 2: Study Case / Studi Kasus (Soal 6 - 10)\n");

//  Study Case 1: Antrean Rumah Sakit — 🟢 [EASY]

console.log("Study Case 1: Antrean Rumah Sakit — 🟢 [EASY]:\n");

let antrean = ["Budi", "Siti", "Andi"];

antrean.push("Dewi"); // ["Budi", "Siti", "Andi", "Dewi"]
const pasienDipanggil = antrean.unshift("Pak Eko"); // ["Pak Eko", "Budi", "Siti", "Andi", "Dewi"]
antrean.shift(); // ["Budi", "Siti", "Andi", "Dewi"]


console.log(`- Pasien Dipanggil: ${pasienDipanggil}`);
console.log("- Sisa Antrean", antrean); // ["Budi", "Siti", "Andi", "Dewi"]

// Study Case 2: Sistem Kasir & Keranjang Belanja — 🟢 [EASY]

console.log("\nStudy Case 2: Sistem Kasir & Keranjang Belanja — 🟢 [EASY]:\n");

let keranjang = ["Susu", "Roti", "Keju", "Minyak"];

const kejuIndeks = keranjang.indexOf("Keju"); // 2

keranjang.includes(keranjang[kejuIndeks])
  ? keranjang.splice(kejuIndeks, 1) // Menghapus Keju
  : keranjang;

keranjang.includes("Susu") ? console.log("- Susu siap dibayar") : keranjang;

console.log("- Keranjang akhir: ", keranjang);

// Study Case 3: Manajemen Inventaris Gudang — 🟡 [MEDIUM]

console.log("\nStudy Case 3: Manajemen Inventaris Gudang — 🟡 [MEDIUM]:\n");

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

// Study Case 4: Riwayat Transaksi e-Wallet — 🟡 [MEDIUM]

console.log("\nStudy Case 4: Riwayat Transaksi e-Wallet — 🟡 [MEDIUM]:\n");

let riwayat = [100000, -25000, -50000, 200000, -75000];

const transaksiBatal = riwayat.pop();
console.log(`- Nominal yang di batalkan: ${transaksiBatal}`);

const duaTeratas = riwayat.slice(0, 2);
console.log("- Dua Transaksi Teratas: ", duaTeratas);

console.log("- Sisa Riwayat: ", riwayat);

// Study Case 5: Papan Permainan Tic-Tac-Toe & Validasi Pemenang — 🔴 [HARD]

console.log(
  "\nStudy Case 5: Papan Permainan Tic-Tac-Toe & Validasi Pemenang — 🔴 [HARD]:\n",
);

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
