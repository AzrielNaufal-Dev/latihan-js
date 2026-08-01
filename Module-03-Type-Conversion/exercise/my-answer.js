// 🔹 Level 1: Tebak Output Implicit Conversion (Coercion)
console.log(`\n🔹 Level 1: Tebak Output Implicit Conversion (Coercion):\n`);

const a = "10" + 20;
const b = "50" - 10;
const c = "10" * "2";
const d = "100" / "hello";

/*
1. Berapa nilai dari `a` dan apa tipe datanya? 1020 string
2. Berapa nilai dari `b` dan apa tipe datanya? 40 number
3. Berapa nilai dari `c` dan apa tipe datanya? 20 number
4. Berapa nilai dari `d` dan apa tipe datanya? Mengapa nilainya demikian? NaN Number, Penjelasan: karna hanya operasi aritmatika `+` yang bisa menggabungkan 2 atau lebih string.
*/

console.log(
  `str 10 + num 20: ${a} - ${typeof a}
str 50 - num 10: ${b} - ${typeof b}
str 10 x str 2: ${c} - ${typeof c}
str 100 / str hello: ${d} - ${typeof d}`,
);

// 🔹 Level 2: Konversi Angka & String (Explicit Conversion)
console.log(`\n🔹 Level 2: Konversi Angka & String (Explicit Conversion):\n`);

const hargaString = "12500.75";
const hargaInt = parseInt(hargaString);
const hargFloat = parseFloat(hargaString);
console.log(hargaInt, typeof hargaInt); // Bilangan bulat
console.log(hargFloat, typeof hargFloat); // Bilangan desimal

const idPorduk = 404;
const produkStr = idPorduk.toString();
console.log(idPorduk, typeof idPorduk);

const strAngka = "250";
const result = +strAngka;
console.log(result, typeof result);

// 🔹 Level 3: Truthy & Falsy Value Challenge
console.log(`\n🔹 Level 3: Truthy & Falsy Value Challenge:\n`);

/*
Konversikan semua nilai berikut ke tipe `Boolean` menggunakan fungsi `Boolean()` dan tampilkan hasilnya ke console:

1. `Boolean("")` (String kosong)
2. `Boolean(" ")` (String berisi spasi)
3. `Boolean(0)`
4. `Boolean(-10)`
5. `Boolean(null)`
6. `Boolean(undefined)`
7. `Boolean([])` (Array kosong)

Pertanyaan: Sebutkan 5 nilai yang termasuk ke dalam kategori `Falsy Values` di JavaScript!
Answer: 0, null, undifined, "", NaN
*/

console.log(`"" (String kosong): ${Boolean("")}`);
console.log(`" " (String berisi spasi) ${Boolean(" ")}`);
console.log(`0: ${Boolean(0)}`);
console.log(`-10: ${Boolean(-10)}`);
console.log(`null: ${Boolean(null)}`);
console.log(`undifined: ${Boolean(undefined)}`);
console.log(`[] (Array kosong): ${Boolean([])}`);

// 🔹 Level 4: Mini Studi Kasus - Kalkulator Input Form
console.log(`\n🔹 Level 4: Mini Studi Kasus - Kalkulator Input Form:\n`);

const inputHarga = "75000";
const inputDiskon = "0.10";

const harga = Number(inputHarga);
const diskon = parseFloat(inputDiskon);
const total = harga - harga * diskon;

// console
console.log(
  `Harga: ${harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
Diskon: ${diskon} 
Total pembayaran: ${total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`,
);
