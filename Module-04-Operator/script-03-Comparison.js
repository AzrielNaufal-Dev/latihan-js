/*
 Operator Comparison (perbandingkan)
 Penjelasan: Dogunakan untuk membandingkan dua nilai. Outputnya adalah Boolean
*/

// == mengecek atau membandingkan persamaan nilai/value.

let a = "5"; // string
let b = 5; // number
console.log(a == b); // Output: true (mengecek apa nilai/value tersebut sama atau tidak namun tidak secara spesifik).

// === mengecek atau membandingkan persamaan nilai/value dan tipe data.

let c = "10"; // string
let d = 10; // number
console.log(c === d); // Output: false (mengecek apa nilai/value tersebut sama atau tidak namun secara spesifik. dalam kasus ini variable `c` adalah string sedangkan variable `d` adalah number).

let e = 10; // number
let f = 10; // number
console.log(e === f); // Output: true (karna sama-sama tipe data number dan nilai/value nya sama)

// != mengecek atau membandingkan ketidaksamaan nilai/value. keterbalikannya dengan opereator `==`

let y = "5"; // string
let z = 5; // number
console.log(y != z); // Output: false(karna value `y` sama dengan value `z`. kebalikan dengan `==` Operator `!=` mengecek apakah variable `y` tidak sama dengan variable `z` hasilnya false karna kedua value tersebut sama-sama 5. hanya mengecek value namun tidak spesifik secara tipe data).

// !== mengecek atau membandingkan ketidaksamaan nilai/value dan tipe data. keterbalikannya dengan operator `===`
let r = "5"; // string
let s = 5; // number
console.log(r !== s); // Output: true (apakah value dan tipe data variable `r` tidak sama dengan variable `s`)

// mengecek apakah variable satu lebih/kurang besar dari variable lainnya.

// `>` lebih besar dari.
let g = 50;
let h = 10;
console.log(g > h); // Output: true (karna 50 lebih besar dari 10 ).

// `>=` lebih dari atau sama dengan.
let m = 10; // 11, 12, 13, dst. akan bernilai true
let n = 10;
console.log(m >= n); // Output: true (karna 10 lebih dari ATAU sama dengan 10).

// `<` kurang dari.
let k = 5;
let l = 12;
console.log(k < l); // Output: true (karna 5 kurang dari 12).

// `<=` kurang dari atau sama dengan.
let v = 15; // 14, 13, 12, dst. akan bernilai true
let w = 15;
console.log(v <= w); // Output: true (karna 15 kurang dari ATAU sama dengan 15).
