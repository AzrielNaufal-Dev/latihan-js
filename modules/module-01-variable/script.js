// var -> bisa di akses di luar dan dalam scope (tidak di sarankan)

if (true) {
  var name = "Janggo"
  var name = "Fanz" // re-declaration
} // Local Scope

// Global Scope:
console.log(name);

// let -> nilainya bisa di ubah (hanya bisa di panggil di dalam scope)

if (true) {
  let user = "Azriel"
  console.log(user);
} // Local Scope


/*
Global Scope:
console.log(user); Output: user is not defined
*/

// const -> nilainya tidak bisa di ubah/konstan (hanya bisa di panggil di dalam scope)

if (true) {
  const userId = 1
  console.log(userId);
  // userId = 2 Output: TypeError -> Assignment to constant Variable.
}
/*
Global Scope:
console.log(userId); Output: userId is not defined.
*/

// best practice: using `let` and `const`