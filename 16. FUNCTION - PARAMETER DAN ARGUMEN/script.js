// function tambah (a, b){ // => (a, b) ini adalah parameter
//     return a + b
// }

// let coba = tambah(5,10) // => (5, 10) ini adalah argument

// function tambah(a, b) {
//   return a + b;
// }
// function kali(a, b){
//     return a * b
// }
// let hasil = kali(tambah(1,3), tambah(4, 3))
// console.log(hasil);

// function tambah(a,b,c) { //apabila kelebihan parameter, maka undefined, dan jika kelebihan argument maka diabaikan.
//   return a + b;
// }
// console.log(tambah(3, 9))

function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
let coba = tambah (6, 7, 8)
console.log(coba)

//penjelasan di txt