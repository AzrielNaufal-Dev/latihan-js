/*
 Operator Ternary
 Penjelasan: Operator Ternary adalah kondisional yang merupakan cara singkat untuk menulis if-else.
 Contoh penggunaan: `condition ? expressionIfTrue : expressionIfElse
*/

// case:
let age = 29;
const result = age > 30 ? "Yes" : "No"; // artinya adalah apakah value dari variable `age` lebih dari 30? jika iya tampilkan "Yes" jika tidak tampilkan "No"
console.log(result); // Output: No

// Bisa juga di gabungkan dengan operator logika
const username = "Azriel"
const checkName = username === "Azriel" ? "Login Success" : "Invalid Username"
console.log(checkName);
