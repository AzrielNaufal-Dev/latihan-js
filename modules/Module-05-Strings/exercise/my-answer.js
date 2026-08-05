// Soal-Soal Latihan (Total 5 Soal)

console.log("\nSoal-Soal Latihan (Total 5 Soal):\n");

console.log("Soal 1: Pengukuran Panjang & Pembersihan Input (Length & Trim)");

const inputUser = "    Azriel Naufal    ";
const namaBersih = inputUser.trim();
console.log(`- ${namaBersih}`);

const panjangNama = namaBersih.length;
console.log(`- Panjang nama: ${panjangNama}`);

const karakterPertama = namaBersih[0];
const karakterTerakhir = namaBersih[panjangNama - 1];
console.log(
  `- Karakter pertama: ${karakterPertama}, karakter terakhir: ${karakterTerakhir}`,
);

console.log(
  "\nSoal 2: Format & Penggabungan Teks (Upper/Lower Case & Template Literals)",
);

const firstName = "azriel";
const lastName = "naufal";

const firstNameCapital = firstName.toUpperCase();
const lastNameLow = lastName.toLowerCase();

console.log(`- Halo, nama saya ${firstName} ${lastNameLow}!`);

console.log("\nSoal 3: Memotong Teks (Slicing & Substring)");

const text = "JavaScript";

const textSlice = text.slice(0, 4);
const textSubstring = text.substring(4);
console.log(`- Slice Result: ${textSlice}
- Substring Result: ${textSubstring}`);

console.log("\nSoal 4: Refaktor Kata & Konversi ke Array (Replace & Split)");

const daftarSiswa = "Azriel-Bryan-Erika-Gwen";

const siswaReplace = daftarSiswa.replace("Erika", "Dika");
console.log(`- ${siswaReplace}`);

const siswaArr = siswaReplace.split("-");
console.log(siswaArr);

console.log("\nSoal 5: Pencarian & Deteksi Kata (IndexOf, LastIndexOf, Includes)");

const sentence = "buah-buahan baik bagi tubuh. matahari hari pagi sangat baik bagi tubuh manusia. manusia adalah makhluk sosial";

const firstBuahIndex = sentence.indexOf("buah")
const lastMabusiaIndex = sentence.lastIndexOf("manusia")
const isMatahari = sentence.includes("matahari")

console.log(`- First Buah Index: ${firstBuahIndex}
- Last Manusia Index: ${lastMabusiaIndex}
- Is Matahari: ${isMatahari}`);
