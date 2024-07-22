// TODO: Object Creation and Access

const book = {
    title : "VAPT",
    author : "Abhi",
    year : 2024,
}
// console.log(book);
// console.log(book.title);
// console.log(book.author);



// TODO: Object Methods
// Adding Method - 1
book.printTitleAndAuthor = function(){
    console.log(`Book Tile is : ${this.title} and Author is : ${this.author}`);
}

// console.log(book);
// book.printTitleAndAuthor();

// Adding Method - 2
book.updateYear = function(year){
    this.year = year;
}

// console.log(book);
// console.log(`Before Upate : ${book.year}`);
// book.updateYear(2025);
// console.log(`After Update : ${book.year}`);


