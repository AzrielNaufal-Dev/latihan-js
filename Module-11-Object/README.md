# JavaScript Object Cheat Sheet & Guide

Panduan lengkap, terstruktur, dan praktis mengenai konsep, pembuatan, manipulasi, hingga fitur lanjutan **Object** dalam JavaScript.

---

## 📑 Daftar Isi
- [Pengertian Object](#pengertian-object)
- [Cara Membuat Object](#cara-membuat-object)
- [Mengakses Properti Object](#mengakses-properti-object)
- [Menambah & Mengubah Properti](#menambah--mengubah-properti)
- [Menghapus Properti](#menghapus-properti)
- [Destructuring Object](#destructuring-object)
- [Nested Object (Object Bersarang)](#nested-object-object-bersarang)

---

## 📌 Pengertian Object

**Object** di JavaScript adalah tipe data non-primitif yang digunakan untuk menyimpan koleksi data kompleks dan entitas terstruktur. Sebuah object berisi pasangan **key (kunci)** dan **value (nilai)** yang biasa disebut sebagai **properti**.

### Contoh Sederhana

```javascript
let mahasiswa = {
  nama: "Budi",
  umur: 21,
  jurusan: "Teknik Informatika"
};
```

> **Penjelasan:** Variabel `mahasiswa` di atas merupakan sebuah object yang memiliki tiga properti, yaitu `nama`, `umur`, dan `jurusan`.

---

## 🏗️ Cara Membuat Object

Terdapat dua cara utama untuk membuat object dalam JavaScript:

### 1. Object Literal (Sangat Direkomendasikan)
Cara yang paling umum, bersih, dan ringkas.

```javascript
let mobil = {
  merk: "Toyota",
  model: "Avanza",
  tahun: 2021
};
```

### 2. Constructor `new Object()`
Cara formal menggunakan *keyword* `new`.

```javascript
let buku = new Object();
buku.judul = "Belajar JavaScript";
buku.penulis = "John Doe";
buku.tahun = 2023;
```

---

## 🔑 Mengakses Properti Object

Anda dapat mengakses nilai properti di dalam object menggunakan dua cara:

### 1. Dot Notation (Notasi Titik)
Sintaks paling umum dan mudah dibaca.

```javascript
console.log(mahasiswa.nama); // Output: Budi
```

### 2. Bracket Notation (Notasi Kurung Siku)
Sangat berguna jika nama properti disimpan dalam variabel, memiliki spasi, atau karakter khusus.

```javascript
console.log(mahasiswa["jurusan"]); // Output: Teknik Informatika
```

---

## ✏️ Menambah & Mengubah Properti

Object di JavaScript bersifat dinamis, sehingga Anda dapat menambah atau merubah propertinya kapan saja.

```javascript
// Menambahkan properti baru
mahasiswa.alamat = "Jakarta";

// Mengubah nilai properti yang sudah ada
mahasiswa.umur = 22;

console.log(mahasiswa);
// Output: { nama: 'Budi', umur: 22, jurusan: 'Teknik Informatika', alamat: 'Jakarta' }
```

---

## 🗑️ Menghapus Properti

Gunakan operator `delete` untuk menghapus properti dari sebuah object.

```javascript
delete mahasiswa.alamat;

console.log(mahasiswa.alamat); // Output: undefined
```

---

## 📦 Destructuring Object (ES6)

Fitur modern ES6 yang memungkinkan Anda mengekstrak properti object langsung ke dalam variabel terpisah secara ringkas.

```javascript
let { nama, umur } = mahasiswa;

console.log(nama); // Output: Budi
console.log(umur); // Output: 22
```

---

## 🧱 Nested Object (Object Bersarang)

Object dapat menyimpan object lain sebagai nilainya. Ini disebut sebagai **Nested Object**.

```javascript
let universitas = {
  nama: "Universitas ABC",
  fakultas: {
    nama: "Fakultas Teknik",
    jurusan: "Teknik Informatika"
  }
};

// Mengakses properti di dalam nested object
console.log(universitas.fakultas.nama); // Output: Fakultas Teknik
```

---

💡 **Tip:** Selalu utamakan penggunaan **Dot Notation** untuk keterbacaan kode, dan gunakan **Bracket Notation** saat mengakses properti bernama dinamis/variabel.