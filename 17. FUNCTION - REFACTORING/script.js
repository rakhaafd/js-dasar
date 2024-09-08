//REFACTORING adalah sebuah proses mengubah kode agar menjadi lebih baik tanpa mengubah fungsionalitas itu sendiri.

//SEBELUM REFACTORING :
// function jumlahVolumeDuakubus (a, b){
//         let total, volumeA, volumeB;
//         volumeA = a * a * a
//         volumeB = b * b * b
//         total = volumeA + volumeB
//         return total
//     }
//     console.log(jumlahVolumeDuakubus(3, 4))


    //SETELAH REFACTORING :
function jumlahVolumeDuakubus (a, b){
    return 3*3*3 + 4*4*4
}

console.log(jumlahVolumeDuakubus())