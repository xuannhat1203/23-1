class Infor {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
let id = prompt("Nhập id");
let name = prompt("Nhập tên");
let email = prompt("Nhập email");
let password = prompt("Nhập password");
if (name && email && password === "") {
    console.log("Không được để trống");
} else {
    if (name.length < 3) {
        console.log("Tên sai định dạng");
    } else {
        let userName = new Infor(id, name, email, password);
    }
    if (password.length < 8) {
        console.log("Mật khẩu sai định dạng");
    } else {
        let userPassword = new Infor(id, name, email, password);
    }
    let person = new Infor(id, name, email, password);
    console.log(person);
}

