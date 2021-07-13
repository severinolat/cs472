const Product = require('./models/product'); 
const Cart = require('./models/cart'); 

/*module.exports.home = (req, res) => {
    let style = "style.css";
    res.render('registerProducts', {choosenStyle: style});
}*/

module.exports.home = (req, res) => {
    res.render('product',{itemList: Product.getProducts()});
}

module.exports.productList = (req,res) =>{
    res.render('product',{itemList: Product.getProducts()});
}

module.exports.productDetails = (req,res) =>{
    let id = req.body.id;
    let name = req.body.name;
    let description = req.body.description;
    let quantity = req.body.quantity;
    let price = req.body.price;
    new Product(id,name,description,quantity, price).saveProduct();
    res.redirect(303,'/productlist');
}

exports.addProduct = (req, res) => {
    let product = Product.getProduct(req.body.id);

    if (!req.session.shoppingCart) {
        req.session.shoppingCart = {}
      }

    let quantity = req.session.shoppingCart[req.body.id] && req.session.shoppingCart[req.body.id].quantity || 0;
    req.session.shoppingCart[product.id] = { ...Product.getProduct(req.body.id), quantity: (quantity) + 1};

    res.render('shoppingcart', { products: Object.values(req.session.shoppingCart)});
};


module.exports.shoppingCart = (req,res) =>{
    let product = Cart.getProducts();

    if (!req.session.shoppingCart) {
        req.session.shoppingCart = {}
      }

    let quantity = req.session.shoppingCart[req.body.id] && req.session.shoppingCart[req.body.id].quantity || 0;
    req.session.shoppingCart[product.id] = { ...Product.getProduct(req.body.id), quantity: (quantity) + 1};

    res.render('shoppingcart', { products: Object.values(req.session.shoppingCart)});
   
}


module.exports.cartItems = (req,res) =>{
    res.render('itemsincart',{shoppingCartList: Product.getProducts()});
}
