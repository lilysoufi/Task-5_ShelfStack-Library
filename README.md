## 📚 ShelfStack TS
A simple TypeScript utility for managing a book collection. This project demonstrates object destructuring, immutability with the spread operator, and automated refresh cycles.

**🚀 Features**

-   **Immutability**: Uses the spread operator (`...`) to update data without mutating the original state.
-   **TypeScript Core**: Strictly typed interfaces with  `readonly`  properties for data integrity.

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

**📖 Usage**

To run the refresh demo, you can execute the compiled helper file:
```
node dist/helpers.js
```
Key Functions

-   `addBook(list:  Book[],  book  :  Book):  Book[]`: Returns  a new array of type Book after adding a new Book`.
-   `findByIsbn(list  :  Book[],  isbn  :  string):  Book|undefined`: searches for the Book with the specified isbn and returns it , and if not found returns undefined

📁 Project Structure

-   `src/`: TypeScript source files.
-   `dist/`: Compiled production-ready JavaScript (git-ignored).
-   `tsconfig.json`: TypeScript configuration.

📄 License

MIT