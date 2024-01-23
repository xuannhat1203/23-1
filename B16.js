function job(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
}

var jobs = [];
let select;
do {
    select = +prompt("Nhap lua chon cua ban");
    switch (select) {
        case 1:
            let a = prompt("Nhap id");
            let b = prompt("Nhap title");
            let c = prompt("Mo ta cong viec");
            let d = prompt("Nhap trang thai cong viec");
            let job1 = new job(a, b, c, d);
            jobs.push(job1);
            console.log("Da them cong viec");
            break;
        case 2:
            for (let i = 0; i < jobs.length; i++) {
                let item = jobs[i];
                console.log(item.id);
                console.log(item.title);
                console.log(item.description);
                console.log(item.completed);
            }
            break;
        case 3:
            let find = prompt("Nhap id muon tim kiem");
            let found = false;
            for (let i = 0; i < jobs.length; i++) {
                let item = jobs[i];
                if (item.id == find) {
                    console.log(item.id);
                    console.log(item.title);
                    console.log(item.description);
                    console.log(item.completed);
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log("Khong tim thay id");
            }
            break;
        case 4:
            console.log("Thoat chuong trinh");
            break;
        default:
            console.log("Lua chon khong hop le");
            break;
    }
} while (select !== "4");