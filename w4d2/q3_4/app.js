const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

const routeHandler = require('./routeHandlers');

app.use(session({
    secret: 'My secret',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

app.use(express.urlencoded({extended : false}));

app.get('/',routeHandler.home);
app.post('/addtocart',routeHandler.addProduct);
app.get('/productlist', routeHandler.productList);
app.get('/shoppingcart', routeHandler.shoppingCart);
app.get('/itemsincart', routeHandler.cartItems);
app.listen(3000,routeHandler.serverMessage);

