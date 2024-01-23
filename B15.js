function BOOK(title, author, year, isAvailable, isBookAvailable) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.isAvailable = isAvailable;
  this.isBookAvailable = isBookAvailable;
}
function Library() {
  this.library = [];
  this.add = function(book) {
      this.library.push(book);
  };
  this.borrow = function(book) {
      if (book.isAvailable) {
          console.log("Sách đã được mượn.");
      } else {
          console.log("Sách chưa được mượn.");
      }
  };

  this.isBookAvailable = function(book) {
      for (let i = 0; i < this.library.length; i++) {
          if (this.library[i].isBookAvailable === 0) {
              console.log(`Sách ${this.library[i].title} không có sẵn.`);
          } else if (this.library[i].isBookAvailable === 1) {
              console.log(`Sách ${this.library[i].title} có sẵn.`);
          }
      }
  };
}
let newLibrary = new Library();
let book1 = new BOOK("hello", "Xuan Nhat", 2020, true, 0);
let book2 = new BOOK("hello", "Xuan Nhat", 2020, false, 1);
let book3 = new BOOK("hello", "Xuan Nhat", 2020, true, 1);
newLibrary.add(book1);
newLibrary.add(book2);
newLibrary.add(book3);
newLibrary.borrow(book1);
newLibrary.borrow(book2);
newLibrary.borrow(book3);
newLibrary.isBookAvailable();