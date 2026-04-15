import type {Book} from "./types";


function addBook(list: Book[], book : Book): Book[] {
    return [...list,book];
}

function findByIsbn(list : Book[], isbn : string): Book|undefined {
    return list.find(book => book.isbn === isbn);
}


const book : Book = {
    id: "1",
    title: "Animal Farm",
    isbn: "0987654321",
    author: "George Orwell"
};

const book2 : Book = {
    id: "2",
    title: "Fahrenheit 451",
    isbn: "2233445566",
    author: "Ray Bradbury"
};  

const book3 : Book = {
    id: "3",
    title: "The Great Gatsby",
    isbn: "3344556677",
    author: "F. Scott Fitzgerald"
};
const book4 : Book = {
    id: "4",
    title: "The Catcher in the Rye",
    isbn: "4455667788",
    author: "J.D. Salinger"
};

const bookList : Book[] = [];
const bookList2 = addBook(bookList , book);
console.log(bookList2);
console.log("---------------------------");
const bookList3 = addBook(bookList2 , book2);
console.log(bookList3);
console.log("---------------------------");
const bookList4 = addBook(bookList3 , book3);
console.log(bookList4);
console.log("---------------------------");
const bookList5 = addBook(bookList4 , book4);
console.log(bookList5);
console.log("---------------------------");

console.log(findByIsbn(bookList5 , "1234567890"));
console.log("-------------");
console.log(findByIsbn(bookList5 , "3344556677"));
console.log("-------------");
console.log(bookList3);