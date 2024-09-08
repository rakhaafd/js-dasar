// 1. Membuat OBJECT LITERAL
// let profilSaya = {
//     nama : 'Rakha Fausta Adinata Raharja',
//     umur : 17,
//     kelas : 11,
//     sekolah : 'SMK NEGERI 7 SEMARANG',
// }    



// 2. FUNCTION DECLARATION
function buatProfile (nama, umur, kelas, hobi, citacita){
    let profile = {}
    profile.nama = nama
    profile.umur = umur
    profile.kelas = kelas
    profile.hobi = hobi
    profile.citacita = citacita
    return profile
}

let profile1 = buatProfile('rakha', 17, 11, 'ngoding', 'programmer')
console.log(profile1.nama)




// 3. CONSTRUCTOR

// function BuatProfile (nama, umur, kelas, hobi, citacita){
//     //let this = []
//     this.nama = nama
//     this.umur = umur
//     this.kelas = kelas
//     this.hobi = hobi
//     this.citacita = citacita
//     //return this
// }

// let profile = new BuatProfile('rakha', 17, 11, 'ngoding', 'programmer') 
// console.log(profile)