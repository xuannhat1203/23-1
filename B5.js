let BOOK = {
    author: "Xuân Nhất",
    name: "Nhất Xuân",
}
let find = prompt("Nhập tên tác giả muốn tìm kiếm");
for(let key in BOOK){
    if(BOOK.author == find){
        console.log(BOOK);
    }else{
        console.log("không tìm thấy sách");
    }
}