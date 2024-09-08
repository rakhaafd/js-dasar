// REKURSIF adalah sebuah fungsi yang memanggil dirinya sendiri

// function tes(){
//   return tes() //rekursif simple
// }
// tes()

// MENGGUNAKAN LOOPING
// for ( let i = 10; i >= 1; i--){
//     console.log(i)
// }

// // DIUBAH MENJADI REKURSIF
// function tampilAngka(n) {
//     if (n === 0){
//         return 1
//     } //disebut base case berfungsi untuk menghentikan rekursif jika nilai tersebut bernilai 0. (tidak akan dilanjutkan jika dibawah 0/ -1 dll.)
//   console.log(n);
//   return tampilAngka(n - 1);
// }

// tampilAngka(10)

// CONTOH LAGI
// function hitungMundur (n){
//   if (n === 0){
//     console.log('boom!')
//     return
//   }
//   console.log(n)
//   hitungMundur(n - 1)
// }

// hitungMundur(5)

// function faktorial (n){
//   if (n === 0) return
//   return n * faktorial(n-1)

//   // 5 * faktorial (5-1)
// }
// console.log(faktorial(5))

// HITUNG MUNDUR
function hitungMundur(n){
  if (n === 0){
    console.log('boom')
    return
  }
  console.log(n)
  hitungMundur(n - 1)
}
hitungMundur(8)

//apakah argument yang dipush itu sama dengan 0?
