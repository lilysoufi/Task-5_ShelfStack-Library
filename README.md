## 📚 Shelfstack 
Welcome to the ShelfStack Library project. This repository contains two versions of the library, separated by branches to demonstrate implementation in both Vanilla JavaScript and TypeScript.


## 📚 ShelfStack Javascript
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

##  🚀 How to Run JavaScript Version (`main`  branch)


**🛠️ Setup & Installation**

1.  **Clone the repo**

   ```
git clone https://github.com/lilysoufi/Task-5_ShelfStack-Library.git
```
2. **Switch to branch**: 
 ````
 git checkout main
 ````

3. Execute the script:
```
node Task#5_part-a.js
```
## 📚 ShelfStack Typescript
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

-   **Switch to branch Shelfstack_TS**:  
```
git checkout Shelfstack_TS
```

2. **Install Dependencies**

```
npm install
```
3. **Compile TypeScript**

```
npx tsc
```
4. **Run**: Execute the compiled code from the `dist` folder:
```
node dist/helpers.js
```

📄 License

MIT
