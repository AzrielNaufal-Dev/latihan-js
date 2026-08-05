/*
 Operator Logic
 Penjelasan: Digunakan untuk menggabungkan ekspresi logika dan mengembalikan nilai Boolean.
 
 Operator:
 - && (AND: Menghasilkan true jika kedua operand true).
 - || (OR: Menghasilkan true jika salah satu operan true).
 - ! (NOT: Membalikan nilai Boolean).
*/

// && (AND).
let a = true
let b = true
console.log(a && b); // Output: true

// case:
console.log(14 > 5 && 15 < 20); // Output: true (14 > 5 akan menghasilkan true dan 15 kurang dari 20 akan menghasilkan true. true && true: true).

// || (OR).
let c = true
let d = false 
console.log(c || d); // Output: true

// case:
console.log(5 === 5 || "15" === 15); //Output: ture (5 === 5 akan menghasilkan true dan "15" === 15 akan menghasilkan false. ingat! OR akan mengasilkan true jika salah satu operand bernilai true. true || false: true).

// ! (NOT).
let x = false
console.log(!x); // Output: true (membalikan nilai false menjadi true, begitupun sebaliknya).

// case:
let m = 5 > 10
console.log(!m); // Output: true (5 > 10 menghasilkan nilai false, dengan operasi `!` (NOT) kita membalikan hasil tersebut menjadi true.

