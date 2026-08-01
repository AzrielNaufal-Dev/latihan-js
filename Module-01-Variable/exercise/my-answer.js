// 🔹 Level 1: Dasarnya Dulu (Membuat & Menampilkan Variabel):
console.log(`\n🔹 Level 1: Dasarnya Dulu (Membuat & Menampilkan Variabel):\n`);

const namaDepan = "Azriel"
const tahunLahir = 2008
let umur = 18

console.log(`Nama: ${namaDepan}`)
console.log(`Tahun: ${tahunLahir}`)
console.log(`Umur: ${umur}`)

// 🔹 Level 2: Perubahan Nilai (`let` vs `const`):
console.log(`\n🔹 Level 2: Perubahan Nilai ("let" vs "const"):\n`);

let kotaTinggal = "Bekasi"
console.log(kotaTinggal);

kotaTinggal = "Tokyo"
console.log(kotaTinggal);

const negara = "Indonesia"
console.log(negara);

/*
negara = jepang
console.log(negara) Output: `TypeError: Assignment to constant variable`
*/

// 🔹 Level 3: Menghitung Umur Otomatis:
console.log(`\n🔹 Level 3: Menghitung Umur Otomatis:\n`);

const tahunSekarang = 2026
const tahunLahirSaya = 2008
let umurSaya = tahunSekarang - tahunLahirSaya

console.log(`Umur saya di tahun ${tahunSekarang} adalah: [${umurSaya}] tahun`);

// 🔹 Level 4: Eksperimen Scope (`var` vs `let`):
console.log(`\n🔹 Level 4: Eksperimen Scope ("var" vs "let"):\n`);

// Jalankan dua blok kode berikut di console, amati perbedaannya, dan jawab pertanyaannya:

// Kode A (`var`):
if (true) {
  var rahasiaVar = "Saya bisa diakses di luar!";
}
console.log(rahasiaVar);

// Kode B (`let`):
if (true) {
  let rahasiaLet = "Saya tersembunyi!";
  console.log(rahasiaLet);
  
}
// console.log(rahasiaLet); Output: `Error`

/*
Pertanyaan:
- Mengapa Kode A berhasil mencetak teks, sedangkan Kode B menghasilkan `ReferenceError`?
Answer: karna kode A memakai 'var'. 'var' bersifat Function Scope, mampu di akses di local maupun global scope sedangkan 'let' tidak. 'let' bersifat Block Scope, hanya bisa di panggil di dalam scope yang sama/local scope

- Variabel mana (`var` atau `let`) yang lebih aman digunakan agar data tidak bocor keluar blok kode?
Answer: 'let' adalah best practice jika hanya ingin di panggil di dalam scope yang sama dan tidak dapat di akses dari luar scope
*/

console.log(`\nPertanyaan:
- Mengapa Kode A berhasil mencetak teks, sedangkan Kode B menghasilkan 'ReferenceError'?
Answer: karna kode A memakai 'var'. 'var' bersifat Function Scope, mampu di akses di local maupun global scope sedangkan 'let' tidak. 'let' bersifat Block Scope, hanya bisa di panggil di dalam scope yang sama/local scope

- Variabel mana ('var' atau 'let') yang lebih aman digunakan agar data tidak bocor keluar blok kode?
Answer: 'let' adalah best practice jika hanya ingin di panggil di dalam scope yang sama dan tidak dapat di akses dari luar scope`);
