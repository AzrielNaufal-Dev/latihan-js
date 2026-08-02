# 🧾 Mini Project 01: Smart Bill Generator & Receipt Printer

Project pertama dalam tantangan **#100DaysOfCode** JavaScript. Project ini dirancang khusus untuk mengimplementasikan dan menguji pemahaman dari **Modul 01 hingga Modul 05** tanpa menggunakan fungsi (`function`) maupun perulangan (`looping`).

---

## 🚀 Fitur Utama

- **Sanitasi & Manipulasi String:** Membersihkan *whitespace* input nama, mengonversi ke huruf besar (*uppercase*), menghitung jumlah karakter, dan membuat ID Transaksi unik berbasis substring nama dan angka acak.
- **Konversi Tipe Data (Type Conversion):** Mengolah input string angka (`unitPrice` dan `quantity`) menjadi tipe `number` untuk kalkulasi aritmatika.
- **Kalkulasi Logika & Diskon:**
  - Perhitungan subtotal otomatis.
  - Diskon 10% secara dinamis menggunakan *Ternary Operator* jika total belanja $\ge$ Rp 100.000.
  - Perhitungan Pajak (PPN 11%) setelah diskon.
  - Penentuan status `isVipMember` (Boolean) berdasarkan total pembayaran final ($> \text{Rp } 200.000$).
- **Format Mata Uang Rupiah (IDR):** Memformat output angka menjadi bentuk mata uang Rupiah standar menggunakan `toLocaleString('id-ID')`.
- **Tampilan Struk Console Rapi:** Menggunakan *Template Literals* dan *Escape Characters* (`\n`, `\t`) untuk mencetak struk belanja.

---

## 📚 Implementasi Modul JavaScript

| Modul | Konsep Terapan dalam Project |
| :--- | :--- |
| **Module 01: Variables** | Penggunaan `const` untuk mendeklarasikan nilai imutabel. |
| **Module 02: Data Types** | Penggunaan `string`, `number`, dan `boolean`. |
| **Module 03: Type Conversion** | Penggunaan `parseInt()` dan `Number()` untuk mengonversi string ke angka. |
| **Module 04: Operators** | Operator Aritmatika (`*`, `-`, `+`), Perbandingan (`>=`, `>`), Logika, dan *Ternary Operator* (`condition ? expr1 : expr2`). |
| **Module 05: Strings** | Method `.trim()`, `.toUpperCase()`, `.length`, `.slice()`, serta *Template Literals* (`` `...${}...` ``). |

---

## 💻 Cara Menjalankan Project

1. Pastikan Node.js sudah terinstal di komputer Anda.
2. Buka terminal atau command prompt.
3. Jalankan perintah berikut:

```bash
node script.js
```

---

## 📄 Hasil Output Struk (Console)

```text
  ========================================
			STRUK PEMBAYARAN TOKO JAVA
  ========================================
  ID Transaksi : AZR-4921
  Nama Pembeli : AZRIEL NAUFAL (13 karakter)
  Status VIP   : true

  Detail Pembelian:
  - Harga Satuan : Rp 50.000,00
  - Jumlah Beli  : 5
  - Subtotal     : Rp 250.000,00

  Kalkulasi:
  - Diskon (10%) : Rp 25.000,00
  - Pajak (11%)  : Rp 24.750,00
  ----------------------------------------
  TOTAL BAYAR    : Rp 249.750,00
  ========================================
		 Terima Kasih Telah Berbelanja!
```

---
*Dibuat oleh Azriel Naufal sebagai bagian dari perjalanan belajar #100DaysOfCode JavaScript.*