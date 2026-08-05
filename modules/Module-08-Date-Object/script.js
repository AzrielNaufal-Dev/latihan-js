/* ⁡⁣⁢⁢⁡⁢⁣⁢𝗗𝗮𝘁𝗲 𝗢𝗯𝗷𝗲𝗰𝘁 𝗱𝗶 𝗷𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁⁡⁡ */

// ⁡⁣⁣⁢Apa itu Date Object,⁡ ⁡⁣⁢⁢Date Object di JavaScript digunakan untuk bekerja dengan tanggal dan waktu. Objek ini memungkinkan kita untuk mendapatkan, mengatur, dan memanipulasi tanggal dan waktu.⁡

// ⁡⁣⁣⁢Membuat Date Object⁡

// tanggal dan waktu saat ini

const times = new Date();
console.log(times);

// Menggunakan string untuk kustomisasi
let spesificDate = new Date("October 10, 2029 10:20:00");
console.log(spesificDate);

// Menggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)

let customDate = new Date(2029, 9, 27, 8, 10);
console.log(customDate);

// dalam Date object, menghitung bulan di mulai dari 0. maka Januari itu bulan ke-0 dan seterusnya.

// Mengambil Informasi tanggal dan waktu
let year = new Date().getFullYear;
console.log(year);
let month = new Date().getMonth();
console.log(month);
let date = new Date().getDate();
console.log(date);
let day = new Date().getDay();
console.log(day);
let hours = new Date().getHours();
console.log(hours);
let minutes = new Date().getMinutes();
console.log(minutes);
let second = new Date().getSeconds();
console.log(second);

// Menggabungkannya dengan string template
let today = new Date();

console.log(
  `
  Year: ${today.getFullYear()}
  Month: ${today.getMonth()}
  Date: ${today.getDate()}
  Day: ${today.getDay()}
  Hours: ${today.getHours()}
  Minutes: ${today.getMinutes()}
  Seconds: ${today.getSeconds()}
  `);

// Mengatur Tanggal dan waktu

// cara 1
// let newYear = new Date("2029")
// console.log(newYear);

// cara 2
let newYear = new Date()
newYear.setFullYear(2029)
console.log(newYear);
