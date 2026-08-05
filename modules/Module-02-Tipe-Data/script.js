// String
const name = "ranggo";

// Number
let age = 18;
let number = 1.27;

// Boolean
const isMarried = false;

// Undifined
let x;
// const a; Output: `SyntaxError: Missing initializer in const declaration`

// Null
const person = null;

// Symbol
const symbol1 = Symbol("description 1");

// Big Int
const bigInt1 = 23478325782953259684n;

// Tipe data Reference

// Object
const user = {
  name: "Azriel",
  age: 18,
  country: "Indonesia",
};

// Array
const username = [user.name, name, "Bryan"];

// Function
function sayHallo() {
  return `Hallo, ${username[0]}!`;
}

// Console
const output = sayHallo();
console.log(output, typeof sayHallo);

// Perbedaan tipe data Primitive dan Reference

// Tipe data Primitive
let a = 10;
let b = a; // `b` hanya menyimpan salinan nilai dari `a`, `aka `b` = 10

a = 20;
console.log(b); // Output: 10 

// Tipe data Reference
let obj1 = {name: "Azriel"}
let obj2 = obj1 // `obj2` menyimpan referensi yang sama denan `obj1`

obj1.name = "Bryan"
console.log(obj2); // Output: `Bryan`
