function Book (title, author, year){
    this.title = title
    this.author = author
    this.year = year
    this.getSummary = function(){
     return this.title + ` was written by ` + this.author + ` in ` + this.year
    }
}

let obj = new Book('Harry Potter and the Sorcerer Stone', 'J. K. Rowling', '1997')
console.log(obj.getSummary())