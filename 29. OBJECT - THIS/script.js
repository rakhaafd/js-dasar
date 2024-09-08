// 1. Function Declaration
function showThis() {
    // Dalam fungsi biasa (function declaration), 'this' akan merujuk pada objek global.
    // Di browser, objek global adalah 'window'. Di Node.js, itu adalah 'global'.
    console.log(this);
}

showThis(); // Output: [object Window] (di browser)

// 2. Object Literal
const person = {
    name: "Alice",
    sayHello: function() {
        // Dalam method (fungsi yang ada di dalam objek), 'this' merujuk pada objek yang memiliki method tersebut.
        // Dalam kasus ini, 'this' merujuk pada objek 'person'.
        console.log("Hello, my name is " + this.name);
    }
};

person.sayHello(); // Output: Hello, my name is Alice

// 3. Constructor Function
function Car(model) {
    // Ketika menggunakan constructor function dengan 'new', 'this' merujuk pada objek baru yang sedang dibuat.
    this.model = model;
}

const myCar = new Car("Toyota");
// Di sini, 'this.model' merujuk pada 'myCar.model'.
console.log(myCar.model); // Output: Toyota
