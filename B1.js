function Person(id, name, phone, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}
let id = prompt("Nhập id");
let name = prompt("Nhập tên");
let phone = prompt("Nhập số điện thoại");
let address = prompt("Nhập địa chỉ");
let person = new Person(id, name, phone, address);
let values = Object.values(person);
console.log(values);
