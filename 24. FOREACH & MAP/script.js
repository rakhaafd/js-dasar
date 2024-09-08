// FOREACH dan MAP

// 6. FOREACH
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// let nama = ["alpin", "ahdan", "farel", "iblis"];
// for(let i = 0; i < angka.length; i++){
//     console.log(angka[i])
// } // ini tidak dibutuhkan




// let cetak = function(e){
//     console.log(e)
// }
// angka.forEach(cetak) // function ekspression

// angka.forEach(function(e){
//     console.log(e)
// })



// let cetakInfo = function (item, index) {
//   console.log(`nilai: ${item}, index: ${index + 1}`);
// };
// nama.forEach(cetakInfo);

// pada parameter 1 dalam function forEach, menyimbolkan currentValue mewakili setiap elemen dalam array. parameter 2 menyimbolkan indexnya.






// 7. MAP
// let angka = [1,4,5,2,8,9]
// let arr = angka.map(function(e){
//   return e
// })

// console.log(arr.join(`\n`))



// 8. SORT
// let angka = [2, 20, 4, 1, 10, 8, 3, 9];
// angka.sort(function(x, y){
//     return x - y
// })
// console.log(angka)



// let num1 = [8,3,7,4,2,9,20,11]
// let num2 = num1.map(function(e){
//     return e *2
// })

// num2.sort(function(a,b){
//     return a-b
// })



// console.log(num2.join(' - '))




// let find = num2.find(function(x){
//     return x > 5
// })

// console.log(find)) akan menghasilkan 1 angka saja jika find












let num1 = [6,5,4,7,8,1,2,39]
let num2 = num1.map(function(x){
    return x*2
})

num2.sort(function(a, b){
    return a - b
})

let filt = num2.filter(function(e){
    return e < 3
})

console.log(filt)