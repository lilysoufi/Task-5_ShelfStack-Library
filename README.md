## 📚 ShelfStack JS
A simple javascript utility to manage Library Items and Members . Add new items or members , register loans and do an inventory of the items.


**Classes**

 - *LibraryItem* : All Library Items eg. Magazines , Novels and Newspaper . initialize , describe , borrow and return . 
 - *Book* : extends `LibrayItem` and overrides the `describe()` function . 
 - *Member* : initialize Members and deposits balance to their account and gets their total balance
 - *LibraryCatalog* : catalogs all the LibraryItems , registers loans of the items and gets an overview of the items


**Key Functions**

 - `snapshotStats()` : returns the count of All the items and the Available items .
 - `registerLoan({memberId , itemId})` : registers a Library item loan to member by their ids.
 - `borrow()` : checks if the item is available to borrow and if it is , it switches  `isAvailable` to false.
 - `returnItem()` :  returns the item if it's borrowed and switches  `isAvailable` to true.

##  🚀 How to Run

1. Ensure you have Node.js installed.

2. Execute the script:
```
node Task#5_part-a.js
```
## 📚 ShelfStack TS
A simple TypeScript utility for managing a book collection. This project demonstrates object destructuring, immutability with the spread operator.

**🚀 Features**

-   **Immutability**: Uses the spread operator (`...`) to update data without mutating the original state.
-   **TypeScript Core**: Strictly typed interfaces with  `readonly`  properties for data integrity.
- 

**Key Functions**

-   `addBook(list:  Book[],  book  :  Book):  Book[]`: Returns  a new array of type Book after adding a new Book`.
-   `findByIsbn(list  :  Book[],  isbn  :  string):  Book|undefined`: searches for the Book with the specified isbn and returns it , and if not found returns undefined

📁 Project Structure

-   `src/`: TypeScript source files.
-   `dist/`: Compiled production-ready JavaScript (git-ignored).
-   `tsconfig.json`: TypeScript configuration.

**📖 Usage**

To run the refresh demo, you can execute the compiled helper file:
```
node dist/helpers.js
```


**🛠️ Setup & Installation**

1.  **Clone the repo**

   ```
git clone https://github.com
cd shelfstack-ts
```

2. **Install Dependencies**

```
npm install
```
3. **Compile TypeScript**
```
npx tsc
```



📄 License

MIT
