// ARRAY adalah susunan sistematis dari objek yang serupa
// variable yang dapat menampung lebih dari satu nilai
// index pada array dimulai dari 0
// array pada js bertipe objek


// let hari = ['senin', 'selasa', 'rabu', 'kamis']
// let convString = hari.toString() //array menjadi string
// console.log(convString[0])

// let binatang = []
// binatang = ['ayam goreng bakar', 'babi', 'anjing']
// console.log(typeof(binatang))

// let myArr = ['teks', 2, false, [4,5,6,['alip', 'deni', ['bambang']]]]
// console.log(myArr[3][3][2][0]) //array bersarang


let hari = ['senin', 'selasa', 'rabu', 'kamis']
let convString = hari.toString()
console.log(convString)


let again = true
while (again){
let userInput = prompt('masukkan array yang ingin anda push')
let myArr = []
let pushArr = function(){
    console.log(myArr.join())
}
pushArr(userInput)
again = confirm('ingin mengisi lagi?')
}
alert('terimakasih')
