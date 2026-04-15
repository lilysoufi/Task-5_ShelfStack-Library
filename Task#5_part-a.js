

class LibraryItem {
    constructor (id , title, isAvailable) {
        this.id = id ;
        this.title = title;
        this.isAvailable = isAvailable ;
    }

    describe(){
        return `This Item has ID of ${this.id} , it's title is ${this.title} and it's ${this.isAvailable ? "available" : "not available"}`
    }

    borrow(){
        if (this.isAvailable){
            this.isAvailable = false;
            console.log(`You have borrowed "${this.title}".`);
   
        } else {
            console.log(`Sorry, "${this.title}" is not available for borrowing.`);
           
        }
    }

    returnItem(){
        if(!this.isAvailable){
            this.isAvailable = true ;
            console.log(`You have successfully returned "${this.title}".`);
        }
        else {
            console.log(`This item was not borrowed.`);
        }
    }
}


class Book extends LibraryItem {
    static books = [];
    constructor(id, title, isAvailable, isbn, author) {
        super(id, title, isAvailable);
        this.isbn = isbn;
        this.author = author;
        Book.books.push(this);
    }
     
    describe() {
        return `${super.describe()}. It is written by ${this.author}.`;
    }

    getAllBooks() {
        return Book.books;
    }   
}


class Member {
    #balance = 0;
    static members = [] ;

    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.#balance = balance;
        this.borrowedBooks = [];
        Member.members.push(this);
    }

    deposite(amount){
        this.#balance += amount;
    }

    getBalance(){
        return this.#balance;
    }


}


class LibraryCatalog {
    constructor() {
        this.items = [];
    }

    addItem(book) {
        this.items.push(book);
    }

    static nextId(){
        return this.items.length + 1;
    }

    registerLoan({memberId , itemId}){
        const member = Member.members.find(m => m.id === memberId);
        const item = Book.books.find(i => i.id === itemId);
        if (member && item) {
           member.borrowedBooks.push(item);
           item.borrow();
           console.log(`Loan registered: ${member.name} borrowed ${item.title}`);
        }
    }

    snapshotStats(){
        const totalItems = this.items.length;
        const availableItems = this.items.filter(i => i.isAvailable).length;
        return {totalItems , availableItems}
    }
}


//Testing
const book = new LibraryItem(1, "1984", true);
console.log(book.describe());

const magazine = new LibraryItem(2, "National Geographic", false);
console.log(magazine.describe());

const book2 = new Book(3, "Brave New World", true, "978-0060850524", "Aldous Huxley");
console.log(book2.describe());

//**array destructuring**
const [id, title , isAvailable] = ["4" , "Pride and Prejudice", true]
const book3 = new Book(id, title, isAvailable, "978-0141439518", "Jane Austen");
console.log(book3.describe());
//console.log(Book.books)

const catalog = new LibraryCatalog();
catalog.addItem(book);
catalog.addItem(magazine);
catalog.addItem(book2);
catalog.addItem(book3);

console.log(catalog);
console.log(catalog.snapshotStats());


const noor = new Member(1, "Noor", 100);
catalog.registerLoan({ memberId: noor.id, itemId: book2.id });
console.log(book2.describe());
noor.deposite(1000);
console.log(noor.getBalance());
console.log(noor.borrowedBooks);

const { totalItems : total, availableItems:  available } = catalog.snapshotStats();
console.log(`Total items: ${total}, Available items: ${available}`);
