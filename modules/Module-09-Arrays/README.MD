# JavaScript Array Cheat Sheet & Guide

Panduan lengkap dan praktis mengenai manipulasi array dan array multidimensi dalam JavaScript.

---

## 📑 Daftar Isi
- [Metode Dasar Manipulasi Array](#metode-dasar-manipulasi-array)
- [Metode Lanjutan & Pencarian Array](#metode-lanjutan--pencarian-array)
- [Array Multidimensi (Array of Arrays)](#array-multidimensi-array-of-arrays)

---

## 🛠️ Metode Dasar Manipulasi Array

Metode ini digunakan untuk mengubah struktur awal dari sebuah array (seperti menambah atau menghapus elemen) serta memeriksa ukurannya.

| Metode | Deskripsi |
| :--- | :--- |
| `push()` | Menambahkan satu atau lebih elemen ke akhir array. |
| `pop()` | Menghapus elemen terakhir dari array. |
| `shift()` | Menghapus elemen pertama dari array. |
| `unshift()` | Menambahkan satu atau lebih elemen ke awal array. |
| `length` | Properti untuk mendapatkan jumlah total elemen dalam array. |

### Contoh Penggunaan

```javascript
let numbers = [1, 2, 3];

// Menambahkan elemen di akhir array
numbers.push(4); 
console.log(numbers); // Output: [1, 2, 3, 4]

// Menghapus elemen terakhir array
numbers.pop(); 
console.log(numbers); // Output: [1, 2, 3]

// Menghapus elemen pertama array
numbers.shift(); 
console.log(numbers); // Output: [2, 3]

// Menambahkan elemen di awal array
numbers.unshift(0); 
console.log(numbers); // Output: [0, 2, 3]

// Mendapatkan panjang/jumlah elemen array
console.log(numbers.length); // Output: 3
```

---

## 🔍 Metode Lanjutan & Pencarian Array

Metode berikut digunakan untuk menggabungkan, memotong, memodifikasi elemen pada indeks spesifik, serta mencari keberadaan suatu elemen dalam array.

| Metode | Deskripsi |
| :--- | :--- |
| `concat()` | Menggabungkan dua atau lebih array menjadi array baru. |
| `slice()` | Mengambil sebagian elemen array dari indeks tertentu tanpa mengubah array asli. |
| `splice()` | Menambahkan, menghapus, atau mengganti elemen pada indeks tertentu (mengubah array asli). |
| `indexOf()` | Mengembalikan indeks pertama tempat elemen ditemukan, atau `-1` jika tidak ada. |
| `includes()` | Memeriksa apakah suatu elemen ada di dalam array (mengembalikan `true`/`false`). |

### Contoh Penggunaan

```javascript
let numbers = [1, 2, 3, 4, 5];

// Menggabungkan dua array
let newNumbers = numbers.concat([6, 7]);
console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6, 7]

// Mengambil elemen dari indeks 1 hingga sebelum indeks 3 (indeks 1 dan 2)
let slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers); // Output: [2, 3]

// Menghapus 1 elemen di indeks 2 dan menggantikannya dengan nilai 10
numbers.splice(2, 1, 10);
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Mencari indeks dari elemen 4
console.log(numbers.indexOf(4)); // Output: 3

// Memeriksa apakah elemen 10 ada di dalam array
console.log(numbers.includes(10)); // Output: true
```

---

## 📐 Array Multidimensi (Array of Arrays)

Array multidimensi adalah array yang berisi array lain sebagai elemennya. Salah satu bentuk yang paling sering digunakan adalah **array 2 dimensi** (seperti matriks atau tabel).

### Contoh Penggunaan

```javascript
// Deklarasi array 2 dimensi (matriks 3x3)
let matrix = [
  [1, 2, 3], // Baris indeks 0
  [4, 5, 6], // Baris indeks 1
  [7, 8, 9]  // Baris indeks 2
];

// Mengakses elemen pada baris indeks 1, kolom indeks 2 (Nilai: 6)
console.log(matrix[1][2]); // Output: 6
```

---

💡 **Tip:** Perhatikan perbedaan antara metode *mutating* (mengubah array asli seperti `push`, `pop`, `splice`) dan *non-mutating* (mengembalikan array baru seperti `concat`, `slice`).