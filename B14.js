function BOOK(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
let book = new BOOK("hello", "Xuan Nhat", 2020);
function Library() {
    this.newBooks = [];
    this.newBook = function(book) {
        this.newBooks.push(book);
    };
    this.print = function() {
        console.log("Danh sách sách trong thư viện:");
        for (let i = 0; i < this.newBooks.length; i++) {
            console.log(this.newBooks[i].title);
            console.log(this.newBooks[i].author);
            console.log(this.newBooks[i].year);
        }
    };
}
let newLibrary = new Library();
let book1 = new BOOK("hello", "Xuan Nhat", 2020);
let book2 = new BOOK("hello", "Xuan Nhat", 2020);
let book3 = new BOOK("hello", "Xuan Nhat", 2020);
newLibrary.newBook(book1);
newLibrary.newBook(book2);
newLibrary.newBook(book3);
newLibrary.print();