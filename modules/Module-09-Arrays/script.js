/* ​‌‍‌⁡⁢⁣⁢Array di JavaScript⁡​ */

// ⁡⁣⁣⁢Apa Itu Array?⁡, ⁡⁣⁢⁢Array adalah struktur data yang digunakan untuk menyimpan koleksi elemen, seperti angka atau string, dalam satu variabel. Di JavaScript, array dapat menyimpan berbagai tipe data sekaligus dan memiliki indeks yang dimulai dari 0⁡.

//⁡⁣⁣⁢ Membuat Array⁡

// 1. Menggunakan notasi array literals:

const names = ["Azriel", "Naufal", "Robie"];
console.log(names);

// 2. Menggunakan new array():

const nums = new Array(1, 2, 4, 7, 8, 9);
console.log(nums);

// Mengakses Elemen Erray

console.log(names[0]);
console.log(nums[2]);

// Menambah atau Mengubah Elemen Array

names[2] = "Bryan";
console.log(names);

nums[4] = "5";
console.log(nums);

// Manipulasi Array

let numbers = [1, 2, 4, 5, 6, 7, 8, 10];

numbers.push(12);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.unshift("3");
console.log(numbers);

let numbers2 = [20, 21];

const newNumbers = numbers.concat(numbers2);
console.log(newNumbers);

const slicedNumbers = newNumbers.slice(-3);
console.log(slicedNumbers);

newNumbers.splice(2, 1, 50);
console.log(newNumbers);

console.log(newNumbers.indexOf(21));
console.log(newNumbers.includes(8));


// Multidimensional/Nested Array (Array of Arrays)

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
console.log(matrix[2][1]);
