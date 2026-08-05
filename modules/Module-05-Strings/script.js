// Strings

// Membuat strings

const singleQuote = "hello";
const doubleQuote = "world";
const backtics = `hello world`;

// Cara mengakses karakter di dalam string berdasarkan index
let str = "javascript";
console.log(str[5]);

// Property dan methods di dalam string

// mengetahui panjang:
console.log(str.length);
// mengubah string ke uppercase (huruf kapital)
console.log(str.toUpperCase());
// mengubah string ke lowercase (huruf kecil)
console.log(str.toLowerCase());
// menghirangkan spasi awal dan akhir
let testTrim = "        ini testing          ";
console.log(testTrim.trim());

// Manipulasi String

// Concat
/*
const firstName = "Azriel"
const lastName = "Naufal"
const result = firstName + " " + lastName
console.log(result);

cara ini tidak di sarankan dan dapat memunculkan bug jika project sudah sudah besar atau kompleks.
*/

// concat template literals

const firstName = "Azriel";
const lastName = "Naufal";
console.log(`${firstName} ${lastName}`);

// mengambil bagian dari string
let text = "JavaScript";
console.log(text.slice(0, 5));
console.log(text.substring(4));

// mengganti bagian dari string
let replacement = "Hello World";
console.log(replacement.replace("World", "Azriel"));

// mengubah string menjadi array
const testString = "Azriel-Bryan-Erika-Gwen";
console.log(testString.split("-"));

// pencarian di dalam string

// indexOf
let sentence =
  "buah-buahan baik bagi tubuh. matahari hari pagi sangat baik bagi tubuh manusia. manusia adalah makhluk sosial";
let index = sentence.indexOf("buah"); // mencari index kata pertama yang muncul.
console.log(index); 
let lastIndex = sentence.lastIndexOf("manusia"); // mencari index kata terakhir yang muncul.
console.log(lastIndex); 

// includes (mengembalikan boolean)
console.log(sentence.includes("buah-buahan  "));
