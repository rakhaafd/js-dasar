function Person (firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.getFullName = function(){
        return firstName + ' ' + lastName
    }
}

let person1 = new Person('rakha', 'fausta')
let person2 = new Person('andika', 'farel')

console.log(person1.getFullName())
console.log(person2.getFullName())

