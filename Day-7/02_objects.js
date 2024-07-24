const library = {
    name : "International Library",

    books : [
        {
            title : "The Art of Invisibility",
            author : "Kevin Mitnick",
            yearPublished : 2017
        },

        {
            title: "Cybersecurity and Cyberwar: What Everyone Needs to Know",
            Author: "P.W. Singer and Allan Friedman",
            yearPublished: 2014,
        },

        {
            title: "Hacking: The Art of Exploitation",
            Author: "Jon Erickson",
            yearPublished: 2008,
        }
    ]
}
// console.log(library);
// console.log(library.name);

// const booksTitle = library.books.map(books => books.title);
// console.log(booksTitle);


// for (const key in library.books) {
//     console.log(`Title : ${library.books[key].title}`);
//     console.log(`Author : ${library.books[key].Author}`);
//     console.log(`Published : ${library.books[key].yearPublished}`);
// }

// console.log(Object.keys(library.books));
// console.log(Object.values(library.books));
// console.log(Object.values(library.books[0]));