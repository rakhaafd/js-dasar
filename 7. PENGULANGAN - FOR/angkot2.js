let noAngkot = 1
let jmlAngkot = 10
let angkotTersedia = 6
// while (noAngkot <= angkotTersedia){
//   console.log(`Angkot No. ${noAngkot} berjalan dengan baik.`)
//   noAngkot++
// }

// for (let i = noAngkot; i <= angkotTersedia; i++){
//   console.log(`Angkot No. ${i} berjalan dengan baik.`)
// }

for (let i = noAngkot; i <= jmlAngkot; i++){
if (i <= angkotTersedia){
  console.log(`angkot no ${i} berjalan dengan baik`)
}
else {
  console.log(`angkot no ${i} rusak.`)
}
}