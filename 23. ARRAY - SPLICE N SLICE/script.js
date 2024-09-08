//SLICE DAN SPLICE
// SLICE adalah seperti menyambungkan ditengah array
// SPLICE adalah mengiris array

// let arr = ["rakha", "ahdan", "alip", "bambang", "darr"];

 // 4. splice(indexAwal, mauDiHapusBerapa (opt, jika tidak ingin dihapus, maka tulis 0), elemenBaru1, elemenBaru2, ..)

//  arr.splice(2, 3, 'zul', 'wahyu', 'hendra')
//  console.log(arr)


// 5. slice(indexAwal, indexAkhir)
let arr = ["rakha", "ahdan", "alip", "bambang", "darr"];
let arr2 = arr.slice(1, 4) //jika slice, buatlah variable dulu.
arr2.forEach(function tampil(a, b){
    console.log(`murid ke ${b + 1} adalah ${a}`)
})


let arri = ['makan', 'tidur', 'mandi', 'eek']
arri.splice(1, 0, 'istirahat', 'sholat')
console.log(arri.join())