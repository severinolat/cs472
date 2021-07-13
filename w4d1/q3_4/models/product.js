
class Product{
    static products = [new Product(1, "Amazfit GTS", "For Amazfit GTS 2e Smartwatch with 24H Heart", 10 ,99.99), new Product(2, "Kid Nation", "Kid Nation Girls Casual",100, 5.99), new Product(3, "Geeni Surge", "6-Outlet Smart Extension Cord, Surge Protector", 100, 26.99)];

    constructor(id, name, description, quantity, price){
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
    saveProduct(){
        Product.products.push(this);
    }
    static getProducts(){
        return Product.products;
    }

    static getProduct(id) {
        return Product.products.find((pro) => pro.id == id);

    }
}
module.exports = Product;