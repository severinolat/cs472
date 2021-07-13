const Product = require('./product'); 

module.exports.home = (req, res) => {
    let style = "style.css";
    res.render('registerProducts', {choosenStyle: style});
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


module.exports.shoppingCart = (req,res) =>{
    let id = req.body.id;
    let name = req.body.name;
    let description = req.body.description;
    let quantity = req.body.quantity;
    let price = req.body.price;
    new Product(id,name,description,quantity, price).saveProduct();
    res.redirect(303,'/shoppingcart');
}


module.exports.cartItems = (req,res) =>{
    res.render('itemsincart',{shoppingCartList: Product.getProducts()});
}
