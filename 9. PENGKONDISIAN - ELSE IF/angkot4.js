const jmlAngkot = 10
const angkotTersedia = 6
for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

    if (noAngkot <= angkotTersedia){ //untuk mengisi angkot 1-6
        console.log(`angkot no ${noAngkot} lancar`)
    }
    else if (noAngkot == 8 || noAngkot == 10){ //untuk mengisi angkot 8
        console.log(`angkot ${noAngkot} keluar dari bengkel`)
    }
    else { //untuk mengisi angko 7,9,10
        console.log(`angkot no ${noAngkot} rusak.`)
    }
}