// Implicit conversion

let result1 = "5" + 10;
let result2 = "5" - 10;
let result3 = "5" * 10;
let result4 = "5" / 10;

console.log(
  `str 5 + num 10: ${result1} - ${typeof result1}
str 5 - num 10: ${result2} - ${typeof result2}
str 5 x num 10: ${result3} - ${typeof result3}
str 5 / num 10: ${result4} - ${typeof result4}`,
);
// selain operasi aritmatika `+`, string dapat berubah menjadi number secara otomatis. hanya berlaku jika sebuah string tersebut adalah angka!

// falsy value: 0, null, undifined, ""
let bool = Boolean("");
console.log(bool + " - " + typeof bool);

// Implicit Conversion

let num = 100

const numToStr = num.toString()
console.log(`${numToStr} - ${typeof numToStr}`); // mengkonversi number menjad string

let num1 = "100"
const strToNum = + num1
console.log(`${strToNum} - ${typeof strToNum}`); // mengkonversi string menjadi number.

let num2 = 99.99
const parseInteger = parseInt(num2)
console.log(parseInteger); // mengambil bilangan bulat nya saja.

const parseFloating = parseFloat(num2)
console.log(parseFloating); // menambil bilangan desimal saja.

const number = Number(num2)
console.log(number); // mampu mengambil bilangan bulat atau bilangan desimal.

const bool2 = Boolean(num2) // bernilai true jika terdapat value di dalamnya yang lebih dari 0 atau bukan null, undifined, ""
console.log(bool2);

/*
Penjelasan: Implicit Conversion terjadi secara otomatis selama operasi tertentu di JavaScript, sedangkan Explicit Conversion dilakukan dengan menggunakan metode atau fungsi tertentu.
*/