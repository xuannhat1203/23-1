let Book = [
    {
        name: "ailce",
        phoneNumber: "123-456-7890",
        email: "ailce@example.com",
        displayInfo: function() {
            console.log(this.name);
            console.log(this.phoneNumber);
            console.log(this.email);
        }
    },
    {
        name: "Bob",
        phoneNumber: "987-654-3210",
        email: "bob@example.com",
        displayInfo: function() {
            console.log(this.name);
            console.log(this.phoneNumber);
            console.log(this.email);
        }
    },
];
for (var i = 0; i < Book.length; i++) {
    var contact = Book[i];
    contact.displayInfo();
}