function Book(bookName, authorName) {
    this.bookName = bookName;
    this.authorName = authorName;
}

Book.prototype.price = 19.95;
var myBook = new Book("A Smarter Way to Learn JavaScript", "Mark Myers");

console.log("Book Name: " + myBook.bookName);
console.log("Author Name: " + myBook.authorName);
console.log("Price: $" + myBook.price.toFixed(2));