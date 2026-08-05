# 🛒 Mini Project 02: E-Commerce Transaction & Analytics System

Project study case kedua dalam tantangan **#100DaysOfCode** JavaScript (Hari ke-11). Project ini mensimulasikan sistem *backend data processing* e-commerce sederhana yang menerima *raw data* kompleks (Nested Array of Objects), melakukan sanitasi data, kalkulasi keuangan/pajak/diskon, pengolahan tanggal *loyalty*, serta menyusunnya kembali menjadi struktur objek bersih (`processedReceipt`) dan mencetaknya ke *console*.

---

## 🚀 Fitur & Kemampuan Utama

- **Deep Object & Array Destructuring:** Membedah data mentah bertingkat (*nested*) secara efisien untuk mengambil properti pelanggan dan item transaksi.
- **Data Sanitization & Normalization:**
  - Membersihkan *whitespace* dan mengubah nama menjadi *uppercase*.
  - Menyeragamkan format email menjadi *lowercase*.
  - Mengonversi tipe data `string` pada harga dan kuantitas menjadi `number` (`Number()` & `parseInt()`).
- **Advanced Math & Financial Calculation:**
  - Perhitungan subtotal dari multiple items.
  - Penentuan besaran diskon berdasarkan kode voucher dinamis.
  - Perhitungan Pajak PPN (11%) dan penentuan status `isVipTransaction` (Boolean) untuk transaksi > Rp 1.000.000.
  - Generasi angka acak *cashback* terdistribusi adil menggunakan formula batas *min-max* `Math.floor(Math.random() * (max - min + 1)) + min`.
- **Date Manipulation & Loyalty Tracker:**
  - Menghitung durasi *loyalty* pelanggan dalam jumlah hari berdasarkan selisih `transactionDate` dan `joinDate`.
  - Memformat tampilan tanggal ke format standar Indonesia (`toLocaleDateString("id-ID")`).
- **Structured Output Object (`processedReceipt`):** Mengorganisir hasil kalkulasi ke dalam satu objek terstruktur sebelum dicetak menggunakan *Template Literals*.

---

## 📚 Modul Terapan (Modul 01 - Modul 11)

| Modul | Konsep Terapan dalam Project |
| :--- | :--- |
| **Module 01 - 05** | Variables, Data Types, Type Conversion, Operators, String Methods (`.trim()`, `.toUpperCase()`, `.toLowerCase()`). |
| **Module 07: Numbers** | Penggunaan `Number()` dan `parseInt()`. |
| **Module 08: Math Object** | `Math.floor()`, `Math.round()`, `Math.random()`. |
| **Module 09: Date Object** | Pembuatan instance `new Date()`, kalkulasi selisih milidetik ke hari, dan `toLocaleDateString()`. |
| **Module 10: Arrays** | Pengolahan Array of Objects, pengaksesan indeks, properti `.length`, `.concat()`. |
| **Module 11: Objects** | Penggunaan *Nested Objects*, *Object & Array Destructuring*, serta *Object Property Access*. |

---

## 💻 Cara Menjalankan Project

1. Pastikan Node.js sudah terinstal.
2. Buka terminal pada direktori project.
3. Jalankan perintah:

```bash
node script.js
```

---

## 📄 Hasil Output Console

```text
======================================================================
               🛒 E-COMMERCE TRANSACTION & ANALYTICS RECEIPT
======================================================================
ID Transaksi     : TRX-001
Tanggal Transaksi: 1 Agustus 2026

👤 INFORMASI PELANGGAN:
----------------------------------------------------------------------
Nama Pelanggan   : AZRIEL NAUFAL
Email            : azriel@gmail.com
Lama Berlangganan: 1294 Hari

📦 RINGKASAN BELANJA:
----------------------------------------------------------------------
Jenis Barang     : 2 Jenis
Total Kuantitas  : 3 Pcs

💰 Rincian Pembayaran:
----------------------------------------------------------------------
Subtotal         : Rp 1.550.000
Voucher Digunakan: DISCOUNT10 (10%)
Potongan Diskon  : - Rp 155.000
Pajak PPN (11%)  : + Rp 153.450
----------------------------------------------------------------------
TOTAL BAYAR      : Rp 1.548.450
CASHBACK DIDAPAT : Rp 18.250
STATUS VIP TRX   : YES (VIP)
======================================================================
                 Terima Kasih Telah Berbelanja!
```

---

## 🔍 Evaluasi Kode & Catatan Pembelajaran (Code Review)

Pada pengembangan project ini, dilakukan beberapa evaluasi dan penyempurnaan kode:

1. **Optimasi Deklarasi Variabel (`let` vs `const`):**
   - **Sebelum:** Banyak variabel yang tidak mengalami *re-assignment* di-deklarasikan menggunakan `let`.
   - **Perbaikan:** Mengubah variabel imutabel menjadi `const` sebagai *best practice* untuk mencegah bug *variable mutation* di kemudian hari.

2. **Perbaikan Formula Angka Acak (*Random Min-Max Range*):**
   - **Sebelum:** Menggunakan `Math.max(5000, Math.random() * 25000)` yang menyebabkan probabilitas angka 5000 menjadi sangat dominan dan tidak terdistribusi secara merata.
   - **Perbaikan:** Menerapkan formula standar distribusi acak merata:
     ```javascript
     const cashback = Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;
     ```


---
*Dibuat oleh Azriel Naufal sebagai bagian dari perjalanan belajar #100DaysOfCode JavaScript.*