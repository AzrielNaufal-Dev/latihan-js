# 🚀 Exercise Hari 3: Type Conversion dalam JavaScript (Implicit vs Explicit)

Selamat datang di latihan hari ketiga! Setelah mempelajari variabel dan tipe data, kali ini kamu akan melatih pemahaman mengenai **Type Conversion** (Konversi Tipe Data) di JavaScript.

JavaScript memiliki dua jenis konversi tipe data:
1. **Implicit Conversion (Coercion):** Konversi yang dilakukan secara **otomatis** oleh JavaScript di belakang layar saat melakukan operasi tertentu.
2. **Explicit Conversion:** Konversi yang dilakukan secara **sengaja oleh programmer** menggunakan fungsi/metode bawaan JavaScript seperti `String()`, `Number()`, `parseInt()`, `parseFloat()`, `Boolean()`, atau operator unary `+`.

---

## 🎯 Tujuan Pembelajaran
- Memahami perilaku operasi aritmatika unik pada String dan Number (`+` vs `-`, `*`, `/`).
- Menguasai cara melakukan konversi eksplisit menggunakan `String()`, `Number()`, `parseInt()`, `parseFloat()`, dan `Boolean()`.
- Memahami konsep **Falsy Values** (`0`, `""`, `null`, `undefined`, `NaN`, `false`) dan **Truthy Values**.
- Menggunakan operator unik seperti Unary `+` untuk mengkonversi string menjadi angka.

---

## 💻 Persiapan
Buka VS Code, buat file baru di dalam proyekmu (misal: `exercise-conversion.js`), lalu jalankan di terminal menggunakan Node.js:
```bash
node exercise-conversion.js
```
Atau jalankan langsung di **Browser Console** (`F12`).

---

## 📝 Soal-Soal Latihan

### 🔹 Level 1: Tebak Output Implicit Conversion (Coercion)
Tanpa menjalankan kodenya terlebih dahulu, coba tebak hasil dan tipe data dari setiap variabel di bawah ini, kemudian buktikan dengan `console.log()` dan `typeof`!

**Tugas:**
```javascript
const a = "10" + 20;
const b = "50" - 10;
const c = "10" * "2";
const d = "100" / "hello";
```
1. Berapa nilai dari `a` dan apa tipe datanya?
2. Berapa nilai dari `b` dan apa tipe datanya?
3. Berapa nilai dari `c` dan apa tipe datanya?
4. Berapa nilai dari `d` dan apa tipe datanya? Mengapa nilainya demikian?

---

### 🔹 Level 2: Konversi Angka & String (Explicit Conversion)
**Tugas:**
1. Buat variabel `const hargaString = "12500.75";`.
2. Konversikan `hargaString` menjadi **bilangan bulat (integer)** menggunakan `parseInt()` dan tampilkan hasilnya beserta tipe datanya.
3. Konversikan `hargaString` menjadi **bilangan desimal (float)** menggunakan `parseFloat()` dan tampilkan hasilnya.
4. Ubah variabel angka `const idProduk = 404;` menjadi **String** menggunakan metode `.toString()` atau fungsi `String()`.
5. Ubah variabel `const strAngka = "250";` menjadi angka menggunakan **Unary Operator `+`** (contoh: `+strAngka`).

---

### 🔹 Level 3: Truthy & Falsy Value Challenge
JavaScript menganggap nilai tertentu sebagai **Falsy** (bernilai `false` saat dikonversi ke Boolean), sedangkan sisanya dianggap **Truthy**.

**Tugas:**
Konversikan semua nilai berikut ke tipe **Boolean** menggunakan fungsi `Boolean()` dan tampilkan hasilnya ke console:

1. `Boolean("")` (String kosong)
2. `Boolean(" ")` (String berisi spasi)
3. `Boolean(0)`
4. `Boolean(-10)`
5. `Boolean(null)`
6. `Boolean(undefined)`
7. `Boolean([])` (Array kosong)

**Pertanyaan:** Sebutkan 5 nilai yang termasuk ke dalam kategori **Falsy Values** di JavaScript!

---

### 🔹 Level 4: Mini Studi Kasus - Kalkulator Input Form
Di dunia nyata, input dari form HTML selalu menghasilkan tipe data **String**. Selesaikan kasus berikut:

**Tugas:**
Bayangkan kamu menerima dua data input dari form user:
```javascript
const inputHarga = "75000";
const inputDiskon = "0.10"; // 10%
```
1. Konversikan `inputHarga` menjadi angka murni.
2. Konversikan `inputDiskon` menjadi angka desimal murni.
3. Hitung **total harga setelah diskon** dengan rumus: `total = harga - (harga * diskon)`.
4. Tampilkan kalimat: `"Total pembayaran: Rp [isi total]"` ke console.

---

## ✅ Kunci Jawaban / Referensi Solusi

Jika kamu sudah selesai mencoba mengerjakan, silakan cocokkan kodenya di bawah ini:

```javascript
// ==========================================
// --- LEVEL 1: Implicit Conversion ---
// ==========================================
const a = "10" + 20;       // "1020" (string) -> Tanda '+' menggabungkan string!
const b = "50" - 10;       // 40 (number)     -> Tanda '-' mengkonversi string "50" ke angka.
const c = "10" * "2";      // 20 (number)     -> Perkalian mengkonversi kedua string ke angka.
const d = "100" / "hello"; // NaN (number)    -> "hello" bukan string angka, sehingga gagal jadi number.

console.log(`a: ${a} (${typeof a})`);
console.log(`b: ${b} (${typeof b})`);
console.log(`c: ${c} (${typeof c})`);
console.log(`d: ${d} (${typeof d})`);

// ==========================================
// --- LEVEL 2: Explicit Conversion ---
// ==========================================
const hargaString = "12500.75";

const hargaInt = parseInt(hargaString);
console.log("Integer:", hargaInt, typeof hargaInt); // 12500 "number"

const hargaFloat = parseFloat(hargaString);
console.log("Float:", hargaFloat, typeof hargaFloat); // 12500.75 "number"

const idProduk = 404;
const idProdukStr = idProduk.toString();
console.log("String ID:", idProdukStr, typeof idProdukStr); // "404" "string"

const strAngka = "250";
const numFast = +strAngka; // Trik cepat menggunakan Unary +
console.log("Unary +:", numFast, typeof numFast); // 250 "number"

// ==========================================
// --- LEVEL 3: Truthy & Falsy ---
// ==========================================
console.log('"" ->', Boolean(""));          // false (Falsy)
console.log('" " ->', Boolean(" "));        // true  (Truthy - ada spasi)
console.log('0 ->', Boolean(0));            // false (Falsy)
console.log('-10 ->', Boolean(-10));        // true  (Truthy - angka selain 0)
console.log('null ->', Boolean(null));      // false (Falsy)
console.log('undefined ->', Boolean(undefined)); // false (Falsy)
console.log('[] ->', Boolean([]));          // true  (Truthy - Object/Array selalu truthy)

// 5 Falsy Values utama: 0, "", null, undefined, NaN

// ==========================================
// --- LEVEL 4: Mini Studi Kasus ---
// ==========================================
const inputHarga = "75000";
const inputDiskon = "0.10";

const harga = Number(inputHarga);
const diskon = parseFloat(inputDiskon);

const total = harga - (harga * diskon);
console.log(`Total pembayaran: Rp ${total}`); // Total pembayaran: Rp 67500
```

---

🎉 **Selamat! Kamu telah menguasai konsep Implicit dan Explicit Type Conversion dalam JavaScript!**