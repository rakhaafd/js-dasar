//SCOPE ADALAH BAGAIMANA CARA VARIABLE BISA DIAKSES DALAM SEBUAH PROGRAM. TERDIRI DARI BLOCK SCOPE DAN FUNCTION SCOPE

// IMPLEMENTASI SCOPE DALAM FUNCTION ADALAH JIKA DI DALAM '{}'

// BLOCK SCOPE DIGUNAKAN DALAM JAVA DAN C. CONTOH JIKA BLOCK SCOPE DALAM JAVASCRIPT:
// let i = 2
// if (i % 2 == 0){
//     let genap = true
// }

// if (genap) {
//     console.log('genap')
// }


let a = 8
function panggil (a){
    console.log(a)
}
panggil(a)
console.log(a)


// let a = 1;
// function tes() {
//   // name conflict
//   a = 2; // js akan ngecek apakah ada variable a didalam lingkup lokal. apabila tidak ada, maka ambil global.

//   //beda cerita jika a tersebut dikasih let (variable) di depannya
// }

// tes();
// console.log(a)





// let a = 1; //APABILA INI DIHAPUS, MAKA OTOMATIS a DIDALAM FUNCTION AKAN MEMBUAT MANDIRI DEKLARASI LET NYA DILUAR.

// function tes() {
//   a = 2; //SAMA SAJA LOGIKA NYA DIBUATKAN VARIABLE DI LINGKUP GLOBAL

//   // TIP: MENGGUNAKAN SYNTAX: "USE STRICT " SUPAYA SISTEM MENGETAHUI KITA MENDEKLAREKAN VARIABLE LOKAL
// }

// tes();
// console.log(a);






// let a = 1
// function tes (a){
//     console.log(a)
// }

// console.log()

// tes(2) //HASIL NYA ADALAH 2. KARENA JIKA ARGUMENT KEPADA PARAMETER AKAN SELALU DISEBUT SEBAGAI LOKAL.