class Products {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
let product1 = new Products(2, "iphone 12", 12000);
let product2 = new Products(1, "iphone 11", 15000);
let product3 = new Products(3, "iphone 14", 10000);
let products = [product1, product2, product3];
for (let i = 0; i < products.length - 1; i++) {
    if (products[i].id > products[i + 1].id) {
        let temp = products[i];
        products[i] = products[i + 1];
        products[i + 1] = temp;
    }
}
console.log(products);