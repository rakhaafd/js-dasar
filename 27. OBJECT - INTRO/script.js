let profilSaya = {
nama : 'Rakha Fausta Adinata Raharja',
umur : 17,
kelas : 11,
sekolah : 'SMK NEGERI 7 SEMARANG',

//variable yang ada dalam object disebut property
// sedangkan function yang ada dalam object disebut method
sapa : function(){
    return `hi nama saya ` + this.nama + `\numur saya ` + this.umur + `\nsaya duduk di bangku kelas ` + this.kelas + `\ndi sekolah ` + this.sekolah
}
}

console.log(profilSaya.sapa())





let mhs = {}
mhs.nama = 'rakhafausta'
console.log(mhs)