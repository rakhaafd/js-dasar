// menambah elemen pada array
// let arr = []
// arr[0] = 'rakha'
// arr[1] = 'ahdan'
// arr[2] = 'alip'
// arr[3] = 'bambang'
// arr[4] = 'darr'
// console.log(arr)

// menghapus isi array
// let arr = ['rakha', 'ahdan', 'alip', 'bambang', 'darr']
// arr.splice(3, 2)
// console.log(arr)

// menampilkan isi array
// let arr = ['rakha', 'ahdan', 'alip', 'bambang', 'darr', 'yatno', 'yusup']
// arr.shift()
// arr.shift()
// arr.forEach(function tampil(a, b){
//     console.log(`mahasiswa ke ${b + 1} adalah ${a}`)
// })

// method pada array
// 1. join: perubah array menjadi string
// let arr = ["rakha", "ahdan", "alip", "bambang", "darr"];
// console.log(arr.join(', '))


//2. push (menambah akhir array) dan pop(menghapus akhir array)
// arr.push("crott", "hihiha"); //tidak dapat ditambahkan pada console
// arr.pop(); //pop harus satu persatu
// console.log(arr.join(", "));


//3. shift(menghapus elemen pertama array) dan unshift(menambah elemen pertama array)
// arr.unshift('dodday')
// arr.shift()
// console.log(arr.join(", "));

let mahasiswa = ['rakha', 'ahdan', 'rasyid', 'alpin', 'farel', 'andika', 'rado']
for (let i = 0; i < mahasiswa.length; i ++){
    console.log(`mahasiswa ke ${i + 1} adalah ` + mahasiswa[i])
}