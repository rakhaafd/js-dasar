const jmlAngkot = 10;
const angkotTersedia = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotTersedia && noAngkot !== 5 || noAngkot == 10) {
    console.log(`angkot no ${noAngkot} berjalan lancar.`);
  }

  else if (noAngkot == 5 || noAngkot == 8) {
    console.log(`angkot no ${noAngkot} sedang lembur`)
  }

  else {
    console.log(`angkot no ${noAngkot} rusak`)
  }
}
