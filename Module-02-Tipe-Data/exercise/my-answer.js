//🔹 Level 1: Identifikasi Tipe Data Primitive & `typeof`:
console.log(`\n🔹 Level 1: Identifikasi Tipe Data Primitive & 'typeof'\n`);

const nama = "Azriel Naufal Robie";
let umur = 18;
let isStudent = true;
let sisaSaldo = null;
let alamat;

console.log(
`Tipe data nama: ${typeof nama}
Tipe data umur: ${typeof umur}
Tipe data isStudent: ${typeof isStudent}
TIpe data sisaSaldo: ${typeof sisaSaldo}
Tipe data alamat: ${typeof alamat}`);

// 🔹 Level 2: Eksperimen *Passed by Value* (Primitive Types):
// Penjelasan: Variabel bertipe **Primitive** menyimpan nilainya secara independen. Mengubah satu variabel tidak akan mempengaruhi variabel lainnya.
console.log(`\n🔹 Level 2: Eksperimen *Passed by Value* (Primitive Types)\n`);


let nilaiA = 100
let nilaiB = nilaiA

nilaiB = 80
console.log(`nilaiA: ${nilaiA} dan nilaiB: ${nilaiB}`); 
// nilaiA tetap 100 (tidak terpengaruh). Tipe Primitive disalin hanya nilainya (Value).

// 🔹 Level 3: Eksperimen *Passed by Reference* (Reference Types):
// Penjelasan: Variabel bertipe 'Reference' (seperti `Array` atau `Object`) menyimpan 'alamat memori', bukan nilainya langsung. Mengubah isi properti akan berdampak pada semua variabel yang merujuk ke alamat memori yang sama.

const agent1 = {
  name: "Yoru",
  role: "DuelList"
}

const agent2 = agent1
agent2.name = "Jett"
console.log(`Agent 1: ${agent1.name} dan Agent 2: ${agent2.name}`);
// objek pada agent1 berubah karna agent2 menyimpan alamat memorinya, bukan value. agent1 dan agent2 menujuk ke objek yang sama di dalam memori.

// 🔹 Level 4: Tipe Data Khusus (`Null` vs `Undefined` & `NaN`):

// 1.
console.log(undefined == null); // true (karna sama-sama mewakili "tidak ada nilai")
console.log(undefined === null); // false (karna tipe datanya beda: undifined vs object/null)

console.log("kopi" / 2); // Output: NaN (Not a Number)
console.log(typeof NaN); // Output: "number" (NaN dianggap tipe number yang tidak valid)
