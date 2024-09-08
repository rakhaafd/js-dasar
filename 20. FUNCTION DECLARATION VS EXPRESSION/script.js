// FUNCTION DECLARATION
// rumus: function namaFunction (parameter opt){body}

// bentuk:
// function tampilNama(nama){
//     alert(`halo ${nama}`)
// }

// ciri2:
//lebih fleksibel. bisa di deklarasikan dulu, maupun dipanggil. begitu pula sebaiknya (karena hoisting)

// FUNCTION EXPRESSION
// rumus: function opsionalAjah (parameter opt){body}

//bentuk:
callMe(userInput)
let userInput = prompt('whats ur name?')
let callMe = function (n){
  console.log('hi nice to meet u', + n)
}




//jika pemanggilan function ditaruh ke atas, maka akan menghasilkan error

//ciri2:
// harus didefinisikan lebih dulu sebelum dipanggil.
// lebih powerfull, sebagai closure
// IIFE
