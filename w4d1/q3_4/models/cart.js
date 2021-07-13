module.exports = class Cart {
    static products = [];

    static addToCart(product) {
        Cart.products.push(product);
    }

    static getProducts() {
        return { products: Cart.products };
    }
}