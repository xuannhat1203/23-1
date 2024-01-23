let Infor = {
    contact1: {
        name: "Xuân Nhất",
        phone: "123456",
        email: "xuannhat@gmail.com",
    },
    contact2: {
        name: "Xuân Nhật",
        phone: "654321",
        email: "xuannhat231@gmail.com",
    },
};
for (let contact in Infor) {
    console.log(contact);
    console.log(Infor[contact]);
}