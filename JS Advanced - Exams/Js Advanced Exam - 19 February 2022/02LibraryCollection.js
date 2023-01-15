class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const book = this.books.find(b => b.bookName === bookName);
        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        }
        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const bookIndex = this.books.findIndex(b => b.bookName === bookName);
        if (bookIndex === -1) {
            throw new Error('The book, you\'re looking for, is not found.');
        }
        if (!this.books[bookIndex].payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books.splice(bookIndex, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        const result = [];

        if (!bookAuthor) {
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach(b => result.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`));
        } else {
            const book = this.books.find(b => b.bookAuthor === bookAuthor);
            if (!book) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`);
        }
        return result.join('\n');
    }
};

const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
//console.log(library.addBook('Ulysses', 'James Joyce'));
// The In Search of Lost Time, with an author Marcel Proust, collect.
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Not enough space in the collection.

const library1 = new LibraryCollection(2)
library1.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library1.payBook('In Search of Lost Time'));
//console.log(library1.payBook('Don Quixote'));
// In Search of Lost Time has been successfully paid.
// Don Quixote is not in the collection.

const library2 = new LibraryCollection(2)
library2.addBook('In Search of Lost Time', 'Marcel Proust');
library2.addBook('Don Quixote', 'Miguel de Cervantes');
library2.payBook('Don Quixote');
console.log(library2.removeBook('Don Quixote'));
//console.log(library2.removeBook('In Search of Lost Time'));
// Don Quixote remove from the collection.
// In Search of Lost Time need to be paid before removing from the collection.

const library3 = new LibraryCollection(2)
console.log(library3.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library3.getStatistics('Miguel de Cervantes'));
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Don Quixote == Miguel de Cervantes - Not Paid.

const library4 = new LibraryCollection(5)
library4.addBook('Don Quixote', 'Miguel de Cervantes');
library4.payBook('Don Quixote');
library4.addBook('In Search of Lost Time', 'Marcel Proust');
library4.addBook('Ulysses', 'James Joyce');
console.log(library4.getStatistics());
// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.
